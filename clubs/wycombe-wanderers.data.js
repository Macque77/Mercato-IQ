/* ============================================================
   MERCATO IQ · CLUB DATA · WYCOMBE WANDERERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Wycombe Wanderers", mono: "WW", slug: "wycombe-wanderers",
  primary: "#0033A0", primaryBright: "#7FB2FF", primaryDeep: "#001A52",
  primaryRgb: "0,51,160",
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
  queries: ["wycombe-wanderers transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Joel Randall", sub:"FW", club:"Free agent (released by Bolton)", pos:"FW", report:"~1 wk ago", src:"Various", tier:3, fee:"Free", truth:40, prob:30, light:'y', trend:'flat', note:"Wycombe among suitors along with Blackpool and Reading."},
  {name:"Conor Hazard", sub:"GK", club:"Free agent (ex-Plymouth Argyle)", pos:"GK", report:"~1 wk ago", src:"Various", tier:3, fee:"Free", truth:55, prob:45, light:'y', trend:'flat', note:"Wycombe reportedly set to make a move."}
];
const OUTGOING = [
  {name:"Fred Onyedinma", sub:"W", club:"Reading", pos:"W", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:35, light:'y', trend:'flat', note:"Reading reportedly plotting a move, Oxford United also circling."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Wycombe Wanderers Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wycombe Wanderers · 2026/27 Season`,
  heroLede: `Transfer window active. Wycombe Wanderers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
