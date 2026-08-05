/* ============================================================
   MERCATO IQ · CLUB DATA · ATLÉTICO MADRID · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Atlético Madrid",
  mono: "ATM",
  slug: "atletico-madrid",
  primary: "#EB6E1F",
  primaryBright: "#FF8833",
  primaryDeep: "#CC5500",
  primaryRgb: "235,110,31",
  breadcrumb: ["Spain", "La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Diego Simeone",
  dof: "Andrea Berta (Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "3rd La Liga (2025/26)",
  owner: "Enrique Cerezo (CEO)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["Atlético Madrid transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Atlético Madrid"
};

const CONFIRMED_IN = [
  {name:"Johnny Cardoso", sub:"24 · CDM · USA", to:"permanent from Real Betis", fee:"€30m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 10 Jul. The USMNT holding midfielder joins to add defensive-midfield depth and physicality behind Koke and De Paul."},
  {name:"Kang-in Lee", sub:"Attacking midfielder / right winger", club:"Paris Saint-Germain", pos:"MF", fee:"€35m + €5m in variables", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"South Korea international completed a five-year deal, inheriting Griezmann's old number."},
  {name:"Alejandro Grimaldo", sub:"Left-back", club:"Bayer Leverkusen", pos:"DF", fee:"~€20m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Spanish left-back signed a four-season deal, returning to LaLiga from the Bundesliga."},
  {name:"Nico González", sub:"Winger (loan)", club:"Juventus", pos:"FW", fee:"Loan with ~€34m obligation-to-buy structure", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan switch from Juventus with a formula that could turn permanent for around €34m."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Gabriel Jesus", sub:"26 · ST · Brazil", club:"Manchester City", pos:"ST", report:"1 Aug 2026", src:"Sky Sports / Samuel Luckhurst", tier:2, fee:"€45m", truth:65, prob:42, light:"y", trend:"up", note:"Reports from Manchester-area sources suggest City are open to selling Jesus. Atlético are interested, but a deal is far from certain.", lastSeen:"2026-08-04T19:10:50Z", baseProb:42},
  {name:"Villarreal winger", sub:"TBD", club:"Villarreal", pos:"RW", report:"30 Jul 2026", src:"Matteo Moretto / Relevo", tier:2, fee:"€20m+", truth:55, prob:35, light:"y", trend:"flat", note:"Moretto reports Atlético monitoring Villarreal's attacking options as a squad-depth play.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Jack Grealish", sub:"Winger, Man City outcast", club:"Manchester City", pos:"MF", report:"Atletico are weighing up a move for Grealish, who is out of favour at City, with an Everton loan repeat or an Aston Villa return also on the table.", src:"The Sun / TNT Sports", tier:3, fee:"Undisclosed", truth:45, prob:20, light:"o", trend:"flat", note:"Grealish has fallen down the pecking order at City and several suitors are circling, but a straight Atletico transfer looks like one of three competing options rather than the leading one.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Cristian 'Cuti' Romero", sub:"CB, Tottenham exit door open", club:"Tottenham Hotspur", pos:"DF", report:"Atletico are described as the frontrunners for Romero after Spurs signed Senesi and van Hecke, with Barcelona and Inter also monitoring but less financially placed to act.", src:"ElDesmarque (Rubén Uría)", tier:2, fee:"€40-50m", truth:65, prob:40, light:"y", trend:"flat", note:"Spurs have effectively green-lit his exit and Simeone wants him, though Atletico reportedly need to offload Giménez first to fund the move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];

const OUTGOING = [
  {name:"Julián Álvarez", sub:"FW, Barcelona courtship ongoing", club:"Barcelona", pos:"FW", report:"Romano reports Barcelona and Atletico remain in dialogue over Álvarez even as Atletico do 'everything possible' to block the move, with only his roughly €500m clause offering a clean route.", src:"Fabrizio Romano", tier:1, fee:"€500m release clause", truth:90, prob:20, light:"o", trend:"flat", note:"Atletico's resistance appears genuine and firm, making this more of a slow-burning saga than an imminent departure this window.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Alexander Sørloth", sub:"FW, Juventus talks revived", club:"Juventus", pos:"FW", report:"Italian outlets report Juventus and Atletico have reopened talks over Sørloth, with a Nico González-inclusive structure being floated to bridge the valuation gap.", src:"Tuttosport", tier:2, fee:"~€25-30m (talks tied to Nico González deal)", truth:55, prob:40, light:"y", trend:"flat", note:"The saga has stopped and started for weeks, and the fact Atletico already has González suggests any Sørloth-out complement is a live possibility rather than dead.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Nahuel Molina", sub:"RB, Serie A suitors queuing", club:"Inter Milan", pos:"DF", report:"Juventus, Roma and Napoli have all shown interest but Inter, pushed by coach Chivu as a Djed Spence alternative, are seen as most likely to make a concrete bid around Atletico's €25m asking price.", src:"EstoEsAtleti / ElDesmarque", tier:2, fee:"~€25m asking price", truth:65, prob:55, light:"g", trend:"flat", note:"Simeone has reportedly accepted a sale is likely this window even though he'd prefer to keep Molina as Llorente cover.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Marc Pubill", sub:"RB, Man Utd admirers", club:"Manchester United", pos:"DF", report:"United are reported to have set their sights on the young right-back, though his enormous release clause is described as a real stumbling block.", src:"CaughtOffside", tier:3, fee:"€80m+ release clause (reports vary widely)", truth:35, prob:15, light:"o", trend:"flat", note:"Pubill only just established himself at Atletico and the clause size makes any deal this window look unlikely regardless of United's admiration.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];

const RISERS = [
  {ar:"⬆", t:"<b>Johnny Cardoso official</b>: €30m arrival from Real Betis adds midfield steel for Simeone."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Atlético add defensive-midfield depth with Cardoso; a forward addition (Jesus or a Villarreal winger) remains the live thread."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Jamal Musiala to Atlético Madrid</b>: a fabricated/anachronistic link - Musiala is recovering at Bayern Munich from the serious ankle injury sustained at the 2025 Club World Cup and has not been transferred anywhere."}
];

const POSITIONS = [
  {p:"Forward", w:65, x:"Jesus interest signals a depth pursuit up front after Cardoso's midfield signing."}
];

const WATCHLIST = [];

const HUB = {
  "gnews-johnnycardoso": {l:"Related news search: Johnny Cardoso", u:"https://news.google.com/search?q=Atl%C3%A9tico%20Madrid%20Johnny%20Cardoso%20transfer&hl=en-GB&gl=GB"},
  "sky": {l:"Sky Sports", u:"https://www.skysports.com/football/news"},
  "luckhurst": {l:"Samuel Luckhurst (MEN)", u:"https://www.manchestereveningnews.co.uk/all-about/manchester-united-fc"},
  "moretto": {l:"Matteo Moretto", u:"https://x.com/MatteMoretto"},
  "relevo": {l:"Relevo", u:"https://www.relevo.com/"},
  tNTSportsJackGrealish: {l:"TNT Sports", u:"https://www.tntsports.co.uk/football/transfers/2026-2027/atletico-madrid-jack-grealish-tottenham-hotspur-victor-osimhen-hull-man-utd-bayindir_sto23324824/story.shtml"},
  elDesmarqueCristianCutiRomero: {l:"ElDesmarque", u:"https://www.eldesmarque.com/futbol/mercado-de-fichajes/20260731/opciones-atletico-madrid-barcelona-inter-fichaje-cuti-romero_18_019861729.html"},
  goalcomMohamedSalah: {l:"Goal.com", u:"https://www.goal.com/en/lists/atletico-madrid-mohamed-salah-top-summer-transfer-target-free-agent/bltbb1c2f3f3e09fcfe"},
  fabrizioRomanoJulinlvarez: {l:"Fabrizio Romano", u:"https://www.goal.com/en/news/romano-barcelona-and-atletico-s-negotiations-over-alvarez-continue-and-this-is-the-best-deal/blt97e9a9dbbaa11d78"},
  tuttosportAlexanderSrloth: {l:"Tuttosport", u:"https://www.tuttosport.com/news/calcio/calciomercato/2026/08/04-150310291/riecco_sorloth_juve_e_atletico_madrid_lultima_idea_che_sistema_anche_nico_gonzalez/3"},
  estoEsAtletiNahuelMolina: {l:"EstoEsAtleti", u:"https://www.estoesatleti.es/articulo/noticias/nahuel-molina-simeone-acepta-salida-italia/20260730201517040331.html"},
  elGolDigitalJohnnyCardoso: {l:"El Gol Digital", u:"https://www.elgoldigital.com/futbol/atletico-de-madrid/johnny-cardoso-rumores-traspaso-atletico-madrid-verano-2026/"},
  caughtOffsideMarcPubill: {l:"CaughtOffside", u:"https://www.caughtoffside.com/2026/05/31/sources-spaniard-release-clause-targeted-man-united/"},
  eSPNKanginLee: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49446285/lee-kang-atletico-madrid-psg-la-liga-ligue-1"},
  infobaeAlejandroGrimaldo: {l:"Infobae", u:"https://www.infobae.com/espana/deportes/2026/06/30/el-atletico-de-madrid-hace-oficial-el-fichaje-de-grimaldo-mas-de-20-millones-de-euros-y-cuatro-temporadas/"},
  oneFootballNicoGonzlez: {l:"OneFootball", u:"https://onefootball.com/en/news/official-juventus-send-nico-gonzalez-to-atletico-madrid-in-potential-34m-deal-41601467"}};

const LINKMAP = {
  "Johnny Cardoso": ["gnews-johnnycardoso", "elGolDigitalJohnnyCardoso"],
  "Gabriel Jesus": ["sky", "luckhurst"],
  "Villarreal winger": ["moretto", "relevo"],
  "Jack Grealish": ["tNTSportsJackGrealish"],
  "Cristian 'Cuti' Romero": ["elDesmarqueCristianCutiRomero"],
  "Mohamed Salah": ["goalcomMohamedSalah"],
  "Julián Álvarez": ["fabrizioRomanoJulinlvarez"],
  "Alexander Sørloth": ["tuttosportAlexanderSrloth"],
  "Nahuel Molina": ["estoEsAtletiNahuelMolina"],
  "Marc Pubill": ["caughtOffsideMarcPubill"],
  "Kang-in Lee": ["eSPNKanginLee"],
  "Alejandro Grimaldo": ["infobaeAlejandroGrimaldo"],
  "Nico González": ["oneFootballNicoGonzlez"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Atlético Madrid · 2026/27 Season`,
  heroLede: `Transfer window active. Atlético Madrid preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
