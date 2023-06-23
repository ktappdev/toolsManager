import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import LoginUi from "../../components/LoginUi";

// import type { Database } from "@/lib/database.types";

export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen md:w-1/2 w-full mx-auto px-16  py-2">
      <LoginUi />
    </section>
  );
}
