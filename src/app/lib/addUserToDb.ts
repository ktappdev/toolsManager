// "use server";
import { prisma } from "@/app/lib/prismaClient";
import { auth } from "@clerk/nextjs/app-beta";

export default async function isUserInDbb() {
  const { sessionClaims } = auth();
  let email = sessionClaims?.email as string;
  const user = await prisma.users.create({
    data: {
      email,
    },
  });

  console.log(user, "user added to mongodb");
  return user;
}
