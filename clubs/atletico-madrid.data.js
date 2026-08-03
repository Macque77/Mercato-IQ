/* ============================================================
   MERCATO IQ · CLUB DATA · ATLÉTICO MADRID · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Atlético Madrid",
  mono: "ATM",
  slug: "atletico-madrid",
  primary: "#EB6E1F",
  primaryBright: "#FF8833",
  primaryDeep: "#CC5500",
  primaryRgb: "235,110,31",
  breadcrumb: ["Spain", "La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Diego Simeone",
  dof: "Andrea Berta (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "3rd La Liga (2025/26)",
  owner: "Enrique Cerezo (CEO)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["Atlético Madrid transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Atlético Madrid"
};

const CONFIRMED_IN = [
  {name:"Johnny Cardoso", sub:"24 · CDM · USA", to:"permanent from Real Betis", fee:"€30m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 10 Jul. The USMNT holding midfielder joins to add defensive-midfield depth and physicality behind Koke and De Paul."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Gabriel Jesus", sub:"26 · ST · Brazil", club:"Manchester City", pos:"ST", report:"1 Aug 2026", src:"Sky Sports / Samuel Luckhurst", tier:2, fee:"€45m", truth:65, prob:42, light:"y", trend:"up", note:"Reports from Manchester-area sources suggest City are open to selling Jesus. Atlético are interested, but a deal is far from certain."},
  {name:"Villarreal winger", sub:"TBD", club:"Villarreal", pos:"RW", report:"30 Jul 2026", src:"Matteo Moretto / Relevo", tier:2, fee:"€20m+", truth:55, prob:35, light:"y", trend:"flat", note:"Moretto reports Atlético monitoring Villarreal's attacking options as a squad-depth play."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Johnny Cardoso official</b>: €30m arrival from Real Betis adds midfield steel for Simeone."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Atlético add defensive-midfield depth with Cardoso; a forward addition (Jesus or a Villarreal winger) remains the live thread."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Jamal Musiala to Atlético Madrid</b>: a fabricated/anachronistic link - Musiala is recovering at Bayern Munich from the serious ankle injury sustained at the 2025 Club World Cup and has not been transferred anywhere."}
];

const POSITIONS = [
  {p:"Forward", w:65, x:"Jesus interest signals a depth pursuit up front after Cardoso's midfield signing."}
];

const WATCHLIST = [];

const HUB = {
  "gnews-johnnycardoso": {l:"Related news search: Johnny Cardoso", u:"https://news.google.com/search?q=Atl%C3%A9tico%20Madrid%20Johnny%20Cardoso%20transfer&hl=en-GB&gl=GB"},
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"},
  "luckhurst": {l:"Samuel Luckhurst (MEN)", u:"https://www.manchestereveningnews.co.uk/all-about/manchester-united-fc"},
  "moretto": {l:"Matteo Moretto", u:"https://x.com/MatteMoretto"},
  "relevo": {l:"Relevo", u:"https://www.relevo.com/"}
};

const LINKMAP = {
  "Johnny Cardoso": ["gnews-johnnycardoso"],
  "Gabriel Jesus": ["sky", "luckhurst"],
  "Villarreal winger": ["moretto", "relevo"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Atlético Madrid · 2026/27 Season`,
  heroLede: `Transfer window active. Atlético Madrid preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
