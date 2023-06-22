import { createBrowserClient } from "./supabase-browser";
const isLoggedIn = async () => {
  const supabase = createBrowserClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    console.log("not logged in");
    return false;
  }
  return true;
};

export default isLoggedIn;
