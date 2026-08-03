/* ============================================================
   MERCATO IQ · CLUB DATA · WOLVERHAMPTON WANDERERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Wolverhampton Wanderers", mono: "WW", slug: "wolverhampton",
  primary: "#FDB913", primaryBright: "#FFE066", primaryDeep: "#8F6900",
  primaryRgb: "253,185,19",
  breadcrumb: ["England","Championship"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "19th Premier League (2025/26) - relegated",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["wolverhampton transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Kieran Trippier", sub:"35 · RB · England", club:"Newcastle United", pos:"RB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer, medical completed 8 June 2026 on a two-year deal with an optional third."}
];
const CONFIRMED_OUT = [
  {name:"Matt Doherty", sub:"34 · RB · Ireland", club:"Sheffield United", pos:"RB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released on a free transfer, confirmed by Sheffield United's own unveiling."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"João Gomes", sub:"MF · Brazil", club:"Atlético Madrid", pos:"MF", report:"~1 wk ago", src:"BBC / Molineux News", tier:2, fee:"£39-40m", truth:70, prob:60, light:'g', trend:'up', note:"Fee reportedly agreed, though one outlet says Atlético have put the bid on hold, live but not over the line."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Wolverhampton Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wolverhampton Wanderers · 2026/27 Season`,
  heroLede: `Transfer window active. Wolverhampton Wanderers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};