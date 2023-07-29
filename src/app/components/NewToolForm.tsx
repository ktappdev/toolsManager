"use client";
import React, {
  useState,
  ChangeEvent,
  useRef,
  FormEvent,
  useEffect,
} from "react";
import {
  TextField,
  IconButton,
  TextareaAutosize,
} from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Image from "next/image";
import addToolServerAction from "@/app/lib/addToolServerAction";
import { useRouter } from "next/navigation";
import { resizeImage } from "@/app/lib/clientFunctions";
import usePreventZoom from "../lib/preventZoom";
import { useUser } from "@clerk/nextjs";
// import { currentUser } from "@clerk/nextjs/app-beta";
interface AddToolFormProps {}

const NewToolForm: React.FC<AddToolFormProps> = () => {
  usePreventZoom();
  const [toolImage, setToolImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [disableButton, setDisableButton] = useState(false);
  const [buttonText, setButtonText] = useState("Add Tool");
  const [imageAsBase64, setImageAsBase64] = useState<
    string | ArrayBuffer | null
  >("");
  // const queryClient = useQueryClient();
  const { isLoaded, isSignedIn, user } = useUser();
  // console.log(user);

  const [formData, setFormData] = useState({
    toolName: "Test Tool",
    toolImage: null,
    toolCategories: "hand tools, power tools, test equipment",
    toolDescription: "Test Description",
    toolSerialNumber: "Test Serial Number",
    toolBrand: "Test Brand",
    toolCondition: "",
    toolAccessories: "Case, Charger, Manual",
    toolModel: "Test Model",
    addedByUserId: user?.primaryEmailAddress?.emailAddress,
    // createdDate: new Date(),
  });
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
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
      router.push("/toolsvault");
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
    <div className="flex justify-center items-center w-full h-full flex-col pt-12 overflow-scroll">
      <form
        // action={addToolServerAction}
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row justify-center gap-4">
          <div className="flex flex-col justify-center items-center">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-row justify-center items-center hover:bg-gray-100 cursor-pointer rounded-md p-2"
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
          <TextField
            label="Model"
            name="toolModel"
            value={formData.toolModel}
            onChange={handleChange}
            required
            className="w-1/2"
          />
        </div>
        <div className="flex flex-row gap-2 justify-evenly">
          <TextField
            label="#Categories"
            name="toolCategories"
            value={formData.toolCategories.toLocaleLowerCase()}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>
        <div className="flex flex-row gap-2 justify-between w-full">
          <select
            placeholder="Condition"
            name="toolCondition"
            value={formData.toolCondition}
            onChange={handleSelectChange}
            required
            className="w-1/3 border border-gray-300 rounded-md p-2"
          >
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
          <TextField
            label="Accessories"
            name="toolAccessories"
            value={formData.toolAccessories}
            onChange={handleChange}
            required
            className="w-2/3"
          />
        </div>

        <TextareaAutosize
          minRows={2}
          maxRows={2}
          placeholder="Description / Comments"
          value={formData.toolDescription}
          name="toolDescription"
          onChange={handleToolDescriptionChange}
          className="resize-none border-2 border-gray-300 rounded-md p-2"
        />
        <button
          formAction={handleSubmitFromButton}
          disabled={disableButton}
          type="submit"
          className="bg-c-accent-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          // variant="contained"
          // color="primary"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default NewToolForm;
