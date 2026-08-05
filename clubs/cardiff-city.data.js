/* ============================================================
   MERCATO IQ · CLUB DATA · CARDIFF CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Cardiff City", mono: "CC", slug: "cardiff-city",
  primary: "#0070B8", primaryBright: "#5CA9FF", primaryDeep: "#003F66",
  primaryRgb: "0,112,184",
  breadcrumb: ["Wales","Championship"]
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
  queries: ["cardiff-city transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Omari Kellyman", sub:"19 · AM · England", club:"Chelsea", pos:"AM", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Cardiff's third summer signing under Brian Barry-Murphy, on the record with player quotes already given."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Jack Moylan", sub:"24 · Republic of Ireland · AM", club:"Lincoln City", pos:"Attacking midfielder", report:"Cardiff are in advanced talks and closing in on the League One title winner, who scored 11 times last season, as the Bluebirds finally move in the market after promotion.", src:"Pete O'Rourke", tier:2, fee:"Undisclosed", truth:88, prob:82, light:"g", trend:"flat", note:"Reported by a well-connected EFL correspondent rather than a tier-1 name, and no fee has been put on the record, so treat the structure of the deal with caution until Cardiff announce.", lastSeen:"2026-08-05T17:03:23Z", baseProb:82}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-omarikellyman": {l:"Related news search: Omari Kellyman", u:"https://news.google.com/search?q=Cardiff%20City%20Omari%20Kellyman%20transfer&hl=en-GB&gl=GB"},
  peteORourkeJackMoylan: {l:"Pete O'Rourke", u:"https://x.com/SportsPeteO/status/2083511106371236130"}};

const LINKMAP = {
  "Omari Kellyman": ["gnews-omarikellyman"],
  "Jack Moylan": ["peteORourkeJackMoylan"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Cardiff City · 2026/27 Season`,
  heroLede: `Transfer window active. Cardiff City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};