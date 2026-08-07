/* ============================================================
   MERCATO IQ · CLUB DATA · DONCASTER ROVERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Doncaster Rovers", mono: "DR", slug: "doncaster-rovers",
  primary: "#C8102E", primaryBright: "#FF6B7A", primaryDeep: "#6E0A1A",
  primaryRgb: "200,16,46",
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
  queries: ["doncaster-rovers transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Alfie May", sub:"ST", club:"Huddersfield Town", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Deal agreed per credible reporting, pending formal announcement."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Luke Molyneux", sub:"Unknown · Unknown · Unknown", club:"Doncaster Rovers", pos:"Unknown", report:"Deal agreed with League Two club", src:"Doncaster Free Press", tier:3, fee:"Unknown", truth:75, prob:70, light:"g", trend:"flat", note:"Transfer to L2 club reported as agreed", lastSeen:"2026-08-07T01:42:32Z", baseProb:70},
  {name:"Owen Bailey", sub:"Unknown · Unknown · W", club:"Doncaster Rovers", pos:"W", report:"Winger completed move to League Two outfit", src:"Yorkshire Post", tier:3, fee:"Unknown", truth:85, prob:85, light:"g", trend:"up", note:"Transfer to League Two club completed", lastSeen:"2026-08-07T01:42:32Z", baseProb:85}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-alfiemay": {l:"Related news search: Alfie May", u:"https://news.google.com/search?q=Doncaster%20Rovers%20Alfie%20May%20transfer&hl=en-GB&gl=GB"},
  "src-benwignall": {l:"Ben Wignall", u:"https://news.google.com/search?q=Ben%20Wignall%20Doncaster%20Rovers%20transfer&hl=en-GB&gl=GB"},
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  "gnews-owenbailey": {l:"Related news search: Owen Bailey", u:"https://news.google.com/search?q=Doncaster%20Rovers%20Owen%20Bailey%20transfer&hl=en-GB&gl=GB"},
  doncasterFreePressLukeMolyneux: {l:"Doncaster Free Press", u:"https://news.google.com/rss/articles/CBMigwJBVV95cUxQWmVaYUd5Q2ZLX24yTWNPRzRzRi1SOEZfdVM3aTdEUlNXNzNUMFE4Q2U2UDRBUGVrVGtXNTh5T05mWEpSV01TVFBwbXdmX05CczB1eGF0bzcyQVZ1NVhZVkJHQUUyd2VFYXI1LUhXUGhNenRmRXc4VTRSaU1OOTVMZDZ5ZjhiWjFUaWt5NnNFWW1kME9xTUFuX2c4QzZZeVZPaV90MTlBVVBjby1TcFVlTFNacUw1NTRqMjBWaG5aYlcyeC1BM2xTRjJOX2dKcm42andHbFg1WDEweERiMHZBbWsxWk9NTG4xdEVETHBMTDdaT2lPV2hiMG1ndVppMVJ3M1Z3"},
  yorkshirePostOwenBailey: {l:"Yorkshire Post", u:"https://news.google.com/rss/articles/CBMi8wFBVV95cUxPNjlWNHFvTy1CODRDVlE5VU9oUWY0WW1SZXNfUmM0bF83RlozTGJwbmZrQzJMeVlwNXg3SzVOMGVYNTdjUFZtR0RvOVR1NUtsX2tVLW9ZZzlMelB3dnUxcEFRd0Z2Z1BXTVYxX012aXVfVXNOMGhnUjkxVVlFdkJGWHB3LTJXTUJiZUFMX3d5UENHaFdpb20tN0pDY2I0alpCQnpGc1BMbGsyY1pxT1M0c0lqa01YVGpnY3VlUlB2Mmlhc0FWM3RHd2ZmUUxIaFpYb2Y4V1FfY081ZTJYMzRDMldZZmRjYUZaeHpLaVhTekZRRVU"}};

const LINKMAP = {
  "Alfie May": ["gnews-alfiemay"],
  "Luke Molyneux": ["src-benwignall", "flw", "doncasterFreePressLukeMolyneux"],
  "Owen Bailey": ["gnews-owenbailey", "yorkshirePostOwenBailey"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Doncaster Rovers · 2026/27 Season`,
  heroLede: `Transfer window active. Doncaster Rovers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
