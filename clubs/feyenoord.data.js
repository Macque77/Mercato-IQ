/* ============================================================
   MERCATO IQ · CLUB DATA · FEYENOORD ROTTERDAM · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Feyenoord Rotterdam",
  mono: "FEY",
  slug: "feyenoord",
  primary: "#CC0000",
  primaryBright: "#CC0000",
  primaryDeep: "#CC0000",
  primaryRgb: "100,100,100",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Arne Slot",
  dof: "TBD (Director)",
  europe: "TBD",
  finish: "3rd Eredivisie (2025/26)",
  owner: "TBD",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["Feyenoord Rotterdam transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Feyenoord Rotterdam"
};

const CONFIRMED_IN = [
  {name:"Nacho Ferri", sub:"FW, 21, from KVC Westerlo", club:"KVC Westerlo", pos:"FW", fee:"€9m (up to €11m with bonuses)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"1.92m striker signed as long-term replacement for Ayase Ueda; contract until mid-2030. Began career at Eintracht Frankfurt's academy before a spell in Belgium."},
  {name:"Tjark Ernst", sub:"GK, 23, from Hertha BSC", club:"Hertha BSC", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Presented 16 July 2026 as Feyenoord's new first-choice goalkeeper following Wellenreuther's exit."}
];

const CONFIRMED_OUT = [
  {name:"Timon Wellenreuther", sub:"GK", club:"VfL Wolfsburg", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure back to Germany, 16 July 2026."},
  {name:"Ramiz Zerrouki", sub:"MF", club:"FC Twente", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Definitive transfer agreed 15 July 2026."},
  {name:"Chris-Kévin Nadje", sub:"Defender", club:"KAS Eupen", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Feyenoord and KAS Eupen reached agreement, confirmed on the club's official news channel, 1 August 2026."},
  {name:"Leo Sauer", sub:"FW", club:"VfB Stuttgart", pos:"FW", fee:"~€7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Move confirmed via official club news, 29 July 2026, after Feyenoord had set a €7m asking price."}
];

const INCOMING = [
  {name:"Jarrad Branthwaite", sub:"21 · CB · England", club:"Everton", pos:"CB", report:"31 Jul 2026", src:"Sky Sports", tier:2, fee:"€40m loan option", truth:58, prob:42, note:"Sky reports Feyenoord in loan discussions with Everton for young defender.", lastSeen:"2026-08-04T19:10:50Z", baseProb:42}
];

const OUTGOING = [
  {name:"Givairo Read", sub:"CB/RB, 20", club:"AS Roma", pos:"DF", report:"Roma have had a €28m bid (plus 10% sell-on) rejected by Feyenoord, who are holding firm at a €30m valuation; the player has agreed personal terms and wants the move, with Nottingham Forest's interest strengthening Feyenoord's hand.", src:"Sportingpedia / Dutch press", tier:2, fee:"€28-30m (in negotiation)", truth:82, prob:78, light:"g", trend:"flat", note:"Roma delegation reportedly in Rotterdam to finalise commissions and bonus clauses.", lastSeen:"2026-08-04T19:10:50Z", baseProb:78},
  {name:"In-beom Hwang", sub:"MF", club:"FC Porto", pos:"MF", report:"Feyenoord and Porto have reached an agreement in principle for the South Korean midfielder, with final paperwork still to be completed.", src:"FootballTransfers.com", tier:2, fee:"Undisclosed", truth:75, prob:80, light:"g", trend:"flat", note:"Reported as 'principeakkoord' (agreement in principle), one step short of official confirmation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:80}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"},
  sportingpediaGivairoRead: {l:"Sportingpedia", u:"https://www.sportingpedia.com/2026/08/04/feyenoord-reject-romas-latest-e28m-bid-for-givairo-read/"},
  footballTransferscomInbeomHwang: {l:"FootballTransfers.com", u:"https://www.footballtransfers.com/nl/teams/nl/feyenoord/transfernieuws"},
  fR12nlNachoFerri: {l:"FR12.nl", u:"https://www.fr12.nl/spelers/nacho-ferri"},
  feyenoordcomofficialChrisKvinNadje: {l:"Feyenoord.com (official)", u:"https://www.feyenoord.com/nl/news"}};

const LINKMAP = {
  "Jarrad Branthwaite": ["sky"],
  "Givairo Read": ["sportingpediaGivairoRead"],
  "In-beom Hwang": ["footballTransferscomInbeomHwang"],
  "Nacho Ferri": ["fR12nlNachoFerri"],
  "Tjark Ernst": ["footballTransferscomInbeomHwang"],
  "Timon Wellenreuther": ["footballTransferscomInbeomHwang"],
  "Ramiz Zerrouki": ["footballTransferscomInbeomHwang"],
  "Chris-Kévin Nadje": ["feyenoordcomofficialChrisKvinNadje"],
  "Leo Sauer": ["feyenoordcomofficialChrisKvinNadje"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Feyenoord Rotterdam · 2026/27 Season`,
  heroLede: `Transfer window active. Feyenoord Rotterdam preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
