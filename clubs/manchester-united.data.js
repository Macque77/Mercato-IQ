/* ============================================================
   MERCATO IQ · CLUB DATA · MANCHESTER UNITED · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce manchester-united.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (30 Jul 2026): first live-format build for this
   club (previously on the legacy single-page template with no
   BRAND-driven colours). Researched fresh via live web search.
   ============================================================ */

const BRAND = {
  club: "Manchester United", mono: "MUN", slug: "manchester-united",
  primary: "#DA020E", primaryBright: "#ff2b1f", primaryDeep: "#8c0007",
  primaryRgb: "218,2,14",
  breadcrumb: ["England","Premier League"]
};
const VOLATILE = {
  verified: "2026-07-29", coach: "Michael Carrick", dof: "Jason Wilcox (Technical Director)",
  europe: "UEFA Champions League (2026/27)", finish: "3rd (2025/26)",
  owner: "Glazer family (majority, ultimate control) with INEOS/Sir Jim Ratcliffe (≈28.9% stake, controls football operations)",
  window: "Opened 15 Jun, runs to 1 Sep 2026 (11pm BST deadline)"
};
const SWEEP = {
  feeds: ["https://www.skysports.com/manchester-united-transfers", "https://www.teamtalk.com/manchester-united", "https://www.manutd.com/en/news", "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Manchester+United/Transfer+News"],
  queries: ["Manchester United transfer news 2026", "Manchester United bid OR medical OR 'here we go'", "Man Utd Wilcox Carrick INEOS transfer"],
  note: "Man Utd-specialist sites (The Peoples Person, United In Focus, Stretty News, Sky Sports' MUFC desk) sit alongside Italian (Gazzetta dello Sport, Football Italia) and Spanish (AS, Fichajes) outlets for the Rashford/Kone, Tchouameni and Mainoo strands; Turkish press (Akşam Spor) covers the Ugarte-to-Galatasaray angle."
};
const REPORT_META = { label: "Updated 03 Aug 2026 – European refresh" , updated: "2026-08-03T12:48:44Z"};

const CONFIRMED_IN = [
  {name:"Andrey Santos", sub:"22 · CDM/CM · Brazil", to:"permanent from Chelsea", fee:"£50m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Confirmed by Sky Sports and the club's own channels in mid-July, Santos is United's first names-on-shirts arrival of the window, signing to 2031 after a season on loan at Strasbourg. Carrick has earmarked him as the base of a rebuilt double pivot alongside Bruno Fernandes, with Chelsea recouping a chunk of the fee they paid Vasco da Gama plus a sell-on. It ends a chase that stretched back through the spring and signals United's willingness to pay market rate for confirmed, ready-made quality rather than another reclamation project."},
  {name:"Youri Tielemans", sub:"29 · CM · Belgium", to:"permanent from Aston Villa", fee:"≈£36m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Announced by the club after Tielemans completed his medical in mid-July, this is a value-conscious pickup of a Premier League-proven passer whose Villa deal had entered its final year. It gives Carrick a ready-made game-manager to sit alongside Santos while Kobbie Mainoo's long-term role is sorted, and closes a saga that only accelerated once the Éderson deal collapsed and Wilcox pivoted the midfield budget toward proven domestic output over an unresolved deal abroad."},
  {name:"Karl Darlow", sub:"35 · GK · England", to:"free transfer from Leeds United", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"A pure squad-balance move rather than a statement of intent: Darlow arrives on a free as experienced cover behind the No.1 spot, filling the gap left by André Onana's loan return to Trabzonspor. Confirmed via the club's own announcement, it carries no fee and minimal footballing risk, but underlines how thin United's goalkeeping department had become before the market opened."},
  {name:"Tynan Thompson", sub:"18 · LW · England", to:"permanent from Tottenham", fee:"£4m (up to £8m with add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Confirmed 21 July per Stretty News and the club, this is a bet on a highly-rated England youth winger who impressed Spurs' academy staff enough that they retained matching and sell-on rights in the deal. Thompson joins the first-team squad under Carrick immediately rather than going straight into the academy, with the add-ons tied to senior appearances and international recognition."},

];

