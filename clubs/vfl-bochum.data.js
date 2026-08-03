/* ============================================================
   MERCATO IQ · CLUB DATA · VFL BOCHUM · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "VfL Bochum",
  mono: "VFL",
  slug: "vfl-bochum",
  primary: "#00427A",
  primaryBright: "#00427A",
  primaryDeep: "#00427A",
  primaryRgb: "100,100,100",
  breadcrumb: ["Germany", "2. Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Dieter Hecking",
  dof: "TBD (Director)",
  europe: "None (2. Bundesliga)",
  finish: "10th 2. Bundesliga (2025/26) - not promoted",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["VfL Bochum transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · VfL Bochum"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Elia Caprile", sub:"20 · GK · Italy", club:"Empoli", pos:"GK", report:"30 Jul 2026", src:"Sky Deutschland", tier:2, fee:"€12m", truth:58, prob:44, note:"Sky reports Bochum interested in young Italian goalkeeper."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "skydeutschland": {l:"Sky Sport Deutschland", u:"https://sportnews.bz/"}
};

const LINKMAP = {
  "Elia Caprile": ["skydeutschland"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `VfL Bochum · 2026/27 Season`,
  heroLede: `Transfer window active. VfL Bochum preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
