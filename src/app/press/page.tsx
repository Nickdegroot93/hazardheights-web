import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/site.config";

export const metadata: Metadata = {
  title: "Press kit",
  description: `Facts, description and downloadable art for ${SITE.name}, a physics block-stacking game for Android and iOS.`,
  alternates: { canonical: "/press/" },
};

const FACTS: [string, string][] = [
  ["Title", SITE.name],
  ["Developer", `${SITE.developer}, independent, ${SITE.jurisdiction}`],
  ["Genre", "Physics block-stacking, puzzle, arcade"],
  ["Platforms", "Android first, iOS to follow"],
  ["Price", "Free to play. One optional one-time purchase (Hazard Heights Unlimited): no ads, unlimited attempts, offline play. No coin packs."],
  ["Players", "Single player, with leaderboards"],
  ["Orientation", "Portrait, one-handed"],
  ["Session length", "Two to five minutes a round"],
  ["Website", SITE.url],
  ["Press contact", SITE.supportEmail],
];

const ASSETS = [
  { file: "icon-512.png", label: "App icon, 512×512 PNG" },
  { file: "feature-graphic-1024x500.png", label: "Store feature graphic, 1024×500 PNG" },
  { file: "social-card-1200x630.jpg", label: "Social card, 1200×630 JPG" },
  { file: "key-art-2048x1360.png", label: "Key art, 2048×1360 PNG" },
];

export default function Press() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="display text-3xl sm:text-4xl">Press kit</h1>
      <p className="mt-4 text-muted">
        Everything below may be used freely in articles, videos and social posts about{" "}
        {SITE.name}. Questions and review builds: {SITE.supportEmail}.
      </p>

      <h2 className="display mt-12 text-xl">In one paragraph</h2>
      <p className="mt-4 leading-relaxed text-muted">
        {SITE.name} is a physics block-stacking game for phones. Tetromino bricks fall and land
        where gravity and friction put them; there is no grid and no lines to clear. You build a
        tower, survive the chapter&apos;s hazards, and keep it standing long enough to hit the
        target. Bombs go off on a fuse, vines weld bricks together, magma melts through gaps,
        floods rise, laser lines forbid the top of the screen. Every level has bronze, silver and
        gold tiers, and abilities let you freeze a wobble or nudge a piece into place. It is free
        to play; one optional purchase removes ads and the attempts limit and unlocks offline
        play.
      </p>

      <h2 className="display mt-12 text-xl">Facts</h2>
      <dl className="mt-4 divide-y divide-edge">
        {FACTS.map(([k, v]) => (
          <div key={k} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm font-semibold">{k}</dt>
            <dd className="text-sm text-muted">{v}</dd>
          </div>
        ))}
      </dl>

      <h2 className="display mt-12 text-xl">Art</h2>
      <p className="mt-3 text-sm text-muted">
        Gameplay screenshots and a trailer are added as they are captured from the release build.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {ASSETS.map((a) => (
          <li key={a.file}>
            <a
              href={`/press/${a.file}`}
              className="neon-edge block overflow-hidden rounded-xl bg-surface transition-colors hover:bg-surface-2"
            >
              <Image
                src={`/press/${a.file}`}
                alt={a.label}
                width={1024}
                height={512}
                className="aspect-[2/1] w-full object-cover"
              />
              <p className="p-3 text-sm text-muted">{a.label}</p>
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
}
