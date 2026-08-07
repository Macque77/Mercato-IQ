/* ============================================================
   MERCATO IQ · CLUB DATA · AFC WIMBLEDON · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AFC Wimbledon", mono: "AFC", slug: "afc-wimbledon",
  primary: "#041E42", primaryBright: "#FFD700", primaryDeep: "#020F21",
  primaryRgb: "4,30,66",
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
  queries: ["afc-wimbledon transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ollie Harrison", sub:"MF/FW", club:"Chelsea", pos:"MF", fee:"Undisclosed development fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Youth signing confirmed via club's official channels."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Jayden Stockley", sub:"Striker", club:"Port Vale", pos:"ST", report:"Signed from Port Vale", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-07T23:07:29Z", baseProb:100},
  {name:"Zack Nelson", sub:"Defender", club:"Luton Town", pos:"DEF", report:"Signed after Luton Town release", src:"BBC", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-07T23:07:29Z", baseProb:100},
  {name:"James Tilly", sub:"Midfielder", club:"Wycombe Wanderers", pos:"MID", report:"Deal agreed with Wycombe", src:"TribalFootball", tier:3, fee:"Undisclosed", truth:85, prob:85, light:"g", trend:"down", note:"Transfer agreed", lastSeen:"2026-08-07T23:07:29Z", baseProb:85},
  {name:"Steven Sessegnon", sub:"Player", club:"Wigan Athletic", pos:"Unknown", report:"Joined after leaving Wigan Athletic", src:"Unknown", tier:3, fee:"Undisclosed", truth:75, prob:75, light:"g", trend:"flat", note:"On-page entry retained pending confirmation", lastSeen:"2026-08-07T23:07:29Z", baseProb:75},
  {name:"Shaun Hutchinson", sub:"Defender", club:"Millwall", pos:"DEF", report:"Wanted by AFC Wimbledon and Lincoln City", src:"SportsBoom UK", tier:3, fee:"Undisclosed", truth:70, prob:65, light:"g", trend:"down", note:"Former Millwall skipper target", lastSeen:"2026-08-07T23:07:29Z", baseProb:65}
];
const OUTGOING = [
  {name:"Riley Harbottle", sub:"Player", club:"Bristol Rovers", pos:"Unknown", report:"Signed by Bristol Rovers from AFC Wimbledon", src:"Bristol Rovers", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-07T23:07:29Z", baseProb:100},
  {name:"Foyo", sub:"Striker", club:"Rhode Island FC", pos:"ST", report:"Signed for Rhode Island FC", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-07T10:18:48Z", baseProb:100, dead:true, deadReason:"no longer a current link"},
  {name:"Osman Foyo", sub:"Striker", club:"Rhode Island FC", pos:"ST", report:"Signed for Rhode Island FC", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-07T23:07:29Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-ollieharrison": {l:"Related news search: Ollie Harrison", u:"https://news.google.com/search?q=AFC%20Wimbledon%20Ollie%20Harrison%20transfer&hl=en-GB&gl=GB"},
  bBCJaydenStockley: {l:"BBC", u:"https://www.bbc.com"},
  tribalFootballJamesTilly: {l:"TribalFootball", u:"https://www.tribalfootball.com"},
  sportsBoomUKShaunHutchinson: {l:"SportsBoom UK", u:"https://www.sportsboom.co.uk"},
  bristolRoversFootballClubRileyHarbottle: {l:"Bristol Rovers Football Club", u:"https://www.bristolrovers.co.uk"},
  bBCJaydenStockley1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFByN0dtb20wX3RMSDhOTC1DOVhXczlvbm9mbC1sdndDcjYyY0tOS00talBMZ252SGtSdHNDNmJYWDM5cWpuRUhrUnRkTFBtNHF3YkN1V0xpdkdVbnNGNmJnN3BXNkZPVDA?oc=5"},
  bBCZackNelson: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBXc216elo1X0dKMlJnZS15cXpZR2cwMjQwR2VaS3FYN05HV0gzeTFSTzlINkFIbGhKc09udkp6NEEwc1RMY1ZLNmxvLWJZN3MwWVZyMHAyeURleUZhc1BCVmROZlRSbVU?oc=5"},
  tribalFootballJamesTilly1: {l:"TribalFootball", u:"https://news.google.com/rss/articles/CBMi7wFBVV95cUxPdmYwZTc1QmdxTUQ3Y3hEcU4tOHNxQy1Jd0hYeUdCRkhpOGtMNWN1MVNTSjNPWmljUlE4clN4MWdBOVFKYlV1dk9TNDlTSWZ1eWtaTTNuT3pnbUhSa3IzMzBiSUhaR0tDWmtua3UwZU1oU2JtMXBHS2Z5blpEUnQyVE5DQ0VIMmZHd0lTLWJQSDRyR3JTUGQtVUdvdU01bXZRTEgwRmJURGJrMmkzdkNnQUF5azJCeEk5VlpsWUlnb3VncG5CdUlDQm9yWGdadUN4emV2bnBYcjM3UzVsZmRrMTY1WHBCa255THdPZjVVaw?oc=5"},
  bBCStevenSessegnon: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFA3TjJqdFViNU9CS2tPeFFlSjVQR01WVkdFcVNzc0VicWpVMWVLa3R1ckdoVTE4RkRQbEtrZXliUTRycXB0ZnhmWUo4blVUYk80UThiNU9aQ3JJaGdpS2tacWFOLWUyRWs?oc=5"},
  sportsBoomUKShaunHutchinson1: {l:"SportsBoom UK", u:"https://news.google.com/rss/articles/CBMi2wFBVV95cUxOREFSOEMyVEZlT0U4TWdUTUtJdXVKb2xEY2s1ZDM4bmpKeVRlYnBIOUVHNmEwS05UTm1CUUlkZ1FrVXQyVnFqVkRkWGtOZFM4T3hTTjRQSlZla0JMdlVTcGNzb0JsdEd2NTI5Y2xxTlQzazRvOHk5VzUwcXkteG8zNDd4VjEzb3E1V1NMQ2RKbzNqdlo4dXY2X2tQdzJJRXlOSGJDaEFwX21OeVVzQlEyb0R0WFJ2cjFSWXdHVUI5VUdCaDdBclFvUkhCaUoxZmh4cFNpUVpnWlRmSnc?oc=5"},
  bristolRoversRileyHarbottle: {l:"Bristol Rovers", u:"https://news.google.com/rss/articles/CBMijwFBVV95cUxQX203TzZuV3B1SmZXWExTOGxUS215VElFaFpkM1l1eFRZcTZmSUZfeHRwV1hwY3RRcFZlZW40STlIV21ETTdEV3NLOVpzT2R4WFF4bVg4cUU4cWhiS1dvSmN0bGhpa3BHNTZZMURRR1pIdmIyd0JudzlTczRlVXdUc2lrMlRicXNQWkFCLXA5dw?oc=5"},
  bBCFoyo: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFAxZE1FbUotMHVpQ3g4WkhhdEhQVjJZZ3lhRDlMZEJSNkg1R2p0akd0MTZiOWsyeXRNTFNOdDZ4ZHEyRF9ScG5fcDNoNnpYWlpBTERxNlluRGFidWctX2VKX21BZnRHMW8?oc=5"},
  bBCStevenSessegnon1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFA3TjJqdFViNU9CS2tPeFFlSjVQR01WVkdFcVNzc0VicWpVMWVLa3R1ckdoVTE4RkRQbEtrZXliUTRycXB0ZnhmWUo4blVUYk80UThiNU9aQ3JJaGdpS2pacWFOLWUyRWs?oc=5"},
  bBCJaydenStockley2: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFByN0dtb20wX3RMSDhOTC1DOVhXczlvbm9mbC1sdndDcjYyY0tOS00talBMZ252SGtSdHNDNmJYWDM5cWpuRUhrUnRkTFBtNHF3YkN1V0xpdkdVbnNGNmJnN3BXNkZPVDA"},
  bBCZackNelson1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBXc216elo1X0dKMlJnZS15cXpZR2cwMjQwR2VaS3FYN05HV0gzeTFSTzlINkFIbGhKc09udkp6NEEwc1RMY1ZLNmxvLWJZN3MwWVZyMHAyeURleUZhc1BCVmROZlRSbVU"},
  tribalFootballJamesTilly2: {l:"TribalFootball", u:"https://news.google.com/rss/articles/CBMi7wFBVV95cUxPdmYwZTc1QmdxTUQ3Y3hEcU4tOHNxQy1Jd0hYeUdCRkhpOGtMNWN1MVNTSjNPWmljUlE4clN4MWdBOVFKYlV1dk9TNDlTSWZ1eWtaTTNuT3pnbUhSa3IzMzBiSUhaR0tDWmtua3UwZU1oU2JtMXBHS2Z5blpEUnQyVE5DQ0VIMmZHd0lTLWJQSDRyR3JTUGQtVUdvdU01bXZRTEgwRmJURGJrMmkzdkNnQUF5azJCeEk5VlpsWUlnb3VncG5CdUlDQm9yWGdadUN4emV2bnBYcjM3UzVsZmRrMTY1WHBCa255THdPZjVVaw"},
  sportsBoomUKShaunHutchinson2: {l:"SportsBoom UK", u:"https://news.google.com/rss/articles/CBMi2wFBVV95cUxOREFSOEMyVEZlT0U4TWdUTUtJdXVKb2xEY2s1ZDM4bmpKeVRlYnBIOUVHNmEwS05UTm1CUUlkZ1FrVXQyVnFqVkRkWGtOZFM4T3hTTjRQSlZla0JMdlVTcGNzb0JsdEd2NTI5Y2xxTlQzazRvOHk5VzUwcXkteG8zNDd4VjEzb3E1V1NMQ2RKbzNqdlo4dXY2X2tQdzJJRXlOSGJDaEFwX21OeVVzQlEyb0R0WFJ2cjFSWXdHVUI5VUdCaDdBclFvUkhCaUoxZmh4cFNpUVpnWlRmSnc"},
  bristolRoversFootballClubRileyHarbottle1: {l:"Bristol Rovers Football Club", u:"https://news.google.com/rss/articles/CBMijwFBVV95cUxQX203TzZuV3B1SmZXWExTOGxUS215VElFaFpkM1l1eFRZcTZmSUZfeHRwV1hwY3RRcFZlZW40STlIV21ETTdEV3NLOVpzT2R4WFF4bVg4cUU4cWhiS1dvSmN0bGhpa3BHNTZZMURRR1pIdmIyd0JudzlTczRlVXdUc2lrMlRicXNQWkFCLXA5dw"},
  bBCOsmanFoyo: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFAxZE1FbUotMHVpQ3g4WkhhdEhQVjJZZ3lhRDlMZEJSNkg1R2p0akd0MTZiOWsyeXRNTFNOdDZ4ZHEyRF9ScG5fcDNoNnpYWlpBTERxNlluRGFidWctX2VKX21BZnRHMW8"},
  bristolRoversRileyHarbottle1: {l:"Bristol Rovers", u:"https://news.google.com/rss/articles/CBMijwFBVV95cUxQX203TzZuV3B1SmZXWExTOGxUS215VElFaFpkM1l1eFRZcTZmSUZfeHRwV1hwY3RRcFZlZW40STlIV21ETTdEV3NLOVpzT2R4WFF4bVg4cUU4cWhiS1dvSmN0bGhia3BHNTZZMURRR1pIdmIyd0JudzlTczRlVXdUc2lrMlRicXNQWkFCLXA5dw"}};

const LINKMAP = {
  "Ollie Harrison": ["gnews-ollieharrison"],
  "Jayden Stockley": ["bBCJaydenStockley", "bBCJaydenStockley1", "bBCJaydenStockley2"],
  "Zack Nelson": ["bBCJaydenStockley", "bBCZackNelson", "bBCZackNelson1"],
  "James Tilly": ["tribalFootballJamesTilly", "tribalFootballJamesTilly1", "tribalFootballJamesTilly2"],
  "Steven Sessegnon": ["bBCJaydenStockley", "bBCStevenSessegnon", "bBCStevenSessegnon1"],
  "Shaun Hutchinson": ["sportsBoomUKShaunHutchinson", "sportsBoomUKShaunHutchinson1", "sportsBoomUKShaunHutchinson2"],
  "Riley Harbottle": ["bristolRoversFootballClubRileyHarbottle", "bristolRoversRileyHarbottle", "bristolRoversFootballClubRileyHarbottle1", "bristolRoversRileyHarbottle1"],
  "Foyo": ["bBCJaydenStockley", "bBCFoyo"],
  "Osman Foyo": ["bBCOsmanFoyo"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AFC Wimbledon · 2026/27 Season`,
  heroLede: `Transfer window active. AFC Wimbledon preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
