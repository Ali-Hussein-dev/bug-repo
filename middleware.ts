import { NextRequest, NextResponse, NextMiddleware } from "next/server";

export const middleware: NextMiddleware = (req: NextRequest) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  const response = NextResponse.next();
  const PUBLIC_FILE = /\.(.*)$/;
  if (
    pathname.startsWith("/_next") || // exclude Next.js internals
    pathname.startsWith("/api") || //  exclude all API routes
    pathname.startsWith("/static") || // exclude static files
    PUBLIC_FILE.test(pathname) // exclude all files in the public folder
  )
    return response;
  const id = pathname.split("/")[2];

  if (pathname.startsWith("/nested/")) {
    if (["1", "2"].includes(id)) {
      console.log("nested");
      return response;
    } else return NextResponse.redirect(new URL("/not-found", req.url));
  }
};
