/* ============================================================
   MERCATO IQ · CLUB DATA · FC AROUCA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Arouca", mono: "FA", slug: "arouca",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
  breadcrumb: ["Portugal","Liga Portugal"]
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
  queries: ["arouca transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Sihoo Park", sub:"18 · W · South Korea", club:"Chungnam Asan", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent deal signed until 2031."},
  {name:"Rachid Gomes", sub:"18 · RB · Cape Verde", club:"Desportivo da Praia", pos:"RB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as backup for captain Tiago Esgaio after a trial spell."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Taichi Fukui", sub:"21 · MF · Japan", club:"Arouca", pos:"MF", report:"22 May 2026", src:"Record (via Bola na Rede)", tier:2, fee:"~€10m (near release clause)", truth:55, prob:30, light:"y", trend:"flat", note:"Rayo Vallecano interested; Arouca will only sell for an offer close to his €10m release clause.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Arouca Official", u:"#"},
  recordviaBolanaRedeTaichiFukui: {l:"Record (via Bola na Rede)", u:"https://bolanarede.pt/especial-bola-na-rede/atualidade/arouca-pede-valor-proximo-aos-10-milhoes-de-euros-por-craque-da-equipa-ha-1-interessado/"},
  diriodeAveiroSihooPark: {l:"Diário de Aveiro", u:"https://www.diarioaveiro.pt/2026/07/04/sihoo-park-assina-pelo-arouca-ate-2031/"},
  aBolaRachidGomes: {l:"A Bola", u:"https://www.abola.pt/noticias/mercado-oficial-rachid-gomes-convenceu-e-e-reforco-do-arouca-2026072814394757293"}};

const LINKMAP = {
  "Taichi Fukui": ["recordviaBolanaRedeTaichiFukui"],
  "Sihoo Park": ["diriodeAveiroSihooPark"],
  "Rachid Gomes": ["aBolaRachidGomes"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Arouca · 2026/27 Season`,
  heroLede: `Transfer window active. FC Arouca preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};