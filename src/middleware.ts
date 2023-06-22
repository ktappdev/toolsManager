import { authMiddleware, useAuth, clerkClient } from "@clerk/nextjs";
// import { useUser, useClerk } from "@clerk/nextjs";
// const { signOut } = useClerk();

const whiteList = ["ktad592@gmail.com"];
// const { userId, sessionId, getToken, isLoaded, isSignedIn, signOut } =
//   useAuth();
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    // check if auth.email is on the whiteList
    if (
      auth.sessionClaims?.email &&
      !whiteList.includes(auth.sessionClaims.email.toString())
    ) {
      console.log("I can implement my own whitelist here using clerk");
      // req.cookies.clear();
    }
  },
});

// export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
