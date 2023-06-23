import { Suspense } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/nextjs";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome to Tool Manager!</h1>
      <p className="text-sm  mb-6">Login if you have an account</p>
      <LoginButton />
      {/* <button
        onClick={() => {
          router.push("/sign-in");
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Login / Sign-up
      </button> */}
    </div>
  );
}
