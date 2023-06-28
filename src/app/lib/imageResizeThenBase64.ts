import sharp from "sharp";
import React from "react";

const imageResizeThenBase64 = async (params: any) => {
  console.log("about to resize image");
  const resizedImage = await sharp(params).resize(1000).webp().toBuffer();
  console.log("resize complete");
  // const base64Image = resizedImage.toString("base64");

  return resizedImage;
};

export default imageResizeThenBase64;
