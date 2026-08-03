/* ============================================================
   MERCATO IQ · CLUB DATA · DERBY COUNTY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Derby County", mono: "DC", slug: "derby-county",
  primary: "#FFFFFF", primaryBright: "#FFFFFF", primaryDeep: "#B0B0B0",
  primaryRgb: "255,255,255",
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
  queries: ["derby-county transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Bobby Clark", sub:"MF", club:"Free agent", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Derby's only confirmed incoming so far this summer; fee and full position detail were not specified in available reporting."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Divin Mubama", sub:"ST", club:"Manchester City", pos:"ST", report:"~1 wk ago", src:"Pete O'Rourke", tier:2, fee:"Loan", truth:65, prob:50, light:'y', trend:'up', note:"O'Rourke is a credible EFL-focused reporter and the logic stacks up given Derby's thin attacking options so far."},
  {name:"Stephen Mfuni", sub:"18 · CB", club:"Manchester City", pos:"CB", report:"~2 wks ago", src:"Football League World", tier:3, fee:"Loan", truth:50, prob:30, light:'y', trend:'flat', note:"Sensible fit being floated but still City's decision to make, nothing close yet."},
  {name:"Tommy Watson", sub:"20 · LW · England", club:"Brighton", pos:"LW", report:"~1 wk ago", src:"Sunderland Echo", tier:3, fee:"Loan", truth:45, prob:15, light:'o', trend:'flat', note:"Very early and one of six clubs in a crowded field, do not back Derby specifically to land him."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Derby-County Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Derby County · 2026/27 Season`,
  heroLede: `Transfer window active. Derby County preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};