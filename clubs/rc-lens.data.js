/* ============================================================
   MERCATO IQ · CLUB DATA · RC LENS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RC Lens",
  mono: "RC ",
  slug: "rc-lens",
  primary: "#FDB400",
  primaryBright: "#FDB400",
  primaryDeep: "#FDB400",
  primaryRgb: "100,100,100",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Will Still",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "4th Ligue 1 (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["RC Lens transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · RC Lens"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Rafael Leão", sub:"24 · LW · Portugal", club:"AC Milan", pos:"LW", report:"1 Aug 2026", src:"L'Équipe", tier:2, fee:"€70m", truth:45, prob:22, note:"L'Équipe reports Lens monitoring; Milan unlikely to sell star winger."},
  {name:"Jonathan David", sub:"24 · ST · Canada", club:"LOSC Lille", pos:"ST", report:"31 Jul 2026", src:"Sky Sports France", tier:2, fee:"€45m", truth:52, prob:32, note:"Sky reports Lens interest in Lille striker; deal unlikely from Ligue 1 rivals."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  club: {l:"RC Lens Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `RC Lens · 2026/27 Season`,
  heroLede: `Transfer window active. RC Lens preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
