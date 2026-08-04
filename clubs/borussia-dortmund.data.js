/* ============================================================
   MERCATO IQ · CLUB DATA · BORUSSIA DORTMUND · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Borussia Dortmund",
  mono: "BVB",
  slug: "borussia-dortmund",
  primary: "#FFD700",
  primaryBright: "#FFED4E",
  primaryDeep: "#CC9900",
  primaryRgb: "255,215,0",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Nuri Şahin",
  dof: "Sven Mislintat (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "4th Bundesliga (2025/26)",
  owner: "Reinhold Hummels (President)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["Borussia Dortmund transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Borussia Dortmund"
};

const CONFIRMED_IN = [
  {name:"Konstantinos Karetsas", sub:"18 · AM/W · Greece", to:"permanent from KRC Genk", fee:"€30m + €3m add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 3 Aug on a five-year deal to 2031, wearing No.19. Greek international beat competition from AC Milan and others; sporting director Lars Ricken called him a player with 'enormous abilities' at just 18. Replaces Julian Brandt's creative void following his free departure to Ajax."},
  {name:"Joane Gadou", sub:"19 · CM · Ivory Coast", to:"permanent from RB Salzburg", fee:"~€19.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Midfield reinforcement signed this summer."},
  {name:"Kauã Prates", sub:"18 · W · Brazil", to:"permanent from Cruzeiro", fee:"~€7m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young Brazilian winger brought in for the academy-to-first-team pipeline."}
];

const CONFIRMED_OUT = [
  {name:"Karim Adeyemi", sub:"24 · W · Germany", to:"permanent to FC Barcelona", club:"FC Barcelona", fee:"€22m + €7m add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Presented at Barcelona 21 Jul on a deal through 2031. A significant departure of first-team pace and directness out wide, prompting the Karetsas pursuit."},
  {name:"Julian Brandt", sub:"30 · AM/CM · Germany", to:"free to Ajax", club:"Ajax", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; turned down Leeds United and Real Sociedad to sign a three-year deal in Amsterdam, confirmed early Aug. Sporting director Jordi Cruyff said Ajax 'had been working on the transfer for several months.'"},
  {name:"Cole Campbell", sub:"18 · CM · England", to:"permanent to SV Elversberg", club:"SV Elversberg", fee:"~€6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young academy midfielder sold to the newly-promoted side."},
  {name:"Salih Özcan", sub:"28 · DM · Turkey/Germany", to:"free to Besiktas", club:"Besiktas", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; defensive midfielder departs on a free transfer."},
  {name:"Niklas Süle", sub:"30 · CB · Germany", to:"retired", club:"retired", fee:"N/A", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Centre-back retires from professional football."}
];

const INCOMING = [
  {name:"Mats Wieffer", sub:"24 · CM · Netherlands", club:"AZ Alkmaar", pos:"CM", report:"2 Aug 2026", src:"Sky Deutschland / Christian Falk", tier:2, fee:"€25m", truth:62, prob:45, light:"y", trend:"up", note:"Falk reports Dortmund pursuing Dutch midfielder from AZ Alkmaar. Talks progressing steadily."},
  {name:"Moussa Diaby", sub:"25 · LW · France", club:"Bayer Leverkusen", pos:"LW", report:"1 Aug 2026", src:"Bild / Sky Deutschland", tier:2, fee:"€40m", truth:55, prob:35, light:"y", trend:"flat", note:"German media reports Dortmund as one of several clubs interested in Leverkusen winger. Deal unlikely given Leverkusen's asking price."}
];

const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Midfield rebuild continues with the Wieffer and Diaby pursuits as Dortmund look to add depth ahead of deadline day."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Jude Bellingham to Real Madrid</b>: a recurring but outdated link - Bellingham completed his move to Real Madrid in 2023 and has been a first-team fixture there since; any 'in talks' framing is a recycled misattribution."}
];

const POSITIONS = [
  {p:"Attacking midfield", w:55, x:"Wieffer and Diaby pursuits point to a squad still looking to add creative/defensive-midfield depth."}
];

const WATCHLIST = [
  {name:"Mats Wieffer", club:"AZ Alkmaar", pos:"CM", dir:"in", age:"~1 day", tier:2, note:"Christian Falk: Dortmund pursuing Dutch midfielder from AZ."}
];

const HUB = {
  "skydeutschland": {l:"Sky Sport Deutschland", u:"https://sportnews.bz/"},
  "falk": {l:"Christian Falk (Sky Deutschland)", u:"https://x.com/Cfbayern"},
  "bild": {l:"Bild", u:"https://www.bild.de/sport/fussball/"},
  "gnews-matswieffer": {l:"Related news search: Mats Wieffer", u:"https://news.google.com/search?q=Borussia%20Dortmund%20Mats%20Wieffer%20transfer&hl=en-GB&gl=GB"},
  "sport1": {l:"Sport1", u:"https://www.sport1.de/news/fussball/bundesliga/2026/08/offiziell-bvb-verpflichtet-wunschspieler-konstantinos-karetsas"},
  "bein": {l:"beIN Sports", u:"https://www.beinsports.com/en-us/soccer/eredivisie/articles/julian-brandt-stuns-the-market-and-joins-ajax-after-leaving-borussia-dortmund-2026-08-01"},
  "ajax": {l:"AFC Ajax Official", u:"https://english.ajax.nl/articles/ajax-signs-julian-brandt"},
  "90min": {l:"90min · Bundesliga Summer Transfers", u:"https://www.90min.de/sommer-transfers-in-der-bundesliga-2026-alle-offiziellen-wechsel-im-uberblick"}
};

const LINKMAP = {
  "Mats Wieffer": ["skydeutschland", "falk"],
  "Moussa Diaby": ["bild", "skydeutschland"],
  "Konstantinos Karetsas": ["sport1"],
  "Joane Gadou": ["90min"],
  "Kauã Prates": ["90min"],
  "Karim Adeyemi": ["90min"],
  "Julian Brandt": ["bein","ajax"],
  "Cole Campbell": ["90min"],
  "Salih Özcan": ["90min"],
  "Niklas Süle": ["90min"]
};
const WL_LINKMAP = {
  "Mats Wieffer": ["gnews-matswieffer"]
};

const PROSE = {
  heroH2: `Karetsas in, Adeyemi and Brandt out: Dortmund reload their attack for the post-Adeyemi era`,
  heroLede: `Coming off a 4th-place finish that secured Champions League football, Nuri Şahin's Dortmund have made their headline move: 18-year-old Greek international <b>Konstantinos Karetsas</b> arrives from KRC Genk for €30m plus add-ons, beating competition from AC Milan. He replaces two outgoing attackers - <b>Karim Adeyemi</b>, sold to Barcelona for €22m plus bonuses, and club legend <b>Julian Brandt</b>, who left as a free agent for Ajax after turning down Leeds and Real Sociedad. Elsewhere, the club continue to be linked with midfield reinforcements including AZ's Mats Wieffer and Leverkusen's Moussa Diaby.`,
  metaRow: `<span>DECISION-MAKER: <b>Sven Mislintat</b> (Director)</span> <span>HEAD COACH: <b>Nuri Şahin</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">4<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Adeyemi and Brandt's exits are confirmed and done; no further high-profile departures reported.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€56.5m committed`, x: `Karetsas (€30m+), Gadou (€19.5m) and Prates (€7m) confirmed; Wieffer/Diaby remain unconfirmed pursuits.` },
  spendOut: { v: `~€22m+ banked`, x: `Adeyemi's Barcelona sale is the headline fee; Brandt, Özcan left free and Süle retired.` },
  methodLegend: ``
};
