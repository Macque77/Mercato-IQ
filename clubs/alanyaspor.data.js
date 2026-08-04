/* ============================================================
   MERCATO IQ · CLUB DATA · ALANYASPOR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Alanyaspor", mono: "A", slug: "alanyaspor",
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
  queries: ["alanyaspor transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Iván Cedric", sub:"24 · FW · Cameroon/Spain", club:"Vanspor FK", pos:"FW", report:"2 Aug 2026", src:"Sporx", tier:2, fee:"Undisclosed", truth:85, prob:80, light:"g", trend:"flat", note:"Agreement reached with last season's TFF 1. Lig top-scorer (15 goals, 6 assists); official unveiling pending medical."}
];
const OUTGOING = [
  {name:"İbrahim Kaya", sub:"25 · Winger/Forward · Turkey", club:"Alanyaspor", pos:"FW", report:"3 Aug 2026", src:"Hürriyet", tier:1, fee:"Undisclosed", truth:40, prob:15, light:"o", trend:"flat", note:"Player confirmed a club's interest without naming them, saying it's ultimately Alanyaspor's decision; scored 6 goals in his maiden Süper Lig season."}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Alanyaspor Official", u:"#"},
  sporxIvnCedric: {l:"Sporx", u:"https://www.sporx.com/www.sporx.com/alanyaspor-a-kamerunlu-forvet-ivan-cedric-SXHBQ1171110SXQ"},
  hrriyetbrahimKaya: {l:"Hürriyet", u:"https://www.hurriyet.com.tr/sporarena/ibrahim-kayadan-transfer-aciklamasi-bir-kulubun-ilgisi-oldugunu-biliyorum-43260459"}};

const LINKMAP = {
  "Iván Cedric": ["sporxIvnCedric"],
  "İbrahim Kaya": ["hrriyetbrahimKaya"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Alanyaspor · 2026/27 Season`,
  heroLede: `Transfer window active. Alanyaspor preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};