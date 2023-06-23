import { FC } from "react";
import isLoggedInServer from "@/app/lib/isLoggedInServer";
import { redirect } from "next/navigation";
import DashboardGridUi from "@/app/components/DashboardGridUi";
import { createServerClient } from "@/app/lib/supabase-server";

interface pageProps {}

const page: FC<pageProps> = async () => {
  if ((await isLoggedInServer()) !== true) {
    console.log("not logged in on dashboard");
    redirect("/");
  }
  // const supabase = createServerClient();
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();
  // if (!session) {
  //   redirect("/");
  // }
  // console.log(session);

  return (
    <div className="grid grid-cols-1 justify-start items-center w-full">
      <div className="text-2xl text-center mb-4 w-full">Dashboard</div>
      <DashboardGridUi />
    </div>
  );
};

export default page;
