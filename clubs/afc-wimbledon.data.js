/* ============================================================
   MERCATO IQ · CLUB DATA · AFC WIMBLEDON · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AFC Wimbledon", mono: "AFC", slug: "afc-wimbledon",
  primary: "#041E42", primaryBright: "#FFD700", primaryDeep: "#020F21",
  primaryRgb: "4,30,66",
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
  queries: ["afc-wimbledon transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ollie Harrison", sub:"MF/FW", club:"Chelsea", pos:"MF", fee:"Undisclosed development fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Youth signing confirmed via club's official channels."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Jayden Stockley", sub:"Striker", club:"Port Vale", pos:"ST", report:"Signed from Port Vale", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official signing confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Zack Nelson", sub:"Defender", club:"Luton Town", pos:"DEF", report:"Signed after Luton Town release", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Official signing confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"James Tilly", sub:"Midfielder", club:"Wycombe Wanderers", pos:"MID", report:"Deal agreed with Wycombe", src:"TribalFootball", tier:3, fee:"Undisclosed", truth:85, prob:90, light:"g", trend:"flat", note:"Transfer agreed, signing expected", lastSeen:"2026-08-07T01:42:32Z", baseProb:90},
  {name:"Steven Sessegnon", sub:"Midfielder", club:"Wigan Athletic", pos:"MID", report:"Joined after leaving Wigan Athletic", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Official signing confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Shaun Hutchinson", sub:"Defender", club:"Millwall", pos:"DEF", report:"Wanted by AFC Wimbledon and Lincoln City", src:"SportsBoom UK", tier:3, fee:"", truth:70, prob:65, light:"g", trend:"flat", note:"Former Millwall captain of interest", lastSeen:"2026-08-07T01:42:32Z", baseProb:65}
];
const OUTGOING = [
  {name:"Riley Harbottle", sub:"Player", club:"Bristol Rovers", pos:"Unknown", report:"Signed by Bristol Rovers from AFC Wimbledon", src:"Bristol Rovers FC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official transfer confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Foyo", sub:"Striker", club:"Rhode Island FC", pos:"ST", report:"Signed for Rhode Island FC", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official transfer confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-ollieharrison": {l:"Related news search: Ollie Harrison", u:"https://news.google.com/search?q=AFC%20Wimbledon%20Ollie%20Harrison%20transfer&hl=en-GB&gl=GB"},
  bBCJaydenStockley: {l:"BBC", u:"https://www.bbc.com"},
  tribalFootballJamesTilly: {l:"TribalFootball", u:"https://www.tribalfootball.com"},
  sportsBoomUKShaunHutchinson: {l:"SportsBoom UK", u:"https://www.sportsboom.co.uk"},
  bristolRoversFootballClubRileyHarbottle: {l:"Bristol Rovers Football Club", u:"https://www.bristolrovers.co.uk"}};

const LINKMAP = {
  "Ollie Harrison": ["gnews-ollieharrison"],
  "Jayden Stockley": ["bBCJaydenStockley"],
  "Zack Nelson": ["bBCJaydenStockley"],
  "James Tilly": ["tribalFootballJamesTilly"],
  "Steven Sessegnon": ["bBCJaydenStockley"],
  "Shaun Hutchinson": ["sportsBoomUKShaunHutchinson"],
  "Riley Harbottle": ["bristolRoversFootballClubRileyHarbottle"],
  "Foyo": ["bBCJaydenStockley"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AFC Wimbledon · 2026/27 Season`,
  heroLede: `Transfer window active. AFC Wimbledon preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
