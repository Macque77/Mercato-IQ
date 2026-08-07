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
  {name:"Jan Virgili", sub:"unknown · Spain · W", club:"Mallorca", pos:"W", report:"Club Brugge close to signing Mallorca winger", src:"Sacha Tavolieri", tier:3, fee:"Undisclosed", truth:70, prob:65, light:"g", trend:"up", note:"Advanced talks reported", lastSeen:"2026-08-07T23:07:29Z", baseProb:65}
];

const OUTGOING = [
  {name:"Unknown player", sub:"Unknown · Unknown · Unknown", club:"Unknown competitor", pos:"Unknown", report:"Club Brugge loses player to competitor in Belgian Pro League", src:"Sacha Tavolieri", tier:2, fee:"", truth:65, prob:60, light:"g", trend:"flat", note:"", lastSeen:"2026-08-07T20:08:12Z", baseProb:60, dead:true, deadReason:"Cannot identify player from on-page entry; no supporting snippet with player name found"},
  {name:"Bisiwu", sub:"unknown · unknown · unknown", club:"Barcelona", pos:"unknown", report:"Club Brugge and Barcelona have reached an agreement over transfer", src:"Sacha Tavolieri", tier:3, fee:"", truth:75, prob:70, light:"g", trend:"flat", note:"Agreement reported between clubs; full player details not disclosed in snippet", lastSeen:"2026-08-07T23:07:29Z", baseProb:70}
];

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
  voetbalPrimeurSachaTavolieriJanVirgili: {l:"VoetbalPrimeur (Sacha Tavolieri)", u:"https://news.google.com/rss/articles/CBMixgFBVV95cUxPM3lJajJLaGhBa1NXR1FQXzdERXdVcW1vZl9YMGFVRXRnT0o5cWpMTS03dVJLaHJzRm02UEtyTHdTX1QxVjlPa01TTFVmeWpEbWxnbGtEX292WGVfdjlFb3Zka2pFMGFyTXBkY2RIV0hEbVZ6QzRnQ1drN2hhR1Y4cXZLU2hfaEQ2TnBXWTVsd2FnVEVTRjJVQUd5UmRjdTVLZmlCMTBfZzlZTzVIbHNFeUdJVFFEV2ZXOTgtc1Z0eXQ2a1FPUGc?oc=5"},
  hLNKristofTerreurJanVirgili: {l:"HLN (Kristof Terreur)", u:"https://news.google.com/rss/articles/CBMi4AFBVV95cUxQMDlqWTdWYXkyQUNvQ2F0REFwQXhXRWJOWjZCYnlQVVV5c0JxUjdGUzRpVmdFLVlrWS1ra2pOamZ6MmNzQ3hsYWlOTk1oYlhHSXYyNFlZMmo5WlBYamlnSENWVkFhODM0UXNpQ3VtbThYbUdtelJ1ZGtNQmNUeXZKNVM2MGFLNUNWeDJuZ0E0ekdJckpoTXFra3VGck9LNkUyQnktRW1NbnltUmpaay1PckVGcVpuUUtKX0w1NG9hb1VLVlhUMkU4enY5QzZPbXZ3UkgtQUVGNTgzNFJZOXBEVg?oc=5"},
  voetbalPrimeurbeCheveyoTsawa1: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxPUkVWMzBEc2hxWWNtZ2ZSYzFSS3lIY3BrSHFQYWJMMkRuVUVScjRnV2x3RnZ6Z0dWdmdwTjZmbXZDR1lNU2RMOEh1c0FlSm9aUjRMM2NKQmo0U1J4c01VR21ONHJTb1F3cXNUTWNlQS16dWJPSW15OTllWTFhQVN6aTRJckNKdzZoWExVdU1aOEsybEZwYjBvc2hrSk56YTg3SnI4emhkODlYemdWemRwbUdnRWhmUVdHQVNTRGlZUQ"},
  voetbalPrimeurbeJorenBisiwu: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMixAFBVV95cUxQRXN6VmxENWRsOF9DcDZ5ODBwaGUzLWJrTUhuNFJjdVkxLWZ6ajNLQkVhcjUxYmtNT3lVWDZxTlF2STJzZ0Rxd0hpTmNOdzhzYjZ1aEF6TXlsQnRFVVRNVE55a2FGZVBlangzYlRBNFpNWTdGVGZnMWc1TzF6aE9fQzYwdDlaWk8xaENydEE2XzAwdXpWWE9EYzFiSWRybzhwZnFGdWctZU5nMU5Sc1VHZ1pQZHB0Sk1DSHBDV0RBaXY0aW12"},
  voetbalPrimeurbePetarVasovic: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMinAFBVV95cUxPTjQ0ZVJieUFDWDlZMVlhNHJ1SnVxSk9hVVFWQkU1WG5va2ZkNEtHSDgzWVptaXBUQ29QSDhCRjJfWTlnRFduUWhDUUJmbWE4V2c3R1hpNWE0YnBjaUZYZXRrZGlhY2x2MWdybHlMUFcwRUI3OHAtbmxKLVVNdmdiTEwxUTFCTHFGNFoxR0lsN0p3Y1hHcFBnQldVV2k"},
  voetbalPrimeurbeUnknown15yearolddefender: {l:"VoetbalPrimeur.be", u:"https://news.google.com/rss/articles/CBMixgFBVV95cUxPM3lJajJLaGhBa1NXR1FQXzdERXdVcW1vZl9YMGFVRXRnT0o5cWpMTS03dVJLaHJzRm02UEtyTHdTX1QxVjlPa01TTFVmeWpEbWxnbGtEX292WGVfdjlFb3Zka2pFMGFyTXBkY2RIV0hEbVZ6QzRnQ1drN2hhR1Y4cXZLU2hfaEQ2TnBXWTVsd2FnVEVTRjJVQUd5UmRjdTVLZmlCMTBfZzlZTzVIbHNFeUdJVFFEV2ZXOTgtc1Z0eXQ2a1FPUGc"},
  voetbal24beUnknownplayer: {l:"Voetbal24.be", u:"https://news.google.com/rss/articles/CBMihwFBVV95cUxONFZfb0Z0TmNOSkpxZEJ5Zm1ZcHRqRDhuNEJ1M28zbTZoaEI2Qnk0RDk3ancza21Zdk1VZlpaUnFQTDNGNHhHVVd6dE9BaDRZcnBBM3dpNWJYTDJmOXV4MGNHY1dERHMxaHBJVVR0UEpaUDN4Y3BkWGJmd25qZG9keHdqR2JwdE0"},
  voetbal24beJanVirgili: {l:"Voetbal24.be", u:"https://news.google.com/rss/articles/CBMiiwFBVV95cUxPclotMTlyX1ZIMU5BNnBVQlQ0UENicDNEZXBmRzQzSHRDYXFyNzFIUC1idndsT3hXbWljRGZCX0lLVkl2LVcxT1BCdVVaX25FN3ZCamtnN2lrN0ppSG1jZEdwcGE0OTdtTV9CNkpMU1BwRExCXzJWYmo4eEpvWGRpdk5yblhVcmRQS3hJ?oc=5"}};

const LINKMAP = {
  "David Njoku": ["hln"],
  "Bisiwu": ["voetbalPrimeurbeBisiwu"],
  "Vasovic": ["voetbalPrimeurbeVasovic", "voetbalPrimeurSachaTavolieriVasovic"],
  "Cheveyo Tsawa": ["voetbalPrimeurbeCheveyoTsawa", "voetbalPrimeurbeCheveyoTsawa1"],
  "Jan Virgili": ["hLNJanVirgili", "voetbalPrimeurSachaTavolieriJanVirgili", "hLNKristofTerreurJanVirgili", "voetbal24beJanVirgili"],
  "Joren Bisiwu": ["voetbalPrimeurbeJorenBisiwu"],
  "Petar Vasovic": ["voetbalPrimeurbePetarVasovic"],
  "Unknown 15-year-old defender": ["voetbalPrimeurbeUnknown15yearolddefender"],
  "Unknown player": ["voetbal24beUnknownplayer"],
  "unknown defender": ["voetbalPrimeurSachaTavolieriJanVirgili"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Club Brugge · 2026/27 Season`,
  heroLede: `Transfer window active. Club Brugge preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
