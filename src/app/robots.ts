import type { MetadataRoute } from "next";
import { SITE } from "@/site.config";

// Required by `output: "export"` — these metadata routes must be emitted at build time.
export const dynamic = "force-static";

// Everything is public. AI answer engines are listed explicitly so a future "block bots"
// default in a hosting layer never silently drops them — being cited by them is the point.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
