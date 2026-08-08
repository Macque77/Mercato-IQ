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
  {name:"Sonny Perkins", sub:"Unknown · F", club:"Leyton Orient", pos:"F", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Leyton Orient"},
  {name:"Max Power", sub:"Unknown · M", club:"Bradford City", pos:"M", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Re-signed from Bradford City on two-year deal"},
  {name:"Connor Barrett", sub:"Unknown · WB", club:"Walsall", pos:"WB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Walsall for undisclosed fee"},
  {name:"Joe Taylor", sub:"Unknown · F", club:"Huddersfield Town", pos:"F", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from Huddersfield Town"},
  {name:"Reggie Walsh", sub:"Unknown · Unknown", club:"Unknown", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Recently signed by Wigan Athletic"},
  {name:"Joe Walsh", sub:"Unknown · Unknown", club:"Unknown", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Recently signed by Wigan Athletic"}
];
const CONFIRMED_OUT = [
  {name:"Harrison Bettoni", sub:"Unknown · Unknown", club:"Chelsea", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed by Chelsea from Wigan Athletic"}
];
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
  bBCHarrisonBettoni: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE02aGppV2ctcUxpZ21zQ0dvSnFOcml4TTZYNUp0UzRrUFFCZkxMN1JmSU5QY3liZ0JEYlYxakp4TWxtME5TWEJIMFA4aUFGX092VHBOSXM2RnpkSmx0N0FmaktBV0JvTXM"},
  sportsBoomUKJeffHendrick: {l:"SportsBoom UK", u:"https://news.google.com/rss/articles/CBMi5wFBVV95cUxOdHVvWTdrSm14TFBIMUprZy1VVDBrR19RcTJLTnpaZjAxU3ctUG5UMldnQzBRT3lWWXRVUGppZTJtc0FXZFNaQi1kM1NnNlpVbEVjY3hpT0VBMDJkYnFVMDNzdDNWQ200cmRHRnNQUU5FUTBnLXI3TTQyc2ZsclpZeDZnVmJkVXRQRy0xb1dvT3FEU09jZjZWY3FaLUJIYWYzUEtIbjhGTjZnck5mMGh0SjVYN3BaQ2p1bEFjbDZnVEU5Z0VDN2cxa3RNUlh3MU5JYzBXWkxHOHJrNHU2RGhvc0g0RDJDZU0?oc=5"},
  bBCSonnyPerkins1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5WM2pQWm1nTjBOUXNfQmhJTU5kZFgtLU56NkEtc0ppalhQejlVVENJeEFZR0t3SnpLRzRGMXBIQkV0UHFPLWhvZ2hjNURXZE1OTk5EY3dJeE0zMmtac25RZWo0QW9zU0U?oc=5"},
  bBCMaxPower1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1reHhJemxfN0hTeEROd0dTbUgzSlp5NGpQWk5NOXZseEE0OEdUaVgyR2U3NUpQNU0wcEhqcGhDd3AwMFE2cFZXMDBfVnZla1pqbzRUUEhFdEloaUdqWWZZR0VmeUgzMVU?oc=5"},
  bBCConnorBarrett1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBwUmJpOURnVGRUeHN4TTNBZTN3aEJGd1Rid0hRaHFoNWhOLUVXWjVyS1pGYkh5UEZJcWlkbU5veTBEVG02RGNiT0E2V3ljRHZPR0wwNTZVUDBRRmpBaldzeGNBZlJFenc?oc=5"},
  wiganAthleticFCJoeTaylor1: {l:"Wigan Athletic FC", u:"https://news.google.com/rss/articles/CBMingFBVV95cUxQY3VLNV9iTzR0WS1mcFhCYnJnZ2YxLTRHNDc1di1qc0N2ZnZKd2lSak5UVXRnbU9aT2hRS1dqS21jSk9jXzlNdlRla1ZnVTZ0cU9VaXJNVVRxT1Z4Z0E1RjBiMnNFb0NyTDFBTXE2bUZIQTZodjIzNWc0WVlVX0dvR3gtMHktSjlkd2ZwZzJCSzljSE9YQVd5ckxHekxjZw?oc=5"},
  weAintGotNoHistoryHarrisonBettoni: {l:"We Ain't Got No History", u:"https://news.google.com/rss/articles/CBMi1AFBVV95cUxQenBObV96LXJTOEdqVVRrU3NkYk0ta2k4UWkzbTRET1E1cWt4NkZ2X2RYdjVOTWJ1aTMtdWRfNkVIdDRjbjYxOVF6eDZaSVhtTFUtZ2VhVThPZG1MX0Nac0ZxTDdjWTBWUG1jeDZ4dEx5bUZma2tlMzZZdlJlWndaemdwVXZCeVlGeGVsWlhWam9wZE91Rl96QnhCUTdUdnE1eEVVRnJfR2NBMEN4b0lacUs3SzhTamw2ODhvand0cEpFYWJJbFcta0dDdzJBZXlPQThCZw?oc=5"},
  sportsBoomUKJeffHendrick1: {l:"SportsBoom UK", u:"https://news.google.com/rss/articles/CBMi5wFBVV95cUxOdHVvWTdrSm14TFBIMUprZy1VVDBrR19RcTJLTnpaZjAxU3ctUG5UMldnQzBRT3lWWXRVUGppZTJtc0FXZFNaQi1kM1NnNlpVbEVjY3hpT0VBMDJkYnFVMDNzdDNWQ200cmRHRnNQUU5FUTBnLXI3TTQyc2ZsclpZeDZnVmJkVXRQRy0xb1dvT3FEU09jZjZWY3FaLUJIYWYzUEtIbjhGTjZnck5mMGh0SjVYN3BaQ2p1bEFjbDZnVEU5Z0VDN2cxa3RNUlh3MU5JYzBXWkxHOHJrNHU2RGhvc0g0RDJDZU0"},
  wiganAthleticFCJoeTaylor2: {l:"Wigan Athletic FC", u:"https://news.google.com/rss/articles/CBMingFBVV95cUxQY3VLNV9iTzR0WS1mcFhCYnJnZ2YxLTRHNDc1di1qc0N2ZnZKd2lSak5UVXRnbU9aT2hRS1dqS21jSk9jXzlNdlRla1ZnVTZ0cU9VaXJNVVRxT1Z4Z0E1RjBiMnNFb0NyTDFBTXE2bUZIQTZodjIzNWc0WVlVX0dvR3gtMHktSjlkd2ZwZzJCSzljSE9YQVd5ckxHekxjZw"},
  weAintGotNoHistoryHarrisonBettoni1: {l:"We Ain't Got No History", u:"https://news.google.com/rss/articles/CBMi1AFBVV95cUxQenBObV96LXJTOEdqVVRrU3NkYk0ta2k4UWkzbTRET1E1cWt4NkZ2X2RYdjVOTWJ1aTMtdWRfNkVIdDRjbjYxOVF6eDZaSVhtTFUtZ2VhVThPZG1MX0Nac0ZxTDdjWTBWUG1jeDZ4dEx5bUZma2tlMzZZdlJlWndaemdwVXZCeVlGeGVsWlhWam9wZE91Rl96QnhCUTdUdnE1eEVVRnJfR2NBMEN4b0lacUs3SzhTamw2ODhvand0cEpFYWJJbFcta0dDdzJBZXlPQThCZw"}};

const LINKMAP = {
  "Reggie Walsh": ["nixon"],
  "Joe Walsh": ["gnews-joewalsh"],
  "Sam Tickle": ["gnews-samtickle"],
  "Sonny Perkins": ["bBCSonnyPerkins", "bBCSonnyPerkins1"],
  "Max Power": ["bBCMaxPower", "bBCMaxPower1"],
  "Connor Barrett": ["bBCConnorBarrett", "bBCConnorBarrett1"],
  "Joe Taylor": ["wiganAthleticFCJoeTaylor", "wiganAthleticFCJoeTaylor1", "wiganAthleticFCJoeTaylor2"],
  "Harrison Bettoni": ["bBCHarrisonBettoni", "weAintGotNoHistoryHarrisonBettoni", "weAintGotNoHistoryHarrisonBettoni1"],
  "Jeff Hendrick": ["sportsBoomUKJeffHendrick", "sportsBoomUKJeffHendrick1"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Wigan Athletic · 2026/27 Season`,
  heroLede: `Transfer window active. Wigan Athletic preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};