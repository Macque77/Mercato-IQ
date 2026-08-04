/* ============================================================
   MERCATO IQ · CLUB DATA · OLYMPIQUE LYONNAIS · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Olympique Lyonnais",
  mono: "OL",
  slug: "olympique-lyon",
  primary: "#0056A8", primaryBright: "#5CA9FF", primaryDeep: "#00325F",
  primaryRgb: "0,86,168",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Paulo Fonseca (contract to Jun 2027; returned in December 2025 after a nine-month suspension from the DNCG financial oversight body)",
  dof: "TBD (Director)",
  europe: "UEFA Europa League (2026/27) - via third qualifying round/play-offs",
  finish: "4th Ligue 1 (2025/26)",
  owner: "Eagle Football Group (77.49%); Michele Kang (President, from 30 Jun 2025, after John Textor's resignation)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.getfootballnewsfrance.com/tag/lyon/"],
  queries: ["Olympique Lyonnais transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Olympique Lyonnais"
};

const CONFIRMED_IN = [
  {name:"Julien Duranville", sub:"20 · W · Belgium", to:"permanent from Borussia Dortmund", fee:"€5m + up to €3.5m bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Jul 2026 on a five-year contract - a calculated gamble on a highly-rated but injury-hit winger."},
  {name:"Mohamed Ouédraogo", sub:"20 · CM · Burkina Faso", to:"permanent from SCR Altach", fee:"€2.2m + up to €0.6m bonuses, 10% resale clause", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 3 Jul 2026, a development midfield signing from Austria."},
  {name:"Mohamed Ouedraogo", sub:"Midfielder, Burkina Faso international", club:"SCR Altach", pos:"CM", fee:"€2.2m + €0.6m in bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially signed a five-year contract with Lyon on 03/07."},
  {name:"Cluver Sambi Mbungu", sub:"Defender, 17-year-old prospect", club:"SM Caen", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Lyon beat PSG and Bundesliga clubs to sign the Caen academy prospect, confirmed 09/07."},
  {name:"Duje Caleta-Car", sub:"Defender, returned from loan", club:"Olympique Lyonnais", pos:"CB", fee:"N/A (loan return)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially returned to the club on 25/05."}
];

const CONFIRMED_OUT = [
  {name:"Afonso Moreira", sub:"Defender", club:"Bayer Leverkusen", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure confirmed 18/06 after agreement reached 17/06."},
  {name:"Mads Bidstrup", sub:"Midfielder", club:"FC Salzburg", pos:"CM", fee:"€10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreement confirmed 15/06."},
  {name:"Kail Boudache", sub:"Defender, moved on a free", club:"OGC Nice", pos:"CB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official free transfer to Nice confirmed 15/06."}
];

const INCOMING = [
  {name:"Florian Thauvin", sub:"33 · RW · France", club:"Free agent (Udinese)", pos:"RW", report:"1 Aug 2026", src:"RMC Sport", tier:2, fee:"Free agent", truth:62, prob:48, light:"y", trend:"flat", note:"RMC reports Lyon in talks with the veteran winger after his Udinese exit."},
  {name:"Madison Ingram", sub:"20 · CM · England", club:"Chelsea", pos:"CM", report:"28 Jul 2026", src:"Fabrizio Romano", tier:1, fee:"€30m", truth:71, prob:55, light:"g", trend:"up", note:"Romano reports Chelsea are open to a loan move for the young midfielder to Lyon."},
  {name:"Loïs Openda", sub:"26 · ST · Belgium", club:"Juventus", pos:"ST", report:"25 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:60, prob:52, light:"g", trend:"up", note:"Reported to be set to join Lyon as the club looks to freshen up its attack."},
  {name:"Felix Bacher", sub:"22 · CB · Austria", club:"Estoril", pos:"CB", report:"21 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:50, prob:38, light:"y", trend:"flat", note:"Lyon reported in advanced negotiations for the Austrian centre-back."},
  {name:"Loic Openda", sub:"Forward, agreed switch", club:"Juventus", pos:"ST", report:"Lyon are reported to have agreed a deal to sign Juventus forward Loic Openda as they rebuild the front line after selling academy talent abroad.", src:"Sky Sport", tier:1, fee:"Undisclosed", truth:75, prob:65, light:"g", trend:"flat", note:"Reported as an agreed transfer, though not yet officially announced by either club."},
  {name:"Jun-ho Bae", sub:"Player, bid submitted", club:"Stoke City", pos:"CM", report:"Lyon have submitted a 3.5m euro bid to Stoke City for South Korean player Jun-ho Bae, though the Championship club are yet to accept.", src:"L'Equipe", tier:2, fee:"€3.5m (bid)", truth:60, prob:40, light:"y", trend:"flat", note:"Initial bid only; Stoke have not confirmed acceptance."},
  {name:"Claudio Braga", sub:"Striker, monitored target", club:"Unattached club (Brazil)", pos:"ST", report:"Lyon are said to be tracking Brazilian forward Claudio Braga as an alternative striker option amid tight DNCG spending constraints.", src:"Foot Mercato", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"Early speculative interest under strict financial oversight from the DNCG."}
];

const OUTGOING = [
  {name:"Pavel Šulc", sub:"25 · AM · Czech Republic", club:"Lyon", pos:"AM", report:"18 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:48, prob:24, light:"o", trend:"flat", note:"Leeds United reported to have opened talks over the playmaker's situation."},
  {name:"Pavel Sulc", sub:"Midfielder, Premier League interest", club:"Leeds United", pos:"CAM", report:"Leeds United have opened talks with Lyon over a move for attacking midfielder Pavel Sulc, though a deal is not considered close.", src:"L'Equipe", tier:2, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"flat", note:"Talks confirmed but described as at an early stage."},
  {name:"Jacob Widell Zetterstrom", sub:"Goalkeeper, squad surplus", club:"Derby County", pos:"GK", report:"Derby County have been credited with interest in Lyon goalkeeper Jacob Widell Zetterstrom as the Swede looks for a route to regular first-team football.", src:"Foot Mercato", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"Speculative interest with no reported formal approach."}
];

const RISERS = [
  {ar:"⬆", t:"<b>Duranville arrives from Dortmund</b>: a five-year bet on the Belgian winger's talent."},
  {ar:"⬆", t:"<b>Openda reportedly set to join from Juventus</b>: fresh forward reinforcement for Fonseca's side."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Paulo Fonseca, back in charge after a lengthy suspension linked to the club's financial oversight case, says he's staying: 'I have a year left. I'm not concerned about this situation... I'm staying.'"}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Forward line", w:60, x:"Openda and Thauvin links both point to fresh attacking depth being prioritised this window."}
];

const WATCHLIST = [
  {name:"Loïs Openda", club:"Juventus", pos:"ST", dir:"in", age:"~9 days", tier:2, note:"Reported to be set to complete a move to Lyon."}
];

const HUB = {
  "rmcsport": {l:"RMC Sport", u:"https://rmcsport.bfmtv.com/football/"},
  "romano": {l:"Fabrizio Romano", u:"https://x.com/FabrizioRomano"},
  "gffn-lyon": {l:"Get French Football News · Lyon", u:"https://www.getfootballnewsfrance.com/tag/lyon/"},
  getFrenchFootballNewsSkySportLoicOpenda: {l:"Get French Football News (Sky Sport)", u:"https://www.getfootballnewsfrance.com/2026/juventus-lois-openda-set-to-join-lyon/"},
  getFrenchFootballNewsLEquipeFelixBacher: {l:"Get French Football News (L'Equipe)", u:"https://www.getfootballnewsfrance.com/2026/lyon-in-advanced-negotiations-with-estoril-for-felix-bacher/"},
  getFrenchFootballNewsLEquipeJunhoBae: {l:"Get French Football News (L'Equipe)", u:"https://www.getfootballnewsfrance.com/2026/lyon-submit-e3-5m-bid-to-stoke-city-for-jun-ho-bae-but/"},
  footMercatoClaudioBraga: {l:"Foot Mercato", u:"https://www.footmercato.net/club/ol/actualite"},
  getFrenchFootballNewsLEquipePavelSulc: {l:"Get French Football News (L'Equipe)", u:"https://www.getfootballnewsfrance.com/2026/leeds-united-in-talks-with-lyon-for-pavel-sulc-but/"},
  getFrenchFootballNewsJulienDuranville: {l:"Get French Football News", u:"https://www.getfootballnewsfrance.com/2026/official-i-dortmunds-julien-duranville-signs-five-year-contract-with-lyon/"},
  getFrenchFootballNewsMohamedOuedraogo: {l:"Get French Football News", u:"https://www.getfootballnewsfrance.com/2026/official-i-burkina-faso-international-mohamed-ouedraogo-signs-five-year-contrat-with-lyon/"},
  getFrenchFootballNewsCluverSambiMbungu: {l:"Get French Football News", u:"https://www.getfootballnewsfrance.com/2026/lyon-overtake-psg-and-bundesliga-giants-to-sign-caens-rising-star-cluver-sambi-mbungu/"}};

const LINKMAP = {
  "Florian Thauvin": ["rmcsport"],
  "Madison Ingram": ["romano"],
  "Julien Duranville": ["gffn-lyon", "getFrenchFootballNewsJulienDuranville"],
  "Mohamed Ouédraogo": ["gffn-lyon"],
  "Loïs Openda": ["gffn-lyon"],
  "Cluver Sambi Mbungu": ["gffn-lyon", "getFrenchFootballNewsCluverSambiMbungu"],
  "Felix Bacher": ["gffn-lyon", "getFrenchFootballNewsLEquipeFelixBacher"],
  "Pavel Šulc": ["gffn-lyon"],
  "Loic Openda": ["getFrenchFootballNewsSkySportLoicOpenda"],
  "Jun-ho Bae": ["getFrenchFootballNewsLEquipeJunhoBae"],
  "Claudio Braga": ["footMercatoClaudioBraga"],
  "Pavel Sulc": ["getFrenchFootballNewsLEquipePavelSulc"],
  "Jacob Widell Zetterstrom": ["footMercatoClaudioBraga"],
  "Mohamed Ouedraogo": ["getFrenchFootballNewsMohamedOuedraogo"],
  "Duje Caleta-Car": ["footMercatoClaudioBraga"],
  "Afonso Moreira": ["footMercatoClaudioBraga"],
  "Mads Bidstrup": ["footMercatoClaudioBraga"],
  "Kail Boudache": ["footMercatoClaudioBraga"]};
const WL_LINKMAP = {
  "Loïs Openda": ["gffn-lyon"]
};

const PROSE = {
  heroH2: `Fonseca stays put, and Lyon rebuild around two confirmed signings`,
  heroLede: `After a turbulent 2025/26 dominated by financial oversight and a lengthy managerial suspension, <b>Paulo Fonseca</b> has publicly committed his future to Lyon. On the pitch, <b>Julien Duranville</b> and <b>Mohamed Ouédraogo</b> are confirmed arrivals, while reported interest in Juventus striker <b>Loïs Openda</b> and Caen teenager <b>Cluver Sambi Mbungu</b> - the latter reportedly beating PSG to the punch - point to an ambitious squad rebuild for the Europa League campaign ahead.`,
  metaRow: `<span>DECISION-MAKER: <b>Michele Kang</b> (President)</span> <span>HEAD COACH: <b>Paulo Fonseca</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">4<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">Europa League</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">2</div></div>`,
  positionPanel: ``,
  confirmedPending: `Openda and Sambi Mbungu both reported as advancing towards completion.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Šulc's future is being watched after reported Leeds United interest.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `~€7m+ confirmed`, x: `Duranville and Ouédraogo's combined fees, with further deals reportedly in progress.` },
  spendOut: { v: `None confirmed`, x: `No departures confirmed this window.` },
  methodLegend: ``
};
