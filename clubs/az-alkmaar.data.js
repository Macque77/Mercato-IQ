/* ============================================================
   MERCATO IQ · CLUB DATA · AZ ALKMAAR · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AZ Alkmaar",
  mono: "AZ ",
  slug: "az-alkmaar",
  primary: "#FFEB3B",
  primaryBright: "#FFEB3B",
  primaryDeep: "#FFEB3B",
  primaryRgb: "100,100,100",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Maarten Martens",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "4th Eredivisie (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["AZ Alkmaar transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AZ Alkmaar"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [
  {name:"Alexandre Penetra", sub:"DF · Portugal", club:"AZ Alkmaar", pos:"DF", fee:"Loan + option to buy", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially loaned out to Turkish side Çorum FK with a purchase option attached."}
];

const INCOMING = [
  {name:"Thom van Bergen", sub:"22 · ST · Netherlands", club:"FC Groningen", pos:"ST", report:"31 Jul 2026", src:"Voetbal International", tier:1, fee:"Undisclosed", truth:60, prob:40, light:"y", trend:"flat", note:"Eyed by AZ as a long-term successor up front, with links growing as Troy Parrott's future stays uncertain."}
];

const OUTGOING = [
  {name:"Troy Parrott", sub:"24 · ST · Republic of Ireland", club:"AZ Alkmaar", pos:"ST", report:"3 Aug 2026", src:"Voetbal International", tier:1, fee:"Undisclosed (ETV ~€20m)", truth:65, prob:40, light:"y", trend:"flat", note:"Relegated West Ham, managed by Francesco Farioli, reportedly ready to meet AZ's asking price; Parrott has publicly played down Premier League talk."},
  {name:"Kees Smit", sub:"20 · DM · Netherlands", club:"AZ Alkmaar", pos:"DM", report:"10 Apr 2026", src:"FootballTransfers.com", tier:2, fee:"Undisclosed (ETV ~€17.2m)", truth:55, prob:30, light:"y", trend:"flat", note:"Manchester United have been the most persistent suitor across a string of reports since January 2026, with Real Madrid and Newcastle also credited with interest; no bid has followed."},
  {name:"Peer Koopmeiners", sub:"26 · CM · Netherlands", club:"AZ Alkmaar", pos:"CM", report:"3 Aug 2026", src:"Mounir Boualin / VoetbalPrimeur.nl", tier:1, fee:"€13m bid rejected", truth:70, prob:15, light:"o", trend:"flat", note:"Club Brugge had a €13m offer turned down and have since walked away; AZ coach Lee-Roy Echteld says the club is now 'far along' in extension talks instead."}
];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"ESPN reports AZ close to tying <b>Mats Wieffer</b> down to a contract extension even as Borussia Dortmund are separately reported to be pursuing the midfielder - a retention story rather than a confirmed transfer either way."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "espn": {l:"ESPN", u:"https://www.espn.com/soccer/"},
  voetbalPrimeurnlVIThomvanBergen: {l:"VoetbalPrimeur.nl (VI)", u:"https://www.voetbalprimeur.nl/clubs/az"},
  footballTransferscomKeesSmit: {l:"FootballTransfers.com", u:"https://www.footballtransfers.com/en/teams/nl/az/transfer-news"},
  voetbalPrimeurnlPeerKoopmeiners: {l:"VoetbalPrimeur.nl", u:"https://www.voetbalprimeur.nl/nieuws/2118763/echteld-komt-met-duidelijk-nieuws-over-goes-en-koopmeiners.html"}};

const LINKMAP = {
  "Mats Wieffer": ["espn"],
  "Thom van Bergen": ["voetbalPrimeurnlVIThomvanBergen"],
  "Troy Parrott": ["voetbalPrimeurnlVIThomvanBergen"],
  "Kees Smit": ["footballTransferscomKeesSmit"],
  "Peer Koopmeiners": ["voetbalPrimeurnlPeerKoopmeiners"],
  "Alexandre Penetra": ["voetbalPrimeurnlVIThomvanBergen"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `AZ Alkmaar · 2026/27 Season`,
  heroLede: `Transfer window active. AZ Alkmaar preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
