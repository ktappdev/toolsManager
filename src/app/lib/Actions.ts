"use server";
import { revalidatePath } from "next/cache";
import { c } from "./cloudinary";
import imageResizeThenBase64 from "./imageResizeThenBase64";
import { prisma } from "./prismaClient";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
interface ToolData {
  id?: string;
  toolImage?: string | null;
  toolName: string | null;
  toolSerialNumber?: string | null;
  toolBrand?: string | null;
  toolCategories?: string[] | null;
  toolCondition?: string | null;
  toolAccessories?: string[] | null;
  toolDescription?: string | null;
}

const writeToDb = async (data: any) => {
  const prismaResult = await prisma.tools.create({
    data: data,
  });
  return prismaResult;
};

var dbResult: ToolData | null = null;
export default async function ServerComponent(params: FormData) {
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

  if (!toolImageFromFormData) {
    console.log("no image provided");
    dbResult = await writeToDb(data);
    // console.log("db result -", dbResult);
    await continueAfterDbWrite();
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
            data.toolImage = result?.secure_url!;
          }

          dbResult = await writeToDb(data);
          await continueAfterDbWrite();
        }
      )
      .end(smallerFile);
  }

  async function continueAfterDbWrite() {
    revalidatePath("/mytools");
    console.log("revalidated");
  }

  function checkVariable() {
    if (dbResult !== null) {
      console.log("Variable is not null.");
    } else {
      console.log("Variable is null. Waiting for it to become not null...");
      setTimeout(checkVariable, 1000); // Check again after 1 second
    }
  }

  checkVariable();
  console.log(dbResult?.id);
  return redirect(`/tooldetail/${dbResult?.id}`);
}
