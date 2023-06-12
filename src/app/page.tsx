import Image from "next/image";
import ImageUploader from "./components/ImageUploader";
import { Suspense } from "react";

export default function Home() {
  const handleFileSelect = (file: File) => {
    // Do something with the selected file
    console.log(file);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <input type="file" accept="image/*" capture="environment" /> */}
      <h1>Upload an Image</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageUploader onFileSelect={handleFileSelect} />
      </Suspense>
    </main>
  );
}
