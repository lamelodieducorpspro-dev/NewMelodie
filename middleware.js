import { NextResponse } from "next/server";

/**
 * Canonical host strategy for lamelodieducorps.com
 * --------------------------------------------------
 * Reality (as of May 2026): Emergent / Cloudflare automatically redirects
 * www.lamelodieducorps.com -> lamelodieducorps.com (308). This happens
 * BEFORE the request reaches Next.js, so middleware cannot reverse it.
 *
 * Strategy: align with what the platform enforces -> canonical = non-www.
 * If you ever flip the platform to prefer www, just swap CANONICAL_HOST below.
 */
const CANONICAL_HOST = "lamelodieducorps.com";
const ALL_PROD_HOSTS = new Set([
  "lamelodieducorps.com",
  "www.lamelodieducorps.com",
]);

// Accent-stripped redirects (kept as a map for clarity).
// We compare the *decoded* pathname so both raw and percent-encoded
// forms (e.g. "/%C3%A0-propos") are caught.
const ACCENT_REDIRECTS = {
  "/à-propos": "/a-propos",
  "/mentions-légales": "/mentions-legales",
  "/ménopause": "/menopause-alimentation-guadeloupe",
};

export function middleware(request) {
  const { nextUrl, headers } = request;
  const host = (headers.get("host") || "").toLowerCase();
  const proto = (headers.get("x-forwarded-proto") || nextUrl.protocol.replace(":", "")).toLowerCase();
  const isProdHost = ALL_PROD_HOSTS.has(host);

  // ---- 1) Force HTTPS + canonical host on production hosts ----
  // Skip when running on preview/localhost so dev keeps working.
  if (isProdHost) {
    const needsHttps = proto !== "https";
    const needsCanonicalHost = host !== CANONICAL_HOST;
    if (needsHttps || needsCanonicalHost) {
      const target = new URL(
        nextUrl.pathname + nextUrl.search,
        `https://${CANONICAL_HOST}`
      );
      return NextResponse.redirect(target, 301);
    }
  }

  // ---- 2) Accent-stripped 301 redirects ----
  // decodeURIComponent handles "%C3%A0" / "%C3%A9" / etc.
  let decoded = nextUrl.pathname;
  try {
    decoded = decodeURIComponent(nextUrl.pathname);
  } catch {
    /* keep raw */
  }
  if (ACCENT_REDIRECTS[decoded]) {
    const target = new URL(
      ACCENT_REDIRECTS[decoded] + nextUrl.search,
      nextUrl.origin
    );
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on every route EXCEPT Next internals, API, and static files.
    // (Including /_next/static, /_next/image, /_next/data, favicon, images, robots, sitemap.)
    "/((?!_next/static|_next/image|_next/data|api|favicon\\.ico|images|robots\\.txt|sitemap\\.xml).*)",
  ],
};
