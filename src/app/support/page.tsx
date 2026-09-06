import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/site.config";

export const metadata: Metadata = { title: "Support",
  alternates: { canonical: "/support/" },
};

const FAQ = [
  {
    q: "I lost my progress after changing phone.",
    a: "Progress lives on the account, not the device. Sign in with the same Apple or Google account you linked before and it will come back. If you never linked one, the save was local to the old device — write to us and we will see what can be recovered.",
  },
  {
    q: "I bought the full game and it still asks me to buy it.",
    a: "Open Settings → Account and use Restore Purchases. If that does not work, send us the receipt from Apple or Google and we will sort it out.",
  },
  {
    q: "How do I turn off ads?",
    a: "There are no forced ads. Rewarded videos are always optional and only play if you choose to watch one. The full-game purchase also removes the attempts limit entirely.",
  },
  {
    q: "How do I change my display name?",
    a: "Tap your name on the Profile screen. Choosing your own name requires linking the account to Apple or Google first — until then you play under an auto-generated Builder name. Names on the leaderboards are public.",
  },
  {
    q: "Will I lose my progress if I change phone?",
    a: "Only if you never linked the account. Link it to Apple or Google in Settings → Account and your progress follows you to any device you sign in on. An unlinked account lives only on that one device and cannot be recovered once the game is removed.",
  },
  {
    q: "How do I delete my data?",
    a: "From inside the game, or through the data deletion page linked below.",
  },
];

export default function Support() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="display text-3xl sm:text-4xl">Support</h1>
      <p className="mt-4 text-muted">
        Something broken or a question about your account? Email us with your device and
        what happened, and we&apos;ll get back to you.
      </p>

      <a
        href={`mailto:${SITE.supportEmail}`}
        className="accent-edge mt-6 inline-flex min-h-16 items-center rounded-xl bg-surface px-6 text-base font-semibold"
      >
        {SITE.supportEmail}
      </a>

      <h2 className="display mt-14 text-xl">Common questions</h2>
      <div className="mt-6 space-y-3">
        {FAQ.map((f) => (
          <details key={f.q} className="neon-edge rounded-xl bg-surface p-5">
            <summary className="cursor-pointer font-semibold">{f.q}</summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted">
        See also the <Link href="/privacy/" className="text-accent underline underline-offset-4">Privacy Policy</Link>,{" "}
        <Link href="/terms/" className="text-accent underline underline-offset-4">Terms of Service</Link> and{" "}
        <Link href="/delete-account/" className="text-accent underline underline-offset-4">data deletion</Link>.
      </p>
    </div>
  );
}
