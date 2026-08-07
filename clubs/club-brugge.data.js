/* ============================================================
   MERCATO IQ · CLUB DATA · CLUB BRUGGE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Club Brugge",
  mono: "CLU",
  slug: "club-brugge",
  primary: "#2E5CC8",
  primaryBright: "#2E5CC8",
  primaryDeep: "#2E5CC8",
  primaryRgb: "100,100,100",
  breadcrumb: ["Belgium", "Pro League"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Nicky Hayen",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "1st Pro League (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Club Brugge transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Club Brugge"
};

const CONFIRMED_IN = [
  {name:"David Njoku", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 August 2026"}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"David Njoku", sub:"23 · ST · Nigeria", club:"Udinese", pos:"ST", report:"1 Aug 2026", src:"HLN", tier:2, fee:"€18m", truth:60, prob:45, note:"HLN reports Brugge pursuing Nigerian striker from Udinese.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Bisiwu", sub:"", club:"", pos:"", report:"Club Brugge and Barcelona have reached an agreement over transfer", src:"Sacha Tavolieri", tier:3, fee:"", truth:75, prob:70, light:"g", trend:"flat", note:"Accord reported between clubs", lastSeen:"2026-08-07T01:42:32Z", baseProb:70},
  {name:"Vasovic", sub:"", club:"", pos:"", report:"Club Brugge looking again to Switzerland and following young prolific scorer", src:"Sacha Tavolieri", tier:3, fee:"", truth:40, prob:35, light:"y", trend:"flat", note:"Rumour - Club monitoring player", lastSeen:"2026-08-07T01:42:32Z", baseProb:35},
  {name:"Cheveyo Tsawa", sub:"", club:"", pos:"", report:"Club Brugge leading the race for player but competition increasing", src:"Sacha Tavolieri", tier:3, fee:"", truth:60, prob:55, light:"g", trend:"flat", note:"Race against other clubs", lastSeen:"2026-08-07T01:42:32Z", baseProb:55},
  {name:"Jan Virgili", sub:"20 · Spain · W", club:"Mallorca", pos:"Winger", report:"Club Brugge has new flankspeler almost confirmed - Mallorca winger on way to club", src:"HLN", tier:2, fee:"", truth:80, prob:75, light:"g", trend:"flat", note:"Deal near completion", lastSeen:"2026-08-07T01:42:32Z", baseProb:75}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "hln": {l:"HLN", u:"https://www.hln.be/sport/voetbal"},
  voetbalPrimeurbeBisiwu: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMixAFBVV95cUxQRXN6VmxENWRsOF9DcDZ5ODBwaGUzLWJrTUhuNFJjdVkxLWZ6ajNLQkVhcjUxYmtNT3lVWDZxTlF2STJzZ0Rxd0hpTmNOdzhzYjZ1aEF6TXlsQnRFVVRNVE55a2FGZVBlangzYlRBNFpNWTdGVGZnMWc1TzF6aE9fQzYwdDlaWk8xaENydEE2XzAwdXpWWE9EYzFiSWRybzhwZnFGdWctZU5nMU5Sc1VHZ1pQZHB0Sk1DSHBDV0RBaXY0aW12?oc=5"},
  voetbalPrimeurbeVasovic: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMinAFBVV95cUxPTjQ0ZVJieUFDWDlZMVlhNHJ1SnVxSk9hVVFWQkU1WG5va2ZkNEtHSDgzWVptaXBUQ29QSDhCRjJfWTlnRFduUWhDUUJmbWE4V2c3R1hpNWE0YnBjaUZYZXRrZGlhY2x2MWdybHlMUFcwRUI3OHAtbmxKLVVNdmdiTEwxUTFCTHFGNFoxR0lsN0p3Y1hHcFBnQldVV2k?oc=5"},
  voetbalPrimeurbeCheveyoTsawa: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPUkVWMzBEc2hxWWNtZ2ZSYzFSS3lIY3BrSHFQYWJMMkRuVUVScjRnV2x3RnZ6Z0dWdmdwTjZmbXZDR1lNU2RMOEh1c0FlSm9aUjRMM2NKQmo0U1J4c01VR21ONHJTb1F3cXNUTWNlQS16dWJPSW15OTllWTFhQVN6aTRJckNKdzZoWExVdU1aOEsybEZwYjBvc2hrSk56YTg3SnI4emhkODlYemdWemRwbUdnRWhmUVdHQVNTRGlZUQ?oc=5"},
  hLNJanVirgili: {l:"HLN", u:"https://news.google.com/rss/articles/CBMi1gFBVV95cUxOT2tnckN4QXhSM1hOUmdONmJmakkxSlhkLWp2M2pBdFdobERjZE9la3pZYWZLZTdJbkQ0XzA4bW41c3g2ZW9QZy1UMmhiLUR0ZTVwMWxadGdfdnNKbUl3N1BhOW5hQ1VCajlWLTVyTFNOTXlaM2hUWlhzMFJkZ3ZlRWlRZWdHeVJCdnJjUDJpck9Xd2YwQV9yb2ZjLS03YkF4TTlZaWx4YkdmTjk0aHRMRzFRRi10OUlzZXM1Ylk3VzliSzBZNkdnTkpjbU10bzhHUWFzaDJB?oc=5"}};

const LINKMAP = {
  "David Njoku": ["hln"],
  "Bisiwu": ["voetbalPrimeurbeBisiwu"],
  "Vasovic": ["voetbalPrimeurbeVasovic"],
  "Cheveyo Tsawa": ["voetbalPrimeurbeCheveyoTsawa"],
  "Jan Virgili": ["hLNJanVirgili"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Club Brugge · 2026/27 Season`,
  heroLede: `Transfer window active. Club Brugge preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
