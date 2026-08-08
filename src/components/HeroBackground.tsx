import fs from "node:fs";
import path from "node:path";

const has = (f: string) => fs.existsSync(path.join(process.cwd(), "public", f));

/**
 * Full-bleed hero art with an art-directed mobile crop. Falls back to a lit gradient
 * that stands on its own, so the page never looks broken before the art lands.
 *
 * The scrims are not decoration: the wordmark sits on top of this, and a busy image
 * under large text is exactly how a title becomes unreadable.
 */
export function HeroBackground() {
  const wide = has("hero-bg.jpg");
  const tall = has("hero-bg-mobile.jpg");

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {wide ? (
        <picture>
          {tall && <source media="(max-width: 767px)" srcSet="/hero-bg-mobile.jpg" />}
          <img
            src="/hero-bg.jpg"
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </picture>
      ) : (
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 100%, #ff8a2b 0%, #d2365f 32%, #3a1140 62%, #08070a 100%)",
          }}
        />
      )}

      {/* A light touch only. Measured against the shipped art, the wordmark zone is already
          4.4:1 at its brightest pixel; a heavy scrim would buy contrast nobody needs and
          flatten the sunset. This lifts the worst case to ~7:1 and stays invisible. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 45%, rgba(8,7,10,0.30) 0%, rgba(8,7,10,0.12) 55%, rgba(8,7,10,0) 100%)",
        }}
      />
      {/* Fade the bottom edge into the page so the section joins the one below it. */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent" />
    </div>
  );
}
