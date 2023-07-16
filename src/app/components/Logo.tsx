"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <>
      <Image
        src="/assets/icons/icon-48x48.png"
        alt="logo"
        width={28}
        height={28}
        onClick={() => router.push("/")}
        className="hover:cursor-pointer"
      />
    </>
  );
};

export default Logo;
