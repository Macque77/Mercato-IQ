/* ============================================================
   MERCATO IQ · CLUB DATA · MILTON KEYNES DONS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Milton Keynes Dons", mono: "MKD", slug: "milton-keynes-dons",
  primary: "#0D1B3E", primaryBright: "#6E8CFF", primaryDeep: "#060D1F",
  primaryRgb: "13,27,62",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Promoted from League Two (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["milton-keynes-dons transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Sam Nombe", sub:"ST", club:"Rotherham United", pos:"ST", fee:"£600k (+£1m add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed permanent transfer, confirmed by both club and local press."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Curtis Nelson", sub:"· · D", club:"Derby County", pos:"D", report:"Curtis Nelson departs Derby County for Milton Keynes Dons", src:"Google News", tier:2, fee:"Undisclosed", truth:90, prob:85, light:"g", trend:"down", note:"Transfer confirmed by club", lastSeen:"2026-08-08T04:21:32Z", baseProb:85},
  {name:"Kane Wilson", sub:"· · D", club:"Derby County", pos:"D", report:"Kane Wilson departs Derby County for Milton Keynes Dons", src:"Google News", tier:2, fee:"Undisclosed", truth:90, prob:85, light:"g", trend:"down", note:"Transfer confirmed by club", lastSeen:"2026-08-08T04:21:32Z", baseProb:85},
  {name:"Marvin Ekpiteta", sub:"· · D", club:"Hibernian", pos:"D", report:"Milton Keynes Dons sign Hibernian defender Marvin Ekpiteta", src:"BBC", tier:2, fee:"Undisclosed", truth:95, prob:90, light:"g", trend:"down", note:"Transfer confirmed by BBC", lastSeen:"2026-08-08T04:21:32Z", baseProb:90}
];
const OUTGOING = [
  {name:"Brooklyn Ilunga", sub:"· · WB", club:"Bromley", pos:"WB", report:"Brooklyn Ilunga: Bromley sign Milton Keynes Dons wing-back on permanent transfer", src:"BBC", tier:2, fee:"Undisclosed", truth:95, prob:90, light:"g", trend:"down", note:"Permanent transfer", lastSeen:"2026-08-08T04:21:32Z", baseProb:90},
  {name:"Tommy Leigh", sub:"· · M", club:"Bradford City", pos:"M", report:"Tommy Leigh: Bradford City add midfielder from Milton Keynes Dons", src:"BBC", tier:2, fee:"Undisclosed", truth:95, prob:90, light:"g", trend:"down", note:"Transfer confirmed by BBC", lastSeen:"2026-08-08T04:21:32Z", baseProb:90}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-samnombe": {l:"Related news search: Sam Nombe", u:"https://news.google.com/search?q=Milton%20Keynes%20Dons%20Sam%20Nombe%20transfer&hl=en-GB&gl=GB"},
  "gnews-mattyyoung": {l:"Related news search: Matty Young", u:"https://news.google.com/search?q=Milton%20Keynes%20Dons%20Matty%20Young%20transfer&hl=en-GB&gl=GB"},
  googleNewsCurtisNelson: {l:"Google News", u:"https://news.google.com/rss/articles/CBMimgFBVV95cUxPT282bmZrd0lESVd3UHU1UF9jWEdNbV91V2xzM3ZyVnJPMVdkYVd2aWxOR25jSjBZcjRoWmV2NmRiRmcweGkzemNYRHdwakZWOEVxZ3hYX0xFMnp2R05USTcyek1wMGs5VGdVQXQ4M1NUcFU4NTBNVTk5ZVY5V2hLNklaM0M0aTJPUng4M3VXX21kTndicTdXZ1lB?oc=5"},
  googleNewsKaneWilson: {l:"Google News", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxNaWJoeUJ1b0ZxR05VSHY4R3kzc3UtWFlmc3ZSV1RpZnFXbXlScGI1Y2txck9UN05tOUg3ZkhTbnZjdGRkQktsSjFFMnRMelFQQWp0YUtCREhaNHczc0c2Si1CU2pZdEoyaDZlUW9IVGJNMGoyY2xJNWxEcDFoNHQxN0ZmR0x0R0F5Mm9rc2VVS2Z0Q19lY2tr?oc=5"},
  bBCMarvinEkpiteta: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1TdktLTG1LdklfSFJ6TjdrOFR5Z1g2X0lVakI2N3J0ZnZNajVrdUg2RWcxR3ZuTVRTZ01yUnFlWkcxYV9fZzdTRFd6ZS1SNmt6T3p3WElRTUdaQmlUcDBzSnVoU3U3cWM?oc=5"},
  bBCBrooklynIlunga: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5KX24tMG5qaWRaNGRlOVhkMTlxZi1TN2luMVVWVHdlZVJRZjg5VmVFaXQ5Y2lMUVc1QmhuVG42Zjg0NmhrRmFLZXAwQmYzVTNYQUp2OXY5VE9zQlh1RmhscmhuT2E2VFE?oc=5"},
  bBCTommyLeigh: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFA4VmRxMTJqQ1FSZl9GSzNLSXlVT282X0tia01PZ3JfelBHbXMzR04taVVFTEtKLXpmZDNTNGMxTUl3YXRWNmVNSV9Gajl2WnNxOHpzMkVFZDkxZHV2cnZBR1Fsc0MwQmM?oc=5"}};

const LINKMAP = {
  "Sam Nombe": ["gnews-samnombe"],
  "Matty Young": ["gnews-mattyyoung"],
  "Curtis Nelson": ["googleNewsCurtisNelson"],
  "Kane Wilson": ["googleNewsKaneWilson"],
  "Marvin Ekpiteta": ["bBCMarvinEkpiteta"],
  "Brooklyn Ilunga": ["bBCBrooklynIlunga"],
  "Tommy Leigh": ["bBCTommyLeigh"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Milton Keynes Dons · 2026/27 Season`,
  heroLede: `Transfer window active. Milton Keynes Dons preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
