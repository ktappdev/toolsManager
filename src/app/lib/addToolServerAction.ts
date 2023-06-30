"use server";
import { revalidatePath } from "next/cache";
import { c } from "./cloudinary";
import imageResizeThenBase64 from "./imageResizeThenBase64";
import { iTool } from "./interfaces";
import { writeToDb } from "./serverFunctions";

export default async function addToolServerAction(params: FormData) {
  const PLACEHOLDER_IMAGE =
    "https://res.cloudinary.com/dhglzlaqf/image/upload/v1688140420/myassets/placeholder_jpxutd.png";
  // var dbResult: iTool | null = null;
  let data = {
    toolName: params.get("toolName"),
    toolSerialNumber: params.get("toolSerialNumber"),
    toolBrand: params.get("toolBrand"),
    toolCategories: params.get("toolCategories"),
    toolCondition: params.get("toolCondition"),
    toolAccessories: params.get("toolAccessories"),
    toolDescription: params.get("toolDescription"),
    toolImage: params.get("toolImage") as string,
  };
  // const toolImageFromFormData = params.get("photo") as Blob | null;

  try {
    console.log(data.toolImage);
    if (data.toolImage === null) {
      data.toolImage = PLACEHOLDER_IMAGE;
    }
    let imageUploadReport = await c.uploader.upload(data.toolImage, {
      resource_type: "image",
      folder: "tools",
    });
    data.toolImage = imageUploadReport.secure_url;
    let databaseReport = await writeToDb(data);
    revalidatePath("/mytools");
    console.log(imageUploadReport);
    console.log(databaseReport);
  } catch (error) {
    console.log(error);
  }
  //   if (!toolImageFromFormData) {
  //     console.log("no image provided");
  //     var dbResult = await writeToDb(data);
  //     revalidatePath("/mytools");
  //   } else {
  //     try {
  //       const buffer = Buffer.from(await toolImageFromFormData.arrayBuffer());
  //       let smallerFile = await imageResizeThenBase64(buffer);
  //       c.uploader
  //         .upload_stream(
  //           { resource_type: "image", folder: "tools", use_filename: true },
  //           async (error, result) => {
  //             if (error) {
  //               console.log(error);
  //               data.toolImage = "image failed to upload";
  //             } else {
  //               console.log("starting else");
  //               data.toolImage = result?.secure_url!;
  //               var dbResult = await writeToDb(data);
  //               revalidatePath("/mytools");
  //             }
  //           }
  //         )
  //         .end(buffer); //replace this with smallerfile
  //     } catch (e) {
  //       console.log("this is the error from server action", e);
  //     }
  //   }
}
