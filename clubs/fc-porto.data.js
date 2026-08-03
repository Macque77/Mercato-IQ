/* ============================================================
   MERCATO IQ · CLUB DATA · FC PORTO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Porto",
  mono: "FCP",
  slug: "fc-porto",
  primary: "#0057A8", primaryBright: "#5CA9FF", primaryDeep: "#00335F",
  primaryRgb: "0,87,168",
  breadcrumb: ["Portugal", "Liga Portugal"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Vítor Bruno",
  dof: "Andres Alves (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "1st Liga Portugal (2025/26)",
  owner: "Pinto da Costa (President)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["FC Porto transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · FC Porto"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Pepe", sub:"41 · CB · Portugal", club:"Free agent (Real Madrid exit)", pos:"CB", report:"31 Jul 2026", src:"O Jogo", tier:2, fee:"Free agent", truth:85, prob:80, light:"g", trend:"up", note:"Porto moving to bring back veteran defender Pepe as free agent after Real Madrid departure. Sources confirm final stages of negotiation."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Pepe return</b>: Porto moving quickly to secure Portuguese veteran as free agent from Real Madrid."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Porto looking to add defensive experience with potential Pepe return as free agent."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-back", w:60, x:"Pepe return would address backline depth for Champions League campaign."}
];

const WATCHLIST = [
  {name:"Pepe", club:"Free agent", pos:"CB", dir:"in", age:"~3 days", tier:2, note:"Portuguese legend becoming free agent after Madrid exit. Porto in advanced talks for defensive reinforcement."}
];

const HUB = {
  club: {l:"FC Porto Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Porto · 2026/27 Season`,
  heroLede: `Transfer window active. FC Porto preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
