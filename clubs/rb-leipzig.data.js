/* ============================================================
   MERCATO IQ · CLUB DATA · RB LEIPZIG · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "RB Leipzig", mono: "RBL", slug: "rb-leipzig",
  primary: "#DD0741", primaryBright: "#FF4D77", primaryDeep: "#8A0028",
  primaryRgb: "221,7,65",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "Rouven Schröder (Sporting Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "3rd Bundesliga (2025/26)",
  owner: "Red Bull GmbH (majority stakeholder)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://rbleipzig.com/en/news"],
  queries: ["RB Leipzig transfer news 2026", "Yan Diomande Real Madrid", "Serhou Guirassy Roma", "Fisnik Asllani Leipzig"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · RB Leipzig"
};

const CONFIRMED_IN = [
  {name:"Rocco Reitz", sub:"24 · CM · Germany", to:"permanent from Borussia Mönchengladbach", fee:"~€20-21m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed via official club channels: Gladbach's captain and academy graduate joins on a deal agreed in principle back in March and completed this summer - a significant midfield upgrade."},
  {name:"Maxime Esteve", sub:"23 · CB · France", to:"permanent from Burnley", fee:"~€25m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"French centre-back signed as a significant defensive investment."},
  {name:"Ørjan Nyland", sub:"Norwegian goalkeeper, free agent return", club:"Sevilla", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Free-agent goalkeeper sealed a return to RB Leipzig on a contract running through 2028, following the exit of long-time No.1 Péter Gulácsi."}
];

const CONFIRMED_OUT = [
  {name:"Xaver Schlager", sub:"27 · CM · Austria", to:"free to Nottingham Forest", club:"Nottingham Forest", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; Austrian international midfielder departs for the Premier League on a free transfer."},
  {name:"Péter Gulácsi", sub:"Veteran Hungary international goalkeeper departs", club:"Villarreal", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Long-serving Leipzig No.1 signed a two-year contract with Villarreal after his departure from the club."}
];

const INCOMING = [
  {name:"Fisnik Asllani", sub:"unknown · unknown · unknown", club:"TSG Hoffenheim", pos:"unknown", report:"Transfer to RB Leipzig imminent, full agreement in place", src:"sport1.de", tier:3, fee:"unknown", truth:85, prob:85, light:"g", trend:"down", note:"Deal described as standing before final completion", lastSeen:"2026-08-06T14:21:37Z", baseProb:85}
];

const OUTGOING = [
  {name:"Yan Diomande", sub:"19 · Ivory Coast · W", club:"Real Madrid", pos:"Winger", report:"Real Madrid have pushed hard for the teenage winger in a deal reported in the €130m to €140m range, with German outlets saying only the medical is left. Leipzig sporting boss Marcel Schaefer has publicly pumped the brakes, insisting there is no agreement yet, while Diomande has returned to training with the squad.", src:"Sky Deutschland / BILD, ESPN, Marcel Schaefer comments", tier:1, fee:"€130m-€140m", truth:88, prob:78, light:"g", trend:"up", note:"Genuine and live, but the numbers are moving and the club has denied a completed agreement, so the record-fee figures should be handled with care until Leipzig confirm. Watch for the medical before treating it as done.", lastSeen:"2026-08-06T10:49:40Z", baseProb:78},
  {name:"Serhou Guirassy", sub:"24 · ST · Guinea", club:"AS Roma", pos:"ST", report:"31 Jul 2026", src:"Matteo Moretto / Fabrizio Romano (Sky Italia)", tier:2, fee:"~€30m", truth:58, prob:40, light:"y", trend:"up", note:"Romano and Moretto report Roma in advanced talks for the striker; nothing finalised yet but discussions have progressed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Antonio Nusa", sub:"21 · W · Norway", club:"AS Roma", pos:"W", report:"29 Jul 2026", src:"Sky (Germany/Italy)", tier:2, fee:"€60m demanded", truth:50, prob:30, light:"y", trend:"flat", note:"Roma opened talks after missing out on Crysencio Summerville (to Al-Hilal); Leipzig are demanding around €60m and have so far resisted a sale.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Assan Ouedraogo", sub:"19 · MF · Germany", club:"Real Madrid / Man Utd / Chelsea", pos:"MF", report:"Jul 2026", src:"TeamTalk", tier:3, fee:"Undisclosed", truth:30, prob:12, light:"r", trend:"flat", note:"Real Madrid reportedly made informal contact with the midfielder's representatives, with Manchester United and Chelsea also credited with interest - an ongoing, lower-confidence speculation thread rather than a fresh breaking story.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12}
];
const DEAD = [
  {name:"Unnamed Sunderland academy forward", sub:"Youth player on Leipzig's scouting list", club:"Sunderland", pos:"ST", report:"RB Leipzig have placed an unnamed Sunderland youngster on their list of potential summer targets as they continue to mine the club's academy pipeline.", src:"Sunderland Echo", tier:3, fee:"Unknown", truth:40, prob:25, light:"o", trend:"flat", note:"Player not yet named publicly; speculative early-stage interest only.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25, dead:true, deadReason:"Insufficient detail to track; no verifiable player name", dir:"in", deadAt:"2026-08-06T14:21:38Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Diomandé to Real Madrid gathering pace</b>: personal terms agreed after PSG and Liverpool both stepped back from the race."},
  {ar:"⬆", t:"<b>Asllani to Leipzig closing in</b>: Hoffenheim's omission of the striker from their training-camp squad is a strong signal."}
];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Wide forward", w:45, x:"Diomandé's expected departure to Real Madrid would be a major loss of the club's best young talent; no direct replacement confirmed yet."},
  {p:"Striker", w:35, x:"Asllani's arrival would add depth alongside Guirassy, whose own future to Roma remains in discussion."}
];

const WATCHLIST = [
  {name:"Yan Diomandé", club:"RB Leipzig", pos:"LW/RW", dir:"out", age:"~1 wk", tier:1, note:"Personal terms agreed with Real Madrid on a Bellingham-style incentivised deal; PSG's £102.5m bid rejected, Liverpool withdrew."},
  {name:"Serhou Guirassy", club:"RB Leipzig", pos:"ST", dir:"out", age:"~3 days", tier:2, note:"Roma in advanced talks via Romano/Moretto; ~€30m mentioned, not yet finalised."}
];

const HUB = {
  aljazeera: {l:"Al Jazeera", u:"https://www.aljazeera.com/sports/2026/7/27/yan-diomande-real-madrid-agree-terms-transfer-deal-football-leipzig"},
  gfn: {l:"Get German Football News", u:"https://www.getfootballnewsgermany.com/2026/rb-leipzig-rocco-reitz/"},
  rbl: {l:"RB Leipzig Official", u:"https://rbleipzig.com/en/news/rocco-reitz-transfer-new-signing-summer-gladbach-rb-leipzig"},
  yahoo: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/hoffenheim-striker-fisnik-asllani-transfer-173500596.html"},
  getfootballnewsitalyNusa: {l:"Get Football News Italy · Nusa", u:"https://www.getfootballnewsitaly.com/2026/roma-open-talks-for-antonio-nusa-leipzig-demand-e60-million/"},
  teamtalkOuedraogo: {l:"TeamTalk · Ouedraogo", u:"https://www.teamtalk.com/news/real-madrid-want-rb-leipzig-midfielder-assan-ouedraogo-the-new-jude-bellingham"},
  sunderlandEchoUnnamedSunderlandacademyforward: {l:"Sunderland Echo", u:"https://www.sunderlandecho.com/sport/football"},
  yahooSportsviaFabrizioRomanoYanDiomande: {l:"Yahoo Sports (via Fabrizio Romano)", u:"https://sports.yahoo.com/"},
  uNIIndiaPterGulcsi: {l:"UNI India", u:"https://www.uniindia.com/"},
  florianPlettenbergSkyDeutschlandFisnikAsllani: {l:"Florian Plettenberg (Sky Deutschland)", u:"https://x.com/Plettigoal/status/2085109685687087521"},
  florianPlettenbergSkyDeutschlandYanDiomande: {l:"Florian Plettenberg (Sky Deutschland)", u:"https://x.com/Plettigoal/status/2084290653286990000"},
  sport1deFisnikAsllani: {l:"sport1.de", u:"https://www.sport1.de/transfermarkt"}};

const LINKMAP = {
  "Rocco Reitz": ["gfn","rbl"],
  "Yan Diomandé": ["aljazeera"],
  "Fisnik Asllani": ["yahoo", "florianPlettenbergSkyDeutschlandFisnikAsllani", "sport1deFisnikAsllani"],
  "Antonio Nusa": ["getfootballnewsitalyNusa"],
  "Assan Ouedraogo": ["teamtalkOuedraogo"],
  "Unnamed Sunderland academy forward": ["sunderlandEchoUnnamedSunderlandacademyforward"],
  "Yan Diomande": ["yahooSportsviaFabrizioRomanoYanDiomande", "florianPlettenbergSkyDeutschlandYanDiomande"],
  "Ørjan Nyland": ["yahooSportsviaFabrizioRomanoYanDiomande"],
  "Péter Gulácsi": ["uNIIndiaPterGulcsi"]};
const WL_LINKMAP = {
  "Yan Diomandé": ["aljazeera"],
  "Serhou Guirassy": ["yahoo"]
};

const PROSE = {
  heroH2: `Diomandé closing in on Real Madrid as Leipzig prepare for life without their brightest young talent`,
  heroLede: `Fresh off a 3rd-place finish that secures Champions League football, Leipzig's summer is increasingly defined by outgoing business: 19-year-old winger <b>Yan Diomandé</b>, the Bundesliga's best young player last season, has reportedly agreed personal terms with Real Madrid on a Bellingham-style incentivised deal after both PSG and Liverpool stepped back. Striker <b>Serhou Guirassy</b> is also in advanced talks with Roma. Incoming, captain-elect <b>Rocco Reitz</b> arrives from Gladbach for around €20m and centre-back Maxime Esteve joins from Burnley, while Hoffenheim's Fisnik Asllani looks set to follow via a release clause.`,
  metaRow: `<span>DECISION-MAKER: <b>Rouven Schröder</b> (Sporting Director)</span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">3<small>rd</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Diomandé's Real Madrid move is advanced but the fee is still to be agreed; Guirassy's Roma talks remain a step behind.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€45m+ committed`, x: `Reitz (~€20-21m) and Esteve (€25m) confirmed; Asllani would add further outlay via a release clause.` },
  spendOut: { v: `Diomandé fee pending`, x: `Schlager left free; Diomandé's Real Madrid fee and Guirassy's Roma fee are both still to be finalised.` },
  methodLegend: ``
};
