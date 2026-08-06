/* ============================================================
   MERCATO IQ · CLUB DATA · CELTIC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Celtic", mono: "CEL", slug: "celtic",
  primary: "#018749", primaryBright: "#2ECC71", primaryDeep: "#00512B",
  primaryRgb: "1,135,73",
  breadcrumb: ["Scotland","Premiership"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "TBD (2025/26)",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["celtic transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Kasper Hogh", sub:"ST", club:"Bodo/Glimt", pos:"ST", fee:"Club-record fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer, a club-record fee."}
];
const CONFIRMED_OUT = [
  {name:"Josh Clarke", sub:"GK", club:"Partick Thistle", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer."},
  {name:"Ben McPherson", sub:"DF", club:"Partick Thistle", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer."},
  {name:"Ben Summers", sub:"MF", club:"Ayr United", pos:"MF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free transfer."},
  {name:"Dara Jikiemi", sub:"Scotland U16 captain", club:"permanent to Liverpool", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young academy prospect departs on a 5-year contract; Romano confirmed with 'Here We Go'."}
];
const INCOMING = [
  {name:"Gvidas Gineitis", sub:"MF", club:"Torino", pos:"MF", report:"~1 wk ago", src:"BBC / Football Insider / Daily Record", tier:2, fee:"~£12m", truth:75, prob:60, light:'g', trend:'up', note:"Agent contact reportedly made, Torino want around £12m and Celtic are said to be preparing an improved offer.", lastSeen:"2026-08-04T19:10:50Z", baseProb:60},
  {name:"Claudio Braga", sub:"FW", club:"Heart of Midlothian", pos:"FW", report:"~1 wk ago", src:"Yahoo Sports", tier:3, fee:"Undisclosed", truth:50, prob:30, light:'y', trend:'flat', note:"Celtic reportedly keeping close tabs, early stage.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Fares Ghedjemis", sub:"23 · Algeria · W", club:"Frosinone", pos:"Winger", report:"Celtic have had an opening bid in the region of £6m to £8m turned down, with Frosinone holding out for more than £10m for the winger who scored 15 goals as they won promotion to Serie A. Rangers have also bid.", src:"The Scotsman", tier:2, fee:"£10m-plus", truth:75, prob:40, light:"y", trend:"up", note:"Sourcing is Scottish and Italian media rather than a tier-1 reporter, and much of the noise about the player favouring Celtic traces back to fan-facing sites. The gap between Celtic's offer and Frosinone's valuation is real, so a collapse is very possible.", lastSeen:"2026-08-05T17:03:23Z", baseProb:40},
  {name:"Greg Taylor", sub:"28 · LB · Scotland", club:"PAOK", pos:"LB", report:"31 Jul 2026", src:"67 Hail Hail (via Daily Record, Greece)", tier:2, fee:"Undisclosed", truth:50, prob:33, light:'y', trend:'up', note:"Taylor has fallen out of favour under PAOK's new coach after just a year away, with a Celtic return said to be gathering momentum.", lastSeen:"2026-08-04T19:10:50Z", baseProb:33},
  {name:"Haissem Hassan", sub:"unknown · unknown · W", club:"Real Oviedo", pos:"W", report:"Celtic closing in on signing winger from Real Oviedo for significant fee", src:"Daily Record", tier:3, fee:"Significant", truth:75, prob:70, light:"g", trend:"flat", note:"Deal described as 'ON' with Oviedo set to bank significant fee", lastSeen:"2026-08-06T14:21:37Z", baseProb:70}
];
const OUTGOING = [
  {name:"Arne Engels", sub:"22 · MF · Belgium", club:"West Ham United", pos:"MF", report:"31 Jul 2026", src:"Sky Sports", tier:1, fee:"Undisclosed", truth:75, prob:58, light:'g', trend:'up', note:"West Ham are in active negotiations for the Belgian midfielder, fending off earlier Nottingham Forest interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:58},
  {name:"Dinko Horkas", sub:"unknown · unknown · unknown", club:"Celtic", pos:"unknown", report:"Las Palmas publicly claim Celtic deal structure unattractive", src:"Daily Record", tier:3, fee:"Unknown", truth:40, prob:30, light:"y", trend:"flat", note:"Las Palmas have gone public stating deal structure is unattractive; no clear progress", lastSeen:"2026-08-06T14:21:37Z", baseProb:30}
];
const DEAD = [
  {name:"Alistair Johnston", sub:"27 · Canada · RB", club:"Celtic", pos:"RB", report:"Everton interest has cooled as Celtic maintain high asking price; Johnston has expressed desire to move", src:"Daily Record", tier:3, fee:"Undisclosed (high asking price)", truth:45, prob:35, light:"y", trend:"down", note:"Transfer interest from Everton has cooled due to Celtic's demanding price; Johnston keen but deal stalled", lastSeen:"2026-08-06T14:21:37Z", baseProb:35, dir:"out", deadReason:"link went cold", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Reo Hatate", sub:"MF", club:"Undisclosed", pos:"MF", report:"~2 wks ago", src:"The Scottish Sun", tier:4, fee:"Undisclosed", truth:40, prob:30, light:'y', trend:'flat', note:"Vague, early-stage exit speculation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"No fresh snippet; assume resolved or stale (2+ weeks)", dir:"out", deadAt:"2026-08-06T14:21:38Z"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-kasperhogh": {l:"Related news search: Kasper Hogh", u:"https://news.google.com/search?q=Celtic%20Kasper%20Hogh%20transfer&hl=en-GB&gl=GB"},
  "gnews-joshclarke": {l:"Related news search: Josh Clarke", u:"https://news.google.com/search?q=Celtic%20Josh%20Clarke%20transfer&hl=en-GB&gl=GB"},
  "gnews-benmcpherson": {l:"Related news search: Ben McPherson", u:"https://news.google.com/search?q=Celtic%20Ben%20McPherson%20transfer&hl=en-GB&gl=GB"},
  "gnews-bensummers": {l:"Related news search: Ben Summers", u:"https://news.google.com/search?q=Celtic%20Ben%20Summers%20transfer&hl=en-GB&gl=GB"},
  "bbc": {l:"BBC Sport", u:"https://www.bbc.co.uk/sport/football"},
  "footballinsider": {l:"Football Insider", u:"https://www.footballinsider247.com/"},
  "dailyrecord": {l:"Daily Record", u:"https://www.dailyrecord.co.uk/sport/football/"},
  "yahoosport": {l:"Yahoo Sports", u:"https://uk.sports.yahoo.com/"},
  "scottishsun": {l:"The Scottish Sun", u:"https://www.thescottishsun.co.uk/sport/"},
  "teamtalkGhedjemis": {l:"TEAMtalk · Ghedjemis", u:"https://www.teamtalk.com/news/celtic-transfer-news-fares-ghedjemis-bid-rejected-next-move"},
  "hailhailTaylor": {l:"67 Hail Hail · Taylor", u:"https://www.67hailhail.com/transfers/greg-taylor-set-for-significant-developments-with-paok-ready-to-allow-celtic-return/"},
  "skySportsEngels": {l:"Sky Sports · Engels", u:"https://www.skysports.com/football/news/11095/13568688/west-ham-transfer-news-hammers-in-talks-to-sign-celtic-midfielder-arne-engels-amid-premier-league-interest"},
  fabrizioRomanoviaRoundtableDaraJikiemi: {l:"Fabrizio Romano (via Roundtable)", u:"https://roundtable.io/sports/soccer/scottish-premiership/celtic/news/here-we-go---fabrizio-romano-confirms-celtic-transfer"},
  theScotsmanFaresGhedjemis: {l:"The Scotsman", u:"https://www.scotsman.com/sport/football/celtic/latest-celtic-news/celtic-and-rangers-face-potential-eight-figure-transfer-fee-in-battle-to-sign-fares-ghedjemis-8839335"},
  dailyRecordHaissemHassan: {l:"Daily Record", u:"https://www.dailyrecord.co.uk/sport/football/"}};

const LINKMAP = {
  "Kasper Hogh": ["gnews-kasperhogh"],
  "Josh Clarke": ["gnews-joshclarke"],
  "Ben McPherson": ["gnews-benmcpherson"],
  "Ben Summers": ["gnews-bensummers"],
  "Gvidas Gineitis": ["bbc", "footballinsider", "dailyrecord"],
  "Claudio Braga": ["yahoosport"],
  "Alistair Johnston": ["footballinsider", "dailyRecordHaissemHassan"],
  "Reo Hatate": ["scottishsun"],
  "Fares Ghedjemis": ["teamtalkGhedjemis", "theScotsmanFaresGhedjemis"],
  "Greg Taylor": ["hailhailTaylor"],
  "Arne Engels": ["skySportsEngels"],
  "Dara Jikiemi": ["fabrizioRomanoviaRoundtableDaraJikiemi"],
  "Haissem Hassan": ["dailyRecordHaissemHassan"],
  "Dinko Horkas": ["dailyRecordHaissemHassan"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Celtic · 2026/27 Season`,
  heroLede: `Transfer window active. Celtic preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
