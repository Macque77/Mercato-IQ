/* ============================================================
   MERCATO IQ · CLUB DATA · FC TWENTE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Twente",
  mono: "TWE",
  slug: "fc-twente",
  primary: "#E2001A",
  primaryBright: "#FF4D5E",
  primaryDeep: "#8A0010",
  primaryRgb: "226,0,26",
  breadcrumb: ["Netherlands", "Eredivisie"]
};

const VOLATILE = {
  verified: "2026-08-04",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/"],
  queries: ["FC Twente transfer news 2026"]
};

const REPORT_META = {
  asof: "04 Aug 2026",
  updated: "2026-08-04T14:30:00Z",
  label: "Updated 04 Aug 2026 · FC Twente"
};

const CONFIRMED_IN = [
  {name:"Joël Drommel", sub:"29, goalkeeper, returns to boyhood club", club:"PSV", pos:"GK", fee:"€0.5m (+bonuses)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reached a verbal agreement on a 4-year deal (to mid-2030); creates a three-way keeper battle with Lars Unnerstall and Remko Pasveer. Corroborated by Rik Elfrink (Eindhovens Dagblad) and Mounir Boualin."}
];

const CONFIRMED_OUT = [
  {name:"Mats Rots", sub:"defender", club:"TSG 1899 Hoffenheim (Germany)", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Bart van Rooij", sub:"22, right-back", club:"Ajax", pos:"DF", report:"Van Rooij's name circulated as a possible Anton Gaaei replacement after Ajax's database of contract situations flagged him, but Telegraaf insider Mike Verweij shot the rumour down, calling it 'absolutely not an option' — early agent contact was routine scouting, not genuine interest, and a reported ~€10m valuation is seen as a further obstacle.", src:"Mike Verweij, De Telegraaf", tier:1, fee:"€10m (reported valuation)", truth:82, prob:8, light:"r", trend:"flat", note:"Explicitly denied by a top-tier insider; listed for transparency only.", lastSeen:"2026-08-04T19:10:50Z", baseProb:8},
  {name:"Arno Verschueren", sub:"midfielder", club:"Fortuna Sittard", pos:"MF", report:"Fortuna Sittard are reported to be showing growing interest in the FC Twente midfielder as the window progresses.", src:"TwenteInsite.nl", tier:2, fee:"Undisclosed", truth:50, prob:30, light:"y", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];

const RISERS = [];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  twenteFansnlcitingMikeVerweijDeTelegraafBartvanRooij: {l:"TwenteFans.nl (citing Mike Verweij, De Telegraaf)", u:"https://www.twentefans.nl/verweij-zet-streep-door-fc-twente-transfer-absoluut-geen-optie/"},
  twenteInsitenlArnoVerschueren: {l:"TwenteInsite.nl", u:"https://www.twenteinsite.nl/fc-twente-nieuws/wanneer-opent-en-sluit-de-transfermarkt-alle-datums-op-een-rij"},
  larsLeeftinkFootballTransferscomJolDrommel: {l:"Lars Leeftink, FootballTransfers.com", u:"https://www.footballtransfers.com/nl/transfernieuws/nl-eredivisie/2026/08/transfer-joel-drommel-naar-fc-twente-teken-voor-lars-unnerstall"}};

const LINKMAP = {
  "Bart van Rooij": ["twenteFansnlcitingMikeVerweijDeTelegraafBartvanRooij"],
  "Arno Verschueren": ["twenteInsitenlArnoVerschueren"],
  "Joël Drommel": ["larsLeeftinkFootballTransferscomJolDrommel"],
  "Mats Rots": ["twenteInsitenlArnoVerschueren"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Twente · 2026/27 Season`,
  heroLede: `Transfer window active. FC Twente preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
