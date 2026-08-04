/* ============================================================
   MERCATO IQ · CLUB DATA · CA OSASUNA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "CA Osasuna", mono: "CO", slug: "osasuna",
  primary: "#D2001C", primaryBright: "#FF6259", primaryDeep: "#7A0011",
  primaryRgb: "210,0,28",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luis Miguel Ramis (appointed 2026, replacing Jagoba Arrasate)",
  dof: "Braulio Vázquez (Sporting Director)",
  europe: "None for 2026/27",
  finish: "17th La Liga (2025/26), 42pts",
  owner: "Member-owned (Peña Athletic Osasuna), Luis Sabalza President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://elsadar.com/category/actualidad/fichajes-actualidad/", "https://www.fichajes.com/equipo/ca-osasuna/altas-bajas/"],
  queries: ["Osasuna fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · CA Osasuna"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Víctor Muñoz", sub:"W · Spain", club:"Liverpool", pos:"W", fee:"€40m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official, club-record outgoing sale to Liverpool."},
  {name:"Sheraldo Becker", sub:"W · Netherlands", club:"Mainz 05", pos:"W", fee:"Loan-to-permanent clause activated", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official permanent move."},
  {name:"Javi Galán", sub:"LB · Spain", club:"Celta Vigo", pos:"LB", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official free departure."}
];
const INCOMING = [
  {name:"Jonathan Dubasin", sub:"26 · LW · Belgium", club:"Sporting Gijón", pos:"LW", report:"17 Jul 2026", src:"FútbolFantasy / Noticias de Navarra", tier:2, fee:"€2.6m+€0.4m bid (Sporting want ~€10m clause)", truth:65, prob:45, light:"y", trend:"flat", note:"Osasuna's opening €2.6m bid was rejected; they are preparing an improved offer for the 16-goal Segunda forward who wants the step up."},
  {name:"Pablo García", sub:"20 · LW/RW · Spain", club:"Real Betis", pos:"W", report:"23 Jun 2026", src:"Flavio Pace / El Gol Digital", tier:2, fee:"€10m+ demanded / €30m clause", truth:45, prob:12, light:"r", trend:"flat", note:"Osasuna are one of several suitors (with Alavés, Ajax, Club Brugge, Stuttgart, Inter Miami) for this Betis academy winger."},
  {name:"Abel Ruiz", sub:"26 · ST · Spain", club:"Girona FC", pos:"ST", report:"24 Apr 2026", src:"Miguel Rubio / TodoMercadoWeb", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Named on Osasuna's leaked striker wishlist as the 'differentiating' but expensive attacking option."},
  {name:"César Tárrega", sub:"24 · CB · Spain", club:"Valencia CF", pos:"CB", report:"24 Apr 2026", src:"Miguel Rubio / TodoMercadoWeb", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Listed among Osasuna's centre-back targets for defensive rejuvenation."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Osasuna go into 2026/27 under new coach Luis Miguel Ramis, who replaces long-serving Jagoba Arrasate. No genuinely sourced summer 2026 transfer stories (in or out) had emerged as of 3 August 2026 - the honest position is a squad still being assessed under the new coaching staff."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "elsadar-fichajes": {l:"El Sadar - Osasuna transfer news", u:"https://elsadar.com/category/actualidad/fichajes-actualidad/"},
  ftbolFantasyJonathanDubasin: {l:"FútbolFantasy", u:"https://www.futbolfantasy.com/laliga/noticias/147494-osasuna-prepara-una-nueva-ofensiva-por-jonathan-dubasin"},
  elGolDigitalPabloGarca: {l:"El Gol Digital", u:"https://www.elgoldigital.com/futbol/real-betis-balompie/pablo-garcia-betis-osasuna-brujas-ajax-inter-miami-mercado-10-millones-2026/"},
  todoMercadoWebAbelRuiz: {l:"TodoMercadoWeb", u:"https://www.todomercadoweb.es/laliga/filtran-la-lista-de-la-compra-del-ca-osasuna-para-el-mercado-de-fichajes-547876"},
  ftbolFantasyVctorMuoz: {l:"FútbolFantasy", u:"https://www.futbolfantasy.com/laliga/equipos/osasuna/mercado-fichajes/verano-2026"}};

const LINKMAP = {
  "Jonathan Dubasin": ["ftbolFantasyJonathanDubasin"],
  "Pablo García": ["elGolDigitalPabloGarca"],
  "Abel Ruiz": ["todoMercadoWebAbelRuiz"],
  "César Tárrega": ["todoMercadoWebCsarTrrega"],
  "Víctor Muñoz": ["ftbolFantasyVctorMuoz"],
  "Sheraldo Becker": ["ftbolFantasySheraldoBecker"],
  "Javi Galán": ["ftbolFantasyJaviGaln"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A new coach, and a window still taking shape`,
  heroLede: `<b>Luis Miguel Ramis</b> takes charge of Osasuna for 2026/27, succeeding <b>Jagoba Arrasate</b>. As of 3 August 2026 no credibly sourced incoming or outgoing transfer stories for this specific summer window had been found - reported honestly here rather than padded out.`,
  metaRow: `<span>COACH: <b>Luis Miguel Ramis</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 confirmed`, x: `No completed signings found as of 3 Aug 2026` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
