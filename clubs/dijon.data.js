/* ============================================================
   MERCATO IQ · CLUB DATA · DIJON FCO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Dijon FCO", mono: "DF", slug: "dijon",
  primary: "#FFFFFF", primaryBright: "#FFFFFF", primaryDeep: "#B0B0B0",
  primaryRgb: "255,255,255",
  breadcrumb: ["France","Ligue 2"]
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
  queries: ["dijon transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Mickaël Le Bihan", sub:"· France · Midfielder", club:"AJ Auxerre", pos:"Midfielder", report:"Transfer to Dijon FCO for three seasons", src:"Le Progrès", tier:2, fee:"Undisclosed", truth:85, prob:85, light:"g", trend:"flat", note:"Three-year deal reported", lastSeen:"2026-08-07T01:42:32Z", baseProb:85},
  {name:"Glody Ngonda", sub:"· DR Congo · Forward", club:"VClub", pos:"Forward", report:"Transfer from VClub to Dijon FCO with significant fee to VClub", src:"Foot RDC", tier:3, fee:"Undisclosed", truth:80, prob:80, light:"g", trend:"flat", note:"VClub receiving substantial payment reported", lastSeen:"2026-08-07T01:42:32Z", baseProb:80}
];
const OUTGOING = [
  {name:"Moussa Konaté", sub:"· · ·", club:"Dijon FCO", pos:"Unknown", report:"Moving to Saudi Arabia", src:"wiwsport", tier:3, fee:"Unknown", truth:75, prob:75, light:"g", trend:"flat", note:"Transfer to Saudi Arabia reported", lastSeen:"2026-08-07T01:42:32Z", baseProb:75}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Dijon Official", u:"#"},
  leProgrsMickalLeBihan: {l:"Le Progrès", u:"https://news.google.com/rss/articles/CBMitwFBVV95cUxNa0lIZTE0c3VwV18yUm9mcVdRajdJU1NSWDV6WV9pd3VpSjJWLUxRSUttMTZkOGhTblVTVkdQNk9ZMVBBeVdWYnAtVm03eFUzWG0xT2I3bWVJaVVfZ2hpMF80ajBGNkNrYjZqbHdCUmgyaE1lbk9sNHNUZmpPOGZuU0JXRFYtVjI2S2I0eUg1OHRmN2lmbzVEM2w5TlFjX2E2cUpEbW9BQXAxSDc4WGU5N2N6eDNyXzA"},
  wiwsportSouleymaneCiss: {l:"wiwsport", u:"https://news.google.com/rss/articles/CBMioAFBVV95cUxNS0hzVEdCcWtubjl1aWdjTFJfSlUxWTE2OFRsUjk2c0FXUlEzUksxamtnMzNMSkpCQTNaWm1pR2N4T09nTndhdlNsUk1DblpBbm1ZZFJhYjZ4aXJuVkN0eDJDbU1PZkFOOF9DaVVxRW51SFRCaWg5clZGc0RNRTBSdG5uMURFSFdaVUNHWWtpWWdySFUxYzMycXN5amRSVWhB"},
  footRDCGlodyNgonda: {l:"Foot RDC", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxOc3FybzNiQVBiU0JRak1xZWtocF9jS1RvQ3A1d1M4XzdvNmFGS1pMZTBZcHJUQWZQTEtmUlpWUGlZOG1GXzhtRUp3SkRIQ0FUMlFacWtlTV80QkFFN2tsSmNVT3JMWFlmWmlwMWdpYkZFMGJmVmMzUzIxanktSHZicW14S3RiYl9HTHUtSW1mYXdEYW9uWU00"},
  africaFootMalSedagondji: {l:"AfricaFoot", u:"https://news.google.com/rss/articles/CBMickFVX3lxTFBmUkdwejRodk9MVVZjQU92VFBqYjRfNHFOdEJHbjdTWkFaRXF1RlZ4VndlZWFHWlh3cmN6X2FITjhMcHZVTDFldmU1aTBFTjJNdXg4UGRXMkZKbE84QTU3RFlIeEZoZ2QzQTU4Y0l6cHc0UQ"},
  wiwsportMoussaKonat: {l:"wiwsport", u:"https://news.google.com/rss/articles/CBMijwFBVV95cUxONkVLWERNN0JnS2s0YlR0bXczZFZSUExCTE54Z0FEaU1sbk9ORUtWY2NjZnNMMG1QeXFYQmtpR2tjdW5RQjBTY2RVUVFkdUlKb1lxbThEN3dpQl9fTmJBTjYtdnhuTFNqUmlpOGdGdGZ6RmVLakZQYjBXUzFHT00wSkFMRVZFUmd6YS1UNkVURQ"}};

const LINKMAP = {
  "Mickaël Le Bihan": ["leProgrsMickalLeBihan"],
  "Souleymane Cissé": ["wiwsportSouleymaneCiss"],
  "Glody Ngonda": ["footRDCGlodyNgonda"],
  "Maël Sedagondji": ["africaFootMalSedagondji"],
  "Moussa Konaté": ["wiwsportMoussaKonat"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Dijon FCO · 2026/27 Season`,
  heroLede: `Transfer window active. Dijon FCO preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};