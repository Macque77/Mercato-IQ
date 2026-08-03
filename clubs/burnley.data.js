/* ============================================================
   MERCATO IQ · CLUB DATA · BURNLEY · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026, verified via live search): Burnley
   were promoted to the Premier League for 2025/26, but were
   relegated straight back down that same season (finished 20th,
   alongside West Ham United and Wolverhampton Wanderers). For
   2026/27 they are a Championship club, not Premier League.
   ============================================================ */

const BRAND = {
  club: "Burnley", mono: "BUR", slug: "burnley",
  primary: "#6C1D45", primaryBright: "#8C2D5F", primaryDeep: "#4A1230",
  primaryRgb: "108,29,69",
  breadcrumb: ["England","Championship"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Scott Parker",
  dof: "Craig Weston (Head of Recruitment)",
  europe: "None (2026/27)",
  finish: "20th Premier League (2025/26) - relegated",
  owner: "ALK Capital (Alan Pace, Chairman)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/Championship/Burnley/Transfer+News", "https://www.lancashiretelegraph.co.uk/sport/burnley-fc/"],
  queries: ["Burnley transfer news 2026", "Burnley bid OR medical OR 'here we go'"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Burnley"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Burnley rebuild for an immediate promotion push after their 2025/26 Premier League relegation (20th, alongside West Ham and Wolves)."}
];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Burnley FC Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Burnley · 2026/27 Season`,
  heroLede: `Transfer window active. Burnley preparing for an immediate Championship return under Scott Parker after being relegated from the Premier League in 2025/26 alongside West Ham United and Wolverhampton Wanderers.`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">20<small>th</small></div></div><div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
