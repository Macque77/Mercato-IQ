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
  {name:"Vincent Gomis", sub:"Unknown · Senegal · Forward", club:"Génération Foot", pos:"Forward", report:"Vincent Gomis from Génération Foot joining FC Metz", src:"On-page", tier:3, fee:"Unknown", truth:75, prob:70, light:"g", trend:"down", note:"Existing rumour, no material update in snippets", lastSeen:"2026-08-08T18:06:11Z", baseProb:70}
];
const OUTGOING = [
  {name:"Michel Mboula", sub:"Unknown · Unknown · Forward", club:"FC Metz", pos:"Forward", report:"Metz repelled a first offer from Bursaspor for Michel Mboula", src:"L'Équipe", tier:2, fee:"Unknown", truth:65, prob:40, light:"y", trend:"flat", note:"Bursaspor interest rejected; player likely to stay unless higher bid arrives", lastSeen:"2026-08-08T18:06:11Z", baseProb:40}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Sb-Metz Official", u:"#"},
  wiwsportVincentGomis: {l:"wiwsport", u:"https://news.google.com/rss/articles/CBMimgFBVV95cUxNRmV5SWxUdlBLUXowTTM1V09UR2lEOEpTVk5aZ19RMVZhWFRRUFJIR0RnQUN0MGtpMkdpMTEzSlZFZF9UU3ZlZm4yWUwwMVAybV9US0RhbXM1X2cyNEo1WmczX3c0YnhqbWNHTk1TZmsxTTM2NVlaVEhndkF1UzIyRVo5V0MwSDhKc2t3QTNoNl9mT3NBc0tLeU1n"},
  leRepublicainLorrainGauthierHein: {l:"Le Republicain Lorrain", u:"https://news.google.com/rss/articles/CBMivAFBVV95cUxPaXNnYVczT0NNd044ektCX1hBenN4amtiZ0t2cklpRjJ4V1BOOVh5Q2RkMWZhYnk0Y1pQcnV0MkJnc0o3b2xKMUt6OFpYNDRtaThLVWJ0X0xMM2pPZC02Q0FjUURPUXBfeWJUTUg4Q2lPWjUxbXJtMnJObF8zSFJ0c3Flb29RQWRabUo1Y2xzbFdmYmpWdXNBZ0YtMFVlM2NQcGZMenIxUzNGVUlaUFJ5RHJwQmxaNW1XYkM3bA"},
  footMercatoIdrisMohamed: {l:"Foot Mercato", u:"https://news.google.com/rss/articles/CBMihgFBVV95cUxOM1NtU2ZnQTRvR3F6MVlya2VMMmIyZEIwTmtkcTRZUGQzTklWUThOOTZZMnBQbFRfUllGWS00eVZLRjY2WGs0NmhFemhTQ0xMaHZkWjZ3alBRVzVtOUs2MlhhM3huZGNXQ3BXdGwxNDdXaEh5TnpFOElkSWNrUG92Y1g0QUo4dw"},
  lquipeCristianDevenish: {l:"L'Équipe", u:"https://news.google.com/rss/articles/CBMi0wFBVV95cUxPRFlKMDJkSkJPallQa1lkTGJfbVlxT282S0lIMlVETnhWRFBmaDltOE1jN29MVlVyLWhHdG5tcXBYY3hLQXI5WVh6MnAzMVhVOFVHZlAzd1V1UE5zSV9Qb2RRbUVtT3poUk9TT0tQNjJxd2JreDdnaEhDUGIzWi1hZkpqVG9mUU12Q3lLLThhWW1RcGVEanIzYktHNXhsX1lUQ2dYb3pYRGEwV0NLX0FHYW5FdzBCWVZhWTdsR1FCVVZjVUVCdi02UVNNTkZkTnlmaU5Z"},
  lquipeMichelMboula: {l:"L'Équipe", u:"https://news.google.com/rss/articles/CBMiwAFBVV95cUxQQ1FNMHpnTVJvN1Q2Mks2eDZfYWw4azY0a3NvQ1R6OFFxNHhGcWFDMC0yN1VJeWN4ZkhwT0N2bEpPcWNmVDdUcXVXN0psN1ROQ0llRlJJWWpRTFVadWx6WUdUR2h5WHZSYTRyNFQzQ2Q3M3Z6b0Q2ZFFvcHJiS3FrM3lqSnpIZXQwUjkyTXYxMW1KNXFwMXV2dmhKX01ST0paTkZWc3YxSzFfdDFQSDNLMFZwMURoLWNfTzNpeVhuRWQ"}};

const LINKMAP = {
  "Vincent Gomis": ["wiwsportVincentGomis"],
  "Gauthier Hein": ["leRepublicainLorrainGauthierHein"],
  "Idris Mohamed": ["footMercatoIdrisMohamed"],
  "Cristian Devenish": ["lquipeCristianDevenish"],
  "Michel Mboula": ["lquipeMichelMboula"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Metz · 2026/27 Season`,
  heroLede: `Transfer window active. FC Metz preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};