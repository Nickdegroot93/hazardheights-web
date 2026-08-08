import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static output: deploys to Vercel, Cloudflare Pages, GitHub Pages or an
  // S3 bucket with no server runtime. `next build` writes ./out.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
