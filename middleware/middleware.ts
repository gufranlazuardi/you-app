import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore routes starting with /api and /_next
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/")
  ) {
    return NextResponse.next();
  }

  // Retrieve the token from the cookie
  const token = request.cookies.get("token")?.value;
  const allowedRoutes = ["/login", "/register"];
  const isRouteAllowed = allowedRoutes.some((prefix) =>
    pathname.startsWith(prefix)
  );

  // Redirect to login if no token
  if (!token) {
    if (isRouteAllowed) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to home page if logged in
  if (isRouteAllowed && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
