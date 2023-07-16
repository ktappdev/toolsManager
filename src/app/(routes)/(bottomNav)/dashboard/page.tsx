import { FC } from "react";
import DashboardGridUi from "@/app/components/DashboardGridUi";

interface pageProps {}

const page: FC<pageProps> = async ({ }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <div className="text-2xl text-center ">Dashboard</div>
      <DashboardGridUi />
    </div>
  );
};

export default page;
