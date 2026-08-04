/* ============================================================
   MERCATO IQ · CLUB DATA · ARIS THESSALONIKI · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Aris Thessaloniki", mono: "AT", slug: "aris-thessaloniki",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
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
  queries: ["aris-thessaloniki transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Sebastián Palacios", sub:"MF · Argentina/Greece", club:"Levadiakos", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a two-year deal on a free transfer."},
  {name:"Dele-Bashiru", sub:"MF", club:"Watford", pos:"MF", fee:"~€1.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from the Championship side."},
  {name:"Martin Hongla", sub:"MF · Cameroon", club:"Granada CF", pos:"MF", fee:"~€1.3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Midfield reinforcement signed from Granada."},
  {name:"N. Sonko-Sundberg", sub:"Player", club:"Ludogorets Razgrad", pos:"FW", fee:"~€0.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from the Bulgarian champions."}
];
const CONFIRMED_OUT = [
  {name:"Clayton Diandy", sub:"MF", club:"Al-Diriyah FC", pos:"MF", fee:"~€4.6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sold to the Saudi side."},
  {name:"Álvaro Tejero", sub:"DF · Spain", club:"CD Leganés", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed for the Spanish second-tier side."},
  {name:"Hamza Mendil", sub:"LB · Morocco", club:"Volos NPS", pos:"LB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Aris chose not to renew; left-back moved on domestically to Volos."},
  {name:"Giorgos Athanasiadis", sub:"GK · Greece", club:"Iraklis", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer within Thessaloniki."}
];
const INCOMING = [
  {name:"Rafael Mir", sub:"FW · Spain", club:"Elche CF", pos:"ST", report:"3 Aug 2026", src:"Foxbet.gr", tier:3, fee:"Undisclosed", truth:55, prob:50, light:"y", trend:"flat", note:"Expected in Thessaloniki within days to partner Loren Morón up front.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50},
  {name:"Lubomír Šatka", sub:"CB · Slovakia", club:"Free agent (ex-Samsunspor)", pos:"CB", report:"3 Aug 2026", src:"Foxbet.gr", tier:3, fee:"Free", truth:60, prob:55, light:"g", trend:"flat", note:"Talks described as being in their final stage after leaving Samsunspor.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Aris-Thessaloniki Official", u:"#"},
  foxbetgrRafaelMir: {l:"Foxbet.gr", u:"https://www.foxbet.gr/338649/metagrafes-aris"},
  beSoccercomSebastinPalacios: {l:"BeSoccer.com", u:"https://www.besoccer.com/team/transfers/aris"},
  hamzaMendil: {l:"ΤΑ ΝΕΑ", u:"https://www.tanea.gr/2026/06/25/sports/football/o-nps-volos-pairnei-ton-mentil/"}};

const LINKMAP = {
  "Rafael Mir": ["foxbetgrRafaelMir"],
  "Lubomír Šatka": ["foxbetgrRafaelMir"],
  "Sebastián Palacios": ["beSoccercomSebastinPalacios"],
  "Dele-Bashiru": ["beSoccercomSebastinPalacios"],
  "Martin Hongla": ["beSoccercomSebastinPalacios"],
  "N. Sonko-Sundberg": ["beSoccercomSebastinPalacios"],
  "Clayton Diandy": ["beSoccercomSebastinPalacios"],
  "Álvaro Tejero": ["beSoccercomSebastinPalacios"],
  "Hamza Mendil": ["hamzaMendil"],
  "Giorgos Athanasiadis": ["beSoccercomSebastinPalacios"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Aris Thessaloniki · 2026/27 Season`,
  heroLede: `Transfer window active. Aris Thessaloniki preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};