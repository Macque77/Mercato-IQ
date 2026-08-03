/* ============================================================
   MERCATO IQ · CLUB DATA · RACING SANTANDER · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Racing de Santander", mono: "RAC", slug: "racing-santander",
  primary: "#00843D", primaryBright: "#4DDB8C", primaryDeep: "#00461F",
  primaryRgb: "0,132,61",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "José Alberto López",
  dof: "Sebastián Ceria (majority shareholder, Grupo Orlegi)",
  europe: "None for 2026/27",
  finish: "Promoted from Segunda División 2025/26 (return after a 14-year absence from La Liga)",
  owner: "Grupo Orlegi (Sebastián Ceria, top shareholder)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.eldesmarque.com/futbol/liga-1a-division/", "https://www.fichajes.com/equipo/real-racing-club-de-santander/altas-bajas/"],
  queries: ["Racing Santander fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Racing Santander"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Racing return to La Liga after a 14-year absence with roughly €60m of budget flexibility, though top shareholder Sebastián Ceria has said sales will come before 'important signings' - meaning the club's business is still being shaped as of 3 August 2026, with no individual deals confirmed yet in verifiable reporting."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Squad-wide reinforcement for the top flight", w:45, x:"Club leadership has signalled a wait-and-see approach: player sales first, then reinvestment into 'important' signings."}
];

const WATCHLIST = [];

const HUB = {
  "eldesmarque-racing-budget": {l:"El Desmarque - Racing's budget and transfer plans for 2026/27", u:"https://www.eldesmarque.com/futbol/liga-1a-division/20260706/racing-santander-avisa-cartera-millonaria-fichajes-importantes-cambios-estadio_18_019637585.html"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Back after 14 years, waiting on sales before signings`,
  heroLede: `<b>Racing de Santander</b> return to La Liga for the first time in 14 years. Top shareholder <b>Sebastián Ceria</b> has been explicit that player sales will come first, with "important signings" to follow once the market situation is clearer - so, honestly, no individual transfer story had been verifiably confirmed as of 3 August 2026.`,
  metaRow: `<span>COACH: <b>José Alberto López</b></span> <span>STATUS: <b>Promoted 2026/27</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Budget Flexibility</div><div class="v">~€60m</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: `No individual signings were invented to fill this page - club leadership itself has said signings will follow sales, so this is reported as a genuinely quiet window so far.`,
  spendIn: { v: `€0 confirmed`, x: `~€60m of stated flexibility, contingent on sales` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
