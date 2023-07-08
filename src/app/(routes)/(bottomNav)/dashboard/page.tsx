import { FC } from "react";
import DashboardGridUi from "@/app/components/DashboardGridUi";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <div className="grid grid-cols-1 justify-start items-center w-full overflow-clip">
      <div className="text-2xl text-center mb-4 w-full">Dashboard</div>
      <DashboardGridUi />
    </div>
  );
};

export default page;
