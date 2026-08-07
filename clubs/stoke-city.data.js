/* ============================================================
   MERCATO IQ · CLUB DATA · STOKE CITY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Stoke City", mono: "SC", slug: "stoke-city",
  primary: "#D71920", primaryBright: "#FF6B6B", primaryDeep: "#7A0E12",
  primaryRgb: "215,25,32",
  breadcrumb: ["England","Championship"]
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
  queries: ["stoke-city transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Ethan Galbraith", sub:"MF", club:"Swansea City", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival."},
  {name:"Lewis Koumas", sub:"18 · FW", club:"Liverpool", pos:"FW", fee:"Season-long loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"BBC Sport confirms the loan; already ineligible for the season opener due to being registered too late."}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Jaden Dixon", sub:"Unknown · Unknown · Unknown", club:"Arsenal", pos:"Unknown", report:"Joined Arsenal", src:"Arsenal.com", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Departed Stoke City", lastSeen:"2026-08-07T01:42:32Z", baseProb:100}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-ethangalbraith": {l:"Related news search: Ethan Galbraith", u:"https://news.google.com/search?q=Stoke%20City%20Ethan%20Galbraith%20transfer&hl=en-GB&gl=GB"},
  "gnews-lewiskoumas": {l:"Related news search: Lewis Koumas", u:"https://news.google.com/search?q=Stoke%20City%20Lewis%20Koumas%20transfer&hl=en-GB&gl=GB"},
  "orourke": {l:"Pete O'Rourke (Football Insider)", u:"https://x.com/talkSPORT_PeteO"},
  stokeCityFCGeorgeHirst: {l:"Stoke City FC", u:"https://news.google.com/rss/articles/CBMiswFBVV95cUxPdmdtZS1wcXlEQlQyYzdubVRQNkFJcEhTYld2eVdJZmd5SE1ybHhyV0tHdldEbmI3SHlza0c2dF9TRjNFWTN3SDVSNXhCajZzRXp4dHRvdExIZnJ2a3RaN19JWXBuMnNiUU5VMk93MWg2bnhaT21aWmhxTUttYWdGRGhBS1p3cElpZ1RFUzNfUUtyamJsSmVUWWJDaWI5RDZkRXZ5Ny16TE5PQnFTYXFSZUEzSQ"},
  arsenalcomJadenDixon: {l:"Arsenal.com", u:"https://news.google.com/rss/articles/CBMigAFBVV95cUxOS0NwbFJyNXRjN3pRNG10TmIzM0hHU2tPMmR5QmJnNHlKSDNOdnZ6YkpXd3JTTFUxOUxkYVdmSlhQZ0FLSzk1T1otZG5MN24zWENGWVJnRVpzcC0zR1BibVpjanRuRl9vM3pQZEY3YjBHQVZUcERNMXdJVnNmcXhreQ"}};

const LINKMAP = {
  "Ethan Galbraith": ["gnews-ethangalbraith"],
  "Lewis Koumas": ["gnews-lewiskoumas"],
  "George Hirst": ["orourke", "stokeCityFCGeorgeHirst"],
  "Jaden Dixon": ["arsenalcomJadenDixon"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Stoke City · 2026/27 Season`,
  heroLede: `Transfer window active. Stoke City preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};