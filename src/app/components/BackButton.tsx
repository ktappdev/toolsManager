"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <>
      <Button variant="text" onClick={() => router.back()}>
        Back
      </Button>
      {/* <button className="back-button">Back</button> */}
    </>
  );
};

export default BackButton;
