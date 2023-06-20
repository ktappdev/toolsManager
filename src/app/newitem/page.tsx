"use client";
import { FC } from "react";
import CameraComponent from "../components/CameraComponent";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const handleFileSelect = (file: File) => {
    // Do something with the selected file
    console.log(file);
  };

  return (
    <div>
      <div className="text-center">Add New Item</div>
      <CameraComponent onFileSelect={handleFileSelect} />
    </div>
  );
};

export default page;
