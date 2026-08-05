/* ============================================================
   MERCATO IQ · CLUB DATA · A.S. CITTADELLA 1973 · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026, verified via live search): this entry
   was mistagged as a Portuguese club. Cittadella is in fact the
   Italian club A.S. Cittadella 1973, based in Veneto, playing in
   Serie C Group A following relegation from Serie B in 2024/25.
   Country and league corrected accordingly.
   ============================================================ */

const BRAND = {
  club: "A.S. Cittadella 1973", mono: "AC", slug: "cidadela",
  primary: "#7A1F2B", primaryBright: "#C0485A", primaryDeep: "#4A0F17",
  primaryRgb: "122,31,43",
  breadcrumb: ["Italy","Serie C"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Relegated from Serie B, 2024/25",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["cittadella transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 - A.S. Cittadella 1973 (corrected from Portugal mistag)"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Database correction: this entry now correctly reflects A.S. Cittadella 1973 of Veneto, Italy (Serie C), not a Portuguese club."}
];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Cittadella Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A.S. Cittadella 1973 · 2026/27 Season`,
  heroLede: `Serie C, Group A. Cittadella preparing squad for next season after relegation from Serie B.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
