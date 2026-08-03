/* ============================================================
   MERCATO IQ · CLUB DATA · SWANSEA CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Swansea City", mono: "SC", slug: "swansea-city",
  primary: "#1E1E1E", primaryBright: "#FFFFFF", primaryDeep: "#000000",
  primaryRgb: "30,30,30",
  breadcrumb: ["Wales","Championship"]
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
  queries: ["swansea-city transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Tiago Parente", sub:"W", club:"Benfica", pos:"W", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed season-long loan from Benfica."},
  {name:"Elijah Just", sub:"W", club:"Groningen", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent arrival."},
  {name:"Joseph Opoku", sub:"LB", club:"Fortuna Sittard", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent arrival."},
  {name:"Moussa Yeo", sub:"CB", club:"Dynamo Kyiv", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent arrival."},
  {name:"Stephen Welsh", sub:"CB", club:"Celtic", pos:"CB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed free transfer."}
];
const CONFIRMED_OUT = [
  {name:"Ollie Cooper", sub:"MF", club:"Notts County", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed season-long loan exit."},
  {name:"Cameron Congreve", sub:"W", club:"KVC Westerlo", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent sale."},
  {name:"Liam Cullen", sub:"ST", club:"Leicester City", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent sale."},
  {name:"Ethan Galbraith", sub:"MF", club:"Stoke City", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent sale."}
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
  club: {l:"Swansea-City Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Swansea City · 2026/27 Season`,
  heroLede: `Transfer window active. Swansea City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};