import type { MetadataRoute } from "next";
import { SITE } from "@/site.config";

// Required by `output: "export"` — these metadata routes must be emitted at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
