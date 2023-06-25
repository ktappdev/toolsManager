import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Tools Manager</h1>
      <p className="text-sm  mb-6">Login if you have an account</p>
      <LoginButton />
    </div>
  );
}
