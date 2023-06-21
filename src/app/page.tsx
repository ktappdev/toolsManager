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

  return <div className="border-2"></div>;
}
