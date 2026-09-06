// Hardcoded blog. No CMS: a post is a TypeScript object, the build emits a static page.
//
// WHY THESE POSTS EXIST: search engines and AI answer engines (ChatGPT, Perplexity, Google's
// AI overviews) assemble answers from indexed pages that state facts plainly. The homepage
// never names another game (a store page or homepage that leans on a competitor's name reads
// as bait and can trip store metadata policy). Comparisons and "best games for X" lists belong
// here, written to BE the answer, honestly, with Hazard Heights as one entry among real ones.
//
// House rules for a post:
//  - The first paragraph answers the title's question in plain sentences. No teaser.
//  - Say "offline" precisely: free play needs a connection to start a run; the one-time
//    purchase (Hazard Heights Unlimited) unlocks offline play, unranked. Never blur this.
//  - Never state how many chapters or block types the game has (the game keeps that a secret).
//  - Other games' names are used descriptively; each post carries the trademark note.

export type Section = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { header: string[]; rows: string[][] };
};

export type Post = {
  slug: string;
  title: string;
  description: string; // meta description + card teaser, under 160 chars
  date: string; // ISO
  updated?: string;
  tags: string[];
  sections: Section[];
  faq?: { q: string; a: string }[]; // emitted as FAQPage structured data
  mentionsOtherGames?: boolean; // adds the trademark note
};

const OFFLINE_NOTE =
  "Offline play in Hazard Heights comes with Hazard Heights Unlimited, the one-time full-game purchase. Free play needs a connection to start a run, so runs can count on the leaderboards. Offline runs do not rank; your progress syncs when you are back online.";

