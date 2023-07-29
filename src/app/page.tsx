import LoginButton from "./components/LoginButton";
import Image from "next/image";
export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image src="/icon.png" alt="icon" width={150} height={150} />
      <h1 className="text-2xl font-bold">Tools Manager </h1>
      <LoginButton />
    </div>
  );
}
