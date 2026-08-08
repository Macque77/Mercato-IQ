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
  {name:"Iker Bravo", sub:"ST · Spain", club:"permanent from Udinese", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer confirmed via Di Marzio's live mercato digest."},
  {name:"Federico Ravaglia", sub:"22 · Italy · GK", club:"", pos:"Goalkeeper", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Martin Payero", sub:"26 · Argentina · CM", club:"Udinese", pos:"Midfielder", report:"Watford close in on transfer for Udinese midfielder", src:"BBC", tier:2, fee:"", truth:75, prob:70, light:"g", trend:"flat", note:"Advanced talks reported", lastSeen:"2026-08-08T07:40:33Z", baseProb:70},
  {name:"Federico Ravaglia", sub:"22 · Italy · GK", club:"", pos:"Goalkeeper", report:"Confirmed signing", src:"OneFootball", tier:3, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Deal confirmed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100}
];
const OUTGOING = [
  {name:"Nestory Irankunda", sub:"20 · Australia · W", club:"Sporting CP", pos:"Winger", report:"Watford accept Sporting's $24.5m offer", src:"football360.com.au", tier:3, fee:"$24.5m", truth:85, prob:80, light:"g", trend:"flat", note:"Transfer talks stepped up; deal close", lastSeen:"2026-08-08T07:40:33Z", baseProb:80},
  {name:"Imran Louza", sub:"26 · Morocco · CM", club:"", pos:"Midfielder", report:"Watford value Imran Louza at €10m amid growing transfer interest", src:"Morocco World News", tier:3, fee:"€10m", truth:60, prob:50, light:"y", trend:"flat", note:"Transfer interest reported; valuation set", lastSeen:"2026-08-08T07:40:33Z", baseProb:50}
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
  football360comauNestoryIrankunda: {l:"football360.com.au", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPM2luVE1RSjdtNXktSVNOekZxSnpMaWV6d3NSOC01cnFFLXpod1R2eVBKdkU2S3lqUURhMkZhRG1aSEl3am54cF9udUVNOVo2elVNYmFNVi1relA5ckEwc2laQl9vQ2Ewd3FVOE83T2lfNXlqNlZmLTR3T0d2cEp4ZUpvcUEzclBsSFF1Z0x3WmZZTV85QWgyVUxzakxDZWUtSEtWMTMyUDlPTjk3YVNtUnV1RV85dl96OEZ5NE10SQ"},
  oneFootballFedericoRavaglia: {l:"OneFootball", u:"https://news.google.com/rss/articles/CBMiWEFVX3lxTE1tczhsSEMxVllOSGFNTTFxamZpSGhaS1NudVFBaE5VcktsZXg2YXpYQjZhXzc0T214alM2ek05c2ZKdFVRdVQxc2ZaT3diRjc5bVdyN3ZzM0M"},
  football360comauNestoryIrankunda1: {l:"football360.com.au", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPTzJpblRNUUo3bTV5LUlTTnpGcUp6TGllend3NSRC01ycWUtendod1R2eVBKdkU2S3lqUURhMkZhRG1aSEl3am54cF9udUVNOVo2elVNYmFNVi1relA5ckEwc2laQl9vQ2Ewd3FVOE83T2lfNXlqNlZmLTR3T0d2cEp4ZUpvcUEzclBsSFF1Z0x3WmZZTV85QWgyVUxzakxDZWUtSEtWMTMyUDlPTjk3YVNtUnV1RV85dl96OEZ5NE10SQ"},
  moroccoWorldNewsImranLouza: {l:"Morocco World News", u:"https://news.google.com/rss/articles/CBMivAFBVV95cUxNdlpuQ1B1OVgzNDBRc0hDb0tMRUtUZHY0UHlEZEJZMGUwTXk4WTRaa1NBUjYxZ24zVVNoMzBzSlhudktyTXpWUnhQVGUtVkgtWV90Y091OFB3UDJ6ZTlWU3M2SlBfUDVKNGhablplNUVtcU9mU2ZRMG5wUE1TeS03YnhGSDBWYldVNXlNUkx2aFBVaUthV2VMTTNaVnV6WmNXM0w4WjNNLW5oNlZEREZhQkpVRjBrQTI2WDVlTw"}};

const LINKMAP = {
  "Nestory Irankunda": ["nicoloSchiraNestoryIrankunda", "football360comauNestoryIrankunda", "football360comauNestoryIrankunda1"],
  "Jordan Zemura": ["gianlucaDiMarzioJordanZemura"],
  "Iker Bravo": ["gianlucaDiMarzioIkerBravo"],
  "Federico Ravaglia": ["sofascoreFedericoRavaglia", "oneFootballFedericoRavaglia"],
  "Martin Payero": ["bBCMartinPayero"],
  "Imran Louza": ["moroccoWorldNewsImranLouza"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Watford · 2026/27 Season`,
  heroLede: `Transfer window active. Watford preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};