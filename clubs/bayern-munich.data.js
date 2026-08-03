/* ============================================================
   MERCATO IQ · CLUB DATA · BAYERN MUNICH · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bayern Munich",
  mono: "FCB",
  slug: "bayern-munich",
  primary: "#DC143C",
  primaryBright: "#FF4444",
  primaryDeep: "#8B0000",
  primaryRgb: "220,20,60",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Thomas Tuchel",
  dof: "Christoph Freund (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "3rd Bundesliga (2025/26)",
  owner: "Allianz Arena (Uli Hoeneß, President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Bayern Munich transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Bayern Munich"
};

const CONFIRMED_IN = [
  {name:"Hirving Lozano", sub:"28 · RW · Mexico", to:"permanent from PSV Eindhoven", fee:"€21m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 25 Jun. The Mexican winger rejoins Bayern after loan spell, bringing pace and experience to right wing position."}
];

const CONFIRMED_OUT = [
  {name:"Jamal Musiala", sub:"23 · LW/CAM · Germany", club:"Atlético Madrid", pos:"LW/CAM", fee:"€110m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Announced 28 Jul. Musiala departs for Atlético Madrid in blockbuster deal as Bayern restructure attacking options."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Bayern's summer business complete: Lozano in for €21m, Musiala out for €110m. Squad reshuffled around Tuchel's tactics."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Left winger", w:85, x:"Musiala's departure creates major void. Recruitment focus for final weeks of window."}
];

const WATCHLIST = [];

const HUB = {
  club: {l:"Bayern Munich Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Bayern Munich · 2026/27 Season`,
  heroLede: `Transfer window active. Bayern Munich preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
