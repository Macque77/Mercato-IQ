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
  {name:"Jamal Musiala", sub:"23 · LW/CAM · Germany", to:"permanent from Bayern Munich", fee:"€110m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 28 Jul. German winger joins Atlético to lead attacking redesign under Simeone. Blockbuster signing highlights club ambitions."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Gabriel Jesus", sub:"26 · ST · Brazil", club:"Manchester City", pos:"ST", report:"1 Aug 2026", src:"Sky Sports / Samuel Luckhurst", tier:2, fee:"€45m", truth:65, prob:42, light:"y", trend:"up", note:"Reports from Manchester area sources suggest City open to selling Jesus. Atlético interested but deal far from certain."},
  {name:"Villarreal winger", sub:"TBD", club:"Villarreal", pos:"RW", report:"30 Jul 2026", src:"Matteo Moretto / Relevo", tier:2, fee:"€20m+", truth:55, prob:35, light:"o", trend:"flat", note:"Moretto reports Atlético monitoring Villarreal's attacking options as squad depth play."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Jamal Musiala official</b>: Blockbuster €110m signing completed from Bayern Munich."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Atlético Madrid reshape attack around Musiala's arrival; European competition focus."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Forward", w:65, x:"Jesus interest signals depth pursuit behind Musiala signing."}
];

const WATCHLIST = [
  {name:"Jamal Musiala", club:"Atlético Madrid", pos:"LW/CAM", dir:"in", age:"~6 days", tier:1, note:"OFFICIAL - Musiala confirmed after €110m transfer from Bayern Munich."}
];

const HUB = {
  club: {l:"Atlético Madrid Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Atlético Madrid · 2026/27 Season`,
  heroLede: `Transfer window active. Atlético Madrid preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
