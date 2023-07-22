"use server";
import { prisma } from "./prismaClient";
import { iTool } from "./interfaces";
// import { revalidatePath } from "next/cache";

export const getTools = async () => {
  const tools = await prisma.tools.findMany();
  console.log(typeof tools);
  return tools;
};

export const getToolDetail = async (id: string) => {
  const tool = await prisma.tools.findUnique({
    where: {
      id: id,
    },
  });

  return tool;
};

export const writeToDb = async (data: any) => {
  const prismaResult = await prisma.tools.create({
    data: data,
  });
  return prismaResult;
};

// Function to resize the image
