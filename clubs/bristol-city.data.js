/* ============================================================
   MERCATO IQ · CLUB DATA · BRISTOL CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bristol City", mono: "BC", slug: "bristol-city",
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
  queries: ["bristol-city transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Sam Tickle", sub:"GK", club:"Wigan Athletic", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival."},
  {name:"Brad Collins", sub:"GK", club:"Coventry City", pos:"GK", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed free transfer."}
];
const CONFIRMED_OUT = [
  {name:"Sinclair Armstrong", sub:"ST", club:"Göztepe", pos:"ST", fee:"£1.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent sale."}
];
const INCOMING = [];
const OUTGOING = [];
const DEAD = [
  {name:"Rio Cardines", sub:"Full-back", club:"Crystal Palace", pos:"FB", report:"~1 wk ago", src:"Yahoo Sports", tier:3, fee:"Loan", truth:55, prob:45, light:'y', trend:'flat', note:"Manager Michael Skubala's own still open for business quote lends this some weight, but nothing official and he stressed there is no rush.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"No fresh snippet evidence of an active transfer; rumour from ~1 week ago with no material update or confirmation", dir:"in", deadAt:"2026-08-06T14:21:38Z"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-samtickle": {l:"Related news search: Sam Tickle", u:"https://news.google.com/search?q=Bristol%20City%20Sam%20Tickle%20transfer&hl=en-GB&gl=GB"},
  "gnews-bradcollins": {l:"Related news search: Brad Collins", u:"https://news.google.com/search?q=Bristol%20City%20Brad%20Collins%20transfer&hl=en-GB&gl=GB"},
  "gnews-sinclairarmstrong": {l:"Related news search: Sinclair Armstrong", u:"https://news.google.com/search?q=Bristol%20City%20Sinclair%20Armstrong%20transfer&hl=en-GB&gl=GB"},
  "yahoosport": {l:"Yahoo Sports", u:"https://uk.sports.yahoo.com/"}
};

const LINKMAP = {
  "Sam Tickle": ["gnews-samtickle"],
  "Brad Collins": ["gnews-bradcollins"],
  "Sinclair Armstrong": ["gnews-sinclairarmstrong"],
  "Rio Cardines": ["yahoosport"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Bristol City · 2026/27 Season`,
  heroLede: `Transfer window active. Bristol City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};