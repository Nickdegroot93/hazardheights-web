import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/content/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the Hazard Heights team: offline mobile games, physics stacking, and how the game is built.",
  alternates: { canonical: "/blog/" },
};

export default function Blog() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="display text-3xl sm:text-4xl">Blog</h1>
      <p className="mt-4 text-muted">
        Guides, comparisons and developer notes. Written to answer the question in the title,
        not to sell you something.
      </p>
      <ul className="mt-10 space-y-4">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}/`}
              className="neon-edge block rounded-xl bg-surface p-5 transition-colors hover:bg-surface-2"
            >
              <p className="text-xs uppercase tracking-widest text-accent">
                {p.tags.join(" · ")}
              </p>
              <h2 className="display mt-2 text-lg">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <p className="mt-3 text-xs text-muted">
                <time dateTime={p.date}>{formatDate(p.date)}</time>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
