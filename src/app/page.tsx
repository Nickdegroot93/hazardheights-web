import Link from "next/link";
import { SITE } from "@/site.config";
import { StoreButtons } from "@/components/StoreButtons";
import { HeroBackground } from "@/components/HeroBackground";
import { Shot } from "@/components/Shot";
import { JsonLd } from "@/components/JsonLd";

// Homepage copy rules: say what the game IS in plain sentences (that is what search and AI
// answer engines quote), lead with "offline" honestly (the one-time purchase unlocks it), and
// never name another game here — comparisons live in /blog, where they read as editorial.
// Never state chapter or block totals (the game keeps its size a secret).

const FEATURES = [
  {
    title: "Real physics",
    body: "Every brick is a rigid body with mass and friction. Nothing snaps to a grid. A tower that leans will eventually go, and you will know why.",
  },
  {
    title: "Hazards",
    body: "Bombs on a fuse. Vines that weld bricks together. Magma that melts through gaps. A rising flood. A laser line you may not cross. Every chapter changes the rules.",
  },
  {
    title: "Bronze, silver, gold",
    body: "Every level has a target and three tiers above it. Clear it once, then come back and build it better.",
  },
  {
    title: "One hand, a few minutes",
    body: "Portrait, swipe and tap. A round fits in a queue, a commute, or a tray table.",
  },
];

const FAQ = [
  {
    q: `What is ${SITE.name}?`,
    a: `${SITE.name} is a physics block-stacking game for iOS and Android. Falling tetromino bricks land where gravity and friction put them; you build a tower, survive the chapter's hazards, and keep it standing long enough to hit the target.`,
  },
  {
    q: "Is it free?",
    a: `Yes. ${SITE.name} is free to play with a limited number of attempts that refill over time. ${SITE.name} Unlimited is a one-time purchase that removes the attempts limit, removes ads, and unlocks offline play. Nothing else is sold; there are no coin packs.`,
  },
  {
    q: "Can I play offline, on a plane?",
    a: `With ${SITE.name} Unlimited, yes. It unlocks offline play; offline runs are unranked and your progress syncs when you reconnect. Free play needs a connection to start a run, because free runs are ranked on the leaderboards.`,
  },
  {
    q: "Are there ads?",
    a: "No forced ads. Rewarded videos are optional and only play when you choose to watch one for extra attempts. The one-time purchase removes them entirely.",
  },
  {
    q: "Is it a Tetris game?",
    a: "It uses tetromino shapes, but nothing else is the same. There are no lines to clear and no grid: pieces obey physics, so placement, balance and weight decide whether the tower stands.",
  },
  {
    q: "Which phones does it run on?",
    a: "Android first, with iOS to follow. It is a 2D portrait game and runs comfortably on mid-range phones.",
  },
];

export default function Home() {
  const game = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/og.jpg`,
    description:
      "Physics block-stacking game for phones. Stack falling tetromino bricks into a tower, survive the chapter's hazards, keep it standing. Free to play; a one-time purchase unlocks offline play.",
    genre: ["Puzzle", "Physics", "Arcade"],
    gamePlatform: ["Android", "iOS"],
    operatingSystem: ["Android", "iOS"],
    applicationCategory: "Game",
    playMode: "SinglePlayer",
    author: { "@type": "Person", name: SITE.developer },
    publisher: { "@type": "Person", name: SITE.developer },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/PreOrder" },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={game} />
      <JsonLd data={faq} />

      <section className="relative flex min-h-[88svh] items-center justify-center">
        <HeroBackground />

        <div className="relative z-10 flex flex-col items-center px-5 py-24 text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">
            iOS &amp; Android
          </p>

          <h1
            className="display mt-5 leading-[0.92] text-balance"
            style={{ fontSize: "clamp(2.75rem, 11vw, 6.5rem)" }}
          >
            {SITE.name}
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base text-foreground/90 sm:text-lg">
            Physics block-stacking for your phone. Build the tower, survive the hazards, keep
            it standing.
          </p>

          <div className="mt-10 flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 pb-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {["shot-1.png", "shot-2.png", "shot-3.png", "shot-4.png"].map((s, i) => (
              <Shot
                key={s}
                src={s}
                alt={`${SITE.name} screenshot ${i + 1}`}
                width={540}
                height={960}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <h2 className="display text-2xl sm:text-3xl">A tower that obeys gravity</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Tetromino bricks fall, you steer them, and they land where physics puts them. There
          is no grid to save you and no lines to clear. Place well and the tower climbs; place
          badly and you watch it lean, then go. Then you try again, because a round is only a
          few minutes long.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="neon-edge rounded-xl bg-surface p-5">
              <h3 className="display text-base">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <h2 className="display text-2xl sm:text-3xl">Play offline, anywhere</h2>
        <p className="mt-4 max-w-2xl text-muted">
          {SITE.name} Unlimited is a one-time purchase: no ads, unlimited attempts, and the
          whole game playable with no connection at all, on a plane, on the underground, in a
          cabin with no signal. Offline runs do not rank on the leaderboards; everything else
          is yours and syncs when you are back.{" "}
          <Link href="/blog/playing-hazard-heights-on-a-plane/" className="text-foreground underline underline-offset-4">
            How offline play works.
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <h2 className="display text-2xl sm:text-3xl">Questions</h2>
        <div className="mt-6 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="neon-edge rounded-xl bg-surface p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          More in the{" "}
          <Link href="/blog/" className="text-foreground underline underline-offset-4">
            blog
          </Link>
          : offline games for flights, how the physics works, and what to play if you want
          physics stacking on a phone.
        </p>
      </section>
    </>
  );
}
