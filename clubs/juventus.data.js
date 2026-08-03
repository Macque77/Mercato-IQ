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
  dof: "Cristiano Giuntoli (Director)",
  europe: "Conference League play-off round (2026/27) - missed Champions League",
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
  {name:"Randal Kolo Muani", sub:"27 · ST · France", to:"loan-to-buy from Paris Saint-Germain", fee:"Loan fee + ~€43-50m mandatory obligation", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed after a protracted saga dating back to his January 2025 loan spell. Structured as a loan with mandatory purchase, spreading the cost across fiscal years, and gives Spalletti a proven, mobile centre-forward option."}
];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Kerim Alajbegović", sub:"18 · W · Bosnia", club:"Bayer Leverkusen", pos:"W", report:"2 Aug 2026", src:"Football Director Carnevali / Black & White & Read All Over", tier:2, fee:"€25-30m", truth:60, prob:38, light:"y", trend:"up", note:"Talks ongoing per club sources; the young Bosnian winger has also been linked with Tottenham and Chelsea, so competition remains a live obstacle even with Juventus reportedly in advanced discussions."}
];

const OUTGOING = [
  {name:"Dušan Vlahović", sub:"26 · ST · Serbia", club:"AC Milan (rumoured)", pos:"ST", report:"31 Jul 2026", src:"Nico Schira / Rudy Galetti", tier:2, fee:"€70m (speculative)", truth:45, prob:20, light:"o", trend:"flat", note:"Recurring Serie A rivalry link, but Juventus have shown no willingness to sell to a direct domestic competitor, and a club spokesperson explicitly denied any meeting has taken place over the player. Kolo Muani's arrival adds competition for his spot regardless of any sale."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Randal Kolo Muani official</b>: loan-to-buy from PSG finally completed after a saga running back to January 2025."},
  {ar:"⬆", t:"<b>Paulo Dybala return</b>: free-agent homecoming to Turin now done and official."}
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
  club: {l:"Juventus Official", u:"https://www.juventus.com/en/news/"}
};

const LINKMAP = {
  "Randal Kolo Muani": ["juvefc","bwrao"],
  "Kerim Alajbegović": ["bwrao","beinJuve"],
  "Dušan Vlahović": ["footballItalia"],
  "Joshua Zirkzee": ["club"],
  "Paulo Dybala": ["footballItalia","club"]
};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Kolo Muani finally lands after an 18-month saga - Spalletti rebuilds after a 6th-place season without Europe's top table`,
  heroLede: `Juventus enter this window still resetting after a chaotic 2025/26: <b>Igor Tudor</b> was sacked seven months into the job, <b>Luciano Spalletti</b> took over from late October, and a 6th-place finish means Champions League football is gone, replaced by a Conference League play-off route. The rebuild so far centres on <b>Paulo Dybala's emotional free-agent homecoming</b> and <b>Randal Kolo Muani's long-awaited loan-to-buy arrival from PSG</b> - a deal that had dragged on since his original January 2025 loan spell. <b>Dušan Vlahović's</b> future remains unresolved rather than actively for sale, with a reported Milan interest denied by the club, while <b>Kerim Alajbegović</b> is the live pursuit to add width, competing with Premier League interest.`,
  metaRow: `<span>DECISION-MAKER: <b>Cristiano Giuntoli</b> (Director)</span> <span>HEAD COACH: <b>Luciano Spalletti</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">6<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">Conf. League Q</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: `No further deals reported as agreed-but-unannounced; the Alajbegović pursuit remains at negotiation stage.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Vlahović's situation is unresolved rather than a live sale process; no other first-team departures are reported as advanced.`,
  pricingBanner: ``,
  excludedNote: `<b>Excluded as unconfirmed:</b> Vlahović-to-Milan speculation, explicitly denied by the club as having involved no direct talks.`,
  spendIn: { v: `~€110-140m committed`, x: `Zirkzee (€42.5m), Kolo Muani (loan + ~€43-50m obligation) and Dybala (free) are done; Alajbegović remains the live extra.` },
  spendOut: { v: `Limited so far`, x: `No confirmed departures this window; Vlahović's future is the open question.` },
  methodLegend: ``
};
