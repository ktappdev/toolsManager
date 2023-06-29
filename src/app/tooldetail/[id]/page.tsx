const page = ({ params }: { params: { id: string } }) => {
  return <div>page {params.id} test</div>;
};

export default page;
