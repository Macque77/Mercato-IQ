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
const CONFIRMED_OUT = [];
const INCOMING = [];
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
  "elsadar-fichajes": {l:"El Sadar - Osasuna transfer news", u:"https://elsadar.com/category/actualidad/fichajes-actualidad/"}
};

const LINKMAP = {};
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
