/* ============================================================
   MERCATO IQ · CLUB DATA · PAOK THESSALONIKI · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "PAOK Thessaloniki", mono: "PT", slug: "paok",
  primary: "#000000", primaryBright: "#C0C0C0", primaryDeep: "#000000",
  primaryRgb: "20,20,20",
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
  queries: ["paok transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Aritz Elustondo", sub:"32 · CB · Spain", club:"Real Sociedad", pos:"CB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joined on a free transfer on modest wages."},
  {name:"Baptiste Santamaria", sub:"31 · MF · France", club:"Valencia", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"One-year deal with a renewal option after leaving Valencia."},
  {name:"Pantelis Hatzidiakos", sub:"29 · CB · Greece", club:"FC Copenhagen", pos:"CB", fee:"~€1.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Greek international centre-back returning from Denmark."},
  {name:"Taha Ali", sub:"28 · W · Sweden", club:"Malmö FF", pos:"W", fee:"~€2m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Swedish World Cup 2026 participant joins for a reported €2m."},
  {name:"Tom Louchet", sub:"MF · France", club:"Radnički Niš", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed formalities in Thessaloniki before an introductory interview."}
];
const CONFIRMED_OUT = [
  {name:"Georgios Giakoumakis", sub:"FW · Greece", club:"Cruz Azul (loan return)", pos:"FW", fee:"Loan return", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan spell ended; club now searching for a replacement striker."},
  {name:"Luka Ivanušec", sub:"W · Croatia", club:"Feyenoord (loan return)", pos:"W", fee:"Loan return", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned to Feyenoord at the end of his loan."},
  {name:"Jorge Sánchez", sub:"DF · Mexico", club:"Atlas FC", pos:"RB", fee:"~€3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sold to Liga MX side Atlas."},
  {name:"Dejan Lovren", sub:"DF · Croatia", club:"Free agent", pos:"CB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Veteran centre-back departed on a free transfer."},
  {name:"Giorgi Gugeshashvili", sub:"GK · Georgia", club:"Göztepe", pos:"GK", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sent out on loan to the Turkish side."},
  {name:"Lefteris Lyratzis", sub:"26 · RB · Greece", club:"Atromitos", pos:"RB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer to Atromitos on a two-year deal, with PAOK keeping a sell-on percentage."}
];
const INCOMING = [
  {name:"Dimitris Giannoulis", sub:"LB · Greece", club:"Augsburg", pos:"LB", report:"3 Aug 2026", src:"Foxbet.gr", tier:3, fee:"Undisclosed", truth:55, prob:40, light:"y", trend:"flat", note:"Reported to be \"on a very good path\"; PAOK pushing Augsburg to lower their asking price.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Antoine Makoumbou", sub:"MF · Congo", club:"Samsunspor", pos:"MF", report:"10 Jun 2026", src:"Turkish media (via Foxbet.gr)", tier:3, fee:"Undisclosed", truth:25, prob:15, light:"o", trend:"flat", note:"Named alongside Panathinaikos as a suitor; contract runs to 2029, making a deal difficult.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Paok Official", u:"#"},
  foxbetgrDimitrisGiannoulis: {l:"Foxbet.gr", u:"https://www.foxbet.gr/309143/metagrafes-paok"},
  pAOKFCgrAritzElustondo: {l:"PAOKFC.gr", u:"https://www.paokfc.gr/en/category/news/transfer-news-en/"},
  lefterisLyratzis: {l:"ΤΑ ΝΕΑ", u:"https://www.tanea.gr/2026/08/03/sports/football/o-atromitos-anakoinose-ton-lyratzi/"}};

const LINKMAP = {
  "Dimitris Giannoulis": ["foxbetgrDimitrisGiannoulis"],
  "Antoine Makoumbou": ["foxbetgrDimitrisGiannoulis"],
  "Aritz Elustondo": ["pAOKFCgrAritzElustondo"],
  "Baptiste Santamaria": ["pAOKFCgrAritzElustondo"],
  "Pantelis Hatzidiakos": ["pAOKFCgrAritzElustondo"],
  "Taha Ali": ["pAOKFCgrAritzElustondo"],
  "Tom Louchet": ["pAOKFCgrAritzElustondo"],
  "Georgios Giakoumakis": ["pAOKFCgrAritzElustondo"],
  "Luka Ivanušec": ["pAOKFCgrAritzElustondo"],
  "Jorge Sánchez": ["pAOKFCgrAritzElustondo"],
  "Dejan Lovren": ["pAOKFCgrAritzElustondo"],
  "Giorgi Gugeshashvili": ["pAOKFCgrAritzElustondo"],
  "Lefteris Lyratzis": ["lefterisLyratzis"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `PAOK Thessaloniki · 2026/27 Season`,
  heroLede: `Transfer window active. PAOK Thessaloniki preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};