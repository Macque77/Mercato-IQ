/* ============================================================
   MERCATO IQ · CLUB DATA · SL BENFICA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "SL Benfica",
  mono: "SLB",
  slug: "sl-benfica",
  primary: "#C60C30",
  primaryBright: "#FF2040",
  primaryDeep: "#990000",
  primaryRgb: "198,12,48",
  breadcrumb: ["Portugal", "Liga Portugal"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Bruno Lage",
  dof: "Rui Pedro Costa (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "1st Liga Portugal (2025/26)",
  owner: "Benfica SAD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["SL Benfica transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · SL Benfica"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"João Neves", sub:"20 · CM · Portugal", club:"PSG", pos:"CM", fee:"€60m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 15 Jul. Midfielder sold to PSG for €60m. Major financial windfall for Portuguese club."}
];

const INCOMING = [
  {name:"Todibo from Nice", sub:"24 · CB · France", club:"OGC Nice", pos:"CB", report:"31 Jul 2026", src:"Fabrice Hawkins / L'Équipe", tier:2, fee:"€20m", truth:58, prob:42, light:"y", trend:"up", note:"Hawkins reports Benfica interested in Nice defender. Deal talks ongoing but not finalized."},
  {name:"Sérgio Conceição", sub:"35 · ST · Portugal", club:"Free agent", pos:"ST", report:"28 Jul 2026", src:"Portuguese media", tier:2, fee:"Free agent", truth:40, prob:22, light:"o", trend:"flat", note:"Speculation about former Porto striker; low likelihood given age and competition."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [
  {ar:"⬇", t:"<b>João Neves to PSG</b>: Star midfielder sells for €60m to Paris Saint-Germain."}
];

const NEW = [
  {ar:"✦", t:"Benfica rebuild after Neves sale; defensive reinforcements with Todibo pursuit."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-back", w:60, x:"Todibo interest signals defensive depth recruitment."}
];

const WATCHLIST = [
  {name:"João Neves", club:"PSG", pos:"CM", dir:"out", age:"~19 days", tier:1, note:"OFFICIAL - Midfielder confirmed to Paris Saint-Germain."}
];

const HUB = {
  "gnews-jooneves": {l:"Related news search: João Neves", u:"https://news.google.com/search?q=SL%20Benfica%20Jo%C3%A3o%20Neves%20transfer&hl=en-GB&gl=GB"},
  "hawkins": {l:"Fabrice Hawkins (L'Équipe)", u:"https://x.com/HawkinsFabrice"},
  "lequipe": {l:"L'Équipe", u:"https://www.lequipe.fr/Football/"},
  "gnews-srgioconceio": {l:"Related news search: Sérgio Conceição", u:"https://news.google.com/search?q=SL%20Benfica%20S%C3%A9rgio%20Concei%C3%A7%C3%A3o%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "João Neves": ["gnews-jooneves"],
  "Todibo from Nice": ["hawkins", "lequipe"],
  "Sérgio Conceição": ["gnews-srgioconceio"]
};
const WL_LINKMAP = {
  "João Neves": ["gnews-jooneves"]
};

const PROSE = {
  heroH2: `SL Benfica · 2026/27 Season`,
  heroLede: `Transfer window active. SL Benfica preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
