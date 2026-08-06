/* ============================================================
   MERCATO IQ · CLUB DATA · 1. FC UNION BERLIN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "1. FC Union Berlin", mono: "FCU", slug: "union-berlin",
  primary: "#E2001A", primaryBright: "#FF6259", primaryDeep: "#800010",
  primaryRgb: "226,0,26",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Mauro Lustrinelli",
  dof: "TBD (Director)",
  europe: "None (2025/26 11th - no European qualification)",
  finish: "11th Bundesliga (2025/26)",
  owner: "Member-owned (1. FC Union Berlin e.V.); Dirk Zingler (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.fc-union-berlin.de/en/"],
  queries: ["Union Berlin transfer news 2026", "Danilho Doekhi Lazio", "Latte Lath Union Berlin loan"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · 1. FC Union Berlin"
};

const CONFIRMED_IN = [
  {name:"Latte Lath", sub:"23 · ST · Ivory Coast", to:"loan from Atlanta United (with buy option)", fee:"Loan, salary covered by Union", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Aug: Atlanta United loan the forward for 2026/27 with a permanent option at the end of the deal, freeing up an MLS Designated Player slot. Previously at Middlesbrough, Atalanta and FC St. Gallen before MLS."},
  {name:"Marvin Friedrich", sub:"30 · CB · Germany", to:"free from Borussia Mönchengladbach", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Centre-back returns to a familiar Bundesliga environment on a free transfer."},
  {name:"Zeno Van Den Bosch", sub:"20 · DM · Belgium", to:"free from Royal Antwerp", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Belgian midfielder signed on a free transfer for squad depth."},
  {name:"Emmanuel Latte Lath", sub:"Striker", club:"Atlanta United", pos:"ST", fee:"Loan with purchase option (~€21m reported)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ivorian international and former Middlesbrough forward joins on loan from Atlanta United's record signing, with Union Berlin holding an option to make the move permanent."}
];

const CONFIRMED_OUT = [
  {name:"Danilho Doekhi", sub:"27 · CB · Netherlands", to:"free to Lazio", club:"Lazio", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 14 Jul: long-serving Dutch centre-back and former club captain leaves Union for Serie A on a free transfer after his contract expired."},
  {name:"Diogo Leite", sub:"27 · CB · Portugal", to:"free agent", club:"free agent", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; Portuguese centre-back departs as a free agent."},
  {name:"Alex Kral", sub:"25 · DM · Czech Republic", to:"free to FC København", club:"FC København", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; Czech midfielder moves to Denmark on a free transfer."},
  {name:"David Preu", sub:"21 · Germany · Forward", club:"VfB Stuttgart", pos:"Forward", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"The versatile attacker joins VfB Stuttgart's U21 side in the 3. Liga and will wear number 37. Both clubs agreed to keep the financial terms private."}
];

const INCOMING = [
  {name:"Kastriot Imeri", sub:"26 · Switzerland · AM", club:"Thun", pos:"Playmaker", report:"Kicker, relaying the Berner Zeitung, say Union have the Thun playmaker in their sights, with new head coach Mauro Lustrinelli keen to bring the Swiss title winner he worked with last season to Köpenick. Kicker add Imeri is not the only name on Union's list.", src:"Kicker / Berner Zeitung", tier:2, fee:"Undisclosed", truth:70, prob:45, light:"y", trend:"flat", note:"Coach-driven interest rather than an advanced negotiation, and it originates with a Swiss regional paper. No fee talks reported and Union are weighing alternatives.", lastSeen:"2026-08-06T10:49:40Z", baseProb:45}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Latte Lath loan confirmed</b>: MLS striker arrives with a permanent option, addressing attacking depth after a mid-table finish."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Doekhi departure to Lazio</b>: the loss of a long-time defensive leader on a free transfer is a notable value giveaway."}
];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-back", w:35, x:"Doekhi and Leite both leaving as free agents leaves a leadership gap only partly addressed by Friedrich's arrival."},
  {p:"Striker", w:25, x:"Latte Lath's loan arrival adds a fresh attacking option with a permanent option attached."}
];

const WATCHLIST = [];

const HUB = {
  atlutd: {l:"Atlanta United Official", u:"https://www.atlutd.com/news/atlanta-united-loans-forward-latte-lath-union-berlin-august-2026"},
  bundesliga: {l:"Bundesliga.com · Official", u:"https://www.bundesliga.com/de/bundesliga/news/danilho-doekhi-lazio-rom-transfer-ehemaliger-union-berlin-spieler-38250"},
  laziali: {l:"The Laziali", u:"https://thelaziali.com/2026/07/14/official-lazio-sign-danilho-doekhi-on-a-free-transfer/"},
  yahooSportsEmmanuelLatteLath: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/official-union-berlin-ivorian-striker-171500636.html"},
  insideFutbolviaMSNDiogoLeite: {l:"Inside Futbol (via MSN)", u:"https://www.msn.com/en-gb/sport/other/everton-and-leeds-united-poised-to-miss-out-on-diogo-leite/ar-AA27CBNE?ocid=BingNewsVerp"},
  kickerKastriotImeri: {l:"Kicker", u:"https://www.kicker.de/1-fc-union-berlin/team-transfers"}};

const LINKMAP = {
  "Latte Lath": ["atlutd"],
  "Danilho Doekhi": ["bundesliga","laziali"],
  "Emmanuel Latte Lath": ["yahooSportsEmmanuelLatteLath"],
  "Diogo Leite": ["insideFutbolviaMSNDiogoLeite"],
  "Kastriot Imeri": ["kickerKastriotImeri"],
  "David Preu": ["kickerKastriotImeri"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Doekhi departs for Lazio as Union bring in an MLS striker on loan`,
  heroLede: `After an 11th-place finish with no European football to plan for, Mauro Lustrinelli's Union Berlin have lost long-serving centre-back and former captain <b>Danilho Doekhi</b> to Lazio on a free transfer, alongside fellow defender Diogo Leite. The incoming business has centred on MLS forward <b>Latte Lath</b>, arriving on loan from Atlanta United with a permanent option attached, plus free-transfer defensive reinforcement in Marvin Friedrich from Gladbach.`,
  metaRow: `<span>OWNER: <b>Dirk Zingler</b> (President)</span> <span>HEAD COACH: <b>Mauro Lustrinelli</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">11<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">3</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `All three confirmed departures were free-transfer exits with contracts expiring.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Loan + two frees`, x: `Latte Lath arrives on loan (wages covered); Friedrich and Van Den Bosch signed free.` },
  spendOut: { v: `No fees banked`, x: `Doekhi, Leite and Kral all departed as out-of-contract free agents.` },
  methodLegend: ``
};
