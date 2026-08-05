/* ============================================================
   MERCATO IQ · CLUB DATA · STANDARD LIÈGE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Standard Liège",
  mono: "STA",
  slug: "standard-liege",
  primary: "#FF0000",
  primaryBright: "#FF0000",
  primaryDeep: "#FF0000",
  primaryRgb: "100,100,100",
  breadcrumb: ["Belgium", "Pro League"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luka Elsner",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "5th Pro League (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Standard Liège transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Standard Liège"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Andi Zeqiri", sub:"24 · ST · Switzerland", club:"Augsburg", pos:"ST", report:"30 Jul 2026", src:"RTBF", tier:2, fee:"€12m", truth:56, prob:38, note:"RTBF reports Standard monitoring Swiss striker from Augsburg.", lastSeen:"2026-08-04T19:10:50Z", baseProb:38}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "rtbf": {l:"RTBF Sport", u:"https://www.rtbf.be/sport/football"}
};

const LINKMAP = {
  "Andi Zeqiri": ["rtbf"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Standard Liège · 2026/27 Season`,
  heroLede: `Transfer window active. Standard Liège preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
