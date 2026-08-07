/* ============================================================
   MERCATO IQ · CLUB DATA · WIGAN ATHLETIC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Wigan Athletic", mono: "WA", slug: "wigan-athletic",
  primary: "#1B458F", primaryBright: "#6FA0FF", primaryDeep: "#0D2650",
  primaryRgb: "27,69,143",
  breadcrumb: ["England","League One"]
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
  queries: ["wigan-athletic transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Reggie Walsh", sub:"Unknown", club:"Unknown", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing (details from on-page record)"},
  {name:"Joe Walsh", sub:"Unknown", club:"Unknown", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing (details from on-page record)"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Reggie Walsh", sub:"MF", club:"Chelsea", pos:"MF", report:"~2 days ago", src:"Alan Nixon", tier:3, fee:"Loan", truth:75, prob:75, light:'g', trend:'up', note:"Loan expected to complete ahead of the deadline.", lastSeen:"2026-08-04T19:10:50Z", baseProb:75},
  {name:"Joe Walsh", sub:"DF", club:"QPR", pos:"DF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:60, prob:55, light:'g', trend:'up', note:"Wigan reportedly closing in on the capture.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Sonny Perkins", sub:"striker · Leyton Orient", club:"Leyton Orient", pos:"ST", report:"Signed from Leyton Orient for undisclosed fee", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official signing confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Max Power", sub:"midfielder · Bradford City", club:"Bradford City", pos:"MF", report:"Re-signed from Bradford City on two-year deal", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official re-signing confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Connor Barrett", sub:"wing-back · Walsall", club:"Walsall", pos:"WB", report:"Signed from Walsall for undisclosed fee", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official signing confirmed", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Joe Taylor", sub:"striker · Huddersfield Town", club:"Huddersfield Town", pos:"ST", report:"Signed from Huddersfield Town", src:"Wigan Athletic FC", tier:3, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official signing announced", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const OUTGOING = [
  {name:"Harrison Bettoni", sub:"player · Chelsea", club:"Chelsea", pos:"Unknown", report:"Signed by Chelsea from Wigan Athletic", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official signing confirmed by Chelsea", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "nixon": {l:"Alan Nixon", u:"https://x.com/reluctantnicko"},
  "gnews-joewalsh": {l:"Related news search: Joe Walsh", u:"https://news.google.com/search?q=Wigan%20Athletic%20Joe%20Walsh%20transfer&hl=en-GB&gl=GB"},
  "gnews-samtickle": {l:"Related news search: Sam Tickle", u:"https://news.google.com/search?q=Wigan%20Athletic%20Sam%20Tickle%20transfer&hl=en-GB&gl=GB"},
  bBCSonnyPerkins: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5WM2pQWm1nTjBOUXNfQmhJTU5kZFgtLU56NkEtc0ppalhQejlVVENJeEFZR0t3SnpLRzRGMXBIQkV0UHFPLWhvZ2hjNURXZE1OTk5EY3dJeE0zMmtac25RZWo0QW9zU0U"},
  bBCMaxPower: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1reHhJemxfN0hTeEROd0dTbUgzSlp5NGpQWk5NOXZseEE0OEdUaVgyR2U3NUpQNU0wcEhqcGhDd3AwMFE2cFZXMDBfVnZla1pqbzRUUEhFdEloaUdqWWZZR0VmeUgzMVU"},
  bBCConnorBarrett: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBwUmJpOURnVGRUeHN4TTNBZTN3aEJGd1Rid0hRaHFoNWhOLUVXWjVyS1pGYkh5UEZJcWlkbU5veTBEVG02RGNiT0E2V3ljRHZPR0wwNTZVUDBRRmpBaldzeGNBZlJFenc"},
  wiganAthleticFCJoeTaylor: {l:"Wigan Athletic FC", u:"https://news.google.com/rss/articles/CBMingFBVV95cUxQY3ZLNV9iTzR0WS1mcFhCYnJnZ2YxLTRHNDc1di1qc0N2ZnZKd2lSak5UVXRnbU9aT2hRS1dqS21jSk9jXzlNdlRla1ZnVTZ0cU9VaXJNVVRxT1Z4Z0E1RjBiMnNFb0NyTDFBTXE2bUZIQTZodjIzNWc0WVlVX0dvR3gtMHktSjlkd2ZwZzJCSzljSE9YQVd5ckxHekxjZw"},
  bBCHarrisonBettoni: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE02aGppV2ctcUxpZ21zQ0dvSnFOcml4TTZYNUp0UzRrUFFCZkxMN1JmSU5QY3liZ0JEYlYxakp4TWxtME5TWEJIMFA4aUFGX092VHBOSXM2RnpkSmx0N0FmaktBV0JvTXM"}};

const LINKMAP = {
  "Reggie Walsh": ["nixon"],
  "Joe Walsh": ["gnews-joewalsh"],
  "Sam Tickle": ["gnews-samtickle"],
  "Sonny Perkins": ["bBCSonnyPerkins"],
  "Max Power": ["bBCMaxPower"],
  "Connor Barrett": ["bBCConnorBarrett"],
  "Joe Taylor": ["wiganAthleticFCJoeTaylor"],
  "Harrison Bettoni": ["bBCHarrisonBettoni"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wigan Athletic · 2026/27 Season`,
  heroLede: `Transfer window active. Wigan Athletic preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};