/* ============================================================
   MERCATO IQ · CLUB DATA · PSV EINDHOVEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "PSV Eindhoven",
  mono: "PSV",
  slug: "psv-eindhoven",
  primary: "#DD0000",
  primaryBright: "#FF3333",
  primaryDeep: "#990000",
  primaryRgb: "221,0,0",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Peter Bosz",
  dof: "Marcel Brands (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "1st Eredivisie (2025/26)",
  owner: "PSV N.V.",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["PSV Eindhoven transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · PSV Eindhoven"
};

const CONFIRMED_IN = [
  {name:"Hirving Lozano", sub:"28 · RW · Mexico", to:"permanent from Bayern Munich (on loan)", fee:"€21m (purchase)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 25 Jun. Mexican winger returns on permanent deal after loan spell. Bayern Munich exit finalized."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Xavi Simons", sub:"21 · CAM · Netherlands", club:"PSV Eindhoven (loan from Leipzig)", pos:"CAM", report:"1 Aug 2026", src:"Sky Deutschland / Christian Falk", tier:2, fee:"Loan + option", truth:75, prob:65, light:"y", trend:"up", note:"Falk confirms PSV negotiating loan deal extension with RB Leipzig for talented Dutch playmaker."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Hirving Lozano permanent</b>: Mexican winger official signing from Bayern Munich."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"PSV securing attacking depth with Lozano purchase and Simons loan extension."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Attacking midfield", w:55, x:"Simons loan extension critical for Dutch champions' attacking identity."}
];

const WATCHLIST = [
  {name:"Hirving Lozano", club:"PSV Eindhoven", pos:"RW", dir:"in", age:"~39 days", tier:1, note:"OFFICIAL - Mexican winger confirmed permanent signing from Bayern Munich."},
  {name:"Xavi Simons", club:"PSV Eindhoven (loan)", pos:"CAM", dir:"in", age:"~2 days", tier:2, note:"Christian Falk: PSV negotiating loan extension with RB Leipzig for Dutch talent."}
];

const HUB = {
  club: {l:"PSV Eindhoven Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `PSV Eindhoven · 2026/27 Season`,
  heroLede: `Transfer window active. PSV Eindhoven preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
