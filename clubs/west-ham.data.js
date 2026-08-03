/* ============================================================
   MERCATO IQ · CLUB DATA · WEST HAM UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "West Ham United", mono: "WHU", slug: "west-ham",
  primary: "#7A263A", primaryBright: "#C9AB7C", primaryDeep: "#4A1723",
  primaryRgb: "122,38,58",
  breadcrumb: ["England","Championship"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "18th Premier League (2025/26) - relegated",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["west-ham transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Mateus Fernandes", sub:"21 · CM · Portugal", club:"Tottenham Hotspur", pos:"CM", fee:"£85m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed as part of Spurs' summer rebuild - a club-record sale for West Ham as Fernandes completes a £85m move to Tottenham alongside their Sandro Tonali deal."},
  {name:"Freddie Potts", sub:"MF", club:"Club Brugge", pos:"MF", fee:"£10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Given permission to undergo a medical, per Ben Jacobs, about as advanced as it gets short of the unveiling."},
  {name:"Freddie Potts", sub:"MF", club:"Club Brugge", pos:"MF", fee:"£10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Given permission to undergo a medical, per Ben Jacobs, about as advanced as it gets short of the unveiling."}
];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [
  {ar:"⬇", t:"<b>Mateus Fernandes</b>: permanent departure to Tottenham Hotspur now done and official for £85m."}
];
const NEW = [
  {ar:"✦", t:"West Ham bank a club-record £85m fee as Mateus Fernandes completes his move to Tottenham Hotspur."}
];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-mateusfernandes": {l:"Related news search: Mateus Fernandes", u:"https://news.google.com/search?q=West%20Ham%20United%20Mateus%20Fernandes%20transfer&hl=en-GB&gl=GB"},
  "gnews-freddiepotts": {l:"Related news search: Freddie Potts", u:"https://news.google.com/search?q=West%20Ham%20United%20Freddie%20Potts%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Mateus Fernandes": ["gnews-mateusfernandes"],
  "Freddie Potts": ["gnews-freddiepotts"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `West Ham United · 2026/27 Season`,
  heroLede: `Transfer window active. West Ham United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};