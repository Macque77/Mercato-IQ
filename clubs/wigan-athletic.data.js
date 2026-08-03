/* ============================================================
   MERCATO IQ · CLUB DATA · WIGAN ATHLETIC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Wigan Athletic", mono: "WA", slug: "wigan-athletic",
  primary: "#1B458F", primaryBright: "#6FA0FF", primaryDeep: "#0D2650",
  primaryRgb: "27,69,143",
  breadcrumb: ["England","League One"]
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
  queries: ["wigan-athletic transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Reggie Walsh", sub:"MF", club:"Chelsea", pos:"MF", report:"~2 days ago", src:"Alan Nixon", tier:3, fee:"Loan", truth:75, prob:75, light:'g', trend:'up', note:"Loan expected to complete ahead of the deadline."},
  {name:"Joe Walsh", sub:"DF", club:"QPR", pos:"DF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:60, prob:55, light:'g', trend:'up', note:"Wigan reportedly closing in on the capture."}
];
const OUTGOING = [
  {name:"Sam Tickle", sub:"GK", club:"QPR / Bristol City", pos:"GK", report:"~1 wk ago", src:"Various", tier:3, fee:"£1.5-2m bid", truth:55, prob:40, light:'y', trend:'flat', note:"Wigan reportedly valuing him higher at £2.5-3m with no release clause, holding firm."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Wigan-Athletic Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wigan Athletic · 2026/27 Season`,
  heroLede: `Transfer window active. Wigan Athletic preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};