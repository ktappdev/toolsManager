"use client";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/sign-in");
      }}
      className="px-4 py-2 bg-c-accent-1 text-white rounded hover:bg-blue-700"
    >
      Login / Sign-up
    </button>
  );
};

export default LoginButton;
