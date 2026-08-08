import type { MetadataRoute } from "next";
import { SITE } from "@/site.config";

const ROUTES = ["", "/privacy", "/terms", "/support", "/delete-account"];

// Required by `output: "export"` — these metadata routes must be emitted at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.6,
  }));
}