const CONFIRMED_OUT = [
  {name:"Rasmus Højlund", sub:"23 · ST · Denmark", club:"Napoli", pos:"ST", fee:"£38m (plus prior loan fee, total £43.2m)", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Made permanent on 3 June once Napoli sealed Champions League qualification, triggering the obligation-to-buy clause from last season's loan. ESPN reports the funds were earmarked directly against the Éderson pursuit before that deal fell through; United have since redirected the proceeds toward Santos and Tielemans instead."},
  {name:"Jadon Sancho", sub:"26 · LW/RW · England", club:"Released - free agent", pos:"W", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, RELEASED",
   note:"Confirmed released on expiry of his contract in June, closing the book on a £73m signing that never recovered after his loan spells at Chelsea and Aston Villa. Borussia Dortmund have been reported as monitoring a free-transfer reunion, but no club had signed him as of late July."},
  {name:"Casemiro", sub:"34 · CDM · Brazil", club:"Inter Miami CF", pos:"CDM", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Released at the end of his contract and confirmed to Inter Miami on an MLS deal through 2027. A dignified end to a mixed four-year spell; his exit was one of the pieces of business that cleared space and wage budget for the Santos signing."},
  {name:"Tyrell Malacia", sub:"26 · LB · Netherlands", club:"Released - free agent", pos:"LB", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, RELEASED",
   note:"Released as part of the same early-June clear-out as Sancho and Casemiro, having never fully recovered his place after long-term injury and a loan spell at PSV. His departure leaves Luke Shaw as United's only recognised senior left-back, driving the Lewis Hall/Antonee Robinson interest below."},
  {name:"André Onana", sub:"30 · GK · Cameroon", club:"Trabzonspor (season-long loan)", pos:"GK", fee:"Loan, no fee", free:false, status:"done", statusTxt:"DONE, LOAN CONFIRMED",
   note:"Confirmed by the club in July as a second consecutive season-long loan back to Trabzonspor after a difficult first spell there failed to fully restore his stock. United retain his registration and a large chunk of his wages remain covered as part of the agreement, with the goalkeeper position now a live monitoring item for the rest of the window."},
  {name:"Joshua Zirkzee", sub:"25 · ST · Netherlands", club:"Juventus", pos:"ST", fee:"€42.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Confirmed 15 Jul as a straight permanent sale, not the loan-with-option structure earlier reports described. Zirkzee managed just 5 goals in 56 Premier League appearances since his £36.5m move from Bologna and was squeezed for minutes behind Benjamin Šeško and Matheus Cunha; Juventus get a reset opportunity for a player United had already priced for an exit."},
];

const INCOMING = [
  {name:"Iliman Ndiaye", sub:"26 · RW/AM · Senegal", club:"Everton", pos:"RW/AM", report:"29 Jul 2026", src:"Mirror / CaughtOffside (Ahad Shaukat)", tier:2, fee:"£70m ask, United want ≈£50m", truth:60, prob:25, light:'o', trend:'down',
   note:"Everton have set a £70m price on a winger who scored 6 and assisted 3 in 32 Premier League games last season, with three years still on his contract giving them full leverage. United have him on their attacking shortlist as a potential Garnacho-void filler but are reportedly angling closer to £50m rather than meeting the asking price. Al-Hilal have now entered the picture and Ndiaye's camp would reportedly welcome a Saudi offer, which is the single biggest threat to any Premier League move materialising. OBSTACLES: valuation gap, Saudi competition, and Everton having rejected his contract-extension pushback rather than sanctioning a cut-price exit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Manu Kone", sub:"25 · CM/DM · France", club:"AS Roma", pos:"CM/DM", report:"27 Jul 2026", src:"Gazzetta dello Sport / Football Italia (via CaughtOffside)", tier:2, fee:"€60m ask; cash-plus-Rashford structure discussed", truth:50, prob:28, light:'o', trend:'up',
   note:"Italian outlets report United have discussed including Marcus Rashford to bridge the gap on Roma's €60m valuation of Kone, easing the cash outlay while handing Roma a proven Serie A-ready forward. Rashford's reported €11m net salary is the sticking point - United would likely need to keep covering a meaningful share of his wages even in a part-exchange. Reporters stress this is still an idea being floated rather than a formal structure, and separate straight sales for both players would be cleaner for all parties. OBSTACLES: wage-sharing on Rashford, Roma's readiness to let a key midfielder go, and the complexity of tying two deals together this late in the window.", lastSeen:"2026-08-04T19:10:50Z", baseProb:28},
  {name:"Lewis Hall", sub:"23 · LB · England", club:"Newcastle United", pos:"LB", report:"11 Jul 2026", src:"Sky Sports News", tier:1, fee:"Not yet quantified - Newcastle expected to demand a premium", truth:65, prob:32, light:'y', trend:'flat',
   note:"Sky Sports names Hall as a live option to succeed Luke Shaw, whose contract runs down next summer, after Tyrell Malacia's release left United without senior back-up. Hall missed Thomas Tuchel's most recent squad and could be made available, though Newcastle paid Chelsea £28m for him two years ago and are expected to demand significant compensation. Antonee Robinson of Fulham is credited as the alternative option if Newcastle hold firm. OBSTACLES: Newcastle's reluctance to strengthen a direct rival cheaply, and competition for minutes with Patrick Dorgu and Diogo Dalot as cover.", lastSeen:"2026-08-04T19:10:50Z", baseProb:32},
  {name:"Murillo", sub:"23 · CB · Brazil", club:"Nottingham Forest", pos:"CB", report:"28 Feb 2026 (resurfacing)", src:"TeamTalk (unverified social source, awaiting corroboration)", tier:3, fee:"£61m-£70m (€70m-€80m)", truth:35, prob:20, light:'o', trend:'flat',
   note:"United have scouted Murillo extensively as part of the 'Operation Wall' centre-back search reported by Football365, with his left-footed profile fitting Carrick's build-out patterns. TeamTalk's 'locked in talks' framing traces to a single X account with a mixed accuracy record rather than a tier-1 name, and even TeamTalk's own report says it is awaiting further sourcing before treating it as live. A Brazilian outlet has separately corroborated the £61m-plus valuation, and Forest's willingness to sell may hinge on their own league finish. OBSTACLES: single-source framing, Forest's reluctance to sell a key asset mid-season form permitting, and Chelsea also credited with interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Aurélien Tchouaméni", sub:"26 · CDM · France", club:"Real Madrid", pos:"CDM", report:"8 Jul 2026", src:"AS (José Félix Díaz, via Ruben Martín)", tier:3, fee:"~£68m mentioned", truth:30, prob:10, light:'r', trend:'down',
   note:"Spanish reporter José Félix Díaz says United have tabled a five-year contract offer that Tchouaméni 'hasn't rejected', with INEOS said to be structuring salary payments across the deal to close the gap with Madrid pay scales. But Real Madrid boss José Mourinho wants to keep his only senior defensive midfielder and Madrid are reluctant to sell without a ready replacement, with the player contracted until 2028. OBSTACLES: Mourinho's resistance, Madrid's lack of a like-for-like alternative, and the fee gap between what United would pay and what Madrid consider a serious offer.", lastSeen:"2026-08-04T19:10:50Z", baseProb:10},
  {name:"Francisco Conceição", sub:"23 · W · Portugal", club:"Juventus", pos:"W", report:"31 Jul 2026", src:"Nicolo Schira", tier:1, fee:"~£25m", truth:45, prob:15, light:"o", trend:"flat", note:"Schira describes this as enquiry stage only — Manchester United 'have asked for information', not yet a bid.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Aurélien Tchouameni", sub:"Leading midfield target", club:"Real Madrid", pos:"MF", report:"United see Tchouameni as their leading 'premium midfielder' target; a Madrid source says he could still be sold this summer despite recently signing a new contract.", src:"David Ornstein", tier:1, fee:"~£70m", truth:65, prob:50, light:"y", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:50},
  {name:"Carlos Baleba", sub:"Long-standing target, price reduced", club:"Brighton", pos:"MF", report:"Personal terms were agreed last summer and United 'admire the Cameroonian enormously'; talks have quietened but could reactivate closer to deadline day with the price down from £100m to £70m.", src:"David Ornstein", tier:1, fee:"~£70m", truth:55, prob:35, light:"y", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:35}
];

const OUTGOING = [
  {name:"Marcus Rashford", sub:"28 · RW/LW · England", club:"AS Roma (or open market)", pos:"RW/LW", report:"27 Jul 2026", src:"Gazzetta dello Sport / Football Italia", tier:2, fee:"£40m release clause (all clubs bar Man City & Liverpool)", truth:65, prob:42, light:'y', trend:'up',
   note:"Rashford's contract carries a £40m release clause applicable to any club other than Manchester City or Liverpool, and United's stated preference is a European move over a domestic one. The Roma links have hardened through the Kone swap speculation, with Gazzetta and Football Italia both running variations of the story through late July. A straight cash sale remains more likely to actually close than the swap structure given the complexity of bundling two deals, but the direction of travel is clearly toward a European exit before deadline day.", lastSeen:"2026-08-04T19:10:50Z", baseProb:42},
  {name:"Manuel Ugarte", sub:"24 · CDM · Uruguay", club:"Galatasaray", pos:"CDM", report:"29 May 2026", src:"Akşam Spor (Turkey)", tier:3, fee:"≈£24m", truth:30, prob:22, light:'o', trend:'flat',
   note:"Turkish outlet Akşam Spor reports Galatasaray have stepped up their pursuit of a player squeezed further down the pecking order by the Santos and Tielemans arrivals, with Atlético Madrid and Napoli also said to be monitoring. The story has gone quiet since late May with no fresh corroboration from a tier-1 outlet, and United have not been reported as actively shopping him, though a squad short of midfield minutes for Ugarte makes an exit logical business given the new arrivals.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Kobbie Mainoo", sub:"21 · CM · England", club:"Real Madrid (monitoring)", pos:"CM", report:"5 Jul 2026", src:"Fichajes (via TheHardTackle)", tier:3, fee:"Valuation gap - United see him as a 'long-term project'", truth:30, prob:8, light:'r', trend:'down',
   note:"Spanish outlet Fichajes frames Madrid's interest as background scouting rather than an active move, with United regarding Mainoo as central to their rebuild and showing no willingness to entertain anything short of an extraordinary offer. The report itself concedes the transfer 'appears highly unlikely at this stage', and United's public and private stance throughout the window has been to build midfield depth around him rather than sell.", lastSeen:"2026-08-04T19:10:50Z", baseProb:8},
  {name:"Bruno Fernandes", sub:"31 · AM · Portugal", club:"Al-Nassr (collapsed interest)", pos:"AM", report:"27 Jul 2026", src:"The Week / GB News", tier:2, fee:"€65m release clause (overseas only) - moot", truth:40, prob:5, light:'r', trend:'down',
   note:"Cristiano Ronaldo reportedly wanted his compatriot alongside him at Al-Nassr, but Saudi Arabia's PIF has imposed a transfer-spending ban on the club after liabilities passed 800m riyals (≈€187m), killing any realistic move. Fernandes himself rejected an Al-Hilal approach worth £80-100m the previous summer and has repeatedly said he wants to complete unfinished business - a Premier League and Champions League title - before considering a Saudi switch. This one is effectively dead for the current window barring a dramatic financial reversal in Riyadh.", lastSeen:"2026-08-04T19:10:50Z", baseProb:5},
  {name:"Amad Diallo", sub:"Interest circling despite 'not for sale' stance", club:"Various (Tottenham monitoring)", pos:"FW", report:"United have repeatedly stated Amad is not for sale amid Tottenham interest, though some reports suggest the club could now be open to a big offer as their forward overhaul continues.", src:"Fabrizio Romano", tier:2, fee:"Undisclosed", truth:45, prob:15, light:"o", trend:"flat", note:"", lastSeen:"2026-08-04T19:10:50Z", baseProb:15}
];

const RISERS = [
  {ar:"⬆", t:"<b>Marcus Rashford</b>: Roma swap/Kone chatter gaining traction across Italian outlets, release clause makes any European move mechanically simple."},
];

const FALLERS = [
  {ar:"⬇", t:"<b>Iliman Ndiaye</b>: Al-Hilal have entered the race and his camp would welcome a Saudi offer, undercutting United's cut-price plan."},
  {ar:"⬇", t:"<b>Aurélien Tchouaméni</b>: Mourinho publicly wants to keep him and Madrid have no ready replacement lined up."},
  {ar:"⬇", t:"<b>Kobbie Mainoo to Real Madrid</b>: the report behind the story concedes it's background thinking, not an active approach - United won't sell."},
];

const NEW = [
  {ar:"✦", t:"Midfield rebuild banked: Andrey Santos (£50m, Chelsea) and Youri Tielemans (≈£36m, Aston Villa) both completed and announced within a fortnight of each other in mid-July."},
  {ar:"✦", t:"Éderson (Atalanta) collapsed after a delayed medical - complicated by a World Cup call-up - flagged an issue; United withdrew and Éderson signed a new Atalanta deal instead, freeing budget that flowed into Santos and Tielemans."},
  {ar:"✦", t:"Rashford-to-Roma speculation has crystallised into a specific Manu Kone swap idea from the Italian press over the past week, alongside fresh Bruno Fernandes-to-Al-Nassr reporting that confirms that move is now dead."},
  {ar:"✦", t:"Joshua Zirkzee's Juventus exit is now done and official - a straight €42.5m permanent sale rather than the loan-with-option structure earlier reports described."},
];

const IGNORE = [
  {ar:"✕", t:"<b>Danny Welbeck to Man Utd</b>: The Athletic's Laurie Whitwell confirmed (28 Jul) United will not move for the Brighton striker, who remains a Chelsea target only."},
  {ar:"✕", t:"<b>Éderson (Atalanta) to Man Utd</b>: deal is dead - medical failed and the player has signed a new Atalanta contract; treat any recycled version of this link as stale."},
  {ar:"✕", t:"<b>Alejandro Garnacho to Man Utd</b>: he already left for Chelsea in the January 2026 window and has since gone out on loan to Aston Villa - any 'United re-sign Garnacho' story is a recycled misattribution."},
];

const POSITIONS = [
  {p:"Centre-back", w:85, x:"Malacia's release and thin senior cover behind an ageing back line make this United's clearest priority - the 'Operation Wall' search (Van de Ven, Murillo, Lukeba) reflects genuine urgency, but none of the three links has progressed to formal talks."},
  {p:"Left-back", w:65, x:"Luke Shaw is United's only senior option with his contract entering its final season - Lewis Hall and Antonee Robinson are both live names, with the Hall interest carrying the stronger sourcing."},
  {p:"Attacking midfield / right wing", w:55, x:"Garnacho's January exit and Ndiaye/Fernandes/Kone all being scouted point to a squad still short of a genuine wide creative outlet, even after two central-midfield signings."},
  {p:"Central midfield depth", w:35, x:"Largely addressed by Santos and Tielemans, but Mainoo's long-term role and Ugarte's future both remain unresolved threads that could still move before deadline day."},
  {p:"Striker depth", w:30, x:"Not an active buying priority with Šeško and Cunha established, but Zirkzee's likely exit (loan or permanent) would leave the position needing fresh cover if Rashford also departs."},
];

const WATCHLIST = [
  {name:"Antonee Robinson", club:"Fulham", pos:"LB", dir:"in", age:"~3 wks", tier:2, note:"Named by Sky Sports as United's fallback left-back option if Newcastle hold firm on Lewis Hall; uncertainty over his Fulham future under a new manager adds a plausible route out."},
  {name:"Micky Van de Ven", club:"Tottenham", pos:"CB", dir:"in", age:"~3 months", tier:3, note:"One of the three 'Operation Wall' centre-back names from Football365's original report; no sign of movement toward an actual approach as of late July."},
  {name:"Castello Lukeba", club:"RB Leipzig", pos:"CB", dir:"in", age:"~3 months", tier:3, note:"The third 'Operation Wall' name, valued for his ball-carrying out of the back; remains background scouting rather than an active pursuit."},
  {name:"Altay Bayındır", club:"Manchester United (internal)", pos:"GK", dir:"out", age:"~4 wks", tier:3, note:"With Karl Darlow signed as senior cover and Onana out on loan, Bayındır's own long-term standing as back-up No.1 is being reassessed internally - no formal exit links yet."},
  {name:"Facundo Pellistri", club:"Manchester United (fringe)", pos:"RW", dir:"out", age:"ongoing", tier:3, note:"Long a peripheral figure in the first-team picture; conflicting reports over whether a permanent departure has already been finalised mean this needs firming up before treating as live."},
];

const HUB = {
  skyMUFC: {l:"Sky Sports · Man Utd Transfers", u:"https://www.skysports.com/manchester-united-transfers"},
  athleticWhitwell: {l:"The Athletic · Laurie Whitwell", u:"https://x.com/lauriewhitwell"},
  manUtdNews: {l:"ManUtd.com · Official News", u:"https://www.manutd.com/en/news"},
  teamtalkMUFC: {l:"TeamTalk · Manchester United", u:"https://www.teamtalk.com/manchester-united"},
  football365MUFC: {l:"Football365 · Man Utd", u:"https://www.football365.com/club/manchester-united"},
  caughtoffside: {l:"CaughtOffside · Man Utd", u:"https://www.caughtoffside.com/category/premier-league/manchester-united/"},
  peoplesPerson: {l:"The Peoples Person", u:"https://thepeoplesperson.com/"},
  sportsmoleMUFC: {l:"Sports Mole · Man Utd", u:"https://www.sportsmole.co.uk/football/man-utd/"},
  gazzetta: {l:"Gazzetta dello Sport", u:"https://www.gazzetta.it/"},
  asTchouameni: {l:"AS (José Félix Díaz)", u:"https://as.com/"},
  hardtackle: {l:"TheHardTackle", u:"https://thehardtackle.com/"},
  espnMUFC: {l:"ESPN · Man Utd", u:"https://www.espn.com/soccer/team/_/id/360/manchester-united"},
  bbcMUFC: {l:"BBC Sport · Manchester United", u:"https://www.bbc.co.uk/sport/football/teams/manchester-united"},
  unitedInFocus: {l:"United In Focus", u:"https://www.unitedinfocus.com/"},
  strettyNews: {l:"Stretty News", u:"https://strettynews.com/"},
  nicoloSchiraFranciscoConceio: {l:"Nicolo Schira", u:"https://x.com/NicoSchira/status/2082963665632833569"},
  tEAMtalkviaOrnsteinAurlienTchouameni: {l:"TEAMtalk (via Ornstein)", u:"https://www.teamtalk.com/manchester-united/man-utd-transfer-news-aurelien-tchouameni-carlos-baeba-kone-david-ornstein"},
  footballTransferscomFranciscoConceio: {l:"FootballTransfers.com", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/07/man-utd-transfer-news-francisco-conceicao-juventus-summer-2026-bryan-mbeumo-amad-diallo"},
  caughtOffsideviaRomanoAmadDiallo: {l:"CaughtOffside (via Romano)", u:"https://www.caughtoffside.com/2026/07/19/romano-confirms-not-for-sale-stance-man-united/"},
  tEAMtalkYouriTielemans: {l:"TEAMtalk", u:"https://www.teamtalk.com/manchester-united/every-completed-man-utd-transfer-summer-2026-signings-exits-loans"}};

const LINKMAP = {
  "Andrey Santos": ["skyMUFC","manUtdNews", "tEAMtalkYouriTielemans"],
  "Youri Tielemans": ["manUtdNews","teamtalkMUFC", "tEAMtalkYouriTielemans"],
  "Karl Darlow": ["manUtdNews", "tEAMtalkYouriTielemans"],
  "Tynan Thompson": ["manUtdNews","strettyNews", "tEAMtalkYouriTielemans"],
  "Rasmus Højlund": ["espnMUFC","manUtdNews", "tEAMtalkYouriTielemans"],
  "Jadon Sancho": ["espnMUFC", "tEAMtalkYouriTielemans"],
  "Casemiro": ["espnMUFC", "tEAMtalkYouriTielemans"],
  "Tyrell Malacia": ["espnMUFC", "tEAMtalkYouriTielemans"],
  "André Onana": ["manUtdNews", "tEAMtalkYouriTielemans"],
  "Mateus Fernandes": ["skyMUFC"],
  "Iliman Ndiaye": ["caughtoffside"],
  "Manu Kone": ["gazzetta","caughtoffside"],
  "Lewis Hall": ["skyMUFC"],
  "Murillo": ["teamtalkMUFC"],
  "Aurélien Tchouaméni": ["asTchouameni"],
  "Marcus Rashford": ["gazzetta","caughtoffside"],
  "Joshua Zirkzee": ["caughtoffside"],
  "Manuel Ugarte": ["unitedInFocus"],
  "Kobbie Mainoo": ["hardtackle"],
  "Bruno Fernandes": ["bbcMUFC"],
  "Francisco Conceição": ["nicoloSchiraFranciscoConceio", "footballTransferscomFranciscoConceio"],
  "Aurélien Tchouameni": ["tEAMtalkviaOrnsteinAurlienTchouameni"],
  "Carlos Baleba": ["tEAMtalkviaOrnsteinAurlienTchouameni"],
  "Amad Diallo": ["caughtOffsideviaRomanoAmadDiallo"]};

const WL_LINKMAP = {
  "Antonee Robinson": "skyMUFC",
  "Micky Van de Ven": "football365MUFC",
  "Castello Lukeba": "football365MUFC",
  "Altay Bayındır": "peoplesPerson",
  "Facundo Pellistri": "unitedInFocus",
};

const PROSE = {
  heroH2: `Carrick's rebuild trades <em>reclamation projects</em> for proven output - but the window's biggest decision is still Rashford's`,
  heroLede: `Michael Carrick's first full summer at the helm has already delivered two clean, sensible pieces of business - <b>Andrey Santos</b> (£50m) and <b>Youri Tielemans</b> (≈£36m) - after the club's initial midfield priority, Atalanta's Éderson, collapsed on a late medical. With <b>Højlund, Sancho, Casemiro and Malacia</b> all gone and <b>Onana</b> loaned back to Trabzonspor, the squad has been genuinely reshaped rather than just topped up. The live story now is at the top of the pitch: a £40m release clause has put <b>Marcus Rashford</b> on the market for anyone bar Manchester City or Liverpool, Italian outlets are floating him as makeweight in a Manu Kone deal, and Joshua Zirkzee's Juventus loan talks have gone from blocked to advanced within days.`,
  metaRow: `<span>HEAD COACH: <b>Michael Carrick</b></span> <span>TECHNICAL DIRECTOR: <b>Jason Wilcox</b></span> <span>OWNER: <b>Glazer family (majority) / INEOS-Ratcliffe (football ops)</b></span> <span>WINDOW: <b>15 Jun – 1 Sep 2026</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">3rd</div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">Champions League</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">£90m (4 deals)</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">£38m + 3 free releases</div></div><div class="stat"><div class="l">Net Spend (so far)</div><div class="v">≈+£52m</div></div>`,
  positionPanel: `<section id="sec-position">
    <h3>Club Position</h3>
    <div class="cards">
      <div class="card">
        <h4>The Model</h4>
        <p>Carrick's appointment as permanent manager in May, on a contract to 2028, ended eighteen months of managerial churn and gave Wilcox's recruitment operation something it had lacked since the INEOS takeover: a settled, clearly-briefed head coach to build a squad around. The early business reflects that clarity. Rather than chase marquee reclamation signings, United went for two proven, ready-made Premier League/top-five-league contributors in Santos and Tielemans, both signed on value terms once the club's original midfield target - Atalanta's Éderson - fell through on a medical complicated by a late World Cup call-up. That willingness to walk away from an agreed deal rather than gamble on fitness is itself a signal of a more disciplined recruitment culture than the one that produced Sancho, Antony and the early Zirkzee years.</p>
        <p>The squad has also been genuinely cut down, not just topped up. Højlund's loan-to-permanent exit to Napoli, the releases of Sancho, Casemiro and Malacia, and Onana's second loan season at Trabzonspor collectively remove a significant wage burden and several unresolved reclamation projects in one summer. What's left is a leaner group with clearer roles - Šeško and Cunha established up front, Bruno Fernandes as captain and creative fulcrum, and a midfield now anchored by two genuine Premier League-tested names rather than promise alone.</p>
      </div>
      <div class="card">
        <h4>Financial Position</h4>
        <p>United's finances remain shaped by heavy historic debt service and a wage bill still working through the post-Sancho, post-Antony hangover, even as matchday and commercial revenue stay among the world's largest. The club's public £150m-plus summer transfer allocation, spread across midfield, a left-back and a centre-back, is real but not limitless, and every confirmed deal this window has come with an outgoing counterpart funding it in some way - Højlund's Napoli fee was explicitly earmarked against Éderson before that money was redirected to Santos and Tielemans instead. The Rashford release clause (£40m, any club bar City and Liverpool) and the mooted Kone swap both point to a club still trying to convert a big, expensive squad member into value rather than simply banking a cash windfall - wages, not just fee, remain the binding constraint on outgoing deals.</p>
      </div>
    </div>
  </section>
  <section id="sec-tradeoff">
    <h3>Reputation &amp; The Cost-Cap Trade-Off</h3>
    <div class="cards">
      <div class="card">
        <h4>Reputation</h4>
        <p>United's transfer reputation has been rebuilt around discipline rather than spectacle this window. Walking away from Éderson after a medical red flag, rather than push the deal through under pressure to fill a perceived need, is the clearest evidence yet that Wilcox's department is prioritising due diligence over headline announcements - a marked departure from the Sancho and Antony-era pattern of paying full price for unresolved risk.</p>
      </div>
      <div class="card">
        <h4>The Tension</h4>
        <p>The flip side is that this discipline slows things down at exactly the point supporters want to see statement signings. Centre-back - arguably the squad's single biggest structural weakness - remains at the "extensive scouting, no formal talks" stage on all three Operation Wall names, and the club's highest-profile outgoing story (Rashford) is entangled in a swap-deal idea that even the Italian outlets reporting it describe as conceptual rather than developed.</p>
      </div>
    </div>
    <div class="riskgrid">
      <div class="risk-r"><b>Risk</b><p>A deadline-day scramble at centre-back if none of Van de Ven, Murillo or Lukeba progresses beyond scouting, leaving the same defensive fragility that contributed to a third-place finish rather than a title challenge.</p></div>
      <div class="risk-d"><b>Reward</b><p>If the Rashford-Kone swap or a straightforward Rashford sale lands, United bank significant wage relief and a ready Serie A-tested midfielder without having to find the full cash fee up front - a template the club could reuse for further squad-balancing business before 1 September.</p></div>
    </div>
    <div class="verdict"><b>Verdict:</b> this is a window defined by addition through subtraction so far - two sensible midfield signings, four genuine squad departures, and a manager and technical director now aligned on process. The remaining six weeks hinge on whether that same discipline can still produce a centre-back and resolve Rashford's future before deadline day, rather than default into panic business once the calendar starts to bite.</div>
  </section>`,
  confirmedPending: `Nothing is currently agreed-but-unannounced at boardroom level - all four incoming deals (Santos, Tielemans, Darlow, Thompson) and all five outgoing pieces of business (Højlund, Sancho, Casemiro, Malacia, Onana) have been formally confirmed by the club. The next formal announcement watch is on the goalkeeper position, where Bayındır's long-term standing is under internal review following Darlow's arrival and Onana's loan.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is, weighted by source tier, corroboration across outlets, and recency. <b style="colour:var(--gold)">Odds</b> = how likely the move actually completes, weighted by fee realism, United's stated priorities, and the selling club's willingness. A story can be highly credible (a reporter genuinely has the information) while still being unlikely to close (the selling club won't move on price) - treat the two numbers as answering different questions.`,
  outgoingSub: `Rashford's release clause and the Zirkzee loan talks are the two outgoing deals doing the most work - both would free wages that Carrick's recruitment team can redeploy into the still-unresolved centre-back search before the window shuts.`,
  pricingBanner: `United's pricing logic this summer has been to accept discounted fees on ageing or unsettled assets (Højlund's permanent fee reflected his loan form more than his original £72m price tag; Ugarte's mooted £24m is a fraction of what he cost) in exchange for wage relief and squad clarity, while holding a hard line on Bruno Fernandes and Kobbie Mainoo, both regarded internally as building blocks rather than trading chips.`,
  excludedNote: `<b>Excluded as stale/already-resolved:</b> Danny Welbeck (Athletic's Whitwell confirmed 28 Jul that United will not move - Chelsea-only story now), Éderson/Atalanta (medical failed, player has re-signed with Atalanta), and Alejandro Garnacho (already sold to Chelsea in January 2026, now out on loan at Aston Villa - any recycled "United re-sign Garnacho" story is a misattribution).`,
  spendIn: { v: `£90m committed`, x: `Santos (£50m) and Tielemans (≈£36m) as permanent fees, plus Thompson's £4m-£8m package; Darlow arrived on a free.` },
  spendOut: { v: `£38m banked + 3 free releases`, x: `Højlund's Napoli fee is the only cash sale so far; Sancho, Casemiro and Malacia were all released without a fee, and Onana's Trabzonspor move is a loan rather than a sale.` },
  methodLegend: `<div class="col">
    <h5>Source Tiers</h5>
    <p><b>Tier 1</b> - Sky Sports News, The Athletic (Laurie Whitwell), BBC Sport, ManUtd.com official announcements. Treat as effectively confirmed once carried.</p>
    <p><b>Tier 2</b> - Major nationals and Man Utd-focused specialists (Mirror, The Peoples Person, established Italian outlets like Gazzetta dello Sport). Reliable but occasionally get specifics (fees, timelines) wrong.</p>
    <p><b>Tier 3</b> - Foreign-language outlets relayed through secondary channels (AS via a YouTube round-up, Fichajes via TheHardTackle), or domestic aggregators citing a single unverified social account. Directionally useful, treat specifics with caution.</p>
    <p><b>Tier 4</b> - Weak/aggregator-only chains with no identifiable primary source. Not used as a standalone basis for any entry above.</p>
  </div>
  <div class="col">
    <h5>Weighting Model</h5>
    <p><b>True?</b> starts from source tier, then adjusts up for multi-outlet corroboration and down for staleness (a February story resurfacing in July is marked down even if the underlying interest is real).</p>
    <p><b>Odds</b> starts from fee/valuation realism and the selling club's public stance, then adjusts for competing suitors and how close the reported story is to a formal bid, medical, or contract stage rather than early-stage scouting.</p>
  </div>`
};
