/* ============================================================
   MERCATO IQ · CLUB DATA · TORINO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Torino", mono: "TOR", slug: "torino",
  primary: "#7A1F2B", primaryBright: "#B0475A", primaryDeep: "#4A121A",
  primaryRgb: "122,31,43",
  breadcrumb: ["Italy","Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Roberto D'Aversa (since Feb 2026, after Marco Baroni's sacking)",
  dof: "Gianluca Petrachi (Sporting Director, reinstated after Davide Vagnati's exit)",
  europe: "None for 2026/27",
  finish: "13th Serie A (2025/26, 45 pts - level on points with Parma)",
  owner: "Urbano Cairo (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/torino/"],
  queries: ["Torino transfer news 2026", "Torino Perri Ngonge Comuzzo", "Torino D'Aversa Petrachi signings"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Torino"
};

const CONFIRMED_IN = [
  {name:"Giovanni Simeone", sub:"Striker, ARG, 30", club:"Napoli", pos:"ST", fee:"Buyout clause", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Activated release clause to lead the Torino attack under new coach Davide Abate."},
  {name:"Tino Anjorin", sub:"Midfielder, ENG, 24", club:"Empoli", pos:"CM", fee:"Buyout clause", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed to bolster the Torino midfield."},
  {name:"Marko Kulenovic", sub:"Striker, CRO", club:"Dinamo Zagreb", pos:"ST", fee:"Buyout clause", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Added as attacking depth."},
  {name:"Pietro Comuzzo", sub:"Centre-back, ITA, 21", club:"Fiorentina", pos:"CB", fee:"Loan, €1m fee + €19m purchase option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Medical exams completed; full agreement reached on loan-with-option structure."},
  {name:"Serdar Comert", sub:"Centre-back, SUI, free agent", club:"Free agent", pos:"CB", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed as a free-agent defensive reinforcement."},
  {name:"Michael Fitz-Jim", sub:"Midfielder, NED", club:"Ajax", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Prospect identified by new coach Davide Abate, having worked with him previously under Farioli at Ajax."},
  {name:"Gaetano Oristanio", sub:"Forward, ITA, 22", club:"Venezia", pos:"CAM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed medical examinations after agreeing to move from Venezia."}
];

const CONFIRMED_OUT = [
  {name:"Filip Walukiewicz", sub:"Centre-back, POL, 26", club:"Sassuolo", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed as part of the defensive overhaul."},
  {name:"Antonio Silva", sub:"Forward", club:"Mantova", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Moved on to Serie B side Mantova."}
];

const INCOMING = [
  {name:"Lucas Perri", sub:"27 · GK · Brazil", club:"Leeds United", pos:"GK", report:"24 Jul 2026", src:"Football Italia", tier:2, fee:"Undisclosed", truth:62, prob:48, light:"y", trend:"up", note:"Described as 'closing in' on the move; Leeds' medical has been delayed only because the English club is finalising a replacement (James Trafford), suggesting the Torino side of the deal is essentially agreed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:48},
  {name:"Cyril Ngonge", sub:"24 · W · Belgium", club:"Napoli", pos:"W", report:"14 Jul 2026", src:"FootItalia.com", tier:2, fee:"Loan with €8m option to buy", truth:55, prob:38, light:"y", trend:"up", note:"Advanced talks with Ngonge having already approved the move and skipped Napoli pre-season training; Club Brugge and other European sides were interested but the player prioritised Torino.", lastSeen:"2026-08-04T19:10:50Z", baseProb:38},
  {name:"Eray Comert", sub:"27 · CB · Switzerland", club:"Free agent", pos:"CB", report:"26 Jul 2026", src:"Football Italia", tier:3, fee:"Free", truth:48, prob:30, light:"y", trend:"flat", note:"Free-agent centre-back in advanced talks after leaving his previous club.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Dominik Livakovic", sub:"31 · GK · Croatia", club:"Fenerbahce", pos:"GK", report:"21 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:42, prob:20, light:"o", trend:"flat", note:"Both Torino and Dinamo Zagreb have held talks with the goalkeeper's agent - one of three names Torino are exploring for the No.1 shirt alongside Perri and Ramsdale.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Takehiro Tomiyasu", sub:"Defender, JPN, 27, free agent", club:"Free agent (ex-Arsenal/Bologna)", pos:"CB", report:"Torino are among the clubs tracking free agent Tomiyasu, who is currently training with Crystal Palace on trial.", src:"Calciomercato.com", tier:2, fee:"Undisclosed", truth:50, prob:25, light:"o", trend:"flat", note:"Also being considered by Venezia and Sassuolo in the same period.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Lucas Ryan", sub:"Centre-back, BRA", club:"Lokomotiv Plovdiv", pos:"CB", report:"Torino have identified the Brazilian defender playing in Bulgaria as a depth target.", src:"Calciomercato.com", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"Early-stage scouting link.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Salvatore Falcone", sub:"Goalkeeper, ITA", club:"Lecce", pos:"GK", report:"Was previously Torino's primary goalkeeper target before the club shifted focus to Lucas Perri.", src:"Tuttomercatoweb", tier:2, fee:"Undisclosed", truth:50, prob:15, light:"o", trend:"flat", note:"Superseded by the more advanced Perri negotiation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];

const OUTGOING = [
  {name:"Gvidas Gineitis", sub:"22 · CM · Lithuania", club:"Celtic", pos:"CM", report:"2 Aug 2026", src:"Nicolo Schira / FootballTransfers", tier:2, fee:"~€14-15m", truth:58, prob:42, light:"y", trend:"up", note:"Schira reports Celtic preparing an improved offer for the midfielder, which would be a club-record Celtic signing; Torino are said to value him at around €15m.", lastSeen:"2026-08-04T19:10:50Z", baseProb:42},
  {name:"Che Adams", sub:"Striker, SCO, 30", club:"Wolverhampton Wanderers", pos:"ST", report:"Wolves have shown interest; Torino will consider offers in excess of €5m.", src:"Tuttomercatoweb", tier:2, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"Fee threshold reportedly set by Torino's hierarchy.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Cheikh Seck", sub:"Winger, SEN", club:"Partizan Belgrade", pos:"LW", report:"Could remain out on loan in Belgrade for a further season.", src:"Tuttomercatoweb", tier:3, fee:"Undisclosed", truth:40, prob:35, light:"y", trend:"flat", note:"Loan extension being weighed rather than a fresh permanent exit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const RISERS = [
  {ar:"⬆", t:"<b>Lucas Perri pursuit advances</b>: goalkeeper move described as 'closing in', with Leeds' own replacement search the only holdup."},
  {ar:"⬆", t:"<b>Cyril Ngonge talks progress</b>: winger has already approved the move and skipped Napoli training."},
  {ar:"⬆", t:"<b>Gvidas Gineitis linked with Celtic exit</b>: Scottish champions reportedly preparing an improved, club-record bid for the midfielder."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Torino are shopping for a new No.1 with three separate goalkeeper names in play (Perri, Livakovic, Ramsdale) alongside genuine progress on Ngonge and defensive reinforcements Comuzzo and Comert."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Goalkeeper", w:65, x:"Three separate names (Perri, Livakovic, Ramsdale) are in play for the same shirt - Perri appears the most advanced."},
  {p:"Wide attack", w:45, x:"Ngonge is a genuinely advancing loan-to-buy pursuit from Napoli."},
  {p:"Centre-back depth", w:35, x:"Both Comuzzo and Comert are in parallel advanced talks."}
];

const WATCHLIST = [
  {name:"Lucas Perri", club:"Leeds United", pos:"GK", dir:"in", age:"~10 days", tier:2, note:"Described as closing in; only Leeds' own goalkeeper business is delaying the medical."},
  {name:"Cyril Ngonge", club:"Napoli", pos:"W", dir:"in", age:"~3 weeks", tier:2, note:"Player has approved the move and skipped Napoli's pre-season training."},
  {name:"Gvidas Gineitis", club:"Celtic", pos:"CM", dir:"out", age:"~2 days", tier:2, note:"Celtic reportedly preparing an improved, club-record bid; Torino want around €15m."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Torino", u:"https://football-italia.net/category/teams/torino/"},
  footitalia: {l:"FootItalia.com", u:"https://www.footitalia.com/"},
  footballtransfersGineitis: {l:"FootballTransfers · Gineitis", u:"https://www.footballtransfers.com/en/transfer-news/gb-sct-premier-league/2026/08/celtic-transfer-news-gvidas-gineitis-torino-offer-summer-2026"},
  skySportLucasPerri: {l:"Sky Sport", u:"https://sport.sky.it/calciomercato/2026/07/24/calciomercato-torino-comert-perri-news"},
  calciomercatocomTakehiroTomiyasu: {l:"Calciomercato.com", u:"https://www.calciomercato.com/torino"},
  tuttomercatowebSalvatoreFalcone: {l:"Tuttomercatoweb", u:"https://www.tuttomercatoweb.com/torino"},
  skySportGiovanniSimeone: {l:"Sky Sport", u:"https://sport.sky.it/calciomercato/torino"},
  blastingNewsItaliaPietroComuzzo: {l:"Blasting News Italia", u:"https://it.blastingnews.com/calcio/2026/07/torino-chiude-laffare-comuzzo-il-difensore-dalla-fiorentina-in-prestito-004082363.html"}};

const LINKMAP = {
  "Lucas Perri": ["footballItalia", "skySportLucasPerri"],
  "Cyril Ngonge": ["footitalia"],
  "Pietro Comuzzo": ["footballItalia", "blastingNewsItaliaPietroComuzzo"],
  "Eray Comert": ["footballItalia"],
  "Dominik Livakovic": ["footballItalia"],
  "Aaron Ramsdale": ["footballItalia"],
  "Gvidas Gineitis": ["footballtransfersGineitis"],
  "Takehiro Tomiyasu": ["calciomercatocomTakehiroTomiyasu"],
  "Lucas Ryan": ["calciomercatocomTakehiroTomiyasu"],
  "Salvatore Falcone": ["tuttomercatowebSalvatoreFalcone"],
  "Che Adams": ["tuttomercatowebSalvatoreFalcone"],
  "Cheikh Seck": ["tuttomercatowebSalvatoreFalcone"],
  "Giovanni Simeone": ["skySportGiovanniSimeone"],
  "Tino Anjorin": ["skySportGiovanniSimeone"],
  "Marko Kulenovic": ["skySportGiovanniSimeone"],
  "Serdar Comert": ["skySportLucasPerri"],
  "Michael Fitz-Jim": ["calciomercatocomTakehiroTomiyasu"],
  "Gaetano Oristanio": ["skySportGiovanniSimeone"],
  "Filip Walukiewicz": ["skySportGiovanniSimeone"],
  "Antonio Silva": ["skySportGiovanniSimeone"]};
const WL_LINKMAP = {
  "Lucas Perri": ["footballItalia"],
  "Cyril Ngonge": ["footitalia"],
  "Gvidas Gineitis": ["footballtransfersGineitis"]
};

const PROSE = {
  heroH2: `D'Aversa's rebuild: a three-way goalkeeper hunt and genuine progress on Ngonge`,
  heroLede: `Torino head into 2026/27 under <b>Roberto D'Aversa</b>, who took over from the sacked Marco Baroni in February, with <b>Gianluca Petrachi</b> reinstated as sporting director after Davide Vagnati's exit. The club are shopping hard for a new No.1, with <b>Lucas Perri</b> (Leeds United), <b>Dominik Livakovic</b> (Fenerbahce) and <b>Aaron Ramsdale</b> (Southampton) all in play - Perri's move looks the most advanced, held up only by Leeds finalising their own replacement. In attack, Napoli winger <b>Cyril Ngonge</b> has already approved a loan-to-buy move and skipped pre-season training in Naples, while <b>Pietro Comuzzo</b> and free agent <b>Eray Comert</b> are both in parallel talks to strengthen the back line.`,
  metaRow: `<span>DECISION-MAKER: <b>Gianluca Petrachi</b> (Sporting Director)</span> <span>HEAD COACH: <b>Roberto D'Aversa</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">13<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `No signings officially confirmed yet; Perri and Ngonge are the most advanced pursuits.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Midfielder Gvidas Gineitis is drawing a club-record bid from Celtic; no other departures reported as advanced this window.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `TBD - none confirmed`, x: `Perri, Ngonge, Comuzzo and Comert are all advancing but unsigned.` },
  spendOut: { v: `None reported`, x: `No outgoing business reported as advanced this window.` },
  methodLegend: ``
};
