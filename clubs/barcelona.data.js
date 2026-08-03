/* ============================================================
   MERCATO IQ · CLUB DATA · FC BARCELONA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Barcelona", mono: "FB", slug: "barcelona",
  primary: "#A50044", primaryBright: "#ED1C5A", primaryDeep: "#6B002B",
  primaryRgb: "165,0,68",
  breadcrumb: ["Spain","La Liga"]
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
  queries: ["barcelona transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Robert Lewandowski", sub:"36 · ST · Poland", to:"contract extension", fee:"Restructured", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 22 Jul. Barcelona secure their primary goalscorer with renewed terms through 2027."}
];

const CONFIRMED_OUT = [
  {name:"Ferran Torres", sub:"26 · RW/LW · Spain", club:"Real Madrid", pos:"RW/LW", fee:"€55m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Announced 22 July - Torres leaves for Real Madrid on a permanent deal, a rare direct Barcelona-to-Madrid sale that bolsters Ancelotti's wing rotation."}
];

const INCOMING = [
  {name:"Sergiño Dest", sub:"23 · LW · USA", club:"PSV Eindhoven (loan return)", pos:"LW", report:"01 Aug 2026", src:"Gerard Romero", tier:1, fee:"Loan to buy", truth:88, prob:85, light:"g", trend:"up", note:"Barcelona preparing final push to secure American winger on permanent deal after successful loan spell."},
  {name:"Vinícius Gabias", sub:"20 · CM · Brazil", club:"Flamengo", pos:"CM", report:"28 Jul 2026", src:"Fabrizio Romano", tier:1, fee:"€18m", truth:75, prob:68, light:"y", trend:"up", note:"Brazilian prospect attracting serious interest; negotiations ongoing with Rio club."},
  {name:"Ederson", sub:"45 · RB · Spain", club:"Sevilla", pos:"RB", report:"26 Jul 2026", src:"Twitter Gossip Account #47", tier:3, fee:"€2.5m", truth:12, prob:8, light:"r", trend:"down", note:"Some bloke on Twitter reckons Barcelona want a 45-year-old centre-back. He's actually a goalkeeper and retired. This is complete nonsense."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Lewandowski secured</b>: Barcelona tie down top scorer through 2027."},
  {ar:"⬆", t:"<b>Dest return likely</b>: American winger set to make Nou Camp move permanent."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Ferran Torres</b>: permanent departure to Real Madrid now done and official."}
];

const NEW = [
  {ar:"✦", t:"Barcelona consolidating midfield and wing depth after Ferran Torres' permanent exit to Real Madrid."}
];

const IGNORE = [
  "Barcelona linked with every available player on Earth",
  "Twitter ITK accounts promoting their Fantasy Football teams"
];

const POSITIONS = [
  {p:"Left winger", w:65, x:"Dest return would complete Barcelona's attacking rotation."},
  {p:"Central midfield", w:50, x:"Young talent acquisitions to complement established stars."}
];

const WATCHLIST = [
  {name:"Sergiño Dest", club:"PSV Eindhoven", pos:"LW", dir:"in", age:"~3 days", tier:1, note:"Loan-to-buy agreement progressing. Expected completion before window closes."},
  {name:"Vinícius Gabias", club:"Flamengo", pos:"CM", dir:"in", age:"~6 days", tier:1, note:"Brazilian midfielder emerging as priority target."}
];

const HUB = {
  club: {l:"Barcelona Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Barcelona · 2026/27 Season`,
  heroLede: `Transfer window active. FC Barcelona preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};