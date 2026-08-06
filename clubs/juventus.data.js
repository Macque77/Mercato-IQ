/* ============================================================
   MERCATO IQ · CLUB DATA · JUVENTUS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Juventus",
  mono: "JUV",
  slug: "juventus",
  primary: "#000000",
  primaryBright: "#333333",
  primaryDeep: "#000000",
  primaryRgb: "0,0,0",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Luciano Spalletti (since 30 Oct 2025, after Igor Tudor's sacking)",
  dof: "Marco Ottolini (Sporting Director, since Jun 2026, after Cristiano Giuntoli departed for Atalanta)",
  europe: "UEFA Europa League (2026/27) - via Coppa Italia route (Inter won the cup but qualified for UCL as league champions, passing the Europa spot down)",
  finish: "6th Serie A (2025/26)",
  owner: "Exor (John Elkann, Chairman)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.juvefc.com/", "https://football-italia.net/category/teams/juventus/"],
  queries: ["Juventus transfer news 2026", "Juventus Carnevali Alajbegovic Vlahovic", "Juventus Kolo Muani Kicker Sky Italia"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Juventus"
};

const CONFIRMED_IN = [
  {name:"Joshua Zirkzee", sub:"23 · ST · Netherlands", to:"permanent from Manchester United", fee:"€42.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 15 Jul. The Dutch striker joins Juventus after one season at Old Trafford, bringing pace and technical ability to the frontline."},
  {name:"Paulo Dybala", sub:"30 · CAM/ST · Argentina", to:"free transfer from AS Roma", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired 30 June and Dybala completes an emotional return to Turin as a free agent, five years after his 2021 exit. Multiple Serie A outlets confirm the deal is signed and announced."},
  {name:"Randal Kolo Muani", sub:"27 · ST · France", to:"loan-to-buy from Paris Saint-Germain", fee:"Loan fee + ~€43-50m mandatory obligation", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed after a protracted saga dating back to his January 2025 loan spell. Structured as a loan with mandatory purchase, spreading the cost across fiscal years, and gives Spalletti a proven, mobile centre-forward option."},
  {name:"Jeff Ekhator", sub:"19 · ST · Italy", to:"permanent from Genoa", fee:"€16m plus bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 Jul. The teenage striker, who had recently made his senior Italy debut, joins from Genoa as a long-term development signing for the Next Gen/first-team pathway."},
  {name:"Kerim Alajbegovic", sub:"AM, Bosnia, 20", club:"Bayer Leverkusen", pos:"CAM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Chose Juventus over a competing offer from Chelsea; director Massara had tracked him since his time at Roma."}
];

const CONFIRMED_OUT = [
  {name:"João Mário", sub:"Juventus academy", club:"permanent to Fiorentina", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed via Di Marzio's live mercato digest, days after medicals were reported as imminent."},
  {name:"Vasilije Adzic", sub:"AM, Montenegro, 19", club:"Sassuolo", pos:"CAM", fee:"Loan, €12m buy-back option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially loaned out with Juventus retaining a buy-back clause."},
  {name:"Joao Mario", sub:"LW, Portugal, 22", club:"Fiorentina", pos:"LW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Sent out on loan for regular first-team football."}
];

const INCOMING = [
  {name:"Kerim Alajbegović", sub:"18 · W · Bosnia", club:"Bayer Leverkusen", pos:"W", report:"2 Aug 2026", src:"Football Director Carnevali / Black & White & Read All Over", tier:2, fee:"€25-30m", truth:60, prob:38, light:"y", trend:"up", note:"Talks ongoing per club sources; the young Bosnian winger has also been linked with Tottenham and Chelsea, so competition remains a live obstacle even with Juventus reportedly in advanced discussions.", lastSeen:"2026-08-04T19:10:50Z", baseProb:38},
  {name:"Guglielmo Vicario", sub:"GK, Italy, 29", club:"Tottenham Hotspur", pos:"GK", report:"Juventus have made Vicario a concrete target after he fell behind Kinsky in Tottenham's pecking order and was left out of the pre-season squad; Spurs have already lined up Kinsky and Dubravka as their goalkeepers.", src:"Fabrizio Romano (via GiveMeSport)", tier:1, fee:"Undisclosed", truth:85, prob:65, light:"g", trend:"flat", note:"Juventus previously eyed Emiliano Martinez but judged him too costly; coach Spalletti has publicly questioned why Tottenham dropped Vicario.", lastSeen:"2026-08-04T19:10:50Z", baseProb:65},
  {name:"Zion Suzuki", sub:"GK, Japan, 23", club:"Parma", pos:"GK", report:"An alternative goalkeeper option, but Spalletti himself described a deal as 'prohibitively expensive', with PSG also said to have tabled an official €33m bid.", src:"Football Italia", tier:2, fee:"Undisclosed", truth:65, prob:20, light:"o", trend:"flat", note:"Now considered the less likely of Juve's two main GK targets given the price tag.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Alexander Sorloth", sub:"ST, Norway, 30", club:"Atletico Madrid", pos:"ST", report:"Juventus have renewed interest in the Norwegian striker as an attacking alternative amid the pursuit of a new number 9 options beyond Kolo Muani.", src:"Football Italia", tier:2, fee:"Undisclosed", truth:55, prob:25, light:"o", trend:"flat", note:"One of several forward names under consideration.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Jhon Lucumi", sub:"CB, Colombia, 27", club:"Bologna", pos:"CB", report:"Named among defensive targets as Juventus look to add another centre-back to the squad.", src:"Football Italia", tier:3, fee:"Undisclosed", truth:50, prob:25, light:"o", trend:"flat", note:"Early-stage links rather than concrete negotiation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];

const OUTGOING = [
  {name:"Dušan Vlahović", sub:"26 · ST · Serbia", club:"AC Milan (rumoured)", pos:"ST", report:"31 Jul 2026", src:"Nico Schira / Rudy Galetti", tier:2, fee:"€70m (speculative)", truth:45, prob:20, light:"o", trend:"flat", note:"Recurring Serie A rivalry link, but Juventus have shown no willingness to sell to a direct domestic competitor, and a club spokesperson explicitly denied any meeting has taken place over the player. Kolo Muani's arrival adds competition for his spot regardless of any sale.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Dušan Vlahović", sub:"26 · ST · Serbia", club:"Napoli (contingency)", pos:"ST", report:"25 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:35, prob:15, light:"o", trend:"flat", note:"Napoli reportedly view Vlahović as a contingency plan only if Romelu Lukaku's push to leave succeeds; presented as a fallback scenario rather than an active Napoli approach to Juventus.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Francisco Conceição", sub:"23 · W · Portugal", club:"Manchester United", pos:"W", report:"31 Jul 2026", src:"Nicolo Schira", tier:1, fee:"~£25m", truth:45, prob:15, light:"o", trend:"flat", note:"Schira describes this as enquiry stage only — Manchester United 'have asked for information', not yet a bid.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15},
  {name:"Federico Gatti", sub:"CB, Italy, 27", club:"Napoli", pos:"CB", report:"Gatti is reportedly edging closer to a Napoli loan with an obligation to buy, with new Napoli coach Max Allegri keen to reunite with a player he previously worked with at Juventus.", src:"Sky Sport Italia (via Yahoo Sports)", tier:2, fee:"Undisclosed", truth:65, prob:45, light:"y", trend:"flat", note:"Juventus have reportedly set their asking price for the sale.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Matteo Cerri", sub:"ST, Italy", club:"Grenoble", pos:"ST", report:"A move to the French second-tier club is reported as expected imminently for the young forward.", src:"Il Sussidiario", tier:3, fee:"Undisclosed", truth:45, prob:55, light:"g", trend:"flat", note:"Minor squad departure, low profile but reasonably advanced.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55}
];
const DEAD = [
  {name:"Francisco Conceicao", sub:"RW, Portugal, 23", club:"Manchester United", pos:"RW", report:"Reports linked Man United's Carrick with a move, but Fabrizio Romano poured cold water on it, noting United already have Amad Diallo and Mbeumo as winger options; Juventus have set a €60m price or would need Zirkzee included as a swap.", src:"Fabrizio Romano (via TEAMtalk/The Week)", tier:1, fee:"Undisclosed", truth:55, prob:20, light:"o", trend:"flat", note:"Romano himself has cast doubt on the story, calling elements of it into question.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dir:"out", deadReason:"link went cold", deadAt:"2026-08-06T10:24:32Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Randal Kolo Muani official</b>: loan-to-buy from PSG finally completed after a saga running back to January 2025."},
  {ar:"⬆", t:"<b>Paulo Dybala return</b>: free-agent homecoming to Turin now done and official."},
  {ar:"⬆", t:"<b>Jeff Ekhator signed</b>: teenage Italy international striker arrives from Genoa for €16m as a development bet."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Vlahović to Milan</b>: no meeting between the clubs has taken place per Juventus sources; treat as speculative."}
];

const NEW = [
  {ar:"✦", t:"Kolo Muani's arrival finally lands after 18 months of on-off talks; Alajbegović remains the live pursuit as Spalletti looks to add width."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Striker depth", w:50, x:"Kolo Muani and Dybala's arrivals cover this; Vlahović's future remains unresolved rather than an active sale."},
  {p:"Wide attack / winger", w:55, x:"Alajbegović the live target, competing with Tottenham and Chelsea interest."}
];

const WATCHLIST = [];

const HUB = {
  juvefc: {l:"Juvefc.com · Juventus News", u:"https://www.juvefc.com/"},
  bwrao: {l:"Black & White & Read All Over", u:"https://www.blackwhitereadallover.com/"},
  footballItalia: {l:"Football Italia · Juventus", u:"https://football-italia.net/category/teams/juventus/"},
  beinJuve: {l:"beIN Sports · Serie A", u:"https://www.beinsports.com/en-us/soccer/serie-a/"},
  club: {l:"Juventus Official", u:"https://www.juventus.com/en/news/"},
  nicoloSchiraFranciscoConceio: {l:"Nicolo Schira", u:"https://x.com/NicoSchira/status/2082963665632833569"},
  gianlucaDiMarzioJooMrio: {l:"Gianluca Di Marzio", u:"https://www.gianlucadimarzio.com/calciomercato/joao-mario-fiorentina-juventus-trattativa-news-495419"},
  giveMeSportGuglielmoVicario: {l:"GiveMeSport", u:"https://www.givemesport.com/juventus-make-unbelievable-tottenham-star-a-concrete-target/"},
  footballItaliaZionSuzuki: {l:"Football Italia", u:"https://football-italia.net/spalletti-suzuki-expensive-tottenham-vicario/"},
  footballItaliaJoshuaZirkzee: {l:"Football Italia", u:"https://football-italia.net/juventus-hope-to-copy-rashford-deal-for-zirkee/"},
  footballItaliaAlexanderSorloth: {l:"Football Italia", u:"https://football-italia.net/category/serie-a/juventus/"},
  footballItaliaFranciscoConceicao: {l:"Football Italia", u:"https://football-italia.net/conceicao-manchester-united-e60m-zirkzee-swap/"},
  footballItaliaRandalKoloMuani: {l:"Football Italia", u:"https://football-italia.net/spalletti-alajbegovic-kolo-muani-juventus/"},
  footballItaliaVasilijeAdzic: {l:"Football Italia", u:"https://football-italia.net/official-sassuolo-sign-adzic-juventus-option/"}};

const LINKMAP = {
  "Randal Kolo Muani": ["juvefc","bwrao", "footballItaliaRandalKoloMuani"],
  "Kerim Alajbegović": ["bwrao","beinJuve"],
  "Dušan Vlahović": ["footballItalia"],
  "Joshua Zirkzee": ["club", "footballItaliaJoshuaZirkzee"],
  "Paulo Dybala": ["footballItalia","club"],
  "Jeff Ekhator": ["footballItalia","club"],
  "Francisco Conceição": ["nicoloSchiraFranciscoConceio"],
  "João Mário": ["gianlucaDiMarzioJooMrio"],
  "Guglielmo Vicario": ["giveMeSportGuglielmoVicario"],
  "Zion Suzuki": ["footballItaliaZionSuzuki"],
  "Alexander Sorloth": ["footballItaliaAlexanderSorloth"],
  "Jhon Lucumi": ["footballItaliaAlexanderSorloth"],
  "Francisco Conceicao": ["footballItaliaFranciscoConceicao"],
  "Federico Gatti": ["footballItaliaAlexanderSorloth"],
  "Matteo Cerri": ["footballItaliaAlexanderSorloth"],
  "Kerim Alajbegovic": ["footballItaliaRandalKoloMuani"],
  "Vasilije Adzic": ["footballItaliaVasilijeAdzic"],
  "Joao Mario": ["footballItaliaAlexanderSorloth"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Kolo Muani finally lands after an 18-month saga - Spalletti rebuilds after a 6th-place season without Europe's top table`,
  heroLede: `Juventus enter this window still resetting after a chaotic 2025/26: <b>Igor Tudor</b> was sacked seven months into the job, <b>Luciano Spalletti</b> took over from late October, and a 6th-place finish means Champions League football is gone, with Juventus instead inheriting a Europa League spot via the Coppa Italia route (Inter won the cup but topped the league). Off the pitch, <b>Cristiano Giuntoli</b> departed for Atalanta and was replaced by <b>Marco Ottolini</b>. The rebuild so far centres on <b>Paulo Dybala's emotional free-agent homecoming</b>, <b>Randal Kolo Muani's long-awaited loan-to-buy arrival from PSG</b> - a deal that had dragged on since his original January 2025 loan spell - and teenage Italy striker <b>Jeff Ekhator</b> from Genoa. <b>Dušan Vlahović's</b> future remains unresolved rather than actively for sale, with reported Milan and Napoli interest both denied or downgraded to contingency-only, while <b>Kerim Alajbegović</b> is the live pursuit to add width, competing with Premier League interest.`,
  metaRow: `<span>DECISION-MAKER: <b>Marco Ottolini</b> (Sporting Director)</span> <span>HEAD COACH: <b>Luciano Spalletti</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">6<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">Europa Lg</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">4</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced; the Alajbegović pursuit remains at negotiation stage.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Vlahović's situation is unresolved rather than a live sale process; no other first-team departures are reported as advanced.`,
  pricingBanner: ``,
  excludedNote: `<b>Excluded as unconfirmed:</b> Vlahović-to-Milan speculation, explicitly denied by the club as having involved no direct talks.`,
  spendIn: { v: `~€126-156m committed`, x: `Zirkzee (€42.5m), Kolo Muani (loan + ~€43-50m obligation), Dybala (free) and Ekhator (€16m) are done; Alajbegović remains the live extra.` },
  spendOut: { v: `Limited so far`, x: `No confirmed departures this window; Vlahović's future is the open question.` },
  methodLegend: ``
};
