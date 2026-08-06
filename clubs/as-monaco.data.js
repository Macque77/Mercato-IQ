/* ============================================================
   MERCATO IQ · CLUB DATA · AS MONACO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AS Monaco", mono: "AM", slug: "as-monaco",
  primary: "#E2001A", primaryBright: "#FF6259", primaryDeep: "#800010",
  primaryRgb: "226,0,26",
  breadcrumb: ["France","Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Filipe Luís (appointed 8 Jul 2026, succeeding Sébastien Pocognoli, who was dismissed 1 Jun 2026)",
  dof: "TBD (Director of Football)",
  europe: "UEFA Conference League (2026/27) - play-off round, as 7th-placed finishers",
  finish: "7th Ligue 1 (2025/26)",
  owner: "Dmitry Rybolovlev (Monaco Sport Investment Ltd, majority shareholder and President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.asmonaco.com/en/news", "https://www.getfootballnewsfrance.com/tag/monaco/"],
  queries: ["AS Monaco transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AS Monaco"
};

const CONFIRMED_IN = [
  {name:"Matthis Abline", sub:"23 · ST · France", to:"permanent from FC Nantes", fee:"€30m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official 30 Jul 2026. Monaco's marquee attacking signing of the window, brought in to add firepower up front."},
  {name:"Mathys Detourbet", sub:"Manchester City winger arrives on a season-long loan", club:"Manchester City", pos:"RW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"The 19-year-old, sold by Troyes to Manchester City this summer via the City Football Group network, has been immediately loaned to Monaco for 2026-27."}
];

const CONFIRMED_OUT = [
  {name:"Aladji Bamba", sub:"20 · W · Ivory Coast", club:"Newcastle United", pos:"W", fee:"€40m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 24 Jul 2026 on a five-year deal - a big sale that funds further business."},
  {name:"Boubakar Dembaga", sub:"21 · FW · France", club:"Sporting Charleroi", pos:"FW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Fringe forward departs for regular football in Belgium."},
  {name:"Maghnes Akliouche", sub:"France international completes big-money move to PSG", club:"Paris Saint-Germain", pos:"CAM", fee:"€50m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Deal in preparation for roughly two years finally completed; Akliouche signs a five-year contract at PSG after Liverpool also monitored the situation."}
];

const INCOMING = [
  {name:"Erik Lira", sub:"26 · CM · Mexico", club:"Cruz Azul", pos:"CM", report:"29 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:52, prob:24, light:"o", trend:"flat", note:"Monaco have shown concrete interest in the Cruz Azul midfielder as squad depth is assessed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:24},
  {name:"Simon Adingra", sub:"24 · W · Ivory Coast", club:"Brighton (on loan at Sunderland)", pos:"W", report:"6 Jul 2026", src:"Get French Football News", tier:2, fee:"Loan", truth:48, prob:20, light:"o", trend:"flat", note:"Monaco explored re-signing the winger on loan; talks described as preliminary.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Fares Ghedjemis", sub:"Algerian winger eyed as an Akliouche-style replacement", club:"Frosinone", pos:"RW", report:"Monaco are reportedly interested in the Algeria international winger, who scored 15 goals in Serie B last season to help Frosinone win promotion; Lille are also said to be keen.", src:"Yahoo Sports (via agency reporting)", tier:2, fee:"", truth:55, prob:35, light:"y", trend:"flat", note:"Competition from Lille and the early stage of talks make this speculative for now.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const OUTGOING = [
  {name:"Folarin Balogun", sub:"American striker's Monaco exit looks increasingly likely", club:"Everton (interest)", pos:"ST", report:"Monaco face financial pressure after missing out on the Champions League and could sell the striker for around €50m this summer, with Everton among the sides considering a move.", src:"Yahoo Sports / MSN France", tier:2, fee:"", truth:60, prob:45, light:"y", trend:"flat", note:"Monaco have already brought in Matthis Abline as a like-for-like forward, which supports the likelihood of a Balogun sale materialising.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Lamine Camara", sub:"22 · Senegal · CM", club:"Premier League interest", pos:"CM", report:"Monaco are looking to raise significant funds this summer and want between €44m and €56m for the Senegal midfielder, with Brighton, Newcastle and Aston Villa credited with interest.", src:"Top Mercato", tier:2, fee:"€44m-€56m", truth:60, prob:35, light:"y", trend:"flat", note:"A valuation piece rather than a negotiation update. No named tier-one reporter has confirmed talks with any of the English clubs.", lastSeen:"2026-08-06T08:45:12Z", baseProb:35}
];

const RISERS = [
  {ar:"⬆", t:"<b>Matthis Abline arrives from Nantes</b>: €30m striker signing headlines Monaco's incoming business."},
  {ar:"⬆", t:"<b>Akliouche to PSG advancing fast</b>: from a rejected €45m bid to an accepted €50m one inside 24 hours."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Aladji Bamba sold to Newcastle</b>: €40m departure for the young Ivorian winger."}
];

const NEW = [
  {ar:"✦", t:"Filipe Luís takes charge for his first transfer window as Monaco head coach after Sébastien Pocognoli's June dismissal."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Attacking midfield", w:55, x:"Akliouche's expected exit to PSG opens a creative gap Monaco will need to fill before deadline day."}
];

const WATCHLIST = [];

const HUB = {
  "gffn-monaco": {l:"Get French Football News · Monaco", u:"https://www.getfootballnewsfrance.com/tag/monaco/"},
  "asmonaco": {l:"AS Monaco Official News", u:"https://www.asmonaco.com/en/news"},
  yahooSportsFaresGhedjemis: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/lille-monaco-interested-algeria-international-075500162.html"},
  yahooSportsFolarinBalogun: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/folarin-balogun-everton-now-advance-131733247.html"},
  yahooSportsMatthisAbline: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/official-monaco-sign-matthis-abline-081000502.html"},
  yahooSportsMathysDetourbet: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/official-manchester-city-mathys-detourbet-152000102.html"},
  sportfrMaghnesAkliouche: {l:"Sport.fr", u:"https://www.msn.com/fr-ch/sport/football/psg-akliouche-s-engage-pour-cinq-ans-monaco-obtient-ses-50-millions/ar-AA299kOb"},
  theGuardianAladjiBamba: {l:"The Guardian", u:"https://www.theguardian.com/football/2026/jul/24/transfers-newcastle-sign-aladji-bamba-monaco"},
  fabriceHawkinsRMCSportMaghnesAkliouche: {l:"Fabrice Hawkins, RMC Sport", u:"https://x.com/FabriceHawkins/status/2074105712439906741"},
  topMercatoLamineCamara: {l:"Top Mercato", u:"https://www.topmercato.com/2122930-mercato-las-monaco-doit-vendre-pour-150-me-les-4-favoris-pour-un-depart-cet-ete"}};

const LINKMAP = {
  "Matthis Abline": ["asmonaco", "gffn-monaco", "yahooSportsMatthisAbline"],
  "Aladji Bamba": ["gffn-monaco", "theGuardianAladjiBamba"],
  "Boubakar Dembaga": ["gffn-monaco"],
  "Erik Lira": ["gffn-monaco"],
  "Simon Adingra": ["gffn-monaco"],
  "Maghnes Akliouche": ["gffn-monaco", "sportfrMaghnesAkliouche", "fabriceHawkinsRMCSportMaghnesAkliouche"],
  "Fares Ghedjemis": ["yahooSportsFaresGhedjemis"],
  "Folarin Balogun": ["yahooSportsFolarinBalogun"],
  "Mathys Detourbet": ["yahooSportsMathysDetourbet"],
  "Lamine Camara": ["topMercatoLamineCamara"]};
const WL_LINKMAP = {
  "Maghnes Akliouche": ["gffn-monaco"]
};

const PROSE = {
  heroH2: `New coach, new spine: Filipe Luís rebuilds around Abline as Akliouche edges toward PSG`,
  heroLede: `Monaco head into a Conference League play-off campaign under a brand-new head coach, <b>Filipe Luís</b>, appointed in July after Sébastien Pocognoli's June dismissal. On the pitch business, <b>Matthis Abline</b> arrives from Nantes for €30m to lead the line, funded in part by <b>Aladji Bamba</b>'s €40m sale to Newcastle, while a marquee academy product, <b>Maghnes Akliouche</b>, looks close to completing a big-money move to PSG.`,
  metaRow: `<span>DECISION-MAKER: <b>Dmitry Rybolovlev</b> (President/Owner)</span> <span>HEAD COACH: <b>Filipe Luís</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">7<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">Conf. League</div></div><div class="stat gold"><div class="l">Confirmed In/Out</div><div class="v">1 / 2</div></div>`,
  positionPanel: ``,
  confirmedPending: `Akliouche-to-PSG reported as agreed in principle at €50m, awaiting final signature.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `The Akliouche sale would be the marquee departure of Monaco's window, freeing space (and funds) in an already-changed attacking unit.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€30m committed`, x: `Abline's arrival is the headline incoming deal so far this window.` },
  spendOut: { v: `€70m+ banked`, x: `Bamba's sale to Newcastle plus a likely Akliouche fee push Monaco's summer income well past their spend.` },
  methodLegend: ``
};
