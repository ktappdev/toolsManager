import { createServerClient } from "./supabase-server";

export default async function isLoggedInServer(): Promise<boolean> {
  const supabase = createServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    console.log("not logged in");
    return false;
  }
  return true;
}
