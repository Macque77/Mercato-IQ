/* ============================================================
   MERCATO IQ · CLUB DATA · SAMSUNSPOR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Samsunspor", mono: "S", slug: "samsunspor",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["Turkey","Süper Lig"]
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
  queries: ["samsunspor transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Rick van Drongelen", sub:"DF · Netherlands", club:"Panathinaikos", pos:"DF", fee:"Undisclosed (significant)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move to Panathinaikos completed, generating a sizeable fee for Samsunspor."}
];
const INCOMING = [
  {name:"Kevin Carlos", sub:"25 · ST · Spain", club:"OGC Nice", pos:"ST", report:"2 Aug 2026", src:"Sporx", tier:2, fee:"Undisclosed", truth:45, prob:25, light:"o", trend:"flat", note:"Samsunspor have reportedly prepared a fresh bid after an earlier loan-with-option structure collapsed; other clubs are also circling the Nice striker.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];
const OUTGOING = [
  {name:"Ali Diabaté", sub:"MF", club:"Samsunspor", pos:"MF", report:"29 Jul 2026", src:"Fotomaç", tier:2, fee:"€8m offer rejected", truth:80, prob:8, light:"r", trend:"flat", note:"President Yüksel Yıldırım confirmed the club turned down an €8m approach from a Saudi club, saying Samsunspor plans to build around him for the next 3-4 years.", lastSeen:"2026-08-04T19:10:50Z", baseProb:8}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Samsunspor Official", u:"#"},
  sporxKevinCarlos: {l:"Sporx", u:"https://www.sporx.com/www.sporx.com/samsunspor-kevin-carlos-transferi-icin-devrede-SXHBQ1171111SXQ"},
  fotomaAliDiabat: {l:"Fotomaç", u:"https://www.fotomac.com.tr/superlig/2026/07/29/5-transfer-yolda"},
  fanatikRickvanDrongelen: {l:"Fanatik", u:"https://www.fanatik.com.tr/takim/samsunspor/futbol/"}};

const LINKMAP = {
  "Kevin Carlos": ["sporxKevinCarlos"],
  "Ali Diabaté": ["fotomaAliDiabat"],
  "Rick van Drongelen": ["fanatikRickvanDrongelen"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Samsunspor · 2026/27 Season`,
  heroLede: `Transfer window active. Samsunspor preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};