// Importing necessary modules and packages
import { prisma } from "@/app/lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";
import { getAuth, clerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/app-beta";
// Interface representing user data
interface UserDATA {
  avatar?: string;
  azp: string;
  email: string;
  exp: number;
  firstName: string;
  lastName: string;
  fullName: string;
  iat: number;
  iss: string;
  jti: string;
  nbf: number;
  sub: string;
  userId: string;
  userName: string;
  metadata: { userInDb: boolean; id: string };
}

// Exporting the POST function that handles the API request
export async function POST(request: NextRequest) {
  // Extracting session claims from the request the old way
  const sessionClaims = auth();

  if (!sessionClaims) {
    // not necessary since the middleware will stop them
    return NextResponse.json({
      success: false,
      status: 401,
      data: "not signed in",
    });
  }

  const body: any = await request.json();

  // Casting the session claims to UserDATA type
  const clerkUserData = sessionClaims as unknown as UserDATA;

  // Logging the user data received
  console.log(
    "create user api just got hit with this user data",
    clerkUserData
  );

  return NextResponse.json({
    success: true,
    status: 200,
    data: sessionClaims,
  });
}
