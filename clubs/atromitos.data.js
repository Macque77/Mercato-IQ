/* ============================================================
   MERCATO IQ · CLUB DATA · ATROMITOS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Atromitos", mono: "A", slug: "atromitos",
  primary: "#00843D", primaryBright: "#3FCB8C", primaryDeep: "#00532A",
  primaryRgb: "0,132,61",
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
  queries: ["atromitos transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Lefteris Lyratzis", sub:"26 · RB · Greece", club:"PAOK", pos:"RB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Two-year deal; PAOK retain a sell-on percentage."},
  {name:"Aitor García", sub:"FW/W · Spain", club:"Unattached", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially announced as an Atromitos player."},
  {name:"Núñez", sub:"FW · Costa Rica", club:"Unattached", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Costa Rican forward arrived in Greece on 21 Jul to complete a loan move."}
];
const CONFIRMED_OUT = [
  {name:"Christos Karandrikas", sub:"17 · Academy DF", club:"Bayern Munich", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Academy prospect sold to Bayern Munich; Bayern's development director publicly welcomed the signing."}
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
  club: {l:"Atromitos Official", u:"#"},
  lefterisLyratzis: {l:"ΤΑ ΝΕΑ", u:"https://www.tanea.gr/2026/08/03/sports/football/o-atromitos-anakoinose-ton-lyratzi/"},
  atromitosFCgrAitorGarca: {l:"AtromitosFC.gr", u:"https://www.atromitosfc.gr/news/paiktis-tou-atromitou-o-aitor-gkarthia/"},
  gazzettagrNez: {l:"Gazzetta.gr", u:"https://www.gazzetta.gr/football/atromitos-athinon"}};

const LINKMAP = {
  "Lefteris Lyratzis": ["lefterisLyratzis"],
  "Aitor García": ["atromitosFCgrAitorGarca"],
  "Núñez": ["gazzettagrNez"],
  "Christos Karandrikas": ["gazzettagrChristosKarandrikas"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Atromitos · 2026/27 Season`,
  heroLede: `Transfer window active. Atromitos preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};