/* ============================================================
   MERCATO IQ · CLUB DATA · CELTIC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Celtic", mono: "CEL", slug: "celtic",
  primary: "#018749", primaryBright: "#2ECC71", primaryDeep: "#00512B",
  primaryRgb: "1,135,73",
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
  queries: ["celtic transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Kasper Hogh", sub:"ST", club:"Bodo/Glimt", pos:"ST", fee:"Club-record fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer, a club-record fee."}
];
const CONFIRMED_OUT = [
  {name:"Josh Clarke", sub:"GK", club:"Partick Thistle", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer."},
  {name:"Ben McPherson", sub:"DF", club:"Partick Thistle", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer."},
  {name:"Ben Summers", sub:"MF", club:"Ayr United", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer."}
];
const INCOMING = [
  {name:"Gvidas Gineitis", sub:"MF", club:"Torino", pos:"MF", report:"~1 wk ago", src:"BBC / Football Insider / Daily Record", tier:2, fee:"~£12m", truth:75, prob:60, light:'g', trend:'up', note:"Agent contact reportedly made, Torino want around £12m and Celtic are said to be preparing an improved offer."},
  {name:"Claudio Braga", sub:"FW", club:"Heart of Midlothian", pos:"FW", report:"~1 wk ago", src:"Yahoo Sports", tier:3, fee:"Undisclosed", truth:50, prob:30, light:'y', trend:'flat', note:"Celtic reportedly keeping close tabs, early stage."}
];
const OUTGOING = [
  {name:"Alistair Johnston", sub:"DF", club:"Everton / Fulham", pos:"DF", report:"~1 wk ago", src:"Football Insider", tier:2, fee:"Undisclosed", truth:65, prob:60, light:'g', trend:'up', note:"Celtic reportedly resigned to losing the full-back, Everton the preferred destination."},
  {name:"Reo Hatate", sub:"MF", club:"Undisclosed", pos:"MF", report:"~2 wks ago", src:"The Scottish Sun", tier:4, fee:"Undisclosed", truth:40, prob:30, light:'y', trend:'flat', note:"Vague, early-stage exit speculation."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Celtic Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Celtic · 2026/27 Season`,
  heroLede: `Transfer window active. Celtic preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
