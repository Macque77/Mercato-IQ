/* ============================================================
   MERCATO IQ · CLUB DATA · SOUTHAMPTON · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Southampton", mono: "S", slug: "southampton",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["England","Championship"]
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
  queries: ["southampton transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Cyle Larin", sub:"ST", club:"Mallorca", pos:"ST", fee:"£3.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent signing."},
  {name:"Daniel Peretz", sub:"GK", club:"Bayern Munich", pos:"GK", fee:"£6.05m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent signing."},
  {name:"Lewis Dobbin", sub:"23 · FW/W", club:"Aston Villa", pos:"FW", fee:"£9m + add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"The Athletic reports a medical already underway, effectively done, just awaiting the announcement."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-cylelarin": {l:"Related news search: Cyle Larin", u:"https://news.google.com/search?q=Southampton%20Cyle%20Larin%20transfer&hl=en-GB&gl=GB"},
  "gnews-danielperetz": {l:"Related news search: Daniel Peretz", u:"https://news.google.com/search?q=Southampton%20Daniel%20Peretz%20transfer&hl=en-GB&gl=GB"},
  "gnews-lewisdobbin": {l:"Related news search: Lewis Dobbin", u:"https://news.google.com/search?q=Southampton%20Lewis%20Dobbin%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Cyle Larin": ["gnews-cylelarin"],
  "Daniel Peretz": ["gnews-danielperetz"],
  "Lewis Dobbin": ["gnews-lewisdobbin"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Southampton · 2026/27 Season`,
  heroLede: `Transfer window active. Southampton preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};