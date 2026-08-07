/* ============================================================
   MERCATO IQ · CLUB DATA · FC METZ · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Metz", mono: "FM", slug: "sb-metz",
  primary: "#8B1E3F", primaryBright: "#C0526A", primaryDeep: "#4A0F21",
  primaryRgb: "139,30,63",
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
  queries: ["sb-metz transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Gauthier Hein", sub:"25 · France · Defender", club:"OGC Nice", pos:"Defender", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Former FC Metz captain officially transferred to OGC Nice for Ligue 1"}
];
const INCOMING = [
  {name:"Vincent Gomis", sub:"Unknown · Senegal · Forward", club:"Génération Foot", pos:"Forward", report:"Vincent Gomis from Génération Foot is joining FC Metz", src:"wiwsport", tier:3, fee:"Undisclosed", truth:75, prob:75, light:"g", trend:"flat", note:"Transfer reported by wiwsport", lastSeen:"2026-08-07T01:42:32Z", baseProb:75}
];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Sb-Metz Official", u:"#"},
  wiwsportVincentGomis: {l:"wiwsport", u:"https://news.google.com/rss/articles/CBMimgFBVV95cUxNRmV5SWxUdlBLUXowTTM1V09UR2lEOEpTVk5aZ19RMVZhWFRRUFJIR0RnQUN0MGtpMkdpMTEzSlZFZF9UU3ZlZm4yWUwwMVAybV9US0RhbXM1X2cyNEo1WmczX3c0YnhqbWNHTk1TZmsxTTM2NVlaVEhndkF1UzIyRVo5V0MwSDhKc2t3QTNoNl9mT3NBc0tLeU1n"},
  leRepublicainLorrainGauthierHein: {l:"Le Republicain Lorrain", u:"https://news.google.com/rss/articles/CBMivAFBVV95cUxPaXNnYVczT0NNd044ektCX1hBenN4amtiZ0t2cklpRjJ4V1BOOVh5Q2RkMWZhYnk0Y1pQcnV0MkJnc0o3b2xKMUt6OFpYNDRtaThLVWJ0X0xMM2pPZC02Q0FjUURPUXBfeWJUTUg4Q2lPWjUxbXJtMnJObF8zSFJ0c3Flb29RQWRabUo1Y2xzbFdmYmpWdXNBZ0YtMFVlM2NQcGZMenIxUzNGVUlaUFJ5RHJwQmxaNW1XYkM3bA"}};

const LINKMAP = {
  "Vincent Gomis": ["wiwsportVincentGomis"],
  "Gauthier Hein": ["leRepublicainLorrainGauthierHein"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Metz · 2026/27 Season`,
  heroLede: `Transfer window active. FC Metz preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};