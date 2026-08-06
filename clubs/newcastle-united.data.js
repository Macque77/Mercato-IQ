/* ============================================================
   MERCATO IQ · CLUB DATA · NEWCASTLE UNITED · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce newcastle-united.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (30 Jul 2026): first live-format build for this
   club (previously on the legacy single-page template with no
   BRAND-driven colours). Researched fresh via live web search.
   ============================================================ */

const BRAND = {
  club: "Newcastle United", mono: "NUFC", slug: "newcastle-united",
  primary: "#BFC4C9", primaryBright: "#FFFFFF", primaryDeep: "#000000",
  primaryRgb: "191,196,201",
  breadcrumb: ["England","Premier League"]
};
const VOLATILE = {
  verified: "2026-07-30",
  coach: "VACANT - Eddie Howe left the role 30 Jul 2026; Ross Wilson (Sporting Director) and CEO David Hopkinson run the search, Al-Ahli's Matthias Jaissle the advanced favourite",
  dof: "Ross Wilson (Sporting Director)",
  europe: "None (2026/27)",
  finish: "12th (2025/26, 49 pts)",
  owner: "PIF-led consortium (chairman Yasir Al-Rumayyan); PCP Capital Partners (Amanda Staveley/Mehrdad Ghodoussi) and Reuben Brothers minority stakes",
  window: "Opened 15 Jun, closes 1 Sep 2026, 11pm UK"
};
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Newcastle+United/Transfer+News",
    "https://www.chroniclelive.co.uk/all-about/newcastle-united-fc",
    "https://www.shieldsgazette.com/sport/football/newcastle-united",
    "https://www.skysports.com/newcastle-united",
    "https://www.teamtalk.com/newcastle-united"
  ],
  queries: [
    "Newcastle United transfer news July 2026",
    "Newcastle United bid OR medical OR 'personal terms'",
    "Newcastle United head coach appointment Jaissle McKenna Conte",
    "Newcastle United calciomercato Scalvini Atalanta Tutto Atalanta",
    "Newcastle United fichajes Marca AS Relevo Ederson Oso",
    "Newcastle Bruno Guimaraes Arsenal Telegraph talkSPORT"
  ],
  note: "NUFC-specific beat prioritised: Chronicle Live (Lee Ryder), Shields Gazette/NUFC The Mag, The Athletic (Chris Waugh). Foreign desks per profile: Italy (Tutto Atalanta/Gazzetta for Scalvini and Ederson), Spain (Marca/AS/Relevo for Oso, Real Betis local press for Ezzalzouli), Czech/Portugal (for Hornicek). Coaching-search sweep runs in parallel given the 30 Jul vacancy. Trace every aggregator hit (TransferFeed, NewsNow) to its original reporter, never link the aggregator itself."
};

const REPORT_META = { label: "Updated 03 Aug 2026 – European refresh" , updated: "2026-08-03T12:48:44Z"};

