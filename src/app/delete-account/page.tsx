import type { Metadata } from "next";
import { SITE } from "@/site.config";

export const metadata: Metadata = { title: "Delete your account and data",
  alternates: { canonical: "/delete-account/" },
};

// Google Play requires a publicly reachable URL that explains account and data
// deletion, reachable without installing the app. This page is that URL.
export default function DeleteAccount() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="display text-3xl sm:text-4xl">Delete your account and data</h1>
      <p className="mt-4 text-muted">
        You can delete your {SITE.name} account and everything attached to it at any time.
        There are two ways.
      </p>

      <div className="mt-10 space-y-4">
        <section className="neon-edge rounded-xl bg-surface p-6">
          <h2 className="display text-sm tracking-wider">In the game</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Open <strong className="text-foreground">Settings → Account → Delete account</strong>.
            You will be asked to confirm. This is immediate and cannot be undone.
          </p>
        </section>

        <section className="neon-edge rounded-xl bg-surface p-6">
          <h2 className="display text-sm tracking-wider">By email</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            If you no longer have the game installed, email{" "}
            <a
              href={`mailto:${SITE.privacyEmail}?subject=Account%20deletion%20request`}
              className="text-accent underline underline-offset-4"
            >
              {SITE.privacyEmail}
            </a>{" "}
            from the address linked to your account, or tell us the display name you used.
            Requests are handled within 30 days.
          </p>
        </section>
      </div>

      <h2 className="display mt-14 text-xl">What gets deleted</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
        <li>Your account and any linked Apple or Google identifier</li>
        <li>Level progress, scores, experience, coins and unlocked blocks</li>
        <li>Your display name and all leaderboard entries</li>
      </ul>

      <h2 className="display mt-10 text-xl">What is kept, and why</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
        <li>
          Purchase records, where tax or accounting law requires them to be retained. These
          are kept without your gameplay data attached.
        </li>
        <li>
          Anonymised, aggregated statistics that cannot be traced back to you.
        </li>
      </ul>

      <p className="mt-10 text-sm text-muted">
        Deleting your account does not cancel a purchase or trigger a refund — refunds are
        handled by Apple or Google.
      </p>
    </div>
  );
}
