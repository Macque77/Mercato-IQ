/* ============================================================
   MERCATO IQ · CLUB DATA · OLYMPIQUE LYONNAIS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Olympique Lyonnais",
  mono: "OLY",
  slug: "olympique-lyon",
  primary: "#003DA5",
  primaryBright: "#003DA5",
  primaryDeep: "#003DA5",
  primaryRgb: "100,100,100",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Pierre Sage",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "3rd Ligue 1 (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Olympique Lyonnais transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Olympique Lyonnais"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Florian Thauvin", sub:"31 · RW · France", club:"Free agent (Udinese)", pos:"RW", report:"1 Aug 2026", src:"RMC Sport", tier:2, fee:"Free agent", truth:62, prob:48, note:"RMC reports Lyon in talks with veteran winger after Udinese exit."},
  {name:"Madison Ingram", sub:"20 · CM · England", club:"Chelsea", pos:"CM", report:"28 Jul 2026", src:"Fabrizio Romano", tier:1, fee:"€30m", truth:71, prob:55, note:"Romano reports Chelsea open to loan move for young midfielder to Lyon."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  club: {l:"Olympique Lyonnais Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Olympique Lyonnais · 2026/27 Season`,
  heroLede: `Transfer window active. Olympique Lyonnais preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
