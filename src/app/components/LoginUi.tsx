"use client";
import { createBrowserClient } from "@/app/lib/supabase-browser";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { Auth } from "@supabase/auth-ui-react";

export default async function LoginUi() {
  const router = useRouter();
  const supabase = createBrowserClient();

  supabase.auth.onAuthStateChange(async (event) => {
    console.log(event);
    if (event === "SIGNED_IN") {
      router.push("/dashboard");
    }
  });

  return (
    <div className="w-full h-full">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        providers={["google"]}
      />
    </div>
  );
}
