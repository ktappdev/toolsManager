import ToolsGrid from "@/app/components/ToolsGrid";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-scroll">
      <div className="text-lg flex items-center justify-evenly w-full bg-slate-200 mb-2 rounded-md">
        <Link className="hover:text-blue-500" href="/mytools">
          All Tools
        </Link>
        <Link className="hover:text-blue-500" href="/">
          Hand Tools
        </Link>
        <Link className="hover:text-blue-500" href="/">
          Power Tools
        </Link>
      </div>
      <ToolsGrid />
    </div>
  );
};

export default page;
