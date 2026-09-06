import Link from "next/link";
import { SITE } from "@/site.config";

export function Header() {
  return (
    // Transparent over the hero art — HeroBackground lays a scrim under it for contrast.
    <header className="sticky top-0 z-50 bg-background/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="display text-sm tracking-widest text-foreground">
          {SITE.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted">
          <Link href="/blog/" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/support/" className="hover:text-foreground transition-colors">
            Support
          </Link>
          <Link href="/privacy/" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms/" className="hover:text-foreground transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
}
