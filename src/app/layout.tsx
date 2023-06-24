// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import MyUserButton from "./components/MyUserButton";

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
      <html lang="en">
        <body className={inter.className + " antialiased min-h-screen"}>
          <div className="max-w-3xl mx-auto h-screen">
            <header className=" z-10 fixed top-0 left-0 right-0 flex justify-end items-center w-full ">
              <div className="flex m-4 ">
                <MyUserButton />
              </div>
            </header>
            <div className="flex flex-1 flex-col justify-center items-center w-full h-full border-2">
              {children}
            </div>
            <div className="z-10 fixed bottom-0 left-0 right-0 flex justify-center items-center w-full h-24 bg-c-accent-1 dark:bg-gray-900 dark:text-gray-100 text-gray-900 text-sm font-semibold">
              <FixedBottomNavigation />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
