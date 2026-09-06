import type { MetadataRoute } from "next";
import { SITE } from "@/site.config";
import { POSTS } from "@/content/posts";

const ROUTES = ["", "/blog", "/privacy", "/terms", "/support", "/delete-account"];

// Required by `output: "export"` — these metadata routes must be emitted at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ROUTES.map((r) => ({
    url: `${SITE.url}${r}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : r === "/blog" ? 0.8 : 0.6,
  }));
  const posts = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}/`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...posts];
}
