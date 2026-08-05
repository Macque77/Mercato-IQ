/* ============================================================
   MERCATO IQ · CLUB DATA · WATFORD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Watford", mono: "W", slug: "watford",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
  breadcrumb: ["England","Championship"]
};

const VOLATILE = {
  verified: "2026-07-29",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["watford transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Jordan Zemura", sub:"LB · Zimbabwe", club:"loan from Bournemouth", pos:"LB", fee:"Loan to 30 Jun 2027", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan from Bournemouth, confirmed via Di Marzio's live mercato digest."},
  {name:"Iker Bravo", sub:"ST · Spain", club:"permanent from Udinese", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer confirmed via Di Marzio's live mercato digest."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Nestory Irankunda", sub:"20 · W · Australia", club:"Sporting CP", pos:"W", report:"31 Jul 2026", src:"Nicolo Schira", tier:1, fee:"~€22m (bonuses included)", truth:55, prob:45, light:"y", trend:"flat", note:"Schira: agreement in principle on personal terms to 2031, with Sporting racing other suitors to close the deal.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Watford Official", u:"#"},
  nicoloSchiraNestoryIrankunda: {l:"Nicolo Schira", u:"https://www.transferfeed.com/transfers/nestory-irankunda-watford-sporting-cp/43982109"},
  gianlucaDiMarzioJordanZemura: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-notizie-giornata-2-agosto-2026-495426"},
  gianlucaDiMarzioIkerBravo: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-notizie-news-24-luglio-2026-495120"}};

const LINKMAP = {
  "Nestory Irankunda": ["nicoloSchiraNestoryIrankunda"],
  "Jordan Zemura": ["gianlucaDiMarzioJordanZemura"],
  "Iker Bravo": ["gianlucaDiMarzioIkerBravo"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Watford · 2026/27 Season`,
  heroLede: `Transfer window active. Watford preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};