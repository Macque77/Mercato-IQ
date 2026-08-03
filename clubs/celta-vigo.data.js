/* ============================================================
   MERCATO IQ · CLUB DATA · RC CELTA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RC Celta", mono: "RC", slug: "celta-vigo",
  primary: "#8AC3EE", primaryBright: "#C9E6FF", primaryDeep: "#3E7EA8",
  primaryRgb: "138,195,238",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Claudio Giráldez",
  dof: "Marián Mouriño (President) · Ángel Falcón (Sporting Director)",
  europe: "UEFA Europa League (2026/27)",
  finish: "6th La Liga (2025/26), 54pts",
  owner: "Celta de Vigo SAD, Marián Mouriño President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://thehardtackle.com/", "https://www.fichajes.com/equipo/real-club-celta-de-vigo/altas-bajas/"],
  queries: ["Celta Vigo fichajes 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · RC Celta"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Altay Bayindir", sub:"28 · GK · Turkey", club:"Manchester United", pos:"GK", report:"03 Aug 2026", src:"Faro de Vigo / Sport Witness", tier:2, fee:"Season-long loan, no fee", truth:75, prob:65, light:"g", trend:"up", note:"Bayindir was set to undergo his medical 'within hours' of this report, with completion expected by Monday at the latest. Coach Claudio Giráldez wants an experienced back-up goalkeeper after Ionut Radu's injury concerns; Bayindir lost his United starting spot to Senne Lammens after a poor run of six Premier League games without a clean sheet."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Altay Bayindir loan</b>: medical being lined up, with completion expected imminently."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Celta's one live incoming story is a season-long loan for Manchester United goalkeeper Altay Bayindir, addressing a goalkeeping injury concern behind Ionut Radu."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Goalkeeper depth", w:55, x:"Radu's injury concerns are driving the Bayindir loan pursuit as senior cover."}
];

const WATCHLIST = [
  {name:"Altay Bayindir", club:"Manchester United", pos:"GK", dir:"in", age:"~0 days", tier:2, note:"Medical being arranged; loan expected to be completed imminently per Faro de Vigo."}
];

const HUB = {
  "hardtackle-bayindir1": {l:"The Hard Tackle - Celta eyeing loan for Bayindir", u:"https://thehardtackle.com/transfer-news/2026/08/02/celta-vigo-eyeing-loan-move-for-altay-bayindir/"},
  "hardtackle-bayindir2": {l:"The Hard Tackle - Bayindir closing in, medical lined up", u:"https://thehardtackle.com/transfer-news/2026/08/03/altay-bayindir-closing-in-on-joining-celta-vigo-medical-lined-up/"}
};

const LINKMAP = {
  "Altay Bayindir": ["hardtackle-bayindir1", "hardtackle-bayindir2"]
};
const WL_LINKMAP = {
  "Altay Bayindir": ["hardtackle-bayindir2"]
};

const PROSE = {
  heroH2: `A goalkeeping loan is Celta's live deadline-window story`,
  heroLede: `Fresh off a Europa League-qualifying sixth-place finish, <b>Claudio Giráldez</b>'s side are moving to add senior goalkeeping cover: <b>Altay Bayindir</b> is closing in on a season-long loan from Manchester United, with a medical understood to be imminent.`,
  metaRow: `<span>COACH: <b>Claudio Giráldez</b></span> <span>EUROPE: <b>Europa League</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div><div class="stat gold"><div class="l">Live Loan</div><div class="v">Bayindir</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€0 fee`, x: `Bayindir move structured as a loan` },
  spendOut: { v: `€0 confirmed`, x: `No completed departures found as of 3 Aug 2026` },
  methodLegend: ``
};
