// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import MyUserButton from "./components/MyUserButton";
import BackButton from "./components/BackButton";
import QueryProvider from "./lib/QueryProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  icon: "/favicon.ico",
  title: "Toolsmaster",
  description:
    "Toolmaster is a web app that simplifies workplace tool management. Easily track, assign, and monitor tools, ensuring efficient usage and reducing loss",
  "theme-color": "#1976d2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <html lang="en">
          <body
            className={
              inter.className + " antialiased min-h-screen overflow-clip"
            }
          >
            <div className="max-w-3xl mx-auto h-full">
              <header className=" z-10 py-2 fixed top-0 left-0 right-0 flex justify-between items-center w-full bg-slate-100 dark:bg-gray-900">
                <div className="flex mx-4 font-extrabold gap-2">
                  <BackButton />
                  {/* <Logo /> */}
                </div>
                <div className="flex mx-4 ">
                  <Suspense fallback={<div>Loading...</div>}>
                    <MyUserButton />
                  </Suspense>
                </div>
              </header>
              <div className="flex flex-col justify-center items-center w-full h-[calc(100vh-180px)] mt-14">
                {children}
              </div>
              <div className="z-10 fixed bottom-0 left-0 right-0 flex justify-center items-center w-full h-24 bg-c-accent-1 dark:bg-gray-900 dark:text-gray-100 text-gray-900 text-sm font-semibold">
                <FixedBottomNavigation />
              </div>
            </div>
          </body>
        </html>
      </QueryProvider>
    </ClerkProvider>
  );
}
