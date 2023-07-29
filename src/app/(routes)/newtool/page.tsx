import { FC } from "react";
import NewToolForm from "../../components/NewToolForm";
import addUserToDb from "@/app/lib/addUserToDb";
import isUserInDb from "@/app/lib/isUserInDb";
interface pageProps {}

export default async function page() {
  // const res = await prisma.car.findMany();
  // console.log(res);
  if ((await isUserInDb()) === false) {
    addUserToDb();
  }
  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4 lg:px-0 ">
      {/* <div className="text-start mb-4">Add New Item</div> */}
      <NewToolForm />
    </div>
  );
}
