/* ============================================================
   MERCATO IQ · CLUB DATA · FC COLOGNE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Cologne",
  mono: "KOE",
  slug: "fc-cologne",
  primary: "#EC2029",
  primaryBright: "#FF5A62",
  primaryDeep: "#8A0000",
  primaryRgb: "236,32,41",
  breadcrumb: ["Germany", "Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Steffen Baumgart",
  dof: "TBD (Director)",
  europe: "None (2025/26 - no European qualification)",
  finish: "10th Bundesliga (2025/26)",
  owner: "Member-owned (1. FC Köln e.V.)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://thehardtackle.com/", "https://www.kicker.de/1-fc-koeln/team-transfers"],
  queries: ["FC Köln transfer news 2026", "Mikey Moore Köln loan", "Said El Mala Köln"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · FC Cologne"
};

const CONFIRMED_IN = [
  {name:"Luka Lochoshvili", sub:"25 · CB · Georgia", to:"permanent from 1. FC Nürnberg", fee:"~€4.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Georgian centre-back signed for defensive reinforcement."},
  {name:"Reigan Heskey", sub:"20 · W", to:"permanent from Manchester City", fee:"~€2m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young winger signed from Manchester City's academy pathway."}
];

const CONFIRMED_OUT = [
  {name:"Jakub Kamiński", sub:"23 · W · Poland", to:"permanent to SL Benfica", fee:"~€17m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Polish winger's sale is Köln's largest confirmed fee banked this summer."},
  {name:"Florian Kainz", sub:"33 · AM · Austria", to:"retired", fee:"N/A", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Long-serving Austrian playmaker retires from professional football."},
  {name:"Dominique Heintz", sub:"32 · CB · Germany", to:"free to Fortuna Düsseldorf", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; experienced centre-back departs on a free transfer."}
];

const INCOMING = [
  {name:"Mateo Kvasina", sub:"19 · ST · Serbia", club:"Borussia Mönchengladbach", pos:"ST", report:"1 Aug 2026", src:"Sky Deutschland", tier:2, fee:"€8m", truth:62, prob:48, light:"y", trend:"flat", note:"Sky reports Cologne pursuing young striker from Gladbach."},
  {name:"Mikey Moore", sub:"18 · W · England", club:"Tottenham Hotspur", pos:"W", report:"3 Aug 2026", src:"Fabrizio Romano (via TheHardTackle)", tier:1, fee:"Loan (no fee)", truth:80, prob:72, light:"g", trend:"up", note:"Advanced talks for a season-long loan, with a deal potentially completing 'next week.' Tottenham see this as the ideal development step after a strong 2025/26 loan at Rangers and consider a permanent sale a non-starter. Köln beat several rival European clubs to be the first to formalise an official proposal."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Mikey Moore loan advancing</b>: Köln 'stole a march' on rival suitors to be first with a formal proposal for the Tottenham teenager."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"<b>Said El Mala staying put</b>: the €50m-rated winger and Köln are 'growing aligned' on him remaining for another season after a Brentford move collapsed when El Mala and his mother asked for his brother to be included in the deal; Liverpool, Newcastle and Dortmund remain interested at a distance."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Wide forward", w:35, x:"Kaminski's exit and the ongoing El Mala saga keep this the club's most-discussed position group."},
  {p:"Striker", w:25, x:"Kvasina pursuit from Gladbach would add a young striking option."}
];

const WATCHLIST = [
  {name:"Said El Mala", club:"1. FC Köln", pos:"RW", dir:"out", age:"~2 wks", tier:2, note:"TEAMtalk (17 Jul): staying at Köln for now after a Brentford €50m deal collapsed; Liverpool, Newcastle and Dortmund remain long-range admirers, contract runs to 2030."}
];

const HUB = {
  hardtackle: {l:"TheHardTackle", u:"https://thehardtackle.com/transfer-news/2026/08/03/fc-koln-advancing-talks-to-sign-mikey-moore-as-offer-made/"},
  teamtalk: {l:"TEAMtalk", u:"https://www.teamtalk.com/news/liverpool-transfers-news-said-el-mala-newcastle-target-fc-koln-stay-sources"},
  "skydeutschland": {l:"Sky Sport Deutschland", u:"https://sportnews.bz/"}
};

const LINKMAP = {
  "Mateo Kvasina": ["skydeutschland"],
  "Mikey Moore": ["hardtackle"],
  "Said El Mala": ["teamtalk"]
};
const WL_LINKMAP = {
  "Said El Mala": ["teamtalk"]
};

const PROSE = {
  heroH2: `El Mala stays, Moore closes in: Köln's window is defined by who they're keeping, not just who they're signing`,
  heroLede: `After a mid-table finish under Steffen Baumgart, Köln's summer narrative has been dominated by <b>Said El Mala</b> - the €50m-rated winger whose move to Brentford collapsed and who now looks set to stay another season despite continued long-range interest from Liverpool, Newcastle and Dortmund. On the incoming side, Tottenham teenager <b>Mikey Moore</b> is closing in on a season-long loan after a breakout Rangers spell, while Polish winger Jakub Kamiński was sold to Benfica for around €17m.`,
  metaRow: `<span>HEAD COACH: <b>Steffen Baumgart</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">10<small>th</small></div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">3</div></div><div class="stat gold"><div class="l">El Mala Valuation</div><div class="v">€50m</div></div>`,
  positionPanel: ``,
  confirmedPending: `<b>Pending:</b> Mikey Moore's loan from Tottenham is in advanced talks and could complete within days.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Kamiński's sale to Benfica is done; El Mala's stay looks increasingly likely barring a very late change of heart.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€6.5m + loan`, x: `Lochoshvili (€4.5m) and Heskey (€2m) confirmed; Moore arrives on loan if completed.` },
  spendOut: { v: `~€17m banked`, x: `Kamiński's Benfica sale is the headline fee; Kainz retired, Heintz left free.` },
  methodLegend: ``
};
