import { NextResponse } from "next/server";

const CANONICAL_HOST = "www.lamelodieducorps.com";

// Accent-stripped redirects (handles both encoded and decoded path segments)
const ACCENT_REDIRECTS = {
  "/à-propos": "/a-propos",
  "/mentions-légales": "/mentions-legales",
  "/ménopause": "/menopause-alimentation-guadeloupe",
};

export function middleware(request) {
  const { nextUrl, headers } = request;
  const host = headers.get("host") || "";
  const isProd =
    host === CANONICAL_HOST ||
    host === "lamelodieducorps.com" ||
    host.endsWith(".lamelodieducorps.com");

  // 1) Force HTTPS + www (production only — skip preview / localhost)
  if (isProd) {
    const proto = headers.get("x-forwarded-proto") || nextUrl.protocol.replace(":", "");
    const wantsRedirect = host !== CANONICAL_HOST || proto !== "https";
    if (wantsRedirect) {
      const target = new URL(nextUrl.pathname + nextUrl.search, `https://${CANONICAL_HOST}`);
      return NextResponse.redirect(target, 301);
    }
  }

  // 2) Accent-stripped redirects (e.g. /à-propos → /a-propos)
  const decoded = decodeURIComponent(nextUrl.pathname);
  if (ACCENT_REDIRECTS[decoded]) {
    const target = new URL(ACCENT_REDIRECTS[decoded] + nextUrl.search, nextUrl.origin);
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on everything except Next.js internals, API, and static files
    "/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml).*)",
  ],
};
