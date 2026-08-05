/* ============================================================
   MERCATO IQ · CLUB DATA · SC FREIBURG · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "SC Freiburg", mono: "SCF", slug: "sc-freiburg",
  primary: "#E2001A", primaryBright: "#FF6259", primaryDeep: "#800010",
  primaryRgb: "226,0,26",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Julian Schuster",
  dof: "Jochen Saier (Sporting CEO)",
  europe: "UEFA Conference League (2026/27)",
  finish: "7th Bundesliga (2025/26)",
  owner: "Member-owned (SC Freiburg e.V.)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.scfreiburg.com/en/"],
  queries: ["SC Freiburg transfer news 2026", "Johan Manzambi Aston Villa", "Freiburg Yannik Engelhardt"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · SC Freiburg"
};

const CONFIRMED_IN = [
  {name:"Mio Backhaus", sub:"20 · GK · Germany", to:"permanent from Werder Bremen", fee:"~€12m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young German goalkeeper signed as the long-term successor in goal."},
  {name:"Keisuke Goto", sub:"23 · CM · Japan", to:"permanent from RSC Anderlecht", fee:"~€10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Japanese midfielder brought in for squad depth and creativity."},
  {name:"Yannik Engelhardt", sub:"25 · DM · Germany", to:"permanent from Como 1907", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 18 Jul: defensive midfielder returns to Freiburg, where he previously played for the U23s (2021-23), after a loan spell at Borussia Mönchengladbach (33 apps in 2025/26). Sporting director Klemens Hartenbach: 'Yannik has very much caught our attention in his first spell here.'"},
  {name:"Yannick Engelhardt", sub:"Defender/midfielder returning to Freiburg", club:"Como 1907", pos:"LB", fee:"~€7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Former Borussia Mönchengladbach player returns to Freiburg after three years away, signed as a primary incoming piece following Manzambi's sale."}
];

const CONFIRMED_OUT = [
  {name:"Johan Manzambi", sub:"19 · CM/W · Switzerland", to:"permanent to Aston Villa", club:"Aston Villa", fee:"£59.5m (~€60m, club-record)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed late Jul via Fabrizio Romano and Freiburg's official channels: a club-record sale for the highly-rated Swiss talent, beating out Newcastle's interest. A major statement fee for a club known for developing and selling young players."},
  {name:"Junior Adamu", sub:"25 · ST · Austria", to:"permanent to FC Schalke 04", club:"FC Schalke 04", fee:"~€800k", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 11 Jun: Austrian forward, who joined in 2023, transfers to newly-promoted Schalke following a loan at Celtic. Hartenbach: 'Junior is a wonderful person we'll remember fondly.'"},
  {name:"Daniel-Kofi Kyereh", sub:"27 · AM · Ghana", to:"free agent", club:"free agent", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; attacking midfielder departs on a free transfer."},
  {name:"Nicolas Höfler", sub:"34 · DM · Germany", to:"retired", club:"retired", fee:"N/A", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Long-serving club captain retires from professional football."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Noah Atubolu", sub:"Germany U21 goalkeeper wanted abroad", club:"Olympique Marseille / Premier League interest", pos:"GK", report:"Atubolu is looking to make a big move away from Freiburg this summer, with Marseille showing concrete interest alongside continued Premier League links; report also floats an unnamed German 'Rekordmeister' (record champion, i.e. Bayern Munich) entering the race.", src:"Sky Sports Germany / Sport1 / Fussball Transfers", tier:2, fee:"Unknown", truth:60, prob:45, light:"y", trend:"flat", note:"Multiple clubs credited with interest but no advanced negotiations confirmed publicly yet; Atubolu was left out of a recent Germany squad in favour of Bayern's Jonas Urbig.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
];

const RISERS = [
  {ar:"⬆", t:"<b>Manzambi's club-record sale to Aston Villa confirmed</b>: another example of Freiburg's develop-and-sell model funding the squad."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Höfler retires</b>: the long-time captain's exit closes a chapter, with Engelhardt returning to help fill the defensive-midfield gap."}
];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Central/attacking midfield", w:35, x:"Manzambi's sale and Höfler's retirement leave notable midfield gaps only partly addressed by Goto and Engelhardt."},
  {p:"Goalkeeper", w:20, x:"Backhaus signed as a long-term successor in goal."}
];

const WATCHLIST = [];

const HUB = {
  sky: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11677/13564492/johan-manzambi-aston-villa-sign-newcastle-target-from-freiburg-in-club-record-lb59-5m-deal"},
  club: {l:"SC Freiburg Official", u:"https://www.scfreiburg.com/en/latest/first-team/news/2026-27/johan-manzambi-joins-aston-villa/"},
  baden24: {l:"Baden24", u:"https://www.baden24.de/sport/sc-freiburg/transfer-ticker-sport-club-scf-sommer-neuzugang-abgang-wechsel-infos-news-94318691.html"},
  skySportsGermanyNoahAtubolu: {l:"Sky Sports Germany", u:"https://sports.yahoo.com/"},
  s90minSportschauYannickEngelhardt: {l:"90min / Sportschau", u:"https://www.90min.com/"}};

const LINKMAP = {
  "Johan Manzambi": ["sky","club", "skySportsGermanyNoahAtubolu"],
  "Yannik Engelhardt": ["baden24"],
  "Junior Adamu": ["baden24"],
  "Noah Atubolu": ["skySportsGermanyNoahAtubolu"],
  "Yannick Engelhardt": ["s90minSportschauYannickEngelhardt"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Club-record Manzambi sale to Aston Villa headlines a busy, profitable summer`,
  heroLede: `Julian Schuster's Freiburg, into the Conference League after a 7th-place finish, have banked a club-record £59.5m sale of 19-year-old Swiss talent <b>Johan Manzambi</b> to Aston Villa, beating Newcastle to the deal. Goalkeeper of the future <b>Mio Backhaus</b> arrives from Werder Bremen, while <b>Yannik Engelhardt</b> returns to the club that developed him after a loan year at Borussia Mönchengladbach. Long-serving captain <b>Nicolas Höfler</b> has retired, and forward Junior Adamu has joined newly-promoted Schalke.`,
  metaRow: `<span>DECISION-MAKER: <b>Jochen Saier</b> (Sporting CEO)</span> <span>HEAD COACH: <b>Julian Schuster</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">7<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">UECL</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">4</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Manzambi's sale is the standout piece of business; Höfler's retirement closes out a captain's career.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€22m+ committed`, x: `Backhaus (€12m) and Goto (€10m) confirmed; Engelhardt's fee undisclosed.` },
  spendOut: { v: `~€60.8m banked`, x: `Manzambi's club-record £59.5m sale to Villa dwarfs the rest of the outgoing business.` },
  methodLegend: ``
};
