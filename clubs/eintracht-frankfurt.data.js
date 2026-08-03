/* ============================================================
   MERCATO IQ · CLUB DATA · EINTRACHT FRANKFURT · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Eintracht Frankfurt",
  mono: "EIN",
  slug: "eintracht-frankfurt",
  primary: "#E20E0E",
  primaryBright: "#E20E0E",
  primaryDeep: "#E20E0E",
  primaryRgb: "100,100,100",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Dino Toppmöller",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "7th Bundesliga (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Eintracht Frankfurt transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Eintracht Frankfurt"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Trent Alexander-Arnold", sub:"25 · RB · England", club:"Liverpool", pos:"RB", report:"1 Aug 2026", src:"BILD", tier:2, fee:"€55m", truth:35, prob:18, note:"BILD reports Frankfurt interest; Liverpool not motivated to sell."},
  {name:"Sam Lammers", sub:"24 · ST · Netherlands", club:"PSV Eindhoven", pos:"ST", report:"29 Jul 2026", src:"Sky Deutschland", tier:2, fee:"€20m", truth:54, prob:38, note:"Sky reports Frankfurt pursuing Dutch striker from PSV."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  club: {l:"Eintracht Frankfurt Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Eintracht Frankfurt · 2026/27 Season`,
  heroLede: `Transfer window active. Eintracht Frankfurt preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
