# Image prompts (Higgsfield)

Drop the results into `public/` with the exact filenames below. The components check at
build time whether each file exists — until it does you get a lit gradient (hero) or a
labelled placeholder slot (screenshots), so the site is deployable right now and improves
as art lands.

**Model:** `openai/hazel` (GPT-Image). Watch the aspect-ratio parameter — unknown params
get silently billed without taking effect.

**House style, paste into every prompt:** *near-black background, colour carried only in
the light source and edges, warm amber and rose neon, high contrast, clean vector-flat
shapes with soft atmospheric haze, no text, no logos, no watermark, no UI chrome.*

---

## ⚠️ Do NOT generate `shot-1..4.png`

Those four slots are **real gameplay screenshots**. AI images of a game that isn't the
game are misleading on a store-adjacent site, and Apple and Google both take a dim view of
screenshots that don't depict actual gameplay. Capture them from a device at 540×960 (or
any 9:16) and drop them in.

---

## ✅ Already done — hero, mobile hero and social card

All three were derived from `~/Documents/MadTowers/hero-image.png` (2688×1520), so they
share one piece of art and one light source. Regenerate with the script in the commit
message if the source art changes. **Only the four screenshots are still outstanding** (the icon is done: the golem store icon
is now `src/app/icon.png` / `apple-icon.png` / `favicon.ico`, and `og.jpg` is the golem key art).

- `hero-bg.jpg` — 2560×1448, full frame, tower left, empty centre
- `hero-bg-mobile.jpg` — 1170×2000, **sky only, tower deliberately excluded**. Every crop
  containing the tower puts its hot rim light (255,255,175) under the wordmark — 1.13:1
  contrast, i.e. invisible. Crops that keep only part of the tower read as a mistake.
- `og.jpg` — 1200×630, bottom-anchored so the horizon and the tower base stay in frame

The prompts below are kept for regenerating or reskinning later.

## `hero-bg.jpg` — 2560×1440, landscape

The full-bleed background behind the wordmark. **The single most important constraint:
keep the middle of the frame calm.** The game name sits dead centre at up to 6.5rem, and a
busy centre turns it to mush. A scrim darkens the middle automatically, but that only
rescues a composition that was already quiet there.

> Wide cinematic vista at golden hour. A tall precarious tower of stacked geometric blocks
> rises in the far LEFT third of the frame, leaning, the topmost block tipping. The centre
> and right of the frame are open hazy sky — a deep gradient from hot amber at the horizon
> to dark violet at the top, with a few flat silhouetted clouds. A near-black silhouetted
> horizon of rock formations and palms runs along the bottom edge. Vector-flat shapes, soft
> atmospheric haze, strong rim light along the tower's edges, high contrast, no detail in
> the shadows. Empty negative space in the centre of the image. No text, no logos, no
> watermark, no UI.

Worth generating two or three and picking by how the centre behaves, not by how cool the
tower looks — the tower is decoration here, the empty sky is the job.

## `hero-bg-mobile.jpg` — 1170×2000, portrait

A landscape image centre-cropped on a phone loses the tower entirely, so this is an
art-directed crop, not a resize. Served automatically below 768px.

> Vertical cinematic composition at golden hour. A tall precarious tower of stacked
> geometric blocks rises from the BOTTOM of the frame, leaning, occupying the lower third.
> The upper two thirds are open hazy sky, a deep gradient from hot amber to dark violet,
> with a few flat silhouetted clouds. Near-black silhouetted foreground along the bottom
> edge. Vector-flat shapes, soft atmospheric haze, strong amber rim light, high contrast.
> Empty negative space through the upper middle. No text, no logos, no watermark, no UI.

## `og.png` — 1200×630, landscape

The social card for when the link is pasted into a chat or a post. Text is drawn by the
platform, not baked in.

> Wide cinematic view of a tall leaning tower of stacked blocks against a warm amber and
> rose gradient sky, positioned in the left third of the frame. Empty hazy sky filling the
> right two thirds. Silhouetted horizon of palms and distant rock formations along the
> bottom edge. Vector-flat, high contrast, near-black silhouettes, neon amber rim light.
> No text, no logos, no watermark.

## `icon.png` — 1024×1024, square

Favicon, and useful as a starting point for app-icon exploration.

> A single bold icon mark: three chunky geometric blocks stacked off-centre and leaning,
> the top one glowing hot amber, on a near-black background. Thick neon amber rim light,
> flat vector shapes, heavy silhouette readable at very small sizes, generous margin.
> Centred, symmetrical composition. No text, no letters, no watermark.

Then: `sips -z 32 32 icon.png --out src/app/favicon.ico` (or any converter) — and check it
still reads at 16px, which is the only size that actually matters.

---

## Before you commit an image

- **View it at render size.** Hero art that sings at 2560px often turns to mush at 390px
  wide on a phone. That is the size most people will see.
- **Check the wordmark on top of it**, not the image on its own. Run `npm run dev` and
  look at the real page — if "Hazard Heights" is fighting the art, regenerate with more
  empty sky rather than dialling up the scrim, which just makes the whole hero muddy.
- **Save the hero as JPEG, not PNG.** These are photographic gradients; PNG will be several
  megabytes for no visible gain. Aim under ~400 KB.
