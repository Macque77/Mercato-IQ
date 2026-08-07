/* ============================================================
   MERCATO IQ · CLUB DATA · FC ST. PAULI · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC St. Pauli", mono: "FSP", slug: "st-pauli",
  primary: "#5B3A29", primaryBright: "#8F6A54", primaryDeep: "#331F16",
  primaryRgb: "91,58,41",
  breadcrumb: ["Germany","2. Bundesliga"]
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
  queries: ["st-pauli transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Jackson Irvine", sub:"32 · Australia · M", club:"Cerezo Osaka", pos:"M", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure to J-League club after five seasons as captain"}
];
const INCOMING = [];
const OUTGOING = [
  {name:"Jackson Irvine", sub:"32 · Australia · M", club:"Cerezo Osaka", pos:"M", report:"Captain leaves St. Pauli after five years to join Cerezo Osaka in Japan", src:"Kicker / Transfermarkt", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official departure confirmed; multiple sources report transfer to J-League", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"St-Pauli Official", u:"#"},
  hamburgerAbendblattRyoFujita: {l:"Hamburger Abendblatt", u:"https://news.google.com/rss/articles/CBMixwFBVV95cUxPdmZwOWIwYnBBWDlCN1JvYUFUWkxZRjB3NGs4TktJY0VZVFFiRGdsb0hXZWR4Tjg1d19GREFzREVKLUlDaDJ0ZERKMEgwel9Ga095MktTMmF1Y2F6ZXhfVi1MZU1iT2hKX2JJdk1yV3d4bHFxamNua3c0cUVkMVVhMk1LZFJCcDJNdDVJYXZVT1p1Wm0zamtOUE1CRE8xMlpldFlwejJoYzRHbGhwTGNNUGI2azNKSDNJSUdXU0kzcDZJSnhRMFVJ"},
  kickerJacksonIrvine: {l:"Kicker", u:"https://news.google.com/rss/articles/CBMilgFBVV95cUxOUS03SEpoYjMtNThaeHdIcThneTdiU25NNjRpa2lKMlg0QmIyZ3VkRjExbksyeGZ1YW0ybUljSDZZSmdFWFp1VUZOQm5SaVVQMXhWbnVNOEM5M3lJU0kzaXExTzcwQjRpSkZnQWt2akNGZzBnRUJ0UUFrN2hiSWptNkJqVWFlTjA0aENlRT05UjgyUm5BRUA"},
  ntvdeJacksonIrvine: {l:"n-tv.de", u:"https://news.google.com/rss/articles/CBMi0gFBVV95cUxPREo0WHB1LUdtM2pYUVczaW5ZMEZ5WFlDeUdyRXFNcXpCWGEtczdNdHRZT09Cak5IVllFdnkxRXdFN2NDSU5ZYjd5UkJZVVUyYlNVN2dDei1OZmRGSDJtd1U4SkMxTHVvMjhqUUs3X1AyQWV3SE5DNmowSGg5eGdHb09CNzhic2lCbVBzQVg0RDFCc1Rlb0ZYUHdGYXRXOTFKWFQ0eHFBaTA3Nkc5ekxWQ05ma2gzT1NQXzZWNmtUUENFUDJ2TjVGeTBwLWltenVPRGc"}};

const LINKMAP = {
  "Ryo Fujita": ["hamburgerAbendblattRyoFujita"],
  "Jackson Irvine": ["kickerJacksonIrvine", "ntvdeJacksonIrvine"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC St. Pauli · 2026/27 Season`,
  heroLede: `Transfer window active. FC St. Pauli preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};