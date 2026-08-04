/* ============================================================
   MERCATO IQ · CLUB DATA · ANTALYASPOR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Antalyaspor", mono: "A", slug: "antalyaspor",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["Turkey","Süper Lig"]
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
  queries: ["antalyaspor transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Francis Nzaba", sub:"DF", club:"İstanbul Başakşehir", pos:"DF", report:"2 Aug 2026", src:"Yeni Alanya", tier:3, fee:"Loan", truth:85, prob:35, light:"y", trend:"flat", note:"Loan deal with Başakşehir is already agreed but Nzaba cannot be registered until FIFA lifts Antalyaspor's transfer ban.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Güray Vural", sub:"38 · FW/Winger · Turkey", club:"Free agent (ex-Iğdır FK)", pos:"FW", report:"2 Aug 2026", src:"Yeni Alanya", tier:3, fee:"Free", truth:55, prob:15, light:"o", trend:"flat", note:"Veteran wants to return to his former club but, like other targets, cannot be licensed while the FIFA transfer ban remains in place.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];
const OUTGOING = [
  {name:"Samuel Ballet", sub:"FW · Switzerland", club:"Antalyaspor", pos:"FW", report:"2 Aug 2026", src:"Yeni Alanya", tier:3, fee:"Undisclosed", truth:70, prob:55, light:"g", trend:"flat", note:"Move to Amed Sportif Faaliyetler described as pending, which would ease Antalyaspor's foreign-player quota squeeze.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Antalyaspor Official", u:"#"},
  yeniAlanyaFrancisNzaba: {l:"Yeni Alanya", u:"https://www.yenialanya.com/antalyaspor-yeni-sezona-transfer-engeli-ve-savunma-sikintisiyla-giriyor"}};

const LINKMAP = {
  "Francis Nzaba": ["yeniAlanyaFrancisNzaba"],
  "Güray Vural": ["yeniAlanyaFrancisNzaba"],
  "Samuel Ballet": ["yeniAlanyaFrancisNzaba"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Antalyaspor · 2026/27 Season`,
  heroLede: `Transfer window active. Antalyaspor preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};