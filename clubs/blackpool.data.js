/* ============================================================
   MERCATO IQ · CLUB DATA · BLACKPOOL · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Blackpool", mono: "BPL", slug: "blackpool",
  primary: "#F58220", primaryBright: "#FFAB5E", primaryDeep: "#8F4B12",
  primaryRgb: "245,130,32",
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
  queries: ["blackpool transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Ashley Fletcher", sub:"", club:"Huddersfield Town", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed transfer to Huddersfield Town"}
];
const INCOMING = [
  {name:"Jay Fulton", sub:"MF", club:"Free agent", pos:"MF", report:"Incoming rumour", src:"FLW opinion", tier:0, fee:"Free", truth:30, prob:20, light:"o", trend:"down", note:"On-page rumour retained; no fresh snippet data to update", lastSeen:"2026-08-07T20:08:12Z", baseProb:20, dead:true, deadReason:"No fresh snippet; appears stale; removed from live tracking"}
];
const OUTGOING = [
  {name:"Franco Ravizzoli", sub:"Unknown · Unknown · Unknown", club:"Blackpool", pos:"Unknown", report:"Franco Ravizzoli linked with exit", src:"Unknown", tier:3, fee:"Undisclosed", truth:50, prob:45, light:"y", trend:"up", note:"On-page rumour; no fresh snippet provided", lastSeen:"2026-08-07T23:07:29Z", baseProb:45},
  {name:"Josh Bowler", sub:"Unknown · Unknown · Unknown", club:"Blackpool", pos:"Unknown", report:"Josh Bowler linked with exit", src:"Unknown", tier:3, fee:"Undisclosed", truth:50, prob:45, light:"y", trend:"up", note:"On-page rumour; no fresh snippet provided", lastSeen:"2026-08-07T23:07:29Z", baseProb:45},
  {name:"Ashley Fletcher", sub:"", club:"Huddersfield Town", pos:"", report:"Ashley Fletcher leaves Blackpool to join Huddersfield Town", src:"BBC", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed departure", lastSeen:"2026-08-07T01:42:32Z", baseProb:100, dead:true, deadReason:"Confirmed transfer to Huddersfield Town"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  bBCAshleyFletcher: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1YTjQ1dFJlNVF6TG9NVXNSeEZqZlVPNDRBNXVnRVJMeW1uOGhPRW9hVHdUS29IaTBVT05DVURkTzRueEx5WHRZNVRoR0N6WFRzTXF0dUhxdi1VQ0FiaHhCWFNNRnoxYXc?oc=5"},
  thestarcoukMunroe: {l:"thestar.co.uk", u:"https://news.google.com/rss/articles/CBMivgFBVV95cUxQQTZ1WVZEaUxJRkROSlZiUE5YU1F1dUlfVGJwM0xacnNEVnRDQklTTFpJd3ZNdjRCUVd5MGpSam5DYm5BN2ZfalJXTGc2MGppY1ZPNkdGalZhRl9sMk5Zel9abXJ2aVZTUVJ4TGYwWDF1QTk5eXN2dlVEZGkzUUpHSkJCSVJmX1VpOHBfaVREeDFhZERBQWZBaDVJTExUeG1XbWppMlBhMWgtMDFvSVlZR09RMTFmMHpLVDB5c0N3?oc=5"},
  thestarcoukMunroe1: {l:"thestar.co.uk", u:"https://news.google.com/rss/articles/CBMivgFBVV95cUxQQTZ1WVZEaUxJRkROSlZiUE5YU1F1dUlfVGJwM0xacnNEVnRDQklTTFpJd3ZNdjRCUVd5MGpSam5DYm5BN2ZfalJXTGc2MGppY1ZPNkdGalZhRl9sMk5Zel9abXJ2aVZTUVJ4TGYwWDF1QTk5eXN2dlVEZGkzUUpHSkJCSVJmX1VpOHBfaVREeDFhZERBQWZBaDVJTExUeG1XbWppMlBhMWgtMDFvSVlZR09RMTFmMHpLVDB5c0N3"}};

const LINKMAP = {
  "Jay Fulton": ["flw"],
  "Franco Ravizzoli": ["flw"],
  "Josh Bowler": ["flw"],
  "Ashley Fletcher": ["bBCAshleyFletcher"],
  "Munroe": ["thestarcoukMunroe", "thestarcoukMunroe1"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Blackpool · 2026/27 Season`,
  heroLede: `Transfer window active. Blackpool preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
