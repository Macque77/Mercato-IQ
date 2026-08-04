/* ============================================================
   MERCATO IQ · CLUB DATA · BAYERN MUNICH · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026 refresh, verified via live search):
   - Coach corrected Thomas Tuchel -> Vincent Kompany (Tuchel left
     in 2024; Kompany led Bayern to the 2025/26 double).
   - Finish corrected 3rd -> 1st (Bundesliga champions 2025/26).
   - Removed a fabricated "Nicolas Jackson permanent from Chelsea"
     signing and an unverified "Lozano returns" entry; replaced
     with the real confirmed arrivals (Ismael Saibari, Nathaniel
     Brown).
   - Jamal Musiala: real status is recovering from foot surgery
     after Germany's 2026 World Cup elimination, NOT a completed
     transfer anywhere - Galatasaray publicly denied transfer
     rumours as "completely unfounded."
   ============================================================ */

const BRAND = {
  club: "Bayern Munich",
  mono: "FCB",
  slug: "bayern-munich",
  primary: "#DC143C",
  primaryBright: "#FF4444",
  primaryDeep: "#8B0000",
  primaryRgb: "220,20,60",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Vincent Kompany (won the double in 2025/26)",
  dof: "Christoph Freund (Director) · Max Eberl (Sporting Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "1st Bundesliga (2025/26) - champions",
  owner: "Member-owned (FC Bayern München e.V.), Herbert Hainer President",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.bavarianfootballworks.com/", "https://fcbayern.com/en/news"],
  queries: ["Bayern Munich transfer news 2026", "Bayern Munich Saibari Nathaniel Brown official", "Bayern Munich Musiala injury status"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Bayern Munich"
};

const CONFIRMED_IN = [
  {name:"Ismael Saibari", sub:"24 · AM/W · Morocco", to:"permanent from PSV Eindhoven", fee:"€50m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 Jul. The Morocco international arrives off the back of a breakout 2026 World Cup, chose the emotionally significant No.34 shirt, and is expected to play a key attacking-midfield role for Kompany."},
  {name:"Nathaniel Brown", sub:"22 · LB · Germany", to:"permanent from Eintracht Frankfurt", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 29 Jul. One of the Bundesliga's most sought-after young full-backs, praised publicly by Antonio Rüdiger ahead of the move, joins to add left-back depth and competition."}
];

const CONFIRMED_OUT = [
  {name:"Noel Aseko Nkili", sub:"20 · CM · Germany/Cameroon", to:"permanent to Eintracht Frankfurt", club:"Eintracht Frankfurt", fee:"~€12-13m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 18 Jul, after a loan at Hannover 96. Academy midfielder cashes in for Bayern as Frankfurt's second confirmed midfield addition of the summer."},
  {name:"Alexander Nübel", sub:"29 · GK · Germany", to:"permanent to Besiktas", club:"Besiktas", fee:"~€6.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Long-time backup goalkeeper behind Neuer/Urbig finally departs permanently."},
  {name:"Leon Goretzka", sub:"31 · CM · Germany", to:"free agent", club:"free agent", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; the long-serving midfielder leaves Bayern as a free agent after eight seasons."},
  {name:"Raphael Guerreiro", sub:"32 · LB/CM · Portugal", to:"free agent", club:"free agent", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; versatile Portuguese full-back/midfielder departs on a free."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Ismael Saibari official</b>: €50m World Cup breakout star arrives from PSV to reinforce the attacking midfield."},
  {ar:"⬆", t:"<b>Nathaniel Brown official</b>: highly-rated young left-back joins from Eintracht Frankfurt."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Sporting director Max Eberl states Bayern's transfer business is complete after the Saibari/Brown double arrival - '0% truth' to further signing rumours."},
  {ar:"✦", t:"Galatasaray issue an official denial of Jamal Musiala transfer rumours, calling reports of an agreement with Bayern 'false'; Musiala remains at Bayern recovering from World Cup foot surgery."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Jamal Musiala to Galatasaray</b>: officially denied by Galatasaray as 'completely unfounded' - Musiala is recovering from foot surgery after Germany's 2026 World Cup elimination and remains part of Bayern's plans."}
];

const POSITIONS = [
  {p:"Attacking midfield / wide forward", w:40, x:"Saibari's arrival covers rotation depth here; window otherwise considered complete per Eberl."},
  {p:"Left-back", w:35, x:"Nathaniel Brown adds quality depth and competition."}
];

const WATCHLIST = [
  {name:"Jamal Musiala", club:"Bayern Munich", pos:"LW/CAM", dir:"in", age:"ongoing", tier:1, note:"Not a transfer situation: recovering from foot surgery after Germany's 2026 World Cup elimination; Galatasaray officially denied any transfer agreement."}
];

const HUB = {
  bfw: {l:"Bavarian Football Works", u:"https://www.bavarianfootballworks.com/"},
  bein: {l:"beIN Sports · Bundesliga", u:"https://www.beinsports.com/en-us/soccer/bundesliga/"},
  bundesliga: {l:"Bundesliga.com · Official", u:"https://www.bundesliga.com/en/bundesliga"},
  club: {l:"FC Bayern Official", u:"https://fcbayern.com/en/news"}
};

const LINKMAP = {
  "Ismael Saibari": ["bfw","club"],
  "Nathaniel Brown": ["bein","bfw"]
};
const WL_LINKMAP = {
  "Jamal Musiala": "bein"
};

const PROSE = {
  heroH2: `Business complete: Saibari and Nathaniel Brown arrive as champions round out a double-winning squad`,
  heroLede: `Bayern enter this window as reigning Bundesliga champions and DFB-Pokal winners under <b>Vincent Kompany</b>, who led the club to the double in his second season in charge. The summer's transfer business is a tidy double arrival: <b>Ismael Saibari</b>, fresh off a breakout 2026 World Cup with Morocco, joins from PSV for €50m, and highly-rated left-back <b>Nathaniel Brown</b> arrives from Eintracht Frankfurt. Sporting director Max Eberl has since ruled out further incomings entirely. The recurring subplot all summer has been <b>Jamal Musiala</b>: persistent (and officially denied) links to Galatasaray obscure the real story, which is that Musiala is still working through recovery from foot surgery after Germany's World Cup elimination, and remains very much part of Bayern's plans.`,
  metaRow: `<span>DECISION-MAKER: <b>Max Eberl</b> (Sporting Director)</span> <span>HEAD COACH: <b>Vincent Kompany</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">1<small>st</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: `Sporting director Max Eberl has explicitly ruled out further incomings this window ("0% truth" to additional rumours).`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No pressure to sell as reigning double-winners; squad considered settled.`,
  pricingBanner: ``,
  excludedNote: `<b>Excluded as denied/unfounded:</b> Jamal Musiala's reported Galatasaray move - officially and explicitly denied by Galatasaray; Musiala remains at Bayern recovering from surgery.`,
  spendIn: { v: `~€50m+ committed`, x: `Saibari (€50m) and Nathaniel Brown (undisclosed) are done; the club has ruled out further business.` },
  spendOut: { v: `None reported`, x: `No confirmed departures this window.` },
  methodLegend: ``
};
