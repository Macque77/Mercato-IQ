/* ============================================================
   MERCATO IQ · CLUB DATA · BARNSLEY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Barnsley", mono: "BAR", slug: "barnsley",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Mid-table League One (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["barnsley transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Callum Brittain", sub:"DF", club:"Blackburn Rovers", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit."}
];
const INCOMING = [
  {name:"Unnamed 24yo midfielder", sub:"MF", club:"Undisclosed", pos:"MF", report:"~1 wk ago", src:"Charlie Gregory / FLW", tier:3, fee:"Undisclosed", truth:45, prob:45, light:'y', trend:'flat', note:"Reported as set to seal a deal, but the player has not been named."}
];
const OUTGOING = [
  {name:"Adam Phillips", sub:"MF", club:"Bradford City", pos:"MF", report:"~1 wk ago", src:"Pete O'Rourke", tier:2, fee:"Undisclosed", truth:75, prob:70, light:'g', trend:'up', note:"Described as imminent by a credible EFL-focused reporter."},
  {name:"David McGoldrick", sub:"ST", club:"Mansfield Town", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:40, prob:25, light:'o', trend:'flat', note:"Barnsley reportedly confident the veteran striker wants to stay."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Barnsley Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Barnsley · 2026/27 Season`,
  heroLede: `Transfer window active. Barnsley preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
