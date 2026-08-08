/* ============================================================
   MERCATO IQ · CLUB DATA · LUTON TOWN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Luton Town", mono: "LT", slug: "luton-town",
  primary: "#F68A1E", primaryBright: "#FFB25E", primaryDeep: "#8F4C0C",
  primaryRgb: "246,138,30",
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
  queries: ["luton-town transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Christ Makosso", sub:"DF", club:"Auxerre", pos:"DF", fee:"£2m + add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreement in principle reported by a credible transfer insider."}
];
const INCOMING = [
  {name:"Callum Marshall", sub:"Unknown · Unknown · Forward", club:"West Ham United", pos:"Forward", report:"Callum Marshall joins Luton Town from West Ham United", src:"West Ham United", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer completed", lastSeen:"2026-08-08T18:06:10Z", baseProb:100},
  {name:"Jake Richards", sub:"Unknown · Unknown · Defender", club:"Exeter City", pos:"Defender", report:"Jake Richards transfer to Luton Town concluded from Exeter City", src:"Exeter City Football Club", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Transfer completed", lastSeen:"2026-08-08T18:06:10Z", baseProb:100}
];
const OUTGOING = [
  {name:"Unnamed forwards (x2)", sub:"FW", club:"Undisclosed", pos:"FW", report:"~1 wk ago", src:"Manager Jack Wilshere", tier:3, fee:"Undisclosed", truth:55, prob:50, light:'y', trend:'flat', note:"Manager has publicly flagged expected departures from the forward line.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50, dead:true, deadReason:"no longer a current link"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-christmakosso": {l:"Related news search: Christ Makosso", u:"https://news.google.com/search?q=Luton%20Town%20Christ%20Makosso%20transfer&hl=en-GB&gl=GB"},
  "gnews-leebuchanan": {l:"Related news search: Lee Buchanan", u:"https://news.google.com/search?q=Luton%20Town%20Lee%20Buchanan%20transfer&hl=en-GB&gl=GB"},
  "src-managerjackwilshere": {l:"Manager Jack Wilshere", u:"https://news.google.com/search?q=Manager%20Jack%20Wilshere%20Luton%20Town%20transfer&hl=en-GB&gl=GB"},
  westHamUnitedCallumMarshall: {l:"West Ham United", u:"https://news.google.com/rss/articles/CBMib0FVX3lxTFBJUWdPSzZlY05jR2JxREVVWDRmZmRod1hsTEVHeENqLWk5alNXRXNJaHg0Nk1feUQ0OVo4U0RfRGVfVEZJX3pGejIwcTJtbG1ueV85XzVmVFdvN3BOM0pOalh0Rm1BN2hjMVFhSWpGNA"},
  exeterCityFootballClubJakeRichards: {l:"Exeter City Football Club", u:"https://news.google.com/rss/articles/CBMiXkFVX3lxTFBnWHplMk52NkpSX2J2YUJKNm44dldXS0d2RlE5YUdZU3Q1aGRiQTBDbFFYTlZ4U1RmRFJuZm80dmVUaDFhWXNiZnkwcmJvV0hIMXlrbndzWGg5U0lTdFE"},
  lutonTownFCGideonKodua: {l:"Luton Town FC", u:"https://news.google.com/rss/articles/CBMickFVX3lxTFBWSThtWndtQTlNQS1iMlBZcXROY1gtbVh0X2ROZHAwTDI5RzdTUVpLY2syTDNSTEJNcjZ3UktWSGNqZmxVaDJndzdLX05hM05sU2RVRWpFWEstQlBjXzNrbkJzZ0U1WnV5djExWjFLYTlfdw"},
  footballLowdownLeeBuchanan: {l:"Football Lowdown", u:"https://news.google.com/rss/articles/CBMieEFVX3lxTFBqY1NmdnJVUlBBZTRMaG5DSEN4UENmMUQtYTM1RG5aU3JxQ3NwMDBrbEpsRDJYSTdfYmI5WjlpVG14eGc4bnI0VkplUmw4ZndmYkxuS2JRWUhPRlhaajBfeUNnNUlGZVBLVzRzdE1kTUl2UFRzTy13WA"},
  lutonTownFCMarvelousNakamba: {l:"Luton Town FC", u:"https://news.google.com/rss/articles/CBMidEFVX3lxTFBKRVB3RlRJdjJXTzluSmp5eWNKcXk2UUkxVVRQRzYyVVI0SzY1dDBqMm1qUm82VVpqNUVkNzNUdXgzS2hseG04WldSZDVmSS0weGdqcTU1Y1h1VEJnRnQ1Y2psUllpei15ZjZUSVFwUmluZUJN"},
  lutonTownFCMilliAlli: {l:"Luton Town FC", u:"https://news.google.com/rss/articles/CBMibEFVX3lxTE51SmV2TG9HaU92cGc4NHVqUVQ0akJqcWgtbjUyTlU4cFg4WW9IX2h4dGlGeENCcS13UlU0ZkhNZWphc0ZHcVJXdEI1QnBSbWhwNXdscHJRREprdnlZb1d5aDEtMGNhdmhwZFJ3Rw"},
  uksportsyahoocomJerryYates: {l:"uk.sports.yahoo.com", u:"https://news.google.com/rss/articles/CBMihwFBVV95cUxOZEhYUDRxcmU4Q19uTW5QdW01SG1NTkxhSm9QckJlSWN2Zk1oSHdMaTBhUFFkbHE0MjZwWm9jSUFfWWlHRlNYaFN1dTd4Ml9aVUxSa2I0N1JiUWM2WDducEZiR2JEQkRMY003RF81eFJDUE5EZnhHZ1dyOHI0UkFzX0lQYnRmZjA"}};

const LINKMAP = {
  "Christ Makosso": ["gnews-christmakosso"],
  "Lee Buchanan": ["gnews-leebuchanan", "footballLowdownLeeBuchanan"],
  "Unnamed forwards (x2)": ["src-managerjackwilshere"],
  "Callum Marshall": ["westHamUnitedCallumMarshall"],
  "Jake Richards": ["exeterCityFootballClubJakeRichards"],
  "Gideon Kodua": ["lutonTownFCGideonKodua"],
  "Marvelous Nakamba": ["lutonTownFCMarvelousNakamba"],
  "Milli Alli": ["lutonTownFCMilliAlli"],
  "Jerry Yates": ["uksportsyahoocomJerryYates"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Luton Town · 2026/27 Season`,
  heroLede: `Transfer window active. Luton Town preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
