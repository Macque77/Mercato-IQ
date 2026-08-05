/* ============================================================
   MERCATO IQ · CLUB DATA · US SASSUOLO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "US Sassuolo", mono: "SAS", slug: "sassuolo",
  primary: "#00A650", primaryBright: "#63E6A0", primaryDeep: "#00602E",
  primaryRgb: "0,166,80",
  breadcrumb: ["Italy","Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Alberto Aquilani (since 13 Jun 2026, his first Serie A job, replacing Fabio Grosso who left for Fiorentina)",
  dof: "Club sporting management (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "11th Serie A (2025/26)",
  owner: "Carlo Rossi (Mapei/Squinzi family interests)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/sassuolo/"],
  queries: ["Sassuolo transfer news 2026", "Sassuolo Muharemovic Volpato Bowie", "Sassuolo Aquilani signings"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · US Sassuolo"
};

const CONFIRMED_IN = [
  {name:"Vasilije Adzic", sub:"Attacking midfielder, MNE, 20", club:"Juventus", pos:"CAM", fee:"Loan with buy option (Juventus retain counter-option)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sassuolo won the race ahead of Cagliari; Spalletti sanctioned the exit to secure Adzic regular game-time."},
  {name:"Filip Walukiewicz", sub:"Centre-back, POL, 26", club:"Torino", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left Torino as part of their squad rebuild under new boss Davide Abate."}
];

const CONFIRMED_OUT = [
  {name:"Tarik Muharemovic", sub:"22 · CB · Bosnia", club:"Leeds United", pos:"CB", fee:"€40m (Juventus receive €20m via sell-on)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 14 Jul. Newcastle, Sunderland and Bournemouth were also credited with interest before Leeds completed the deal; Juventus retain a 50% sell-on clause from a previous transfer, banking €20m of the fee."}
];

const INCOMING = [
  {name:"Kieron Bowie", sub:"21 · ST · Scotland", club:"Hellas Verona", pos:"ST", report:"31 Jul 2026", src:"Football Italia", tier:2, fee:"~€12m (Verona's asking price)", truth:60, prob:55, light:"g", trend:"up", note:"Sassuolo's interest was reported in early July with Verona demanding around €12m; later coverage lists the move as close to completion following the striker's drop into Serie B with Verona's relegation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Ognjen Ugresic", sub:"22 · CM · Serbia", club:"Partizan Belgrade", pos:"CM", report:"12 Jul 2026", src:"Football Italia", tier:3, fee:"~€6m", truth:50, prob:25, light:"o", trend:"flat", note:"Sassuolo one of several clubs (also Udinese, Bologna, Club Brugge, Frankfurt, Monaco) in a genuine bidding war for the Partizan midfielder - competition makes any single suitor's chances modest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Daniele Maldini", sub:"Attacking midfielder, ITA, 24", club:"Atalanta", pos:"CAM", report:"Sassuolo are pursuing Maldini as a primary offensive/trequartista target, contingent on Atalanta completing the signing of a replacement (Alajbegovic).", src:"Calciomercato.it", tier:2, fee:"Undisclosed", truth:55, prob:40, light:"y", trend:"flat", note:"Deal linked to Atalanta first resolving their own incoming replacement.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Francesco Acerbi", sub:"Centre-back, ITA, 38, free agent", club:"Free agent", pos:"CB", report:"Sassuolo are reportedly considering the veteran free-agent defender to help replace departed Muharemovic.", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:40, prob:25, light:"o", trend:"flat", note:"Speculative free-agent link, no formal contact confirmed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Senne Van der Brempt", sub:"Full-back, BEL, 24", club:"Como", pos:"RB", report:"Sassuolo made a formal offer for the Como full-back, who initially turned it down.", src:"Tuttomercatoweb", tier:2, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"Player reportedly cool on the move as of late July.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];

const OUTGOING = [
  {name:"Cristian Volpato", sub:"21 · AM · Australia", club:"Fiorentina", pos:"AM", report:"4 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:48, prob:25, light:"o", trend:"flat", note:"Volpato has said he's open to leaving for a 'great club' after the World Cup, with Fiorentina the club credited with concrete interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Andrea Pinamonti", sub:"Striker, ITA, 27", club:"Lazio", pos:"ST", report:"Lazio boss Gattuso has identified Pinamonti as a back-up offensive reinforcement while Lazio's priority remains a loan move for Milan's Santiago Gimenez.", src:"La Repubblica", tier:1, fee:"Undisclosed", truth:60, prob:30, light:"y", trend:"flat", note:"Contact established between the clubs but Lazio's real priority lies elsewhere.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Armand Lauriente", sub:"Winger, FRA, 26", club:"Besiktas", pos:"LW", report:"Besiktas interest in Lauriente has reportedly cooled after initial contact in mid-July.", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Deal appears to have stalled as of early August.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];

const RISERS = [
  {ar:"⬆", t:"<b>Tarik Muharemovic sale confirmed</b>: €40m deal with Leeds United, with Juventus banking €20m via a sell-on clause."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Alberto Aquilani's first Serie A job begins with a major Muharemovic sale banked and Kieron Bowie edging closer as his replacement, while Cristian Volpato's Fiorentina links develop in parallel."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Leandro Trossard to Sassuolo</b>: dead - the Arsenal winger signed for Besiktas instead."}
];

const POSITIONS = [
  {p:"Centre-back", w:55, x:"Muharemovic's sale to Leeds creates a direct need; Bowie is a forward target rather than a defensive one, so this slot remains genuinely open."},
  {p:"Attacking midfield", w:30, x:"Volpato's potential Fiorentina exit would open a creative slot to fill."}
];

const WATCHLIST = [
  {name:"Kieron Bowie", club:"Hellas Verona", pos:"ST", dir:"in", age:"~3 days", tier:2, note:"Reported close to completion following Verona's relegation to Serie B."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Sassuolo", u:"https://football-italia.net/category/teams/sassuolo/"},
  bwrao: {l:"Black & White & Read All Over", u:"https://www.blackwhitereadallover.com/"},
  calciomercatoitDanieleMaldini: {l:"Calciomercato.it", u:"https://www.calciomercato.it"},
  tuttomercatowebFrancescoAcerbi: {l:"Tuttomercatoweb", u:"https://www.tuttomercatoweb.com/sassuolo"},
  laRepubblicaviaCalciomercatoitAndreaPinamonti: {l:"La Repubblica (via Calciomercato.it)", u:"https://www.calciomercato.it/2026/08/03/pinamonti-nel-mirino-della-lazio-contatto-con-il-sassuolo/"},
  calciomercatoitClaudioGaluppiVasilijeAdzic: {l:"Calciomercato.it (Claudio Galuppi)", u:"https://www.calciomercato.it/2026/08/03/adzic-al-sassuolo-ci-siamo-lascia-la-juventus-affare-ad-un-passo/"},
  skySportFilipWalukiewicz: {l:"Sky Sport", u:"https://sport.sky.it/calciomercato/torino"},
  bBCSportTarikMuharemovic: {l:"BBC Sport", u:"https://www.bbc.co.uk/sport/football/articles/cpd3d6vx803o"}};

const LINKMAP = {
  "Tarik Muharemovic": ["footballItalia", "bBCSportTarikMuharemovic"],
  "Kieron Bowie": ["footballItalia"],
  "Ognjen Ugresic": ["footballItalia"],
  "Cristian Volpato": ["footballItalia"],
  "Daniele Maldini": ["calciomercatoitDanieleMaldini"],
  "Francesco Acerbi": ["tuttomercatowebFrancescoAcerbi"],
  "Senne Van der Brempt": ["tuttomercatowebFrancescoAcerbi"],
  "Joao Mario": ["tuttomercatowebFrancescoAcerbi"],
  "Andrea Pinamonti": ["laRepubblicaviaCalciomercatoitAndreaPinamonti"],
  "Armand Lauriente": ["tuttomercatowebFrancescoAcerbi"],
  "Vasilije Adzic": ["calciomercatoitClaudioGaluppiVasilijeAdzic"],
  "Filip Walukiewicz": ["skySportFilipWalukiewicz"]};
const WL_LINKMAP = {
  "Kieron Bowie": ["footballItalia"]
};

const PROSE = {
  heroH2: `Aquilani's first Serie A job: Muharemovic cashed in for €40m as Bowie edges closer`,
  heroLede: `Sassuolo enter 2026/27 under <b>Alberto Aquilani</b>, taking his first Serie A head-coaching job after <b>Fabio Grosso's</b> summer departure for Fiorentina, following an 11th-place finish. The big number this window is <b>Tarik Muharemovic's</b> €40m sale to Leeds United - though Juventus quietly bank €20m of that via a sell-on clause from his original move to Sassuolo. Scotland forward <b>Kieron Bowie</b> looks close to arriving from newly-relegated Hellas Verona as a replacement, while creative midfielder <b>Cristian Volpato</b> has said he's open to a 'great club' move, with Fiorentina the concrete interested party.`,
  metaRow: `<span>DECISION-MAKER: <b>Club sporting management</b></span> <span>HEAD COACH: <b>Alberto Aquilani</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">11<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `Bowie's move is reported as close to completion but not yet officially announced.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Volpato's Fiorentina links are genuine but not yet at an advanced negotiation stage.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `TBD - Bowie (~€12m) close`, x: `No permanent signings officially confirmed yet.` },
  spendOut: { v: `€40m banked`, x: `Muharemovic's sale to Leeds is the major confirmed departure of the window.` },
  methodLegend: ``
};
