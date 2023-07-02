import ToolDetail from "@/app/components/ToolDetailComponent";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <ToolDetail toolId={params.id} />
    </div>
  );
};

export default page;
