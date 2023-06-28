// app/api/upload
import { c } from "@/app/lib/cloudinary";
import { NextRequest, NextResponse } from "next/server";
// import { Readable } from "stream";
import { clerkClient, getAuth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  // const { sessionClaims } = getAuth(request);
  const formData = await request.formData();
  console.log("this is formdata", formData);

  const file = formData.get("photo") as Blob | null;
  if (!file) {
    console.log("error");
    return;
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  c.uploader
    .upload_stream({}, (error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
    })
    .end(buffer);
  return NextResponse.json({ error: "Something " }, { status: 201 });
}
