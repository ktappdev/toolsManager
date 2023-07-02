import ToolsGrid from "@/app/components/ToolsGrid";
const page = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-scroll">
      <div className="text-lg">All Tools</div>
      <ToolsGrid />
    </div>
  );
};

export default page;
