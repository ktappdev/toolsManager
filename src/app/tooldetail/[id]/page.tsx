import ToolDetail from "@/app/components/ToolDetailComponent";
import { getToolDetail } from "@/app/lib/serverFunctions";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ToolDetail toolId={params.id} />
    </div>
  );
};

export default page;
