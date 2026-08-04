/* ============================================================
   MERCATO IQ · CLUB DATA · OFI CRETE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "OFI Crete", mono: "OC", slug: "opa-ofi",
  primary: "#000000", primaryBright: "#C0C0C0", primaryDeep: "#000000",
  primaryRgb: "20,20,20",
  breadcrumb: ["Greece","Super League"]
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
  queries: ["opa-ofi transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Aitor Cantalapiedra", sub:"30 · W/FW · Spain", club:"EC Vitória (Brazil)", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Two-year deal; returns to Greek football having previously played for Panathinaikos."},
  {name:"Dimitris Nikolaou", sub:"27 · CB/LB · Greece", club:"Bari (loan)", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returns to Greek football after seven years in Italy, most recently on loan at Bari."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Opa-Ofi Official", u:"#"},
  aitorCantalapiedra: {l:"ΤΑ ΝΕΑ", u:"https://www.tanea.gr/2026/07/27/sports/football/ofi-anakoinose-tin-apoktisi-tou-aitor-me-dietes-symvolaio/"},
  iefimeridagrDimitrisNikolaou: {l:"iefimerida.gr", u:"https://www.iefimerida.gr/spor/ofi-metagrafes-kleinei-aitor-kai-nikolaoy"}};

const LINKMAP = {
  "Aitor Cantalapiedra": ["aitorCantalapiedra"],
  "Dimitris Nikolaou": ["iefimeridagrDimitrisNikolaou"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `OFI Crete · 2026/27 Season`,
  heroLede: `Transfer window active. OFI Crete preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};