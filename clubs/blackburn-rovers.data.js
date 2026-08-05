/* ============================================================
   MERCATO IQ · CLUB DATA · BLACKBURN ROVERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Blackburn Rovers", mono: "BR", slug: "blackburn-rovers",
  primary: "#009EE0", primaryBright: "#5CD2FF", primaryDeep: "#005E85",
  primaryRgb: "0,158,224",
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
  queries: ["blackburn-rovers transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Daniel Jebbison", sub:"FW · Canada", club:"Preston North End", pos:"FW", report:"~1 wk ago", src:"Lancashire Post", tier:2, fee:"Loan + option", truth:65, prob:55, light:'g', trend:'up', note:"Consistent with Preston's own reporting on the same story, decent cross-corroboration.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55}
];
const OUTGOING = [
  {name:"Ty Livesey", sub:"Winger", club:"Man City / Man Utd + 4 more", pos:"W", report:"~5 days ago", src:"Graeme Bailey", tier:3, fee:"Undisclosed", truth:55, prob:20, light:'o', trend:'flat', note:"Eye-catching six-club race claims should be read with real scepticism this early, no club has made a move yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "lancashirepost": {l:"Lancashire Post", u:"https://www.lep.co.uk/sport"},
  "bailey": {l:"Graeme Bailey (TeamTalk)", u:"https://x.com/GraemeBailey"}
};

const LINKMAP = {
  "Daniel Jebbison": ["lancashirepost"],
  "Ty Livesey": ["bailey"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Blackburn Rovers · 2026/27 Season`,
  heroLede: `Transfer window active. Blackburn Rovers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};