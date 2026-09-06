// Structured data (schema.org) — the part of a page search engines and AI answer engines
// read verbatim. One component so every page emits it the same way.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
