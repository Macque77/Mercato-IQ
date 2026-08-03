/* ============================================================
   MERCATO IQ · CLUB DATA · OLYMPIQUE DE MARSEILLE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Olympique de Marseille",
  mono: "OLY",
  slug: "olympique-marseille",
  primary: "#00A8E1",
  primaryBright: "#00A8E1",
  primaryDeep: "#00A8E1",
  primaryRgb: "100,100,100",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Jérôme Gasset",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "5th Ligue 1 (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Olympique de Marseille transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Olympique de Marseille"
};

const CONFIRMED_IN = [
  {name:"Matteo Guendouzi", sub:"24 · CM · France/Italy", to:"permanent from Lazio", fee:"€18m", status:"done", note:"Confirmed 1 Aug. Midfielder joins from Lazio to strengthen midfield."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Ousmane Dembélé", sub:"27 · RW · France", club:"PSG", pos:"RW", report:"2 Aug 2026", src:"Fabrice Hawkins / L'Équipe", tier:2, fee:"€50m+", truth:55, prob:35, note:"Hawkins reports Marseille interest in PSG winger. PSG not motivated to sell."},
  {name:"Luis Díaz", sub:"26 · LW · Colombia", club:"Liverpool", pos:"LW", report:"30 Jul 2026", src:"Sky Sports News", tier:2, fee:"€60m", truth:48, prob:28, note:"Sky reports Marseille monitoring; Liverpool unlikely to sell to Ligue 1 rival."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "gnews-matteoguendouzi": {l:"Related news search: Matteo Guendouzi", u:"https://news.google.com/search?q=Olympique%20de%20Marseille%20Matteo%20Guendouzi%20transfer&hl=en-GB&gl=GB"},
  "hawkins": {l:"Fabrice Hawkins (L'Équipe)", u:"https://x.com/HawkinsFabrice"},
  "lequipe": {l:"L'Équipe", u:"https://www.lequipe.fr/Football/"},
  "skynews": {l:"Sky Sports News", u:"https://www.skysports.com/football/news"}
};

const LINKMAP = {
  "Matteo Guendouzi": ["gnews-matteoguendouzi"],
  "Ousmane Dembélé": ["hawkins", "lequipe"],
  "Luis Díaz": ["skynews"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Olympique de Marseille · 2026/27 Season`,
  heroLede: `Transfer window active. Olympique de Marseille preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
