/* ============================================================
   MERCATO IQ · CLUB DATA · SHEFFIELD UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Sheffield United", mono: "SU", slug: "sheffield-united",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
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
  queries: ["sheffield-united transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Matt Doherty", sub:"34 · RB · Ireland", club:"Wolverhampton Wanderers", pos:"RB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer, one-year deal plus option, already unveiled with a manager quote."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Nicolas Valentini", sub:"25 · CB · Argentina", club:"Fiorentina", pos:"CB", report:"~2 wks ago", src:"The Star", tier:3, fee:"Undisclosed", truth:45, prob:25, light:'o', trend:'flat', note:"Explicitly framed as United exploring with no official approach lodged yet."},
  {name:"Kalvin Phillips", sub:"30 · MF · England", club:"Manchester City", pos:"MF", report:"~1 wk ago", src:"City Xtra / The Star", tier:3, fee:"Loan", truth:55, prob:35, light:'y', trend:'up', note:"Player reportedly keen and City want to trim wages, gives this more legs than the average kite-flying loan link."},
  {name:"Rabbi Matondo", sub:"W", club:"SK Brann", pos:"W", report:"~2 wks ago", src:"The Star", tier:3, fee:"Undisclosed", truth:45, prob:20, light:'o', trend:'flat', note:"Described as under consideration only, nothing concrete."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Sheffield-United Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Sheffield United · 2026/27 Season`,
  heroLede: `Transfer window active. Sheffield United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};