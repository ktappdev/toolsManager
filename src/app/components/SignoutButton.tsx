"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@/app/lib/supabase-browser";
interface pageProps {}
const SignoutButton: FC<pageProps> = ({}) => {
  const router = useRouter();

  const supabase = createBrowserClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default SignoutButton;
