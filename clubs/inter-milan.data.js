/* ============================================================
   MERCATO IQ · CLUB DATA · INTER MILAN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Inter Milan",
  mono: "INT",
  slug: "inter-milan",
  primary: "#0066CC",
  primaryBright: "#0080FF",
  primaryDeep: "#003D99",
  primaryRgb: "0,102,204",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Cristian Chivu (Serie A Coach of the Season 2025/26)",
  dof: "Piero Ausilio (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "1st Serie A (2025/26) - 21st league title, clinched with 3 games to spare",
  owner: "Oaktree Capital Management",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://sempreinter.com/", "https://football-italia.net/category/teams/inter/"],
  queries: ["Inter Milan transfer news 2026", "Inter Milan Bonny Diouf official", "Inter Milan Chivu transfer plans"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Inter Milan"
};

const CONFIRMED_IN = [
  {name:"Ange-Yoan Bonny", sub:"21 · ST · France U21", to:"permanent from Parma", fee:"~€25m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed - Bonny reunites with Cristian Chivu, who coached him for his breakout final three months at Parma (6 goals, 4 assists, helped Parma beat relegation). Stuttgart tried to hijack the move but Inter won out."},
  {name:"Andy Diouf", sub:"22 · CM · France", to:"permanent from RC Lens", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed midfield addition from Lens, adding energy and ball-carrying to Chivu's engine room."},
  {name:"Ivan Provedel", sub:"27 · GK · Italy", to:"permanent from Lazio", fee:"€3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 8 Jul. A domestic-rival raid for goalkeeping depth behind Yann Sommer, adding an experienced Serie A number one to Chivu's squad."},
  {name:"John Stones", sub:"CB, England, 32", club:"Manchester City", pos:"CB", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a two-year deal through June 2028 after a decade at Manchester City; teammate Bisseck said Stones would 'push Inter's defenders to raise their level'."}
];

const CONFIRMED_OUT = [
  {name:"Denzel Dumfries", sub:"RB, Netherlands, 30", club:"Real Madrid", pos:"RB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departure leaves Inter searching for a right-side replacement, with Diaby among the names discussed."},
  {name:"Ebenezer Akinsanmiro", sub:"CM, Nigeria, 21", club:"Monza", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sale helped fund Inter's renewed bid for Curtis Jones."}
];

const INCOMING = [
  {name:"Cristian Romero", sub:"CB, Argentina, 28", club:"Tottenham Hotspur", pos:"CB", report:"Tottenham and Inter have reached a verbal agreement worth around €40m/£34.2m; De Zerbi has accepted the captain's wish to leave and Inter director Ausilio continues pushing the deal through, with Tuttosport calling it 'all but done'.", src:"Fabrizio Romano / ESPN Argentina (via GiveMeSport)", tier:1, fee:"~€40m", truth:85, prob:75, light:"g", trend:"flat", note:"Salary demands and the requirement Inter complete a prior sale are the last hurdles; Barcelona interest earlier fell through on cost."},
  {name:"Curtis Jones", sub:"CM, England, 25", club:"Liverpool", pos:"CM", report:"Inter have gone back in for a third time with an improved €35m offer (after €25m and €32m rejections); Liverpool still want €40-50m and are holding firm despite Jones appearing to court the move on social media after a dressing-room armband dispute.", src:"Dicip Khetan, International Business Times", tier:2, fee:"€35m offered", truth:70, prob:45, light:"y", trend:"flat", note:"Jones has just one year left on his contract (to 2027), which gives Inter some leverage, but Liverpool are not budging yet."},
  {name:"Moussa Diaby", sub:"RW, France, 26", club:"Al-Ittihad", pos:"RW", report:"Diaby has re-emerged as an option for the right flank as Inter search for a replacement for the departed Dumfries.", src:"Football Italia", tier:2, fee:"Undisclosed", truth:60, prob:30, light:"y", trend:"flat", note:"One of several names being floated for the vacant right-side role."},
  {name:"Michael Kayode", sub:"RB, Italy, 21", club:"Fiorentina", pos:"RB", report:"Inter have made an enquiry over the young Italian full-back, though the asking price remains a stumbling block.", src:"Il Sussidiario / Blasting News", tier:3, fee:"Undisclosed", truth:50, prob:25, light:"o", trend:"flat", note:"Early-stage interest rather than an active negotiation."}
];

const OUTGOING = [
  {name:"Filip Stanković", sub:"21 · GK · Serbia", club:"Multiple (loan/permanent options discussed)", pos:"GK", report:"16 Apr 2026", src:"SempreInter", tier:3, fee:"Undisclosed", truth:45, prob:25, light:"o", trend:"flat", note:"Inter reportedly weighing offering the young goalkeeper as makeweight in a deal involving Andy Diouf-type midfield business; more squad management than an active sale process."},
  {name:"Kristjan Asllani", sub:"CM, Albania, 23", club:"Unlisted", pos:"CM", report:"Considered outside Chivu's project this season, with offers reportedly on the table for the midfielder.", src:"Blasting News", tier:3, fee:"Undisclosed", truth:45, prob:40, light:"y", trend:"flat", note:"No concrete destination yet reported."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Ange-Yoan Bonny official</b>: reunion with Chivu completed from Parma for ~€25m after Inter beat Stuttgart to the deal."},
  {ar:"⬆", t:"<b>Andy Diouf official</b>: midfield reinforcement arrives from Lens."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Reigning champions add Bonny (reunited with Chivu from Parma), Diouf in midfield and Provedel in goal - a quiet, continuity-focused window so far."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Ademola Lookman to Inter</b>: this link is dead - Lookman completed his move from Atalanta to Atlético Madrid back in the January 2026 window and is not part of this summer's market."}
];

const POSITIONS = [
  {p:"Forward depth", w:45, x:"Bonny's arrival covers rotation behind the senior strikers under Chivu."},
  {p:"Central midfield", w:40, x:"Diouf adds energy; Barella remains the on-field lynchpin."}
];

const WATCHLIST = [];

const HUB = {
  sempreinter: {l:"SempreInter · Transfer News", u:"https://sempreinter.com/"},
  footballItalia: {l:"Football Italia · Inter", u:"https://football-italia.net/category/teams/inter/"},
  club: {l:"Inter Official · Transfer News", u:"https://www.inter.it/en/news/category/transfer-news"},
  giveMeSportCristianRomero: {l:"GiveMeSport", u:"https://www.givemesport.com/tottenham-inter-milan-cristian-romero-agreement-reached/"},
  internationalBusinessTimesCurtisJones: {l:"International Business Times", u:"https://www.ibtimes.sg/inter-revive-curtis-jones-pursuit-improved-35m-offer-liverpool-hold-firm-91278"},
  footballItaliaMoussaDiaby: {l:"Football Italia", u:"https://football-italia.net/moussa-diaby-re-emerges-for-inter/"},
  footballItaliaMichaelKayode: {l:"Football Italia", u:"https://football-italia.net/category/serie-a/inter/"},
  footballItaliaJohnStones: {l:"Football Italia", u:"https://football-italia.net/bisseck-stones-will-push-inter-defenders/"},
  footballItaliaDenzelDumfries: {l:"Football Italia", u:"https://football-italia.net/where-inter-need-to-improve-in-2026-27-double/"},
  footballItaliaEbenezerAkinsanmiro: {l:"Football Italia", u:"https://football-italia.net/serie-a-transfer-halhal-venezia-frosinone-monz/"}};

const LINKMAP = {
  "Ange-Yoan Bonny": ["footballItalia","club"],
  "Andy Diouf": ["club"],
  "Filip Stanković": ["sempreinter"],
  "Ivan Provedel": ["footballItalia"],
  "Cristian Romero": ["giveMeSportCristianRomero"],
  "Curtis Jones": ["internationalBusinessTimesCurtisJones"],
  "Moussa Diaby": ["footballItaliaMoussaDiaby"],
  "Michael Kayode": ["footballItaliaMichaelKayode"],
  "Kristjan Asllani": ["footballItaliaMichaelKayode"],
  "John Stones": ["footballItaliaJohnStones"],
  "Denzel Dumfries": ["footballItaliaDenzelDumfries"],
  "Ebenezer Akinsanmiro": ["footballItaliaEbenezerAkinsanmiro"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Champions reload: Bonny reunites with Chivu, Diouf adds midfield legs after a title won with three games to spare`,
  heroLede: `Inter Milan enter this window as reigning Serie A champions, having clinched their 21st league title under first-season coach <b>Cristian Chivu</b> with three games still to play - a title win that earned Chivu Serie A's Coach of the Season award. The summer business so far reflects continuity rather than upheaval: <b>Ange-Yoan Bonny</b> arrives from Parma for around €25m, reuniting with Chivu after the pair worked together during Bonny's breakout final months there, <b>Andy Diouf</b> joins from Lens to add midfield legs, and <b>Ivan Provedel</b> arrives from Lazio for goalkeeping depth.`,
  metaRow: `<span>DECISION-MAKER: <b>Piero Ausilio</b> (Director)</span> <span>HEAD COACH: <b>Cristian Chivu</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">1<small>st</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Squad management (Stanković) rather than a pressing need to sell defines Inter's outgoing business as champions.`,
  pricingBanner: ``,
  excludedNote: `<b>Excluded as stale:</b> Ademola Lookman links to Inter - the winger left Atalanta for Atlético Madrid in January 2026, months before this window opened.`,
  spendIn: { v: `~€28m+ committed`, x: `Bonny (~€25m), Diouf (undisclosed) and Provedel (€3m) are done; no further major incomings reported as advanced.` },
  spendOut: { v: `Limited`, x: `No confirmed sales; Stanković's future is a squad-management question rather than an active process.` },
  methodLegend: ``
};
