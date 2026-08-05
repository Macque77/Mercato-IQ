/* ============================================================
   MERCATO IQ · CLUB DATA · NOTTINGHAM FOREST · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce nottingham-forest.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (30 Jul 2026): first live-format build for this
   club (previously on the legacy single-page template with no
   BRAND-driven colours). Researched fresh via live web search.
   ============================================================ */

const BRAND = {
  club: "Nottingham Forest", mono: "NFFC", slug: "nottingham-forest",
  primary: "#DD0000", primaryBright: "#FF3333", primaryDeep: "#8C0000",
  primaryRgb: "221,0,0",
  breadcrumb: ["England","Premier League"]
};
const VOLATILE = {
  verified: "2026-07-30",
  coach: "Oliver Glasner",
  dof: "Vacant - Marinakis-led recruitment (no permanent Director of Football since Edu Gaspar's Mar 2026 exit)",
  europe: "None (2026/27) - 14th finish means no European football",
  finish: "14th (2025/26)",
  owner: "Evangelos Marinakis (also owns Olympiacos)",
  window: "Opened 15 Jun, runs to 1 Sep 2026, 11pm UK"
};
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Nottingham+Forest/Transfer+News",
    "https://www.nottinghamforest.news/transfers/",
    "https://www.skysports.com/nottingham-forest",
    "https://www.bbc.co.uk/sport/football/teams/nottingham-forest",
    "https://www.footballinsider247.com/nottingham-forest-fc/transfers/"
  ],
  queries: [
    "Nottingham Forest transfer news 2026",
    "Nottingham Forest bid OR medical OR 'personal terms'",
    "Nottingham Forest calciomercato Diomande OR Lucumi",
    "Nottingham Forest mercato Sporting CP Feyenoord Bologna",
    "Nottingham Forest transfer Glasner Marinakis"
  ],
  note: "Foreign desks per profile: Portugal (Record/A Bola/O Jogo for Sporting-linked business), Italy (Il Resto del Carlino/TMW for Bologna's Lucumí), NL (De Telegraaf/Feyenoord beat for Read), plus Marinakis's own Greek press (given the Olympiacos pipeline that took Carmo and Jota Silva). Trace every aggregator hit (TransferFeed, NewsNow) to its original reporter before weighting."
};
const REPORT_META = { asof: "30 Jul 2026", updated: "2026-07-30T14:00:00Z", label: "Diomande nears an imminent announcement off the Anderson windfall; Bergvall has told Spurs he wants the move; Gibbs-White stays off the market despite Villa's push" };

