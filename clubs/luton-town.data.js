/* ============================================================
   MERCATO IQ · CLUB DATA · LUTON TOWN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Luton Town", mono: "LT", slug: "luton-town",
  primary: "#F68A1E", primaryBright: "#FFB25E", primaryDeep: "#8F4C0C",
  primaryRgb: "246,138,30",
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
  queries: ["luton-town transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Christ Makosso", sub:"DF", club:"Auxerre", pos:"DF", fee:"£2m + add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreement in principle reported by a credible transfer insider."}
];
const INCOMING = [
  {name:"Lee Buchanan", sub:"DF", club:"Birmingham City", pos:"DF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:40, prob:30, light:'y', trend:'flat', note:"Scouted, nothing advanced."}
];
const OUTGOING = [
  {name:"Unnamed forwards (x2)", sub:"FW", club:"Undisclosed", pos:"FW", report:"~1 wk ago", src:"Manager Jack Wilshere", tier:3, fee:"Undisclosed", truth:55, prob:50, light:'y', trend:'flat', note:"Manager has publicly flagged expected departures from the forward line."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Luton Town Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Luton Town · 2026/27 Season`,
  heroLede: `Transfer window active. Luton Town preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
