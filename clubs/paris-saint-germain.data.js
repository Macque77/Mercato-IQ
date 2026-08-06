/* ============================================================
   MERCATO IQ · CLUB DATA · PARIS SAINT-GERMAIN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Paris Saint-Germain",
  mono: "PSG",
  slug: "paris-saint-germain",
  primary: "#004687",
  primaryBright: "#0066CC",
  primaryDeep: "#002654",
  primaryRgb: "0,70,135",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luis Enrique",
  dof: "Klaas-Jan Huntelaar (Director)",
  europe: "UEFA Champions League (2026/27) - back-to-back title holders",
  finish: "1st Ligue 1 (2025/26) - champions",
  owner: "Qatar Sports Investments",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.goal.com/"],
  queries: ["Paris Saint-Germain transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Paris Saint-Germain"
};

const CONFIRMED_IN = [
  {name:"João Neves", sub:"20 · CM · Portugal", to:"permanent from Benfica", fee:"€60m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 15 Jul. Young midfielder joins from Benfica on long-term deal. Key part of PSG's midfield future."}
];

const CONFIRMED_OUT = [
  {name:"Randal Kolo Muani", sub:"27 · ST · France", club:"Juventus", pos:"ST", fee:"Loan fee + ~€43-50m mandatory obligation", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departs on a loan-to-buy after a saga running back to his original January 2025 loan spell at Juventus - now converted into a permanent-track deal."},
  {name:"Gonçalo Ramos", sub:"25 · ST · Portugal", club:"AC Milan", pos:"ST", fee:"€80m+ (with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"The Portugal international departs for Milan in a marquee sale that funds further PSG business, as back-to-back Champions League winners reshape their forward line."},
  {name:"Lee Kang-in", sub:"Official switch to Atlético", club:"Atlético Madrid", pos:"CAM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a five-year deal and inherits the No.7 shirt vacated by Antoine Griezmann"}
];

const INCOMING = [
  {name:"Mika Godts", sub:"20 · W · Belgium", club:"Ajax", pos:"W", report:"4 Aug 2026", src:"Fabrizio Romano", tier:1, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"flat", note:"Romano says the move is 'progressing well' with a player agreement reportedly reached, though no club-to-club fee is confirmed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Zion Suzuki", sub:"PSG accelerate move for Japan No.1", club:"Parma", pos:"GK", report:"PSG have opened talks with Parma over a swift deal for Japan international goalkeeper Zion Suzuki with an opening bid of €33m plus bonuses.", src:"Fabrizio Romano", tier:1, fee:"€33m + bonuses", truth:78, prob:68, light:"g", trend:"flat", note:"PSG want competition for Chevalier/Safonov; Juventus also interested", lastSeen:"2026-08-04T19:10:50Z", baseProb:68},
  {name:"Lucas Digne", sub:"Release clause return to Paris", club:"Aston Villa", pos:"LB", report:"PSG are set to activate Digne's €10m release clause, with the left-back said to have already agreed personal terms on a three-year deal.", src:"Fabrizio Romano", tier:1, fee:"€10m (release clause)", truth:85, prob:80, light:"g", trend:"flat", note:"Would provide cover for Nuno Mendes; Digne previously at PSG 2013-15", lastSeen:"2026-08-04T19:10:50Z", baseProb:80},
  {name:"Ferran Torres", sub:"Agreement in principle as Barcola cover", club:"Barcelona", pos:"ST", report:"Torres has reportedly reached an agreement in principle to join PSG as the club lines up forward reinforcements with only a year left on his Barcelona deal.", src:"Gianluca Di Marzio", tier:1, fee:"Undisclosed", truth:70, prob:62, light:"g", trend:"flat", note:"One of several forward targets alongside Monaco's Akliouche and Leipzig's Diomandé", lastSeen:"2026-08-04T19:10:50Z", baseProb:62},
  {name:"Guéla Doué", sub:"Eyed as long-term Hakimi cover", club:"RC Strasbourg", pos:"RB", report:"PSG have registered interest in Strasbourg's Ivorian full-back as a potential long-term replacement option for Achraf Hakimi.", src:"L'Équipe", tier:2, fee:"€20m (valuation)", truth:52, prob:35, light:"y", trend:"flat", note:"No significant progress yet; Doué under contract at Strasbourg until 2029", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const OUTGOING = [
  {name:"Bradley Barcola", sub:"23 · W · France", club:"Liverpool", pos:"W", report:"27 Jul – 2 Aug 2026", src:"Fabrizio Romano / Nicolo Schira", tier:1, fee:"Liverpool ~€100m offer vs PSG demanding €150-170m", truth:58, prob:30, light:"y", trend:"flat", note:"Personal terms reportedly agreed in principle, but Romano says he doesn't expect an imminent move given the clubs remain far apart on fee.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Ibrahim Mbaye", sub:"Premier League and Bundesliga circling academy winger", club:"Manchester City (shortlisted)", pos:"RW", report:"PSG's 18-year-old academy forward Mbaye has been shortlisted by Manchester City, with Aston Villa, Tottenham and Borussia Dortmund also interested.", src:"Get French Football News", tier:3, fee:"Undisclosed", truth:45, prob:35, light:"y", trend:"flat", note:"Highly rated prospect with growing international experience", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const RISERS = [
  {ar:"⬆", t:"<b>João Neves official</b>: Portuguese midfielder confirmed from Benfica for €60m."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Kolo Muani and Gonçalo Ramos depart</b>: both forwards move on (Juventus, AC Milan respectively) as PSG reshape their attacking options after back-to-back European titles."}
];

const NEW = [
  {ar:"✦", t:"Back-to-back Champions League winners reshape the forward line, moving on both Kolo Muani (Juventus) and Gonçalo Ramos (Milan) as Neves solidifies the midfield."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Left winger", w:70, x:"Market monitoring for potential Vinicius replacement as Ornstein reports Real Madrid winger targeted by Saudi Arabia."}
];

const WATCHLIST = [];

const HUB = {
  "gnews-jooneves": {l:"Related news search: João Neves", u:"https://news.google.com/search?q=Paris%20Saint-Germain%20Jo%C3%A3o%20Neves%20transfer&hl=en-GB&gl=GB"},
  "gnews-randalkolomuani": {l:"Related news search: Randal Kolo Muani", u:"https://news.google.com/search?q=Paris%20Saint-Germain%20Randal%20Kolo%20Muani%20transfer&hl=en-GB&gl=GB"},
  "gnews-gonaloramos": {l:"Related news search: Gonçalo Ramos", u:"https://news.google.com/search?q=Paris%20Saint-Germain%20Gon%C3%A7alo%20Ramos%20transfer&hl=en-GB&gl=GB"},
  fabrizioRomanoviaFootballTransfersMikaGodts: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-transfer-news-chelsea-trevoh-chalobah-barcelona-rodri-real-madrid-franco-mastantuono"},
  fabrizioRomanoviaCaughtOffsideBradleyBarcola: {l:"Fabrizio Romano (via CaughtOffside)", u:"https://www.caughtoffside.com/2026/08/02/fabrizio-romano-bradley-barcola-liverpool-transfer-update-not-imminent/"},
  getFrenchFootballNewsFabrizioRomanoZionSuzuki: {l:"Get French Football News (Fabrizio Romano)", u:"https://www.getfootballnewsfrance.com/2026/psg-accelerate-talks-to-sign-japan-goalkeeper-zion-suzuki/"},
  getFrenchFootballNewsFabrizioRomanoRMCSportLucasDigne: {l:"Get French Football News (Fabrizio Romano / RMC Sport)", u:"https://www.getfootballnewsfrance.com/2026/psg-to-sign-aston-villas-lucas-digne-after-paying-e10m-release-clause/"},
  getFrenchFootballNewsGianlucaDiMarzioSkySportsFerranTorres: {l:"Get French Football News (Gianluca Di Marzio / Sky Sports)", u:"https://www.getfootballnewsfrance.com/2026/barcelonas-ferran-torres-reaches-psg-agreement/"},
  getFrenchFootballNewsLquipeLoAschiGulaDou: {l:"Get French Football News (L'Équipe / Léo Aschi)", u:"https://www.getfootballnewsfrance.com/2026/psg-take-interest-in-strasbourgs-guela-doue/"},
  getFrenchFootballNewsFabrizioRomanoBradleyBarcola: {l:"Get French Football News (Fabrizio Romano)", u:"https://www.getfootballnewsfrance.com/2026/psg-and-liverpool-enter-official-talks-over-bradley-barcola/"},
  getFrenchFootballNewsLukeEntwistleRandalKoloMuani: {l:"Get French Football News (Luke Entwistle)", u:"https://www.getfootballnewsfrance.com/2026/exclusive-psg-open-randal-kolo-muani-bidding-process-as-patience-with-juventus-wanes/"},
  getFrenchFootballNewsIbrahimMbaye: {l:"Get French Football News", u:"https://www.getfootballnewsfrance.com/2026/aston-villa-and-tottenham-target-ibrahim-mbaye-shortlisted-by-manchester-city/"},
  getFrenchFootballNewsFabrizioRomanoGonaloRamos: {l:"Get French Football News (Fabrizio Romano)", u:"https://www.getfootballnewsfrance.com/2026/goncalo-ramos-completes-e74m-move-to-ac-milan/"},
  getFrenchFootballNewsBastienChevalLeeKangin: {l:"Get French Football News (Bastien Cheval)", u:"https://www.getfootballnewsfrance.com/2026/official-atletico-de-madrid-sign-kang-in-lee-from-psg/"}};

const LINKMAP = {
  "João Neves": ["gnews-jooneves"],
  "Randal Kolo Muani": ["gnews-randalkolomuani", "getFrenchFootballNewsLukeEntwistleRandalKoloMuani"],
  "Gonçalo Ramos": ["gnews-gonaloramos", "getFrenchFootballNewsFabrizioRomanoGonaloRamos"],
  "Mika Godts": ["fabrizioRomanoviaFootballTransfersMikaGodts"],
  "Bradley Barcola": ["fabrizioRomanoviaCaughtOffsideBradleyBarcola", "getFrenchFootballNewsFabrizioRomanoBradleyBarcola"],
  "Zion Suzuki": ["getFrenchFootballNewsFabrizioRomanoZionSuzuki"],
  "Lucas Digne": ["getFrenchFootballNewsFabrizioRomanoRMCSportLucasDigne"],
  "Ferran Torres": ["getFrenchFootballNewsGianlucaDiMarzioSkySportsFerranTorres"],
  "Guéla Doué": ["getFrenchFootballNewsLquipeLoAschiGulaDou"],
  "Ibrahim Mbaye": ["getFrenchFootballNewsIbrahimMbaye"],
  "Lee Kang-in": ["getFrenchFootballNewsBastienChevalLeeKangin"]};
const WL_LINKMAP = {
  "João Neves": ["gnews-jooneves"]
};

const PROSE = {
  heroH2: `Back-to-back European champions reshape the forward line around João Neves`,
  heroLede: `PSG enter this window as both reigning Ligue 1 champions and back-to-back Champions League winners under <b>Luis Enrique</b>. With the trophy cabinet full, the summer's business has been about squad reshaping rather than a spending spree: <b>João Neves</b> arrives from Benfica for €60m to anchor the midfield long-term, while both <b>Randal Kolo Muani</b> (to Juventus, loan-to-buy) and <b>Gonçalo Ramos</b> (to AC Milan, €80m+) depart to make room and raise funds.`,
  metaRow: `<span>DECISION-MAKER: <b>Klaas-Jan Huntelaar</b> (Director)</span> <span>HEAD COACH: <b>Luis Enrique</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">1<small>st</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">UCL x2</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced this window.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Kolo Muani and Ramos departures reflect squad reshaping after a trophy-laden two seasons, not a financial need to sell.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€60m committed`, x: `Neves' arrival is the headline incoming business; no further deals reported as advanced.` },
  spendOut: { v: `€120m+ banked`, x: `Kolo Muani and Ramos departures raise significant funds while reshaping the forward line.` },
  methodLegend: ``
};
