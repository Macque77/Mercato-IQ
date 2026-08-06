/* ============================================================
   MERCATO IQ · CLUB DATA · WEST HAM UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "West Ham United", mono: "WHU", slug: "west-ham",
  primary: "#7A263A", primaryBright: "#C9AB7C", primaryDeep: "#4A1723",
  primaryRgb: "122,38,58",
  breadcrumb: ["England","Championship"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "18th Premier League (2025/26) - relegated",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["west-ham transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Mateus Fernandes", sub:"21 · CM · Portugal", club:"Tottenham Hotspur", pos:"CM", fee:"£85m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed as part of Spurs' summer rebuild - a club-record sale for West Ham as Fernandes completes a £85m move to Tottenham alongside their Sandro Tonali deal."},
  {name:"Freddie Potts", sub:"MF", club:"Club Brugge", pos:"MF", fee:"£10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Given permission to undergo a medical, per Ben Jacobs, about as advanced as it gets short of the unveiling."},
  {name:"Crysencio Summerville", sub:"24 · W · Netherlands", club:"Al-Hilal", pos:"W", fee:"£60m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 24 Jul 2026: Al-Hilal completed a four-year, £60m deal - nearly double an earlier Roma proposal that had been leading the race before the Saudi club hijacked the move."}
];
const INCOMING = [
  {name:"Simon Adingra", sub:"24 · LW · Ivory Coast", club:"Sunderland", pos:"LW", report:"3 Aug 2026", src:"Keith Downie / Sky Sports", tier:1, fee:"Loan (poss. obligation to buy)", truth:60, prob:42, light:"y", trend:"up", note:"West Ham opened loan talks as a direct replacement following Summerville's sale; Sunderland value the winger at around £30m and are yet to agree terms.", lastSeen:"2026-08-04T19:10:50Z", baseProb:42},
  {name:"Wilson Isidor", sub:"25 · ST · Haiti", club:"Sunderland", pos:"ST", report:"3 Aug 2026", src:"Keith Downie / Sky Sports", tier:2, fee:"~£20m loan-to-buy approach reported", truth:48, prob:22, light:"o", trend:"flat", note:"Downie reports Sunderland will not entertain offers, calling Isidor integral to their Europa League squad - directly contradicted same-day by reports of a fresh West Ham loan-to-buy approach, a genuinely live and unresolved situation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Troy Parrott", sub:"24 · ST · Republic of Ireland", club:"AZ Alkmaar", pos:"ST", report:"3 Aug 2026", src:"Alan Nixon (The72)", tier:2, fee:"Undisclosed", truth:42, prob:20, light:"o", trend:"flat", note:"West Ham have joined a crowded field (also including Fulham, Ajax, Como, Real Betis, PSV) as competition for striker Taty Castellanos.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Joel Veltman", sub:"32 · Netherlands · D", club:"Free Agent", pos:"D", report:"Signed on a free transfer", src:"Voetbal Internationaal", tier:2, fee:"Free", truth:100, prob:100, light:"g", trend:"up", note:"Dutch defender joins as free agent", lastSeen:"2026-08-06T14:21:37Z", baseProb:100}
];
const OUTGOING = [];
const RISERS = [
  {ar:"⬆", t:"<b>Simon Adingra emerges as Summerville's replacement</b>: West Ham have opened loan talks with Sunderland."}
];
const FALLERS = [
  {ar:"⬇", t:"<b>Mateus Fernandes</b>: permanent departure to Tottenham Hotspur now done and official for £85m."},
  {ar:"⬇", t:"<b>Crysencio Summerville</b>: £60m permanent exit to Al-Hilal now done and official, after Al-Hilal hijacked an earlier Roma move."}
];
const NEW = [
  {ar:"✦", t:"West Ham bank a club-record £85m fee as Mateus Fernandes completes his move to Tottenham Hotspur, and a further £60m as Crysencio Summerville departs for Al-Hilal - with Sunderland's Simon Adingra the leading name to replace him."}
];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-mateusfernandes": {l:"Related news search: Mateus Fernandes", u:"https://news.google.com/search?q=West%20Ham%20United%20Mateus%20Fernandes%20transfer&hl=en-GB&gl=GB"},
  "gnews-freddiepotts": {l:"Related news search: Freddie Potts", u:"https://news.google.com/search?q=West%20Ham%20United%20Freddie%20Potts%20transfer&hl=en-GB&gl=GB"},
  skySummerville: {l:"Sky Sports · Summerville official", u:"https://www.skysports.com/football/news/11095/13565872/crysencio-summerville-transfer-news-al-hilal-complete-lb60m-signing-of-netherlands-international-from-west-ham"},
  readwesthamAdingra: {l:"ReadWestHam · Adingra", u:"https://readwestham.com/2026/08/03/west-ham-open-talks-to-sign-20-5m-premier-league-winger/"},
  the72Isidor: {l:"The72 · Isidor", u:"https://the72.co.uk/2026/08/03/west-ham-target-wilson-isidor-sunderland-stay/"},
  the72Parrott: {l:"The72 · Parrott", u:"https://the72.co.uk/2026/08/03/west-ham-target-az-alkmaar-striker-troy-parrott/"},
  voetbalInternationalJoelVeltman: {l:"Voetbal International", u:"https://www.vi.nl/"},
  voetbalInternationaalJoelVeltman: {l:"Voetbal Internationaal", u:"https://www.vi.nl/nieuws/transfervrije-veltman-tekent-bij-west-ham-united"}};

const LINKMAP = {
  "Mateus Fernandes": ["gnews-mateusfernandes"],
  "Freddie Potts": ["gnews-freddiepotts"],
  "Crysencio Summerville": ["skySummerville"],
  "Simon Adingra": ["readwesthamAdingra"],
  "Wilson Isidor": ["the72Isidor"],
  "Troy Parrott": ["the72Parrott"],
  "Joel Veltman": ["voetbalInternationalJoelVeltman", "voetbalInternationaalJoelVeltman"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `West Ham United · 2026/27 Season`,
  heroLede: `Transfer window active. West Ham United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};