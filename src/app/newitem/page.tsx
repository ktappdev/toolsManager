import { FC } from "react";
import CameraComponent from "../components/CameraComponent";
import fetchPost from "@/app/lib/fetchPost";
import { prisma } from "@/app/lib/prismaClient";
import NewItemForm from "../components/NewItemForm";
interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  // const res = await prisma.car.findMany();
  // console.log(res);

  const handleFileSelect = (file: File) => {
    // Do something with the selected file
    console.log(file);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-3/4 lg:w-full mt-4 overflow-auto">
      {/* <div className="text-start mb-4">Add New Item</div> */}
      <NewItemForm />
    </div>
  );
};

export default page;
