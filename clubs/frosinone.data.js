/* ============================================================
   MERCATO IQ · CLUB DATA · FROSINONE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Frosinone",
  mono: "FRO",
  slug: "frosinone",
  primary: "#00539C",
  primaryBright: "#4D8FD1",
  primaryDeep: "#002B52",
  primaryRgb: "0,83,156",
  breadcrumb: ["Italy", "Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Massimiliano Alvini (staff confirmed for the Serie A campaign)",
  dof: "Club sporting management (no single publicly confirmed director this session)",
  europe: "None for 2026/27",
  finish: "Promoted - 2nd in Serie B 2025/26 (81 pts, one point behind champions Venezia)",
  owner: "Clara Vista (Ipswich Town's US ownership group bought 80% from president Maurizio Stirpe, 1 Jul 2026)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/frosinone/"],
  queries: ["Frosinone transfer news 2026", "Frosinone Zerbin Hasa Napoli", "Frosinone Clara Vista ownership"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Frosinone"
};

const CONFIRMED_IN = [
  {name:"Alessio Zerbin", sub:"25 · W · Italy", to:"permanent from Napoli", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 24 Jul. Attacking winger leaves Napoli, where he had been since 2017, for regular Serie A football."},
  {name:"Luis Hasa", sub:"20 · MF · Albania", to:"permanent from Napoli", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 24 Jul, part of the same double deal with Napoli as Zerbin."},
  {name:"Kevin Akpoguma", sub:"30 · CB · Nigeria", to:"free transfer from TSG Hoffenheim", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 28 Jul after completing his medical. Experienced Bundesliga defender joins as a free agent."},
  {name:"Salvatore Calo", sub:"Midfielder", club:"Cesena", pos:"CM", fee:"Buy-out clause exercised (riscatto)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Frosinone exercised the option to sign Calo permanently, reported 17 June 2026."}
];

const CONFIRMED_OUT = [
  {name:"Simone Marchizza", sub:"Defender, former captain", club:"Vicenza", pos:"LB", fee:"Free/undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ex-Frosinone captain signed a two-year deal with Vicenza, reported 8 July 2026."},
  {name:"Julian Dixon", sub:"Forward", club:"Toronto FC", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returned to Toronto FC after a brief loan stint at Frosinone, reported 2 July 2026."}
];

const INCOMING = [
  {name:"Andreas Hountondji", sub:"25 · ST · Benin", club:"Burnley", pos:"ST", report:"3 Aug 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:50, prob:30, light:"y", trend:"up", note:"Previously on loan at St Pauli; reported close to completing a move to newly-promoted Frosinone.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Kevin Amey", sub:"Defender", club:"Bologna", pos:"CB", report:"Amey returns to Frosinone on loan after his contract with Bologna was renewed through 2029.", src:"TuttoMercatoWeb", tier:2, fee:"Loan", truth:70, prob:85, light:"g", trend:"flat", note:"Reported as effectively completed in early July 2026.", lastSeen:"2026-08-04T19:10:50Z", baseProb:85},
  {name:"Cristian Raimondo", sub:"Striker", club:"Bologna", pos:"ST", report:"Raimondo returns to Frosinone on a fresh loan agreement from Bologna.", src:"TuttoMercatoWeb", tier:2, fee:"Loan", truth:70, prob:85, light:"g", trend:"flat", note:"Reported early July 2026, part of Frosinone's Serie B rebuild under new Clara Vista ownership.", lastSeen:"2026-08-04T19:10:50Z", baseProb:85}
];

const OUTGOING = [
  {name:"Fares Ghedjemis", sub:"Winger, Algeria, mid-20s", club:"Celtic / Rangers", pos:"RW", report:"Celtic had an opening bid for Ghedjemis rejected; Frosinone have since set their asking price at €15-20m amid a bidding war with Rangers, who also had a €10m offer turned down.", src:"Yahoo Sports", tier:2, fee:"Asking price €15-20m", truth:70, prob:55, light:"g", trend:"flat", note:"Also being monitored by Monaco, Borussia Dortmund, Atalanta and Juventus per TuttoMercatoWeb; his valuation has reportedly doubled amid the Celtic-Rangers interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Christian Ndow", sub:"Forward", club:"Spezia", pos:"ST", report:"Ndow has agreed a two-year deal with Spezia with medicals scheduled.", src:"TuttoMercatoWeb", tier:2, fee:"Undisclosed", truth:65, prob:75, light:"g", trend:"flat", note:"Reported 9 July 2026.", lastSeen:"2026-08-04T19:10:50Z", baseProb:75}
];

const RISERS = [
  {ar:"⬆", t:"<b>Zerbin and Hasa double-signing from Napoli</b>: both confirmed the same week as Frosinone build their Serie A squad."},
  {ar:"⬆", t:"<b>Kevin Akpoguma arrives free</b>: experienced Bundesliga centre-back joins after leaving Hoffenheim."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Frosinone's promotion summer has come with a major ownership change too - Ipswich Town's Clara Vista group bought 80% of the club from long-time president Maurizio Stirpe on 1 July, alongside genuine squad-building activity including two Napoli signings."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-forward", w:40, x:"Hountondji is the live target to add further attacking depth for the step up to Serie A."}
];

const WATCHLIST = [
  {name:"Andreas Hountondji", club:"Burnley", pos:"ST", dir:"in", age:"~0 days", tier:3, note:"Reported close to completing a move to Frosinone."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Frosinone", u:"https://football-italia.net/category/teams/frosinone/"},
  tuttoMercatoWebKevinAmey: {l:"TuttoMercatoWeb", u:"https://www.tuttomercatoweb.com/frosinone"},
  yahooSportsFaresGhedjemis: {l:"Yahoo Sports", u:"https://sports.yahoo.com/articles/celtic-opening-ghedjemis-bid-rejected-075000151.html"},
  calciomercatocomviaMSNKevinAkpoguma: {l:"Calciomercato.com (via MSN)", u:"https://www.msn.com/it-it/sport/calcio/calciomercato-live-adzic-verso-il-cagliari-idea-philogene-per-la-fiorentina-ufficiali-akinsanmiro-al-monza-akpoguma-al-frosinone-e-antonio-silva-al-bournemouth/ar-AA28L228"}};

const LINKMAP = {
  "Alessio Zerbin": ["footballItalia"],
  "Luis Hasa": ["footballItalia"],
  "Kevin Akpoguma": ["footballItalia", "calciomercatocomviaMSNKevinAkpoguma"],
  "Andreas Hountondji": ["footballItalia"],
  "Kevin Amey": ["tuttoMercatoWebKevinAmey"],
  "Cristian Raimondo": ["tuttoMercatoWebKevinAmey"],
  "Fares Ghedjemis": ["yahooSportsFaresGhedjemis"],
  "Christian Ndow": ["tuttoMercatoWebKevinAmey"],
  "Salvatore Calo": ["tuttoMercatoWebKevinAmey"],
  "Simone Marchizza": ["tuttoMercatoWebKevinAmey"],
  "Julian Dixon": ["tuttoMercatoWebKevinAmey"]};
const WL_LINKMAP = {
  "Andreas Hountondji": ["footballItalia"]
};

const PROSE = {
  heroH2: `New owners, new signings: Frosinone's immediate Serie A return comes with wholesale change`,
  heroLede: `Frosinone bounce straight back to Serie A after finishing 2nd in Serie B, just a point behind champions Venezia - an immediate return following their 2024/25 relegation. The club has changed hands too: Ipswich Town's American ownership group, <b>Clara Vista</b>, completed the purchase of 80% of the club from long-serving president <b>Maurizio Stirpe</b> on 1 July. On the pitch, coach <b>Massimiliano Alvini</b> has strengthened with a double swoop on Napoli for <b>Alessio Zerbin</b> and <b>Luis Hasa</b>, added free-agent experience in <b>Kevin Akpoguma</b>, and is closing in on Burnley's <b>Andreas Hountondji</b> for further attacking depth.`,
  metaRow: `<span>DECISION-MAKER: <b>Clara Vista ownership group</b></span> <span>HEAD COACH: <b>Massimiliano Alvini</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">Promoted</div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: `Hountondji remains the most advanced unconfirmed pursuit.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Modest fees + frees`, x: `Zerbin and Hasa fees undisclosed; Akpoguma arrived as a free agent.` },
  spendOut: { v: `None reported`, x: `No outgoing business reported as advanced this window.` },
  methodLegend: ``
};
