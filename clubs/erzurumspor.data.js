/* ============================================================
   MERCATO IQ · CLUB DATA · ERZURUMSPOR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Erzurumspor", mono: "E", slug: "erzurumspor",
  primary: "#00539F", primaryBright: "#5CA9FF", primaryDeep: "#003060",
  primaryRgb: "0,83,159",
  breadcrumb: ["Turkey","Süper Lig"]
};

const VOLATILE = {
  verified: "2026-07-29",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["erzurumspor transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Nariman Akhundzada", sub:"22 · ST · Azerbaijan", club:"Columbus Crew", pos:"ST", report:"4 Aug 2026", src:"Sabah", tier:2, fee:"Undisclosed", truth:90, prob:80, light:"g", trend:"flat", note:"Principle agreement reached; player set for a medical in Erzurum before signing, following a standout spell at Qarabağ (35 goals in 126 games).", lastSeen:"2026-08-04T19:10:50Z", baseProb:80}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Erzurumspor Official", u:"#"},
  sabahNarimanAkhundzada: {l:"Sabah", u:"https://www.sabah.com.tr/spor/futbol/2026/08/04/erzurumspor-fk-nariman-akhundzada-ile-prensipte-anlasti"}};

const LINKMAP = {
  "Nariman Akhundzada": ["sabahNarimanAkhundzada"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Erzurumspor · 2026/27 Season`,
  heroLede: `Transfer window active. Erzurumspor preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};