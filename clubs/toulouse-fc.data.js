/* ============================================================
   MERCATO IQ · CLUB DATA · TOULOUSE FC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Toulouse FC", mono: "TFC", slug: "toulouse-fc",
  primary: "#5B2A70", primaryBright: "#9A5FC0", primaryDeep: "#331942",
  primaryRgb: "91,42,112",
  breadcrumb: ["France","Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Jens Berthel Askou (appointed 21 May 2026 from Motherwell, succeeding Carles Martínez Novell, who left for Bayer Leverkusen)",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "10th Ligue 1 (2025/26)",
  owner: "RedBird Capital Partners (85% stake since Jul 2020); Olivier Cloarec (President, from Jul 2025)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/toulouse/"],
  queries: ["Toulouse FC transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Toulouse FC"
};

const CONFIRMED_IN = [
  {name:"Sion Oppong", sub:"18 · Sweden · W", club:"Unknown", pos:"W", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed until 2030"}
];

const CONFIRMED_OUT = [
  {name:"Charlie Cresswell", sub:"23 · CB · England", club:"Stade Rennais", pos:"CB", fee:"€25m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreed 1 Aug 2026 - Toulouse's biggest sale of the window."}
];

const INCOMING = [
  {name:"Gift Orban", sub:"unknown · unknown · unknown", club:"Lyon", pos:"unknown", report:"Toulouse ready to move for Lyon player", src:"On-page rumour", tier:3, fee:"Unknown", truth:50, prob:40, light:"y", trend:"down", note:"Existing rumour, no fresh snippet provided", lastSeen:"2026-08-07T01:42:32Z", baseProb:40, dead:true, deadReason:"No recent snippet confirms this link; appears stale"}
];

const OUTGOING = [
  {name:"Charlie Cresswell", sub:"24 · England · D", club:"Toulouse FC", pos:"D", report:"Defender agreed transfer to Stade Rennais", src:"ici.fr", tier:2, fee:"€25m", truth:90, prob:85, light:"g", trend:"down", note:"Transfer agreement reached with Stade Rennais", lastSeen:"2026-08-08T18:06:11Z", baseProb:85},
  {name:"Guillaume Restes", sub:"unknown · unknown · unknown", club:"Toulouse FC", pos:"unknown", report:"Departure reported ~4 days ago", src:"On-page rumour", tier:3, fee:"", truth:50, prob:40, light:"y", trend:"flat", note:"Existing rumour, no fresh snippet provided", lastSeen:"2026-08-07T01:42:32Z", baseProb:40, dead:true, deadReason:"Departure reported ~4 days ago but no recent confirmation of completed move; status unclear"}
];

const RISERS = [];

const FALLERS = [
  {ar:"⬇", t:"<b>Cresswell sold to Rennes for €25m</b>: a significant departure from the back line under new coach Askou."}
];

const NEW = [
  {ar:"✦", t:"Jens Berthel Askou, previously of Scottish Premiership side Motherwell, takes over from Carles Martínez Novell, who left for Bayer Leverkusen in the Bundesliga."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [
  {name:"Guillaume Restes", club:"Toulouse FC", pos:"GK", dir:"out", age:"~4 days", tier:2, note:"Marseille and Aston Villa credited with interest.", dead:true, deadReason:"Departure reported ~4 days ago but no recent confirmation of completed move; status unclear"}
];

const HUB = {
  "gffn-toulouse": {l:"Get French Football News · Toulouse", u:"https://www.getfootballnewsfrance.com/tag/toulouse/"},
  mSNSportGiftOrban: {l:"MSN Sport", u:"https://www.msn.com/fr-fr/sport/football/mercato-toulouse-le-t%C3%A9f%C3%A9c%C3%A9-pr%C3%AAt-%C3%A0-s-offrir-un-ancien-flop-de-l-ol-%C3%A0-prix-cass%C3%A9/ar-AA288cab"},
  lesTransfertsCristianCasseresJr: {l:"Les Transferts", u:"https://www.les-transferts.com/rumeurs-transferts/lol-veut-doubler-lens-pour-ce-milieu-de-toulouse/"},
  mSNSportYannGboho: {l:"MSN Sport", u:"https://www.msn.com"},
  laDepecheMaxifootCharlieCresswell: {l:"La Depeche / Maxifoot", u:"https://news.maxifoot.fr/rennes/"},
  topMercatoSrdjanKuzmic: {l:"Top Mercato", u:"https://www.topmercato.com/"},
  ladepechefrCharlieCresswell: {l:"ladepeche.fr", u:"https://news.google.com/rss/articles/CBMipAJBVV95cUxPcDBCNVg5SEhLNWx4UE5kdTl5b1NSOUIxWTdZamh6Z2VQQU1BV3ZxNDh5c0hRZ2w2N1lsTVc2MmFUelNoZlluRVAtQ1hQcnJEWVNlOU9ETzNuWnVOQ1EyWmwzd1FpcHcwTDlnTDMwSUtFR1lzQk42aUEwckdhNWp3YnJXOFduOGFrOENBeWxDLWNJdTZjRVFfTEN6ZVB0T1hfZEg0SlRIYUVUOUJjODh0c0hiWTU2cVBqU05WTUZhWmZYSnBqd3ltYy13NVd6MGp1eENpM0NzZExhckR6UjMxcGFETEhnb0hKbkZVMDdMTW5yR3J4MDRUeFBnS3ZrM2JKSFhXYkR3TG9NOTBRQ3FrNmRGZDVuSlIyMS1SSVoyUVo0REMx"},
  lquipeSionOppong: {l:"L'Équipe", u:"https://news.google.com/rss/articles/CBMi0AFBVV95cUxQY3FZV3pUYjVvamZyR2xlODQyN25WcUtKeHRoa0xQeEY4WDZ1LUNpLVR6em1Ba3pxSkNISVFTb3c0SE4taFJ0elVCd2FVa3pnVWlyRWJ4NENGb0JUaE1mTzBsNFpINkdMalp1aVAxVE84TnBhTUNaZGNLY2E4aW51Qi1JSTVkSmdGZkZsWlFoRXYzTmlucXZObHA2bkhQaEhRdHNtRTB1dUppRklYU0cxMW82UDc5cWdmeklKSi1qWFdpb05qSEoxSm85WGhPWmYw?oc=5"},
  icifrCharlieCresswell: {l:"ici.fr", u:"https://news.google.com/rss/articles/CBMiywFBVV95cUxPamtvSVVqbE9QLS1EcnZYcnR0T2tWZV8yRFprN0ZERUNlRlBDODg2WlFzODlzZ3hJMTFjb0o3d1hEd3hYQy04UlFyaEhFVkRrRXNZYUFBQW4waUVQeGlldWJmWkcxaEZqM2t4RFJmOGJfZGk5SFR3VzYyaUdLVWZCd2ZmRmRpeDZGOUhBbmxqbTc5NUNtUHdXNGRkRmN0QU9vSTRUbXpNV3pHSDhEYmliakhUZGxwMUF2MXNKblRwZG90bDFFTmZZQUdn?oc=5"}};

const LINKMAP = {
  "Charlie Cresswell": ["gffn-toulouse", "laDepecheMaxifootCharlieCresswell", "ladepechefrCharlieCresswell", "icifrCharlieCresswell"],
  "Guillaume Restes": ["gffn-toulouse"],
  "Gift Orban": ["mSNSportGiftOrban"],
  "Cristian Casseres Jr.": ["lesTransfertsCristianCasseresJr"],
  "Yann Gboho": ["mSNSportYannGboho"],
  "Srdjan Kuzmic": ["topMercatoSrdjanKuzmic"],
  "Sion Oppong": ["lquipeSionOppong"]};
const WL_LINKMAP = {
  "Guillaume Restes": ["gffn-toulouse"]
};

const PROSE = {
  heroH2: `A new coach and a first big sale as Toulouse reshape under Askou`,
  heroLede: `Toulouse's summer has been defined by change in the dugout: <b>Jens Berthel Askou</b> arrives from Motherwell to replace <b>Carles Martínez Novell</b>, who left for Bayer Leverkusen. On the pitch, centre-back <b>Charlie Cresswell</b> has been sold to Stade Rennais for €25m, and goalkeeper <b>Guillaume Restes</b> is drawing interest from both Marseille and Aston Villa.`,
  metaRow: `<span>DECISION-MAKER: <b>Olivier Cloarec</b> (President)</span> <span>HEAD COACH: <b>Jens Berthel Askou</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">10<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Restes' situation is the one to watch, with two clubs from different leagues credited with interest.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `None reported`, x: `No confirmed incoming deals this window.` },
  spendOut: { v: `€25m banked`, x: `Cresswell's sale to Rennes is the only confirmed departure so far.` },
  methodLegend: ``
};
