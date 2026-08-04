/* ============================================================
   MERCATO IQ · CLUB DATA · RAYO VALLECANO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Rayo Vallecano", mono: "RV", slug: "rayo-vallecano",
  primary: "#E2001A", primaryBright: "#FF6259", primaryDeep: "#800010",
  primaryRgb: "226,0,26",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Beñat San José",
  dof: "Francisco Rodríguez (Sporting Director)",
  europe: "None for 2026/27",
  finish: "8th La Liga (2025/26), 50pts",
  owner: "Raúl Martín Presa (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.rayovallecano.es/etiqueta/fichaje", "https://www.elgoldigital.com/tag/fichajes-rayo-vallecano/"],
  queries: ["Rayo Vallecano fichajes 2026"]
};

const REPORT_META = {
  label: "Updated 03 Aug 2026 · Rayo Vallecano",
  updated: "2026-08-03T18:00:00Z"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Pep Chavarría", sub:"LB · Spain", club:"permanent to Chelsea", pos:"LB", fee:"€25m + €5m bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Schira calls it a done deal, personal terms agreed to 2032."}
];

const INCOMING = [
  {name:"Ilias Akhomach", sub:"22 · W · Morocco/Spain", club:"Villarreal", pos:"W", report:"Jul 2026", src:"OneFootball", tier:2, fee:"Undisclosed", truth:55, prob:50, light:"y", trend:"flat", note:"OneFootball reported a confirmed Rayo signing for the Villarreal winger, though Villarreal's own summer transfer tracker still listed Akhomach as attracting loan interest from Sevilla and Espanyol at a similar date - the two reports don't fully agree, so this is logged as a genuinely live story rather than a nailed-on certainty pending clearer confirmation."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Rayo's clearest live thread is the Ilias Akhomach interest, though conflicting reports mean it isn't yet a fully settled story."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Wide attacking options", w:40, x:"Akhomach interest points to Rayo looking to add width if the move firms up."}
];

const WATCHLIST = [
  {name:"Ilias Akhomach", club:"Villarreal", pos:"W", dir:"in", age:"~2 weeks", tier:2, note:"Conflicting reports on destination (Rayo vs Sevilla/Espanyol loan interest) - unresolved as of 3 Aug 2026."}
];

const HUB = {
  "rayo-official-fichaje": {l:"Rayo Vallecano - official transfer news tag", u:"https://www.rayovallecano.es/etiqueta/fichaje"},
  nicoloSchiraviaCaughtOffsidePepChavarra: {l:"Nicolo Schira (via CaughtOffside)", u:"https://www.caughtoffside.com/2026/08/03/journalist-terms-chelsea-transfer-done-deal-contract/"}};

const LINKMAP = {
  "Ilias Akhomach": ["rayo-official-fichaje"],
  "Pep Chavarría": ["nicoloSchiraviaCaughtOffsidePepChavarra"]};
const WL_LINKMAP = {
  "Ilias Akhomach": ["rayo-official-fichaje"]
};

const PROSE = {
  heroH2: `An unresolved winger saga is the summer's live story`,
  heroLede: `Under <b>Beñat San José</b>, Rayo's clearest transfer thread is interest in Villarreal winger <b>Ilias Akhomach</b> - though reports disagree on whether Rayo have actually won the race or whether Sevilla and Espanyol remain in contention for a loan.`,
  metaRow: `<span>COACH: <b>Beñat San José</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 confirmed`, x: `Akhomach reporting unresolved` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
