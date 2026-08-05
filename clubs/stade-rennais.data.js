/* ============================================================
   MERCATO IQ · CLUB DATA · STADE RENNAIS FC · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Stade Rennais FC", mono: "SRFC", slug: "stade-rennais",
  primary: "#DA020E", primaryBright: "#FF4C4C", primaryDeep: "#1A1A1A",
  primaryRgb: "218,2,14",
  breadcrumb: ["France","Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Franck Haise (appointed 18 Feb 2026, succeeding the sacked Habib Beye)",
  dof: "Loïc Désiré (Technical Director)",
  europe: "UEFA Europa League (2026/27)",
  finish: "6th Ligue 1 (2025/26)",
  owner: "Artémis (François Pinault's holding company); Arnaud Pouille (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/rennes/"],
  queries: ["Stade Rennais transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Stade Rennais FC"
};

const CONFIRMED_IN = [
  {name:"Charlie Cresswell", sub:"23 · CB · England", to:"permanent from Toulouse FC", fee:"€25m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreed 1 Aug 2026, the biggest fee of Rennes' window so far."},
  {name:"Eliezer Mayenda", sub:"21 · ST · Spain", to:"permanent from Sunderland", fee:"€25m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 4 Jul 2026, a statement of intent up front."},
  {name:"Gonçalo Oliveira", sub:"20 · CB · Portugal", to:"permanent from Benfica B", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 22 Jun 2026, a development centre-back signing."},
  {name:"Adrien Thomasson", sub:"29 · AM · France", to:"free transfer from RC Lens", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 28 May 2026 on a three-year deal after leaving the Coupe de France winners as a free agent."},
  {name:"Bryan Reynolds", sub:"USMNT right-back completes move after strong Belgian spell", club:"KVC Westerlo", pos:"RB", fee:"€3.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a four-year deal; presented alongside fellow new arrival Mayenda."}
];

const CONFIRMED_OUT = [
  {name:"Glen Kamara", sub:"30 · CM · Finland", club:"QPR", pos:"CM", fee:"Loan with option to buy", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreed 2 Aug 2026 as the midfielder moves to the Championship."},
  {name:"Nordan Mukiele", sub:"Young attacker sent out for game time", club:"Montpellier HSC", pos:"RW", fee:"Loan", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan without a purchase option to Ligue 2 side Montpellier; made 8 Ligue 1 appearances last season."},
  {name:"Mikayil Faye", sub:"Ex-Barcelona centre-back shipped out after failing to break through", club:"1. FC Nuremberg", pos:"CB", fee:"Loan", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loaned to the German second-division side after struggling in Ligue 1 since his 2024 arrival from Barcelona and an unsuccessful loan at Cremonese."}
];

const INCOMING = [
  {name:"Nayef Aguerd", sub:"29 · CB · Morocco", club:"Olympique de Marseille", pos:"CB", report:"30 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:50, prob:26, light:"o", trend:"flat", note:"Rennes are exploring bringing the defender back to the club he left in 2021.", lastSeen:"2026-08-04T19:10:50Z", baseProb:26},
  {name:"Martin Terrier", sub:"29 · FW · France", club:"Bayer Leverkusen", pos:"FW", report:"30 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:52, prob:30, light:"y", trend:"flat", note:"Rennes are competing with Marseille to re-sign the former club captain.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Nicolas Lemaître", sub:"29 · CM · France", club:"ES Troyes AC", pos:"CM", report:"26 Jun 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:55, prob:42, light:"y", trend:"up", note:"Reported close to completing his move ahead of the new season.", lastSeen:"2026-08-04T19:10:50Z", baseProb:42},
  {name:"Yerson Mosquera", sub:"Colombian centre-back linked as depth option", club:"Wolverhampton Wanderers", pos:"CB", report:"Rennes are searching for a central defender to compete for a starting spot ahead of their Europa League campaign, with Wolves' Mosquera among options considered, though the player is still building fitness after a serious ACL injury.", src:"Ouest-France", tier:3, fee:"Undisclosed", truth:45, prob:25, light:"o", trend:"flat", note:"Described as one of several defensive targets rather than a firm negotiation; recent ACL history may affect Rennes' final decision.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];

const OUTGOING = [
  {name:"Breel Embolo", sub:"29 · ST · Switzerland", club:"Rennes", pos:"ST", report:"23 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:48, prob:22, light:"o", trend:"flat", note:"Hull City and Ipswich Town have both been credited with interest as Rennes look to trim the forward line.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Esteban Lepaul", sub:"Striker attracting outside interest but going nowhere this window", club:"Multiple suitors (unspecified)", pos:"ST", report:"Despite interest from elsewhere, Rennes are holding firm on Lepaul with no active negotiations underway; a bigger sale is anticipated for a future window rather than this summer.", src:"TOP Mercato", tier:3, fee:"N/A", truth:60, prob:10, light:"r", trend:"flat", note:"Club is reportedly planning to cash in only in summer 2027 once his valuation peaks further.", lastSeen:"2026-08-04T19:10:50Z", baseProb:10}
];

const RISERS = [
  {ar:"⬆", t:"<b>Cresswell arrives from Toulouse</b>: €25m fee for the England centre-back headlines the incoming business."},
  {ar:"⬆", t:"<b>Estéban Lepaul extends to 2030</b>: the striker commits his long-term future to the club (25 Jun)."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Four confirmed arrivals and a Europa League campaign to prepare for - Franck Haise's rebuild is well underway since replacing Habib Beye in February."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Attacking depth", w:45, x:"Aguerd and Terrier both linked as reunions with former players, competing directly with Marseille for both."}
];

const WATCHLIST = [
  {name:"Martin Terrier", club:"Bayer Leverkusen", pos:"FW", dir:"in", age:"~4 days", tier:2, note:"Rennes and Marseille both chasing the former club captain."}
];

const HUB = {
  "gffn-rennes": {l:"Get French Football News · Rennes", u:"https://www.getfootballnewsfrance.com/tag/rennes/"},
  ouestFranceYersonMosquera: {l:"Ouest-France", u:"https://www.ouest-france.fr/sport/football/mercato/"},
  footMercatoMartinTerrier: {l:"Foot Mercato", u:"https://www.footmercato.net"},
  tOPMercatoEstebanLepaul: {l:"TOP Mercato", u:"https://www.topmercato.com"},
  leTelegrammeMaxifootCharlieCresswell: {l:"Le Telegramme / Maxifoot", u:"https://news.maxifoot.fr/rennes/"},
  leParisienEliezerMayenda: {l:"Le Parisien", u:"https://www.leparisien.fr/sports/football/ligue-1/"},
  leTelegrammeBryanReynolds: {l:"Le Telegramme", u:"https://www.letelegramme.fr/sport/football/ligue-1/stade-rennais/"},
  leParisienAdrienThomasson: {l:"Le Parisien", u:"https://www.leparisien.fr/sports/football/ligue-1/mercato-rennes-le-lensois-adrien-thomasson-a-dit-oui-au-stade-rennais-14-05-2026-JWFNX7MIWVCOZBR4FBP5DT7E6I.php"},
  maxifootNordanMukiele: {l:"Maxifoot", u:"https://news.maxifoot.fr/rennes/mukiele-prete-a-montpellier-officiel-foot-461083.htm"}};

const LINKMAP = {
  "Charlie Cresswell": ["gffn-rennes", "leTelegrammeMaxifootCharlieCresswell"],
  "Eliezer Mayenda": ["gffn-rennes", "leParisienEliezerMayenda"],
  "Gonçalo Oliveira": ["gffn-rennes"],
  "Adrien Thomasson": ["gffn-rennes", "leParisienAdrienThomasson"],
  "Glen Kamara": ["gffn-rennes"],
  "Nayef Aguerd": ["gffn-rennes"],
  "Martin Terrier": ["gffn-rennes", "footMercatoMartinTerrier"],
  "Nicolas Lemaître": ["gffn-rennes"],
  "Breel Embolo": ["gffn-rennes"],
  "Yerson Mosquera": ["ouestFranceYersonMosquera"],
  "Esteban Lepaul": ["tOPMercatoEstebanLepaul"],
  "Bryan Reynolds": ["leTelegrammeBryanReynolds"],
  "Nordan Mukiele": ["maxifootNordanMukiele"],
  "Mikayil Faye": ["ouestFranceYersonMosquera"]};
const WL_LINKMAP = {
  "Martin Terrier": ["gffn-rennes"]
};

const PROSE = {
  heroH2: `Haise's Rennes go big early: four confirmed signings before August`,
  heroLede: `Six months into <b>Franck Haise</b>'s tenure, Rennes have been the busiest of the mid-table Ligue 1 clubs this summer. <b>Charlie Cresswell</b> (€25m from Toulouse) and <b>Eliezer Mayenda</b> (€25m from Sunderland) headline a rebuild that also brought back free agent <b>Adrien Thomasson</b> from Coupe de France winners Lens, while a reunion with former captain <b>Martin Terrier</b> is being contested with Marseille.`,
  metaRow: `<span>DECISION-MAKER: <b>Arnaud Pouille</b> (President)</span> <span>HEAD COACH: <b>Franck Haise</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">6<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">Europa League</div></div><div class="stat gold"><div class="l">Confirmed In/Out</div><div class="v">4 / 1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Nicolas Lemaître (Troyes) reported close to a deal; Terrier and Aguerd both remain live, contested with Marseille.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Breel Embolo is drawing Premier League and Championship interest as Rennes reshape their forward options.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€50m+ committed`, x: `Cresswell and Mayenda alone account for €50m of incoming fees.` },
  spendOut: { v: `Modest so far`, x: `Kamara's loan exit is the only confirmed departure; Embolo's future remains open.` },
  methodLegend: ``
};
