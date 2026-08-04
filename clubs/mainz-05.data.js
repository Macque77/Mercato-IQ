/* ============================================================
   MERCATO IQ · CLUB DATA · 1. FSV MAINZ 05 · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "1. FSV Mainz 05", mono: "M05", slug: "mainz-05",
  primary: "#C3141E", primaryBright: "#FF5A62", primaryDeep: "#6E0A10",
  primaryRgb: "195,20,30",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Urs Fischer",
  dof: "Christian Heidel (CEO)",
  europe: "None (2025/26 10th - no European qualification)",
  finish: "10th Bundesliga (2025/26)",
  owner: "Member-owned (1. FSV Mainz 05 e.V.)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.getfootballnewsgermany.com/"],
  queries: ["Mainz 05 transfer news 2026", "Stefan Posch Mainz Como", "Nadiem Amiri Mainz"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · 1. FSV Mainz 05"
};

const CONFIRMED_IN = [
  {name:"Fabio Gruber", sub:"21 · AM · Germany", to:"permanent from 1. FC Nürnberg", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Attacking midfielder signed for creative depth."},
  {name:"Ransford Königsdörffer", sub:"24 · W · Germany", to:"free from Hamburger SV", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Winger arrives on a free transfer after his HSV contract expired."},
  {name:"Eric Martel", sub:"20 · CM", to:"free from 1. FC Köln", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young midfielder signed as squad depth."},
  {name:"Otto Ruoppi", sub:"Finnish attacking midfielder", club:"KuPS (Kuopion Palloseura)", pos:"CAM", fee:"~€1.3m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"20-year-old signed for a fee described as a KuPS all-time record sale; scored on debut in an 11-0 friendly win."}
];

const CONFIRMED_OUT = [
  {name:"Nikolas Veratschnig", sub:"20 · W · Austria", to:"permanent to RB Salzburg", club:"RB Salzburg", fee:"~€3.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young Austrian winger's sale is Mainz's largest confirmed fee banked this summer."},
  {name:"Daniel Batz", sub:"32 · GK · Germany", to:"free to Borussia Mönchengladbach", club:"Borussia Mönchengladbach", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; experienced goalkeeper moves to Gladbach as depth."},
  {name:"Maxim Leitsch", sub:"27 · CB", to:"free agent", club:"free agent", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; centre-back departs as a free agent."}
];

const INCOMING = [
  {name:"Stefan Posch", sub:"29 · CB/RB · Austria", club:"Como 1907", pos:"CB/RB", report:"3 Aug 2026", src:"Get German Football News", tier:2, fee:"Fee TBC (Como paid ~€5.5m for him in Jan)", truth:68, prob:55, light:"g", trend:"up", note:"Mainz are pushing to make permanent a hugely successful six-month loan (started 16 straight Bundesliga starts, key to their Conference League run). CEO Christian Heidel: 'This is definitely still on the table... we would like to make this happen.' Posch himself wants to return; fee and structure still to be agreed with Como, who are yet to have him report back for pre-season.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55}
];

const OUTGOING = [
  {name:"Paul Nebel", sub:"Attacking midfielder/winger, will not extend contract", club:"Undisclosed suitors", pos:"CAM", report:"Nebel has told Mainz he does not want to extend his expiring contract, opening the door to a summer departure, per sporting director Christian Heidel.", src:"Christian Heidel via Yahoo Sports (Mainz sporting director)", tier:2, fee:"N/A - contract situation", truth:70, prob:45, light:"y", trend:"flat", note:"No concrete destination club named yet; situation described as an 'agreement' between player and club over a likely exit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45}
];

const RISERS = [
  {ar:"⬆", t:"<b>Posch return pursued</b>: Mainz prepared to 'stretch financial limits' to make last season's loan star permanent, with the player himself keen to return."},
  {ar:"⬆", t:"<b>Amiri commits his future</b>: after weeks of speculation, the midfielder publicly confirms he is staying despite 'a lot of offers.'"}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"<b>Nadiem Amiri stays</b>: announced 1 Aug at the club's Austrian training camp - 'I did have a lot of offers, but my family and I decided that I would definitely stay here' - despite reported interest from RB Leipzig. Contract runs to 2028."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Centre-back / right-back", w:35, x:"Posch's potential permanent return is the position to watch after a hugely productive loan spell."}
];

const WATCHLIST = [
  {name:"Nadiem Amiri", club:"1. FSV Mainz 05", pos:"CM/AM", dir:"in", age:"~2 days", tier:1, note:"Publicly committed to staying at Mainz through 2028 despite interest from RB Leipzig and other offers."}
];

const HUB = {
  gfn: {l:"Get German Football News · Posch", u:"https://www.getfootballnewsgermany.com/2026/stefan-posch-mainz-como/"},
  gfnamiri: {l:"Get German Football News · Amiri", u:"https://www.getfootballnewsgermany.com/2026/nadiem-amiri-mainz-promise/"},
  skySportsGermanyStefanPosch: {l:"Sky Sports Germany", u:"https://www.skysports.com/football/news"},
  yahooSportsPaulNebel: {l:"Yahoo Sports", u:"https://sports.yahoo.com/"},
  zeitdeSportschauRansfordKnigsdrffer: {l:"Zeit.de / Sportschau", u:"https://www.zeit.de/news"},
  sportschauEricMartel: {l:"Sportschau", u:"https://www.sportschau.de/"},
  allgemeineZeitungOttoRuoppi: {l:"Allgemeine Zeitung", u:"https://www.allgemeine-zeitung.de/"}};

const LINKMAP = {
  "Stefan Posch": ["gfn", "skySportsGermanyStefanPosch"],
  "Nadiem Amiri": ["gfnamiri"],
  "Paul Nebel": ["yahooSportsPaulNebel"],
  "Ransford Königsdörffer": ["zeitdeSportschauRansfordKnigsdrffer"],
  "Eric Martel": ["sportschauEricMartel"],
  "Otto Ruoppi": ["allgemeineZeitungOttoRuoppi"]};
const WL_LINKMAP = {
  "Nadiem Amiri": ["gfnamiri"]
};

const PROSE = {
  heroH2: `Amiri commits, Posch pursued: Mainz's window is about keeping and re-signing key faces`,
  heroLede: `Urs Fischer's Mainz, coming off a 10th-place finish without European football, have spent the window mostly on retention. Midfielder <b>Nadiem Amiri</b> publicly ended transfer speculation on 1 August, committing his future through 2028 despite interest from RB Leipzig. The bigger financial story is defender <b>Stefan Posch</b>: after a superb loan spell that helped fuel last season's Conference League run, CEO Christian Heidel says the club are ready to 'stretch financial limits' to sign him permanently from Como.`,
  metaRow: `<span>DECISION-MAKER: <b>Christian Heidel</b> (CEO)</span> <span>HEAD COACH: <b>Urs Fischer</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">10<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">3</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">3</div></div>`,
  positionPanel: ``,
  confirmedPending: `<b>Pending:</b> Stefan Posch's permanent transfer from Como remains under negotiation - both sides want it done, but fee and structure are unresolved.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No rumoured departures beyond the confirmed business reported at this stage.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€3.5m + two frees`, x: `Gruber (€3.5m) confirmed; Königsdörffer and Martel arrive free.` },
  spendOut: { v: `~€3.5m banked`, x: `Veratschnig's sale to Salzburg is the only disclosed fee; Batz and Leitsch left free.` },
  methodLegend: ``
};
