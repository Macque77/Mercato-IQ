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
  {name:"Bryan Reynolds", sub:"USMNT right-back completes move after strong Belgian spell", club:"KVC Westerlo", pos:"RB", fee:"€3.8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a four-year deal; presented alongside fellow new arrival Mayenda."},
  {name:"Nayef Aguerd", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 30 Jul 2026"},
  {name:"Martin Terrier", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 30 Jul 2026"},
  {name:"Nicolas Lemaître", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 26 Jun 2026"},
  {name:"Charlie", sub:"Unknown · Unknown · Unknown", club:"Unknown", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Stade Rennais announced signing per on-page entry"}
];

const CONFIRMED_OUT = [
  {name:"Glen Kamara", sub:"30 · CM · Finland", club:"QPR", pos:"CM", fee:"Loan with option to buy", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreed 2 Aug 2026 as the midfielder moves to the Championship."},
  {name:"Nordan Mukiele", sub:"Young attacker sent out for game time", club:"Montpellier HSC", pos:"RW", fee:"Loan", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Season-long loan without a purchase option to Ligue 2 side Montpellier; made 8 Ligue 1 appearances last season."},
  {name:"Mikayil Faye", sub:"Ex-Barcelona centre-back shipped out after failing to break through", club:"1. FC Nuremberg", pos:"CB", fee:"Loan", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loaned to the German second-division side after struggling in Ligue 1 since his 2024 arrival from Barcelona and an unsuccessful loan at Cremonese."},
  {name:"Jeremy Jacquet", sub:"21 · France · CB", club:"Liverpool", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departure logged in French records and reported as a move to Liverpool that brought Rennes a significant fee. No figure has been published by either club, so the fee should be treated as unconfirmed."},
  {name:"Breel Embolo", sub:"", club:"", pos:"", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 23 Jul 2026"}
];

const INCOMING = [
  {name:"Yerson Mosquera", sub:"Colombian centre-back linked as depth option", club:"Wolverhampton Wanderers", pos:"CB", report:"Rennes searching for a central defender", src:"On-page rumour", tier:3, fee:"Undisclosed", truth:50, prob:50, light:"y", trend:"up", note:"Described as one of several defensive targets rather than a firm negotiation; recent ACL history may affect Rennes' final decision.", lastSeen:"2026-08-06T14:21:37Z", baseProb:50},
  {name:"Charlie", sub:"", club:"", pos:"", report:"Stade Rennais announced signing", src:"Stade Rennais official", tier:2, fee:"", truth:100, prob:100, light:"g", trend:"flat", note:"Official announcement from club", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Aaron Cresswell", sub:"34 · England · LB", club:"West Ham United", pos:"LB", report:"Transfer to Stade Rennais validated by analysts", src:"LesViolets.Com", tier:3, fee:"Undisclosed", truth:80, prob:75, light:"g", trend:"flat", note:"After Foot commentary on deal structure suggests advanced talks", lastSeen:"2026-08-08T18:06:11Z", baseProb:75}
];

const OUTGOING = [
  {name:"Esteban Lepaul", sub:"Striker attracting outside interest but going nowhere this window", club:"Multiple suitors (unspecified)", pos:"ST", report:"Despite interest from elsewhere, Rennes holding", src:"On-page rumour", tier:3, fee:"N/A", truth:50, prob:30, light:"y", trend:"up", note:"Club is reportedly planning to cash in only in summer 2027 once his valuation peaks further.", lastSeen:"2026-08-06T14:21:37Z", baseProb:30},
  {name:"Abdelhamid Ait Boudlal", sub:"", club:"", pos:"", report:"Rennes received €23m offer for their prospect", src:"topmercato", tier:3, fee:"€23m", truth:70, prob:45, light:"y", trend:"flat", note:"Incoming offer reported", lastSeen:"2026-08-06T14:21:37Z", baseProb:45},
  {name:"Breel Embolo", sub:"27 · Switzerland · FW", club:"Stade Rennais", pos:"FW", report:"Not retained by Stade Rennais; attracting Italian interest", src:"MadeInFOOT", tier:3, fee:"Undisclosed", truth:75, prob:70, light:"g", trend:"flat", note:"Two Italian top clubs reportedly interested after being deemed surplus", lastSeen:"2026-08-08T18:06:11Z", baseProb:70},
  {name:"Ludovic Blas", sub:"25 · France · MF", club:"Stade Rennais", pos:"MF", report:"OM transfer interest but with reported complications", src:"But! Football Club", tier:3, fee:"Undisclosed", truth:60, prob:50, light:"y", trend:"flat", note:"Bad news reported in OM's pursuit; deal status unclear", lastSeen:"2026-08-08T18:06:11Z", baseProb:50}
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

const WATCHLIST = [];

const HUB = {
  "gffn-rennes": {l:"Get French Football News · Rennes", u:"https://www.getfootballnewsfrance.com/tag/rennes/"},
  ouestFranceYersonMosquera: {l:"Ouest-France", u:"https://www.ouest-france.fr/sport/football/mercato/"},
  footMercatoMartinTerrier: {l:"Foot Mercato", u:"https://www.footmercato.net"},
  tOPMercatoEstebanLepaul: {l:"TOP Mercato", u:"https://www.topmercato.com"},
  leTelegrammeMaxifootCharlieCresswell: {l:"Le Telegramme / Maxifoot", u:"https://news.maxifoot.fr/rennes/"},
  leParisienEliezerMayenda: {l:"Le Parisien", u:"https://www.leparisien.fr/sports/football/ligue-1/"},
  leTelegrammeBryanReynolds: {l:"Le Telegramme", u:"https://www.letelegramme.fr/sport/football/ligue-1/stade-rennais/"},
  leParisienAdrienThomasson: {l:"Le Parisien", u:"https://www.leparisien.fr/sports/football/ligue-1/mercato-rennes-le-lensois-adrien-thomasson-a-dit-oui-au-stade-rennais-14-05-2026-JWFNX7MIWVCOZBR4FBP5DT7E6I.php"},
  maxifootNordanMukiele: {l:"Maxifoot", u:"https://news.maxifoot.fr/rennes/mukiele-prete-a-montpellier-officiel-foot-461083.htm"},
  aFPviaFrance24EliezerMayenda: {l:"AFP via France 24", u:"https://www.france24.com/en/live-news/20260706-rennes-buy-young-striker-mayenda-from-sunderland"},
  footMercatoJeremyJacquet: {l:"Foot Mercato", u:"https://www.footmercato.net/club/stade-rennais-fc/tableau/"},
  topmercatoAbdelhamidAitBoudlal: {l:"topmercato", u:"https://www.topmercato.com/"},
  stadeRennaisCharlie: {l:"Stade Rennais", u:"https://news.google.com/rss/articles/CBMif0FVX3lxTFBDb3lSSVdLcE40WG5BWVB0T2FRbUkyY0NkdFltSTZqQTUzNWMwd1RFOVBvMkNGVWZDcW50QmFPcGtXYVVTYzhDNUVyZFFrY2dqV0JmMzJzT2puWVNRb0d1RnM4MHZCZFhlMmlxTXZlSTJtcFlEN0JNLWV6NjRQak0"},
  lesVioletsComAaronCresswell: {l:"LesViolets.Com", u:"https://news.google.com/rss/articles/CBMiywFBVV95cUxQazNMckhadjFTTVozdnBEN2RRY3B2T2dwUHRLMk1oNWt6aE84ZHBySU1ld2pSeHdEYXMyWlE5U2ZHXzNXWmk3WHFYTnlDSjlYaXZfdkR5dTVYdURzQXU0SU0ySWxOcl9xSnBVN0h2S2oxdHE3V1h5RWtfaVI3Wks5R2JsazlHRnFSSkhvTUZyM1lqZWh6NjNEdEhJclhFS0VpdVY4cjhrRTZua05rdUNRVHRydkZNcGpqRFhEYnEzbFhEUXJ4N3I1ZzJFdw"},
  madeInFOOTBreelEmbolo: {l:"MadeInFOOT", u:"https://news.google.com/rss/articles/CBMi-wFBVV95cUxOMTVpMnZjMnREVXJZa2RocTlnYTBCaGxLVi1GVnJWNndjcExoSXRVWlFUVkJOZDRaNmxGMlh4RHU5cXNWazExTC15Q19Hc0ZzNFBONDZaLVROU3JVQndyMElpNHhtTUhVZTVTT0hoc3YtcjJGcEFkdW50Y2FrcG5iREVCR0Y5Ykl0alFMX2N0R1FoTVdEOHpURTFPb1VXd2ZlRzhFOTg1WHJKRllrRTdVYUlkNzB6NWoxTzhDbm5Td1F6UmgteUJ4d2t2M1E1c1RNMHNrOTFXYmE1cHFQUndPYzVBS096SWFoQjVRSzJRMlA1Y0RmMTQwaDQtaw"},
  butFootballClubLudovicBlas: {l:"But! Football Club", u:"https://news.google.com/rss/articles/CBMisAFBVV95cUxQUjM0WWJROVBQTDFrb3puRW5CV0o2MjlkVW14MjhiSzhuUmM1Q1F6dnNqnpzjaTdWQXpBdlZBcUMyN2RfQnQtMFdUUm8yNmthODQ2bzV0OF9YQVFJSVgySzhKTzVaNzdJZWxRVXNwalNrYjBNQ1Y4Wmd1ZF9CdGNLTkJXY1h6azR6OUUxZ2dNWnROeF9fZGRLUlR3U3B0SzdUU2dwZ2IySWZtSV9zQUpFSw"}};

const LINKMAP = {
  "Charlie Cresswell": ["gffn-rennes", "leTelegrammeMaxifootCharlieCresswell"],
  "Eliezer Mayenda": ["gffn-rennes", "leParisienEliezerMayenda", "aFPviaFrance24EliezerMayenda"],
  "Gonçalo Oliveira": ["gffn-rennes"],
  "Adrien Thomasson": ["gffn-rennes", "leParisienAdrienThomasson"],
  "Glen Kamara": ["gffn-rennes"],
  "Nayef Aguerd": ["gffn-rennes"],
  "Martin Terrier": ["gffn-rennes", "footMercatoMartinTerrier"],
  "Nicolas Lemaître": ["gffn-rennes"],
  "Breel Embolo": ["gffn-rennes", "madeInFOOTBreelEmbolo"],
  "Yerson Mosquera": ["ouestFranceYersonMosquera"],
  "Esteban Lepaul": ["tOPMercatoEstebanLepaul"],
  "Bryan Reynolds": ["leTelegrammeBryanReynolds"],
  "Nordan Mukiele": ["maxifootNordanMukiele"],
  "Mikayil Faye": ["ouestFranceYersonMosquera"],
  "Jeremy Jacquet": ["footMercatoJeremyJacquet"],
  "Abdelhamid Ait Boudlal": ["topmercatoAbdelhamidAitBoudlal"],
  "Charlie": ["stadeRennaisCharlie"],
  "Aaron Cresswell": ["lesVioletsComAaronCresswell"],
  "Ludovic Blas": ["butFootballClubLudovicBlas"]};
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
