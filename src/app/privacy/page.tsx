import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/site.config";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = { title: "Privacy Policy" };

const STORED = [
  {
    what: "An account ID",
    detail:
      "A random identifier created for you on first launch. It is not linked to your real name unless you choose to sign in.",
  },
  {
    what: "A display name",
    detail:
      "Auto-generated as “Builder-1234” until you choose your own. Shown publicly on the leaderboards.",
  },
  {
    what: "Your game progress",
    detail:
      "Levels completed, best scores and heights, blocks and abilities you have discovered, coins earned and spent, and your sound and haptics settings.",
  },
  {
    what: "Leaderboard scores",
    detail:
      "Your best score and height per level, and which board it belongs to. Public by design — that is what a leaderboard is.",
  },
  {
    what: "A record of each attempt",
    detail:
      "When a run started and finished, on which level, and whether you won. Used to keep the leaderboards honest and to run the attempts meter.",
  },
  {
    what: "Whether you have bought the full game",
    detail: "A single true/false flag. We never see your card, bank or billing details.",
  },
];

const NEVER = [
  "Your real name, address or date of birth",
  "Passwords — there are none; sign-in is handled entirely by Apple or Google",
  "Card, bank or payment details",
  "Your location",
  "Your contacts, photos, microphone or camera",
  "Anything you type, beyond the display name you choose",
];

