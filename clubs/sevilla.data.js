/* ============================================================
   MERCATO IQ · CLUB DATA · SEVILLA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Sevilla", mono: "S", slug: "sevilla",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luis García Plaza (appointed March 2026, replacing Matías Almeyda)",
  dof: "Antonio Cordón (Sporting Director)",
  europe: "None for 2026/27",
  finish: "13th La Liga (2025/26), 43pts",
  owner: "José María del Nido Carrasco (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.eldesmarque.com/futbol/mercado-de-fichajes/", "https://www.elsevillista.es/"],
  queries: ["Sevilla FC fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Sevilla FC"
};

const CONFIRMED_IN = [
  {name:"Julio Díaz", sub:"21 · LB · Spain", to:"permanent from Atlético Madrid", fee:"~€1m + €0.5m variables (Atlético hold €2m buy-back)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 28 July 2026 - a five-year deal for the Spain U-19 European champion, Sevilla's fifth signing of the summer. Díaz progressed through Atlético's academy after starting out at Rayo Vallecano."},
  {name:"Gabriel Suazo", sub:"27 · LB · Chile", to:"permanent", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed as Sevilla's second summer signing, per Soccerway's official announcement coverage."}
];

const CONFIRMED_OUT = [];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Julio Díaz</b>: fifth summer signing lands from Atlético Madrid on a five-year deal."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Sevilla's rebuild under Luis García Plaza has focused on full-back depth, with Julio Díaz and Gabriel Suazo both arriving to strengthen the wide areas."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "eldesmarque-juliodiaz": {l:"El Desmarque - Julio Díaz signs for Sevilla FC", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260728/sevilla-fc-oficial-confirma-fichaje-julio-diaz-detalles_18_019831952.html"},
  "elsevillista-juliodiaz": {l:"ElSevillista - Julio Díaz signs for Sevilla FC", u:"https://www.elsevillista.es/2026/07/julio-diaz-ficha-por-el-sevilla-fc.html"},
  "soccerway-suazo": {l:"Soccerway - Gabriel Suazo, Sevilla's second signing", u:"https://es.soccerway.com/noticias/futbol-laliga-ea-sports-oficial-el-chileno-gabriel-suazo-segundo-fichaje-del-sevilla-fc/b9m3SsPj"},
  "beinsports-garciaplaza": {l:"beIN Sports - Sevilla announce García Plaza as Almeyda's successor", u:"https://www.beinsports.com/en-us/soccer/la-liga/articles/sevilla-announce-garcia-plaza-as-almeydas-successor-2026-03-25"}
};

const LINKMAP = {
  "Julio Díaz": ["eldesmarque-juliodiaz", "elsevillista-juliodiaz"],
  "Gabriel Suazo": ["soccerway-suazo"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Full-back reinforcements under a new head coach`,
  heroLede: `Under <b>Luis García Plaza</b>, who replaced Matías Almeyda in March, Sevilla's summer business has centred on the full-back positions: <b>Julio Díaz</b> arrives from Atlético Madrid's academy and <b>Gabriel Suazo</b> joins as the club's second permanent signing of the window.`,
  metaRow: `<span>COACH: <b>Luis García Plaza</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">2</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€1.5m+ committed`, x: `Julio Díaz fee; Suazo fee undisclosed` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
