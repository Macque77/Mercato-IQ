/* ============================================================
   MERCATO IQ · CLUB DATA · 1. FC HEIDENHEIM · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "1. FC Heidenheim", mono: "1FH", slug: "1-fc-heidenheim",
  primary: "#004B87", primaryBright: "#5CA9FF", primaryDeep: "#002E52",
  primaryRgb: "0,75,135",
  breadcrumb: ["Germany","2. Bundesliga"]
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
  queries: ["1-fc-heidenheim transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Niklas Dorsch", sub:"28 · Germany · M", club:"Toronto FC", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreement struck while Heidenheim were at their training camp in Natz-Schabs, South Tyrol. Dorsch had made clear he wanted the MLS move. Fee not disclosed by either club, so treat the financials with caution."}
];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"1-Fc-Heidenheim Official", u:"#"},
  getGermanFootballNewsviaYahooSportsNiklasDorsch: {l:"Get German Football News via Yahoo Sports", u:"https://sports.yahoo.com/articles/official-dorsch-departs-1-fc-151800870.html"}};

const LINKMAP = {
  "Niklas Dorsch": ["getGermanFootballNewsviaYahooSportsNiklasDorsch"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `1. FC Heidenheim · 2026/27 Season`,
  heroLede: `Transfer window active. 1. FC Heidenheim preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};