import { Suspense } from "react";

import LoginUi from "@/app/components/LoginUi";

export default function Home() {
  return (
    <main className="flex min-h-screen px-12 w-full md:w-3/4 flex-col items-center justify-center">
      <div>
        <h1>Tools Manager Login</h1>
      </div>
      <LoginUi />
    </main>
  );
}
