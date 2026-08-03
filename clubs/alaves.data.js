/* ============================================================
   MERCATO IQ · CLUB DATA · DEPORTIVO ALAVÉS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Deportivo Alavés", mono: "DA", slug: "alaves",
  primary: "#1E3A8A", primaryBright: "#6FA8FF", primaryDeep: "#0F1F4A",
  primaryRgb: "30,58,138",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Quique Sánchez Flores",
  dof: "Sergio Fernández (Sporting Director)",
  europe: "None for 2026/27",
  finish: "14th La Liga (2025/26), 43pts",
  owner: "Alavés Grupo Inversor (Alfredo Fernández, President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.futbolfantasy.com/laliga/equipos/alaves/mercado-fichajes/verano-2026", "https://www.fichajes.com/equipo/deportivo-alaves/altas-bajas/"],
  queries: ["Deportivo Alavés fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Deportivo Alavés"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];

const NEW = [
  {ar:"✦", t:"No genuinely sourced incoming or outgoing transfer stories for Alavés were found as of 3 August 2026 - the club's summer business so far is limited to backroom and squad-planning news rather than confirmed or credibly rumoured deals."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "futbolfantasy-alaves": {l:"FútbolFantasy - Alavés transfer tracker", u:"https://www.futbolfantasy.com/laliga/equipos/alaves/mercado-fichajes/verano-2026"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A quiet window at Mendizorrotza - so far`,
  heroLede: `Under <b>Quique Sánchez Flores</b>, Alavés have kept a low transfer profile through the early summer. No credibly sourced incoming or outgoing rumours had emerged as of 3 August 2026 - an honest reflection of a squad being kept together rather than an oversight.`,
  metaRow: `<span>COACH: <b>Quique Sánchez Flores</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
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
