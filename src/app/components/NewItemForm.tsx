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
import Image from "next/image";

interface AddToolFormProps {
  // Define any additional props you may need
}

const NewItemForm: React.FC<AddToolFormProps> = () => {
  const [toolName, setToolName] = useState<string>("");
  const [toolImage, setToolImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [toolDescription, setToolDescription] = useState<string>("");

  const handleToolNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToolName(event.target.value);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setToolImage(URL.createObjectURL(file));
    }
  };

  const handleToolDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setToolDescription(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., sending the data to your API
    console.log("Tool Name:", toolName);
    console.log("Tool Image:", toolImage);
  };

  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
        <div className="flex flex-row gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
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
            value={toolName}
            onChange={handleToolNameChange}
            required
            className="w-1/2"
          />
          <TextField
            label="Serial Number"
            value={toolName}
            onChange={handleToolNameChange}
            required
            className="w-1/2"
          />
        </div>
        <div className="flex flex-row gap-2">
          <TextField
            label="Brand"
            value={toolName}
            onChange={handleToolNameChange}
            required
            className="w-1/2"
          />
          <TextField
            label="Category"
            value={toolName}
            onChange={handleToolNameChange}
            required
            className="w-1/2"
          />
        </div>
        <div className="flex flex-row gap-2 justify-evenly">
          <TextField
            label="Condition"
            value={toolName}
            onChange={handleToolNameChange}
            required
            className="w-1/2"
          />
          <TextField
            label="Something"
            value={toolName}
            onChange={handleToolNameChange}
            required
            className="w-1/2"
          />
        </div>
        <div className="flex flex-row gap-2 justify-evenly">
          <TextField
            label="Condition"
            value={toolName}
            onChange={handleToolNameChange}
            required
            className="w-1/2"
          />
          <TextField
            label="Something"
            value={toolName}
            onChange={handleToolNameChange}
            required
            className="w-1/2"
          />
        </div>

        <TextareaAutosize
          minRows={3}
          maxRows={3}
          placeholder="Tool Description"
          value={toolDescription}
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
