/* ============================================================
   MERCATO IQ · CLUB DATA · CERCLE BRUGGE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Cercle Brugge", mono: "CB", slug: "cercle-brugge",
  primary: "#00843D", primaryBright: "#3FCB8C", primaryDeep: "#00532A",
  primaryRgb: "0,132,61",
  breadcrumb: ["Belgium","Pro League"]
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
  queries: ["cercle-brugge transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Joel Ndala", sub:"20 · LW · England", club:"Manchester City", pos:"LW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Man City academy graduate signs until 2030 after loan spells at Hull City and Sheffield Wednesday."},
  {name:"Gaetan Coucke", sub:"GK", club:"Sampdoria", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as goalkeeper cover following Warleson's exit."},
  {name:"Lukas Mondele", sub:"22 · MF · Belgium", club:"Francs Borains", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ex-Club Brugge youth product signs until 2029 with a one-year option."}
];
const CONFIRMED_OUT = [
  {name:"Warleson", sub:"GK", club:"Botafogo", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed for Brazilian side Botafogo."},
  {name:"Beni Mpanzu", sub:"Winger", club:"FC Dordrecht", pos:"W", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Moved on to Dutch second-tier side Dordrecht."}
];
const INCOMING = [
  {name:"Claudio Katunda", sub:"19 · CB", club:"Schalke 04", pos:"CB", report:"10 Jun 2026", src:"Voetbalkrant", tier:3, fee:"Undisclosed", truth:50, prob:20, light:"o", trend:"flat", note:"Cercle among several Belgian clubs, including Standard, monitoring the 2m-tall 19-year-old Schalke defender; no bid confirmed yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No recent credible reports; rumour appears stale (dated 10 Jun 2026)"},
  {name:"Joel Ndala", sub:"age unknown · nation unknown · position unknown", club:"Manchester City", pos:"Unknown", report:"Cercle Brugge reaches agreement with Manchester City over Joel Ndala", src:"Fabrizio Romano / Tavolieri", tier:1, fee:"Undisclosed", truth:85, prob:80, light:"g", trend:"flat", note:"Deal agreed with Manchester City", lastSeen:"2026-08-07T01:42:32Z", baseProb:80}
];
const OUTGOING = [
  {name:"Ayase Ueda", sub:"age unknown · nation Japan · Forward", club:"Premier League (Unknown club)", pos:"Forward", report:"Ayase Ueda to Premier League, bonus for Cercle Brugge", src:"VoetbalBelgie", tier:3, fee:"Undisclosed", truth:75, prob:70, light:"g", trend:"flat", note:"Transfer to Premier League with bonus clause", lastSeen:"2026-08-07T01:42:32Z", baseProb:70},
  {name:"Warleson", sub:"age unknown · nation Brazil · position unknown", club:"Brazil (Unknown club)", pos:"Unknown", report:"Cercle Brugge sees Warleson depart to Brazil", src:"VoetbalFocus", tier:3, fee:"Undisclosed", truth:70, prob:65, light:"g", trend:"flat", note:"Departure to Brazilian club", lastSeen:"2026-08-07T01:42:32Z", baseProb:65}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Cercle-Brugge Official", u:"#"},
  voetbalkrantClaudioKatunda: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/nieuws/2026-06-10/il-mesure-deux-metres-a-19-ans-le-standard-et-quatre-autres-clubs-belges-suivent-un-robuste-defenseur-2"},
  voetbalkrantviaSachaTavolieriJoelNdala: {l:"Voetbalkrant (via Sacha Tavolieri)", u:"https://www.voetbalkrant.com/nieuws/2026-07-25/cercle-brugge-stunt-deal-met-manchester-city"},
  voetbalkrantGaetanCoucke: {l:"Voetbalkrant", u:"https://www.voetbalkrant.com/belgie/cercle-brugge/transfers"},
  voetbalPrimeurbeJoelNdala: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMimgFBVV95cUxObjMyeDFxZUZ4a2JKSXh3OWZLU29KazZfT1F2X3QzQmxsNllFZmhudXpkdFctMm9mUE1CdThjQ3hrWFkxZVdrNVlkcXU4VHE1eE1rMzZxbEQ1cnNpMEF3aG1ocWZyY2hSN3QwYVV1bkZ0YkZlTlBPNUc1ZkFrRGxHTEdYdWRkR0luVGNhQmhmZW5nVlVaZkl2OXVR"},
  voetbalPrimeurbeLazare: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMiogFBVV95cUxONFBDaWN1OHZiV2JRTlZqVkh2VGVTbVhNTTl0bkVlNm5ZQXV5TS1INjhKTG9sMFlkYl9VV0djbXFkZWJaWTk2cGI3WUxEZ3lQZmdFQjg1QWZNQ0hqVG9WNVh2RU1sVENUMURKWkFycFhObmxqTG9rUXAxWnEzc19MdEdlaEJpWHJMcXBOMkFzVmtfbWlLYm1sUGkzWHhPOFBnQnc"},
  voetbalBelgieAyaseUeda: {l:"VoetbalBelgie", u:"https://news.google.com/rss/articles/CBMiiAFBVV95cUxQbVhrZ2pNU1FxX1hZVm5yNUctYXRVbjlXVG15OW9tcmk2eGFCazl1MXVPeXBOTTdBTGtBSFRyQnFfM3kwemRsM0JsU1dMeUVmUHJUbmhieGEzSTZoX0k4akIxS0VIaGNaTHpkMW1jXzA3dVd4V2Z4eUY1azJXb3JtVEVXRHBjNXIz"},
  voetbalFocusWarleson: {l:"VoetbalFocus", u:"https://news.google.com/rss/articles/CBMifEFVX3lxTE80VW9lLVp2cFZjX3JJZW0tWVl1LXp1YjR2Nk5HQnRQakx5SktIMExhUXNYcVdONDQxRXYyTTI0bDRnbGZJTHpGaWtGWEtiTVFFLVRtT0xHZ1RZcnZQNkxFWG5GcXVFTGdhZ3pxbVJTWWh3YUF2aEpuOVF2VUI"}};

const LINKMAP = {
  "Claudio Katunda": ["voetbalkrantClaudioKatunda"],
  "Joel Ndala": ["voetbalkrantviaSachaTavolieriJoelNdala", "voetbalPrimeurbeJoelNdala"],
  "Gaetan Coucke": ["voetbalkrantGaetanCoucke"],
  "Lukas Mondele": ["voetbalkrantGaetanCoucke"],
  "Warleson": ["voetbalkrantGaetanCoucke", "voetbalFocusWarleson"],
  "Beni Mpanzu": ["voetbalkrantGaetanCoucke"],
  "Lazare": ["voetbalPrimeurbeLazare"],
  "Ayase Ueda": ["voetbalBelgieAyaseUeda"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Cercle Brugge · 2026/27 Season`,
  heroLede: `Transfer window active. Cercle Brugge preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};