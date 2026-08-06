/* ============================================================
   MERCATO IQ · CLUB DATA · TSG HOFFENHEIM · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "TSG Hoffenheim", mono: "TSG", slug: "tsg-hoffenheim",
  primary: "#1C63B7", primaryBright: "#5CA9FF", primaryDeep: "#0E3868",
  primaryRgb: "28,99,183",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Christian Ilzer",
  dof: "Andreas Schicker (Sporting Director)",
  europe: "UEFA Europa League (2026/27)",
  finish: "5th Bundesliga (2025/26)",
  owner: "Dietmar Hopp (majority shareholder/patron)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.achtzehn99.de/en/news"],
  queries: ["TSG Hoffenheim transfer news 2026", "Bazoumana Toure Newcastle", "Fisnik Asllani RB Leipzig"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · TSG Hoffenheim"
};

const CONFIRMED_IN = [
  {name:"Adam Daghim", sub:"20 · FW · Denmark", to:"permanent from RB Salzburg", fee:"€14.5m (€13m + €1.5m add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Aug after a 2025/26 loan spell at Wolfsburg (30 apps, 2 goals). Signed to fill the attacking void left by Bazoumana Touré's departure; sporting director Andreas Schicker called him 'our clear preferred option.'"},
  {name:"Nathan De Cat", sub:"20 · CB · Belgium", to:"permanent from RSC Anderlecht", fee:"~€20m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Belgian centre-back, one of the summer's most significant defensive investments."},
  {name:"Mats Rots", sub:"22 · CM · Netherlands", to:"permanent from FC Twente", fee:"~€12m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Dutch midfielder brought in for squad depth and creativity."},
  {name:"Patrick Wimmer", sub:"Winger/Forward", club:"VfL Wolfsburg", pos:"LW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Austrian international winger joined Hoffenheim from Wolfsburg and is training with the squad at their Austrian pre-season camp."}
];

const CONFIRMED_OUT = [
  {name:"Bazoumana Touré", sub:"20 · W · Ivory Coast", to:"permanent to Newcastle United", club:"Newcastle United", fee:"£42m (~€50m)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 5 Jul: a club-record sale for the Ivorian winger, with Hoffenheim confirming the record fee publicly. Daghim's arrival directly replaces him."},
  {name:"Grischa Prömel", sub:"31 · CM · Germany", to:"free to VfB Stuttgart", club:"VfB Stuttgart", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; experienced midfielder moves on a free transfer."},
  {name:"Kevin Akpoguma", sub:"30 · CB", to:"free agent", club:"free agent", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; long-serving centre-back departs on a free."},
  {name:"Ihlas Bebou", sub:"30 · W/ST · Togo", to:"free agent", club:"free agent", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; attacker leaves as a free agent after several injury-hit seasons."},
  {name:"Hennes Behrens", sub:"20 · CB", to:"permanent to FC Augsburg", club:"FC Augsburg", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young centre-back sold to a fellow Bundesliga side."},
  {name:"Muhammed Damar", sub:"Attacking prospect", club:"VfL Wolfsburg", pos:"CAM", fee:"~€6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Kicker first reported the move; officially confirmed transfer to Wolfsburg on a long-term contract through 2031."},
  {name:"Luca Erlein", sub:"Right-back", club:"Bayer Leverkusen", pos:"RB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"19-year-old Germany U19 international right-back signed for Bayer Leverkusen; Sky Germany first reported the agreement before Leverkusen confirmed it officially."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Fisnik Asllani", sub:"Kosovo · M", club:"RB Leipzig", pos:"M", report:"Transfer imminent to RB Leipzig", src:"sport1.de", tier:3, fee:"Release clause", truth:85, prob:85, light:"g", trend:"up", note:"Deal described as standing before completion", lastSeen:"2026-08-06T14:21:37Z", baseProb:85}
];

const RISERS = [
  {ar:"⬆", t:"<b>Daghim signed to replace Touré</b>: Hoffenheim move quickly to reinvest the Newcastle windfall in attack."},
  {ar:"⬆", t:"<b>Asllani to Leipzig gathering pace</b>: omission from the training-camp squad signals an imminent departure."}
];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Striker", w:40, x:"Touré's exit and Asllani's likely departure leave the club needing further attacking reinforcement beyond Daghim."},
  {p:"Centre-back", w:30, x:"De Cat's arrival offsets Akpoguma's free departure."}
];

const WATCHLIST = [
  {name:"Fisnik Asllani", club:"TSG Hoffenheim", pos:"ST", dir:"out", age:"~1 day", tier:2, note:"Sport Bild: Leipzig favoured over Barcelona; deal could complete during Austria training camp."}
];

const HUB = {
  gfn: {l:"Get German Football News", u:"https://www.getfootballnewsgermany.com/2026/daghim-hoffenheim-official/"},
  yahoo: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/hoffenheim-confirm-record-fee-official-182727307.html"},
  sky: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11678/13560722/bazoumana-toure-newcastle-sign-ivory-coast-winger-for-lb42m"},
  espn: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49279207/newcastle-sign-winger-bazoumana-toure-hoffenheim"},
  yahooSportsviaSportBildFisnikAsllani: {l:"Yahoo Sports (via Sport Bild)", u:"https://sports.yahoo.com/articles/hoffenheim-striker-fisnik-asllani-transfer-173500596.html"},
  sportschauARDPatrickWimmer: {l:"Sportschau (ARD)", u:"https://www.sportschau.de/regional/swr/swr-patrick-wimmer-schuften-in-der-heimat-fuer-den-erfolg-mit-hoffenheim-100.html"},
  sportschauARDAdamDaghim: {l:"Sportschau (ARD)", u:"https://www.sportschau.de/regional/swr/swr-daghim-fuer-tour-im-kraichgau-ist-ein-neuer-supersprinter-unterwegs-100.html"},
  oneFootballBazoumanaTour: {l:"OneFootball", u:"https://onefootball.com/en/news/bazoumana-toure-joins-newcastle-from-hoffenheim-in-50m-move-deal-until-2031-43103486"},
  yahooSportsviaKickerMuhammedDamar: {l:"Yahoo Sports (via Kicker)", u:"https://sports.yahoo.com/articles/official-damar-joins-wolfsburg-tsg-152600372.html"},
  yahooSportsviaSkyGermanyLucaErlein: {l:"Yahoo Sports (via Sky Germany)", u:"https://sports.yahoo.com/articles/wolfsburg-leverkusen-close-hoffenheim-duo-115800467.html"},
  skyDeutschlandreportcarriedbyGetGermanFootballNewsAdamDaghim: {l:"Sky Deutschland report, carried by Get German Football News", u:"https://sports.yahoo.com/articles/report-hoffenheim-reach-agreement-sign-195000069.html"},
  sport1FisnikAsllani: {l:"Sport1", u:"https://www.sport1.de/transfermarkt"}};

const LINKMAP = {
  "Adam Daghim": ["gfn", "sportschauARDAdamDaghim", "skyDeutschlandreportcarriedbyGetGermanFootballNewsAdamDaghim"],
  "Bazoumana Touré": ["sky","espn","yahoo", "oneFootballBazoumanaTour"],
  "Fisnik Asllani": ["gfn", "yahooSportsviaSportBildFisnikAsllani", "sport1FisnikAsllani"],
  "Patrick Wimmer": ["sportschauARDPatrickWimmer"],
  "Muhammed Damar": ["yahooSportsviaKickerMuhammedDamar"],
  "Luca Erlein": ["yahooSportsviaSkyGermanyLucaErlein"]};
const WL_LINKMAP = {
  "Fisnik Asllani": ["gfn"]
};

const PROSE = {
  heroH2: `Touré cashes out for a club record; Daghim signed as his replacement, Asllani set to follow him out`,
  heroLede: `Fresh off a 5th-place finish that secures Europa League football, Hoffenheim have banked a club-record £42m (~€50m) sale of winger <b>Bazoumana Touré</b> to Newcastle United, immediately reinvesting in Danish forward <b>Adam Daghim</b> from RB Salzburg for €14.5m. Defensively, Belgian centre-back <b>Nathan De Cat</b> arrives from Anderlecht for around €20m. The next departure appears to be striker <b>Fisnik Asllani</b>, reported close to joining RB Leipzig - having chosen the Bundesliga over interest from Barcelona - with a move that could complete during the club's Austrian training camp.`,
  metaRow: `<span>DECISION-MAKER: <b>Andreas Schicker</b> (Sporting Director)</span> <span>HEAD COACH: <b>Christian Ilzer</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">5<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">UEL</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">5</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Touré's sale is done; Asllani's Leipzig move is reported as imminent but not yet officially announced.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€46.5m committed`, x: `Daghim (€14.5m), De Cat (~€20m) and Rots (~€12m) confirmed.` },
  spendOut: { v: `~€53.5m+ banked`, x: `Touré's £42m Newcastle sale dominates; Behrens adds €3.5m, with Prömel, Akpoguma and Bebou leaving free.` },
  methodLegend: ``
};
