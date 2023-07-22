import { prisma } from "@/app/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const reviews = await prisma.tools.findMany({
      where: { isInVault: true },
    //   include: {
    //     user: body.include.user,
    //     item: body.include.item,
    //   },
    });
    return NextResponse.json({
      success: true,
      status: 200,
      dataLength: reviews.length,
      data: reviews,
    });
  } catch (error) {
    let e = error as Error;
    return NextResponse.json({
      success: false,
      status: 500,
      data: e.message.slice(0, 500) + "...",
    });
  }
}
