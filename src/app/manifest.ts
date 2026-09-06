import type { MetadataRoute } from "next";
import { SITE } from "@/site.config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: "Physics block-stacking for your phone.",
    start_url: "/",
    display: "browser",
    background_color: "#08070a",
    theme_color: "#08070a",
    icons: [{ src: "/press/icon-512.png", sizes: "512x512", type: "image/png" }],
  };
}
