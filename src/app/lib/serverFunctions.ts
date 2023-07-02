"use server";
import { prisma } from "./prismaClient";
import { iTool } from "./interfaces";

export const getTools = async (): Promise<iTool[]> => {
  const tools: iTool[] = await prisma.tools.findMany();
  return tools;
};
export const getToolDetail = async (id: string) => {
  //: Promise<iTool>
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
