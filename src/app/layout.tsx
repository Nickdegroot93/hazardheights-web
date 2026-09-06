import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s — ${SITE.name}`,
  },
  description: `${SITE.name} is a physics block-stacking game for iOS and Android. Stack falling bricks into a tower, survive the hazards, keep it standing. Free to play; the one-time purchase unlocks offline play.`,
  openGraph: {
    title: SITE.name,
    description: "Physics block-stacking for your phone. Build the tower, survive the hazards, keep it standing.",
    url: SITE.url,
    siteName: SITE.name,
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${SITE.url}/feed.xml` },
  },
  keywords: [
    "Hazard Heights",
    "physics block stacking game",
    "tower stacking game",
    "offline mobile game",
    "tetromino physics",
    "Android puzzle game",
    "iOS puzzle game",
  ],
};

const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  publisher: { "@type": "Person", name: SITE.developer },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd data={WEBSITE} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
