/* ============================================================
   MERCATO IQ · CLUB DATA · CARDIFF CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Cardiff City", mono: "CC", slug: "cardiff-city",
  primary: "#0070B8", primaryBright: "#5CA9FF", primaryDeep: "#003F66",
  primaryRgb: "0,112,184",
  breadcrumb: ["Wales","Championship"]
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
  queries: ["cardiff-city transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Omari Kellyman", sub:"19 · AM · England", club:"Chelsea", pos:"AM", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Cardiff's third summer signing under Brian Barry-Murphy, on the record with player quotes already given."},
  {name:"Jack Moylan", sub:"24 · Republic of Ireland · AM", club:"Lincoln City", pos:"Attacking midfield", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Announced by Cardiff. The attacking midfielder has signed a four-year deal in South Wales on a permanent transfer, ending a slow start to the Bluebirds' window after promotion. He scored 12 goals as Lincoln won League One."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-omarikellyman": {l:"Related news search: Omari Kellyman", u:"https://news.google.com/search?q=Cardiff%20City%20Omari%20Kellyman%20transfer&hl=en-GB&gl=GB"},
  peteORourkeJackMoylan: {l:"Pete O'Rourke", u:"https://x.com/SportsPeteO/status/2083511106371236130"},
  cardiffCityFCofficialJackMoylan: {l:"Cardiff City FC (official)", u:"https://x.com/CardiffCityFC/status/2085034344289108124"},
  walesOnlineJackMoylan: {l:"Wales Online", u:"https://news.google.com/rss/articles/CBMiowFBVV95cUxNUWRUbnh4NmRGVmJnZDNNM2ZmbHlKeWdnWTlYbVhiNXJvanA4UlMyS2psSHVEdk9GOFFYenZHbEJhblZyUkVzQmhyb3YyWDJueXNncFRxRmh5MktJTEdTTmJzdTdXanlTWnoxcXFsbkpqQVZtY0tSZmh2RlJ0ZzVsMFd5Vy0yb1h3aFNvY3RYZWJHN3dkTnhDaGRtR2oyd1NYN3hn0gGoAUFVX3lxTFBPM3FIXzYyM1VrU0pnU3g1bFl6b3M4aDhZNDljM1JBaDhkekhPUDRueWVfQ2tKOUhlYVcwYnFnVXRKUDBOUVVRbS16WkZIU1E2RDA3QUFtYU9GZjhjbHFHOXQ4cTJVdEczcTBORVB5YXRJQllLWlZUT3FTWTVDVmtEX25lRlhuY2FYc0c1THRMank0d1VNMm9RNHh2WmlOOXoxUTVRVFVzYQ?oc=5"},
  walesOnlineJackMoylan1: {l:"Wales Online", u:"https://news.google.com/rss/articles/CBMiowFBVV95cUxNUWRUbnh4NmRGVmJnZDNNM2ZmbHlKeWdnWTlYbVhiNXJvanA4UlMyS2psSHVEdk9GOFFYenZHbEJhblZyUkVzQmhyb3YyWDJueXNncFRxRmh5MktJTEdTTmJzdTdXanlTWnoxcXFsbkpqQVZtY0tSZmh2RlJ0ZzVsMFd5Vy0yb1h3aFNvY3RYZWJHN3dkTnhDaGRtR2oyd1NYN3hn0gGoAUFVX3lxTFBPM3FIXzYyM1VrU0pnU3g1bFl6b3M4aDhZNDljM1JBaDhkekhPUDRueWVfQ2tKOUhlYVcwYnFnVXRKUDBOUVVRbS16WkZIU1E2RDA3QUFtYU9GZjhjbHFHOXQ4cTJVdEczcTBORVB5YXRJQllLWlZUT3FTWTVDVmtEX25lRlhuY2FYc0c1THRMank0d1VNMm9RNHh2WmlOOXoxUTVRVFVzYQ"},
  walesOnlineKionEtete: {l:"Wales Online", u:"https://news.google.com/rss/articles/CBMioAFBVV95cUxPbkxZM1BxU3FSS1VwWEVCQzRWUHEwTWZVRGdDekMySHdvLTZvODllN3JnWFF4YjRwVU5lUXlWd29QMGJ3ekFwTTZONjBOQmVoRElQNHJPTDg5NlZnMVhzZzhacy1xNUJNalZheVh6YzMwR0NuMHZUMDlySkxtNUlRcmkxN3VGb2w5YnBNVXNURUpZQ2EyaEF5YjZUdGhXcjR6"},
  cardiffCityNathanTrott: {l:"Cardiff City", u:"https://news.google.com/rss/articles/CBMilgFBVV95cUxPNno4Mkw3NGdpeFlyNUJmVGpSTkppTEh5RDBGY2xoVHhWWElibThVdUQ3THNJX3pSV1VFT0piQ0stQ2FmMnNtb3Y5UnJKN0lvbEtCVlczcmF3M2hhVXZPOVJLdk1YYmk0TTdfb0NfSWlZUkRKWEk1aEs0ZURCNURXWXhzVUF4N29ycmJ2aVRqYTV4b1lCZEE"}};

const LINKMAP = {
  "Omari Kellyman": ["gnews-omarikellyman"],
  "Jack Moylan": ["peteORourkeJackMoylan", "cardiffCityFCofficialJackMoylan", "walesOnlineJackMoylan", "walesOnlineJackMoylan1"],
  "Kion Etete": ["walesOnlineKionEtete"],
  "Nathan Trott": ["cardiffCityNathanTrott"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Cardiff City · 2026/27 Season`,
  heroLede: `Transfer window active. Cardiff City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};