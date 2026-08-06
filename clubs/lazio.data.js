/* ============================================================
   MERCATO IQ · CLUB DATA · LAZIO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Lazio",
  mono: "LAZ",
  slug: "lazio",
  primary: "#6CACE4",
  primaryBright: "#A8D8FF",
  primaryDeep: "#1E4D7B",
  primaryRgb: "108,172,228",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Gennaro Gattuso (officially announced 23 Jun 2026, after Maurizio Sarri's mutually-agreed exit for Atalanta)",
  dof: "Angelo Fabiani (Sporting Director)",
  europe: "None for 2026/27",
  finish: "9th Serie A (2025/26)",
  owner: "Claudio Lotito (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://thelaziali.com/category/lazio-transfer-news-rumours-targets/", "https://football-italia.net/category/teams/lazio/"],
  queries: ["Lazio transfer news 2026", "Lazio Gattuso Fabiani Dominguez", "Lazio Gila Milan Provedel Inter"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Lazio"
};

const CONFIRMED_IN = [
  {name:"Danilho Doekhi", sub:"27 · CB · Netherlands", to:"free transfer from Union Berlin", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 14 Jul on a deal until June 2029. Free-agent defensive reinforcement to help offset Gila's exit."},
  {name:"Alfonso Pedraza", sub:"30 · Spain · LB", club:"Villarreal", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Logged as completed on Sky Sport Italia's Lazio window tracker. Terms have not been published."}
];

const CONFIRMED_OUT = [
  {name:"Mario Gila", sub:"25 · CB · Spain", club:"AC Milan", pos:"CB", fee:"~€30m (€25m + €5m add-ons; 50% owed to Real Madrid)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 10 Jul. A direct Serie A rival sale - half the fee is owed to Real Madrid under a sell-on clause from Gila's original transfer."},
  {name:"Ivan Provedel", sub:"27 · GK · Italy", club:"Inter Milan", pos:"GK", fee:"€3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 8 Jul. Goalkeeper departs for the reigning champions as backup to Yann Sommer."}
];

const INCOMING = [
  {name:"Sergi Dominguez", sub:"23 · CB · Spain", club:"Dinamo Zagreb", pos:"CB", report:"12 Jul 2026", src:"Football Italia", tier:2, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"up", note:"Advanced negotiations reported for the centre-back as Lazio look to rebuild their defensive options after Gila's exit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Santiago Gimenez", sub:"25 · Mexico · ST", club:"Milan", pos:"ST", report:"Lazio have made fresh direct contact with the Mexican's entourage as Gattuso pushes for a centre-forward. The obstacle is money: Milan value him at around €20m and Lotito can only realistically do a loan, without an obligation to buy.", src:"Corriere dello Sport", tier:2, fee:"Loan sought", truth:75, prob:25, light:"o", trend:"down", note:"Described in Rome as a dream rather than a negotiation. No tier-one reporter has it advancing.", lastSeen:"2026-08-06T10:49:40Z", baseProb:25},
  {name:"Yunus Musah", sub:"CM, USA, 22", club:"AC Milan", pos:"CM", report:"Lazio have submitted a fresh proposal for the Milan midfielder, structured as a loan with a purchase option worth around €20m.", src:"Football Italia", tier:2, fee:"Undisclosed", truth:65, prob:30, light:"y", trend:"flat", note:"Part of a wider Lazio push to sign multiple Milan-linked players this window.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Armando Broja", sub:"ST, Albania, 24", club:"Burnley", pos:"ST", report:"Lazio can secure the Albanian striker on loan with an option to buy as they look to bolster their forward line under Gattuso.", src:"Football Italia", tier:2, fee:"Undisclosed", truth:65, prob:40, light:"y", trend:"flat", note:"Talks described as advanced enough that a deal is considered gettable.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Nikola Ivanovic", sub:"CB, Serbia, 22", club:"Benfica", pos:"CB", report:"Lazio want the young centre-back on loan after he has struggled for playing time at Benfica.", src:"Football Italia", tier:2, fee:"Undisclosed", truth:60, prob:30, light:"y", trend:"flat", note:"Depth option amid Lazio's defensive rebuild following Gila's exit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"John Kennedy", sub:"ST, Brazil, 24", club:"Fluminense", pos:"ST", report:"Lazio are pursuing the Brazilian centre-forward, who is said to be open to a move to Rome.", src:"Football Italia", tier:3, fee:"Undisclosed", truth:50, prob:20, light:"o", trend:"flat", note:"One of several forward options being explored under Gattuso.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];

const OUTGOING = [
  {name:"Mattia Zaccagni", sub:"LW, Italy, 30", club:"Marseille", pos:"LW", report:"Marseille have been monitoring the Italy international, with reports of a potential offer in the region of €15m for the winger, who is contracted to Lazio until 2029.", src:"Yahoo Sports", tier:2, fee:"Undisclosed", truth:55, prob:25, light:"o", trend:"flat", note:"Lazio said to be willing to listen to offers rather than actively pushing for a sale.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Matteo Cancellieri", sub:"24 · Italy · W", club:"West Ham", pos:"W", report:"West Ham are not hiding their interest and have reportedly floated a swap involving Fullkrug to tempt Lazio.", src:"Lazio News 24", tier:3, fee:"Undisclosed", truth:40, prob:15, light:"o", trend:"down", note:"Weak sourcing. Swap ideas of this kind rarely come from the clubs themselves and no English tier-one reporter has touched it.", lastSeen:"2026-08-06T10:49:40Z", baseProb:15},
  {name:"Nuno Tavares", sub:"26 · Portugal · LB", club:"No fixed destination", pos:"LB", report:"With Pedraza signed, Lazio are overloaded at full-back and the Portuguese is the number one candidate to leave on the left.", src:"Lazionews", tier:3, fee:"Undisclosed", truth:60, prob:35, light:"y", trend:"flat", note:"Squad-balance logic rather than a concrete bid. No buying club has been named by a credible source.", lastSeen:"2026-08-06T10:49:40Z", baseProb:35}
];
const DEAD = [
  {name:"Alessio Romagnoli", sub:"31 · Italy · CB", club:"Atalanta", pos:"CB", report:"His move to Al Sadd collapsed and Lazio are looking for a new home for him. Al Sadd have returned with renewed interest while Atalanta, now coached by Sarri, are watching the situation.", src:"Corriere dello Sport", tier:2, fee:"Undisclosed", truth:75, prob:45, light:"y", trend:"flat", note:"Two very different destinations in play, which usually means nothing is agreed.", lastSeen:"2026-08-06T10:49:40Z", baseProb:45, dir:"out", deadReason:"link went cold", deadAt:"2026-08-06T10:49:41Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Danilho Doekhi arrives free</b>: experienced Dutch centre-back signed on a free transfer until 2029."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Mario Gila and Ivan Provedel both depart</b>: two starters sold to Serie A rivals (Milan and Inter) in the same week."}
];

const NEW = [
  {ar:"✦", t:"Gennaro Gattuso's first Lazio window has been shaped by two significant sales to domestic rivals, with Sergi Dominguez the live pursuit to help rebuild the back line - all against a backdrop of a reported €19m sponsorship deal at risk after Polymarket was banned in Italy."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Diogo Leite to Lazio</b>: reported 'probably not' happening despite earlier speculation linking the defender."}
];

const POSITIONS = [
  {p:"Centre-back", w:60, x:"Gila's sale to Milan leaves a genuine gap; Doekhi has arrived and Dominguez is the live further target."}
];

const WATCHLIST = [
  {name:"Sergi Dominguez", club:"Dinamo Zagreb", pos:"CB", dir:"in", age:"~3 weeks", tier:2, note:"Advanced negotiations reported for further defensive reinforcement."}
];

const HUB = {
  thelaziali: {l:"The Laziali", u:"https://thelaziali.com/category/lazio-transfer-news-rumours-targets/"},
  footballItalia: {l:"Football Italia · Lazio", u:"https://football-italia.net/category/teams/lazio/"},
  footballItaliaSantiagoGimenez: {l:"Football Italia", u:"https://football-italia.net/gimenez-targeted-lazio-porto-milan-uncertain/"},
  footballItaliaYunusMusah: {l:"Football Italia", u:"https://football-italia.net/lazio-target-milan-pair-musah-and-gimenez/"},
  footballItaliaArmandoBroja: {l:"Football Italia", u:"https://football-italia.net/lazio-can-secure-broja-from-burnley-on-loan/"},
  footballItaliaNikolaIvanovic: {l:"Football Italia", u:"https://football-italia.net/lazio-want-ivanovic-on-loan-struggle-benfica/"},
  footballItaliaJohnKennedy: {l:"Football Italia", u:"https://football-italia.net/category/serie-a/lazio/"},
  footballItaliaAlessioRomagnoli: {l:"Football Italia", u:"https://football-italia.net/atalanta-ready-pounce-al-sadd-stall-romagnoli/"},
  corrieredelloSportSantiagoGimenez: {l:"Corriere dello Sport", u:"https://www.corrieredellosport.it/calcio/calcio-mercato/lazio"},
  lazionewsNunoTavares: {l:"Lazionews", u:"https://www.lazionews.eu/category/calciomercato/"},
  lazioNews24MatteoCancellieri: {l:"Lazio News 24", u:"https://www.lazionews24.com/calciomercato/"},
  skySportItaliaAlfonsoPedraza: {l:"Sky Sport Italia", u:"https://sport.sky.it/calciomercato/lazio"}};

const LINKMAP = {
  "Danilho Doekhi": ["thelaziali", "skySportItaliaAlfonsoPedraza"],
  "Mario Gila": ["footballItalia", "footballItaliaJohnKennedy", "skySportItaliaAlfonsoPedraza"],
  "Ivan Provedel": ["footballItalia"],
  "Sergi Dominguez": ["thelaziali"],
  "Santiago Gimenez": ["footballItaliaSantiagoGimenez", "corrieredelloSportSantiagoGimenez"],
  "Yunus Musah": ["footballItaliaYunusMusah"],
  "Armando Broja": ["footballItaliaArmandoBroja"],
  "Nikola Ivanovic": ["footballItaliaNikolaIvanovic"],
  "John Kennedy": ["footballItaliaJohnKennedy"],
  "Alessio Romagnoli": ["footballItaliaAlessioRomagnoli", "corrieredelloSportSantiagoGimenez"],
  "Mattia Zaccagni": ["footballItaliaJohnKennedy"],
  "Matteo Cancellieri": ["footballItaliaJohnKennedy", "lazioNews24MatteoCancellieri"],
  "Nuno Tavares": ["lazionewsNunoTavares"],
  "Alfonso Pedraza": ["skySportItaliaAlfonsoPedraza"]};
const WL_LINKMAP = {
  "Sergi Dominguez": ["thelaziali"]
};

const PROSE = {
  heroH2: `Gattuso's reset: Gila and Provedel both sold to rivals as Dominguez targeted for the back line`,
  heroLede: `Lazio enter 2026/27 under <b>Gennaro Gattuso</b>, who finally took charge in June after <b>Maurizio Sarri's</b> mutually-agreed departure for Atalanta following public friction with president <b>Claudio Lotito</b>. The window has been dominated by outgoing business to domestic rivals: <b>Mario Gila</b> joined Milan for around €30m (half owed to Real Madrid) and <b>Ivan Provedel</b> moved to champions Inter for €3m. <b>Danilho Doekhi</b> has arrived on a free transfer to help fill the gap, with <b>Sergi Dominguez</b> from Dinamo Zagreb the live further target. All of this comes against a backdrop of financial uncertainty, with Lazio reportedly at risk of losing a €19m sponsorship deal after the Polymarket platform was banned in Italy.`,
  metaRow: `<span>DECISION-MAKER: <b>Angelo Fabiani</b> (Sporting Director)</span> <span>HEAD COACH: <b>Gennaro Gattuso</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">9<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Dominguez remains the most advanced unconfirmed pursuit.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No further departures reported as advanced beyond the confirmed Gila and Provedel sales.`,
  pricingBanner: ``,
  excludedNote: `<b>Excluded as unlikely:</b> Diogo Leite links, reported as 'probably not' materialising.`,
  spendIn: { v: `Free + Dominguez pending`, x: `Doekhi arrived free; Dominguez remains the live paid target.` },
  spendOut: { v: `~€33m banked`, x: `Gila (~€30m) and Provedel (€3m) both sold to Serie A rivals.` },
  methodLegend: ``
};
