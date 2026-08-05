/* ============================================================
   MERCATO IQ · CLUB DATA · UPL ALESSANDRIA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "UPL Alessandria", mono: "UA", slug: "alessandria",
  primary: "#4A4A4A", primaryBright: "#B0B0B0", primaryDeep: "#2A2A2A",
  primaryRgb: "74,74,74",
  breadcrumb: ["Italy","Serie C"]
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
  queries: ["alessandria transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Diego Larotonda", sub:"Italy · CM", club:"", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Announced as the Grigi's first signing of the window by the local Alessandria broadcaster. No tier-1 corroboration and no fee disclosed, so the financial detail is unverified."},
  {name:"Stevo Chillemi", sub:"21 · France-born · ST", club:"", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially confirmed by the club per Radiogold, a forward able to play as a centre forward or second striker. Selling club and fee were not reported, so they are omitted rather than assumed."},
  {name:"Gabriele Balan", sub:"Italy · CM", club:"", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported by Il Piccolo as another midfield addition for coach Sesia. Single local outlet only and no terms given, so details beyond the arrival itself should be treated cautiously."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Alessandria Official", u:"#"},
  radiogoldDiegoLarotonda: {l:"Radiogold", u:"https://radiogold.it/news/categoria/news-alessandria/sport/notizie-calcio/alessandria-calcio/"},
  ilPiccoloGabrieleBalan: {l:"Il Piccolo", u:"https://www.ilpiccolo.net/sezione/alessandria-calcio/"}};

const LINKMAP = {
  "Diego Larotonda": ["radiogoldDiegoLarotonda"],
  "Stevo Chillemi": ["radiogoldDiegoLarotonda"],
  "Gabriele Balan": ["ilPiccoloGabrieleBalan"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `UPL Alessandria · 2026/27 Season`,
  heroLede: `Transfer window active. UPL Alessandria preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};