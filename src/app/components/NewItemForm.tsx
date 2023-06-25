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

interface AddToolFormProps {
  // Define any additional props you may need
}

const NewItemForm: React.FC<AddToolFormProps> = () => {
  const [toolImage, setToolImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [toolDescription, setToolDescription] = useState<string>("");
  const [formData, setFormData] = useState({
    toolName: "",
    toolImage: "",
    category: "",
    toolDescription: "",
    serialNumber: "",
    purchaseDate: Date,
    brand: "",
    condition: "",
    accessories: ",",
    // Add more fields as needed
  });
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
      setToolImage(imageFromFile);
      setToolImage(imageFromFile);
      setFormData((prevFormData) => ({
        ...prevFormData,
        ["toolImage"]: imageFromFile,
      }));
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
    console.log("Tool Name:", formData, toolImage);
  };

  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <div className="flex flex-row gap-2 justify-center">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
            name="photo"
          />
          <IconButton
            onClick={() => fileInputRef.current?.click()}
            className="gap-2"
          >
            <CameraAltOutlinedIcon />
            <Typography>Add Tool Image</Typography>
          </IconButton>
          {toolImage && (
            <Image src={toolImage} alt="Tool" width={40} height={40} />
          )}
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
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
            required
            className="w-1/2"
          />
        </div>
        <div className="flex w-full flex-row gap-2">
          <TextField
            label="Brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            className="w-1/2"
          />
          <div className="flex w-1/2 flex-row gap-2">
            <TextField
              label="Category"
              name="category"
              value={formData.category}
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
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            className="w-1/2"
          />
          <TextField
            label="Accessories"
            name="accessories"
            value={formData.accessories}
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
          name="description"
          onChange={handleToolDescriptionChange}
          // style={{ resize: "none" }}
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
