/* ============================================================
   MERCATO IQ · CLUB DATA · HAMBURGER SV · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Hamburger SV", mono: "HSV", slug: "hamburger-sv",
  primary: "#00295B", primaryBright: "#1E5FBF", primaryDeep: "#001433",
  primaryRgb: "0,41,91",
  breadcrumb: ["Germany","Bundesliga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Merlin Polzin",
  dof: "Kathleen Krüger (Sporting Director)",
  europe: "None (2025/26 11th - no European qualification)",
  finish: "11th Bundesliga (2025/26)",
  owner: "Member-owned (Hamburger SV e.V.); Marcell Jansen (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.hsv.de/en/"],
  queries: ["Hamburger SV transfer news 2026", "Patson Daka HSV", "HSV Neuzugang Sommer 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Hamburger SV"
};

const CONFIRMED_IN = [
  {name:"Patson Daka", sub:"27 · ST · Zambia", to:"free from Leicester City", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 22 Jul: Zambian international striker signs on a free transfer after his Leicester contract expired. Sporting director Kathleen Krüger: 'He brings high commitment with and without the ball.' Daka cost Leicester ~€30m from RB Salzburg in 2021, making this a notable free upgrade for a promoted-era HSV squad settling into its first Bundesliga campaigns back in the top flight."},
  {name:"Martin Adeline", sub:"22 · CM · France", to:"permanent from Troyes", fee:"~€4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"French midfielder signed for squad depth."},
  {name:"Kofi Amoako", sub:"21 · CM/W", to:"permanent from Dynamo Dresden", fee:"~€1.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young attacking midfielder brought in from 2. Bundesliga."},
  {name:"Bilal Nadir", sub:"Moroccan midfielder", club:"Olympique de Marseille", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"22-year-old signed 24 July 2026 on a long-term deal and trained with the squad the same day."}
];

const CONFIRMED_OUT = [
  {name:"Ransford Königsdörffer", sub:"24 · W · Germany", to:"free to 1. FSV Mainz 05", club:"1. FSV Mainz 05", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired; winger departs on a free transfer for a fellow Bundesliga side."},
  {name:"Robert Glatzel", sub:"32 · ST · Germany", to:"permanent to VfL Wolfsburg", club:"VfL Wolfsburg", fee:"~€1.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Veteran striker and club's all-time modern-era top scorer departs for Wolfsburg."},
  {name:"Vildan Kardesler", sub:"Offensive midfielder", club:"Released (contract not renewed)", pos:"CAM", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"28-year-old's contract not renewed as of 7 July 2026; leaves with 6 goals in 35 competitive appearances for HSV."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Daka arrives on a free</b>: a significant upgrade at no fee following his Leicester exit, directly replacing Glatzel's goals."}
];

const FALLERS = [];

const NEW = [];

const IGNORE = [];

const POSITIONS = [
  {p:"Striker", w:30, x:"Daka's free arrival directly addresses the goals lost with Glatzel's departure to Wolfsburg."}
];

const WATCHLIST = [];

const HUB = {
  hsv: {l:"HSV Official", u:"https://www.hsv.de/en/"},
  newsde: {l:"news.de", u:"https://www.news.de/sport/859647837/transferticker-fussball-bundesliga-sommer-2026-hsv-daka-wechsel-zugaenge-abgaenge-saison-26-27-adeyemi-bvb-woeber-schalke/1/"},
  hSVdeofficialPatsonDaka: {l:"HSV.de (official)", u:"https://www.hsv.de/news"},
  bundesligacomBilalNadir: {l:"Bundesliga.com", u:"https://www.bundesliga.com/en/bundesliga/clubs/hamburger-sv/news"}};

const LINKMAP = {
  "Patson Daka": ["hsv","newsde", "hSVdeofficialPatsonDaka"],
  "Bilal Nadir": ["bundesligacomBilalNadir"],
  "Martin Adeline": ["bundesligacomBilalNadir"],
  "Kofi Amoako": ["hSVdeofficialPatsonDaka"],
  "Vildan Kardesler": ["hSVdeofficialPatsonDaka"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Daka arrives free of charge as HSV settle into life back in the Bundesliga`,
  heroLede: `Merlin Polzin's Hamburger SV, established in the top flight after an 11th-place finish in their return season, have brought in Zambian international striker <b>Patson Daka</b> on a free transfer following his Leicester City release - a notable upgrade at no cost that directly replaces departing club great <b>Robert Glatzel</b>, who has joined Wolfsburg. Sporting director Kathleen Krüger has also added midfield depth in Frenchman Martin Adeline and 2. Bundesliga import Kofi Amoako.`,
  metaRow: `<span>DECISION-MAKER: <b>Kathleen Krüger</b> (Sporting Director)</span> <span>HEAD COACH: <b>Merlin Polzin</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">11<small>th</small></div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">3</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No further departures reported beyond the confirmed business.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€5.8m + one free`, x: `Adeline (€4m) and Amoako (€1.8m) confirmed; Daka signed free.` },
  spendOut: { v: `~€1.5m banked`, x: `Glatzel's move to Wolfsburg is the only disclosed fee; Königsdörffer left free.` },
  methodLegend: ``
};
