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
  {name:"Bisiwu", sub:"Unknown · Unknown · Unknown", club:"Barcelona", pos:"Unknown", report:"Club Brugge and Barcelona have reached an agreement on transfer", src:"Sacha Tavolieri", tier:3, fee:"Undisclosed", truth:85, prob:80, light:"g", trend:"flat", note:"Agreement reached between clubs", lastSeen:"2026-08-07T10:18:48Z", baseProb:80},
  {name:"Cheveyo Tsawa", sub:"", club:"", pos:"", report:"Club Brugge leading the race to sign Cheveyo Tsawa, but competition is increasing", src:"Sacha Tavolieri", tier:3, fee:"", truth:70, prob:65, light:"g", trend:"flat", note:"Early stage of negotiations; multiple clubs interested", lastSeen:"2026-08-07T10:18:48Z", baseProb:65},
  {name:"Vasovic", sub:"", club:"", pos:"", report:"Club Brugge looking at young goalscorer Vasovic from Switzerland", src:"Sacha Tavolieri", tier:3, fee:"", truth:60, prob:55, light:"g", trend:"flat", note:"Early scouting interest", lastSeen:"2026-08-07T10:18:48Z", baseProb:55}
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
  hLNJanVirgili: {l:"HLN", u:"https://news.google.com/rss/articles/CBMi1gFBVV95cUxOT2tnckN4QXhSM1hOUmdONmJmakkxSlhkLWp2M2pBdFdobERjZE9la3pZYWZLZTdJbkQ0XzA4bW41c3g2ZW9QZy1UMmhiLUR0ZTVwMWxadGdfdnNKbUl3N1BhOW5hQ1VCajlWLTVyTFNOTXlaM2hUWlhzMFJkZ3ZlRWlRZWdHeVJCdnJjUDJpck9Xd2YwQV9yb2ZjLS03YkF4TTlZaWx4YkdmTjk0aHRMRzFRRi10OUlzZXM1Ylk3VzliSzBZNkdnTkpjbU10bzhHUWFzaDJB?oc=5"},
  voetbalPrimeurSachaTavolieriVasovic: {l:"VoetbalPrimeur (Sacha Tavolieri)", u:"https://news.google.com/rss/articles/CBMinAFBVV95cUxOTjQ0ZVJieUFDWDlZMVlhNHJ1SnVxSk9hVVFWQkU1WG5va2ZkNEtHSDgzWVptaXBUQ29QSDhCRjJfWTlnRFduUWhDUUJmbWE4V2c3R1hpNWE0YnBjaUZYZXRrZGlhY2x2MWdybHlMUFcwRUI3OHAtbmxKLVVNdmdiTEwxUTFCTHFGNFoxR0lsN0p3Y1hHcFBnQldVV2k?oc=5"},
  voetbalPrimeurSachaTavolieriJanVirgili: {l:"VoetbalPrimeur (Sacha Tavolieri)", u:"https://news.google.com/rss/articles/CBMixgFBVV95cUxPM3lJajJLaGhBa1NXR1FQXzdERXdVcW1vZl9YMGFVRXRnT0o5cWpMTS03dVJLaHJzRm02UEtyTHdTX1QxVjlPa01TTFVmeWpEbWxnbGtEX292WGVfdjlFb3Zka2pFMGFyTXBkY2RIV0hEbVZ6QzRnQ1drN2hhR1Y4cXZLU2hfaEQ2TnBXWTVsd2FnVEVTRjJVQUd5UmRjdTVLZmlCMTBfZzlZTzVIbHNFeUdJVFFEV2ZXOTgtc1Z0eXQ2a1FPUGc?oc=5"}};

const LINKMAP = {
  "David Njoku": ["hln"],
  "Bisiwu": ["voetbalPrimeurbeBisiwu"],
  "Vasovic": ["voetbalPrimeurbeVasovic", "voetbalPrimeurSachaTavolieriVasovic"],
  "Cheveyo Tsawa": ["voetbalPrimeurbeCheveyoTsawa"],
  "Jan Virgili": ["hLNJanVirgili", "voetbalPrimeurSachaTavolieriJanVirgili"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Club Brugge · 2026/27 Season`,
  heroLede: `Transfer window active. Club Brugge preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
