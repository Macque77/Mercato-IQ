/* ============================================================
   MERCATO IQ · CLUB DATA · SC BRAGA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "SC Braga", mono: "SB", slug: "braga",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
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
  queries: ["braga transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Lukas Hornicek", sub:"GK · Slovakia", club:"Newcastle United", fee:"€30m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 3 Aug 2026: Braga's goalkeeper departs for the Premier League in a €30m deal."}
];
const INCOMING = [
  {name:"Andrew", sub:"GK · Brazil", club:"Gil Vicente", pos:"GK", report:"3 Aug 2026", src:"Record / Bolanarede", tier:3, fee:"Undisclosed", truth:40, prob:25, light:"o", trend:"flat", note:"With Hornicek sold to Newcastle, Braga are reportedly eyeing Gil Vicente's in-form Brazilian goalkeeper as his successor.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Braga bank €30m as goalkeeper Lukas Hornicek completes his move to Newcastle United, and immediately turn to Gil Vicente's Andrew as a possible successor."}
];
const IGNORE = [];
const POSITIONS = [
  {p:"Goalkeeper", w:30, x:"Hornicek's sale to Newcastle leaves an immediate vacancy; Gil Vicente's Andrew is the early name in the frame."}
];
const WATCHLIST = [];

const HUB = {
  recordHornicek: {l:"Record · Hornicek official", u:"https://www.record.pt/futebol/futebol-nacional/liga-betclic/sp--braga/detalhe/oficial-lukas-hornicek-deixa-sp-braga-e-ruma-ao-newcastle"},
  recordAndrew: {l:"Record · Andrew", u:"https://www.record.pt/futebol/futebol-nacional/liga-betclic/sp--braga/detalhe/sucessao-de-hornicek-andrew-no-radar-do-sp-braga"}
};

const LINKMAP = {
  "Andrew": ["recordAndrew"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Braga bank €30m on Hornicek and turn straight to a replacement`,
  heroLede: `SC Braga have confirmed the sale of goalkeeper <b>Lukas Hornicek</b> to Newcastle United for €30m, and have wasted little time identifying a successor - Gil Vicente's Brazilian goalkeeper <b>Andrew</b> is the early name being linked as his replacement.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No further departures reported as advanced this window.`,
  spendIn: { v: `TBD` },
  spendOut: { v: `€30m`, x: `Hornicek's confirmed sale to Newcastle United.` },
  methodLegend: ``
};