"use server";
import { prisma } from "./prismaClient";
import { iTool } from "./interfaces";

export const getTools = async (): Promise<iTool[]> => {
  const tools: iTool[] = await prisma.tools.findMany();
  console.log(tools);
  return tools;
};

