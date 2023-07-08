import ToolsGrid from "@/app/components/ToolsGrid";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-auto">
      <div className="text-lg flex items-center justify-evenly w-full bg-gray-200 mb-2 rounded-md fixed top-12 z-20 p-2 shadow-md">
        <Link className="hover:text-blue-500 hover:underline" href="/toolsvault">
          All Tools
        </Link>
        <Link className="hover:text-blue-500 hover:underline" href="/">
          Hand Tools
        </Link>
        <Link className="hover:text-blue-500 hover:underline" href="/">
          Power Tools
        </Link>
      </div>
      <ToolsGrid />
    </div>
  );
};

export default page;
