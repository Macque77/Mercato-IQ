/* ============================================================
   MERCATO IQ · CLUB DATA · VALENCIA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Valencia", mono: "V", slug: "valencia",
  primary: "#EE8707", primaryBright: "#FFAD4D", primaryDeep: "#8F5104",
  primaryRgb: "238,135,7",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Carlos Corberán",
  dof: "Miguel Ángel Corona (Sporting Director)",
  europe: "None for 2026/27",
  finish: "9th La Liga (2025/26), 49pts",
  owner: "Peter Lim (Meriton Holdings)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.fichajes.com/equipo/valencia-cf/altas-bajas/", "https://www.deportevalenciano.com/valencia-cf"],
  queries: ["Valencia CF fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Valencia CF"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Baptiste Santamaría", sub:"30 · CM · France", club:"PAOK", pos:"CM", fee:"Free (contract terminated)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 13 July 2026 - Santamaría leaves for the Greek champions on a free transfer."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Valencia's summer has so far been dominated by loan returns (Sergi Canós, Cenk Özkacar, Alberto Marí, Largie Ramazani, Lucas Beltrán) and a free departure for Baptiste Santamaría - no new permanent incoming signing confirmed yet under Carlos Corberán."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield", w:35, x:"Santamaría's exit leaves a squad spot open, though no direct incoming replacement has been reported yet."}
];

const WATCHLIST = [];

const HUB = {
  "fichajes-valencia": {l:"Fichajes.com - Valencia CF altas y bajas 2026/27", u:"https://www.fichajes.com/equipo/valencia-cf/altas-bajas/"}
};

const LINKMAP = {
  "Baptiste Santamaría": ["fichajes-valencia"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A window of loan returns rather than new faces`,
  heroLede: `Under <b>Carlos Corberán</b>, Valencia's summer so far has been about reintegrating returning loanees rather than making a marquee signing; the one confirmed departure is <b>Baptiste Santamaría</b>, who leaves for PAOK as a free agent.`,
  metaRow: `<span>COACH: <b>Carlos Corberán</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 confirmed`, x: `No completed signings found as of 3 Aug 2026` },
  spendOut: { v: `€0 fee`, x: `Santamaría left on contract termination` },
  methodLegend: ``
};
