import sharp from "sharp";
import React from "react";

const imageResizeThenBase64 = async (params: any) => {
  const resizedImage = await sharp(params).resize(1000).webp().toBuffer();
  // const base64Image = resizedImage.toString("base64");

  return resizedImage;
};

export default imageResizeThenBase64;
