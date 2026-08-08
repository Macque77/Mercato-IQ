/* ============================================================
   MERCATO IQ · CLUB DATA · BURTON ALBION · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Burton Albion", mono: "BA", slug: "burton-albion",
  primary: "#C9A227", primaryBright: "#FFE066", primaryDeep: "#725B12",
  primaryRgb: "201,162,39",
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
  queries: ["burton-albion transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Matthew Dennis", sub:"ST", club:"Notts County", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed incoming alongside Notts County's own reported departure."},
  {name:"Gbemi Arubi", sub:"Unknown · Nigeria · Forward", club:"Dundalk FC", pos:"Forward", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed transfer from Dundalk FC"}
];
const CONFIRMED_OUT = [
  {name:"Udoka Godwin-Malife", sub:"DF", club:"Reading", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Captain's move to Reading, medical reported underway."},
  {name:"Jake Beesley", sub:"Unknown · England · Forward", club:"Bradford City", pos:"Forward", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed transfer to Bradford City"}
];
const INCOMING = [
  {name:"Gbemi Arubi", sub:"Dundalk · F", club:"Dundalk", pos:"F", report:"Transfer to Burton Albion confirmed from Dundalk", src:"Dundalk FC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Official confirmation from Dundalk FC", lastSeen:"2026-08-08T04:21:31Z", baseProb:100, dead:true, deadReason:"Transfer completed and confirmed; moved to confirmed_in"},
  {name:"Brad Collins", sub:"Coventry City · GK", club:"Coventry City", pos:"GK", report:"Burton Albion targeting permanent deal for Coventry keeper", src:"SportsBoom UK", tier:3, fee:"Undisclosed", truth:75, prob:60, light:"g", trend:"flat", note:"Loan player, permanent move being pursued", lastSeen:"2026-08-08T16:04:56Z", baseProb:60}
];
const OUTGOING = [
  {name:"Jake Beesley", sub:"Bradford City · Forward", club:"Bradford City", pos:"FW", report:"Jake Beesley joins Bradford City from Burton Albion", src:"Burton Albion FC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Move confirmed by Burton Albion", lastSeen:"2026-08-08T10:03:39Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-matthewdennis": {l:"Related news search: Matthew Dennis", u:"https://news.google.com/search?q=Burton%20Albion%20Matthew%20Dennis%20transfer&hl=en-GB&gl=GB"},
  "gnews-udokagodwinmalife": {l:"Related news search: Udoka Godwin-Malife", u:"https://news.google.com/search?q=Burton%20Albion%20Udoka%20Godwin-Malife%20transfer&hl=en-GB&gl=GB"},
  "gnews-jakebeesley": {l:"Related news search: Jake Beesley", u:"https://news.google.com/search?q=Burton%20Albion%20Jake%20Beesley%20transfer&hl=en-GB&gl=GB"},
  dundalkFCGbemiArubi: {l:"Dundalk FC", u:"https://news.google.com/rss/articles/CBMidkFVX3lxTE5yNUxMMmR2VlZmaUhNVUltNW1TTWR2elN5c2FZeTRkdU10YkROaTBiRDVDb212LVpud280NXpOdDgtUFVhbks1bERVdC1GWTZ0QURzeWxZcERySGVyRVBQdGtZd290TDBBZWlwazhxbnNob1BKM3c"},
  sportsBoomUKBradCollins: {l:"SportsBoom UK", u:"https://news.google.com/rss/articles/CBMitgFBVV95cUxObXljSkZ2SmxXRGJYNklKcHZEaWs2WTZzMDd4YXZ6QWdWQ3NkcGw4N0ptMEZsWkFtajBTWWZOMEVHQUpkWUxkSlpuc05WMWJIR0V1d1hkVW0zZHlVYWFZaTJSTkVkdG96SWtqWTd1d213YWk2M1hVOVk5ZGM1ek9JeDhUUDFQODhiZDU3M192cTRLcURoMjZXNTFPNGhtTE5qVmY3T1Y1N1Q5ZDVfc01FYV9ZdGQ3QQ"},
  burtonAlbionFCJakeBeesley: {l:"Burton Albion FC", u:"https://news.google.com/rss/articles/CBMijwFBVV95cUxOeEZJQVNBMmEtUHNwVTRUUUF2S1V2ZGQ4cWc3cjBSOUtpSUFXVEptVUVwZ1g1bVB4dUNlZEVEdWc2YnBWcm43clFEaU9kSzFqbHJHNzhfZy1aV1MxQzhwNzJnaTZ0R2l3cmJwdE1pTjdmbl93US16T2RMWTM0QWwtRUg3LTllWHVmSlEwbnQxcw"}};

const LINKMAP = {
  "Matthew Dennis": ["gnews-matthewdennis"],
  "Udoka Godwin-Malife": ["gnews-udokagodwinmalife"],
  "Jake Beesley": ["gnews-jakebeesley", "burtonAlbionFCJakeBeesley"],
  "Gbemi Arubi": ["dundalkFCGbemiArubi"],
  "Brad Collins": ["sportsBoomUKBradCollins"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Burton Albion · 2026/27 Season`,
  heroLede: `Transfer window active. Burton Albion preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
