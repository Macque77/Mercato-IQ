/* ============================================================
   MERCATO IQ · CLUB DATA · GALATASARAY SK · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Galatasaray SK",
  mono: "GAL",
  slug: "galatasaray",
  primary: "#DC2426",
  primaryBright: "#DC2426",
  primaryDeep: "#DC2426",
  primaryRgb: "100,100,100",
  breadcrumb: ["Turkey", "Super Lig"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Okan Buruk",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "1st Super Lig (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Galatasaray SK transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Galatasaray SK"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Álvaro Soler", sub:"26 · RW · Spain", club:"Montpellier", pos:"RW", report:"1 Aug 2026", src:"Sky Sports Turkey", tier:2, fee:"€10m", truth:56, prob:42, note:"Sky reports Galatasaray interest in Spanish winger."}
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
  "Álvaro Soler": ["sky"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Galatasaray SK · 2026/27 Season`,
  heroLede: `Transfer window active. Galatasaray SK preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
