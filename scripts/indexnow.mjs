// Tell Bing (and everyone on the IndexNow protocol: Yandex, Seznam, Naver) that pages changed.
// Bing feeds ChatGPT search and Copilot, so this is the fastest path into AI answers.
// Usage: npm run indexnow   (after a deploy - the key file must be live at /<key>.txt)
import { readFileSync } from "node:fs";

const key = readFileSync(new URL("../.indexnow", import.meta.url), "utf8").split("=")[1].trim();
const site = "https://hazardheights.com";
const sitemap = await (await fetch(`${site}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: "hazardheights.com", key, keyLocation: `${site}/${key}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
