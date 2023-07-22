import { FC } from "react";
import NewToolForm from "../../components/NewToolForm";
interface pageProps {}

export default async function page() {
  // const res = await prisma.car.findMany();
  // console.log(res);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 lg:px-0 ">
      {/* <div className="text-start mb-4">Add New Item</div> */}
      <NewToolForm />
    </div>
  );
}
