/* ============================================================
   MERCATO IQ · CLUB DATA · KAS EUPEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "KAS Eupen", mono: "KE", slug: "eupen",
  primary: "#00539F", primaryBright: "#5CA9FF", primaryDeep: "#003060",
  primaryRgb: "0,83,159",
  breadcrumb: ["Belgium","Pro League"]
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
  queries: ["eupen transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Chris-Kévin Nadje", sub:"25 · France · M", club:"Feyenoord", pos:"M", report:"Transfer agreed between Feyenoord and KAS Eupen", src:"VoetbalPrimeur.be / fr-fans.nl", tier:3, fee:"Undisclosed", truth:90, prob:85, light:"g", trend:"down", note:"Multiple sources confirm deal agreed; player departing Feyenoord", lastSeen:"2026-08-07T14:38:27Z", baseProb:85}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Eupen Official", u:"#"},
  fRFansnlChrisKvinNadje: {l:"FR-Fans.nl", u:"https://news.google.com/rss/articles/CBMigAFBVV95cUxQTUh2N0twaXltaURtUVNLUHI5YmpqV2RSeV9neWFtcFVZeldVRS1rM05ESlNQbnUwTGE5WmdReUVtYW9WcPA3MTJmSG5SWDJHdkRfTGdNRHB2cnhMdklRTl9mWGR5c2ZxQmY1VFR5RTRrZmFyZHRaMExZZWk0QmhGcw"},
  feyenoordGoogleNewsChrisKvinNadje: {l:"Feyenoord (Google News)", u:"https://news.google.com/rss/articles/CBMipgFBVV95cUxPSm5GdWJBeTJpR0hTSjNLYWYxMk9nN0NYRGlITU41LUJmVFo0YUNXWWNNcjAwSEV0ekN1QVYzdkdMRFhZQm5kNUxONVpMaEM5bk41dDBYRTZ4V1cyV0ozLUk4bmdCei1TbkhCRHZWdDJNODd3NHJ2YWFiTEYxbWNCMUctaWQyNTE6ejEzRVpTemdkVm54MnZZeFZSeVdrS2hHOE1xRWNR"},
  fRFansnlChrisKvinNadje1: {l:"FR-Fans.nl", u:"https://news.google.com/rss/articles/CBMigAFBVV95cUxQTUh2N0twaXltaURtUVNLUHI5YmpqV2RSeV9neWFtcFVZeldVRS1rM05ESlNQbnUwTGE5WmdReUVtYW9WcHA3MTJmSG5SWDJHdkRfTGdNRHB2cnhMdklRTl9mWGR5c2ZxQmY1VFR5RTRrZmFyZHRaMExZZWk0QmhGcw"},
  frfansnlChrisKvinNadje: {l:"fr-fans.nl", u:"https://news.google.com/rss/articles/CBMigAFBVV95cUxQTUh2N0twaXltaURtUVNLUHI5YmpqV2RSeV9neWFtcFVZeldVRS1rM05ESlNQbnUwTGE5WmdReUVtYW9WcPA3MTJmSG5SWDJHdkRfTGdNRHB2cnhMdklRTl9mWGR5c2ZxQmY1VFR5RTRrZmFyZHRaMExZZWk0QmhGcw?oc=5"}};

const LINKMAP = {
  "Chris-Kévin Nadje": ["fRFansnlChrisKvinNadje", "feyenoordGoogleNewsChrisKvinNadje", "fRFansnlChrisKvinNadje1", "frfansnlChrisKvinNadje"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `KAS Eupen · 2026/27 Season`,
  heroLede: `Transfer window active. KAS Eupen preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};