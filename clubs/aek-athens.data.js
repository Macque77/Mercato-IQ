/* ============================================================
   MERCATO IQ · CLUB DATA · AEK ATHENS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AEK Athens",
  mono: "AEK",
  slug: "aek-athens",
  primary: "#FDB900",
  primaryBright: "#FDB900",
  primaryDeep: "#FDB900",
  primaryRgb: "100,100,100",
  breadcrumb: ["Greece", "Super League"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Giannis Sfairopoulos",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "2nd Super League (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["AEK Athens transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AEK Athens"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Oussama El Khannouss", sub:"23 · CM · Morocco", club:"Leicester City", pos:"CM", report:"31 Jul 2026", src:"Sky Sports", tier:2, fee:"€15m", truth:58, prob:40, note:"Sky reports AEK pursuing midfielder from Leicester.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
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
  "Oussama El Khannouss": ["sky"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AEK Athens · 2026/27 Season`,
  heroLede: `Transfer window active. AEK Athens preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
