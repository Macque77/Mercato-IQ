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
  {name:"Chris-Kévin Nadje", sub:"Unknown · Unknown · Midfielder", club:"Feyenoord", pos:"Midfielder", report:"Transfer agreed between Feyenoord and KAS Eupen", src:"Feyenoord official", tier:2, fee:"Undisclosed", truth:95, prob:95, light:"g", trend:"up", note:"Deal confirmed by both clubs; player reportedly undergoing medical", lastSeen:"2026-08-07T17:40:23Z", baseProb:95}
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
  frfansnlChrisKvinNadje: {l:"fr-fans.nl", u:"https://news.google.com/rss/articles/CBMigAFBVV95cUxQTUh2N0twaXltaURtUVNLUHI5YmpqV2RSeV9neWFtcFVZeldVRS1rM05ESlNQbnUwTGE5WmdReUVtYW9WcPA3MTJmSG5SWDJHdkRfTGdNRHB2cnhMdklRTl9mWGR5c2ZxQmY1VFR5RTRrZmFyZHRaMExZZWk0QmhGcw?oc=5"},
  googleNewsFeyenoordChrisKvinNadje: {l:"Google News / Feyenoord", u:"https://news.google.com/rss/articles/CBMipgFBVV95cUxPSm5GdWJBeTJpR0hTSjNLYWYxMk9nN0NYRGlITU01LUJmVFo0YUNXWWNNcjAwSEV0ekN1QVYzdkdMRFhZQm5kNUxONVpMaEM5bk41dDBYRTZ4V1cyV0ozLUk4bmdCei1TbkhCRHZWdDJNODd3NHJ2YWFiTEYxbWNCMUctaWQyNTF6NzEzRVpTemdkVm54MnZZeFZSeVdrS2hHOE1xRWNR"}};

const LINKMAP = {
  "Chris-Kévin Nadje": ["fRFansnlChrisKvinNadje", "feyenoordGoogleNewsChrisKvinNadje", "fRFansnlChrisKvinNadje1", "frfansnlChrisKvinNadje", "googleNewsFeyenoordChrisKvinNadje"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `KAS Eupen · 2026/27 Season`,
  heroLede: `Transfer window active. KAS Eupen preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};