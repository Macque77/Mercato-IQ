/* ============================================================
   MERCATO IQ · CLUB DATA · WATFORD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Watford", mono: "W", slug: "watford",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
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
  queries: ["watford transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Jordan Zemura", sub:"LB · Zimbabwe", club:"loan from Bournemouth", pos:"LB", fee:"Loan to 30 Jun 2027", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan from Bournemouth, confirmed via Di Marzio's live mercato digest."},
  {name:"Iker Bravo", sub:"ST · Spain", club:"permanent from Udinese", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer confirmed via Di Marzio's live mercato digest."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Martin Payero", sub:"Midfielder", club:"Udinese", pos:"MF", report:"Watford close in on transfer for Udinese midfielder", src:"BBC", tier:2, fee:"", truth:75, prob:70, light:"g", trend:"flat", note:"Advanced talks reported", lastSeen:"2026-08-07T01:42:32Z", baseProb:70}
];
const OUTGOING = [
  {name:"Nestory Irankunda", sub:"Midfielder · Australia", club:"Watford", pos:"MF", report:"Watford accept Sporting CP's $24.5m offer; transfer talks advanced", src:"football360.com.au / Watford Observer / Hull Live", tier:3, fee:"$24.5m", truth:85, prob:80, light:"g", trend:"up", note:"Offer accepted; Hull City also mentioned in talks", lastSeen:"2026-08-07T01:42:32Z", baseProb:80}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Watford Official", u:"#"},
  nicoloSchiraNestoryIrankunda: {l:"Nicolo Schira", u:"https://www.transferfeed.com/transfers/nestory-irankunda-watford-sporting-cp/43982109"},
  gianlucaDiMarzioJordanZemura: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-notizie-giornata-2-agosto-2026-495426"},
  gianlucaDiMarzioIkerBravo: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/calciomercato-live-notizie-news-24-luglio-2026-495120"},
  sofascoreFedericoRavaglia: {l:"Sofascore", u:"https://news.google.com/rss/articles/CBMiekFVX3lxTE1CSW5xTUpmUF9zbE41VXBRa3cwMllfMmdVWHJERmN5RUNKY3dGem1nSTFWbjBHTFZudXN3YTdJY0JkR2NjQWFiei0zVUxxdlh4aE4yank0djBVcEZGNGxRMUJPWmJGNDV4Y1RSaEt0NU5tZWlGRW13bWF3"},
  bBCMartinPayero: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE05elZwaHJsdXR4WVotdG1EWFFqU1FqNDNwVThVdXZod2dRb0R2OGJ2cTRvQmdEOS1ZLUZWOE1TdFQ2cWRrRlVHU2ZXT3J6cXJQenJJZFRQS2dudjFEVl9kRWdvaklORlk"},
  football360comauNestoryIrankunda: {l:"football360.com.au", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPM2luVE1RSjdtNXktSVNOekZxSnpMaWV6d3NSOC01cnFFLXpod1R2eVBKdkU2S3lqUURhMkZhRG1aSEl3am54cF9udUVNOVo2elVNYmFNVi1relA5ckEwc2laQl9vQ2Ewd3FVOE83T2lfNXlqNlZmLTR3T0d2cEp4ZUpvcUEzclBsSFF1Z0x3WmZZTV85QWgyVUxzakxDZWUtSEtWMTMyUDlPTjk3YVNtUnV1RV85dl96OEZ5NE10SQ"}};

const LINKMAP = {
  "Nestory Irankunda": ["nicoloSchiraNestoryIrankunda", "football360comauNestoryIrankunda"],
  "Jordan Zemura": ["gianlucaDiMarzioJordanZemura"],
  "Iker Bravo": ["gianlucaDiMarzioIkerBravo"],
  "Federico Ravaglia": ["sofascoreFedericoRavaglia"],
  "Martin Payero": ["bBCMartinPayero"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Watford · 2026/27 Season`,
  heroLede: `Transfer window active. Watford preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};