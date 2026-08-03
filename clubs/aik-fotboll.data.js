/* ============================================================
   MERCATO IQ · CLUB DATA · AIK FOTBOLL · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AIK Fotboll",
  mono: "AIK",
  slug: "aik-fotboll",
  primary: "#000000",
  primaryBright: "#000000",
  primaryDeep: "#000000",
  primaryRgb: "100,100,100",
  breadcrumb: ["Sweden", "Allsvenskan"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Tobias Weis",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "1st Allsvenskan (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["AIK Fotboll transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AIK Fotboll"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Sotirios Papagiannopoulos", sub:"26 · CB · Greece", club:"AEK Athens", pos:"CB", report:"30 Jul 2026", src:"Sky Sports", tier:2, fee:"€6m", truth:54, prob:40, note:"Sky reports AIK monitoring Greek defender."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"}
};

const LINKMAP = {
  "Sotirios Papagiannopoulos": ["sky"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AIK Fotboll · 2026/27 Season`,
  heroLede: `Transfer window active. AIK Fotboll preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
