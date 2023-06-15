// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import MyAppbar from "./components/MyAppbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
        <body className={inter.className + " antialiased"}>
          <div className="max-w-4xl mx-auto">
            {/* <header className="mb-8 z-10 fixed top-0 left-0 right-0">
              <MyAppbar />
            </header> */}
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col mt-4 w-full pb-44 bg-white dark:bg-gray-900 justify-center items-center">
                {children}
              </div>
            </div>
            <div className="z-10 fixed bottom-0 left-0 right-0 flex justify-center items-center w-full h-30 dark:bg-gray-900 dark:text-gray-100 text-gray-900 text-sm font-medium">
              <FixedBottomNavigation />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
