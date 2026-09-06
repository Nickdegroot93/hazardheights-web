import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/site.config";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = { title: "Terms of Service",
  alternates: { canonical: "/terms/" },
};

export default function Terms() {
  return (
    <LegalShell title="Terms of Service">
      <div className="neon-edge mb-10 rounded-xl bg-surface p-6">
        <h2 className="!mt-0 !text-sm">The short version</h2>
        <p className="!mb-0">
          Play the game, don&apos;t cheat, don&apos;t pick an offensive name, and
          don&apos;t try to pull it apart and sell it. Purchases go through Apple or
          Google, so refunds do too. Coins are earned by playing and are not money.
        </p>
      </div>

      <p>
        These terms are the agreement between you and {SITE.developer} of{" "}
        {SITE.jurisdiction} covering {SITE.name} and this website. Installing or playing
        means you accept them.
      </p>

      <h2>What you may do with the game</h2>
      <p>
        You get a personal, non-exclusive, non-transferable licence to install and play{" "}
        {SITE.name} on devices you own or control, for your own non-commercial use. That
        licence lasts as long as these terms do.
      </p>
      <p>You may not:</p>
      <ul>
        <li>Copy, sell, rent or redistribute the game or its artwork, music or levels</li>
        <li>Decompile or reverse-engineer it, except where the law says you may</li>
        <li>Modify the game or run it through a modified or automated client</li>
        <li>Use its assets to build another product</li>
      </ul>
      <p>
        Streaming or recording your own play, including monetised video, is fine and always
        will be.
      </p>

      <h2>Your account</h2>
      <p>
        An anonymous account is created for you on first launch — you do not sign up for
        anything. You can link it to Apple or Google so your progress survives a new phone.
        Keeping access to that Apple or Google account is your responsibility; if you lose
        it, we have no other way to prove the game account is yours.
      </p>
      <p>
        If you never link the account and delete the game, the progress is gone. We cannot
        recover it. That is the trade for not making you register.
      </p>

      <h2>Display names</h2>
      <p>
        Your name appears publicly on the leaderboards. Names must not be offensive,
        harassing, sexual, hateful, deceptive, or impersonate someone else, and must not
        infringe anyone&apos;s trade mark. We can change or remove a name that breaks this,
        and repeat offenders can lose leaderboard access.
      </p>

      <h2>Buying things</h2>
      <p>
        {SITE.name} is free to download and free to finish. There is one optional purchase
        that unlocks the full game. What you are buying is a licence to use that unlock in
        the game — not property, and not something you can resell or transfer.
      </p>
      <ul>
        <li>
          <strong>Apple and Google handle the payment</strong>, not us. Their terms apply to
          the transaction, and refunds are requested from whichever store you bought from —
          we cannot issue them ourselves.
        </li>
        <li>
          <strong>Coins are earned by playing and are never sold for money.</strong> They
          have no cash value, cannot be exchanged for money, and cannot move between
          accounts.
        </li>
        <li>
          Prices and what a purchase includes can change, but never retroactively — anything
          you have already bought stays bought.
        </li>
      </ul>
      <p>
        If you are an EU consumer you normally have a 14-day right of withdrawal on digital
        purchases; by buying and immediately using an unlock you agree to it being delivered
        at once, which ends that right. Your statutory rights otherwise stand.
      </p>

      <h2>Ads</h2>
      <p>
        The only ads are rewarded videos you choose to watch for extra attempts. Nothing is
        blocked if you never watch one, and there are no forced or interstitial ads.
      </p>

      <h2>Fair play</h2>
      <p>
        Leaderboard scores are verified on the server. Do not use modified clients, memory
        editors, automation, or exploit bugs to place on a board, and do not attack or
        overload the servers. We may remove scores, reset progress, or suspend accounts that
        do. Where a suspension is not obviously warranted we will tell you why and you can
        reply to <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
      </p>

      <h2>Changes to the game</h2>
      <p>
        The game gets updated — levels change, balance changes, features come and go. Online
        services may be interrupted or, eventually, retired. If the online services are shut
        down for good we will give reasonable notice in the game beforehand.
      </p>

      <h2>Ending it</h2>
      <p>
        You can stop at any time by deleting the game, and delete your account from Settings
        (see the <Link href="/delete-account/">deletion page</Link>). We may end your licence
        if you seriously or repeatedly break these terms.
      </p>

      <h2>Warranties and liability</h2>
      <p>
        The game is provided as it is, without any warranty that it will be uninterrupted,
        error-free, or fit for a particular purpose, to the fullest extent the law allows.
      </p>
      <p>
        Nothing here limits liability for death or personal injury caused by negligence, for
        fraud, or for anything else that cannot lawfully be excluded — including mandatory
        consumer rights in your country. Subject to that, our total liability to you for any
        claim is limited to what you paid us in the twelve months before it arose.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the law of {SITE.jurisdiction}. If you are a consumer,
        you keep the protection of the mandatory laws of the country you live in, and you
        can bring proceedings there.
      </p>

      <h2>The small print</h2>
      <p>
        If part of these terms turns out to be unenforceable, the rest still applies. Not
        enforcing something once does not waive it. We may transfer these terms to someone
        else if the game changes hands, and your rights are unaffected.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> — see also the{" "}
        <Link href="/privacy/">Privacy Policy</Link>.
      </p>
    </LegalShell>
  );
}