export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy">
      <div className="neon-edge mb-10 rounded-xl bg-surface p-6">
        <h2 className="!mt-0 !text-sm">The short version</h2>
        <p className="!mb-0">
          You can play without an account, without giving us your name, and without an
          email address. What we store is a random account ID, a display name, your
          progress and your scores. We do not sell data, we do not track you across other
          apps for our own purposes, and you can delete everything from inside the game.
          The rest of this page is the detail behind that.
        </p>
      </div>

      <p>
        {SITE.name} is made and operated by {SITE.developer} in {SITE.jurisdiction}. This
        policy covers the game and this website. If anything here is unclear, email{" "}
        <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> and you will get a
        real answer.
      </p>

      <h2>How your account works</h2>
      <p>
        The first time you open {SITE.name} an <strong>anonymous account</strong> is created
        for you automatically. There is no sign-up screen and nothing to fill in. That
        account is a random identifier — it holds your progress and lets your scores appear
        on the leaderboards, and it is not connected to your identity in any way.
      </p>
      <p>
        You can optionally <strong>link the account to Apple or Google</strong>, which is
        what lets your progress survive a new phone. That works by the operating system
        handing us a signed token proving the account is genuinely yours.{" "}
        <strong>There is no password anywhere in the system</strong> — we never see one,
        store one, or reset one.
      </p>
      <p>
        If Apple or Google includes an email address in that token, it is stored in the
        authentication record. The game never displays it, never uses it, and we never send
        email to it. On iOS you can use Apple&apos;s Hide My Email and we will only ever
        receive a relay address.
      </p>

      <h2>What is stored</h2>
      <p>All of it, in full:</p>
      <ul>
        {STORED.map((s) => (
          <li key={s.what}>
            <strong>{s.what}.</strong> {s.detail}
          </li>
        ))}
      </ul>

      <h2>What is never collected</h2>
      <ul>
        {NEVER.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
      <p>
        The game does not currently include analytics or crash-reporting tools. If that
        changes, this page will be updated before the version that adds them is released.
      </p>

      <h2>Why we hold it</h2>
      <ul>
        <li>
          To run the game and save your progress, and to restore it on a new device — this
          is the service you asked for when you installed it.
        </li>
        <li>
          To run leaderboards and verify scores server-side, so the boards are not trivially
          cheatable.
        </li>
        <li>To deliver and honour the one-time full-game purchase.</li>
        <li>To show rewarded ads, where you have chosen to watch one and consented.</li>
      </ul>
      <p>
        Under the GDPR our lawful bases are <strong>performance of a contract</strong>{" "}
        (running the game and your account), <strong>consent</strong> (advertising
        identifiers) and <strong>legitimate interests</strong> (keeping the leaderboards
        honest and the game working).
      </p>

      <h2>Purchases</h2>
      <p>
        {SITE.name} is free. There is one optional purchase that unlocks the full game.
        Payment is handled entirely by the App Store or Google Play — we never see your card
        or billing details. Our server checks the receipt with Apple or Google and then
        stores a single flag saying the account is unlocked.
      </p>
      <p>
        In-game coins are earned by playing. They are never sold for money, have no cash
        value, and cannot be transferred or cashed out.
      </p>

      <h2>Advertising</h2>
      <p>
        The only ads in {SITE.name} are <strong>rewarded videos you choose to watch</strong>{" "}
        in exchange for extra attempts. There are no banners, no pop-ups, and no ads that
        play without you asking for one.
      </p>
      <p>
        Ads are served by Google AdMob (via Unity LevelPlay), which may use your device
        advertising identifier to cap repeats and measure whether an ad played. On iOS this
        requires your permission through Apple&apos;s App Tracking Transparency prompt. In
        the EU and UK we ask for consent through a Google-certified consent form before any
        ad loads. <strong>Declining costs you nothing</strong> — no feature is locked behind
        it, and you can change your mind in the game&apos;s settings at any time.
      </p>

      <h2>Who else touches your data</h2>
      <p>We do not sell it or share it for advertising. It reaches these services only:</p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-edge text-left">
              <th className="py-2 pr-4 font-semibold text-foreground">Service</th>
              <th className="py-2 pr-4 font-semibold text-foreground">What for</th>
              <th className="py-2 font-semibold text-foreground">Where</th>
            </tr>
          </thead>
          <tbody>
            {SITE.subprocessors.map((s) => (
              <tr key={s.name} className="border-b border-edge/60">
                <td className="py-2 pr-4 text-foreground">{s.name}</td>
                <td className="py-2 pr-4">{s.role}</td>
                <td className="py-2">{s.region}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Your account, progress and scores are stored in the <strong>European Union</strong>.
        Advertising and app-store services may process data outside the EU under the
        transfer safeguards those companies publish.
      </p>

      <h2>How long it is kept</h2>
      <p>
        Progress and scores are kept while your account exists — that is the point of them.
        Delete your account and they are removed. Records of a purchase may be kept longer
        where tax law requires it, with your gameplay data detached.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask for a copy of your data, have it corrected, have it deleted, or object
        to how it is used. Withdraw advertising consent whenever you like in the game&apos;s
        settings.
      </p>
      <p>
        The fastest route is to delete the account yourself:{" "}
        <strong>Settings → Account → Delete account</strong> in the game, which erases your
        profile, progress, scores, attempts and run history along with the account itself.
        The <Link href="/delete-account/">data deletion page</Link> covers doing it by email
        if you no longer have the game installed. For anything else, write to{" "}
        <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
      </p>
      <p>
        If you think we have handled your data badly, you can complain to your national data
        protection authority. In {SITE.jurisdiction} that is the Autoriteit
        Persoonsgegevens.
      </p>

      <h2>Children</h2>
      <p>
        {SITE.name} is not aimed at children under 13, or the equivalent minimum age where
        you live. We do not knowingly collect their data. If you believe a child has given
        us data, email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> and it
        will be deleted.
      </p>

      <h2>A note on anonymous accounts</h2>
      <p>
        Because an anonymous account exists only on your device, deleting the game without
        linking it to Apple or Google means the account can no longer be reached — by you or
        by us. That is a deliberate trade for not making you sign up, but it does mean we
        cannot recover a lost anonymous account, and we cannot identify it for a data
        request either.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes in a way that matters, the effective date above changes and
        the game will tell you.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>
      </p>
    </LegalShell>
  );
}
