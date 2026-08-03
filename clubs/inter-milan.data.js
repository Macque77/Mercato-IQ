/* ============================================================
   MERCATO IQ · CLUB DATA · INTER MILAN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Inter Milan",
  mono: "INT",
  slug: "inter-milan",
  primary: "#0066CC",
  primaryBright: "#0080FF",
  primaryDeep: "#003D99",
  primaryRgb: "0,102,204",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Simone Inzaghi",
  dof: "Piero Ausilio (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "1st Serie A (2025/26)",
  owner: "Suning Group (Steven Zhang, CEO)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Inter Milan transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Inter Milan"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Nicolò Barella", sub:"27 · CM · Italy", club:"Inter Milan", pos:"CM", report:"18 Jul 2026", src:"Sky Italia", tier:2, fee:"New long-term deal", truth:90, prob:95, light:"g", trend:"up", note:"Inter securing midfield lynchpin Barella with fresh contract through 2031. Talks at advanced stage with expected completion within days."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Nicolò Barella extension</b>: Contract talks progressing well; deal expected to secure midfielder through 2031."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Inter consolidating midfield with Barella extension as champions prepare for European campaign."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield", w:40, x:"Barella's renewal secures the department; no major additions planned."}
];

const WATCHLIST = [
  {name:"Nicolò Barella", club:"Inter Milan", pos:"CM", dir:"in", age:"~16 days", tier:2, note:"Contract extension near completion. Expected announcement within a week according to Sky Italia."}
];

const HUB = {
  club: {l:"Inter Milan Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Inter Milan · 2026/27 Season`,
  heroLede: `Transfer window active. Inter Milan preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
