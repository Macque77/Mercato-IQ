/* ============================================================
   MERCATO IQ · CLUB DATA · HEART OF MIDLOTHIAN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Heart of Midlothian", mono: "HOM", slug: "heart-of-midlothian",
  primary: "#7C2529", primaryBright: "#E0636B", primaryDeep: "#4A1517",
  primaryRgb: "124,37,41",
  breadcrumb: ["Scotland","Premiership"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "TBD (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["heart-of-midlothian transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Beau Reus", sub:"GK", club:"Undisclosed (Netherlands)", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed following Craig Gordon's retirement."},
  {name:"Kamson-Kamara", sub:"Undisclosed", club:"Lincoln City", pos:"N/A", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Guendouz", sub:"FW", club:"Beerschot", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing."},
  {name:"Mato", sub:"Undisclosed", club:"Undisclosed", pos:"N/A", fee:"Initial loan, now permanent", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan converted to a permanent deal."}
];
const CONFIRMED_OUT = [
  {name:"Lawrence Shankland", sub:"FW", club:"Rangers", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit to a direct rival."},
  {name:"Cammy Devlin", sub:"MF", club:"Rangers", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed exit, moderate-confidence detail."},
  {name:"Adam Forrester", sub:"DF", club:"Ross County", pos:"DF", fee:"Season-long loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loaned out for the season."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Claudio Braga", sub:"FW", club:"Celtic", pos:"FW", report:"~1 wk ago", src:"Yahoo Sports", tier:3, fee:"Undisclosed", truth:50, prob:30, light:'y', trend:'flat', note:"Early-stage interest reported from Celtic."},
  {name:"Unnamed Hearts striker", sub:"ST", club:"Undisclosed", pos:"ST", report:"~1 wk ago", src:"The Scotsman", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"Reported to be nearing an exit, player not named."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Heart of Midlothian Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Heart of Midlothian · 2026/27 Season`,
  heroLede: `Transfer window active. Heart of Midlothian preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
