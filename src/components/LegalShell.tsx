import { SITE } from "@/site.config";

export function LegalShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="display text-3xl sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">
        Effective {SITE.effectiveDate} · Applies to the {SITE.name} mobile game and{" "}
        {SITE.domain}
      </p>

      {SITE.legalIsDraft && (
        <div className="accent-edge mt-8 rounded-xl bg-surface p-4">
          <p className="text-sm text-foreground">
            <strong>Draft.</strong> Written to describe the game as it is actually built,
            not from a template — but not reviewed by a lawyer. Re-check it against the
            final SDK list before store submission (GOLIVE Phase 5), because the data-safety
            forms have to match this page exactly.
          </p>
        </div>
      )}

      <div className="legal mt-10">{children}</div>
    </article>
  );
}
