/* ============================================================
   MERCATO IQ · CLUB DATA · MANSFIELD TOWN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Mansfield Town", mono: "MT", slug: "mansfield-town",
  primary: "#1B3A6B", primaryBright: "#FFC846", primaryDeep: "#0D1D36",
  primaryRgb: "27,58,107",
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
  queries: ["mansfield-town transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Michael Smith", sub:"Preston North End · Striker", club:"Preston North End", pos:"ST", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed on free transfer from Preston North End"},
  {name:"Jon Russell", sub:"Barnsley · Midfielder", club:"Barnsley", pos:"MID", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed midfielder after Barnsley exit"},
  {name:"Tyler Roberts", sub:"Midfielder/Forward", club:"Unknown", pos:"MID", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed"},
  {name:"George Abbott", sub:"Tottenham Hotspur · Defender", club:"Tottenham Hotspur", pos:"DEF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed on loan from Tottenham"}
];
const CONFIRMED_OUT = [
  {name:"Liam Thompson", sub:"Derby County · Midfielder", club:"Derby County", pos:"MID", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed to Derby County"},
  {name:"Will Evans", sub:"Midfielder", club:"Plymouth Argyle", pos:"MID", fee:"£400,000", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Transfer fee agreed with Plymouth Argyle"}
];
const INCOMING = [
  {name:"David McGoldrick", sub:"ST", club:"Barnsley", pos:"ST", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:35, prob:20, light:'o', trend:'flat', note:"Barnsley reportedly confident he stays, so treat as a long shot.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No fresh confirmation snippet provided; treating as stale if not independently verified"},
  {name:"Michael Smith", sub:"Preston North End · Striker", club:"Preston North End", pos:"ST", report:"Signed on free transfer", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Jon Russell", sub:"Barnsley · Midfielder", club:"Barnsley", pos:"MID", report:"Signed after Barnsley exit", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Tyler Roberts", sub:"Striker", club:"", pos:"ST", report:"Signed", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed signing", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"George Abbott", sub:"Tottenham Hotspur · Defender", club:"Tottenham Hotspur", pos:"DEF", report:"Loan from Tottenham", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed loan signing", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const OUTGOING = [
  {name:"Liam Thompson", sub:"Derby County · Midfielder", club:"Derby County", pos:"MID", report:"Departs for Mansfield Town (outgoing from Derby)", src:"Derbyshire Live", tier:3, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed exit from Derby; arrival at Mansfield", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Will Evans", sub:"Striker", club:"", pos:"ST", report:"£400,000 transfer fee agreed with Plymouth Argyle", src:"chad.co.uk", tier:3, fee:"£400,000", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed outgoing; fee agreed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-davidmcgoldrick": {l:"Related news search: David McGoldrick", u:"https://news.google.com/search?q=Mansfield%20Town%20David%20McGoldrick%20transfer&hl=en-GB&gl=GB"},
  bBCMichaelSmith: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9BUVA0dFkxS3E5WFp4eHZ2ZGFiTzIzX0FYUDZVc0w5cURaMnpDMzZjZzZNSkFqYVhrSG83SldOODR3UFJFMVUzbWFGYmpHcEhQbVlPWk5zSUNFZ2h5Y1dvX1FKcldWb28"},
  bBCJonRussell: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9QTktyTFFxa3FNOTFSRGN5OC15dGVfOTdjZ1dEUUF1UzcwWWVyUUhTZzduaGdVaDJjcnJnMkRKSmJXalVFRllNamVhaV93ZnplNE4yeVE5dERSU0l5TEl1dTJHWEdyeVE"},
  bBCTylerRoberts: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBFME5kajM5bVp6LU1mS3BSNHJ0ZmtnNzhQRlNFMDBNZnhhdTRybDBTQTF2TGFvSzMtdWRmR1VhTVJxYktobml1ck9GdFdVZXBSRzVEWnFLOVUySXM4Q1VBd2dDU0tjbGM"},
  derbyshireLiveLiamThompson: {l:"Derbyshire Live", u:"https://news.google.com/rss/articles/CBMiqwFBVV95cUxPRmtIdTNqS05aT1o1Sl96cEVsQnhnQ05ZYzBVOXoyWTR5MHdIdEE5S0JtV1hfMHA3ckVtU3Fvbkp1NGpScmx6alc2eXZVYVZ0V0RxNjBYMWVDUGRTaGNDSnVoSWl4VzBHWmdVcm5zYTNuSVN3ckJ6cjJabjFKb0pHMmtmcWVGM1VVYkRyNVNGcUJka21Ba2xINDM4djFuQ25mTmk5Ri1BZjJndTg"},
  chadcoukWillEvans: {l:"chad.co.uk", u:"https://news.google.com/rss/articles/CBMiygFBVV95cUxNZFRlUkdEcGtobW5qeU1aaDVUc1RFVnFySXpINVBVS1lnVkI2QlpsOEJ5QTBVa3lmQnVueHR2aHAzdTJZZDF0U1RMTEA1VVdCR09kMFk5VHF5YmFUbi1nWTU2WWt3V0R1bzc5VUFoQl9QcDJRT3EyN0xQd1NwTzh5VzRNSGE4TUpabE9KWWVhSnRMX3o3cUo1cmQxNGc1T0MtVXg4d01ua080MWo0elpjeDdSTkkyTnZYTEFiSjgtN1RYSDJFSWY5ZlJ3"}};

const LINKMAP = {
  "David McGoldrick": ["gnews-davidmcgoldrick"],
  "Michael Smith": ["bBCMichaelSmith"],
  "Jon Russell": ["bBCJonRussell"],
  "Tyler Roberts": ["bBCTylerRoberts"],
  "George Abbott": ["bBCTylerRoberts"],
  "Liam Thompson": ["derbyshireLiveLiamThompson"],
  "Will Evans": ["chadcoukWillEvans"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Mansfield Town · 2026/27 Season`,
  heroLede: `Transfer window active. Mansfield Town preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
