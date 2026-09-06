# hazard-heights-web

Marketing and legal site for the Hazard Heights mobile game. Static Next.js — no server,
no database, no CMS.

Lives alongside the game repo (`../MadTowers`) but deploys independently, so a store-listing
URL is never blocked on a game commit.

## Run it

```bash
npm run dev     # http://localhost:3000
npm run build   # static export → ./out
```

## Change the copy

Almost everything routes through **`src/site.config.ts`** — name, domain, emails, store
links, subprocessor list, the legal draft banner. Change it there, not in the pages.

## Pages

| Route | Why it exists |
|---|---|
| `/` | Homepage: positioning copy, screenshots, features, offline section, FAQ (FAQPage + VideoGame structured data). Never names another game — comparisons live in the blog. |
| `/press/` | Press kit: one-paragraph description, fact table, downloadable art in `public/press/`. |
| `/feed.xml`, `/llms.txt`, `/manifest.webmanifest` | RSS for the blog, an AI-crawler summary of the site, web app manifest. |
| `/blog/`, `/blog/<slug>/` | Hardcoded posts in `src/content/posts.ts` (Article + FAQPage structured data per post). Written to be the indexed answer for "offline games for a flight", "games like Tricky Towers on mobile", etc. House rules at the top of that file: offline = the one-time purchase, never state chapter/block totals, other games named descriptively with a trademark note. |
| `/privacy/` | **Required** — both stores ask for a privacy policy URL |
| `/terms/` | Terms of service |
| `/support/` | **Required** — Apple asks for a support URL |
| `/delete-account/` | **Required by Google Play** — a publicly reachable account/data deletion URL that works without installing the app |

## Before launch

1. **Set the domain** in `src/site.config.ts` (`domain`, `url`, both emails) — currently
   `hazardheights.com` as a placeholder.
2. **Set up the email addresses** so `support@` and `privacy@` actually deliver.
3. **Fill in the store URLs** in `site.config.ts` and flip `live: true` — the buttons turn
   from "Coming soon" into real links.
4. **Review the legal copy**, then set `legalIsDraft: false` to drop the draft banner.
5. **Add the images** — see `PROMPTS.md`. `shot-1..4.png` must be real gameplay captures.
6. **Update the game's constants** to point here — `PrivacyPolicyUrl`, `TermsUrl` and
   `SupportEmail` in `MainMenuRuntime.Settings.cs:529` still say `madtowers.app`.

## After every deploy

`npm run indexnow` pings Bing/IndexNow with every sitemap URL (key in `.indexnow`, key file in
`public/`). Bing feeds ChatGPT search and Copilot. Google has no ping any more; Search Console +
the sitemap cover it. Register the domain once in Google Search Console and Bing Webmaster Tools.

## Deploy (Vercel)

Push to GitHub, import the repo in Vercel, accept the detected Next.js settings, add the
custom domain. Nothing else to configure — `output: "export"` means it is plain static
files, so Cloudflare Pages or GitHub Pages would work identically from `./out`.
