/* ============================================================
   MERCATO IQ · CLUB DATA · REAL MADRID · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Real Madrid", mono: "RM", slug: "real-madrid",
  primary: "#FEBE10", primaryBright: "#FFFFFF", primaryDeep: "#8A6B00",
  primaryRgb: "254,190,16",
  breadcrumb: ["Spain","La Liga"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "José Mourinho (appointed June 2026, replacing Álvaro Arbeloa)",
  dof: "José Ángel Sánchez (General Director) · Juni Calafat (Sporting Director)",
  europe: "UEFA Champions League (2026/27)",
  finish: "2nd La Liga (2025/26), 86pts - runners-up to Barcelona",
  owner: "Member-owned (Real Madrid CF), Florentino Pérez President",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.managingmadrid.com/", "https://www.realmadrid.com/en-US/news"],
  queries: ["Real Madrid transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T18:00:00Z",
  label: "Updated 03 Aug 2026 · Real Madrid - corrected from earlier draft"
};

const CONFIRMED_IN = [
  {name:"Ibrahima Konaté", sub:"27 · CB · France", to:"permanent from Liverpool", fee:"Undisclosed (multi-year deal)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 18 June 2026. Konaté leaves Liverpool on the expiry of his contract to sign a multi-year deal at the Bernabéu, giving Mourinho a ready-made Champions League centre-back."},
  {name:"Bernardo Silva", sub:"31 · CM · Portugal", to:"free transfer from Manchester City", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 13 June 2026. The City great joins on a free transfer after his contract expired, reuniting with José Mourinho's midfield plans ahead of the 2026 World Cup."},
  {name:"Denzel Dumfries", sub:"30 · RB · Netherlands", to:"permanent from Inter Milan", fee:"~£17.1m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Four-year deal bringing Champions League-winning experience at right-back."},
  {name:"Marc Cucurella", sub:"27 · LB · Spain", to:"permanent from Chelsea", fee:"~£51.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Six-year deal - a big-money left-back addition as Madrid rebuild the back line around Mourinho's system."},
  {name:"Carlos Espí", sub:"21 · FW · Spain", to:"permanent from Levante", fee:"~£21.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Five-year contract for the young forward, one of the standout performers in La Liga last season."}
];

const CONFIRMED_OUT = [
  {name:"Fran García", sub:"26 · LB · Spain", club:"Real Betis", pos:"LB", fee:"~£3.4m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Made surplus by the Cucurella signing; joins Betis on a permanent deal."},
  {name:"Dani Ceballos", sub:"29 · CM · Spain", club:"Released - free agent", pos:"CM", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, RELEASED", note:"Contract expired; leaves the Bernabéu as a free agent."},
  {name:"Dani Carvajal", sub:"34 · RB · Spain", club:"Released - free agent", pos:"RB", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, RELEASED", note:"Long-serving right-back leaves on the expiry of his contract, succeeded in the role by Dumfries."},
  {name:"David Alaba", sub:"33 · CB · Austria", club:"Released - free agent", pos:"CB", fee:"Free (released)", free:true, status:"done", statusTxt:"DONE, RELEASED", note:"Contract expired; departs after a spell disrupted by long-term injuries."}
];

const INCOMING = [];

const OUTGOING = [
  {name:"Vinícius Júnior", sub:"26 · LW · Brazil", club:"Arsenal (interest)", pos:"LW", report:"02 Aug 2026", src:"FootballTransfers / TeamTalk", tier:2, fee:"TBD - loan or permanent structure discussed", truth:55, prob:30, light:"y", trend:"up", note:"CORRECTED 03 Aug: an earlier version of this record wrongly logged a completed €500m Vinícius sale to Al-Nassr - that never happened. The real, live story is Arsenal's interest, with reports of a partial agreement on structure and Vinícius reportedly softening his stance on a Premier League move after Mourinho's arrival reshuffled his standing in the side. Nothing signed; treat as an ongoing saga, not a done deal."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Five permanent/free arrivals confirmed</b>: Konaté, Bernardo Silva, Dumfries, Cucurella and Espí give Mourinho a rebuilt spine before the window's final month."},
  {ar:"⬆", t:"<b>Vinícius-Arsenal momentum</b>: reports of a partial agreement on personal terms mark the clearest sign yet that a move away is being seriously discussed."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Real Madrid's summer business is essentially a defensive and midfield rebuild: Konaté, Cucurella and Dumfries overhaul the back four, while Bernardo Silva adds a ready-made World Cup-year midfielder."},
  {ar:"✦", t:"Four squad players (Ceballos, Carvajal, Alaba, Fran García) have left as contracts expired or the squad was reshaped, freeing wages ahead of any Vinícius decision."}
];

const IGNORE = [
  {ar:"✕", t:"<b>Ferran Torres to Real Madrid, €55m 'done deal'</b>: this appeared in an earlier version of this record and was fabricated - Torres has remained at Barcelona throughout this window, which as of 3 Aug 2026 is publicly saying he is not for sale."},
  {ar:"✕", t:"<b>Vinícius Júnior to Al-Nassr for €500m, 'done deal'</b>: also fabricated in an earlier version of this record. Vinícius has not left Real Madrid; the genuine story this window is Arsenal interest, not a completed Saudi transfer."}
];

const POSITIONS = [
  {p:"Left wing / Vinícius succession planning", w:55, x:"If the Arsenal saga concludes with a sale, Madrid will need a direct wide replacement before deadline day."}
];

const WATCHLIST = [
  {name:"Vinícius Júnior", club:"Arsenal (interest)", pos:"LW", dir:"out", age:"~1 day", tier:2, note:"Reports of a partial personal-terms agreement; no club-to-club fee agreed. Genuinely live story, not resolved."}
];

const HUB = {
  "espn-konate": {l:"ESPN - Konaté completes Real Madrid move", u:"https://www.espn.com/soccer/story/_/id/48956684/ibrahima-konate-completes-switch-real-madrid-liverpool"},
  "skysports-bsilva": {l:"Sky Sports - Bernardo Silva signs for Real Madrid", u:"https://www.skysports.com/football/news/11095/13554908/bernardo-silva-real-madrid-sign-manchester-city-midfielder-on-free-transfer-as-jose-mourinho-impact-continues"},
  "teamtalk-rmdone": {l:"TeamTalk - every completed Real Madrid transfer, summer 2026", u:"https://www.teamtalk.com/news/every-completed-real-madrid-transfer-summer-2026-signings-sales-loans"},
  "managingmadrid-frangarcia": {l:"Managing Madrid - Fran García/Betis fee agreement", u:"https://www.managingmadrid.com/109880/betis-real-madrid-fran-garcia-2026-news"},
  "footballtransfers-vinijr": {l:"FootballTransfers - Vinícius Jr to Arsenal reporting", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/vinicius-jr-to-arsenal-real-madrid-quietly-unlock-transfer-possibility"},
  "barcablaugranes-torres": {l:"Barca Blaugranes - Ferran Torres not for sale (3 Aug 2026)", u:"https://www.barcablaugranes.com/barcelona-news/128091/fc-barcelona-news-3-august-2026-ferran-torres-not-for-sale-joao-cancelo-signing-very-close"}
};

const LINKMAP = {
  "Ibrahima Konaté": ["espn-konate"],
  "Bernardo Silva": ["skysports-bsilva"],
  "Denzel Dumfries": ["teamtalk-rmdone"],
  "Marc Cucurella": ["teamtalk-rmdone"],
  "Carlos Espí": ["teamtalk-rmdone"],
  "Fran García": ["managingmadrid-frangarcia"],
  "Dani Ceballos": ["teamtalk-rmdone"],
  "Dani Carvajal": ["teamtalk-rmdone"],
  "David Alaba": ["teamtalk-rmdone"],
  "Vinícius Júnior": ["footballtransfers-vinijr"]
};
const WL_LINKMAP = {
  "Vinícius Júnior": ["footballtransfers-vinijr"]
};

const PROSE = {
  heroH2: `Mourinho's rebuilt spine, and the unresolved Vinícius question`,
  heroLede: `Real Madrid's summer has been a genuine defensive and midfield reconstruction under new coach <b>José Mourinho</b>: <b>Ibrahima Konaté</b> and <b>Marc Cucurella</b> arrive to remake the back four alongside <b>Denzel Dumfries</b>, while <b>Bernardo Silva</b> joins for free in midfield. The one unresolved thread is <b>Vinícius Júnior</b>, who is genuinely being talked about in connection with Arsenal - but nothing is signed.`,
  metaRow: `<span>COACH: <b>José Mourinho</b></span> <span>DIRECTOR: <b>José Ángel Sánchez</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">Confirmed In</div><div class="v">5</div></div><div class="stat"><div class="l">Confirmed Out</div><div class="v">4</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `The Vinícius Júnior situation is the one live, unresolved thread of the window - watch this space.`,
  pricingBanner: ``,
  excludedNote: `Two fabricated stories (Ferran Torres "signing", Vinícius "€500m Al-Nassr sale") from an earlier draft of this page have been corrected and are logged in Ignored below for transparency.`,
  spendIn: { v: `~£93m committed`, x: `Konaté, Bernardo Silva, Dumfries, Cucurella, Espí` },
  spendOut: { v: `~£3.4m received`, x: `Fran García fee; Ceballos, Carvajal, Alaba left as free agents` },
  methodLegend: ``
};