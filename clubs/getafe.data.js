/* ============================================================
   MERCATO IQ · CLUB DATA · GETAFE CF · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Getafe CF", mono: "GET", slug: "getafe",
  primary: "#1B3F8B", primaryBright: "#5C93FF", primaryDeep: "#0D1F45",
  primaryRgb: "27,63,139",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "José Bordalás",
  dof: "Ramón Martínez (Sporting Director)",
  europe: "UEFA Conference League (2026/27)",
  finish: "7th La Liga (2025/26), 51pts",
  owner: "Angel Torres (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.fichajes.com/equipo/getafe-cf/altas-bajas/", "https://noticiasgetafecf.es/"],
  queries: ["Getafe CF fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Getafe CF"
};

const CONFIRMED_IN = [
  {name:"Ramón Terrats", sub:"25 · CM · Spain", to:"permanent from Villarreal", fee:"~€2.5-3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent arrival, cross-verified against Villarreal's own summer transfer record."},
  {name:"Jean Ives Valou", sub:"20 · CB · France", to:"loan from Villarreal", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan for the young centre-back, adding defensive depth for Bordalás ahead of Conference League football."}
];

const CONFIRMED_OUT = [
  {name:"Domingos Duarte", sub:"31 · CB · Portugal", club:"RC Deportivo (advanced talks)", pos:"CB", fee:"Free (contract expired)", free:true, status:"done", statusTxt:"DONE, CONTRACT EXPIRED", note:"Left Getafe as a free agent; in advanced talks to rejoin Deportivo La Coruña, where he spent a loan spell in 2018/19."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Ramón Terrats and Jean Ives Valou</b>: both arrive from Villarreal to strengthen Bordalás's midfield and defence for a Conference League campaign."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Getafe qualified for the Conference League via their 2025/26 league finish and have used Villarreal's rebuild to bring in two squad reinforcements (Terrats, Valou) while Domingos Duarte left as a free agent."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "futbolfantasy-villarreal": {l:"FútbolFantasy - Villarreal summer transfer tracker (Terrats/Valou departures corroborated)", u:"https://www.futbolfantasy.com/laliga/equipos/villarreal/mercado-fichajes/verano-2026"},
  "fichajesnet-duarte": {l:"Fichajes.net - Domingos Duarte talks with Deportivo La Coruña", u:"https://www.fichajes.net/noticias/nuevo-fichaje-nuevo-super-depor-camino-20260705.html"}
};

const LINKMAP = {
  "Ramón Terrats": ["futbolfantasy-villarreal"],
  "Jean Ives Valou": ["futbolfantasy-villarreal"],
  "Domingos Duarte": ["fichajesnet-duarte"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Villarreal's rebuild funds Getafe's Conference League prep`,
  heroLede: `Qualified for the <b>Conference League</b> under <b>José Bordalás</b>, Getafe have added two pieces from Villarreal's squad reshuffle - <b>Ramón Terrats</b> permanently and <b>Jean Ives Valou</b> on loan - while veteran centre-back <b>Domingos Duarte</b> has departed as a free agent, closing in on a reunion with Deportivo La Coruña.`,
  metaRow: `<span>COACH: <b>José Bordalás</b></span> <span>EUROPE: <b>Conference League</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">2</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€2.5-3m + loan`, x: `Terrats fee; Valou on loan` },
  spendOut: { v: `€0 fee`, x: `Duarte left as free agent` },
  methodLegend: ``
};
