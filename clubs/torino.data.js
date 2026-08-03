/* ============================================================
   MERCATO IQ · CLUB DATA · TORINO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Torino", mono: "TOR", slug: "torino",
  primary: "#7A1F2B", primaryBright: "#B0475A", primaryDeep: "#4A121A",
  primaryRgb: "122,31,43",
  breadcrumb: ["Italy","Serie A"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Roberto D'Aversa (since Feb 2026, after Marco Baroni's sacking)",
  dof: "Gianluca Petrachi (Sporting Director, reinstated after Davide Vagnati's exit)",
  europe: "None for 2026/27",
  finish: "13th Serie A (2025/26, 45 pts - level on points with Parma)",
  owner: "Urbano Cairo (President)",
  window: "Opens 1 Jul, closes 1 Sep 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://football-italia.net/category/teams/torino/"],
  queries: ["Torino transfer news 2026", "Torino Perri Ngonge Comuzzo", "Torino D'Aversa Petrachi signings"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Torino"
};

const CONFIRMED_IN = [];

const CONFIRMED_OUT = [];

const INCOMING = [
  {name:"Lucas Perri", sub:"27 · GK · Brazil", club:"Leeds United", pos:"GK", report:"24 Jul 2026", src:"Football Italia", tier:2, fee:"Undisclosed", truth:62, prob:48, light:"y", trend:"up", note:"Described as 'closing in' on the move; Leeds' medical has been delayed only because the English club is finalising a replacement (James Trafford), suggesting the Torino side of the deal is essentially agreed."},
  {name:"Cyril Ngonge", sub:"24 · W · Belgium", club:"Napoli", pos:"W", report:"14 Jul 2026", src:"FootItalia.com", tier:2, fee:"Loan with €8m option to buy", truth:55, prob:38, light:"y", trend:"up", note:"Advanced talks with Ngonge having already approved the move and skipped Napoli pre-season training; Club Brugge and other European sides were interested but the player prioritised Torino."},
  {name:"Pietro Comuzzo", sub:"21 · CB · Italy", club:"Fiorentina", pos:"CB", report:"26 Jul 2026", src:"Football Italia", tier:2, fee:"Undisclosed", truth:52, prob:35, light:"y", trend:"up", note:"Advanced negotiations reported for the young Fiorentina centre-back."},
  {name:"Eray Comert", sub:"27 · CB · Switzerland", club:"Free agent", pos:"CB", report:"26 Jul 2026", src:"Football Italia", tier:3, fee:"Free", truth:48, prob:30, light:"y", trend:"flat", note:"Free-agent centre-back in advanced talks after leaving his previous club."},
  {name:"Dominik Livakovic", sub:"31 · GK · Croatia", club:"Fenerbahce", pos:"GK", report:"21 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:42, prob:20, light:"o", trend:"flat", note:"Both Torino and Dinamo Zagreb have held talks with the goalkeeper's agent - one of three names Torino are exploring for the No.1 shirt alongside Perri and Ramsdale."},
  {name:"Aaron Ramsdale", sub:"28 · GK · England", club:"Southampton", pos:"GK", report:"14 Jul 2026", src:"Football Italia", tier:3, fee:"Undisclosed", truth:40, prob:18, light:"o", trend:"flat", note:"Reportedly pushed for by Torino, but appears to be the least advanced of the club's three goalkeeper targets given Perri's more developed situation."}
];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Lucas Perri pursuit advances</b>: goalkeeper move described as 'closing in', with Leeds' own replacement search the only holdup."},
  {ar:"⬆", t:"<b>Cyril Ngonge talks progress</b>: winger has already approved the move and skipped Napoli training."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Torino are shopping for a new No.1 with three separate goalkeeper names in play (Perri, Livakovic, Ramsdale) alongside genuine progress on Ngonge and defensive reinforcements Comuzzo and Comert."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Goalkeeper", w:65, x:"Three separate names (Perri, Livakovic, Ramsdale) are in play for the same shirt - Perri appears the most advanced."},
  {p:"Wide attack", w:45, x:"Ngonge is a genuinely advancing loan-to-buy pursuit from Napoli."},
  {p:"Centre-back depth", w:35, x:"Both Comuzzo and Comert are in parallel advanced talks."}
];

const WATCHLIST = [
  {name:"Lucas Perri", club:"Leeds United", pos:"GK", dir:"in", age:"~10 days", tier:2, note:"Described as closing in; only Leeds' own goalkeeper business is delaying the medical."},
  {name:"Cyril Ngonge", club:"Napoli", pos:"W", dir:"in", age:"~3 weeks", tier:2, note:"Player has approved the move and skipped Napoli's pre-season training."}
];

const HUB = {
  footballItalia: {l:"Football Italia · Torino", u:"https://football-italia.net/category/teams/torino/"},
  footitalia: {l:"FootItalia.com", u:"https://www.footitalia.com/"}
};

const LINKMAP = {
  "Lucas Perri": ["footballItalia"],
  "Cyril Ngonge": ["footitalia"],
  "Pietro Comuzzo": ["footballItalia"],
  "Eray Comert": ["footballItalia"],
  "Dominik Livakovic": ["footballItalia"],
  "Aaron Ramsdale": ["footballItalia"]
};
const WL_LINKMAP = {
  "Lucas Perri": ["footballItalia"],
  "Cyril Ngonge": ["footitalia"]
};

const PROSE = {
  heroH2: `D'Aversa's rebuild: a three-way goalkeeper hunt and genuine progress on Ngonge`,
  heroLede: `Torino head into 2026/27 under <b>Roberto D'Aversa</b>, who took over from the sacked Marco Baroni in February, with <b>Gianluca Petrachi</b> reinstated as sporting director after Davide Vagnati's exit. The club are shopping hard for a new No.1, with <b>Lucas Perri</b> (Leeds United), <b>Dominik Livakovic</b> (Fenerbahce) and <b>Aaron Ramsdale</b> (Southampton) all in play - Perri's move looks the most advanced, held up only by Leeds finalising their own replacement. In attack, Napoli winger <b>Cyril Ngonge</b> has already approved a loan-to-buy move and skipped pre-season training in Naples, while <b>Pietro Comuzzo</b> and free agent <b>Eray Comert</b> are both in parallel talks to strengthen the back line.`,
  metaRow: `<span>DECISION-MAKER: <b>Gianluca Petrachi</b> (Sporting Director)</span> <span>HEAD COACH: <b>Roberto D'Aversa</b></span> <span>WINDOW: <b>1 Jul – 1 Sep</b></span>`,
  stats: `<div class="stat"><div class="l">2025/26 Finish</div><div class="v">13<small>th</small></div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat"><div class="l">Confirmed In</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `No signings officially confirmed yet; Perri and Ngonge are the most advanced pursuits.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `TBD - none confirmed`, x: `Perri, Ngonge, Comuzzo and Comert are all advancing but unsigned.` },
  spendOut: { v: `None reported`, x: `No outgoing business reported as advanced this window.` },
  methodLegend: ``
};
