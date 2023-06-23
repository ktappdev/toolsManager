import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import type { Database } from "@/lib/database.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<any>({ req, res });
  // await supabase.auth.getSession();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log("middleware running");

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // if (!session && req.nextUrl.pathname === "/api/test") {
  //   console.log("not logged in to use api");
  //   // return;
  // }
  // console.log(session);

  if (session && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  if (!session && req.nextUrl.pathname.startsWith("/api")) {
    console.log("not logged in to use api");
    return;
  }
  // // if user is not signed in and the current path is not / redirect the user to /
  // if (!session && req.nextUrl.pathname !== "/") {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

  return res;
}

export const config = {
  matcher: ["/", "/account", "/api"],
};
