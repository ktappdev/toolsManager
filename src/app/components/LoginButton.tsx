"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  return (
    <>
      {!isSignedIn && isLoaded && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm  mb-6">
            Login if you have an account or signup
          </p>
          <button
            onClick={() => {
              router.push("/sign-in");
            }}
            className="px-4 py-2 bg-c-accent-1 text-white rounded hover:bg-blue-700"
          >
            Login / Sign-up
          </button>
        </div>
      )}
    </>
  );
};

export default LoginButton;
