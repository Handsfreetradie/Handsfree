import { next } from "@vercel/functions";

// Google indexed the raw *.vercel.app deployment URL before the custom domain
// was connected, splitting SEO value across two URLs for the same site.
// Redirect it permanently so search engines consolidate onto the real domain.
export default function middleware(request: Request) {
  const url = new URL(request.url);
  if (url.hostname.endsWith(".vercel.app")) {
    url.hostname = "www.handsfreetradie.com.au";
    url.protocol = "https:";
    url.port = "";
    return Response.redirect(url.toString(), 308);
  }
  return next();
}

export const config = {
  // Exclude /api/* - passing API requests through this middleware was
  // dropping the POST method before it reached the serverless function,
  // breaking every form submission on the site.
  matcher: "/((?!api/).*)",
};
