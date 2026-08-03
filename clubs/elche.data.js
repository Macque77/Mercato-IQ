/* ============================================================
   MERCATO IQ · CLUB DATA · ELCHE CF · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Elche CF", mono: "EC", slug: "elche",
  primary: "#00A650", primaryBright: "#63E6A0", primaryDeep: "#00602E",
  primaryRgb: "0,166,80",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Martín Anselmi (appointed 13 June 2026, replacing Éder Sarabia)",
  dof: "Edu Prades (Sporting Director)",
  europe: "None for 2026/27",
  finish: "15th La Liga (2025/26), 43pts",
  owner: "Quantum Pacific Group (Christian Bragarnik-linked ownership structure)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.futbolfantasy.com/laliga/equipos/elche/mercado-fichajes/verano-2026", "https://teleelx.es/"],
  queries: ["Elche CF fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Elche CF"
};

const CONFIRMED_IN = [
  {name:"Gonzalo Villar", sub:"25 · CM · Spain", to:"permanent from Dinamo Zagreb", fee:"~€1m + €0.5m variables", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 29 May 2026."},
  {name:"Buba Sangaré", sub:"23 · LB · Mali", to:"permanent, option exercised with Roma", fee:"~€4.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Purchase option triggered 3 June 2026 after a loan spell."},
  {name:"Víctor Chust", sub:"24 · CB · Spain", to:"permanent from Cádiz", fee:"~€1.6m (Real Madrid retain 50% economic rights)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 17 June 2026, converting a loan-parent situation into a permanent Elche deal."}
];

const CONFIRMED_OUT = [
  {name:"Álvaro Rodríguez", sub:"22 · FW · Uruguay", club:"Bournemouth", pos:"FW", fee:"€25m + €5m variables (Real Madrid receive 50%)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 14 July 2026 - the club's biggest sale of the summer."},
  {name:"André Silva", sub:"30 · FW · Portugal", club:"Porto", pos:"FW", fee:"Free (contract expired)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 12 June 2026 on a deal through 2027."},
  {name:"Éder Sarabia", sub:"Coach", club:"Departed", pos:"Manager", fee:"N/A", free:true, status:"done", statusTxt:"DONE, DEPARTED", note:"Left on 27 May 2026 after guiding Elche to survival in their first season back in La Liga; replaced by Martín Anselmi."}
];

const INCOMING = [
  {name:"Arnau Tenas", sub:"24 · GK · Spain", club:"Paris Saint-Germain", pos:"GK", report:"17 Jul 2026", src:"FútbolFantasy", tier:3, fee:"TBD", truth:35, prob:20, light:"o", trend:"flat", note:"Elche credited with interest alongside Levante and Mallorca; Tenas is also strongly linked with a Mallorca loan, making Elche's chances secondary at best."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Álvaro Rodríguez sale</b>: €25m+ fee to Bournemouth is Elche's headline summer business, funding further squad rebuilding under Anselmi."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"A managerial change (Sarabia out, Martín Anselmi in) has coincided with a rebuild around returning loanees (Chust, Diaby, Núñez, Houary, Barzic) and permanent deals for Villar and Sangaré."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Goalkeeper depth", w:30, x:"Tenas interest reflects Elche assessing options, though Mallorca appear ahead in that race."}
];

const WATCHLIST = [
  {name:"Arnau Tenas", club:"Paris Saint-Germain", pos:"GK", dir:"in", age:"~2 weeks", tier:3, note:"Three-way interest (Elche, Levante, Mallorca); Mallorca reported as front-runners."}
];

const HUB = {
  "futbolfantasy-elche": {l:"FútbolFantasy - Elche CF transfer tracker", u:"https://www.futbolfantasy.com/laliga/equipos/elche/mercado-fichajes/verano-2026"},
  "yahoo-sarabia-exit": {l:"Yahoo Sports - Eder Sarabia announces Elche exit", u:"https://sports.yahoo.com/articles/official-eder-sarabia-announces-elche-201000423.html"},
  "yahoo-anselmi": {l:"Yahoo Sports - Elche name Martín Anselmi as new manager", u:"https://sports.yahoo.com/articles/official-elche-name-manager-172000288.html"}
};

const LINKMAP = {
  "Gonzalo Villar": ["futbolfantasy-elche"],
  "Buba Sangaré": ["futbolfantasy-elche"],
  "Víctor Chust": ["futbolfantasy-elche"],
  "Álvaro Rodríguez": ["futbolfantasy-elche"],
  "André Silva": ["futbolfantasy-elche"],
  "Éder Sarabia": ["yahoo-sarabia-exit"],
  "Arnau Tenas": ["futbolfantasy-elche"]
};
const WL_LINKMAP = {
  "Arnau Tenas": ["futbolfantasy-elche"]
};

const PROSE = {
  heroH2: `New coach, funded by a marquee sale`,
  heroLede: `Elche enter their second straight top-flight season under a new coach, <b>Martín Anselmi</b>, after <b>Éder Sarabia</b> departed having secured survival. The <b>Álvaro Rodríguez</b> sale to Bournemouth (€25m+) is funding permanent deals for <b>Gonzalo Villar</b>, <b>Buba Sangaré</b> and <b>Víctor Chust</b>.`,
  metaRow: `<span>COACH: <b>Martín Anselmi</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">3</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€6.1m committed`, x: `Villar, Sangaré, Chust fees` },
  spendOut: { v: `~€25m+ received`, x: `Álvaro Rodríguez to Bournemouth (Real Madrid take 50%)` },
  methodLegend: ``
};
