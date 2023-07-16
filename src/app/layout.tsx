// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import MyUserButton from "./components/MyUserButton";
import BackButton from "./components/BackButton";
import QueryProvider from "./lib/QueryProvider";
import { Suspense } from "react";
import Logo from "./components/Logo";

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
              inter.className +
              " antialiased  max-w-2xl mx-auto h-screen flex flex-1 flex-col gap-2 justify-center overflow-clip"
            }
          >
            <header className=" z-10 py-2 fixed top-0 left-0 right-0 flex justify-between items-center  bg-slate-100 dark:bg-gray-900">
              <div className="flex mx-4 font-extrabold gap-4">
                <BackButton />
                <Logo />
              </div>
              <div className="flex mx-4 ">
                <Suspense fallback={<div>Loading...</div>}>
                  <MyUserButton />
                </Suspense>
              </div>
            </header>
            <section className="flex flex-col overflow-scroll pb-[7rem] pt-[5.5rem] h-auto no-scrollbar">
              {/* h-[calc(100vh-100px)] */}
              {children}
            </section>
            <div className=" z-10 fixed bottom-0 left-0 right-0 flex justify-center items-center h-20 bg-c-accent-1 dark:bg-gray-900 dark:text-gray-100 text-gray-900 text-sm font-semibold ">
              <FixedBottomNavigation />
            </div>
          </body>
        </html>
      </QueryProvider>
    </ClerkProvider>
  );
}
