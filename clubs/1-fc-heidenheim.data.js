/* ============================================================
   MERCATO IQ · CLUB DATA · 1. FC HEIDENHEIM · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "1. FC Heidenheim", mono: "1FH", slug: "1-fc-heidenheim",
  primary: "#004B87", primaryBright: "#5CA9FF", primaryDeep: "#002E52",
  primaryRgb: "0,75,135",
  breadcrumb: ["Germany","2. Bundesliga"]
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
  queries: ["1-fc-heidenheim transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Niklas Dorsch", sub:"28 · Germany · M", club:"Toronto FC", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreement struck while Heidenheim were at their training camp in Natz-Schabs, South Tyrol. Dorsch had made clear he wanted the MLS move. Fee not disclosed by either club, so treat the financials with caution."}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Omar Traore", sub:"Defender", club:"FC Watford", pos:"D", report:"Omar Traore transfers from Heidenheim to FC Watford", src:"Heidenheimer Zeitung", tier:3, fee:"Undisclosed", truth:90, prob:85, light:"g", trend:"down", note:"Transfer confirmed with player receiving well-wishes", lastSeen:"2026-08-08T18:06:11Z", baseProb:85},
  {name:"Stefan Schimmer", sub:"Forward", club:"Thailand club", pos:"F", report:"Stefan Schimmer moves from Heidenheim to Thailand", src:"Heidenheimer Zeitung", tier:3, fee:"Undisclosed", truth:85, prob:80, light:"g", trend:"down", note:"Striker departs for Thailand move", lastSeen:"2026-08-08T18:06:11Z", baseProb:80},
  {name:"Kevin Müller", sub:"Goalkeeper", club:"Hamburger SV", pos:"GK", report:"Kevin Müller transfers from Heidenheim, HSV in concrete talks", src:"Sky.de", tier:2, fee:"Undisclosed", truth:80, prob:75, light:"g", trend:"down", note:"HSV in concrete negotiations for the goalkeeper", lastSeen:"2026-08-08T18:06:11Z", baseProb:75}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"1-Fc-Heidenheim Official", u:"#"},
  getGermanFootballNewsviaYahooSportsNiklasDorsch: {l:"Get German Football News via Yahoo Sports", u:"https://sports.yahoo.com/articles/official-dorsch-departs-1-fc-151800870.html"},
  sportschaudeFrankFeller: {l:"sportschau.de", u:"https://news.google.com/rss/articles/CBMirAFBVV95cUxNMXhPbUEySzh5TVFNbGRvVFdjeXpXMjQ5VlQzVlA3TTBqMUNGWVRJZC0wWmVZQk0tVVl3R3MwNHFtWGNVRndmSDRpeHNEby1qaEJndWdPSjV3bTVhdlFqZXQzVm1ZLUlCUGY1Rkh5OGtOellKRmVLWEZTU0dQaFdPZ0tCZHF4LTM2Y29tWEpwWTRvN3JWdTVvT2JJbG81cjg2dV85WEgtV056Qjh0?oc=5"},
  heidenheimerZeitungOmarTraore: {l:"Heidenheimer Zeitung", u:"https://news.google.com/rss/articles/CBMizAFBVV95cUxNdWM0cGRzVGdYUF83R0RSWE9kVjhLUGVWc0pVV1YtWWFMVl9QRGtDSkZjVWZ5QVptb2FLT3Jkc2ZGNnkwYnBKMDVEOHFaLWlNN3dmTWpGbkJod0dLNldRdWJaS2dLeERPM1ZOdE5pYlZBMVc2ZGRKQkc4TUpicC1LZHF1SUNHM1NqS25GV1lEQU16RjJfQ2NFNm9jX0FOUWlwR3VEQnc0akxOV1dmZXFtTHc2YjFZX2paZV9oOFg0X2s1RTFrVkMtcXQzLWU?oc=5"},
  heidenheimerZeitungStefanSchimmer: {l:"Heidenheimer Zeitung", u:"https://news.google.com/rss/articles/CBMi0wFBVV95cUxOOWFkd1VNUmRlMU1Jc1pNWkJjNEFPOU5HWk5WOWZOQW04SGRmOF90UXZMOVBkOER3aE0zQUFTM25feWFPWF83VzRNVEtaeFJYbzRmRFY3TVJERHo2SjdRenplR0FybE42a2lPdkxadUdWTldIOUNDaEFVU3JEbGxyX0E4bUlIWnl5anJaSE92M3RzMXhzeFpsWlkzNmotTnpKTDBJbEkzTFpGenc1VDJwbl85NHIzbnUxVFYtMC1GWFBKblRwT3FIdF9rck1lX2xtWUcw?oc=5"},
  skydeKevinMller: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMixAFBVV95cUxQWUdZTENFdFBGRkwzcXA2TDQxdUUxWmczVnFYN0Q5ZWlzcXBSV3B3blVYMU5NeDdHUFllWjdlaVBkQzhSbVJxX3VwNHJ4ZFRiMG8zM3k4bG50V24zZ1VjbmRKTUh0TEhjRVUyS3RlMDhPZVY1T1JaRUVKU0lOMldNeWhVSXdXMkZUdXRGWXFIOTljd1ZVZk1vaFNqTU1HSTlEVVNXNGJtbDIyQnc1c0hEY2ZpZEgtV2JYekZwQTNoSU1ieTlW?oc=5"},
  sportschaudeFrankFeller1: {l:"sportschau.de", u:"https://news.google.com/rss/articles/CBMirAFBVV95cUxNMXhPbUEySzh5TVFNbGRvVFdjeXpXMjQ5VlQzVlA3TTBqMUNGWVRJZC0wWmVZQk0tVVl3R3MwNHFtWGNVRndmSDRpeHNEby1qaEJndWdPSjV3bTVhdlFqZXQzVm1ZLUlCUGY1Rkh5OGtOyllKRmVLWEZTU0dQaFdPZ0tCZHF4LTM2Y29tWEpwWTRvN3JWdTVvT2JJbG81cjg2dV85WEgtV056Qjh0?oc=5"},
  heidenheimerZeitungStefanSchimmer1: {l:"Heidenheimer Zeitung", u:"https://news.google.com/rss/articles/CBMi0wFBVV95cUxOOWFkd1VNUmRlMU1Jc1pNWkJjNEFPOU5HWk5WOWZOQW04SGRmOF90UXZMOVBkOER3aE0zQUFTM25feWFPWF83VzRNVEtaeFJYbzRmRFY3TVJERHo2SjdRenplR0FybE42a2lPdkxadUdWTldIOUNDaEFVU3JEbGxyX0E4bUlIWnl5anJaSE92M3RzMXhzeFpsWlkzNmotTnpKTDBJbEkzTFpGunc1VDJwbl85NHIzbnUxVFYtMC1GWFBKblRwT3FIdF9rck1lX2xtWUcw?oc=5"},
  skydeKevinMller1: {l:"Sky.de", u:"https://news.google.com/rss/articles/CBMivAFBVV95cUxPczdhdHJUMjk5YU4yM0RFTWtHRGZoVEZ3blIxWlZMZm1UbGRLS0cxNHgyLWN5dkdnak92UV9VQm5JWVMyd25SR1VHODRHTi1UZlNxb0xoRFhCTDAwQjZuRTdONU1CM1BvZ0ZHMDE1UFdsdlhCNTgxSUpxZ3E4Z0dWMURiT1dMWXhxOVpMYy1kdmNmbjAwaVQxWmRYSmpVWjE1aDljX2xnMVJ4NzZPaDktaG5Ob19sWHRMa0dvdw?oc=5"}};

const LINKMAP = {
  "Niklas Dorsch": ["getGermanFootballNewsviaYahooSportsNiklasDorsch"],
  "Frank Feller": ["sportschaudeFrankFeller", "sportschaudeFrankFeller1"],
  "Omar Traore": ["heidenheimerZeitungOmarTraore"],
  "Stefan Schimmer": ["heidenheimerZeitungStefanSchimmer", "heidenheimerZeitungStefanSchimmer1"],
  "Kevin Müller": ["skydeKevinMller", "skydeKevinMller1"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `1. FC Heidenheim · 2026/27 Season`,
  heroLede: `Transfer window active. 1. FC Heidenheim preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};