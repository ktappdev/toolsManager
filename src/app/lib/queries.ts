"use server";
import { prisma } from "./prismaClient";

export const getTools = async () => {
  const tools = await prisma.tools.findMany();
  console.log(tools);
  return tools;
};
