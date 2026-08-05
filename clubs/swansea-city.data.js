/* ============================================================
   MERCATO IQ · CLUB DATA · SWANSEA CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Swansea City", mono: "SC", slug: "swansea-city",
  primary: "#1E1E1E", primaryBright: "#FFFFFF", primaryDeep: "#000000",
  primaryRgb: "30,30,30",
  breadcrumb: ["Wales","Championship"]
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
  queries: ["swansea-city transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Tiago Parente", sub:"W", club:"Benfica", pos:"W", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed season-long loan from Benfica."},
  {name:"Elijah Just", sub:"W", club:"Groningen", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent arrival."},
  {name:"Joseph Opoku", sub:"LB", club:"Fortuna Sittard", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent arrival."},
  {name:"Moussa Yeo", sub:"CB", club:"Dynamo Kyiv", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent arrival."},
  {name:"Stephen Welsh", sub:"CB", club:"Celtic", pos:"CB", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed free transfer."}
];
const CONFIRMED_OUT = [
  {name:"Ollie Cooper", sub:"MF", club:"Notts County", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed season-long loan exit."},
  {name:"Cameron Congreve", sub:"W", club:"KVC Westerlo", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent sale."},
  {name:"Liam Cullen", sub:"ST", club:"Leicester City", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent sale."},
  {name:"Ethan Galbraith", sub:"MF", club:"Stoke City", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed permanent sale."}
];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-tiagoparente": {l:"Related news search: Tiago Parente", u:"https://news.google.com/search?q=Swansea%20City%20Tiago%20Parente%20transfer&hl=en-GB&gl=GB"},
  "gnews-elijahjust": {l:"Related news search: Elijah Just", u:"https://news.google.com/search?q=Swansea%20City%20Elijah%20Just%20transfer&hl=en-GB&gl=GB"},
  "gnews-josephopoku": {l:"Related news search: Joseph Opoku", u:"https://news.google.com/search?q=Swansea%20City%20Joseph%20Opoku%20transfer&hl=en-GB&gl=GB"},
  "gnews-moussayeo": {l:"Related news search: Moussa Yeo", u:"https://news.google.com/search?q=Swansea%20City%20Moussa%20Yeo%20transfer&hl=en-GB&gl=GB"},
  "gnews-stephenwelsh": {l:"Related news search: Stephen Welsh", u:"https://news.google.com/search?q=Swansea%20City%20Stephen%20Welsh%20transfer&hl=en-GB&gl=GB"},
  "gnews-olliecooper": {l:"Related news search: Ollie Cooper", u:"https://news.google.com/search?q=Swansea%20City%20Ollie%20Cooper%20transfer&hl=en-GB&gl=GB"},
  "gnews-cameroncongreve": {l:"Related news search: Cameron Congreve", u:"https://news.google.com/search?q=Swansea%20City%20Cameron%20Congreve%20transfer&hl=en-GB&gl=GB"},
  "gnews-liamcullen": {l:"Related news search: Liam Cullen", u:"https://news.google.com/search?q=Swansea%20City%20Liam%20Cullen%20transfer&hl=en-GB&gl=GB"},
  "gnews-ethangalbraith": {l:"Related news search: Ethan Galbraith", u:"https://news.google.com/search?q=Swansea%20City%20Ethan%20Galbraith%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Tiago Parente": ["gnews-tiagoparente"],
  "Elijah Just": ["gnews-elijahjust"],
  "Joseph Opoku": ["gnews-josephopoku"],
  "Moussa Yeo": ["gnews-moussayeo"],
  "Stephen Welsh": ["gnews-stephenwelsh"],
  "Ollie Cooper": ["gnews-olliecooper"],
  "Cameron Congreve": ["gnews-cameroncongreve"],
  "Liam Cullen": ["gnews-liamcullen"],
  "Ethan Galbraith": ["gnews-ethangalbraith"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Swansea City · 2026/27 Season`,
  heroLede: `Transfer window active. Swansea City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};