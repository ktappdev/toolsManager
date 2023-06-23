import { FC } from "react";
import SignoutButton from "@/app/components/SignoutButton";
import { redirect } from "next/navigation";
import isLoggedInServer from "@/app/lib/isLoggedInServer";

interface pageProps {}

const Account: FC<pageProps> = async ({}) => {
  // const supabase = createServerClient();
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  // if (!session) {
  //   redirect("/");
  // }

  if ((await isLoggedInServer()) !== true) {
    console.log("not logged in on dashboard");
    redirect("/");
  }

  return (
    <div>
      <h1>Account page</h1>

      <SignoutButton />
    </div>
  );
};

export default Account;
