/* ============================================================
   MERCATO IQ · CLUB DATA · VFB STUTTGART · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "VfB Stuttgart", mono: "VFB", slug: "vfb-stuttgart",
  primary: "#E2001A", primaryBright: "#FF6259", primaryDeep: "#800010",
  primaryRgb: "226,0,26",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Sebastian Hoeneß",
  dof: "Fabian Wohlgemuth (Sporting Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "4th Bundesliga (2025/26)",
  owner: "Member-owned (VfB Stuttgart 1893 e.V.); Mercedes-Benz major shareholder",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.vfb.de/en/"],
  queries: ["VfB Stuttgart transfer news 2026", "Jamie Leweling Bournemouth Everton"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · VfB Stuttgart"
};

const CONFIRMED_IN = [
  {name:"Leo Sauer", sub:"21 · ST · Slovakia", to:"permanent from Feyenoord", fee:"~€14.9m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Slovak forward is Stuttgart's headline summer signing."},
  {name:"Grischa Prömel", sub:"31 · CM · Germany", to:"free from TSG Hoffenheim", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Experienced midfielder joins on a free transfer after his Hoffenheim contract expired."},
  {name:"Tim van der Leij", sub:"22 · CB · Netherlands", to:"permanent from RKC Waalwijk", fee:"~€1m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Dutch centre-back signed for squad depth."}
];

const CONFIRMED_OUT = [
  {name:"Pascal Stenzel", sub:"29 · RB · Germany", to:"free agent", club:"free agent", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; right-back departs as a free agent."},
  {name:"Noah Darvich", sub:"20 · CM · Germany", to:"loan to SV Elversberg", club:"SV Elversberg", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young midfielder loaned out for first-team experience at the newly-promoted side."}
];

const INCOMING = [
  {name:"Dzenan Pejcinovic", sub:"Striker linked as Stuttgart chase attacking reinforcement", club:"VfL Wolfsburg", pos:"ST", report:"Stuttgart are locked in 'difficult' talks with Wolfsburg for the 21-year-old striker, who scored 12 goals last season, but the two clubs remain far apart on valuation.", src:"Goal.com (Christian Guinin)", tier:1, fee:"Wolfsburg want €25m+, Stuttgart yet to match", truth:75, prob:45, light:"y", trend:"flat", note:"Sporting director Fabian Wohlgemuth confirmed talks are ongoing but said a deal is 'a long way off'; Wolfsburg under no financial pressure to sell after the €17m Koulierakis sale to Roma.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Radek Vitek", sub:"Goalkeeper eyed amid Stuttgart injury crisis", club:"Manchester United", pos:"GK", report:"Stuttgart are exploring a move for the uncapped Manchester United goalkeeper after Alexander Nübel's understudy Dennis Seimen was ruled out for at least two months.", src:"Bild", tier:2, fee:"Valued around €6m (Transfermarkt)", truth:65, prob:40, light:"y", trend:"flat", note:"Vitek, 22, has made no senior United appearances but impressed on loan at Bristol City (41 apps); Hull City and Celtic are also credited with interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40}
];

const OUTGOING = [
  {name:"Jamie Leweling", sub:"24 · W · Germany", club:"Bournemouth / Everton", pos:"W", report:"3 Aug 2026", src:"Kicker (via Bulinews/Yahoo)", tier:2, fee:"Undisclosed", truth:60, prob:40, light:"y", trend:"up", note:"Kicker reports Stuttgart may need to sell to balance the books, with 'no star considered unsellable.' Bournemouth have made a fresh approach that Leweling reportedly rejected last month; Everton and Roma are also credited with interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Ermedin Demirović", sub:"26 · ST · Bosnia", club:"Unspecified", pos:"ST", report:"3 Aug 2026", src:"Kicker (via Bulinews/Yahoo)", tier:3, fee:"Undisclosed", truth:45, prob:22, light:"o", trend:"flat", note:"Named by Kicker among Stuttgart's potential sale candidates as the club looks to balance its books; no concrete club interest specified yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Ermedin Demirovic", sub:"Bosnian striker admired by Leeds United", club:"Leeds United", pos:"ST", report:"Leeds United have identified Demirovic as an attacking target for Daniel Farke's Premier League survival push, but the striker is reportedly content in Stuttgart.", src:"Slobodna Bosna", tier:2, fee:"Not specified", truth:55, prob:25, light:"o", trend:"flat", note:"Demirovic contributed to 20 goals last season and is not pushing for an exit, giving Stuttgart a strong negotiating position; other unnamed European clubs are also monitoring him.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Alexander Nübel", sub:"Number one goalkeeper drawing Turkish interest", club:"Besiktas", pos:"GK", report:"Besiktas have been credited with surprise interest in Nübel as they look to strengthen their goalkeeping options this summer.", src:"A Spor", tier:2, fee:"Not specified", truth:55, prob:30, light:"y", trend:"flat", note:"Reported as part of a wider look at Besiktas's defensive and goalkeeping targets from the Bundesliga.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Jeff Chabot", sub:"Defender floated as alternative Besiktas target", club:"Besiktas", pos:"CB", report:"Besiktas are said to view the 23-year-old Chabot as a defensive alternative after missing out on their primary target, Flamengo's Leo Pereira.", src:"A Spor", tier:3, fee:"Not specified", truth:45, prob:20, light:"o", trend:"flat", note:"Chabot is under contract at Stuttgart until 2028 and remains a key player under Sebastian Hoeneß, making a move unlikely without a significant offer.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];

const RISERS = [];

const FALLERS = [
  {ar:"⬇", t:"<b>Leweling sale speculation grows</b>: Kicker reports Stuttgart's finances mean 'no star is considered unsellable,' with Bournemouth's approach already rejected once."}
];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Wide forward", w:30, x:"Leweling's situation is the position to watch, with Premier League interest mounting."}
];

const WATCHLIST = [
  {name:"Jamie Leweling", club:"VfB Stuttgart", pos:"W", dir:"out", age:"~1 day", tier:2, note:"Bournemouth's renewed approach was rejected last month; Everton and Roma also linked amid Stuttgart's need to balance the books."}
];

const HUB = {
  yahoo: {l:"Yahoo Sports (via Bulinews/Kicker)", u:"https://sports.yahoo.com/articles/stuttgart-could-cash-premier-league-081200457.html"},
  sport1: {l:"Sport1", u:"https://www.sport1.de/news/transfermarkt/2026/07/grosser-vfb-transfer-auf-der-zielgeraende"},
  goalcomDzenanPejcinovic: {l:"Goal.com", u:"https://www.goal.com/en/news/club-boss-on-difficult-negotiations-vfb-stuttgart-far-away-from-signing-their-desired-player/bltbb139d9cd16ddea9"},
  bildviaTheHardTackleRadekVitek: {l:"Bild (via The Hard Tackle)", u:"https://thehardtackle.com/transfer-news/2026/07/25/vfb-stuttgart-eyeing-summer-move-for-radek-vitek/"},
  slobodnaBosnaviaTheHardTackleErmedinDemirovic: {l:"Slobodna Bosna (via The Hard Tackle)", u:"https://thehardtackle.com/transfer-news/2026/07/24/ermedin-demirovic-happy-at-vfb-stuttgart-amid-leeds-united-links/"},
  aSporviaGoalcomAlexanderNbel: {l:"A Spor (via Goal.com)", u:"https://www.goal.com/en-in/news/after-the-surprise-involving-alexander-nuebel-besiktas-are-reportedly-also-keeping-tabs-on-another-vfb-stuttgart-first-team-regular/blt4a5bcf46eeb6619f"},
  bulinewsviaYahooSportsLeoSauer: {l:"Bulinews (via Yahoo Sports)", u:"https://sports.yahoo.com/articles/confirmed-vfb-stuttgart-announce-leo-141800582.html"}};

const LINKMAP = {
  "Jamie Leweling": ["yahoo"],
  "Ermedin Demirović": ["yahoo"],
  "Dzenan Pejcinovic": ["goalcomDzenanPejcinovic"],
  "Radek Vitek": ["bildviaTheHardTackleRadekVitek"],
  "Ermedin Demirovic": ["slobodnaBosnaviaTheHardTackleErmedinDemirovic"],
  "Alexander Nübel": ["aSporviaGoalcomAlexanderNbel"],
  "Jeff Chabot": ["aSporviaGoalcomAlexanderNbel"],
  "Leo Sauer": ["bulinewsviaYahooSportsLeoSauer"]};
const WL_LINKMAP = {
  "Jamie Leweling": ["yahoo"]
};

const PROSE = {
  heroH2: `Champions League football secured, but Kicker says Stuttgart may need to cash in on Leweling`,
  heroLede: `Sebastian Hoeneß's Stuttgart return to the Champions League after a 4th-place finish, having already added Slovak forward <b>Leo Sauer</b> from Feyenoord and free-agent midfielder Grischa Prömel from Hoffenheim. The bigger story, per Kicker, is financial: the club may need to sell to balance the books, with winger <b>Jamie Leweling</b> the most concrete candidate after rejecting a Bournemouth approach last month, and Everton and Roma also credited with interest. Striker Ermedin Demirović is also named among potential departures.`,
  metaRow: `<span>DECISION-MAKER: <b>Fabian Wohlgemuth</b> (Sporting Director)</span> <span>HEAD COACH: <b>Sebastian Hoeneß</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">4<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">UCL</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Nothing at an advanced stage yet on Leweling or Demirović - both remain speculative sale candidates rather than agreed deals.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€15.9m committed`, x: `Sauer (€14.9m) and van der Leij (€1m) confirmed; Prömel arrives free.` },
  spendOut: { v: `None banked yet`, x: `Stenzel left free; Leweling and Demirović remain speculative sales rather than completed deals.` },
  methodLegend: ``
};
