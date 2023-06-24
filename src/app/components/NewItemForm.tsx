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
        {toolImage && <img src={toolImage} alt="Tool" />}

        <TextField
          label="Tool Name"
          value={toolName}
          onChange={handleToolNameChange}
          required
        />
        <TextField
          label="Serial Number"
          value={toolName}
          onChange={handleToolNameChange}
          required
        />
        <TextField
          label="Category"
          value={toolName}
          onChange={handleToolNameChange}
          required
        />
        <TextField
          label="Colour"
          value={toolName}
          onChange={handleToolNameChange}
          required
        />
        <TextareaAutosize
          minRows={3}
          maxRows={3}
          placeholder="Tool Description"
          value={toolDescription}
          onChange={handleToolDescriptionChange}
        />

        <Button type="submit" variant="contained" color="primary">
          Add Tool
        </Button>
      </form>
    </div>
  );
};

export default NewItemForm;