const CONFIRMED_IN = [
  {name:"Xaver Schlager", sub:"28 · DM/CM · Austria", to:"free from RB Leipzig", fee:"FREE", free:true, status:"done", statusTxt:"SIGNED IN",
   note:"Done (15 Jul): the Austria international joins on a free after his Leipzig contract expired, on a 2+1 year deal. He and Glasner worked together at Wolfsburg (2019-21), and the club is redirecting the fee it saved into wages for a ready-made, high-pressing engine room piece - exactly the profile Glasner wants after Anderson's exit."},
  {name:"Boyd Fraser", sub:"16 · CM · Scotland U16", to:"from Heart of Midlothian", fee:"~£100k (compensation)", free:false, status:"done", statusTxt:"SIGNED IN",
   note:"Done (25 Jun): a Scotland U16 international midfielder signed through 2029, beating reported interest from Southampton, Crystal Palace, Tottenham, Celtic and Rangers. A pure academy bet, but the calibre of the chasing pack for a 16-year-old says something about how the recruitment department is casting its net this window."},
];
const CONFIRMED_OUT = [
  {name:"Elliot Anderson", sub:"23 · CM · England", to:"Manchester City", club:"Manchester City", fee:"£116m", free:false, status:"exit", statusTxt:"CLUB-RECORD SALE", isNew:true,
   note:"Done (2 Jul): a club-record sale that shattered expectations - City met Forest's number in full, with Anderson completing a medical in Kansas during England's World Cup campaign before the move was announced. This single fee is now funding the bulk of Glasner's rebuild and is the reason Forest can chase Diomande, Bergvall and Read simultaneously without needing to sell anyone else."},
  {name:"David Carmo", sub:"25 · CB · Portugal", to:"Olympiacos (permanent)", club:"Olympiacos (permanent)", fee:"Undisclosed", free:false, status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Done (~1 Jul): the centre-back, who spent last season out on loan at Olympiacos, was made permanent - a straightforward move within Marinakis's two-club ownership pipeline rather than an open-market sale."},
  {name:"Jota Silva", sub:"24 · FW · Portugal", to:"Olympiacos", club:"Olympiacos", fee:"Undisclosed", free:false, status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Done (9 Jul): a second player moving down the same Marinakis-owned pipeline to Piraeus, freeing an attacking squad slot as Forest reshapes the forward line around Delap-type targets."},
  {name:"Angus Gunn, Stefan Ortega & Willy Boly", sub:"GK / GK / CB", to:"Free agents (contracts expired)", club:"Free agents (contracts expired)", fee:"FREE", free:true, status:"exit", statusTxt:"RETAINED LIST - OUT",
   note:"Confirmed on the retained list (1 Jul): both senior goalkeepers who covered for Matz Sels leave on Bosmans, alongside veteran centre-back Willy Boly. It leaves only the 34-year-old Sels and young John Victor as senior keepers on the books - the single biggest hole nobody has yet moved to fill."},
];

const INCOMING = [
  {name:"Ousmane Diomande", sub:"22 · CB · Ivory Coast", club:"Sporting CP", pos:"CB", report:"29 Jul 2026", src:"Fabrizio Romano / BBC Sport (Sami Mokbel) / Record", tier:1, fee:"~£37m + £5m add-ons", truth:90, prob:80, light:'g', trend:'up',
   note:"The window's clearest deal. Romano has Forest in 'advanced talks' with negotiations underway both club-to-club and with the player's camp, well below Diomande's £68.2m release clause. Nottingham Forest News (27 Jul) reports personal terms are already agreed, Sporting have begun excluding him from friendlies to prepare for his exit, and BBC's update (29 Jul) has the deal 'advancing' with 'work still to be done to close it.' Liverpool were long linked but have stepped back to prioritise Bradley Barcola; Crystal Palace remain a distant alternative suitor after selling Maxence Lacroix. An announcement inside days feels likely.", lastSeen:"2026-08-04T19:10:50Z", baseProb:80},
  {name:"Lucas Bergvall", sub:"20 · CM · Sweden", club:"Tottenham Hotspur", pos:"CM", report:"27 Jul 2026", src:"The Guardian / TEAMtalk / football365", tier:1, fee:"£50-65m (Spurs valuation)", truth:74, prob:40, light:'y', trend:'up',
   note:"Genuinely live: the Guardian reports Bergvall has formally told Tottenham he wants to leave, naming Forest as his preferred destination, with playing time set to shrink behind new signings Sandro Tonali and Mateus Fernandes. Forest's opening £38m bid was rejected in mid-July against a £50m Spurs valuation that has since been quoted as high as £65m, and head coach Di Zerbi is described as 'relaxed' rather than combative about a sale. The player wants it; the fee gap is now the only real obstacle, and Forest may need patience rather than a fresh bid straight away.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Liam Delap", sub:"23 · ST · England U21", club:"Chelsea", pos:"ST", report:"29 Jul 2026", src:"Chelsea FC Online / national press round-ups", tier:2, fee:"Fee unclear (cost Chelsea £30m in 2025)", truth:55, prob:32, light:'y', trend:'up',
   note:"Rekindled rather than fresh - Forest tried and failed to sign Delap in 2025 (he also turned down Man Utd, Newcastle and Everton then), but a struggling first season at Chelsea (2 goals, 3 assists in 41 games behind João Pedro and new arrival Emmanuel Emegha) has Chelsea now open to a sale. Forest 'anticipate competition' for him without a named rival yet. Reads as a real, growing interest rather than an imminent bid.", lastSeen:"2026-08-04T19:10:50Z", baseProb:32},
  {name:"Givairo Read", sub:"20 · RB/RW · Netherlands", club:"Feyenoord", pos:"RB", report:"29 Jul 2026", src:"Inside Futbol / Pulse Sports Nigeria", tier:3, fee:"€22m bid vs €25m ask (stalled)", truth:62, prob:27, light:'o', trend:'down',
   note:"Stalled at a €3m gap: Forest's third bid (€22m, on a five-year, ~€20m contract offer) was knocked back by Feyenoord's €25m valuation, and neither side has moved since. Read is reportedly keen on the Premier League move, but Forest haven't returned with an improved offer as of 29 Jul, and the same pursuit is already squeezing Ola Aina's game time before a ball has even been signed for.", lastSeen:"2026-08-04T19:10:50Z", baseProb:27},
  {name:"Jhon Lucumí", sub:"26 · CB · Colombia", club:"Bologna", pos:"CB", report:"24 Jul 2026", src:"Inside Futbol (via Il Resto del Carlino) / Football Insider", tier:3, fee:"~€25-30m guide (release clause lapsed)", truth:58, prob:24, light:'o', trend:'down',
   note:"Cooling as the field crowds. Lucumí's €28m release clause expired unused, and with only a year left on his contract a lower fee is now plausible, but Forest have been forced to 'wait' while the Colombian weighs a queue that reportedly includes Manchester United (per the same Italian sourcing), Inter Milan, Juventus, Sunderland and Bournemouth. Bologna want a quick resolution; Forest are no longer clearly out in front.", lastSeen:"2026-08-04T19:10:50Z", baseProb:24},
  {name:"Curtis Jones", sub:"25 · CM · England", club:"Liverpool", pos:"CM", report:"4 Jul 2026", src:"TEAMtalk (via Daily Mail)", tier:2, fee:"£35-40m (Liverpool valuation)", truth:56, prob:22, light:'o', trend:'flat',
   note:"An Anderson-replacement line rather than a live negotiation: Jones wants to leave Anfield with under a year left on his deal, and Liverpool have set a £35-40m price. 'There's definitely interest there' from Forest per the report, but Inter Milan are also circling and haven't matched the number, and nothing has moved publicly since the early-July report - worth tracking rather than expecting imminently.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Arne Engels", sub:"Pursuit stepped up amid competition", club:"Celtic", pos:"MF", report:"Forest have stepped up their pursuit of the Belgian midfielder, but face competition from West Ham and reported Atletico Madrid interest; a previous £25m deadline-day bid was rejected by Celtic.", src:"Sky Sports", tier:2, fee:"~£25m+", truth:45, prob:30, light:"y", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Folarin Balogun", sub:"Contact made over striker addition", club:"Monaco (on loan from Arsenal)", pos:"FW", report:"Forest have made contact over a potential move for Balogun as they look to add attacking depth following interest generated by their strong recruitment window.", src:"Football Fancast", tier:3, fee:"~£40m", truth:30, prob:15, light:"o", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Tijjani Reijnders", sub:"28 · Netherlands · MF", club:"Manchester City", pos:"MF", report:"Forest have emerged as suitors for the midfielder, who is reported to be open to leaving City after one season; interest is around £55m against a City valuation nearer £60m.", src:"PA / Yahoo Sport", tier:2, fee:"£55m", truth:60, prob:35, light:"y", trend:"flat", note:"OBSTACLES: no fee agreed and competition from Juventus and Galatasaray, with Newcastle also having looked earlier in the window. City signed him from AC Milan for about £35m only last year.", lastSeen:"2026-08-05T11:41:11Z", baseProb:35}
];

const OUTGOING = [
  {name:"Murillo", sub:"23 · CB · Brazil", club:"Chelsea / Real Madrid interest", pos:"CB", report:"6 Jun 2026", src:"CaughtOffside / Football Insider", tier:2, fee:"£50-70m guide", truth:60, prob:18, light:'o', trend:'down',
   note:"Real interest, cooled by his own new deal: Chelsea did 'extensive groundwork' on Murillo back in February and Real Madrid have also been credited, but Forest handed him a four-year extension in May - read by Football Insider as prepping him for a bigger eventual sale rather than genuinely closing the door, with the club saying it would only accept a 'silly offer.' No fresh bid has surfaced since the new contract, so completion this window looks unlikely without an extraordinary number.", lastSeen:"2026-08-04T19:10:50Z", baseProb:18},
  {name:"Morgan Gibbs-White", sub:"25 · AM · England", club:"Aston Villa interest", pos:"AM", report:"24 Jul 2026", src:"Yahoo Sports (Mick Brown)", tier:3, fee:"Valuation undisclosed - Forest refusing to sell", truth:62, prob:12, light:'r', trend:'down',
   note:"Villa have identified Gibbs-White as their primary Morgan Rogers replacement and are 'prepared to make a substantial bid,' but Forest's stance is described as unequivocal: they 'don't want to lose him under any circumstances.' Marinakis blocked a Tottenham move with a contract extension last summer and is expected to do the same again - this reads as interest without a realistic pathway to a sale.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12}
];

const RISERS = [
  {ar:"⬆", t:"<b>Diomande</b>: personal terms agreed, Sporting excluding him from friendlies, BBC and Romano both describe talks as advancing fast - an announcement could land within days."},
  {ar:"⬆", t:"<b>Bergvall</b>: has formally told Tottenham he wants the move and named Forest as his preference, a material step up from a speculative link."},
  {ar:"⬆", t:"<b>Delap</b>: interest rekindled as his Chelsea season has flopped (2 goals in 41 games) and the club's attack has become overcrowded behind João Pedro and Emegha."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Read</b>: stuck on a €3m gap with Feyenoord since Forest's third bid, and no improved offer has followed - the deal is at a genuine standstill."},
  {ar:"⬇", t:"<b>Lucumí</b>: Manchester United, Inter Milan and Juventus have all been credited with interest, crowding a race Forest were previously leading."},
  {ar:"⬇", t:"<b>Murillo</b>: his May contract extension and Forest's 'silly offer' stance have cooled a once-hot Chelsea/Real Madrid link, with no fresh bid since."},
];
const NEW = [
  {ar:"✦", t:"<b>Diomande breaks toward completion:</b> personal terms agreed and Sporting preparing for his exit, per BBC and Fabrizio Romano's 'advanced talks' report."},
  {ar:"✦", t:"<b>Bergvall goes public:</b> the Guardian reports he has told Tottenham directly that he wants to join Forest, a significant escalation from prior speculation."},
  {ar:"✦", t:"<b>Schlager and Fraser both signed</b> this month, giving Glasner an experienced Bundesliga presser plus a highly-rated Scottish teenager as his first senior and academy business."},
];
const IGNORE = [
  {ar:"✕", t:"<b>James McAtee &amp; Omari Hutchinson</b> - both signed in August 2025 under Nuno; recycled aggregator links still surface these as 'targets' but they're already first-team Forest players."},
  {ar:"✕", t:"<b>Taiwo Awoniyi to West Ham/Everton</b> - the credited reporting is from January 2025; recent Nigerian press (Jul 2026) instead has him settled and expected to stay well past 2028."},
  {ar:"✕", t:"<b>Jesse Derry</b> - occasionally mislabeled as a Forest target on aggregator feeds; he is in fact heading out on loan to Sporting CP from Chelsea, unconnected to Forest's business."},
];

const POSITIONS = [
  {p:"Centre-back", w:82, x:"Diomande's near-complete arrival addresses the headline need, but Carmo's permanent Olympiacos exit and Murillo's uncertain long-term future mean depth here stays a live concern even once he lands"},
  {p:"Central/attacking midfield", w:80, x:"Anderson's £116m sale leaves an obvious creative-engine gap; Bergvall (preferred, player-driven) and Curtis Jones (lower-probability alternative) are both being chased to fill it"},
  {p:"Right-back / wide areas", w:58, x:"Read and Dodo are both being pursued as attacking full-back upgrades, directly squeezing an injury-hit Ola Aina's standing in the process"},
  {p:"Striker", w:46, x:"Delap chase reflects genuine depth need behind an ageing Chris Wood and an uncertain Taiwo Awoniyi, rather than an urgent starting-XI hole"},
  {p:"Goalkeeper depth", w:30, x:"Both senior back-ups (Gunn, Ortega) left as free agents, leaving only the 34-year-old Sels and untested John Victor - a need nobody has yet moved to address"},
];

const WATCHLIST = [
  {name:"Cathal McCarthy", club:"Hull City", pos:"CB", dir:"in", age:"~3 wks", tier:3, note:"19-year-old Irish centre-back; Forest's seven-figure bid was rejected, an improved offer is expected, with a Championship loan likely if he signs."},
  {name:"Dodo", club:"Fiorentina", pos:"RB", dir:"in", age:"~2 wks", tier:3, note:"27-year-old attacking full-back being 'lined up' alongside the Read pursuit; explosive going forward, considered weaker defensively than Aina."},
  {name:"Honest Ahanor", club:"Atalanta", pos:"CB", dir:"in", age:"~11 wks", tier:3, note:"18-year-old Champions League regular monitored since November; Atalanta want £30m+ and he's 'in no rush to leave' - a longer-term watch, not a summer deal."},
  {name:"Chris Wood", club:"Contract situation", pos:"ST", dir:"out", age:"~3 wks", tier:3, note:"Entering the final year of his deal at 34; local reporting suggests a sale makes sense to avoid losing him free next summer, but no interested club has been named yet."},
  {name:"Ola Aina", club:"Contract/squad status", pos:"RB", dir:"out", age:"~4 days", tier:3, note:"Injury-hit 2025/26 (28 matches missed) and now facing fresh competition from the Read pursuit; no external suitor reported, but his standing is visibly eroding."},
];

const HUB = {
  bbcNFFC: {l:"BBC Sport · Nottingham Forest", u:"https://www.bbc.co.uk/sport/football/teams/nottingham-forest"},
  skyNFFC: {l:"Sky Sports · Nottingham Forest", u:"https://www.skysports.com/nottingham-forest"},
  skyGlasner: {l:"Sky Sports · Glasner appointed", u:"https://www.skysports.com/football/news/11095/13560923/oliver-glasner-to-nottingham-forest-former-crystal-palace-boss-succeeds-vitor-pereira-at-the-city-ground"},
  skyAnderson: {l:"Sky Sports · Anderson record £116m move", u:"https://www.skysports.com/football/news/11095/13558090/elliot-anderson-to-man-city-midfielder-completes-record-breaking-lb116m-transfer-from-nottingham-forest"},
  espnAnderson: {l:"ESPN · Anderson completes City move", u:"https://www.espn.com/soccer/story/_/id/49433223/elliot-anderson-completes-move-manchester-city-nottingham-forest"},
  romanoX: {l:"Fabrizio Romano · X", u:"https://x.com/FabrizioRomano"},
  romanoDiomandeX: {l:"Fabrizio Romano · Diomande 'advanced talks' (X)", u:"https://x.com/FabrizioRomano/status/2079604490097881296"},
  forestNewsDiomande: {l:"Nottingham Forest News · Diomande state of play", u:"https://www.nottinghamforest.news/2026/07/27/the-state-of-play-in-nottingham-forests-pursuit-of-sporting-cp-star-ousmane-diomande/"},
  eotkDiomande: {l:"Empire of the Kop · Diomande closing in (BBC update)", u:"https://www.empireofthekop.com/2026/07/29/discussions-advanced-liverpool-target-could-sign-on-dotted-line-imminently-after-bbc-update/"},
  chelseaFCO: {l:"Chelsea FC Online · Forest rekindle Delap pursuit", u:"https://chelseafconline.com/2026/07/nottingham-forest-rekindle-pursuit-of-chelseas-23-year-old-striker-reports/"},
  f365Bergvall: {l:"football365 · Bergvall price tag, bid rejected", u:"https://www.football365.com/news/tottenham-reveal-lucas-bergvall-price-tag-nottingham-forest-bid-rejected"},
  forestNewsBergvall: {l:"Nottingham Forest News · What Bergvall told Spurs", u:"https://www.nottinghamforest.news/2026/07/27/what-lucas-bergvall-has-told-tottenham-as-nottingham-forest-remain-interested/"},
  insideFutbolRead: {l:"Inside Futbol · Read move at a standstill", u:"https://insidefutbol.com/2026/07/29/nottingham-forest-yet-to-lodge-fresh-bid-move-for-star-at-standstill/721575/"},
  insideFutbolLucumi: {l:"Inside Futbol · Man Utd talk swirls on Lucumí", u:"https://insidefutbol.com/2026/07/20/beginning-to-swirl-talk-of-manchester-united-entering-race-for-nottingham-forest-target/720418/"},
  insideFutbolLucumi2: {l:"Inside Futbol · Battle for Lucumí heats up", u:"https://insidefutbol.com/2026/07/24/champions-league-side-prepare-strong-move-for-nottingham-forest-target/721030/"},
  fiDodo: {l:"Football Insider · Meet Dodo", u:"https://www.footballinsider247.com/nottingham-forest/meet-dodo-the-nottingham-forest-target-who-once-eclipsed-alphonso-davies"},
  teamtalkJones: {l:"TEAMtalk · Jones wants to leave, Forest in the race", u:"https://www.teamtalk.com/liverpool/liverpool-midfielder-wants-to-leave-as-nottingham-forest-thunder-into-transfer-race-as-reds-name-price"},
  fiMarinakisSpend: {l:"Football Insider · Marinakis funding £20m-a-month", u:"https://www.footballinsider247.com/nottingham-forest/evangelos-marinakis-investing-20m-a-month-to-fund-nottingham-forest-signing-spree"},
  fiThreePlayers: {l:"Football Insider · Forest to buy three more players", u:"https://www.footballinsider247.com/nottingham-forest/nottingham-forest-to-buy-three-more-players-soon"},
  yahooGibbsWhite: {l:"Yahoo Sports · Gibbs-White decision vs Villa interest", u:"https://uk.sports.yahoo.com/news/nottingham-forest-morgan-gibbs-white-101913764.html"},
  fiMurillo: {l:"Football Insider · Murillo exit 'looks inevitable'", u:"https://www.footballinsider247.com/nottingham-forest/nottingham-forest-murillo-exit-now-looks-inevitable-as-plans-to-sign-replacement-accelerate"},
  forestOfficialGlasner: {l:"Nottingham Forest Official · Glasner appointed", u:"https://www.nottinghamforest.co.uk/news/2026/july/06/forest-appoint-oliver-glasner-as-head-coach/"},
  ggfnSchlager: {l:"Get German Football News · Schlager official", u:"https://www.getfootballnewsgermany.com/2026/xaver-schlager-forest-official/"},
  cryptoFraser: {l:"CryptoBriefing · Boyd Fraser signs from Hearts", u:"https://cryptobriefing.com/nottingham-forest-signs-boyd-fraser-hearts/"},
  soccernewsTransfers: {l:"SoccerNews · Forest transfers hub", u:"https://www.soccernews.com/soccer-transfers/nottingham-forest-transfers/"},
  pulseAina: {l:"Pulse Sports Nigeria · Aina's standing at risk", u:"https://www.pulsesports.ng/story/nottingham-forests-transfer-activity-gives-aina-cause-for-concern-2026072707374427224"},
  forestNewsMcCarthy: {l:"Nottingham Forest News · Who is Cathal McCarthy", u:"https://www.nottinghamforest.news/2026/07/08/who-is-cathal-mccarthy-the-highly-rated-irishman-nottingham-forest-have-bid-for/"},
  forestNewsPolicy: {l:"Nottingham Forest News · New transfer policy this summer", u:"https://www.nottinghamforest.news/2026/07/08/nottingham-forest-clearly-implementing-new-transfer-policy-this-summer/"},
  forestNewsAhanor: {l:"Nottingham Forest News · Monitoring Honest Ahanor", u:"https://www.nottinghamforest.news/2026/05/14/nottingham-forest-keeping-close-tabs-on-champions-league-teenager/"},
  forestNewsFinalYear: {l:"Nottingham Forest News · Three players in final contract year", u:"https://www.nottinghamforest.news/2026/07/07/the-three-nottingham-forest-players-who-are-entering-final-year-of-contract/"},
  espnEdu: {l:"ESPN · Edu Gaspar's uncertain future", u:"https://www.espn.co.uk/football/story/_/id/48120318/nottingham-forest-sporting-director-edu-uncertain-future"},
  skyWindowDates: {l:"Sky Sports · 2026 transfer window dates", u:"https://www.skysports.com/football/news/11095/13546220/summer-transfer-window-2026-dates-when-is-deadline-day-for-premier-league-and-efl-clubs-to-sign-players"},
  nottinghamForestNewsOusmaneDiomande: {l:"Nottingham Forest News", u:"https://www.nottinghamforest.news/2026/08/03/what-ousmane-diomande-is-currently-doing-as-nottingham-forest-transfer-enters-final-stages/"},
  yahooSportsSkySportsArneEngels: {l:"Yahoo Sports (Sky Sports)", u:"https://sports.yahoo.com/articles/nottingham-forest-step-pursuit-celtic-073500362.html"},
  footballFanCastFolarinBalogun: {l:"FootballFanCast", u:"https://www.footballfancast.com/fabrizio-romano-nottingham-forest-transfer-talks-ousmane-diomande-glasner/"},
  sportsMoleXaverSchlager: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/nottingham-forest/transfer-talk/feature/nottingham-forest-summer-transfers-all-confirmed-ins-and-outs-for-2026_598980.html"},
  pAYahooSportTijjaniReijnders: {l:"PA / Yahoo Sport", u:"https://ca.sports.yahoo.com/news/nottingham-forest-target-tijjani-reijnders-153500623.html"}};

const LINKMAP = {
  "Xaver Schlager": ["ggfnSchlager","forestOfficialGlasner", "sportsMoleXaverSchlager"],
  "Boyd Fraser": ["cryptoFraser"],
  "Elliot Anderson": ["skyAnderson","espnAnderson"],
  "David Carmo": ["soccernewsTransfers", "sportsMoleXaverSchlager"],
  "Jota Silva": ["soccernewsTransfers", "sportsMoleXaverSchlager"],
  "Angus Gunn, Stefan Ortega & Willy Boly": ["soccernewsTransfers"],
  "Ousmane Diomande": ["romanoDiomandeX","forestNewsDiomande","eotkDiomande", "nottinghamForestNewsOusmaneDiomande"],
  "Lucas Bergvall": ["f365Bergvall","forestNewsBergvall"],
  "Liam Delap": ["chelseaFCO"],
  "Givairo Read": ["insideFutbolRead","pulseAina"],
  "Jhon Lucumí": ["insideFutbolLucumi","insideFutbolLucumi2"],
  "Curtis Jones": ["teamtalkJones"],
  "Murillo": ["fiMurillo"],
  "Morgan Gibbs-White": ["yahooGibbsWhite"],
  "Arne Engels": ["yahooSportsSkySportsArneEngels"],
  "Folarin Balogun": ["footballFanCastFolarinBalogun"],
  "Tijjani Reijnders": ["pAYahooSportTijjaniReijnders"]};
const WL_LINKMAP = {
  "Cathal McCarthy": "forestNewsMcCarthy",
  "Dodo": "fiDodo",
  "Honest Ahanor": "forestNewsAhanor",
  "Chris Wood": "forestNewsFinalYear",
  "Ola Aina": "pulseAina",
};

const PROSE = {
  heroH2: `<em>Diomande</em> races toward the line as Forest's £116m Anderson windfall funds a four-target chase under new coach <em>Glasner</em>`,
  heroLede: `Six weeks into a window bookended by chaos and cash, Forest's story is simple: sell one for a fortune, chase four with it. <b>Elliot Anderson's £116m move to Manchester City</b> - a club-record sale - is now bankrolling simultaneous pursuits of <b>Ousmane Diomande</b> (nearing completion, personal terms agreed), <b>Lucas Bergvall</b> (who has told Spurs he wants the move), <b>Liam Delap</b> and <b>Givairo Read</b>. All of it is happening under a fifth head coach in under two years, <b>Oliver Glasner</b>, appointed 6 July after Vítor Pereira was sacked despite steering Forest to survival and a Europa League semi-final. With no sporting director since Edu Gaspar's turbulent March exit, recruitment now runs through <b>owner Evangelos Marinakis</b> directly - a structure that has, so far, produced fast, decisive business rather than paralysis.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Evangelos Marinakis</b> (Owner, direct recruitment control)</span>
      <span>HEAD COACH: <b>Oliver Glasner</b></span>
      <span>OWNER: <b>Evangelos Marinakis</b></span>
      <span>WINDOW: <b>Open → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">14<small>th</small></div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat gold"><div class="l">Record Sale (Anderson)</div><div class="v">£116<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Further Spend</div><div class="v">£60-110<small>m</small></div></div>
    <div class="stat gold"><div class="l">SCR Cost Cap</div><div class="v">85<small>%</small></div></div>`,
  positionPanel: `
  <!-- ANALYSIS: MODEL + FINANCE -->
  <section id="sec-position">
    <div class="sec-head"><h3>Club Position</h3><span class="num">01</span></div>
    <p class="sec-sub">The lens through which every rumour is weighted: the recruitment philosophy, the balance sheet, the brand, and the price of managerial chaos.</p>

    <div class="cards">
      <!-- THE MODEL -->
      <div class="card">
        <h4>The Model <span class="tag">OWNER-DRIVEN</span></h4>
        <p>Forest's recruitment no longer runs through a conventional sporting-director structure. <b>Edu Gaspar</b>, hired from Arsenal in 2025 as "global head of football," was told to stay away from the training ground in March 2026 amid reported clashes with then-manager Nuno, and formally exited soon after. Since then, business has been driven directly by <b>Evangelos Marinakis</b> and his inner circle, with the head coach given real say once appointed - Glasner has been able to "press ahead with a number of deals" since arriving in July.</p>
        <div class="quote">Financial adviser Stefan Borson's framing: Marinakis is "putting in £15m-£20m-a-month right now," a scale of direct owner cash injection few Premier League clubs can match.</div>
        <p><b>The Olympiacos pipeline:</b> Marinakis's dual ownership of Forest and Olympiacos already this window sent David Carmo and Jota Silva to Piraeus - a standing release valve for squad players that has no equivalent at almost any other club in the league.</p>
        <ul>
          <li>Four different permanent/interim head coaches started the 2025/26 season alone (Nuno → Postecoglou → Dyche → Pereira); Glasner is the fifth appointment since September 2025.</li>
          <li>Despite that turnover, the Anderson sale and the Diomande, Bergvall and Read pursuits show recruitment has kept moving independent of the dugout - a genuinely unusual level of continuity from ownership alone.</li>
          <li>Sweet-spot profile this window: 20-26, either a data-backed value buy (Diomande, discounted well below release clause) or a player who has actively pushed for the move (Bergvall).</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> weight owner-driven, fast-moving deals (Diomande) more heavily than usual for a club without a permanent DoF; treat any deal requiring patient relationship-building as more fragile given the lack of a stable recruitment office.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">CASH-RICH, OWNER-BACKED</span></h4>
        <p>The <b>£116m Anderson sale</b> to Manchester City is the largest fee ever received by the club and instantly reshapes the summer's affordability picture - Forest can now fund three or four mid-size deals without leaning on further big sales.</p>
        <ul>
          <li>Marinakis's direct monthly cash injections (est. £15-20m) mean the club isn't solely reliant on transfer trading to fund business, a genuine point of difference from most of the bottom half of the table.</li>
          <li>With <b>no European football in 2026/27</b>, Forest sit under the standard <b>85% Squad Cost Ratio cap</b> rather than the tighter 70% applied to clubs in Europe - real short-term spending headroom, even if it comes with zero European revenue this season.</li>
          <li>Existing core assets have been quietly locked down rather than cashed in: <b>Murillo</b> (new four-year deal, May), <b>Neco Williams</b> (new four-year deal), and <b>Ibrahim Sangare</b> (new long-term deal, 28 Jul) have all recommitted this summer.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> the retained list also stripped out both senior back-up goalkeepers (Gunn, Ortega) and veteran Willy Boly for nothing, and no goalkeeper reinforcement has yet arrived - spending power hasn't yet translated into squad-wide coverage.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Stability Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">A club that can now outspend most of the division, run by an owner unafraid to sack managers who overperform expectations - and the tension that creates for anyone assessing whether a deal will actually stick.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>Forest's on-pitch story last season was genuinely elite - a Europa League semi-final run under Vítor Pereira, only for Marinakis to sack him anyway on the logic that the football, not just the results, wasn't good enough. That ruthlessness is now a double-edged recruitment tool: it signals real ambition and resource to targets like Diomande and Bergvall, but the trigger-happy managerial record (five appointments in under two years) is a legitimate reason for a player weighing up whether the project he's signing for will look the same in six months.</p>
        <ul>
          <li>Glasner arrives with genuine pedigree (Europa Conference League with Crystal Palace, Europa League with Frankfurt), which has already helped land Schlager, who followed him from their Wolfsburg days.</li>
          <li>The Anderson sale price (£116m for a player who cost Forest a fraction of that) is itself a recruitment asset - proof the club can develop and cash in at the very top of the market.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> the same spending power and resale story that attracts Diomande and Bergvall also puts Murillo and Gibbs-White in the shop window for bigger clubs - Forest are actively resisting both this window rather than cashing in.</div>
      </div>
      <div class="card">
        <h4>The Managerial-Continuity Risk <span class="tag">KEY TENSION</span></h4>
        <p>Every rumour on this page assumes Glasner is still head coach when deals complete. Given the club sacked a manager who reached a European semi-final, that assumption carries more risk at Forest than almost anywhere else in the league.</p>
        <p>A related risk sits with the vacant Director of Football role: recruitment decisions currently concentrate in the owner's circle rather than a dedicated football-operations structure, which has so far produced speed (Anderson, Schlager, Diomande) but offers no institutional buffer if Marinakis's patience with Glasner runs out the way it did with three predecessors.</p>
        <ul>
          <li>No permanent DoF since March 2026 means less insulation for the head coach if results dip.</li>
          <li>The squad has already absorbed four managerial reboots in a single season - Glasner inherits both talent and some genuine fatigue.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: A cash-rich reset under a proven European coach</h5>
        <ul>
          <li>The Anderson fee gives Glasner resources most newly-arrived Premier League coaches never get in year one.</li>
          <li>Diomande, if completed, addresses the defence at a discount well below market rate - smart value business rather than panic spending.</li>
          <li>Marinakis's direct cash backing means the rebuild isn't contingent on further high-profile sales.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: Instability undermining the very deals being closed</h5>
        <ul>
          <li>A repeat of last season's managerial churn would strand mid-window signings (Bergvall, Read, Delap) with a coach who didn't sign off on them.</li>
          <li>The goalkeeper gap (both senior back-ups gone, nobody signed) shows spending power hasn't yet translated into squad-wide planning.</li>
          <li>A DoF vacancy leaves no clear owner of the medium-term recruitment strategy beyond Marinakis himself.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> Forest have more genuine spending power than their table position suggests, and Glasner's early business (Schlager in, Diomande imminent, Bergvall genuinely interested) reads as coherent rather than scattergun. The real risk to this tracker isn't affordability, it's continuity: nothing here is safe from being reshuffled if results wobble and Marinakis reaches for the trigger again.
    </div>
  </section>
`,
  confirmedPending: `<b>Pending / context:</b> Diomande is the closest thing to a done deal not yet announced - personal terms agreed, Sporting already planning without him, an announcement expected within days per Fabrizio Romano. On the retention side, <b>Ibrahim Sangare</b> (28 Jul), <b>Murillo</b> (May) and <b>Neco Williams</b> have all signed new long-term deals this window, taking three potential exit sagas off the table before they started. No further official announcements are imminent on the goalkeeping gap left by Gunn and Ortega's departures.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete - Gibbs-White interest from Villa is a good example on the outgoing side. Weighting: recency 30%, source tier 25%, tactical fit under Glasner 15%, ownership network (Marinakis/Olympiacos channel) 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the window opened.`,
  outgoingSub: `Forest's outgoing business this window has already been decided by one deal: Anderson's £116m sale funds almost everything else, meaning further sales (Murillo, Gibbs-White) are being resisted rather than pursued.`,
  pricingBanner: `
      <b>Pricing principle: with £116m already banked, further sales go at a holder's price or not at all.</b> Marinakis's public stance on Gibbs-White ("don't want to lose him under any circumstances") and the club's "silly offer" line on Murillo both reflect a club under zero financial pressure to sell twice in one window. Treat the fees below as floors that would need a genuinely outsized bid to move, and treat Forest's own resistance as the dominant factor suppressing completion probability, more than any specific valuation gap.
    `,
  excludedNote: `<b>Excluded as stale/resolved:</b> James McAtee and Omari Hutchinson (both signed August 2025, recycled by aggregators as "targets" despite already being Forest players); Taiwo Awoniyi to West Ham or Everton (January 2025 reporting, superseded by his stated intent to stay past 2028); Jesse Derry (mislabeled by some feeds as a Forest target - he is joining Sporting CP on loan from Chelsea, unconnected to Forest's business).`,
  spendIn: { v: `£70-120m`, x: `Diomande (~£42m all-in) plus whichever of Bergvall/Delap/Read/Lucumí progress furthest - almost entirely funded by the Anderson sale rather than requiring further outgoing business.` },
  spendOut: { v: `£116m banked, more unlikely`, x: `Anderson's world-record fee is already in the bank. Murillo and Gibbs-White both attract real interest, but Forest are actively resisting both, so a further nine-figure sale this window looks unlikely without an exceptional offer.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: Fabrizio Romano, BBC Sport, The Guardian, official club statements (Anderson, Schlager, Glasner announcements).</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, TEAMtalk, football365, Chelsea FC Online (beat-specific), Get German Football News (Schlager). Nottingham Forest News rises within its specialism given direct beat access.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: Football Insider, Inside Futbol, Pulse Sports Nigeria, SoccerNews, CryptoBriefing's sports desk, mixed-record regional and international press.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: single-source social posts, thin fan-site aggregation. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used only as a discovery index, then traced to the original reporter for weighting, never weighted directly.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Ownership network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled links from Forest's chaotic 2025/26 season (McAtee, Hutchinson, old Awoniyi links) do not refresh on aggregator repetition and are treated as dead.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
