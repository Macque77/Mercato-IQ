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
const INCOMING = [
  {name:"Tiago Parente", sub:"Portugal · Midfielder", club:"Benfica", pos:"MID", report:"Loan seal for Benfica midfielder", src:"BBC", tier:2, fee:"Loan", truth:95, prob:95, light:"g", trend:"flat", note:"Loan deal completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:95}
];
const OUTGOING = [
  {name:"Kyrell Wilson", sub:"Player", club:"Swansea City", pos:"Unknown", report:"Transfer to Gent sealed", src:"Swansea City", tier:2, fee:"", truth:95, prob:95, light:"g", trend:"flat", note:"Transfer completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:95},
  {name:"Liam Cullen", sub:"Wales · Forward", club:"Swansea City", pos:"FW", report:"Transfer to Leicester City completed", src:"Swansea City", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer confirmed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100}
];
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
  "gnews-ethangalbraith": {l:"Related news search: Ethan Galbraith", u:"https://news.google.com/search?q=Swansea%20City%20Ethan%20Galbraith%20transfer&hl=en-GB&gl=GB"},
  bBCRossStewart: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE1ValZlaHhaa3NvSU5xTmQ2ODdQWFF1cE9RSGlLcXpwUXVWYzBxQ003OElNYkZmNXJseVp2bVNaYlJXSTJOOUItQW1URWpTUWpDUnEwZU9MNDJhdE5pUEhLbE9uSHdtbFRTS0E?oc=5"},
  walesOnlineZanVipotnik: {l:"Wales Online", u:"https://news.google.com/rss/articles/CBMipAFBVV95cUxQeGkxUnVrWW9xUGVVSUZFbVB4ZzRwekRsdkRsSzg2WDNCSUJwYThTd0tjREpBa2xyRlFLMDUtZ2M2ZkJQXzRwZFZMSXVmSksydEpJVDV4c1U2cTg3T1pRTVZVMmxvUmowUmdfY0FoVS1sblllYW93M2RrUXQ2MGlmZ280OUZaSXR4Q09qaC00R3BNMjlaa0ZOTlg5UHQ2WU13UVlCaNIBqgFBVV95cUxOMHlNdzN2S1pqcVNTcDJ0c1N6ZVZ2TEVIU1VwUldsbGlUTDBhc1d6c09zN0h0TlVVY2theG5YdjRQWE53ZFI0UVpoeENTRS1ObHczamdNWUEtc0lDMjdfT2NseHpNV1FzSHVXSVNkaDFaV3VGOXFURjFkR2NFRFNVSzB6Tnh6S2FTMTJxSGVBeDdzY2FGWVdpMXNYQWxFOG9mazNzZ1BycXRBZw?oc=5"},
  bBCTiagoParente: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE45dmlNdUFncGxzbmVXNmRwSDZNX3BFYmVMRjlSenJBQTUtd0FhRFYteU41aktmSGxWMWNyWUdqbF9oQTFJNF9aTmNWbzZDbFBtd0EtbVQydDREaTR5QzdhV0VUQW5kWkE?oc=5"},
  swanseaCityKyrellWilson: {l:"Swansea City", u:"https://news.google.com/rss/articles/CBMidEFVX3lxTE5YMm1DeW02dXNweHZQMUtIYzNoUnhNZzdVMklzUzRMV2VpcF9aSUpmQWJNYjNkbkZFNVYyNWJCWDNEc1RTSVpQYVFEQkZtU3NkdDhZODU5dUlCNDRXdFFzWmNZeUI4bk9qblAtYS1UN3R5YlN2?oc=5"},
  swanseaCityLiamCullen: {l:"Swansea City", u:"https://news.google.com/rss/articles/CBMihAFBVV95cUxQeG90ZXE2ZFQ3MmpxVW5lY1VpWjMxLXh0MGxuR0JnRzdnNE43NVBJTGMwQkhqUXZydWJzemtubmpBRkJwQ2h4amdOU1UxS1g3RjY4dHZkeS1wSVdEWTNoekpqanFENGxwSG5ucXpBbUYtVTVqMVowUUpCTWxxc19aMlRlbzM?oc=5"}};

const LINKMAP = {
  "Tiago Parente": ["gnews-tiagoparente", "bBCTiagoParente"],
  "Elijah Just": ["gnews-elijahjust"],
  "Joseph Opoku": ["gnews-josephopoku"],
  "Moussa Yeo": ["gnews-moussayeo"],
  "Stephen Welsh": ["gnews-stephenwelsh"],
  "Ollie Cooper": ["gnews-olliecooper"],
  "Cameron Congreve": ["gnews-cameroncongreve"],
  "Liam Cullen": ["gnews-liamcullen", "swanseaCityLiamCullen"],
  "Ethan Galbraith": ["gnews-ethangalbraith"],
  "Ross Stewart": ["bBCRossStewart"],
  "Zan Vipotnik": ["walesOnlineZanVipotnik"],
  "Kyrell Wilson": ["swanseaCityKyrellWilson"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Swansea City · 2026/27 Season`,
  heroLede: `Transfer window active. Swansea City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};