const CONFIRMED_IN = [
  {name:"Sean Steur", sub:"20 · CM/DM · Netherlands", to:"permanent from Ajax", fee:"£23m", free:false, status:"done", statusTxt:"DONE, SIGNED",
   note:"Confirmed by Sky Sports: a five-year deal signed in the immediate aftermath of Sandro Tonali's departure to Tottenham, filling the vacated central-midfield slot with a younger, cheaper profile. A composed Eredivisie ball-player Newcastle's recruitment team have tracked for over a year; regarded as a squad player initially rather than a like-for-like Tonali replacement."},
  {name:"Bazoumana Touré", sub:"20 · RW/LW · Ivory Coast", to:"permanent, undisclosed selling club", fee:"£42m", free:false, status:"done", statusTxt:"DONE, SIGNED",
   note:"Confirmed by Sky Sports at £42m: a statement swoop for a highly-rated Ivorian winger, part of the club's declared shift toward an 18-24 age bracket, £20-40m recruitment model under Ross Wilson. Adds direct competition on the right and left flanks ahead of any Jacob Murphy exit."},
  {name:"Ewen Jaouen", sub:"20 · GK · France (U21)", to:"permanent from Stade de Reims", fee:"≈£18-24m", free:false, status:"done", statusTxt:"DONE, SIGNED",
   note:"Fabrizio Romano's 'here we go': a long-term deal to June 2030 for a 34-appearance, 15-clean-sheet Ligue 2 season. Signed as a development goalkeeper behind the senior pecking order, not an immediate Nick Pope replacement - that role is being addressed separately via the live Lukáš Horníček pursuit below."},
  {name:"Kyle Healy", sub:"16 · RB", to:"West Ham United academy", fee:"Undisclosed (academy fee)", free:false, status:"done", statusTxt:"DONE, SIGNED",
   note:"Romano confirmed the academy switch on 23 Jul: six U18 Premier League appearances at West Ham last season. A future-facing addition with zero first-team implication this window, included for completeness of the state of record."},
  {name:"Lukáš Horníček", sub:"24 · GK · Czech Republic", to:"from SC Braga", fee:"€30.6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Confirmed 3 August per FootballTransfers and multiple outlets: the €30.6m release clause has been formally triggered and Horníček has completed his medical ahead of an imminent unveiling at St James' Park. This closes Newcastle's senior goalkeeper position after the Jaouen arrival was explicitly positioned as a long-term development signing rather than an immediate Pope replacement. Horníček becomes the senior cover on a long-term deal."},
  {name:"Aladji Bamba", sub:"21 · DM · Ivory Coast", to:"from AS Monaco", fee:"£35.5m (€40m, incl. add-ons)", free:false, status:"done", statusTxt:"DONE, SIGNED",
   note:"Confirmed by Sky Sports, the Newcastle official site and AS Monaco (24 Jul): a five-year deal for the highly-rated defensive midfielder, No.8 shirt assigned. Landed while the Bruno Guimarães saga was still unresolved, positioning Bamba as a like-for-like contingency in central midfield if the captain does leave for Arsenal. Was missing from the previous refresh's tracked list entirely - picked up this cycle via the FootballTransfers.com confirmed-deals cross-check."},
];
const CONFIRMED_OUT = [
  {name:"Anthony Gordon", sub:"25 · LW · England", to:"Barcelona (permanent)", club:"Barcelona (permanent)", fee:"£69m", free:false, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Confirmed by Sky Sports: the England winger completes a move to Barcelona, one of three marquee departures (with Tonali and Isak's move last transfer deadline day) that funded this summer's rebuild after a 12th-place finish and no European football. Newcastle immediately opened a chase for a direct like-for-like in Abde Ezzalzouli (see Incoming)."},
  {name:"Sandro Tonali", sub:"26 · CM · Italy", to:"Tottenham Hotspur (permanent)", club:"Tottenham Hotspur (permanent)", fee:"£100m", free:false, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"A Tottenham club-record fee, confirmed by Sky Sports and ESPN. A landmark sale that reshapes the midfield picture and materially strengthens Newcastle's Squad Cost Ratio headroom heading into a summer already featuring the Bruno Guimaraes saga."},
  {name:"Kieran Trippier", sub:"35 · RB · England", to:"Wolverhampton Wanderers", club:"Wolverhampton Wanderers", fee:"Free transfer", free:true, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Confirmed by Sky Sports: the veteran right-back leaves on a free at the end of his contract after four years and a League Cup winner's medal, ending his second spell on Tyneside."},
  {name:"Emil Krafth", sub:"31 · RB · Sweden", to:"Released, free agent", club:"Released, free agent", fee:"Free (contract expired)", free:true, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Contract-expiry departure confirmed in early summer reporting; a squad-depth exit with no fee, freeing a wage-bill slot rather than driving strategy."},
  {name:"John Ruddy", sub:"39 · GK", to:"Released, free agent", club:"Released, free agent", fee:"Free (contract expired)", free:true, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Veteran goalkeeping cover released on contract expiry; picked up this refresh via the FootballTransfers.com confirmed-deals cross-check, not previously tracked."},
  {name:"Matt Targett", sub:"26 · LB", to:"Hull City", club:"Hull City", fee:"Free", free:true, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Confirmed free move to Hull City; picked up this refresh via the FootballTransfers.com confirmed-deals cross-check, not previously tracked."},
  {name:"Harrison Ashby", sub:"23 · RB/LWB", to:"Luton Town (loan)", club:"Luton Town (loan)", fee:"LOAN", free:true, status:"exit", statusTxt:"LOAN CONFIRMED",
   note:"A season-long loan to Luton Town, confirmed this window. Corrects the previous refresh's watchlist framing, which only had a permanent exit as likely rather than a done loan."},
  {name:"Travis Hernes", sub:"22 · CM", to:"FC Groningen", club:"FC Groningen", fee:"Undisclosed", status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Confirmed permanent move to Eredivisie side Groningen; picked up this refresh via the FootballTransfers.com confirmed-deals cross-check, not previously tracked."},
  {name:"Joe White", sub:"20 · CM · academy", to:"Crewe Alexandra", club:"Crewe Alexandra", fee:"Undisclosed", status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Confirmed permanent exit to Crewe Alexandra for 'a fresh start' after a disappointing loan spell at Bradford City. Corrects the previous refresh's watchlist entry, which had the destination as still open."},
  {name:"Charlie McArthur", sub:"19 · academy", to:"York City", club:"York City", fee:"Undisclosed", status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Academy departure to York City, confirmed this window; picked up via the FootballTransfers.com confirmed-deals cross-check, not previously tracked."},
];

const INCOMING = [
  {name:"Matthias Jaissle", sub:"38 · Head Coach appointment", club:"Al-Ahli (Saudi Pro League)", pos:"Head coach", report:"31 Jul 2026", src:"Fabrizio Romano ('here we go') / Sky Germany / Florian Plettenberg (Goal.com)", tier:1, fee:"≈€11m compensation (PIF-to-PIF)", truth:88, prob:82, light:'g', trend:'up',
   note:"Escalated sharply since the 30 Jul vacancy opened. Fabrizio Romano has now called it 'here we go', Sky Germany frame it as a 'Done Deal' with terms agreed to 2030, and Plettenberg reports personal terms 'fully done', the release clause activated and Al-Ahli formally informed. Goal.com's latest (31 Jul) has Jaissle due to arrive in Newcastle Saturday 1 Aug for unveiling, with Newcastle paying Al-Ahli roughly €11m in compensation. Still no official NUFC statement at time of writing, so this stays a very-high-probability incoming rather than a formal confirmation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:82},
  {name:"Giorgio Scalvini", sub:"22 · CB · Italy", club:"Atalanta", pos:"CB", report:"30 Jul 2026", src:"Shields Gazette / TheHardTackle / Tutto Atalanta", tier:2, fee:"≈€45-50m (£38-40m)", truth:58, prob:34, light:'y', trend:'flat',
   note:"Newcastle remain described as 'at the forefront' of the race, part of a reported £68m double defensive swoop alongside the Horníček goalkeeper deal. But Tottenham have now made a competing approach (TheHardTackle, 30 Jul), with both clubs still at an exploratory, no-formal-bid stage. Fits Newcastle's real need: Fabian Schär and Dan Burn are both 34 with deals expiring 2027. Probability trimmed slightly from the last refresh given Spurs' entry, not because Newcastle's own interest has cooled.", lastSeen:"2026-08-04T19:10:50Z", baseProb:34},
  {name:"Abde Ezzalzouli", sub:"24 · LW/RW · Morocco", club:"Real Betis", pos:"W", report:"~stable through late Jul", src:"Graeme Bailey (TeamTalk, exclusive) / FootballPlace", tier:2, fee:"≈£43-52m (release clause ≈€60m)", truth:62, prob:38, light:'y', trend:'up',
   note:"Still framed by TeamTalk as the direct Anthony Gordon replacement, with Betis 'fully expecting' to lose him and a 'clear pathway to a prominent attacking role' cited as Newcastle's edge. Barcelona hold a 20% sell-on. One genuine positive shift this refresh: Aston Villa are reported to have pulled back from the race (FootballPlace), thinning the competition slightly even though Chelsea, Man City, Everton, Dortmund, Leipzig and Napoli remain credited.", lastSeen:"2026-08-04T19:10:50Z", baseProb:38},
  {name:"Joaquín Oso", sub:"21 · RB/LB · Spain", club:"Sevilla", pos:"FB", report:"14 Jul 2026 (no fresher update found)", src:"TEAMtalk / Sport Witness", tier:3, fee:"≈€15m (Sevilla's price)", truth:38, prob:8, light:'r', trend:'down',
   note:"Cooling sharply and possibly gone. Sport Witness's most recent substantive update (14 Jul) has Nottingham Forest 'intending to finalise' the deal, in direct contact with Sevilla and meeting their ~€15m price - with no mention of Newcastle at all. Fiorentina's earlier acceleration has itself stalled. Kept in the table at a low probability rather than moved to Ignore, since no explicit Newcastle withdrawal has been reported, but this now reads as very unlikely.", lastSeen:"2026-08-04T19:10:50Z", baseProb:8},
  {name:"Angelo Stiller", sub:"Eyed as Tonali replacement", club:"VfB Stuttgart", pos:"MF", report:"Newcastle have added Stiller to their shortlist and held talks, viewing him as a possible successor to Sandro Tonali; his contract includes an accessible release clause.", src:"Sport BILD / Kicker", tier:2, fee:"~£44m (release clause)", truth:50, prob:35, light:"y", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const OUTGOING = [
  {name:"Bruno Guimarães", sub:"28 · Brazil · MF", club:"Arsenal", pos:"MF", report:"Newcastle have agreed to sell captain Guimarães to Arsenal for £75m, with the midfielder set for a medical within days.", src:"Sky Sports", tier:1, fee:"£75m", truth:92, prob:88, light:"g", trend:"up", note:"A defining sale of the window for Newcastle. Lyon take about €8m through a 20% sell-on clause, and Shearer among others has warned of a challenging summer on Tyneside.", lastSeen:"2026-08-05T11:41:11Z", baseProb:88},
  {name:"Jacob Murphy", sub:"31 · RW/LW · England", club:"Everton", pos:"W", report:"28 Jul 2026", src:"Football Insider", tier:3, fee:"Bargain-fee speculation, undisclosed", truth:52, prob:26, light:'o', trend:'up',
   note:"Football Insider (28 Jul) reports Newcastle are 'now ready to accept the right offer' for Murphy, a step on from the pure enquiry-stage framing of the last refresh, though still no bid or fee agreed. A decade-long servant whose game time is squeezed by Bazoumana Touré's arrival and any Ezzalzouli deal.", lastSeen:"2026-08-04T19:10:50Z", baseProb:26},
  {name:"Lewis Hall", sub:"21 · England · LB", club:"Manchester United", pos:"Left-back", report:"Manchester United are said to be considering a move for the left-back, with Newcastle in flux after the managerial change and the Guimaraes sale. No approach has been confirmed by either club.", src:"The Sun, relayed by Sky Sports Paper Talk", tier:3, fee:"Undisclosed", truth:55, prob:20, light:"o", trend:"down", note:"Thin sourcing. A paper round-up line only, with no tier-1 reporter attaching their name to it. Hall is a long-term asset on a long contract and there is no evidence Newcastle want to sell.", lastSeen:"2026-08-06T10:49:40Z", baseProb:20},
  {name:"Nick Pope", sub:"34 · GK · England", club:"Ipswich Town (interest)", pos:"GK", report:"~Jul 2026 (no fresher update found)", src:"Shields Gazette (Lee Ryder)", tier:2, fee:"Undisclosed", truth:60, prob:30, light:'y', trend:'flat',
   note:"Unchanged this refresh: Pope 'will be allowed to leave' this summer per the Gazette, with Ipswich and other Premier League sides interested. Explicitly contingent on Newcastle first landing a senior replacement - Horníček's deal is still only 'advancing towards completion', not yet formal, so this holds rather than rises.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Joe Willock", sub:"26 · CM/AM · England", club:"Besiktas", pos:"CM", report:"28-29 Jul 2026", src:"Newcastle World", tier:2, fee:"£10m bid rejected", truth:66, prob:38, light:'y', trend:'up',
   note:"Materially more concrete than the last refresh's 'open to offers' framing: Newcastle World (28-29 Jul) reports Besiktas made a £10m bid that Newcastle rejected, Willock's agent has travelled to Istanbul, and a Turkish journalist says the player has 'approved' the move - but it won't proceed unless Newcastle lowers its price. A named club and a real (if rejected) bid lift both True and Happens versus the previous vague framing.", lastSeen:"2026-08-04T19:10:50Z", baseProb:38},
  {name:"Bruno Guimaraes", sub:"28 · Brazil · CM", club:"Arsenal", pos:"Central midfielder", report:"Arsenal have agreed a 75m pound fee with Newcastle for their captain and the club have accepted the sale, with Sky Sports setting out the reasoning behind sanctioning it. Not a rumour so much as a deal in its final stages, though completion, medical and registration are still to be confirmed, so it stops short of a done deal.", src:"Sky Sports", tier:2, fee:"£75m", truth:95, prob:90, light:"g", trend:"flat", note:"Fee agreed rather than signed. The move gathered pace after the manager's exit left the squad unsettled. Downgrade to confirmed_out only once Newcastle or Arsenal announce.", lastSeen:"2026-08-06T10:49:40Z", baseProb:90}
];

const RISERS = [
  {ar:"⬆", t:"<b>Matthias Jaissle</b>: escalated to Romano's 'here we go'; due in Newcastle Saturday 1 Aug to be unveiled."},
  {ar:"⬆", t:"<b>Bruno Guimarães</b>: The Sun and FootballTransfers both report Arsenal 'close to finalising' a deal north of £70m."},
  {ar:"⬆", t:"<b>Joe Willock</b>: a concrete £10m Besiktas bid (rejected) and agent travel to Istanbul replace the previous vague 'open to offers' framing."},
  {ar:"⬆", t:"<b>Lewis Hall</b>: Chelsea now 'hovering' as a genuine second suitor alongside Manchester United."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Ederson (Atalanta)</b>: signed a new Atalanta contract after his proposed Man Utd move fell through on medical concerns - dead for Newcastle."},
  {ar:"⬇", t:"<b>Joaquín Oso</b>: Nottingham Forest now reported to be finalising the deal directly with Sevilla; no Newcastle mention in the latest reporting."},
  {ar:"⬇", t:"<b>Giorgio Scalvini</b>: still live, but Tottenham have now made a competing approach."},
];
const NEW = [
  {ar:"✦", t:"<b>Aladji Bamba's £35.5m Monaco move</b> - confirmed 24 Jul but missing from the last refresh - added to Confirmed via the FootballTransfers.com cross-check, alongside five further confirmed exits (Ruddy, Targett, Ashby loan, Hernes, White, McArthur)."},
  {ar:"✦", t:"<b>Jaissle 'here we go'</b>: Romano's confirmation plus a reported Saturday arrival date moves this from 'advanced talks' to imminent."},
  {ar:"✦", t:"<b>Willock</b> gains a named suitor and a real bid (Besiktas, £10m, rejected) for the first time this window."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Ederson (Atalanta)</b>: resolved - signed a new Atalanta contract; the proposed Man Utd move (and any Newcastle interest) is dead."},
  {ar:"✕", t:"<b>Johan Manzambi</b>: resolved - signed for Aston Villa in a club-record £59.5m deal; any 2026 piece still listing him as a Newcastle target is stale."},
  {ar:"✕", t:"<b>James Trafford</b>: resolved - signing for Leeds United; treat any lingering Newcastle-Trafford link as recycled from the 2024/2025 chases."},
  {ar:"✕", t:"<b>Víctor Muñoz</b>: resolved - Liverpool completed the £34.5m signing in July; discount any Newcastle framing as pre-resolution reporting."},
  {ar:"✕", t:"<b>Aaron Ramsdale (£13.8m)</b>: dated reporting from the 2025 window, not current business; excluded from this refresh."},
];

const POSITIONS = [
  {p:"Head coach", w:95, x:"The gating decision for the entire window; vacancy opened today, Jaissle the advanced name"},
  {p:"Centre-back", w:72, x:"Schär (34) and Burn (34) both out of contract 2027; Scalvini the live succession target"},
  {p:"Winger", w:65, x:"Replacing Gordon; Ezzalzouli the stated priority after Muñoz was lost to Liverpool"},
  {p:"Goalkeeper", w:58, x:"Pope exit path opens once Horníček (senior) completes; Jaouen signed as the long-term project"},
  {p:"Central midfield", w:50, x:"Contingent on a Bruno Guimarães sale; Steur signed as depth, Ederson monitored as a possible replacement"},
];

const WATCHLIST = [
  {name:"Nick Woltemade", club:"Newcastle United", pos:"ST", dir:"out", age:"~2 wks", tier:2, note:"The Athletic (Chris Waugh) reports his fit in Howe's system was already uncertain after a difficult World Cup; with Howe now gone, his standing under a new coach is an open question, though a sale remains unlikely given the fee sunk into him."},
  {name:"Yoane Wissa", club:"Newcastle United", pos:"ST", dir:"out", age:"~2 wks", tier:2, note:"The Athletic reports Newcastle explored a sale market but judged the financial hit too heavy; the club is banking on a stronger season after his World Cup involvement rather than moving him on."},
  {name:"Dan Burn & Fabian Schär", club:"Newcastle United", pos:"CB", dir:"out", age:"~4 wks", tier:3, note:"Both 34 with contracts expiring 2027; not an active sale story, but their situation is the direct driver of the Scalvini centre-back pursuit above. Monitoring only."},
  {name:"Kieran McKenna / Antonio Conte", club:"Alternate coaching candidates", pos:"Head coach", dir:"in", age:"~same day", tier:3, note:"Named alongside Jaissle as the search continues; no reported contact confirmed for either as of 30 Jul, well behind Jaissle in the reported pecking order."},
];

const HUB = {
  bbcNUFC:    {l:"BBC Sport · Newcastle United", u:"https://www.bbc.co.uk/sport/football/teams/newcastle-united"},
  bbcGossip:  {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  skyNUFC:    {l:"Sky Sports · Newcastle United", u:"https://www.skysports.com/newcastle-united"},
  athletic:   {l:"The Athletic · Newcastle United (Chris Waugh)", u:"https://www.nytimes.com/athletic/football/club/newcastle-united/"},
  romano:     {l:"Fabrizio Romano · X", u:"https://x.com/FabrizioRomano"},
  chronicle:  {l:"Chronicle Live · Newcastle United (Lee Ryder)", u:"https://www.chroniclelive.co.uk/all-about/newcastle-united-fc"},
  leeRyder:   {l:"Lee Ryder · X", u:"https://x.com/lee_ryder"},
  shieldsGaz: {l:"Shields Gazette · Newcastle United", u:"https://www.shieldsgazette.com/sport/football/newcastle-united"},
  teamtalk:   {l:"TEAMtalk · Newcastle United", u:"https://www.teamtalk.com/newcastle-united"},
  telegraph:  {l:"Luke Edwards (The Telegraph) · X", u:"https://x.com/LukeEdwardsTele"},
  talksport:  {l:"Ben Jacobs (talkSPORT) · X", u:"https://x.com/JacobsBen"},
  nufcOfficial:{l:"Newcastle United Official · news", u:"https://www.newcastleunited.com/en/news"},
  tuttoAtalanta:{l:"Tutto Atalanta", u:"https://www.tuttoatalanta.com/"},
  newcastleWorld:{l:"Newcastle World · football", u:"https://www.newcastleworld.com/sport/football/newcastle-united"},
  khelnow:    {l:"Khel Now · football", u:"https://khelnow.com/football"},
  bambaSky:   {l:"Sky Sports · Bamba completes £35.5m move", u:"https://www.skysports.com/football/news/11678/13566552/aladji-bamba-transfer-news-newcastle-complete-lb35-5m-signing-of-midfielder-from-monaco"},
  bambaNUFC:  {l:"Newcastle United Official · Bamba signs", u:"https://www.newcastleunited.com/en/news/aladji-bamba-signs-for-newcastle-united"},
  bambaGFFN:  {l:"Get French Football News · Bamba to Newcastle", u:"https://www.getfootballnewsfrance.com/2026/official-i-monacos-aladji-bamba-joins-newcastle-in-a-e40m-deal/"},
  jaissleYahoo:{l:"Yahoo Sports · Jaissle 'Done Deal' (Sky Germany)", u:"https://sports.yahoo.com/articles/done-deal-matthias-jaissle-join-213600703.html"},
  jaissleGoal:{l:"Goal.com · Newcastle inform Al-Ahli of Jaissle deal", u:"https://www.goal.com/en/news/newcastle-inform-al-ahli-saudi-of-yaissle-deal/blt9bb0d7912c2c4bd8"},
  jaissleTribuna:{l:"Tribuna · Romano 'here we go' on Jaissle", u:"https://tribuna.com/en/news/2026-07-30-here-we-go-matthias-jaissle-to-become-next-newcastle-head-coach-romano/"},
  brunoSun:   {l:"The Sun (Jack Rosser) · Arsenal close to agreeing Bruno deal", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/07/arsenal-transfer-news-bruno-guimaraes-newcastle-united-agreement-close-summer-2026"},
  brunoFT:    {l:"FootballTransfers · Arsenal 'advanced talks', verbal agreement ~€87m", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/07/arsenal-advanced-talks-bruno-guimaraes-verbal-agreement-newcastle-87m-transfer"},
  osoSW:      {l:"Sport Witness · Forest finalising Oso deal", u:"https://sportwitness.co.uk/"},
  scalviniHT: {l:"TheHardTackle · Tottenham competing approach for Scalvini", u:"https://thehardtackle.com/"},
  ezzalzouliFP:{l:"FootballPlace · Villa pull back from Ezzalzouli race", u:"https://footballplace.co.uk/"},
  murphyFI:   {l:"Football Insider · Newcastle ready to accept offer for Murphy", u:"https://www.footballinsider247.com/"},
  hallCO:     {l:"CaughtOffside (Simon Phillips) · Chelsea hovering for Hall", u:"https://www.caughtoffside.com/"},
  willockNW:  {l:"Newcastle World · Besiktas £10m bid for Willock rejected", u:"https://www.newcastleworld.com/sport/football/newcastle-united"},
  edersonYahoo:{l:"Yahoo Sports · Ederson signs new Atalanta contract", u:"https://sports.yahoo.com/"},
  yahooSportsviaSportBILDKickerAngeloStiller: {l:"Yahoo Sports (via Sport BILD/Kicker)", u:"https://sports.yahoo.com/articles/newcastle-targets-44-million-bundesliga-120000430.html"},
  skySportsSeanSteur: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13561944/sean-steur-newcastle-sign-midfielder-from-ajax-for-lb23m-on-five-year-deal-after-sandro-tonali-exit"},
  eSPNBazoumanaTour: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49279207/newcastle-sign-winger-bazoumana-toure-hoffenheim"},
  newcastleUnitedofficialEwenJaouen: {l:"Newcastle United official", u:"https://www.newcastleunited.com/en/news/ewen-jaouen-signs-for-newcastle-united"},
  skySportsAnthonyGordon: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13548577/anthony-gordon-transfer-news-barcelona-reach-agreement-with-newcastle-for-england-international-winger"},
  eSPNSandroTonali: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49246543/sandro-tonali-completes-record-transfer-tottenham-newcastle-united"},
  footballFanCastKieranTrippier: {l:"FootballFanCast", u:"https://www.footballfancast.com/newcastle-transfers-signings/"},
  skySportsBrunoGuimares: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11670/13569653/bruno-guimaraes-transfer-news-arsenal-agree-lb75m-fee-for-newcastle-midfielder"},
  skySportsTransferCentreBrunoGuimaraes: {l:"Sky Sports Transfer Centre", u:"https://www.skysports.com/football/live-blog/11678/13025496/newcastle-transfer-news-rumours-and-gossip-live-updates-and-latest-on-deals-signings-loans-and-contracts"},
  skySportsPaperTalkviaTheSunLewisHall: {l:"Sky Sports Paper Talk (via The Sun)", u:"https://www.skysports.com/football/transfer-paper-talk/12709/13568628/bruno-guimaraes-transfer-news-arsenal-closing-in-on-deal-for-newcastle-captain-paper-talk"}};
const LINKMAP = {
  "Sean Steur": ["skyNUFC","nufcOfficial", "skySportsSeanSteur"],
  "Bazoumana Touré": ["skyNUFC","nufcOfficial", "eSPNBazoumanaTour"],
  "Ewen Jaouen": ["romano","nufcOfficial", "newcastleUnitedofficialEwenJaouen"],
  "Kyle Healy": ["romano"],
  "Lukáš Horníček": ["teamtalk","shieldsGaz"],
  "Aladji Bamba": ["bambaSky","bambaNUFC","bambaGFFN"],
  "Anthony Gordon": ["skyNUFC", "skySportsAnthonyGordon"],
  "Sandro Tonali": ["skyNUFC", "eSPNSandroTonali"],
  "Kieran Trippier": ["skyNUFC", "footballFanCastKieranTrippier"],
  "Emil Krafth": ["chronicle", "footballFanCastKieranTrippier"],
  "John Ruddy": ["chronicle"],
  "Matt Targett": ["chronicle", "footballFanCastKieranTrippier"],
  "Harrison Ashby": ["shieldsGaz"],
  "Travis Hernes": ["chronicle"],
  "Joe White": ["shieldsGaz"],
  "Charlie McArthur": ["chronicle"],
  "Matthias Jaissle": ["jaissleTribuna","jaissleYahoo","jaissleGoal"],
  "Giorgio Scalvini": ["tuttoAtalanta","scalviniHT","shieldsGaz"],
  "Abde Ezzalzouli": ["teamtalk","ezzalzouliFP"],
  "Joaquín Oso": ["osoSW"],
  "Bruno Guimarães": ["brunoSun","brunoFT","talksport","skyNUFC", "skySportsBrunoGuimares"],
  "Jacob Murphy": ["murphyFI"],
  "Lewis Hall": ["hallCO", "skySportsPaperTalkviaTheSunLewisHall"],
  "Nick Pope": ["shieldsGaz","leeRyder"],
  "Joe Willock": ["willockNW","shieldsGaz"],
  "Angelo Stiller": ["yahooSportsviaSportBILDKickerAngeloStiller"],
  "Bruno Guimaraes": ["skySportsTransferCentreBrunoGuimaraes"]};
const WL_LINKMAP = {
  "Nick Woltemade":"athletic","Yoane Wissa":"athletic",
  "Dan Burn & Fabian Schär":"teamtalk","Kieran McKenna / Antonio Conte":"khelnow",
};

const PROSE = {
  heroH2: `A coach lands, a captain edges closer to the exit: <em>Jaissle "here we go"</em>, Bruno-to-Arsenal "close to finalising", and a hidden Bamba signing surfaces on the confirmed-deals check`,
  heroLede: `A day on from the chaos of Eddie Howe's departure, Newcastle's picture is sharpening rather than calming. <b>Matthias Jaissle</b> has gone from "advanced discussions" to Fabrizio Romano's <b>"here we go"</b>, with Sky Germany and Goal.com both reporting a contract to 2030 already agreed and Jaissle due in Newcastle on <b>Saturday 1 August</b> to be unveiled - still not a formal club statement, but about as close as reporting gets before one. The <b>Bruno Guimarães</b> saga has moved too: The Sun's Jack Rosser and FootballTransfers both now describe Arsenal as <b>"close to finalising"</b> a deal, fee reports converging somewhere north of £70m against Newcastle's earlier £85m ask. This refresh's FootballTransfers.com confirmed-deals cross-check also surfaced a genuine gap in the previous state of record: <b>Aladji Bamba</b>, a £35.5m defensive midfielder from Monaco, completed his move on 24 July but was never added to the tracked confirmed list - he's in now, alongside five further confirmed exits (Ruddy, Targett, an Ashby loan to Luton, Hernes and two academy departures) that had drifted out of view. Beneath the headline moves, <b>Giorgio Scalvini</b> (CB) remains live but now faces Tottenham as a competing suitor, <b>Joaquín Oso</b> (FB) appears to have swung decisively toward Nottingham Forest, and <b>Ederson</b> of Atalanta has signed a new contract there and is off the board entirely. Outgoing, <b>Joe Willock</b> gained real shape this week - a £10m Besiktas bid was rejected, but his agent has travelled to Istanbul - while <b>Lewis Hall</b> now has Chelsea circling alongside Manchester United.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Ross Wilson</b> (Sporting Director) &amp; David Hopkinson (CEO)</span>
      <span>HEAD COACH: <b>Vacant</b> (Howe departed 30 Jul)</span>
      <span>OWNER: <b>PIF-led consortium</b> (Yasir Al-Rumayyan)</span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">12<small>th</small></div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat gold"><div class="l">Est. Gross Spend</div><div class="v">£120-180<small>m</small></div></div>
    <div class="stat gold"><div class="l">Est. Sales</div><div class="v">£180-260<small>m</small></div></div>
    <div class="stat gold"><div class="l">SCR Cost Cap</div><div class="v">85<small>%</small></div></div>`,
  positionPanel: `
  <!-- ANALYSIS: MODEL + FINANCE -->
  <section id="sec-position">
    <div class="sec-head"><h3>Club Position</h3><span class="num">01</span></div>
    <p class="sec-sub">The lens through which every rumour is weighted: the recruitment philosophy, the balance sheet, the brand, and today's coaching upheaval.</p>

    <div class="cards">
      <!-- THE MODEL -->
      <div class="card">
        <h4>The Model <span class="tag">IN FLUX</span></h4>
        <p>Under sporting director <b>Ross Wilson</b> (ex-Nottingham Forest, appointed after triggering his release clause), Newcastle have pivoted this summer toward a declared <b>Borussia Dortmund-style framework</b>: buy players aged roughly 18-24 in the £20-40m bracket with development and resale ceiling, rather than chase 30-year-old marquee names. Steur, Touré, Jaouen and Healy all fit that mould exactly.</p>
        <div class="quote">The model just lost its author on the pitch: Eddie Howe, the manager who turned this recruitment into results, left the building hours before this report was filed. Whoever replaces him inherits the framework, not necessarily the say over it.</div>
        <p><b>This window's logic:</b> sell the ageing, injury-prone or homesick (Gordon, Tonali, Isak), reinvest in youth and defensive succession (Scalvini, Horníček), and now, urgently, appoint a head coach who can hold the dressing room together while Bruno Guimarães' exit is negotiated.</p>
        <ul>
          <li>Stated needs pre-crisis: a senior goalkeeper, a centre-back, a winger to replace Gordon.</li>
          <li>New, more urgent needs: a head coach, and a contingency plan if the captain leaves.</li>
          <li>Markets: Serie A (Scalvini, Ederson), La Liga (Ezzalzouli, Oso), Ligue 2/France (Jaouen), plus the PIF network for the coaching search.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> treat every incoming link as provisional until a head coach is confirmed - recruitment philosophy is set, but a new voice can still reprioritise targets within weeks.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">TRANSITIONING</span></h4>
        <p>Backed by the <b>PIF-led consortium</b> under chairman Yasir Al-Rumayyan, with PCP Capital Partners and the Reuben Brothers holding minority stakes, Newcastle's ultimate financial ceiling is enormous. In practice, spending has run through disciplined channels: a 2024-25 accounting profit of £34.7m was substantially inflated by one-off related-party asset sales, masking an underlying operating loss estimated near £98.4m, with staff costs running at 72.6% of revenue.</p>
        <ul>
          <li>The <b>Squad Cost Ratio</b> regime replacing PSR closes off the related-party accounting workarounds Newcastle leaned on in 2025.</li>
          <li>This summer's sales (Isak £125m, Tonali £100m, Gordon £69m) generate very large one-off inflows and materially strengthen the SCR position for years, not just this window.</li>
          <li>A £106.5m equity injection from parent company PZ Newco and a new £100m HSBC/First Abu Dhabi Bank facility add further liquidity headroom.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> cash is genuinely available; the constraint this summer is less the balance sheet than boardroom bandwidth, spent instead on an unplanned coaching search.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">Missing Europe and losing a popular manager on the same day tests a project built on momentum; the PIF financial base and network offer a fast way to answer both questions.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>Newcastle enter this window without European football for the first time since 2023, after a 12th-place finish that undercut the momentum of the PIF era's early Champions League run. Losing Howe - widely seen as the best manager Newcastle have had this century - on the eve of pre-season, and simultaneously fighting to keep the club captain, is a serious reputational wobble at exactly the moment a head-coach candidate is weighing up the job.</p>
        <ul>
          <li>The PIF-Al-Ahli relationship is a genuine differentiator: Jaissle's advanced talks lean directly on that network.</li>
          <li>A swift, credible coaching appointment is now the single biggest lever on how this whole window is remembered.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> the same sales (Isak, Tonali, Gordon) that strengthen the balance sheet are the ones cited as reasons Howe grew frustrated and Guimarães wants to leave.</div>
      </div>
      <div class="card">
        <h4>The SCR Cushion <span class="tag">EASED, NOT SOLVED</span></h4>
        <p>With no European football in 2026/27, Newcastle sit under the looser <b>85% Squad Cost Ratio</b> cap rather than the 70% ceiling that applies to clubs in continental competition. Combined with this summer's outgoing fees, that gives real headroom to fund the Scalvini/Horníček defensive rebuild and a marquee winger without immediately pressing the ratio.</p>
        <ul>
          <li>A 3-year net transfer position feeds the SCR calculation, so the Isak/Tonali/Gordon fees compound benefit across multiple windows.</li>
          <li>The looser 85% cap outside Europe is, ironically, the one silver lining of missing out on continental football this season.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: financial headroom and a network no rival can match</h5>
        <ul>
          <li>Real cash from three big sales plus fresh equity and bank facilities give genuine spending power.</li>
          <li>The PIF/Al-Ahli link offers a fast, credible route to a proven, title-winning coach in Jaissle.</li>
          <li>A looser 85% cost cap outside Europe gives more room than most of the Premier League's mid-table.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: a squad and a season built on quicksand</h5>
        <ul>
          <li>Pre-season begins with no head coach, a captain trying to leave, and three key attacking/midfield exits already banked.</li>
          <li>A rushed or wrong coaching appointment could waste the financial advantage entirely.</li>
          <li>Losing Guimarães without a like-for-like replacement lined up leaves a genuine leadership and control-of-midfield gap.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> land the head coach fast - Jaissle is the live favourite - resolve Guimarães's future inside the week as both parties want, bank the Scalvini/Horníček defensive rebuild, and use the well-funded, looser-cap position to land one marquee winger (Ezzalzouli) to actually replace Gordon's output. The financial base is stronger than the mood; the next 10 days will decide which one wins out.
    </div>
  </section>
`,
  confirmedPending: `<b>Horníček's £24.5-30m release-clause move is agreed in principle but not yet formally announced</b> - expect confirmation within days once terms and a medical are finalised. <b>Matthias Jaissle's head-coach appointment</b> is now at Romano "here we go" status with a reported Saturday arrival date, but likewise awaits an official club statement, so it stays in Incoming rather than Confirmed. There is, as of writing, <b>no contract-renewal story to report for Bruno Guimarães</b>; reporting continues to suggest Newcastle expect to sell rather than retain their captain, with Arsenal now described as close to finalising terms.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Wilson network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since Howe's departure broke this afternoon.`,
  outgoingSub: `Three confirmed sales (Gordon, Tonali, plus last deadline day's Isak deal) have already banked close to £300m combined; a fourth, Bruno Guimarães, would fund the head-coach transition and a marquee winger in one move.`,
  pricingBanner: `
      <b>Pricing principle: with sales already funding a rebuild, Newcastle are pragmatic rather than reluctant sellers this summer.</b> Three multipliers push fees up regardless: <b>(1)</b> genuine first-team quality (Guimarães, Willock) draws Premier League and European interest; <b>(2)</b> contract length gives Newcastle leverage on Guimarães specifically (two years plus an option); <b>(3)</b> a competitive market (Man Utd on Hall, Everton on Murphy) supports the asking price. The one softener: out-of-contract-adjacent players (Pope, entering the final stages of his Newcastle career) are priced to move rather than to deter.
    `,
  excludedNote: `<b>Excluded as stale/already-resolved:</b> Ederson of Atalanta (signed a new Atalanta contract after a proposed Man Utd move fell through on medical concerns), Johan Manzambi (signed for Aston Villa, £59.5m - a direct factor in Howe's exit), James Trafford (signing for Leeds United after Newcastle missed out a third time), Víctor Muñoz (signed for Liverpool, £34.5m) and a recycled Aaron Ramsdale report dated to the 2025 window. Any article still framing these as live Newcastle targets is out of date.`,
  spendIn: { v: `£120-180m`, x: `Horníček and Scalvini (≈£55-65m combined) are close to done; a winger (Ezzalzouli) and any central-midfield replacement for Guimarães would push toward the top of the range, contingent on the coaching appointment.` },
  spendOut: { v: `£180-260m`, x: `Gordon (£69m) and Tonali (£100m) are already banked; a Guimarães sale at the reported £75-85m valuation would be the single largest fee of the summer if it completes as expected within days.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: Fabrizio Romano, Sky Sports, The Telegraph (Luke Edwards on Newcastle specifically), talkSPORT (Ben Jacobs). <i>Used for:</i> all confirmed transfers, Howe's exit, and the Bruno Guimarães escalation.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Chronicle Live/Shields Gazette (Lee Ryder and the NUFC beat), The Athletic (Chris Waugh), TeamTalk exclusives (Graeme Bailey on Ezzalzouli), Tutto Atalanta on Scalvini.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk aggregated pieces, CaughtOffside, TheHardTackle, Football365, Khel Now on the coaching search.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: unverified fan sites, recycled aggregator posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> only, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Wilson network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Manzambi, Trafford and Muñoz links fall on this basis post-resolution.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b>: the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window: fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
