/* ============================================================
   MERCATO IQ · CLUB DATA · AS ROMA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AS Roma",
  mono: "ROM",
  slug: "as-roma",
  primary: "#FDBF08",
  primaryBright: "#FFD000",
  primaryDeep: "#E6A200",
  primaryRgb: "253,191,8",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Daniele De Rossi",
  dof: "Florent Ghisolfi (Director)",
  europe: "UEFA Europa League (2026/27)",
  finish: "5th Serie A (2025/26)",
  owner: "Friedkin Group",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["AS Roma transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AS Roma"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Paulo Dybala", sub:"30 · CAM/ST · Argentina", club:"Juventus", pos:"CAM/ST", fee:"Free agent", free:true, status:"done", statusTxt:"DONE, EXIT", note:"Contract expired 30 Jun. Dybala departs as free agent; Juventus completed signing."}
];

const INCOMING = [
  {name:"Serhou Guirassy", sub:"24 · ST · Guinea", club:"RB Leipzig", pos:"ST", report:"31 Jul 2026", src:"Matteo Moretto / Fabrizio Romano (Sky Italia)", tier:2, fee:"€30m", truth:58, prob:40, light:"y", trend:"up", note:"Romano and Moretto report Roma in talks with Leipzig for young striker. Deal not finalized but discussions advanced."},
  {name:"Jeremie Freuler", sub:"29 · CM · Switzerland", club:"Atalanta", pos:"CM", report:"28 Jul 2026", src:"Corriere della Sera", tier:2, fee:"€15m", truth:45, prob:28, light:"o", trend:"flat", note:"Roma monitoring Atalanta's midfielder as squad depth option. Atalanta not eager sellers."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [
  {ar:"⬇", t:"<b>Paulo Dybala exits</b>: Argentine leaves on free transfer to Juventus."}
];

const NEW = [
  {ar:"✦", t:"Roma rebuild squad with Guirassy pursuit as Dybala departs to Juventus."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Striker", w:80, x:"Dybala exit creates major void. Guirassy represents potential replacement."}
];

const WATCHLIST = [
  {name:"Serhou Guirassy", club:"RB Leipzig", pos:"ST", dir:"in", age:"~4 days", tier:1, note:"Romano and Moretto: Roma in advanced talks with Leipzig for forward."},
  {name:"Paulo Dybala", club:"Juventus", pos:"CAM/ST", dir:"out", age:"~35 days", tier:1, note:"CONFIRMED - Argentine exits as free agent to Juventus."}
];

const HUB = {
  club: {l:"AS Roma Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AS Roma · 2026/27 Season`,
  heroLede: `Transfer window active. AS Roma preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
