import isLoggedInServer from "@/app/lib/isLoggedInServer";
import { prisma } from "@/app/lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";

interface Car {
  body: string;
}
// Exporting the POST function that handles the API request
export async function POST(request: NextRequest) {
  if ((await isLoggedInServer()) !== true) {
    console.log("not logged in on dashboard");
    return NextResponse.json({
      success: false,
      status: 401,
      data: "please login",
    });
  }
  // Get the review data from the request body
  const body = await request.json();
  const result = await prisma.car.create({
    data: {
      name: body.data,
      description: "testing 123",
      tags: ["test", "blah blah"],
    },
  });

  return NextResponse.json({
    success: true,
    status: 200,
    data: result,
  });
}
