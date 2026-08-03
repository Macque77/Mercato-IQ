/* ============================================================
   MERCATO IQ · CLUB DATA · LEVANTE UD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Levante UD", mono: "LEV", slug: "levante",
  primary: "#0F3B6D", primaryBright: "#5C93FF", primaryDeep: "#081F3D",
  primaryRgb: "15,59,109",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luís Castro",
  dof: "Sporting department led by Felipe Miñambres",
  europe: "None for 2026/27",
  finish: "16th La Liga (2025/26), 42pts",
  owner: "Meriton Holdings-linked ownership (Levante UD)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.fichajes.com/equipo/levante-ud/altas-bajas/"],
  queries: ["Levante UD fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Levante UD"
};

const CONFIRMED_IN = [
  {name:"Dani Requena", sub:"24 · CM · Spain", to:"loan (with ~€1m purchase option) from Villarreal", fee:"Loan + option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Cross-verified via Villarreal's own summer transfer record as an official exit to Levante."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Arnau Tenas", sub:"24 · GK · Spain", club:"Paris Saint-Germain", pos:"GK", report:"17 Jul 2026", src:"FútbolFantasy", tier:3, fee:"TBD", truth:35, prob:15, light:"o", trend:"flat", note:"Levante credited with background interest alongside Elche and Mallorca; Mallorca appear the most advanced of the three suitors."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Dani Requena</b>: midfield reinforcement arrives on loan from Villarreal with an option to make it permanent."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Levante's clearest confirmed summer business is the Dani Requena loan from Villarreal; goalkeeper interest in Arnau Tenas remains background noise behind Mallorca's more advanced pursuit."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [
  {name:"Arnau Tenas", club:"Paris Saint-Germain", pos:"GK", dir:"in", age:"~2 weeks", tier:3, note:"Three-way interest with Elche and Mallorca; Mallorca reported as front-runners."}
];

const HUB = {
  "futbolfantasy-villarreal": {l:"FútbolFantasy - Villarreal summer transfer tracker (Requena exit corroborated)", u:"https://www.futbolfantasy.com/laliga/equipos/villarreal/mercado-fichajes/verano-2026"},
  "futbolfantasy-elche": {l:"FútbolFantasy - Elche transfer tracker (Tenas three-way interest)", u:"https://www.futbolfantasy.com/laliga/equipos/elche/mercado-fichajes/verano-2026"}
};

const LINKMAP = {
  "Dani Requena": ["futbolfantasy-villarreal"],
  "Arnau Tenas": ["futbolfantasy-elche"]
};
const WL_LINKMAP = {
  "Arnau Tenas": ["futbolfantasy-elche"]
};

const PROSE = {
  heroH2: `A modest but real midfield reinforcement`,
  heroLede: `Under <b>Luís Castro</b>, Levante's confirmed summer business is a loan for <b>Dani Requena</b> from Villarreal, with a purchase option attached. Background interest in goalkeeper Arnau Tenas exists but Mallorca appear ahead in that particular race.`,
  metaRow: `<span>COACH: <b>Luís Castro</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Loan + ~€1m option`, x: `Dani Requena from Villarreal` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
