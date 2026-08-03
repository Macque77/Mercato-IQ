/* ============================================================
   MERCATO IQ · CLUB DATA · MÁLAGA CF · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Málaga CF", mono: "MAL", slug: "malaga",
  primary: "#1257A6", primaryBright: "#5C93FF", primaryDeep: "#0A2F5C",
  primaryRgb: "18,87,166",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Juan Francisco Funes (\"Juanfran\")",
  dof: "Loren Juarros (Sporting Director)",
  europe: "None for 2026/27",
  finish: "Promoted from Segunda División 2025/26 via play-off (beat Almería 2-1 in the final)",
  owner: "Member-owned (Málaga CF)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.eldesmarque.com/futbol/mercado-de-fichajes/", "https://www.jornadaperfecta.com/blog/"],
  queries: ["Málaga CF fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Málaga CF"
};

const CONFIRMED_IN = [
  {name:"José Salinas", sub:"~26 · LB · Spain", to:"loan from RCD Espanyol", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 27 July 2026 as Málaga's fourth summer reinforcement. Salinas came through Elche's academy, helped them win promotion in 2024/25, then moved to Espanyol; he now joins Málaga's own promotion push."}
];

const CONFIRMED_OUT = [];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>José Salinas</b>: fourth summer signing arrives on loan from Espanyol to bolster the left side of defence for the club's return to the top flight."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Newly promoted Málaga, back in La Liga after winning the play-off final against Almería, are building their squad under sporting director Loren Juarros - with José Salinas the clearest, best-sourced incoming addition so far."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "jornadaperfecta-salinas": {l:"Jornada Perfecta - José Salinas signs for Málaga CF", u:"https://www.jornadaperfecta.com/blog/jose-salinas-malaga-anuncio-fichaje-26/"},
  "eldesmarque-malaga-market": {l:"El Desmarque - Málaga's summer transfer market plans under Loren Juarros", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260624/malaga-perfila-fichajes-lineas-rojas-loren-juarros-mercado_18_019538692.html"}
};

const LINKMAP = {
  "José Salinas": ["jornadaperfecta-salinas", "eldesmarque-malaga-market"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Back in La Liga after a play-off final win`,
  heroLede: `<b>Málaga CF</b> return to the top flight after beating Almería in the promotion play-off final, and under coach <b>Juanfran Funes</b> and sporting director <b>Loren Juarros</b> the squad-build is under way - <b>José Salinas</b>'s loan arrival from Espanyol is the summer's clearest, best-sourced signing to date.`,
  metaRow: `<span>COACH: <b>Juanfran Funes</b></span> <span>STATUS: <b>Promoted 2026/27</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Loan (no fee)`, x: `José Salinas from Espanyol` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
