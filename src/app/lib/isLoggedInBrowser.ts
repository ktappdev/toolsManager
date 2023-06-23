import { createBrowserClient } from "./supabase-browser";

const isLoggedInBrowser = async () => {
  const supabase = createBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    console.log("checking from browser... not logged in");
    return false;
  }

  console.log("checking from browser... logged in", user);
  return true;
};

export default isLoggedInBrowser;
