/* ============================================================
   MERCATO IQ · CLUB DATA · PANAITOLIKOS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Panaitolikos", mono: "P", slug: "panaitolikos",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["Greece","Super League"]
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
  queries: ["panaitolikos transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Marvelous Nakamba", sub:"MF · Zimbabwe", club:"Free agent (ex-Luton Town)", pos:"DM", report:"3 Aug 2026", src:"monobala.gr (via AgrinioCulture.gr)", tier:3, fee:"Free", truth:65, prob:55, light:"g", trend:"flat", note:"Preliminary agreement reportedly reached; expected in Greece around 6 Aug pending visa clearance.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Moussa Djenepo", sub:"W · Mali", club:"Free agent (ex-Southampton)", pos:"W", report:"3 Aug 2026", src:"monobala.gr (via AgrinioCulture.gr)", tier:3, fee:"Free", truth:60, prob:50, light:"y", trend:"flat", note:"Also described as preliminarily agreed, with a possible arrival on 5-6 Aug.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Panaitolikos Official", u:"#"},
  agrinioCulturegrMarvelousNakamba: {l:"AgrinioCulture.gr", u:"https://www.agrinioculture.gr/2026/08/03/panaitolikos-i-dipli-afixi-o-epithetikos-kai-to-kare-en-opsei-kalamatas/"}};

const LINKMAP = {
  "Marvelous Nakamba": ["agrinioCulturegrMarvelousNakamba"],
  "Moussa Djenepo": ["agrinioCulturegrMarvelousNakamba"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Panaitolikos · 2026/27 Season`,
  heroLede: `Transfer window active. Panaitolikos preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};