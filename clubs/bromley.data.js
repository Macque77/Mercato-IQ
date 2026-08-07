/* ============================================================
   MERCATO IQ · CLUB DATA · BROMLEY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bromley", mono: "BRO", slug: "bromley",
  primary: "#1C2B4A", primaryBright: "#8FA8FF", primaryDeep: "#0E1626",
  primaryRgb: "28,43,74",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Promoted from League Two (champions, 2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["bromley transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ethon Archer", sub:"Loan", club:"Luton Town", pos:"Unknown", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan arrival from Luton Town"},
  {name:"Deon Woodman", sub:"Unknown", club:"Wealdstone", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Wealdstone"},
  {name:"Victor Adeboyejo", sub:"striker", club:"Free", pos:"ST", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed on free transfer"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Ethon Archer", sub:"Loan", club:"Luton Town", pos:"Unknown", report:"Signed on loan from Luton Town", src:"BBC", tier:2, fee:"Loan", truth:95, prob:95, light:"g", trend:"flat", note:"Loan arrival confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Deon Woodman", sub:"Unknown", club:"Wealdstone", pos:"Unknown", report:"Signed from Wealdstone", src:"BBC", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"flat", note:"Confirmed signing from Wealdstone", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Victor Adeboyejo", sub:"Striker", club:"Free transfer", pos:"ST", report:"Bromley sign striker on free transfer", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Free transfer confirmed", lastSeen:"2026-08-07T17:40:24Z", baseProb:100}
];
const OUTGOING = [];
const DEAD = [
  {name:"Tiernan Brooks", sub:"GK", club:"Gateshead", pos:"GK", report:"~9 months ago", src:"Various", tier:4, fee:"Undisclosed", truth:30, prob:15, light:'o', trend:'flat', note:"Named among four monitoring clubs in a stale article, unconfirmed whether still live.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dir:"in", deadReason:"no fresh report in over a month", deadAt:"2026-08-06T10:24:32Z"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-tiernanbrooks": {l:"Related news search: Tiernan Brooks", u:"https://news.google.com/search?q=Bromley%20Tiernan%20Brooks%20transfer&hl=en-GB&gl=GB"},
  bBCVictorAdeboyejo: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9SLUFqcV9PVW03S2c2WUFLbnRhY3VoQ0tZeWZMM05vWmo0aU5DVFd1amNKQV9BUlZDTEVMR091V3ZDdk0yR09vOTd4NE85eG5wbWFMNDBOMFdxUzUxTmg0bmZZajYzTlk?oc=5"},
  bBCEthonArcher: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE8yVS0xbFRmeGc3Z1p0NVVTYzdZejBiLWJENWhuVW14LUxGdmdHd193U3hKVEtZREJGaVBlRElkTG1KTU5IOGlGSXRCNFFFcGg2S0s4MGxHVEdjQ2FMUTZOQ2FTcEU0QU0?oc=5"},
  bBCVictorAdeboyejo1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9SLUFqcV9PVW03S2c2WUFLbnRhY3VoQ0tZeWZMM05vWmo0aU5DVFd1amNKQV9BUlZDTEVMR091V3ZDdk0yR09vOTd4NE85eG5wbWFMNDBOMFdxUzUxTmg0bmZZajYzTlk"},
  bBCVictorAdeboyejo2: {l:"BBC", u:"https://www.bbc.com"}};

const LINKMAP = {
  "Tiernan Brooks": ["gnews-tiernanbrooks"],
  "Victor Adeboyejo": ["bBCVictorAdeboyejo", "bBCVictorAdeboyejo1", "bBCVictorAdeboyejo2"],
  "Ethon Archer": ["bBCEthonArcher", "bBCVictorAdeboyejo2"],
  "Deon Woodman": ["bBCEthonArcher", "bBCVictorAdeboyejo2"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Bromley · 2026/27 Season`,
  heroLede: `Transfer window active. Bromley preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
