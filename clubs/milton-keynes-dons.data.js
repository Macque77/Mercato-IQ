/* ============================================================
   MERCATO IQ · CLUB DATA · MILTON KEYNES DONS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Milton Keynes Dons", mono: "MKD", slug: "milton-keynes-dons",
  primary: "#0D1B3E", primaryBright: "#6E8CFF", primaryDeep: "#060D1F",
  primaryRgb: "13,27,62",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Promoted from League Two (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["milton-keynes-dons transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Sam Nombe", sub:"ST", club:"Rotherham United", pos:"ST", fee:"£600k (+£1m add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed permanent transfer, confirmed by both club and local press."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Matty Young", sub:"DF/W", club:"Sunderland", pos:"DF", report:"~1 wk ago", src:"Various", tier:3, fee:"Loan", truth:50, prob:40, light:'y', trend:'flat', note:"MK Dons competing with Sheffield Wednesday, Leicester and Cardiff for the loan."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-samnombe": {l:"Related news search: Sam Nombe", u:"https://news.google.com/search?q=Milton%20Keynes%20Dons%20Sam%20Nombe%20transfer&hl=en-GB&gl=GB"},
  "gnews-mattyyoung": {l:"Related news search: Matty Young", u:"https://news.google.com/search?q=Milton%20Keynes%20Dons%20Matty%20Young%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Sam Nombe": ["gnews-samnombe"],
  "Matty Young": ["gnews-mattyyoung"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Milton Keynes Dons · 2026/27 Season`,
  heroLede: `Transfer window active. Milton Keynes Dons preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
