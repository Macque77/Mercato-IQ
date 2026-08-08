/* ============================================================
   MERCATO IQ · CLUB DATA · BRISTOL ROVERS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Bristol Rovers", mono: "BR", slug: "bristol-rovers",
  primary: "#0057A8", primaryBright: "#5CA9FF", primaryDeep: "#00335F",
  primaryRgb: "0,87,168",
  breadcrumb: ["England","League Two"]
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
  queries: ["bristol-rovers transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Richie Smallwood", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer"},
  {name:"Kofi Balmer", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent transfer"},
  {name:"Tommy Leigh", sub:"", club:"", pos:"", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan deal"},
  {name:"Tom James", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Transfer completed"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Richie Smallwood", sub:"", club:"", pos:"", report:"Permanent transfer secured", src:"bristolrovers.co.uk", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100},
  {name:"Kofi Balmer", sub:"", club:"", pos:"", report:"Permanent transfer completed", src:"bristolrovers.co.uk", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100},
  {name:"Tommy Leigh", sub:"", club:"", pos:"", report:"Loan deal secured", src:"bristolrovers.co.uk", tier:2, fee:"Loan", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100},
  {name:"Tom James", sub:"", club:"", pos:"", report:"Transfer completed", src:"bristolrovers.co.uk", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100}
];
const OUTGOING = [
  {name:"Shaq Forde", sub:"Unknown · Unknown · Unknown", club:"Bristol Rovers", pos:"Unknown", report:"Bid rejected; transfer-listed", src:"Bristol Live", tier:2, fee:"Unknown", truth:85, prob:50, light:"y", trend:"down", note:"Transfer-listed with rejected bid; seeking departure", lastSeen:"2026-08-07T23:07:30Z", baseProb:50, dead:true, deadReason:"Bid rejected and transfer-listed; no recent concrete exit reported"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Bristol-Rovers Official", u:"#"},
  bristolRoversFootballClubRichieSmallwood: {l:"Bristol Rovers Football Club", u:"https://news.google.com/rss/articles/CBMimgFBVV95cUxPaDRyX3dROUotVjlpNlFDeWhJM1o4Q21qU0tlZ3hiZG5Zc2U4dF9LN1lzWmFQMnJubUJZaUN4MFJVR3pDT19PN29XazFjbGdvNjdCY1VJWEdBYXRSbVkwbUI2eU9IZnRacXVadXBua1FVVktGZENELTNVamw0R1FrVGcyR0pNV0lRMzJHRDQxWW02RG1mMnRCNWhB?oc=5"},
  bristolRoversFootballClubKofiBalmer: {l:"Bristol Rovers Football Club", u:"https://news.google.com/rss/articles/CBMilgFBVV95cUxNa0V0eDY0czNOelA5dHo5VEJ1WENjUzZQWEU5eUJ2ZFhqekgwWU9lV2xHbEwtWk1ITkVuTENBY1FJNFVteXVOSWJPSjNrY3RUWmFtdGhWZHpVSVNneUFWYzEwdWx5RDcwcEctN2pwTlVjTGVKTmZRZEl0REROMExadUFRS2xuWTc2aXBVY2NHY2VvejIzVHc?oc=5"},
  bristolRoversFootballClubTommyLeigh: {l:"Bristol Rovers Football Club", u:"https://news.google.com/rss/articles/CBMihwFBVV95cUxNaE1WUVp5dS13eWZUQzY1TFRORUpYUFk1WnJ6ak1jbldRX2w0LTBiYTdJcWYwMEMzSnRJa2c0T0lMMnNSQVZJdlEycGhXQ0o0WEhvMHFycTFOdGVfYjMybzEyNlhXbzdfVWJXbHNWZ1V6bnAyQ2szeUtiaVZWeXJZV2piZ1Y1Tlk?oc=5"},
  bristolRoversFootballClubTomJames: {l:"Bristol Rovers Football Club", u:"https://news.google.com/rss/articles/CBMihAFBVV95cUxNMDdPUFcxRkhzMDZvZHBpSTdWb3NEamt6NWlTckVEdHpYTXJWMy1wVnZ5cC00eWh3Z2J1ODdKVW56VEMzRlJSS250eHNmOGM2R1lNZnNTcjRGZkFLVDloeHJhWk9oVnBOWW5YYmx4NHpBQnhRZ3dNZTV6V0JwcUJRRDFuUE8?oc=5"},
  bristolpostcoukShaqForde: {l:"bristolpost.co.uk", u:"https://news.google.com/rss/articles/CBMiowFBVV95cUxOZnZuRVVjeHgxM3d4cmFOTDJHanN2cWNFNmo5Z0Zta0JCdW5vdElnaVlFSV9FQ0dza3lTZFdjY3BsNW9QS0ptTkU3V0kyUDJ3azhGalYxeWhiOVhlMHlVQ1RndS0ySDB5MFFxdF9yQ2FidkR1ZkY3WjA3ZHFvc2RuSGFmZjNERDYxQjJCMTFRU2JNOWtvUFYwRkVKRDJ2V2dwM19R?oc=5"},
  bristolRoversFootballClubRichieSmallwood1: {l:"Bristol Rovers Football Club", u:"https://news.google.com/rss/articles/CBMimgFBVV95cUxPaDRyX3dROUotVjlpNlFDeWhJM1o4Q21qU0tlZ3hiZG5Zc2U4dF9LN1lzWmFQMnJubUJZaUN4MDJSVUN6Q081b1cHZzFjbGdvNjdCY1VJWEdBYXRSbVkwbUI2eU9IZnRacXVadXBua1FVVktGZENELTNVamw0R1FrVGcyR0pNV0lRMzJHRDQxWW02RG1mMnRCNWhB?oc=5"}};

const LINKMAP = {
  "Richie Smallwood": ["bristolRoversFootballClubRichieSmallwood", "bristolRoversFootballClubRichieSmallwood1"],
  "Kofi Balmer": ["bristolRoversFootballClubKofiBalmer"],
  "Tommy Leigh": ["bristolRoversFootballClubTommyLeigh"],
  "Tom James": ["bristolRoversFootballClubTomJames"],
  "Shaq Forde": ["bristolpostcoukShaqForde"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Bristol Rovers · 2026/27 Season`,
  heroLede: `Transfer window active. Bristol Rovers preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};