"use server";
import { c } from "./cloudinary";
import imageResizeThenBase64 from "./imageResizeThenBase64";
import { prisma } from "./prismaClient";

const writeToDb = async (data: any) => {
  const dbResult = await prisma.tools.create({
    data: data,
  });
  return dbResult;
};

export default async function ServerComponent(params: any) {
  let dbResult;
  const file = params.get("photo") as Blob | null;
  if (!file) {
    console.log("no image provided");
    let data = {
      toolName: params.get("toolName"),
      toolSerialNumber: params.get("toolSerialNumber"),
      toolBrand: params.get("toolBrand"),
      toolCategories: params.get("toolCategories"),
      toolCondition: params.get("toolCondition"),
      toolAccessories: params.get("toolAccessories"),
      toolDescription: params.get("toolDescription"),
    };
    dbResult = await writeToDb(data);
    console.log("db result -", dbResult);
  } else {
    const buffer = Buffer.from(await file.arrayBuffer());

    let smallerFile = await imageResizeThenBase64(buffer);

    c.uploader
      .upload_stream(
        { resource_type: "image", folder: "tools", use_filename: true },
        async (error, result) => {
          if (error) {
            console.log(error);
          }
          console.log(result);

          let data = {
            toolName: params.get("toolName"),
            toolSerialNumber: params.get("toolSerialNumber"),
            toolImage: result?.url,
            toolBrand: params.get("toolBrand"),
            toolCategories: params.get("toolCategories"),
            toolCondition: params.get("toolCondition"),
            toolAccessories: params.get("toolAccessories"),
            toolDescription: params.get("toolDescription"),
          };
          dbResult = await writeToDb(data);
          console.log("db result -", dbResult);
        }
      )
      .end(smallerFile);
  }
}
