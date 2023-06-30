import sharp from "sharp";
import React from "react";

const imageResizeThenBase64 = async (params: any) => {
  const resizedImage = await sharp(params)
    .rotate()
    .resize(600)
    .webp()
    .toBuffer();

  return resizedImage;
};

export default imageResizeThenBase64;
