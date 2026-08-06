/* ============================================================
   MERCATO IQ · CLUB DATA · REAL MADRID · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Real Madrid", mono: "RM", slug: "real-madrid",
  primary: "#FEBE10", primaryBright: "#FFFFFF", primaryDeep: "#8A6B00",
  primaryRgb: "254,190,16",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "José Mourinho (appointed June 2026, replacing Álvaro Arbeloa)",
  dof: "José Ángel Sánchez (General Director) · Juni Calafat (Sporting Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "2nd La Liga (2025/26), 86pts - runners-up to Barcelona",
  owner: "Member-owned (Real Madrid CF), Florentino Pérez President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.managingmadrid.com/", "https://www.realmadrid.com/en-US/news"],
  queries: ["Real Madrid transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Real Madrid - corrected from earlier draft"
};

const CONFIRMED_IN = [
  {name:"Ibrahima Konaté", sub:"27 · CB · France", to:"permanent from Liverpool", fee:"Undisclosed (multi-year deal)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 18 June 2026. Konaté leaves Liverpool on the expiry of his contract to sign a multi-year deal at the Bernabéu, giving Mourinho a ready-made Champions League centre-back."},
  {name:"Bernardo Silva", sub:"31 · CM · Portugal", to:"free transfer from Manchester City", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 13 June 2026. The City great joins on a free transfer after his contract expired, reuniting with José Mourinho's midfield plans ahead of the 2026 World Cup."},
  {name:"Denzel Dumfries", sub:"30 · RB · Netherlands", to:"permanent from Inter Milan", fee:"~£17.1m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Four-year deal bringing Champions League-winning experience at right-back."},
  {name:"Marc Cucurella", sub:"27 · LB · Spain", to:"permanent from Chelsea", fee:"~£51.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Six-year deal - a big-money left-back addition as Madrid rebuild the back line around Mourinho's system."},
  {name:"Carlos Espí", sub:"21 · FW · Spain", to:"permanent from Levante", fee:"~£21.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Five-year contract for the young forward, one of the standout performers in La Liga last season."}
];

const CONFIRMED_OUT = [
  {name:"Fran García", sub:"26 · LB · Spain", club:"Real Betis", pos:"LB", fee:"~£3.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Made surplus by the Cucurella signing; joins Betis on a permanent deal."},
  {name:"Dani Ceballos", sub:"29 · CM · Spain", club:"Released - free agent", pos:"CM", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, RELEASED", note:"Contract expired; leaves the Bernabéu as a free agent."},
  {name:"Dani Carvajal", sub:"34 · RB · Spain", club:"Released - free agent", pos:"RB", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, RELEASED", note:"Long-serving right-back leaves on the expiry of his contract, succeeded in the role by Dumfries."},
  {name:"David Alaba", sub:"33 · CB · Austria", club:"Released - free agent", pos:"CB", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, RELEASED", note:"Contract expired; departs after a spell disrupted by long-term injuries."},
  {name:"Gonzalo García", sub:"21 · ST · Spain", club:"permanent to Fulham", pos:"ST", fee:"€40m + €2m add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Castilla graduate and breakout 2024/25 first-team forward sold to Fulham, with Real Madrid retaining a 30% sell-on clause and matching rights."},
  {name:"César Palacios", sub:"Real Madrid academy", club:"permanent to Fulham", pos:"MF", fee:"€10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Academy midfielder sold to Fulham alongside the García deal; Real Madrid again keep a sell-on clause and matching rights."}
];

const INCOMING = [
  {name:"Rodri", sub:"28 · Spain · CM", club:"Manchester City", pos:"CM", report:"Barcelona keen on Rodri as Real Madrid talks with Manchester City star stall", src:"BBC Sport, The Guardian", tier:2, fee:"Around €80m", truth:35, prob:30, light:"y", trend:"down", note:"Madrid have engaged but talks stalled; Barcelona now competing for his signature", lastSeen:"2026-08-06T14:21:37Z", baseProb:30},
  {name:"Yan Diomande", sub:"22 · Ivory Coast · CB", club:"RB Leipzig", pos:"CB", report:"Real Madrid have agreed a club-record deal with RB Leipzig for the centre-back", src:"BBC Sport, Sky Sports, The Guardian", tier:2, fee:"£115m–£120m", truth:95, prob:95, light:"g", trend:"up", note:"Deal agreed; fee reported as £115m–£120m depending on source", lastSeen:"2026-08-06T14:21:37Z", baseProb:95}
];

const OUTGOING = [
  {name:"Vinícius Júnior", sub:"24 · Brazil · W", club:"Real Madrid", pos:"W", report:"Real Madrid make Vinícius Jr improved contract offer to keep him", src:"BBC Sport", tier:2, fee:"TBD - loan or permanent structure discussed", truth:10, prob:5, light:"r", trend:"down", note:"Madrid actively working to retain him with an improved contract; departure unlikely", lastSeen:"2026-08-06T14:21:37Z", baseProb:5}
];
const DEAD = [
  {name:"Michael Olise", sub:"Winger", club:"Bayern Munich", pos:"RW", report:"Speculative reporting links Madrid with Olise as further attacking reinforcement.", src:"Various (aggregated)", tier:3, fee:"Speculative", truth:30, prob:12, light:"r", trend:"flat", note:"No direct sourcing beyond aggregator-level chatter; treat as background noise, not an active pursuit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12, dead:true, deadReason:"No recent credible update; speculative reporting only", dir:"in", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Franco Mastantuono", sub:"18 · Argentina · AM", club:"Fiorentina", pos:"Attacking midfielder", report:"Fiorentina are said to be close to an agreement to take the Argentinian on loan for the season.", src:"CNN Türk, relaying Spanish and Italian reports", tier:3, fee:"Loan", truth:50, prob:40, light:"y", trend:"up", note:"Thin sourcing: this has surfaced inside Turkish coverage of the Endrick chase rather than from Di Marzio, Romano or the Spanish tier ones. Needs an Italian tier-one voice before it can be trusted.", lastSeen:"2026-08-06T10:49:40Z", baseProb:40, dead:true, deadReason:"completed move to fiorentina", dir:"out", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Endrick", sub:"20 · Brazil · ST", club:"Fenerbahçe", pos:"Striker", report:"Fenerbahçe have put an offer to Madrid for a loan, and Madrid have parked the incoming bids while José Mourinho decides whether he wants the Brazilian in his squad. Roma, who sent sporting director Tony D'Amico to Madrid, and Fiorentina are also pushing.", src:"Fotomaç, CNN Türk", tier:3, fee:"Loan", truth:65, prob:40, light:"y", trend:"up", note:"Turkish outlets are driving this and their transfer copy runs hot. The relevant fact is that Mourinho has used Endrick in pre-season and scored him a goal against Fiorentina, so a loan is far from settled.", lastSeen:"2026-08-06T10:49:40Z", baseProb:40, dead:true, deadReason:"No recent credible update; Fenerbahçe loan offer not progressed", dir:"out", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Raul Asencio", sub:"23 · Spain · CB", club:"Liverpool", pos:"CB", report:"The homegrown centre-back has been told he can leave this summer, and intermediaries have approached Liverpool to test their interest.", src:"TEAMtalk", tier:3, fee:"Undisclosed", truth:45, prob:20, light:"o", trend:"flat", note:"Sourced to intermediaries via one English outlet, with no Madrid-based corroboration from Relevo, AS or Marca. Weak until Spanish press confirm the exit stance.", lastSeen:"2026-08-06T08:59:48Z", baseProb:20, dead:true, deadReason:"No recent credible update; departure permitted but no active links", dir:"out", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Eduardo Camavinga", sub:"23 · France · CM", club:"Galatasaray", pos:"Midfielder", report:"Galatasaray have kept working on the Frenchman, with Madrid open to a sale above €50m, but Manchester United are reported to have moved in and the player is said to favour staying at the Bernabéu.", src:"Fotomaç", tier:3, fee:"€50m plus", truth:45, prob:15, light:"o", trend:"flat", note:"Turkish tabloid territory and cooling: the last substantive update is from late July and every version of the story has Camavinga wanting to stay and Mourinho holding the casting vote.", lastSeen:"2026-08-06T10:49:40Z", baseProb:15, dead:true, deadReason:"No recent credible update; Galatasaray interest stalled", dir:"out", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Yan Diomandé", sub:"Winger/forward", club:"RB Leipzig", pos:"RW", report:"Romano gave a 'here we go' on a reported £113m deal, but the announcement has stalled after agent Max Gradel filed a FIFA complaint in a representation dispute; Leipzig's sporting director says it won't be held up by the agency battle, while other reports say Madrid has stepped back from finalising terms.", src:"Fabrizio Romano", tier:1, fee:"~£113m reported", truth:62, prob:50, light:"y", trend:"flat", note:"Genuinely messy situation - Here We Go status undermined by an active FIFA complaint and conflicting club statements.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50, dir:"in", deadReason:"link went cold", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Vinicius Junior", sub:"25 · Brazil · LW", club:"Arsenal", pos:"LW", report:"Despite Arsenal's interest, Vinicius is expected to stay at the Bernabeu this summer. He has 12 months left on his deal and could open pre-contract talks with clubs outside Spain in January, and Madrid have improved their renewal offer to try to tie him down.", src:"Sky Sports", tier:2, fee:"n/a", truth:75, prob:10, light:"r", trend:"flat", note:"Framed as a stay rather than a sale, so treat Arsenal links as background. Reported wage figures for the new offer come from Spanish press and are not club-confirmed.", lastSeen:"2026-08-06T08:59:48Z", baseProb:10, dir:"out", deadReason:"no fresh report in over a month", deadAt:"2026-08-06T10:24:32Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Five permanent/free arrivals confirmed</b>: Konaté, Bernardo Silva, Dumfries, Cucurella and Espí give Mourinho a rebuilt spine before the window's final month."},
  {ar:"⬆", t:"<b>Vinícius-Arsenal momentum</b>: reports of a partial agreement on personal terms mark the clearest sign yet that a move away is being seriously discussed."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Real Madrid's summer business is essentially a defensive and midfield rebuild: Konaté, Cucurella and Dumfries overhaul the back four, while Bernardo Silva adds a ready-made World Cup-year midfielder."},
  {ar:"✦", t:"Four squad players (Ceballos, Carvajal, Alaba, Fran García) have left as contracts expired or the squad was reshaped, freeing wages ahead of any Vinícius decision."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Ferran Torres to Real Madrid, €55m 'done deal'</b>: this appeared in an earlier version of this record and was fabricated - Torres has remained at Barcelona throughout this window, which as of 3 Aug 2026 is publicly saying he is not for sale."},
  {ar:"✕", t:"<b>Vinícius Júnior to Al-Nassr for €500m, 'done deal'</b>: also fabricated in an earlier version of this record. Vinícius has not left Real Madrid; the genuine story this window is Arsenal interest, not a completed Saudi transfer."}
];

const POSITIONS = [
  {p:"Left wing / Vinícius succession planning", w:55, x:"If the Arsenal saga concludes with a sale, Madrid will need a direct wide replacement before deadline day."}
];

const WATCHLIST = [
  {name:"Vinícius Júnior", club:"Arsenal (interest)", pos:"LW", dir:"out", age:"~1 day", tier:2, note:"Reports of a partial personal-terms agreement; no club-to-club fee agreed. Genuinely live story, not resolved."}
];

const HUB = {
  "espn-konate": {l:"ESPN - Konaté completes Real Madrid move", u:"https://www.espn.com/soccer/story/_/id/48956684/ibrahima-konate-completes-switch-real-madrid-liverpool"},
  "skysports-bsilva": {l:"Sky Sports - Bernardo Silva signs for Real Madrid", u:"https://www.skysports.com/football/news/11095/13554908/bernardo-silva-real-madrid-sign-manchester-city-midfielder-on-free-transfer-as-jose-mourinho-impact-continues"},
  "teamtalk-rmdone": {l:"TeamTalk - every completed Real Madrid transfer, summer 2026", u:"https://www.teamtalk.com/news/every-completed-real-madrid-transfer-summer-2026-signings-sales-loans"},
  "managingmadrid-frangarcia": {l:"Managing Madrid - Fran García/Betis fee agreement", u:"https://www.managingmadrid.com/109880/betis-real-madrid-fran-garcia-2026-news"},
  "footballtransfers-vinijr": {l:"FootballTransfers - Vinícius Jr to Arsenal reporting", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/vinicius-jr-to-arsenal-real-madrid-quietly-unlock-transfer-possibility"},
  "barcablaugranes-torres": {l:"Barca Blaugranes - Ferran Torres not for sale (3 Aug 2026)", u:"https://www.barcablaugranes.com/barcelona-news/128091/fc-barcelona-news-3-august-2026-ferran-torres-not-for-sale-joao-cancelo-signing-very-close"},
  fabrizioRomanoviaFootballTransfersRodri: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-transfer-news-chelsea-trevoh-chalobah-barcelona-rodri-real-madrid-franco-mastantuono"},
  forbesRodri: {l:"Forbes", u:"https://www.forbes.com/sites/tomsanderson/2026/08/02/manchester-city-lets-real-madrid-know-new-price-for-signing-rodri/"},
  oneFootballYanDiomand: {l:"OneFootball", u:"https://onefootball.com/en/news/yan-diomande-to-join-real-madrid-deal-stalls-after-max-gradel-files-fifa-complaint-43226565"},
  aggregatednewssearchMichaelOlise: {l:"Aggregated news search", u:"https://www.bing.com/news/search?q=Real+Madrid+fichajes+rumores+agosto+2026"},
  yahooSportsVinciusJnior: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/rb-leipzig-sporting-director-provides-063500702.html"},
  aggregatednewssearchEndrick: {l:"Aggregated news search", u:"https://www.bing.com/news/search?q=Endrick+Real+Madrid+loan+2026"},
  eSPNIbrahimaKonat: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/48956684/ibrahima-konate-completes-switch-real-madrid-liverpool"},
  skySportsBernardoSilva: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13554908/bernardo-silva-real-madrid-sign-manchester-city-midfielder-on-free-transfer-as-jose-mourinho-impact-continues"},
  teamTalkDenzelDumfries: {l:"TeamTalk", u:"https://www.teamtalk.com/news/every-completed-real-madrid-transfer-summer-2026-signings-sales-loans"},
  managingMadridFranGarca: {l:"Managing Madrid", u:"https://www.managingmadrid.com/109880/betis-real-madrid-fran-garcia-2026-news"},
  mundoBetisDaniCeballos: {l:"MundoBetis", u:"https://mundobetis.com/2026/06/26/oficial-dani-ceballos-deja-el-real-madrid-para-volver-al-real-betis/"},
  eSPNYanDiomande: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49460425/real-madrid-set-sign-yan-diomande-135m-deal-rb-leipzig-transfer"},
  theAthleticYanDiomande: {l:"The Athletic", u:"https://www.theathletic.com/football/"},
  pAviaTheIrishNewsYanDiomande: {l:"PA (via The Irish News)", u:"https://www.irishnews.com/sport/soccer/real-madrid-agree-1158m-deal-for-rb-leipzig-forward-yan-diomande-MVIQI3MQQNJHBI2H454WFGJJIA/"},
  skySportsViniciusJunior: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13567839/real-madrid-transfer-news-vinicius-junior-to-stay-at-the-santiago-bernabeu-beyond-this-summer-despite-arsenal-interest"},
  tEAMtalkRaulAsencio: {l:"TEAMtalk", u:"https://www.teamtalk.com/liverpool/raul-ascencio-transfer-news-liverpool-in-contact-real-madrid-sale-iraola-mourinho"},
  fabrizioRomanoviaYahooSportsRodri: {l:"Fabrizio Romano (via Yahoo Sports)", u:"https://sports.yahoo.com/articles/fabrizio-romano-confirms-real-madrid-104500128.html"},
  fotomaEndrick: {l:"Fotomaç", u:"https://www.fotomac.com.tr/fenerbahce/2026/08/06/fenerbahceden-endrick-harekati-mourinhonun-transfer-karari"},
  cNNTrkFrancoMastantuono: {l:"CNN Türk", u:"https://www.cnnturk.com/spor/futbol/fenerbahcenin-endrick-transferi-jose-mourinhonun-kararina-bagli-3450910"},
  fotomaEduardoCamavinga: {l:"Fotomaç", u:"https://www.fotomac.com.tr/galatasaray/2026/07/23/galatasaraya-eduardo-camavingada-dev-rakip"},
  bBCSportFootballYanDiomande: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/cr59z307my1o"},
  theGuardianFootballRodri: {l:"The Guardian Football", u:"https://www.theguardian.com/football/2026/aug/06/barcelona-rodri-alvarez-manchester-city-real-madrid-transfers"},
  bBCSportFootballVinciusJnior: {l:"BBC Sport Football", u:"https://www.bbc.co.uk/sport/football/articles/cx2dpejpv70o"}};

const LINKMAP = {
  "Ibrahima Konaté": ["espn-konate", "eSPNIbrahimaKonat"],
  "Bernardo Silva": ["skysports-bsilva", "skySportsBernardoSilva"],
  "Denzel Dumfries": ["teamtalk-rmdone", "teamTalkDenzelDumfries"],
  "Marc Cucurella": ["teamtalk-rmdone", "teamTalkDenzelDumfries"],
  "Carlos Espí": ["teamtalk-rmdone", "teamTalkDenzelDumfries"],
  "Fran García": ["managingmadrid-frangarcia", "managingMadridFranGarca"],
  "Dani Ceballos": ["teamtalk-rmdone", "mundoBetisDaniCeballos"],
  "Dani Carvajal": ["teamtalk-rmdone", "teamTalkDenzelDumfries"],
  "David Alaba": ["teamtalk-rmdone", "teamTalkDenzelDumfries"],
  "Vinícius Júnior": ["footballtransfers-vinijr", "yahooSportsVinciusJnior", "bBCSportFootballVinciusJnior"],
  "Rodri": ["fabrizioRomanoviaFootballTransfersRodri", "forbesRodri", "fabrizioRomanoviaYahooSportsRodri", "theGuardianFootballRodri"],
  "Franco Mastantuono": ["fabrizioRomanoviaFootballTransfersRodri", "cNNTrkFrancoMastantuono"],
  "Gonzalo García": ["fabrizioRomanoviaFootballTransfersRodri"],
  "César Palacios": ["fabrizioRomanoviaFootballTransfersRodri"],
  "Yan Diomandé": ["oneFootballYanDiomand"],
  "Michael Olise": ["aggregatednewssearchMichaelOlise"],
  "Endrick": ["aggregatednewssearchEndrick", "fotomaEndrick"],
  "Yan Diomande": ["eSPNYanDiomande", "theAthleticYanDiomande", "pAviaTheIrishNewsYanDiomande", "bBCSportFootballYanDiomande"],
  "Vinicius Junior": ["skySportsViniciusJunior"],
  "Raul Asencio": ["tEAMtalkRaulAsencio"],
  "Eduardo Camavinga": ["fotomaEduardoCamavinga"]};
const WL_LINKMAP = {
  "Vinícius Júnior": ["footballtransfers-vinijr"]
};

const PROSE = {
  heroH2: `Mourinho's rebuilt spine, and the unresolved Vinícius question`,
  heroLede: `Real Madrid's summer has been a genuine defensive and midfield reconstruction under new coach <b>José Mourinho</b>: <b>Ibrahima Konaté</b> and <b>Marc Cucurella</b> arrive to remake the back four alongside <b>Denzel Dumfries</b>, while <b>Bernardo Silva</b> joins for free in midfield. The one unresolved thread is <b>Vinícius Júnior</b>, who is genuinely being talked about in connection with Arsenal - but nothing is signed.`,
  metaRow: `<span>COACH: <b>José Mourinho</b></span> <span>DIRECTOR: <b>José Ángel Sánchez</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">5</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">4</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `The Vinícius Júnior situation is the one live, unresolved thread of the window - watch this space.`,
  pricingBanner: ``,
  excludedNote: `Two fabricated stories (Ferran Torres "signing", Vinícius "€500m Al-Nassr sale") from an earlier draft of this page have been corrected and are logged in Ignored below for transparency.`,
  spendIn: { v: `~£93m committed`, x: `Konaté, Bernardo Silva, Dumfries, Cucurella, Espí` },
  spendOut: { v: `~£3.4m received`, x: `Fran García fee; Ceballos, Carvajal, Alaba left as free agents` },
  methodLegend: ``
};