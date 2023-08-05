"use server";
import { prisma } from "./prismaClient";
import { iTool } from "./interfaces";

export const getTools = async () => {
  const tools = await prisma.tools.findMany() as unknown as iTool[]
  return tools;
};

export const getToolDetail = async (id: string) => {
  const tool = await prisma.tools.findUnique({
    where: {
      id: id,
    },
  }) as unknown as iTool

  return tool;
};

export const writeToDb = async (data: any) => {
  const prismaResult = await prisma.tools.create({
    data: data,
  }) as unknown as iTool
  return prismaResult;
};

