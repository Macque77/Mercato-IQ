/* ============================================================
   MERCATO IQ · CLUB DATA · REAL BETIS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Real Betis", mono: "RB", slug: "real-betis",
  primary: "#00954C", primaryBright: "#2ECC71", primaryDeep: "#005A2E",
  primaryRgb: "0,149,76",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Manuel Pellegrini",
  dof: "Ramón Alarcón (Sporting Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "5th La Liga (2025/26), 60pts",
  owner: "Angel Haro (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.managingmadrid.com/", "https://www.transfermarkt.us/real-betis-balompie/transfers/verein/150"],
  queries: ["Real Betis fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Real Betis"
};

const CONFIRMED_IN = [
  {name:"Fran García", sub:"26 · LB · Spain", to:"permanent from Real Madrid", fee:"~£3.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Made surplus at the Bernabéu by Marc Cucurella's arrival; Betis land a title-winning left-back to strengthen their Champions League squad."}
];

const CONFIRMED_OUT = [];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Fran García</b>: title-winning Real Madrid left-back arrives permanently, a coup for a first Champions League campaign in years."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Betis' clearest summer statement is landing Fran García from Real Madrid as they prepare for a Champions League return under Manuel Pellegrini."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Squad depth for European football", w:45, x:"Champions League qualification typically drives further squad-depth business late in the window; nothing further confirmed yet."}
];

const WATCHLIST = [];

const HUB = {
  "managingmadrid-frangarcia": {l:"Managing Madrid - Fran García/Betis fee agreement reporting", u:"https://www.managingmadrid.com/109880/betis-real-madrid-fran-garcia-2026-news"},
  "teamtalk-rmdone": {l:"TeamTalk - Real Madrid completed transfers summer 2026 (Fran García listed)", u:"https://www.teamtalk.com/news/every-completed-real-madrid-transfer-summer-2026-signings-sales-loans"}
};

const LINKMAP = {
  "Fran García": ["managingmadrid-frangarcia", "teamtalk-rmdone"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A Champions League summer starts with a Bernabéu import`,
  heroLede: `Real Betis return to the Champions League for 2026/27 under <b>Manuel Pellegrini</b>, and their first major move is landing <b>Fran García</b> permanently from Real Madrid - a title-winning left-back made available by Marc Cucurella's arrival at the Bernabéu.`,
  metaRow: `<span>COACH: <b>Manuel Pellegrini</b></span> <span>EUROPE: <b>Champions League</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~£3.4m`, x: `Fran García fee` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
