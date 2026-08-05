/* ============================================================
   MERCATO IQ · CLUB DATA · EINTRACHT FRANKFURT · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Eintracht Frankfurt",
  mono: "SGE",
  slug: "eintracht-frankfurt",
  primary: "#E20E0E",
  primaryBright: "#FF5252",
  primaryDeep: "#8A0000",
  primaryRgb: "226,14,14",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Adi Hütter",
  dof: "Markus Krösche (Sporting Director)",
  europe: "TBD",
  finish: "7th Bundesliga (2025/26)",
  owner: "Member-owned (Eintracht Frankfurt Fußball AG / e.V.)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.eintracht.de/en/news"],
  queries: ["Eintracht Frankfurt transfer news 2026", "Frankfurt Onyedika Club Brugge", "Frankfurt Aseko Bayern"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Eintracht Frankfurt"
};

const CONFIRMED_IN = [
  {name:"Noel Aseko Nkili", sub:"20 · CM · Germany/Cameroon", to:"permanent from Bayern Munich", fee:"~€12-13m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 18 Jul, after a loan at Hannover 96. Frankfurt's first confirmed midfield reinforcement of the summer."},
  {name:"Otávio", sub:"22 · W · Portugal", to:"permanent from Estrela Amadora", fee:"~€4.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Portuguese winger signed for attacking depth."},
  {name:"Malick Pimpong", sub:"20 · ST · Ghana", to:"permanent from FC Midtjylland", fee:"~€3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young Ghanaian forward brought in as a striker development option."},
  {name:"Malik Pimpong", sub:"Forward", club:"Undisclosed", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed 30 June 2026, handed squad number 35."},
  {name:"Noel Aseko", sub:"Germany U21 international midfielder", club:"Bayern Munich", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Joined 8 July 2026 having impressed on loan at Hannover 96 the previous season."}
];

const CONFIRMED_OUT = [
  {name:"Nathaniel Brown", sub:"22 · LB · Germany", to:"permanent to Bayern Munich", club:"Bayern Munich", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 29 Jul: one of the Bundesliga's most sought-after young full-backs departs for the champions, praised publicly by Antonio Rüdiger ahead of the move."},
  {name:"Rasmus Kristensen", sub:"29 · RB · Denmark", to:"permanent to FC Midtjylland", club:"FC Midtjylland", fee:"~€6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Danish right-back departs for a return to Midtjylland."},
  {name:"Mahmoud Dahoud", sub:"29 · CM · Germany", to:"free agent", club:"free agent", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; midfielder leaves as a free agent."},
  {name:"Aurèle Amenda", sub:"Switzerland international centre-back", club:"Coventry City", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed 17 July 2026 after two years at Frankfurt."}
];

const INCOMING = [
  {name:"Raphael Onyedika", sub:"25 · CM/CB · Nigeria", club:"Club Brugge", pos:"CM/CB", report:"1 Aug 2026", src:"Sky Sports Deutschland", tier:2, fee:"~€9m + bonuses", truth:78, prob:70, light:"g", trend:"up", note:"Agreement reached 1 Aug on a contract through 2031; medical scheduled for the coming days with an official announcement expected the following week. Chose Frankfurt over Saudi Arabia's Al Ittihad - Frankfurt's second midfield addition after Aseko.", lastSeen:"2026-08-04T19:10:50Z", baseProb:70}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Onyedika agreement reached</b>: versatile Nigerian midfielder set to complete a move from Club Brugge pending medical."},
  {ar:"⬆", t:"<b>Elias Baum retained</b>: head coach Adi Hütter publicly commits to keeping the academy right-back amid Borussia Dortmund interest."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Adi Hütter confirms academy full-back <b>Elias Baum</b> will stay at Frankfurt despite reported Borussia Dortmund interest, calling him 'a dynamic full-back who came through our own academy.'"}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Central midfield", w:35, x:"Aseko and the incoming Onyedika address depth here following Dahoud's free departure."},
  {p:"Left-back", w:25, x:"Brown's sale to Bayern leaves a gap that has not yet been directly replaced."}
];

const WATCHLIST = [
  {name:"Elias Baum", club:"Eintracht Frankfurt", pos:"RB", dir:"in", age:"~2 days", tier:2, note:"Retained by Hütter despite Dortmund's interest, developed via a loan at SV Elversberg under new BVB sporting director Nils Ole Book."}
];

const HUB = {
  gfn: {l:"Get German Football News", u:"https://www.getfootballnewsgermany.com/2026/noel-aseko-eintracht-frankfurt/"},
  gfnbaum: {l:"Get German Football News · Baum", u:"https://www.getfootballnewsgermany.com/2026/elias-baum-frankfurt-remain/"},
  sportde: {l:"Sport.de", u:"https://www.sport.de/news/ne17024782/eintracht-frankfurt-erzielt-offenbar-transfer-einigung/"},
  bundesliga: {l:"Bundesliga.com · Official", u:"https://www.bundesliga.com/en/bundesliga/news/eintracht-frankfurt-sign-noel-aseko-bayern-munich-38162"},
  club: {l:"Eintracht Frankfurt Official", u:"https://en.eintracht.de/"},
  bundesligacomRaphaelOnyedika: {l:"Bundesliga.com", u:"https://www.bundesliga.com/en/bundesliga/clubs/eintracht-frankfurt/transfers"},
  wikipediaclubtransferlogMalikPimpong: {l:"Wikipedia (club transfer log)", u:"https://en.wikipedia.org/wiki/2026%E2%80%9327_Eintracht_Frankfurt_season"},
  bundesligacomNoelAseko: {l:"Bundesliga.com", u:"https://www.bundesliga.com/en/bundesliga/clubs/eintracht-frankfurt/news"}};

const LINKMAP = {
  "Noel Aseko Nkili": ["bundesliga","gfn"],
  "Raphael Onyedika": ["sportde", "bundesligacomRaphaelOnyedika"],
  "Nathaniel Brown": ["bundesliga", "bundesligacomNoelAseko"],
  "Elias Baum": ["gfnbaum"],
  "Otávio": ["bundesligacomRaphaelOnyedika"],
  "Malik Pimpong": ["wikipediaclubtransferlogMalikPimpong"],
  "Noel Aseko": ["bundesligacomNoelAseko"],
  "Aurèle Amenda": ["bundesligacomNoelAseko"],
  "Rasmus Kristensen": ["wikipediaclubtransferlogMalikPimpong"]};
const WL_LINKMAP = {
  "Elias Baum": ["gfnbaum"]
};

const PROSE = {
  heroH2: `Frankfurt rebuild the midfield: Aseko in, Onyedika closing, Baum retained despite BVB interest`,
  heroLede: `Adi Hütter's Frankfurt, coming off a 7th-place finish, have moved early and efficiently in midfield: <b>Noel Aseko Nkili</b> arrives from champions Bayern Munich for around €12-13m, with Nigerian international <b>Raphael Onyedika</b> now closing in from Club Brugge for roughly €9m plus bonuses, having chosen Frankfurt over a lucrative Saudi offer. Left-back <b>Nathaniel Brown</b> departs the other way to Bayern. Off the pitch, Hütter has moved to shut down the club's own academy-to-first-team subplot, publicly committing to keep highly-rated right-back Elias Baum amid Dortmund interest.`,
  metaRow: `<span>DECISION-MAKER: <b>Markus Krösche</b> (Sporting Director)</span> <span>HEAD COACH: <b>Adi Hütter</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">7<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">3</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: `<b>Pending:</b> Raphael Onyedika's move from Club Brugge is agreed on personal terms and fee, with a medical scheduled - treat as very likely to complete rather than fully confirmed until officially announced.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Brown's sale to Bayern is the headline departure; Kristensen and Dahoud also confirmed gone.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€20m+ committed`, x: `Aseko (~€12-13m), Otávio (€4.5m) and Pimpong (€3m) confirmed; Onyedika (~€9m) close to completing.` },
  spendOut: { v: `~€6m+ banked`, x: `Kristensen's move to Midtjylland is the only disclosed fee; Brown's fee to Bayern is undisclosed, Dahoud left free.` },
  methodLegend: ``
};
