// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider, SignInButton, UserButton } from "@clerk/nextjs";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import MyAppbar from "./components/MyAppbar";
import NavbarAuth from "./components/NavbarAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Tools Inventory Manager",
  description: "Inventory management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className + " antialiased min-h-full"}>
          <div className="max-w-3xl mx-auto">
            <header className="mb-8 z-10 fixed top-0 left-0 right-0 flex justify-end items-center w-full ">
              <div className="flex m-4 ">
                <NavbarAuth />
              </div>
            </header>
            <div className="flex flex-col justify-center items-center mt-16 w-4xl">
              {/* <div className="flex flex-col h-screen w-full bg-blue dark:bg-gray-900 justify-start items-center"> */}
              {children}
              {/* </div> */}
            </div>
            <div className="z-10 fixed bottom-0 left-0 right-0 flex justify-center items-center w-full dark:bg-gray-900 dark:text-gray-100 text-gray-900 text-sm font-semibold">
              <FixedBottomNavigation />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
