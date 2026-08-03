/* ============================================================
   MERCATO IQ · CLUB DATA · STOKE CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Stoke City", mono: "SC", slug: "stoke-city",
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
  queries: ["stoke-city transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ethan Galbraith", sub:"MF", club:"Swansea City", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival."},
  {name:"Lewis Koumas", sub:"18 · FW", club:"Liverpool", pos:"FW", fee:"Season-long loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"BBC Sport confirms the loan; already ineligible for the season opener due to being registered too late."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"George Hirst", sub:"27 · ST · Scotland", club:"Ipswich Town", pos:"ST", report:"~3 days ago", src:"Football Insider (Pete O'Rourke)", tier:2, fee:"Loan + option", truth:65, prob:35, light:'y', trend:'flat', note:"O'Rourke is a genuine EFL-focused reporter, described as an approach expected in the coming days rather than a live negotiation."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Stoke-City Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Stoke City · 2026/27 Season`,
  heroLede: `Transfer window active. Stoke City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};