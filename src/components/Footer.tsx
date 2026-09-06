import Link from "next/link";
import { SITE } from "@/site.config";

const LINKS = [
  { href: "/blog/", label: "Blog" },
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
  { href: "/support/", label: "Support" },
  { href: "/delete-account/", label: "Delete your data" },
];

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="display text-sm tracking-widest">{SITE.name}</p>
            <p className="mt-2 text-sm text-muted">{SITE.domain}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} {SITE.developer}. {SITE.name} and its artwork are
          the property of their owner. Apple and App Store are trademarks of Apple Inc.
          Google Play is a trademark of Google LLC.
        </p>
      </div>
    </footer>
  );
}
