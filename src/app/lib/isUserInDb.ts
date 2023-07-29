import { prisma } from "@/app/lib/prismaClient";
import { auth } from "@clerk/nextjs/app-beta";
export default async function isUserInDbb() {
  const { sessionClaims } = auth();
  let email = sessionClaims?.email as string;
  const user = await prisma.users.findUnique({
    where: { email },
  });
  if (user) {
    console.log(user, "user found in db and is authorized");
    return true;
  }
  console.log("user not found in db");
  return false;
}
