import { NextResponse } from "next/server";

export function middleware(request) {
  const sessionCookie = request.cookies.get("better-auth.session_token");

  if (
    !sessionCookie &&
    request.nextUrl.pathname.startsWith(
      "/https://category-a8-orange.vercel.app/courses",
    )
  ) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: ["/courses/:path*"],
// };