export const POSTS: Post[] = [
  {
    slug: "best-offline-mobile-games-for-a-flight",
    title: "Best offline mobile games for a flight",
    description:
      "Games that work with no wifi, checked for what actually runs in airplane mode. Puzzle, strategy, stacking, roguelike.",
    date: "2026-09-06",
    tags: ["offline", "travel", "list"],
    mentionsOtherGames: true,
    sections: [
      {
        paragraphs: [
          "An offline mobile game is one that starts and plays with the network off, not one that merely has an offline mode buried somewhere. On a flight that difference is the whole game. Below are games that run in airplane mode once installed, with a note on anything that needs a connection.",
          "Rule of thumb before boarding: open the game once on wifi so any first-launch download finishes, then switch to airplane mode and start a session while still at the gate. If it plays, it will play at 35,000 feet.",
        ],
      },
      {
        heading: "Short sessions, one hand",
        bullets: [
          "Hazard Heights. Physics block-stacking in portrait: drop pieces onto a tower, keep it standing while hazards try to bring it down. Sessions run two to five minutes, which fits a tray table. " + OFFLINE_NOTE,
          "Threes. The number-sliding puzzle that everyone copied. Fully offline, endless, and it does not care if you put it down mid-game.",
          "Mini Metro. Draw subway lines, watch the city outgrow them. Offline, calm, and a full round is about ten minutes.",
          "Alto's Odyssey. An endless sandboarding run. Offline, gorgeous, and the closest thing to a nap that still counts as a game.",
        ],
      },
      {
        heading: "Longer sessions, both hands",
        bullets: [
          "Slay the Spire. Deck-building roguelike, hour-long runs. Offline once installed.",
          "Stardew Valley. Farm, fish, mine. Offline, and a long-haul flight is about one in-game season.",
          "Monument Valley 2. Short, offline, and finishable in a single flight, which is rare and pleasant.",
          "Dead Cells. Fast roguelike action. Offline, but plan on a controller or big thumbs.",
        ],
      },
      {
        heading: "What to check before you trust a game offline",
        bullets: [
          "Does it start with the network off? Some games show a login wall even if play itself is offline.",
          "Does progress save locally? Cloud-only saves can vanish if the session ends before you reconnect.",
          "Are ads forced? Games that cannot load an ad sometimes lock a level behind one. Paid or ad-optional games avoid this.",
          "Battery. Physics and 3D games drain faster. Portrait 2D games like Hazard Heights or Threes barely register.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Hazard Heights work in airplane mode?",
        a: "Yes with Hazard Heights Unlimited, the one-time purchase. It unlocks offline play; those runs are unranked and sync when you reconnect. Free play needs a connection to start a run.",
      },
      {
        q: "Do I need to download anything before the flight?",
        a: "Open the game once on wifi after installing so the first-launch setup completes. After that, airplane mode is fine.",
      },
    ],
  },
  {
    slug: "games-like-tricky-towers-on-mobile",
    title: "Games like Tricky Towers on mobile",
    description:
      "Tricky Towers has no official phone version. Here is what physics tower-stacking looks like on iOS and Android, and how each option compares.",
    date: "2026-09-06",
    tags: ["tricky towers", "physics stacking", "comparison"],
    mentionsOtherGames: true,
    sections: [
      {
        paragraphs: [
          "Tricky Towers is the physics block-stacking game from WeirdBeard, on PC, PlayStation, Xbox and Switch. At the time of writing there is no official mobile version. If you want the same feeling on a phone, tetromino pieces that obey gravity and friction rather than snapping to a grid, these are the options.",
        ],
      },
      {
        heading: "The short version",
        table: {
          header: ["Game", "Physics stacking", "Portrait, one hand", "Offline", "Price"],
          rows: [
            ["Hazard Heights", "Yes, full rigid-body physics", "Yes", "With the one-time purchase", "Free, one optional purchase"],
            ["99 Bricks Wizard Academy", "Yes", "Yes", "Yes", "Free with ads and purchases"],
            ["Tetris (mobile)", "No, grid-locked", "Yes", "Partly", "Free with ads and purchases"],
            ["Stack", "Timing, not physics", "Yes", "Yes", "Free with ads"],
          ],
        },
      },
      {
        heading: "Hazard Heights",
        paragraphs: [
          "Hazard Heights is built for exactly this gap. Pieces fall as rigid bodies, land where physics puts them, and a tower that leans will eventually go. You steer with swipes and taps, one-handed in portrait, and rounds last a few minutes.",
          "What it adds on top of the stacking: hazards. Bombs that go off on a fuse, bricks that weld their neighbours together with vines, magma that melts through gaps, a flood that rises, a laser line you may not cross. Each level asks for a target, and every level has bronze, silver and gold tiers to chase. Abilities let you freeze a wobble, nudge a piece, or clear a mess.",
          "Honest limits: it is a phone game, so there is no local multiplayer race like the console game has, and offline play is part of the paid version. " + OFFLINE_NOTE,
        ],
      },
      {
        heading: "99 Bricks Wizard Academy",
        paragraphs: [
          "Also by WeirdBeard, and the closest ancestor to Tricky Towers on mobile: stack physics bricks as a wizard, with spells that help and hinder. It is older and the pacing is slower, but if you want the studio's own take on a phone, this is it.",
        ],
      },
      {
        heading: "Tetris and Stack, for completeness",
        paragraphs: [
          "Tetris on mobile is grid-locked: pieces snap, lines clear, nothing topples. It is a different game with the same shapes. Stack, and the many games like it, is a timing test where a mistimed tap shaves the block; there is no gravity to fight. Both are good. Neither is the Tricky Towers feeling.",
        ],
      },
    ],
    faq: [
      {
        q: "Is there an official Tricky Towers app for iPhone or Android?",
        a: "Not at the time of writing. Tricky Towers is on PC and consoles. Hazard Heights and 99 Bricks Wizard Academy are the mobile games closest to its physics stacking.",
      },
      {
        q: "Is Hazard Heights made by the Tricky Towers developers?",
        a: "No. Hazard Heights is an independent game by Nick de Groot and is not affiliated with WeirdBeard.",
      },
    ],
  },
  {
    slug: "how-hazard-heights-physics-works",
    title: "How the physics in Hazard Heights works",
    description:
      "Why a tower leans, why a piece slides into a pocket, and why the fog eats what falls. A developer's notes on the stacking model.",
    date: "2026-09-06",
    tags: ["devlog", "physics"],
    sections: [
      {
        paragraphs: [
          "Every brick in Hazard Heights is a real rigid body. It has mass, it has friction, and when it lands it is simulated exactly like the bricks under it. The game never fakes a landing by snapping a piece to a grid. That one decision drives everything you feel while playing.",
        ],
      },
      {
        heading: "Friction is the whole game",
        paragraphs: [
          "Bricks and floors share one friction value, tuned so a piece placed half over an edge stays put but a piece placed a third over starts to slide. That gap is where the skill lives. Most towers do not fall because a piece was dropped badly; they fall because three slightly-off pieces added up.",
        ],
      },
      {
        heading: "Why a wobble sometimes freezes",
        paragraphs: [
          "Real physics has a nasty habit: a piece can rest in a spot that is technically stable and still jitter forever, because the solver keeps finding tiny corrections. We treat that as a bug in the game, not a feature. A landed piece that is supported on a clean grid line is allowed to settle and sleep. A piece that is genuinely overturning is left alone to fall. The rule for telling them apart is written down in the project's physics contract and has survived a lot of arguing.",
        ],
      },
      {
        heading: "Pockets and nudging",
        paragraphs: [
          "Some floors have one-cell niches carved into them. Sliding a piece into one feels great and is deliberately lenient: the collider corners around a pocket are rounded so a slightly misaligned piece shaves past and slides in, instead of catching on the lip. The pocket floor itself stays grid-exact, so once you are in, you are in.",
        ],
      },
      {
        heading: "The fog",
        paragraphs: [
          "Everything below the floor is fog. A piece that misses the tower sinks into it and is gone, and the fog heaves where it went under. The fog is a shader, two layers of drifting noise sampled in world space, so when the camera pans the layers slide against each other and read as depth. It is the cheapest thing in the game to render and the thing people notice most.",
        ],
      },
      {
        heading: "Hazards are physics too",
        paragraphs: [
          "A Boulder is four times the mass of a normal brick, and the tower under it knows. A Feather is a quarter, and later pieces shove it around. A Vine welds itself to whatever it touches, which is either the save you needed or the reason your whole overhang came down as one piece. Bombs delete their neighbours and let gravity do the rest; there is no blast impulse, because a blast that throws pieces is chaos, and a hole that lets pieces fall is a puzzle.",
        ],
      },
    ],
  },
  {
    slug: "playing-hazard-heights-on-a-plane",
    title: "Playing Hazard Heights on a plane",
    description:
      "What works in airplane mode, what to do before boarding, and what happens to your scores when you land.",
    date: "2026-09-06",
    tags: ["offline", "travel", "guide"],
    sections: [
      {
        paragraphs: [
          "Hazard Heights plays fully offline with Hazard Heights Unlimited, the one-time purchase. Buy it before you board, open the game once on wifi, and every level is available in airplane mode. Free play needs a connection to start a run, because free runs are ranked and the server hands out the attempts.",
        ],
      },
      {
        heading: "Before boarding",
        bullets: [
          "Make sure you have opened the game once since installing, on wifi, so the first-launch setup and your purchase are stored on the device.",
          "If you play free, spend your attempts at the gate. They will not be granted in the air.",
          "Battery: the game is 2D and portrait. An hour of play costs a few percent on a modern phone.",
        ],
      },
      {
        heading: "In the air",
        bullets: [
          "Offline runs show an OFFLINE tag and do not rank on the leaderboards. Medals, coins and level progress are yours to keep.",
          "Everything else is identical: every chapter you have unlocked, every hazard, every ability.",
        ],
      },
      {
        heading: "After landing",
        bullets: [
          "Progress syncs the next time the game sees a connection. Nothing to press.",
          "If you played on a new device, sign in with the same Apple or Google account and the progress follows.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I play Hazard Heights without wifi?",
        a: "Yes with Hazard Heights Unlimited, the one-time purchase. Free play needs a connection to start a run.",
      },
      {
        q: "Do offline scores count on the leaderboard?",
        a: "No. Offline runs are unranked. Medals, coins and level progress still count and sync when you reconnect.",
      },
    ],
  },
  {
    slug: "is-there-a-tricky-towers-app",
    title: "Is there a Tricky Towers app for Android or iPhone?",
    description:
      "No official one. What Tricky Towers is available on, why there is no phone version, and the closest thing to it on mobile.",
    date: "2026-09-06",
    tags: ["tricky towers", "android", "iphone"],
    mentionsOtherGames: true,
    sections: [
      {
        paragraphs: [
          "No. At the time of writing there is no official Tricky Towers app for Android or iPhone. Tricky Towers, by WeirdBeard, is sold on Steam, PlayStation, Xbox and Nintendo Switch. Anything in an app store using the name is not the game.",
          "The closest experience on a phone is a physics block-stacking game built for portrait play. Hazard Heights is one: tetromino bricks that fall as rigid bodies, a tower you keep standing, hazards that try to knock it over, and rounds a few minutes long. It is free to start, with a one-time purchase that also unlocks offline play. WeirdBeard's own older mobile game, 99 Bricks Wizard Academy, is the other option if you want their take.",
        ],
      },
      {
        heading: "Why phone stacking games feel different",
        paragraphs: [
          "Console Tricky Towers is built around a landscape screen and a race against another player. A phone game has one thumb and a tall screen, so the design shifts: single-player, taller towers, steering by swipe, and shorter rounds. If a mobile game claims to be Tricky Towers with the same multiplayer race, be suspicious.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I play Tricky Towers on my phone through streaming?",
        a: "Only if you own it on a platform with a streaming app, such as Xbox Cloud Gaming or PlayStation Remote Play, and have a stable connection. That is not an offline option.",
      },
      {
        q: "Is Hazard Heights a copy of Tricky Towers?",
        a: "No. It is an independent physics stacking game made for phones by Nick de Groot, with its own hazards, medal tiers and abilities. It is not affiliated with WeirdBeard.",
      },
    ],
  },
  {
    slug: "offline-puzzle-games-no-wifi",
    title: "Offline puzzle games that do not need wifi",
    description:
      "Puzzle games for iPhone and Android that start and play with the network off, and how to check a game really works offline before you need it.",
    date: "2026-09-06",
    tags: ["offline", "puzzle", "list"],
    mentionsOtherGames: true,
    sections: [
      {
        paragraphs: [
          "A puzzle game that does not need wifi is one you can open in airplane mode and play immediately, not one with an offline mode you have to find first. These do, once installed. Where a game has a condition, it is written next to it.",
        ],
      },
      {
        bullets: [
          "Hazard Heights. Physics block stacking in portrait, a few minutes a round. " + OFFLINE_NOTE,
          "Threes. Slide numbered tiles, merge them, keep going. Fully offline.",
          "Mini Metro. Draw a subway map that keeps up with the city. Fully offline.",
          "Monument Valley and Monument Valley 2. Short, offline, finishable in an afternoon.",
          "Baba Is You. Rule-rewriting puzzles, hundreds of them. Offline.",
          "Really Bad Chess. Chess with random pieces. Offline, and better than it sounds.",
          "Good Sudoku. Offline, with a proper hint system.",
        ],
      },
      {
        heading: "How to check before you need it",
        bullets: [
          "Turn on airplane mode at home and open the game. If it shows a login screen or a spinner, it needs the network.",
          "Play one full round and close the app, then reopen it. If your progress is there, saves are local.",
          "If a game is free with ads, check that a failed ad does not block play. Paid games and games with optional ads avoid this.",
        ],
      },
    ],
    faq: [
      {
        q: "Do offline games save my progress?",
        a: "Most save locally and sync later if they have accounts. Test it once at home: play a round in airplane mode, close the app, reopen it.",
      },
      {
        q: "Does Hazard Heights need wifi?",
        a: "Free play needs a connection to start a run. Hazard Heights Unlimited, the one-time purchase, unlocks offline play; those runs are unranked and sync when you reconnect.",
      },
    ],
  },
];

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);
