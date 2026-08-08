// Single source of truth for the whole site. Change it here, it changes everywhere.
export const SITE = {
  name: "Hazard Heights",

  domain: "hazardheights.com",
  url: "https://hazardheights.com",
  supportEmail: "support@hazardheights.com",
  privacyEmail: "privacy@hazardheights.com",

  developer: "Nick de Groot",
  jurisdiction: "the Netherlands",
  effectiveDate: "8 August 2026",

  // Renders a "draft" banner on /privacy and /terms. Off — the pages read as final.
  // The banner mechanism is kept in case the copy ever needs flagging again mid-review.
  legalIsDraft: false,

  // Fill the URLs in once the listings exist; `live` flips the buttons on.
  stores: {
    ios: { url: "", live: false },
    android: { url: "", live: false },
  },

  // Named in the privacy policy. Keep in sync with the SDKs actually shipped
  // (GOLIVE.md Phase 5 re-checks this against the final build).
  subprocessors: [
    {
      name: "Supabase",
      role: "Accounts, saved progress, leaderboards",
      region: "EU (Stockholm)",
    },
    {
      name: "Google AdMob (via Unity LevelPlay)",
      role: "Rewarded video ads, only when you choose to watch one",
      region: "Global",
    },
    { name: "Unity", role: "The in-app purchase flow", region: "Global" },
    {
      name: "Apple App Store / Google Play",
      role: "Distribution, payments, receipt checks",
      region: "Global",
    },
  ],
} as const;
