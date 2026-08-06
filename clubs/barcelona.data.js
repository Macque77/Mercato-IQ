/* ============================================================
   MERCATO IQ · CLUB DATA · FC BARCELONA · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Barcelona", mono: "FB", slug: "barcelona",
  primary: "#A50044", primaryBright: "#ED1C5A", primaryDeep: "#6B002B",
  primaryRgb: "165,0,68",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Hansi Flick (contract runs through 2027/28 after extension agreed May 2026)",
  dof: "Deco (Sporting Director)",
  europe: "UEFA Champions League (2026/27) - as champions",
  finish: "1st La Liga (2025/26), 94pts - champions",
  owner: "Member-owned (FC Barcelona), Joan Laporta President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.barcablaugranes.com/", "https://barcauniversal.com/"],
  queries: ["FC Barcelona transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · FC Barcelona - corrected from earlier draft"
};

const CONFIRMED_IN = [
  {name:"Anthony Gordon", sub:"25 · RW/LW · England", to:"permanent from Newcastle United", fee:"~£69m + £8.6m add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Five-year deal - Barcelona's marquee summer signing, adding pace and directness out wide."},
  {name:"Karim Adeyemi", sub:"24 · FW · Germany", to:"permanent from Borussia Dortmund", fee:"~€29m (incl. add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Five-year contract for the left-footed forward, signed off by Hansi Flick."},
  {name:"Jesse Bisiwu", sub:"18 · W · Belgium", to:"permanent from Club Brugge", fee:"~€8.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Belgian youth international joining primarily for the Barça Atlètic pathway."},
  {name:"João Cancelo", sub:"32 · RB/LB · Portugal", to:"loan (with obligation to buy tied to objectives) from Al-Hilal", fee:"~€10m obligation", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completed in January 2026 and already integrated; flagged here for completeness rather than as new summer business."}
];

const CONFIRMED_OUT = [
  {name:"Robert Lewandowski", sub:"37 · ST · Poland", club:"Chicago Fire (MLS)", pos:"ST", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"CORRECTED 03 Aug: an earlier version of this record wrongly stated Lewandowski had signed a Barcelona contract extension. In fact he departed as a free agent for Chicago Fire on a deal through 2028, ending his Barça spell."},
  {name:"Ansu Fati", sub:"23 · W · Spain", club:"Monaco", pos:"W", fee:"€11m (permanent option exercised)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Monaco convert last season's loan into a permanent transfer."},
  {name:"Iñaki Peña", sub:"27 · GK · Spain", club:"Panathinaikos", pos:"GK", fee:"~€3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Backup goalkeeper departs for regular first-team football in Greece."},
  {name:"Marc-André ter Stegen", sub:"34 · GK · Germany", club:"free to Ajax", pos:"GK", fee:"Free (Ajax covers a share of salary)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Long-time Barcelona No.1 leaves as his contract situation resolves; Romano reported him already travelling to join Ajax."},
  {name:"Marcus Rashford", sub:"Forward, English, 28", club:"Manchester United", pos:"LW", fee:"Loan expired — returned to parent club", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan from Manchester United concluded after 14 goals in all competitions in 2025-26; a permanent deal was pursued by Barcelona but reported to have fallen through, and Rashford is back at Old Trafford."},
  {name:"Marc-Andre ter Stegen", sub:"34 · Germany · GK", club:"Ajax", pos:"GK", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed by both clubs: a season-long loan until 30 June 2027, with ESPN reporting there is no option to buy and both clubs sharing a percentage of his wages. His second loan spell under Michel after Girona, and his Barcelona contract runs to 2028."}
];

const INCOMING = [
  {name:"Julián Álvarez", sub:"Striker, Argentine, 26", club:"Atlético Madrid", pos:"ST", report:"Barcelona are pursuing Álvarez as their primary striker target following Lewandowski's exit, with the player publicly stating his desire to join; Atlético are resisting and Barça's reported offers (~€100m) remain below Atlético's demands.", src:"Multiple (Goal.com, Yahoo Sports, La Gaceta)", tier:2, fee:"", truth:70, prob:35, light:"y", trend:"flat", note:"Álvarez's representatives were reported to be meeting with Barcelona to plan a joint strategy, and Barça were said to be preparing a new bid; deal complicated by Atlético's refusal to sell to a domestic rival and the window closing 1 Sept.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Eli Junior Kroupi", sub:"Forward, French, 20", club:"Bournemouth", pos:"ST", report:"Barcelona have identified the Bournemouth forward as a backup/Plan B striker target amid their pursuit of a marquee No.9, though he also draws interest from Manchester City, PSG, Arsenal and Tottenham.", src:"Multiple aggregated reports", tier:3, fee:"", truth:40, prob:15, light:"o", trend:"flat", note:"Reports indicate an injury setback has complicated this route, and heavy competition from richer Premier League/PSG suitors makes a Barça move unlikely without Álvarez falling through entirely.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Julian Alvarez", sub:"26 · Argentina · ST", club:"Atletico Madrid", pos:"Striker", report:"Barcelona have not given up on the Argentina striker, who remains the priority for the number nine slot, but Romano says the club have quietly opened contact with alternative attacking targets in case the pursuit collapses.", src:"Fabrizio Romano", tier:1, fee:"Undisclosed", truth:70, prob:33, light:"y", trend:"up", note:"Atletico have shown no willingness to sell and Barcelona's wage room is the obvious obstacle. The activation of back-up options suggests the club themselves rate this as difficult.", lastSeen:"2026-08-06T10:49:40Z", baseProb:33},
  {name:"Rodri", sub:"30 · Spain · DM", club:"Manchester City", pos:"Defensive midfielder", report:"Barcelona are among the clubs monitoring the City midfielder. Romano reports that when formal club-to-club talks opened, City deliberately slowed negotiations in the belief that more bidders would join the race.", src:"Fabrizio Romano", tier:1, fee:"Undisclosed", truth:62, prob:25, light:"o", trend:"flat", note:"Treat with caution. Romano frames Barcelona as interested rather than negotiating, and a fee at that level looks awkward against Barcelona's registration position.", lastSeen:"2026-08-06T10:49:40Z", baseProb:25}
];

const OUTGOING = [
  {name:"Ferran Torres", sub:"26 · Spain · FW", club:"Paris Saint-Germain", pos:"FW", report:"Barcelona have told PSG that Ferran Torres is not for sale, according to Mundo Deportivo, despite reports the forward would welcome a move to Paris. The club intend to open renewal talks in September without a significant salary rise, holding firm on their stance.", src:"Mundo Deportivo", tier:2, fee:"Undisclosed", truth:70, prob:20, light:"o", trend:"up", note:"Weak sourcing on the player's side of the story: the Barcelona stance is well briefed, the claim that Ferran is pushing for Paris is not backed by any tier-one reporter yet.", lastSeen:"2026-08-06T08:45:12Z", baseProb:20},
  {name:"Joao Cancelo", sub:"32 · Portugal · RB", club:"Al Hilal", pos:"RB", report:"Mundo Deportivo report that the stand-off between Barcelona and Cancelo has been resolved and that Al Hilal are negotiating with the club, with the Saudi side working towards an offer of around 10m euros. Follow-up Catalan reporting on 3 August described the exit as very close.", src:"Mundo Deportivo", tier:2, fee:"Around 10m euros", truth:75, prob:65, light:"g", trend:"flat", note:"Single-market sourcing so far, with no tier-one confirmation of terms. Saudi deals of this type have a habit of stalling on wages rather than fee.", lastSeen:"2026-08-06T08:45:12Z", baseProb:65}
];

const RISERS = [
  {ar:"⬆", t:"<b>Anthony Gordon</b>: marquee wing signing from Newcastle, now official and integrated into Flick's pre-season plans."},
  {ar:"⬆", t:"<b>Karim Adeyemi</b>: five-year deal from Dortmund adds directness to the front line."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Ferran Torres exit rumours</b>: Barcelona are publicly maintaining he is not for sale, cooling the Real Madrid/PSG links."}
];

const NEW = [
  {ar:"✦", t:"Gordon and Adeyemi arrive as the two headline attacking signings of the champions' summer, alongside Lewandowski's surprise free departure to Chicago Fire."},
  {ar:"✦", t:"Ferran Torres remains at the club for now, with Barcelona publicly resisting Real Madrid/PSG interest as the window enters its final month."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Robert Lewandowski 'contract extension', 'done deal'</b>: this appeared in an earlier version of this record and was wrong - he in fact left as a free agent for Chicago Fire."},
  {ar:"✕", t:"<b>Ferran Torres to Real Madrid, €55m 'done deal'</b>: also fabricated in an earlier version of this record; Torres has not left Barcelona and the club says he is not for sale."},
  {ar:"✕", t:"<b>Sergiño Dest permanent return / Vinícius Gabias / Ederson to Barcelona</b>: unverifiable entries from an earlier draft with no corroborating real reporting found; removed rather than carried forward unverified."}
];

const POSITIONS = [
  {p:"Centre-forward depth", w:45, x:"Lewandowski's exit leaves a senior No.9 vacancy behind the front line Flick already has in Gordon and Adeyemi."}
];

const WATCHLIST = [
  {name:"Ferran Torres", club:"Real Madrid / PSG (interest)", pos:"RW/LW", dir:"out", age:"~1 day", tier:2, note:"Barcelona's public stance remains 'not for sale' as of 3 Aug 2026; genuinely live background interest from two major clubs."}
];

const HUB = {
  "barcablaugranes-3aug": {l:"Barca Blaugranes - Ferran Torres not for sale, Cancelo close (3 Aug 2026)", u:"https://www.barcablaugranes.com/barcelona-news/128091/fc-barcelona-news-3-august-2026-ferran-torres-not-for-sale-joao-cancelo-signing-very-close"},
  "teamtalk-fcbdone": {l:"TeamTalk - every completed Barcelona transfer, summer 2026", u:"https://www.teamtalk.com/news/every-completed-barcelona-transfer-summer-2026-signings-sales-loans"},
  "espn-lewandowski": {l:"ESPN - Chicago Fire complete signing of Robert Lewandowski", u:"https://www.espn.com/soccer/story/_/id/49218680/chicago-fire-complete-signing-robert-lewandowski"},
  "beinsports-cancelo": {l:"beIN Sports - Barcelona make Cancelo signing official", u:"https://www.beinsports.com/en-us/soccer/la-liga/articles/welcome-home-barcelona-makes-the-signing-of-joao-cancelo-official-2026-01-13"},
  fabrizioRomanoviaFootballTransfersMarcAndrterStegen: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-bruno-guimaraes-enzo-fernandez-mykhailo-mudryk"},
  goalcomJulinlvarez: {l:"Goal.com", u:"https://www.goal.com/en-in/news/a-new-move-from-alvarez-s-agents-to-seal-his-transfer-to-barcelona/bltef0b96c9a8e72a05"},
  aggregatednewsreportsEliJuniorKroupi: {l:"Aggregated news reports", u:"https://www.bing.com/news/search?q=Eli+Junior+Kroupi+Barcelona+fichaje"},
  mSNForbesFerranTorres: {l:"MSN / Forbes", u:"https://www.msn.com/en-ca/sports/soccer/arsenal-and-tottenham-target-ferran-torres-speaks-out-on-uncertain-barcelona-future/ar-AA29mRzt?ocid=BingNewsVerp"},
  aPNewsGoalcomKarimAdeyemi: {l:"AP News / Goal.com", u:"https://www.goal.com/"},
  beINSportsRobertLewandowski: {l:"beIN Sports", u:"https://www.beinsports.com/"},
  yahooSportsMarcusRashford: {l:"Yahoo Sports", u:"https://sports.yahoo.com/"},
  fabrizioRomanoviaYahooSportsJulianAlvarez: {l:"Fabrizio Romano (via Yahoo Sports)", u:"https://sports.yahoo.com/articles/barcelona-sporting-director-set-meet-060000565.html"},
  mundoDeportivoviaBarcaBlaugranesJoaoCancelo: {l:"Mundo Deportivo (via Barca Blaugranes)", u:"https://www.barcablaugranes.com/barcelona-news/128091/fc-barcelona-news-3-august-2026-ferran-torres-not-for-sale-joao-cancelo-signing-very-close"},
  mundoDeportivoviaBarcaBlaugranesFerranTorres: {l:"Mundo Deportivo (via Barca Blaugranes)", u:"https://www.barcablaugranes.com/barcelona-news/128222/fc-barcelona-news-5-august-2026-marc-andre-ter-stegen-joins-ajax-on-loan-barca-not-giving-up-on-julian-alvarez"},
  fCBarcelonaviaBarcaBlaugranesJesseBisiwu: {l:"FC Barcelona (via Barca Blaugranes)", u:"https://www.barcablaugranes.com/barcelona-news/127966/fc-barcelona-news-1-august-2026-barca-announce-jesse-bisiwu-signing-hamza-abdelkarim-scores-twice"},
  fCBarcelonaofficialMarcAndreterStegen: {l:"FC Barcelona (official)", u:"https://www.fcbarcelona.com/en/news/4550198/ter-stegen-loaned-to-ajax"},
  fabrizioRomanoXKarimAdeyemi: {l:"Fabrizio Romano (X)", u:"https://x.com/FabrizioRomano"}};

const LINKMAP = {
  "Anthony Gordon": ["teamtalk-fcbdone"],
  "Karim Adeyemi": ["teamtalk-fcbdone", "aPNewsGoalcomKarimAdeyemi", "fabrizioRomanoXKarimAdeyemi"],
  "Jesse Bisiwu": ["teamtalk-fcbdone", "fCBarcelonaviaBarcaBlaugranesJesseBisiwu"],
  "João Cancelo": ["beinsports-cancelo"],
  "Robert Lewandowski": ["espn-lewandowski", "beINSportsRobertLewandowski"],
  "Ansu Fati": ["teamtalk-fcbdone"],
  "Iñaki Peña": ["teamtalk-fcbdone"],
  "Ferran Torres": ["barcablaugranes-3aug", "mSNForbesFerranTorres", "mundoDeportivoviaBarcaBlaugranesFerranTorres"],
  "Marc-André ter Stegen": ["fabrizioRomanoviaFootballTransfersMarcAndrterStegen"],
  "Julián Álvarez": ["goalcomJulinlvarez"],
  "Eli Junior Kroupi": ["aggregatednewsreportsEliJuniorKroupi"],
  "Marcus Rashford": ["yahooSportsMarcusRashford"],
  "Julian Alvarez": ["fabrizioRomanoviaYahooSportsJulianAlvarez", "fabrizioRomanoXKarimAdeyemi"],
  "Joao Cancelo": ["mundoDeportivoviaBarcaBlaugranesJoaoCancelo"],
  "Marc-Andre ter Stegen": ["fCBarcelonaofficialMarcAndreterStegen"],
  "Rodri": ["fabrizioRomanoXKarimAdeyemi"]};
const WL_LINKMAP = {
  "Ferran Torres": ["barcablaugranes-3aug"]
};

const PROSE = {
  heroH2: `Champions rebuild the wings, lose Lewandowski to MLS`,
  heroLede: `Barcelona's title-winning summer has brought two genuine attacking signings in <b>Anthony Gordon</b> and <b>Karim Adeyemi</b>, while <b>Robert Lewandowski</b>'s Barça career ended not with a new contract but with a free move to Chicago Fire. The live thread heading into August is whether <b>Ferran Torres</b> stays - the club says yes, Real Madrid and PSG are said to disagree.`,
  metaRow: `<span>COACH: <b>Hansi Flick</b></span> <span>DIRECTOR: <b>Deco</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">4</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Ferran Torres is the one live outgoing storyline - everything else this window is done and official.`,
  pricingBanner: ``,
  excludedNote: `Several fabricated or unverifiable entries from an earlier draft of this page (Lewandowski "extension", Ferran Torres "sale", Dest/Gabias/Ederson rumours) have been corrected or removed - see Ignored below.`,
  spendIn: { v: `~£85m committed`, x: `Gordon, Adeyemi, Bisiwu` },
  spendOut: { v: `~€14m received`, x: `Ansu Fati, Peña fees; Lewandowski left for free` },
  methodLegend: ``
};