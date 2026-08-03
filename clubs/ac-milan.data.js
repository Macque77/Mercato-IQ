/* ============================================================
   MERCATO IQ · CLUB DATA · AC MILAN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AC Milan",
  mono: "MIL",
  slug: "ac-milan",
  primary: "#DC143C",
  primaryBright: "#FF3333",
  primaryDeep: "#990000",
  primaryRgb: "220,20,60",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Paulo Fonseca",
  dof: "Geoffrey Moncada (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "2nd Serie A (2025/26)",
  owner: "Gerry Cardinale (Owner)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["AC Milan transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AC Milan"
};

const CONFIRMED_IN = [
  {name:"Jadon Sancho", sub:"24 · LW/RW · England", to:"permanent from Manchester United", fee:"Free agent", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 20 Jul. English winger joins as free agent after Manchester United departure. Adds pace and creativity to Milan attack."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Dusan Vlahović", sub:"24 · ST · Serbia", club:"Juventus", pos:"ST", report:"2 Aug 2026", src:"Rudy Galetti / Nico Schira (Sky Italia)", tier:2, fee:"€70m", truth:48, prob:25, light:"r", trend:"down", note:"Italian sources previously reported Milan interest, but Juventus shows no willingness to sell. Low probability move."},
  {name:"Tammy Abraham", sub:"28 · ST · England", club:"AS Roma", pos:"ST", report:"29 Jul 2026", src:"David Ornstein / The Athletic", tier:1, fee:"€35m", truth:72, prob:58, light:"y", trend:"up", note:"Ornstein reports Milan serious interest in Roma striker as potential alternative to top target. Fee structured with bonuses."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Jadon Sancho official</b>: Free agent signing completed from Manchester United."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Vlahović to Milan</b>: Juventus stance remains firm; transfer highly unlikely."}
];

const NEW = [
  {ar:"✦", t:"Milan focused on forward depth with Sancho arrival; Abraham negotiations ongoing."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Striker", w:75, x:"Abraham pursuit signals move for additional striking depth alongside Sancho."}
];

const WATCHLIST = [
  {name:"Jadon Sancho", club:"AC Milan", pos:"LW/RW", dir:"in", age:"~14 days", tier:1, note:"OFFICIAL - English winger confirmed as free agent signing."},
  {name:"Tammy Abraham", club:"AS Roma", pos:"ST", dir:"in", age:"~5 days", tier:1, note:"David Ornstein confirms Milan pursuing Roma striker for €35m."}
];

const HUB = {
  club: {l:"AC Milan Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AC Milan · 2026/27 Season`,
  heroLede: `Transfer window active. AC Milan preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
