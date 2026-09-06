import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/site.config";
import { POSTS, postBySlug } from "@/content/posts";
import { JsonLd } from "@/components/JsonLd";
import { StoreButtons } from "@/components/StoreButtons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const post = postBySlug((await params).slug);
  if (!post) return {};
  const url = `${SITE.url}/blog/${post.slug}/`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: ["/og.jpg"],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const post = postBySlug((await params).slug);
  if (!post) notFound();
  const url = `${SITE.url}/blog/${post.slug}/`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Person", name: SITE.developer },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntityOfPage: url,
    image: `${SITE.url}/og.jpg`,
    about: { "@type": "VideoGame", name: SITE.name, url: SITE.url },
  };
  const faq = post.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <JsonLd data={article} />
      {faq && <JsonLd data={faq} />}

      <p className="text-xs uppercase tracking-widest text-accent">{post.tags.join(" · ")}</p>
      <h1 className="display mt-3 text-3xl leading-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-muted">
        By {SITE.developer} · <time dateTime={post.date}>{post.date}</time>
      </p>

      <div className="legal mt-10">
        {post.sections.map((s, i) => (
          <section key={i}>
            {s.heading && <h2>{s.heading}</h2>}
            {s.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
            {s.bullets && (
              <ul>
                {s.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
            {s.table && (
              <div className="overflow-x-auto">
                <table className="mt-4 w-full text-sm">
                  <thead>
                    <tr>
                      {s.table.header.map((h) => (
                        <th key={h} className="border-b border-edge py-2 pr-4 text-left text-foreground">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td key={k} className="border-b border-edge py-2 pr-4 align-top text-muted">
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {post.faq && (
          <section>
            <h2>Questions</h2>
            {post.faq.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>
        )}
      </div>

      <div className="accent-edge mt-14 rounded-2xl bg-surface p-6 text-center">
        <p className="display text-lg">{SITE.name}</p>
        <p className="mt-2 text-sm text-muted">
          Physics tower-stacking for your phone. Build it, survive the hazards, keep it standing.
        </p>
        <div className="mt-5 flex justify-center">
          <StoreButtons />
        </div>
      </div>

      {post.mentionsOtherGames && (
        <p className="mt-8 text-xs text-muted">
          Other games are mentioned for comparison only. Their names are trademarks of their
          respective owners; {SITE.name} is an independent game and is not affiliated with or
          endorsed by them.
        </p>
      )}

      <p className="mt-8 text-sm">
        <Link href="/blog/" className="text-muted hover:text-foreground">
          ← All posts
        </Link>
      </p>
    </article>
  );
}
