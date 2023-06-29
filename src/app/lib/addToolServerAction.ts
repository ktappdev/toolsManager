"use server";
import { revalidatePath } from "next/cache";
import { c } from "./cloudinary";
import imageResizeThenBase64 from "./imageResizeThenBase64";
import prisma from "./prismaClient";
import { iTool } from "./interfaces";

const writeToDb = async (data: any) => {
  const prismaResult = await prisma.tools.create({
    data: data,
  });
  return prismaResult;
};

export default async function addToolServerAction(params: FormData) {
  var dbResult: iTool | null = null;
  let data = {
    toolName: params.get("toolName"),
    toolSerialNumber: params.get("toolSerialNumber"),
    toolBrand: params.get("toolBrand"),
    toolCategories: params.get("toolCategories"),
    toolCondition: params.get("toolCondition"),
    toolAccessories: params.get("toolAccessories"),
    toolDescription: params.get("toolDescription"),
    toolImage: "",
  };
  const toolImageFromFormData = params.get("photo") as Blob | null;

  const uploadToCloudinary = async () => {
    if (!toolImageFromFormData) {
      console.log("no image provided");
      dbResult = await writeToDb(data);
      revalidatePath("/mytools");
    } else {
      const buffer = Buffer.from(await toolImageFromFormData.arrayBuffer());
      let smallerFile = await imageResizeThenBase64(buffer);
      c.uploader
        .upload_stream(
          { resource_type: "image", folder: "tools", use_filename: true },
          async (error, result) => {
            if (error) {
              console.log(error);
              data.toolImage = "image failed to upload";
            } else {
              console.log("starting else");
              data.toolImage = result?.secure_url!;
              await writeToDb(data);
              revalidatePath("/mytools");
            }
          }
        )
        .end(smallerFile);
    }
  };
  uploadToCloudinary();
}
