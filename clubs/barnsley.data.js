/* ============================================================
   MERCATO IQ · CLUB DATA · BARNSLEY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Barnsley", mono: "BAR", slug: "barnsley",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Mid-table League One (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["barnsley transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Callum Brittain", sub:"DF", club:"Blackburn Rovers", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent exit."}
];
const INCOMING = [
  {name:"Unnamed 24yo midfielder", sub:"MF", club:"Undisclosed", pos:"MF", report:"~1 wk ago", src:"Charlie Gregory / FLW", tier:3, fee:"Undisclosed", truth:45, prob:45, light:'y', trend:'flat', note:"Reported as set to seal a deal, but the player has not been named.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"Cannot identify player — no name provided in original entry or snippets"}
];
const OUTGOING = [
  {name:"Adam Phillips", sub:"MF", club:"Barnsley", pos:"MF", report:"Outgoing link", src:"Pete O'Rourke", tier:3, fee:"Undisclosed", truth:75, prob:70, light:"g", trend:"down", note:"No new information in snippets; keeping as live pending confirmation or retirement", lastSeen:"2026-08-07T10:18:48Z", baseProb:70},
  {name:"David McGoldrick", sub:"ST", club:"Barnsley", pos:"ST", report:"Outgoing link", src:"Various", tier:3, fee:"Undisclosed", truth:40, prob:25, light:"o", trend:"down", note:"No new information in snippets; keeping as live pending confirmation or retirement", lastSeen:"2026-08-07T10:18:48Z", baseProb:25}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-callumbrittain": {l:"Related news search: Callum Brittain", u:"https://news.google.com/search?q=Barnsley%20Callum%20Brittain%20transfer&hl=en-GB&gl=GB"},
  "src-charliegregory": {l:"Charlie Gregory", u:"https://news.google.com/search?q=Charlie%20Gregory%20Barnsley%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  "orourke": {l:"Pete O'Rourke (Football Insider)", u:"https://x.com/talkSPORT_PeteO"},
  "gnews-davidmcgoldrick": {l:"Related news search: David McGoldrick", u:"https://news.google.com/search?q=Barnsley%20David%20McGoldrick%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Callum Brittain": ["gnews-callumbrittain"],
  "Unnamed 24yo midfielder": ["src-charliegregory", "flw"],
  "Adam Phillips": ["orourke"],
  "David McGoldrick": ["gnews-davidmcgoldrick"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Barnsley · 2026/27 Season`,
  heroLede: `Transfer window active. Barnsley preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
