import LoadingSpinner from "@/app/components/LoadingSpinner";
import ToolDetail from "@/app/components/ToolDetailComponent";
const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ToolDetail toolId={params.id} />
    </div>
  );
};

export default page;
