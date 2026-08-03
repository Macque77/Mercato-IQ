/* ============================================================
   MERCATO IQ · CLUB DATA · ASCOLI PICCHIO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Ascoli Picchio", mono: "AP", slug: "ascoli-picchio",
  primary: "#FFFFFF", primaryBright: "#FFFFFF", primaryDeep: "#B0B0B0",
  primaryRgb: "255,255,255",
  breadcrumb: ["Italy","Serie B"]
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
  queries: ["ascoli-picchio transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Gian Marco Crespi", sub:"GK", club:"Free agent", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed to 2027."},
  {name:"Andrea Oliveri", sub:"MF", club:"Atalanta", pos:"MF", fee:"Loan (option to buy)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan with right of redemption."}
];
const CONFIRMED_OUT = [
  {name:"Emanuele Ndoj", sub:"MF", club:"Released", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract terminated."},
  {name:"Gabriele Pagliai", sub:"FW", club:"Calcio Catania", pos:"FW", fee:"Loan (option to buy)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loaned out with a purchase option."},
  {name:"Simone Corazza", sub:"ST", club:"Released", pos:"ST", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract resolved."}
];
const INCOMING = [
  {name:"Kurminowski", sub:"FW", club:"Free agent", pos:"FW", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"Free", truth:50, prob:35, light:'y', trend:'flat', note:"Monitoring stage only, nothing advanced."},
  {name:"Simone Soleri", sub:"ST", club:"Spezia", pos:"ST", report:"~1 wk ago", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:55, prob:40, light:'y', trend:'flat', note:"Reported interest, no figures attached yet."}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-gianmarcocrespi": {l:"Related news search: Gian Marco Crespi", u:"https://news.google.com/search?q=Ascoli%20Picchio%20Gian%20Marco%20Crespi%20transfer&hl=en-GB&gl=GB"},
  "gnews-andreaoliveri": {l:"Related news search: Andrea Oliveri", u:"https://news.google.com/search?q=Ascoli%20Picchio%20Andrea%20Oliveri%20transfer&hl=en-GB&gl=GB"},
  "gnews-emanuelendoj": {l:"Related news search: Emanuele Ndoj", u:"https://news.google.com/search?q=Ascoli%20Picchio%20Emanuele%20Ndoj%20transfer&hl=en-GB&gl=GB"},
  "gnews-gabrielepagliai": {l:"Related news search: Gabriele Pagliai", u:"https://news.google.com/search?q=Ascoli%20Picchio%20Gabriele%20Pagliai%20transfer&hl=en-GB&gl=GB"},
  "gnews-simonecorazza": {l:"Related news search: Simone Corazza", u:"https://news.google.com/search?q=Ascoli%20Picchio%20Simone%20Corazza%20transfer&hl=en-GB&gl=GB"},
  "tuttomercato": {l:"Tuttomercatoweb", u:"https://www.tuttomercatoweb.com/"}
};

const LINKMAP = {
  "Gian Marco Crespi": ["gnews-gianmarcocrespi"],
  "Andrea Oliveri": ["gnews-andreaoliveri"],
  "Emanuele Ndoj": ["gnews-emanuelendoj"],
  "Gabriele Pagliai": ["gnews-gabrielepagliai"],
  "Simone Corazza": ["gnews-simonecorazza"],
  "Kurminowski": ["tuttomercato"],
  "Simone Soleri": ["tuttomercato"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Ascoli Picchio · 2026/27 Season`,
  heroLede: `Transfer window active. Ascoli Picchio preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};