"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React, { Suspense } from "react";

const NavbarAuth = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </Suspense>
    </>
  );
};

export default NavbarAuth;
