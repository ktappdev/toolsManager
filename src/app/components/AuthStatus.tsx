"use client";

import { useSignIn } from "@clerk/nextjs";

export default function AuthStatus() {
  const { isLoaded, signIn } = useSignIn();
  // console.log(signIn);
  if (!isLoaded) {
    // Handle loading state
    return <div>The current sign in attempt status is {isLoaded}.</div>;
    return null;
  }

  return <div>The current sign in attempt status is {signIn.status}.</div>;
}
