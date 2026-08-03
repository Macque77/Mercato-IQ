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

const CONFIRMED_IN = [
  {name:"Lluc Castell", sub:"LW", club:"Espanyol", pos:"LW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival as Burnley rebuild for an immediate promotion push."}
];
const CONFIRMED_OUT = [
  {name:"Martin Dubravka", sub:"GK", club:"Tottenham Hotspur", pos:"GK", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released on a free transfer."},
  {name:"Jaidon Anthony", sub:"LW", club:"Brentford", pos:"LW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit."},
  {name:"Loum Tchaouna", sub:"LW", club:"Coventry City", pos:"LW", fee:"£20m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed sale as part of Burnley's post-relegation rebuild."},
  {name:"Maxime Esteve", sub:"CB", club:"RB Leipzig", pos:"CB", fee:"£27.3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed sale, one of the bigger fees of Burnley's summer clear-out."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Florentino Luis", sub:"26 · MF · Portugal", club:"Ipswich Town", pos:"MF", report:"~3 days ago", src:"Fabrizio Romano / East Anglian Daily Times", tier:1, fee:"£16m", truth:92, prob:90, light:'g', trend:'up', note:"Romano-level sourcing with agreement reached language, about as close to done as it gets before the medical."},
  {name:"Andreas Hountondji", sub:"24 · ST · Benin", club:"Frosinone", pos:"ST", report:"~1 wk ago", src:"Nicolò Schira", tier:3, fee:"Undisclosed", truth:55, prob:45, light:'y', trend:'up', note:"Schira has a mixed but not terrible track record here, edging closer language suggests it is real but terms are still to be nailed down."}
];
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
