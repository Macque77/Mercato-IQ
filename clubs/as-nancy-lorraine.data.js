/* ============================================================
   MERCATO IQ · CLUB DATA · AS NANCY-LORRAINE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AS Nancy-Lorraine", mono: "AN", slug: "as-nancy-lorraine",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["France","Ligue 2"]
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
  queries: ["as-nancy-lorraine transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Ilyes Housni", sub:"Unknown · France · Unknown", club:"Paris", pos:"Unknown", report:"Young talent signed from Paris academy", src:"Ouest-France", tier:2, fee:"Unknown", truth:90, prob:95, light:"g", trend:"flat", note:"Official signing reported", lastSeen:"2026-08-07T01:42:32Z", baseProb:95},
  {name:"Unknown player", sub:"Unknown · Unknown · Unknown", club:"Troyes", pos:"Unknown", report:"Second loan signing from Troyes", src:"L'Est Républicain", tier:3, fee:"Loan", truth:75, prob:80, light:"g", trend:"flat", note:"Player name not specified in snippet; second Troyes loan deal reported", lastSeen:"2026-08-07T01:42:32Z", baseProb:80}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"As-Nancy-Lorraine Official", u:"#"},
  leRepublicainLorrainLoganNdenbe: {l:"Le Republicain Lorrain", u:"https://news.google.com/rss/articles/CBMi5gFBVV95cUxQZndteko3aWZPcUJOSExoaFVYVUZhWktiejRscEpNd3BtT016d2ZWX2ppbVFnQW10Rl95Qks0OFFJLUJIRXotU0xUeWQydURkSFRPSk15VEZVQkZlelFRWjdidWpIQ2pVWm1ILW1IeHA0YzlYSGhLRl9zVEpaaTFrekpIZDhEWF9SU0EtUlZDOFZYVXN6Wk9Ka1BUcmNFbGlGYi10TC1iLUJHc05NZ0JFMGE3c0pZSFVmWG8wUTNvcjFMR21TUGM0ZG1JMmpacWFLOThlLXJRN3N2TmtaQVQzWGZTSWY2Zw?oc=5"},
  ouestFranceIlyesHousni: {l:"Ouest-France", u:"https://news.google.com/rss/articles/CBMi0wFBVV95cUxNZ3lrVEFrdHJRblhaWVNSLUh2TWpwajVXV2EwZlpWMjR6emFOeTlidWljRHhVa2pQRUpIVjI2akZUR3ZUNlZTMEZiRTAzWnltODFYQUQ4VDRLR1NPQXVOZjVLaS01WFhfQVJYV2NzQzk1bjBkNGhDckJydHc4UXZHekxmUzRyeVNfSzh2TWFvZ29ldFNuTWhpb2czX1hPOThBSU03Y0RxX1c0d29WUEJzZjFIT2lPeFc2NnVYNTN3WGlpVkVQYmhMRjZTTEdCcDUzWUhB?oc=5"},
  lEstRpublicainUnknownplayer: {l:"L'Est Républicain", u:"https://news.google.com/rss/articles/CBMiuwFBVV95cUxPeHhhZV9ROE9vX01OV1NPeUphREV2cnJUdWZkUlV1cGZTeklCN091bW0zblUtbmhIZ0Uwa2FXa0pYVkcxSTlsb2laSWg3b09weVVndWpKbjZqNG56Vm9DVXpXNVdQdkgyc3pWVmZlenp3UXRRWGJQYTI0ZkxDS0VaNHNyRjZwUEVDV3pTNVQ5N2hqcnF6dy0tYjNmNzAVeUVtVkwzcjgzdDduUlZ6Y3lGOXN4UVZWcDdWdms0?oc=5"}};

const LINKMAP = {
  "Logan Ndenbe": ["leRepublicainLorrainLoganNdenbe"],
  "Ilyes Housni": ["ouestFranceIlyesHousni"],
  "Unknown player": ["lEstRpublicainUnknownplayer"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AS Nancy-Lorraine · 2026/27 Season`,
  heroLede: `Transfer window active. AS Nancy-Lorraine preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};