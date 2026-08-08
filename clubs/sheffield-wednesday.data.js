/* ============================================================
   MERCATO IQ · CLUB DATA · SHEFFIELD WEDNESDAY · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Sheffield Wednesday", mono: "SW", slug: "sheffield-wednesday",
  primary: "#1E3A8A", primaryBright: "#6FA8FF", primaryDeep: "#0F1F4A",
  primaryRgb: "30,58,138",
  breadcrumb: ["England","League One"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "Relegated from Championship (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["sheffield-wednesday transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Mason Burstow", sub:"ST", club:"Hull City", pos:"ST", fee:"Season-long loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan completed and confirmed."}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Mark O'Mahony", sub:"FW", club:"Brighton (youth)", pos:"FW", report:"~1 wk ago", src:"Various", tier:4, fee:"Undisclosed", truth:40, prob:30, light:'y', trend:'flat', note:"Young attacker linked, early stage.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Reece James", sub:"W", club:"Free agent (ex-Wednesday)", pos:"W", report:"~1 wk ago", src:"Various", tier:4, fee:"Free", truth:45, prob:35, light:'y', trend:'flat', note:"Trial return, fans keen on a re-signing.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Davis Keillor-Dunn", sub:"FW", club:"Wrexham", pos:"FW", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:50, prob:40, light:'y', trend:'flat', note:"Wednesday reportedly want a deal for the forward.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];
const OUTGOING = [
  {name:"Ike Ugbo", sub:"FW", club:"Various EFL/European clubs", pos:"FW", report:"~4 days ago", src:"Darren Witcoop", tier:2, fee:"Undisclosed", truth:70, prob:65, light:'g', trend:'up', note:"Club reportedly willing to sell or loan before the 1 September deadline.", lastSeen:"2026-08-04T19:10:50Z", baseProb:65},
  {name:"Owen Bailey", sub:"MF", club:"Doncaster Rovers", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:40, prob:30, light:'y', trend:'flat', note:"Reportedly missed out amid a complication over Callum Paterson.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Tommi O'Reilly", sub:"MF", club:"Notts County", pos:"MF", report:"~1 wk ago", src:"Various", tier:3, fee:"Undisclosed", truth:45, prob:30, light:'y', trend:'flat', note:"Reportedly lost the race for the Aston Villa target to Notts County.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-masonburstow": {l:"Related news search: Mason Burstow", u:"https://news.google.com/search?q=Sheffield%20Wednesday%20Mason%20Burstow%20transfer&hl=en-GB&gl=GB"},
  "gnews-markomahony": {l:"Related news search: Mark O'Mahony", u:"https://news.google.com/search?q=Sheffield%20Wednesday%20Mark%20O%27Mahony%20transfer&hl=en-GB&gl=GB"},
  "gnews-tyleronyango": {l:"Related news search: Tyler Onyango", u:"https://news.google.com/search?q=Sheffield%20Wednesday%20Tyler%20Onyango%20transfer&hl=en-GB&gl=GB"},
  "gnews-reecejames": {l:"Related news search: Reece James", u:"https://news.google.com/search?q=Sheffield%20Wednesday%20Reece%20James%20transfer&hl=en-GB&gl=GB"},
  "gnews-daviskeillordunn": {l:"Related news search: Davis Keillor-Dunn", u:"https://news.google.com/search?q=Sheffield%20Wednesday%20Davis%20Keillor-Dunn%20transfer&hl=en-GB&gl=GB"},
  "witcoop": {l:"Darren Witcoop", u:"https://x.com/DarrenWitcoop"},
  "gnews-owenbailey": {l:"Related news search: Owen Bailey", u:"https://news.google.com/search?q=Sheffield%20Wednesday%20Owen%20Bailey%20transfer&hl=en-GB&gl=GB"},
  "gnews-tommioreilly": {l:"Related news search: Tommi O'Reilly", u:"https://news.google.com/search?q=Sheffield%20Wednesday%20Tommi%20O%27Reilly%20transfer&hl=en-GB&gl=GB"},
  thestarcoukTylerOnyango: {l:"thestar.co.uk", u:"https://news.google.com/rss/articles/CBMirwFBVV95cUxQUk81dXRnWTBiS3hkYzlCU1hTWDFETDRVeTZJTEhzRWktVVM1NzRkVTJ3UGxQbll2Vk5RYmh1TDJGdko2OXlXaDJGdzRDT2FrQWQ4NGRpRVl0Z192LXVab2FsbHgwMEJ0dW12MW5TNXV3SVpDNWozM2Q4bTlGdnpXUmkyYnpRUkhXSFNQb1FwNUxkREcyLXFmNHpJMUpTODU0d0wwVnlDeC10UllnOGg4?oc=5"},
  thestarcoukTylerOnyango1: {l:"thestar.co.uk", u:"https://news.google.com/rss/articles/CBMisgFBVV95cUxPMmoxN3ZzMDYxTFlDbzRrR3FqclMwZkxvZEdkNWFzS095Q3hCWWJ3MTJDTGxRQnk5V0sydml0UHJBRU43MXJSQ1ZVOWJ2bmVySWF4cHRTV0wzYlVpT0oycHVWSzhXQkJRME1ZblhXUXZweWJMSmx3NGFWV2UwcFZrZVhwTEE3eGNxeUZkNXlKbGVkNFFDc1J5Z1NkelpPVmRPZUJqaHlxd1BVOGVweFQ0dklR"}};

const LINKMAP = {
  "Mason Burstow": ["gnews-masonburstow"],
  "Mark O'Mahony": ["gnews-markomahony"],
  "Tyler Onyango": ["gnews-tyleronyango", "thestarcoukTylerOnyango", "thestarcoukTylerOnyango1"],
  "Reece James": ["gnews-reecejames"],
  "Davis Keillor-Dunn": ["gnews-daviskeillordunn"],
  "Ike Ugbo": ["witcoop"],
  "Owen Bailey": ["gnews-owenbailey"],
  "Tommi O'Reilly": ["gnews-tommioreilly"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Sheffield Wednesday · 2026/27 Season`,
  heroLede: `Transfer window active. Sheffield Wednesday preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
