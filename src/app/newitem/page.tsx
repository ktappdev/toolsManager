import { FC } from "react";
import CameraComponent from "../components/CameraComponent";
import { prisma } from "../lib/prismaClient";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  // const handleFileSelect = (file: File) => {
  //   // Do something with the selected file
  //   console.log(file);
  // };

  const sendToDb = async () => {
    console.log("sending to db");
    const result = await prisma.car.create({
      data: {
        name: "mazda",
        description: "testing 123",
        tags: ["test", "blah blah"],
      },
    });
    console.log(result);
  };

  return (
    <div>
      <div className="text-center">Add New Item</div>
      {/* <CameraComponent onFileSelect={handleFileSelect} /> */}
      <div className="text-center">Add New Item</div>

      <button onClick={sendToDb}>Click Me</button>
    </div>
  );
};

export default page;
