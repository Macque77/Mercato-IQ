/* ============================================================
   MERCATO IQ · CLUB DATA · WERDER BREMEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Werder Bremen",
  mono: "WER",
  slug: "werder-bremen",
  primary: "#033D0B",
  primaryBright: "#033D0B",
  primaryDeep: "#033D0B",
  primaryRgb: "100,100,100",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Ole Werner",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "14th Bundesliga (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Werder Bremen transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Werder Bremen"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Niclas Füllkrug", sub:"31 · ST · Germany", club:"Free agent (Werder)", pos:"ST", report:"2 Aug 2026", src:"Kicker", tier:2, fee:"Contract renewal", truth:75, prob:82, note:"Kicker reports Werder close to Füllkrug contract extension."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  club: {l:"Werder Bremen Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Werder Bremen · 2026/27 Season`,
  heroLede: `Transfer window active. Werder Bremen preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
