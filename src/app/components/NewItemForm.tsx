"use client";
import React, { useState, ChangeEvent, useRef, FormEvent } from "react";
import {
  TextField,
  Button,
  IconButton,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Image from "next/image";
import Actions from "@/app/lib/Actions";
import { QueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
interface AddToolFormProps {
  // Define any additional props you may need
}

const NewItemForm: React.FC<AddToolFormProps> = () => {
  const [toolImage, setToolImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [toolDescription, setToolDescription] = useState<string>("");
  const [formData, setFormData] = useState({
    toolName: "t",
    toolImage: null,
    toolCategories: "h",
    toolDescription: "g",
    toolSerialNumber: "yu",
    toolBrand: "yh",
    toolCondition: "j",
    toolAccessories: "j",
  });
  const router = useRouter();
  // const handleToolNameChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setToolName(event.target.value);
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      let imageFromFile = URL.createObjectURL(file);
      console.log(imageFromFile);

      setToolImage(imageFromFile);
      setToolImage(imageFromFile);
      // setFormData((prevFormData) => ({
      //   ...prevFormData,
      //   ["toolImage"]: imageFromFile,
      // }));
      console.log(imageFromFile);
    }
  };

  const handleToolDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(event.target.value);
    // setToolDescription(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["toolDescription"]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("Tool Name:", formData);
  };
  //action={Actions} //"/api/upload" // encType="multipart/form-data"
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <form
        action={Actions}
        className="flex w-full flex-col gap-4"
        // onSubmit={() => {
        //   setTimeout(function () {
        //     // revalidatePath("/mytools");
        //     router.push("/mytools");
        //   }, 2000);
        // }}
      >
        <div className="flex flex-row gap-1 justify-center">
          <div className="flex flex-col justify-center items-center">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-row gap-1 justify-center items-center hover:bg-gray-100 cursor-pointer rounded-md p-2"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
                name="photo"
              />
              <IconButton

              // className="gap-2"
              >
                <CameraAltOutlinedIcon />
              </IconButton>

              <Image
                src={toolImage || "/assets/defaultTool.jpg"}
                alt="Tool"
                width={40}
                height={40}
                placeholder="empty"
              />
            </div>
            <p className="text-center text-xs"> Add Tool Image</p>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <TextField
            label="Tool Name"
            name="toolName"
            value={formData.toolName}
            onChange={handleChange}
            required
            className="w-1/2"
          />
          <TextField
            label="Serial Number"
            name="toolSerialNumber"
            value={formData.toolSerialNumber}
            onChange={handleChange}
            required
            className="w-1/2"
          />
        </div>
        <div className="flex w-full flex-row gap-2">
          <TextField
            label="Brand"
            name="toolBrand"
            value={formData.toolBrand}
            onChange={handleChange}
            required
            className="w-1/2"
          />
          <div className="flex w-1/2 flex-row gap-2">
            <TextField
              label="Category"
              name="toolCategories"
              value={formData.toolCategories}
              onChange={handleChange}
              required
              className="w-full"
            />
            <div className="flex flex-row flex-1 justify-center items-center">
              <IconButton
                onClick={() => {
                  console.log("clicked new category");
                }}
              >
                <PlaylistAddIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-evenly">
          <TextField
            label="Condition"
            name="toolCondition"
            value={formData.toolCondition}
            onChange={handleChange}
            required
            className="w-1/2"
          />
          <TextField
            label="Accessories"
            name="toolAccessories"
            value={formData.toolAccessories}
            onChange={handleChange}
            required
            className="w-1/2"
          />
        </div>

        <TextareaAutosize
          minRows={4}
          maxRows={4}
          placeholder="Description / Comments"
          value={formData.toolDescription}
          name="toolDescription"
          onChange={handleToolDescriptionChange}
          className="resize-none border-2 border-gray-300 rounded-md p-2"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Tool
        </Button>
      </form>
    </div>
  );
};

export default NewItemForm;
