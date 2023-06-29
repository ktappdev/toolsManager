import ToolsGrid from "@/app/components/ToolsGrid";
const page = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-scroll">
      <div className="text-lg">All Tools</div>
      {/* fill screen with grid of tools 5 cols */}
      {/* each tool should have a link to the tool page */}
      <ToolsGrid />
    </div>
  );
};

export default page;
