/* ============================================================
   MERCATO IQ · CLUB DATA · REGGINA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Reggina", mono: "R", slug: "reggina",
  primary: "#8B1E3F", primaryBright: "#C0526A", primaryDeep: "#4A0F21",
  primaryRgb: "139,30,63",
  breadcrumb: ["Italy","Serie D"]
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
  queries: ["reggina transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Mady Abonckelet", sub:"DF", club:"Free agent", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival."},
  {name:"Giuliano Alma", sub:"MF", club:"Free agent", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival."},
  {name:"Riccardo Rotulo", sub:"DF", club:"Free agent", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival."},
  {name:"Michele Guida", sub:"MF", club:"Free agent", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival."},
  {name:"Edoardo De Mori", sub:"GK", club:"Free agent", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"2007-born signing."},
  {name:"Ernesto Runza", sub:"MF", club:"Free agent", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"2007-born signing."},
  {name:"Simone Franchini", sub:"FW", club:"Free agent", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returning to the club."},
  {name:"Palmieri", sub:"DF", club:"Free agent", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"2008-born full-back."},
  {name:"Toscano", sub:"MF", club:"Genoa", pos:"MF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"2008-born, on loan."},
  {name:"Specker", sub:"FW", club:"Juventus", pos:"FW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"2008-born, on loan."},
  {name:"Fazio", sub:"DF", club:"Genoa", pos:"DF", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"2008-born, on loan."},
  {name:"Piras", sub:"GK", club:"Fasano", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Goalkeeper signing."}
];
const CONFIRMED_OUT = [
  {name:"Palumbo", sub:"MF", club:"Released", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed the club."}
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
  "gnews-madyabonckelet": {l:"Related news search: Mady Abonckelet", u:"https://news.google.com/search?q=Reggina%20Mady%20Abonckelet%20transfer&hl=en-GB&gl=GB"},
  "gnews-giulianoalma": {l:"Related news search: Giuliano Alma", u:"https://news.google.com/search?q=Reggina%20Giuliano%20Alma%20transfer&hl=en-GB&gl=GB"},
  "gnews-riccardorotulo": {l:"Related news search: Riccardo Rotulo", u:"https://news.google.com/search?q=Reggina%20Riccardo%20Rotulo%20transfer&hl=en-GB&gl=GB"},
  "gnews-micheleguida": {l:"Related news search: Michele Guida", u:"https://news.google.com/search?q=Reggina%20Michele%20Guida%20transfer&hl=en-GB&gl=GB"},
  "gnews-edoardodemori": {l:"Related news search: Edoardo De Mori", u:"https://news.google.com/search?q=Reggina%20Edoardo%20De%20Mori%20transfer&hl=en-GB&gl=GB"},
  "gnews-ernestorunza": {l:"Related news search: Ernesto Runza", u:"https://news.google.com/search?q=Reggina%20Ernesto%20Runza%20transfer&hl=en-GB&gl=GB"},
  "gnews-simonefranchini": {l:"Related news search: Simone Franchini", u:"https://news.google.com/search?q=Reggina%20Simone%20Franchini%20transfer&hl=en-GB&gl=GB"},
  "gnews-palmieri": {l:"Related news search: Palmieri", u:"https://news.google.com/search?q=Reggina%20Palmieri%20transfer&hl=en-GB&gl=GB"},
  "gnews-toscano": {l:"Related news search: Toscano", u:"https://news.google.com/search?q=Reggina%20Toscano%20transfer&hl=en-GB&gl=GB"},
  "gnews-specker": {l:"Related news search: Specker", u:"https://news.google.com/search?q=Reggina%20Specker%20transfer&hl=en-GB&gl=GB"},
  "gnews-fazio": {l:"Related news search: Fazio", u:"https://news.google.com/search?q=Reggina%20Fazio%20transfer&hl=en-GB&gl=GB"},
  "gnews-piras": {l:"Related news search: Piras", u:"https://news.google.com/search?q=Reggina%20Piras%20transfer&hl=en-GB&gl=GB"},
  "gnews-palumbo": {l:"Related news search: Palumbo", u:"https://news.google.com/search?q=Reggina%20Palumbo%20transfer&hl=en-GB&gl=GB"}
};

const LINKMAP = {
  "Mady Abonckelet": ["gnews-madyabonckelet"],
  "Giuliano Alma": ["gnews-giulianoalma"],
  "Riccardo Rotulo": ["gnews-riccardorotulo"],
  "Michele Guida": ["gnews-micheleguida"],
  "Edoardo De Mori": ["gnews-edoardodemori"],
  "Ernesto Runza": ["gnews-ernestorunza"],
  "Simone Franchini": ["gnews-simonefranchini"],
  "Palmieri": ["gnews-palmieri"],
  "Toscano": ["gnews-toscano"],
  "Specker": ["gnews-specker"],
  "Fazio": ["gnews-fazio"],
  "Piras": ["gnews-piras"],
  "Palumbo": ["gnews-palumbo"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Reggina · 2026/27 Season`,
  heroLede: `Transfer window active. Reggina preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};