"use client";
import React, {
  useState,
  ChangeEvent,
  useRef,
  FormEvent,
  useEffect,
} from "react";
import { TextField, Button, IconButton, TextareaAutosize } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Image from "next/image";
import addToolServerAction from "@/app/lib/addToolServerAction";
import { useRouter } from "next/navigation";
import { resizeImage } from "@/app/lib/clientFunctions";
import { base64StringToBlob } from "blob-util";
// import { useQueryClient } from "@tanstack/react-query";

interface AddToolFormProps {}

const NewItemForm: React.FC<AddToolFormProps> = () => {
  const [toolImage, setToolImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [disableButton, setDisableButton] = useState(false);
  const [buttonText, setButtonText] = useState("Add Tool");
  const [imageAsBase64, setImageAsBase64] = useState<
    string | ArrayBuffer | null
  >(null);
  // const queryClient = useQueryClient();

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
      setToolImage(toolImage);
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        setImageAsBase64(reader.result);
      };
      reader.onerror = function (error) {
        console.log("base64 Error: ", error);
      };
    }
  };

  useEffect(() => {
    if (imageAsBase64 !== null) {
      const run = async () => {
        let resizedImage = await resizeImage(imageAsBase64 as string);
        return resizedImage as string;
      };
      run().then((smallFile) => {
        fileInputRef.current!.src = smallFile;
        setToolImage(smallFile);
        let imageAsBlob = base64StringToBlob(toolImage as string);
      });
    }
  }, [imageAsBase64]);

  const handleToolDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    // console.log(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["toolDescription"]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    setDisableButton(true);
    setButtonText("Adding Tool...");
    setTimeout(function () {
      // queryClient.invalidateQueries(["tools"]);
      router.push("/mytools");
    }, 4000);
  };

  async function handleSubmitFromButton(params: FormData) {
    params.delete("toolImage");
    params.set("toolImage", toolImage as string);
    // console.log("image in handlesubmit from button", toolImage);
    addToolServerAction(params); //this triggers the server action
  }
  //action={Actions} //"/api/upload" // encType="multipart/form-data"
  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <form
        // action={addToolServerAction}
        className="flex w-full flex-col gap-2"
        onSubmit={handleSubmit}
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
                src={toolImage ? toolImage : "/assets/defaultTool.jpg"}
              />
              <IconButton>
                <CameraAltOutlinedIcon />
              </IconButton>

              <Image
                // ref={imageRef}
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
          minRows={3}
          maxRows={3}
          placeholder="Description / Comments"
          value={formData.toolDescription}
          name="toolDescription"
          onChange={handleToolDescriptionChange}
          className="resize-none border-2 border-gray-300 rounded-md p-2"
        />
        <Button
          formAction={handleSubmitFromButton}
          disabled={disableButton}
          type="submit"
          variant="contained"
          color="primary"
        >
          {buttonText}
        </Button>
      </form>
    </div>
  );
};

export default NewItemForm;
