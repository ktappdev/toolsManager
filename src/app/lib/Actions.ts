"use server";
import { c } from "./cloudinary";
import imageResizeThenBase64 from "./imageResizeThenBase64";
import { prisma } from "./prismaClient";

const writeToDb = async (data: any) => {
  const dbResult = await prisma.tool.create({
    data: data,
  });
  return dbResult;
};

export default async function ServerComponent(params: any) {
  const file = params.get("photo") as Blob | null;
  if (!file) {
    console.log("no image provided");
  } else {
    const buffer = Buffer.from(await file.arrayBuffer());

    let smallerFile = await imageResizeThenBase64(buffer);

    c.uploader
      .upload_stream(
        { resource_type: "image", folder: "tools", use_filename: true },
        (error, result) => {
          if (error) {
            console.log(error);
          }
          console.log(result);

          let data = {
            toolName: params.get("toolName"),
            serialNumber: params.get("toolDescription"),
            toolImage: result?.url,
            brand: params.get("brand"),
            category: params.get("category"),
            condition: params.get("condition"),
            accessories: params.get("accessories"),
            description: params.get("description"),
          };
          writeToDb(data);
        }
      )
      .end(smallerFile);
    console.log("end");
  }
}
