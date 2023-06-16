import { Suspense } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function Home() {
  const handleFileSelect = (file: File) => {
    // Do something with the selected file
    console.log(file);
  };

  return (
    <div className="">
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </Suspense>
      </>

      {/* <MyAppbar /> */}
      {/* <NavbarAuth /> */}
      {/* <div className="z-10 fixed bottom-0 left-0 right-0 flex justify-center items-center w-full h-20 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 text-gray-900 text-sm font-medium">
        <FixedBottomNavigation />
      </div> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <ImageUploader onFileSelect={handleFileSelect} />
      </Suspense> */}
    </div>
  );
}
