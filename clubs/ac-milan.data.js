/* ============================================================
   MERCATO IQ · CLUB DATA · AC MILAN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AC Milan",
  mono: "MIL",
  slug: "ac-milan",
  primary: "#DC143C",
  primaryBright: "#FF3333",
  primaryDeep: "#990000",
  primaryRgb: "220,20,60",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Ruben Amorim (since pre-season 2026/27, replacing Massimiliano Allegri)",
  dof: "Geoffrey Moncada (Director)",
  europe: "UEFA Europa League (2026/27)",
  finish: "5th Serie A (2025/26)",
  owner: "Gerry Cardinale / RedBird Capital",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://sempremilan.com/category/transfer-news", "https://football-italia.net/category/teams/milan/"],
  queries: ["AC Milan transfer news 2026", "AC Milan Goncalo Ramos Gila official", "AC Milan Karetsas Alajbegovic Leao"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AC Milan"
};

const CONFIRMED_IN = [
  {name:"Jadon Sancho", sub:"24 · LW/RW · England", to:"permanent from Manchester United", fee:"Free agent", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 20 Jul. English winger joins as a free agent after his Manchester United departure, adding pace and creativity to Milan's attack."},
  {name:"Goncalo Ramos", sub:"Striker, POR, 25", club:"Paris Saint-Germain", pos:"ST", fee:"€65-75m (club record)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a five-year deal after three seasons at PSG; multiple outlets describe it as Milan's record transfer fee, already involved in pre-season under Ruben Amorim."},
  {name:"Mario Gila", sub:"25 · CB · Spain", to:"permanent from Lazio", fee:"~€30m (with bonuses)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"A direct Serie A rival raid - the Spanish centre-back strengthens Milan's defensive options."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Kerim Alajbegović", sub:"18 · W · Bosnia", club:"Bayer Leverkusen", pos:"W", report:"1 Aug 2026", src:"Football Italia", tier:0, fee:"€25-30m", truth:45, prob:20, light:"o", trend:"down", note:"On-page entry dated 1 Aug 2026; no fresh snippet found", lastSeen:"2026-08-06T14:21:37Z", baseProb:20},
  {name:"Can Uzun", sub:"20 · AM · Turkey/Germany", club:"Eintracht Frankfurt", pos:"AM", report:"1 Aug 2026", src:"Football Italia", tier:0, fee:"~€25m", truth:42, prob:18, light:"o", trend:"down", note:"On-page entry dated 1 Aug 2026; no fresh snippet found", lastSeen:"2026-08-06T14:21:37Z", baseProb:18},
  {name:"Matheus Nwaneri", sub:"Winger/Forward, ENG, 19", club:"Arsenal", pos:"W", report:"Milan are monitoring the young Arsenal winger", src:"Football Italia", tier:0, fee:"Undisclosed", truth:45, prob:20, light:"o", trend:"down", note:"On-page entry; no fresh snippet found", lastSeen:"2026-08-06T14:21:37Z", baseProb:20},
  {name:"Brahim Diaz", sub:"Attacking midfielder, ESP, 26", club:"Real Madrid", pos:"CAM", report:"Milan sources have floated a possible reunion", src:"Milanistichannel", tier:0, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"down", note:"On-page entry; no fresh snippet found", lastSeen:"2026-08-06T14:21:37Z", baseProb:15},
  {name:"Pierre-Emile Hojbjerg", sub:"31 · Denmark · CM", club:"Marseille", pos:"Midfielder", report:"Gianluca Di Marzio reported interest", src:"Gianluca Di Marzio", tier:1, fee:"Undisclosed", truth:70, prob:25, light:"o", trend:"down", note:"On-page entry; no fresh snippet found", lastSeen:"2026-08-06T14:21:37Z", baseProb:25},
  {name:"Sankhoun Diawara", sub:"2006-born · CB", club:"Troyes", pos:"CB", report:"Gianluca Di Marzio reported Milan were pushing to sign", src:"Gianluca Di Marzio", tier:1, fee:"Undisclosed", truth:85, prob:55, light:"g", trend:"down", note:"On-page entry; no fresh snippet found", lastSeen:"2026-08-06T14:21:37Z", baseProb:55}
];

const OUTGOING = [
  {name:"Rafael Leao", sub:"27 · Portugal · W", club:"Fenerbahce", pos:"LW", report:"Fenerbahce are preparing fresh talks and a lucrative salary package as they push to sign the winger, with Milan said to be holding out for a permanent fee rather than sanctioning a loan. Ruben Amorim has publicly played down the speculation and insisted the squad remains his focus.", src:"Goal", tier:3, fee:"Undisclosed", truth:65, prob:30, light:"y", trend:"flat", note:"Sceptical read: we could not stand this up with a tier-one source such as Romano, Di Marzio or Schira, and the reporting traces back to Turkish speculation rather than an original tier-one report. Milan's asking price has not been credibly established. Handle as talk, not a deal.", lastSeen:"2026-08-05T13:15:33Z", baseProb:30},
  {name:"Yunus Musah", sub:"23 · CM · USA", club:"Unnamed Premier League clubs", pos:"CM", report:"18 Jul 2026", src:"Nicolo Schira", tier:0, fee:"Undisclosed", truth:45, prob:20, light:"o", trend:"down", note:"On-page entry dated 18 Jul 2026; no fresh snippet found", lastSeen:"2026-08-06T14:21:37Z", baseProb:20},
  {name:"Youssouf Fofana", sub:"Midfielder, FRA, 26", club:"Premier League (unnamed clubs)", pos:"CDM", report:"Two unnamed Premier League clubs have made enquiries", src:"TuttoMercatoWeb", tier:0, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"down", note:"On-page entry; no fresh snippet found", lastSeen:"2026-08-06T14:21:37Z", baseProb:20},
  {name:"Santiago Gimenez", sub:"Striker, MEX, 25", club:"Porto", pos:"ST", report:"Porto have opened direct negotiations with Milan", src:"Football Italia", tier:0, fee:"Undisclosed", truth:45, prob:25, light:"o", trend:"down", note:"On-page entry; no fresh snippet found", lastSeen:"2026-08-06T14:21:37Z", baseProb:25}
];

const RISERS = [
  {ar:"⬆", t:"<b>Gonçalo Ramos official</b>: €80m+ marquee striker arrival from PSG headlines the summer."},
  {ar:"⬆", t:"<b>Mario Gila official</b>: Serie A rival raid on Lazio's centre-back strengthens the defence."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Ruben Amorim's first Milan window nets Ramos and Gila for over €100m combined; Karetsas, Alajbegović and Uzun are all in the mix for a further creative addition, likely funded by selling Leão."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Attacking midfield / No.10", w:70, x:"Karetsas the current favourite, with Alajbegović and Can Uzun as alternates - all three remain live given Milan need to sell before further buying."},
  {p:"Full-back / centre-back depth", w:45, x:"A further left-sided full-back and possibly another centre-back are still wanted alongside Gila."}
];

const WATCHLIST = [];

const HUB = {
  sempremilan: {l:"SempreMilan · Transfer News", u:"https://sempremilan.com/category/transfer-news"},
  footballItalia: {l:"Football Italia · AC Milan", u:"https://football-italia.net/category/teams/milan/"},
  club: {l:"AC Milan Official · Transfer Window", u:"https://www.acmilan.com/en/transfer-window"},
  nicoloSchiraviaNapoliMagazineYunusMusah: {l:"Nicolo Schira (via Napoli Magazine)", u:"https://www.napolimagazine.com/calcio/articolo/mercato-schira-milan-interesse-di-due-club-di-premier-per-il-centrocampista-musah-19-07-2026"},
  footballItaliaMatheusNwaneri: {l:"Football Italia", u:"https://www.football-italia.net/"},
  calciomercatocomBrahimDiaz: {l:"Calciomercato.com", u:"https://www.calciomercato.com/squadra/ac-milan/9dntj5dioj5ex52yrgwzxrq9l"},
  tuttoMercatoWebYoussoufFofana: {l:"TuttoMercatoWeb", u:"https://www.tuttomercatoweb.com/milan"},
  yardbarkerGoncaloRamos: {l:"Yardbarker", u:"https://www.yardbarker.com/"},
  goalcomRafaelLeao: {l:"Goal.com", u:"https://www.goal.com/en-us/team/ac-milan/news/9dntj5dioj5ex52yrgwzxrq9l"},
  diMarzioonCalciomercatoLOriginaleSkyItaliaPierreEmileHojbjerg: {l:"Di Marzio on Calciomercato - L'Originale (Sky Italia)", u:"https://milanreports.com/2026/07/18/hojbjerg-is-an-option-for-ac-milans-midfield-says-di-marzio/"},
  diMarzioviaMilanReportsSankhounDiawara: {l:"Di Marzio, via Milan Reports", u:"https://milanreports.com/2026/07/23/di-marzio-milan-pushing-for-diawara/"},
  tuttomercatowebcomRafaelLeo: {l:"tuttomercatoweb.com", u:"https://www.tuttomercatoweb.com/"}};

const LINKMAP = {
  "Jadon Sancho": ["club"],
  "Gonçalo Ramos": ["footballItalia","club"],
  "Mario Gila": ["footballItalia","club"],
  "Yunus Musah": ["nicoloSchiraviaNapoliMagazineYunusMusah"],
  "Matheus Nwaneri": ["footballItaliaMatheusNwaneri"],
  "Brahim Diaz": ["calciomercatocomBrahimDiaz"],
  "Rafael Leao": ["footballItaliaMatheusNwaneri", "goalcomRafaelLeao"],
  "Youssouf Fofana": ["tuttoMercatoWebYoussoufFofana"],
  "Santiago Gimenez": ["footballItaliaMatheusNwaneri"],
  "Goncalo Ramos": ["yardbarkerGoncaloRamos"],
  "Pierre-Emile Hojbjerg": ["diMarzioonCalciomercatoLOriginaleSkyItaliaPierreEmileHojbjerg"],
  "Sankhoun Diawara": ["diMarzioviaMilanReportsSankhounDiawara"],
  "Rafael Leão": ["tuttomercatowebcomRafaelLeo"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Amorim's first window: Gonçalo Ramos and Mario Gila arrive for over €100m combined`,
  heroLede: `AC Milan enter the new season under <b>Ruben Amorim</b>, hired to replace Massimiliano Allegri after a below-par 5th-place finish left the club in the Europa League rather than the Champions League (Allegri has since resurfaced at Napoli). The headline business is a genuine statement: <b>Gonçalo Ramos</b> arrives from PSG for upwards of €80m to lead the line, and <b>Mario Gila</b> joins from direct Serie A rival Lazio for around €30m to add defensive steel (50% of the fee owed to Real Madrid under a sell-on clause). With <b>Jadon Sancho</b> already in on a free from Manchester United, the remaining work is creative: Milan are said to favour Genk's teenage playmaker <b>Konstantinos Karetsas</b>, with Kerim Alajbegović and Can Uzun as alternates, most likely funded by selling <b>Rafael Leão</b>.`,
  metaRow: `<span>DECISION-MAKER: <b>Geoffrey Moncada</b> (Director)</span> <span>HEAD COACH: <b>Ruben Amorim</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">5<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">Europa Lg</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: `Karetsas, Alajbegović and Can Uzun are all reported at exploratory-to-advanced stages for the same creative-midfield role; expect only one to actually land.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `A Leão sale (and other fringe departures) is expected to fund the remaining creative-midfield pursuit.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€110m+ committed`, x: `Ramos and Gila are done; a further creative-midfield signing (Karetsas most likely) would add €25-40m more.` },
  spendOut: { v: `€60-80m expected`, x: `A Leão sale remains the primary lever to fund further incomings.` },
  methodLegend: ``
};
