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
  {name:"Cluver Sambi Mbungu", sub:"Defender, 17-year-old prospect", club:"SM Caen", pos:"CB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Lyon beat PSG and Bundesliga clubs to sign the Caen academy prospect, confirmed 09/07."},
  {name:"Duje Caleta-Car", sub:"Defender, returned from loan", club:"Olympique Lyonnais", pos:"CB", fee:"N/A (loan return)", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially returned to the club on 25/05."},
  {name:"Felix Bacher", sub:"21 · Germany · D", club:"1. FC Köln", pos:"Defender", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official signing confirmed; first reaction given"},
  {name:"Madison Ingram", sub:"20 · Canada · M", club:"Vancouver Whitecaps", pos:"Midfielder", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported official signing"},
  {name:"Florian Thauvin", sub:"32 · France · W", club:"Como", pos:"W", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed 1 August 2026"}
];

const CONFIRMED_OUT = [
  {name:"Afonso Moreira", sub:"Defender", club:"Bayer Leverkusen", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure confirmed 18/06 after agreement reached 17/06."},
  {name:"Mads Bidstrup", sub:"Midfielder", club:"FC Salzburg", pos:"CM", fee:"€10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Agreement confirmed 15/06."},
  {name:"Kail Boudache", sub:"Defender, moved on a free", club:"OGC Nice", pos:"CB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official free transfer to Nice confirmed 15/06."},
  {name:"Orel Mangala", sub:"26 · France · M", club:"Getafe", pos:"M", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan move officially confirmed"}
];

const INCOMING = [
  {name:"Florian Thauvin", sub:"33 · RW · France", club:"Free agent (Udinese)", pos:"RW", report:"1 Aug 2026", src:"RMC Sport", tier:2, fee:"Free agent", truth:62, prob:48, light:"y", trend:"flat", note:"RMC reports Lyon in talks with the veteran winger after his Udinese exit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:48},
  {name:"Madison Ingram", sub:"20 · CM · England", club:"Chelsea", pos:"CM", report:"28 Jul 2026", src:"Fabrizio Romano", tier:1, fee:"€30m", truth:71, prob:55, light:"g", trend:"up", note:"Romano reports Chelsea are open to a loan move for the young midfielder to Lyon.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Loïs Openda", sub:"24 · Belgium · F", club:"RC Lens", pos:"F", report:"Lyon close to agreement for transfer", src:"transferfeed", tier:2, fee:"Undisclosed", truth:85, prob:80, light:"g", trend:"up", note:"Multiple reports of advanced talks; deal structure being finalized", lastSeen:"2026-08-08T18:06:11Z", baseProb:80},
  {name:"Felix Bacher", sub:"22 · CB · Austria", club:"Estoril", pos:"CB", report:"21 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:50, prob:38, light:"y", trend:"flat", note:"Lyon reported in advanced negotiations for the Austrian centre-back.", lastSeen:"2026-08-04T19:10:50Z", baseProb:38},
  {name:"Loic Openda", sub:"Forward, agreed switch", club:"Juventus", pos:"ST", report:"Lyon are reported to have agreed a deal to sign Juventus forward Loic Openda as they rebuild the front line after selling academy talent abroad.", src:"Sky Sport", tier:1, fee:"Undisclosed", truth:75, prob:65, light:"g", trend:"flat", note:"Reported as an agreed transfer, though not yet officially announced by either club.", lastSeen:"2026-08-04T19:10:50Z", baseProb:65, dead:true, deadReason:"Duplicate/variant of Loïs Openda; consolidated into single entry"},
  {name:"Jun-ho Bae", sub:"22 · South Korea · M", club:"FC Seoul", pos:"M", report:"Lyon submitted €3.5m bid; fonden on international midfielder", src:"Foot Mercato", tier:3, fee:"€3.5m", truth:60, prob:50, light:"y", trend:"flat", note:"Initial bid submitted; negotiations ongoing", lastSeen:"2026-08-08T18:06:11Z", baseProb:50},
  {name:"Claudio Braga", sub:"Striker, monitored target", club:"Unattached club (Brazil)", pos:"ST", report:"Lyon are said to be tracking Brazilian forward Claudio Braga as an alternative striker option amid tight DNCG spending constraints.", src:"Foot Mercato", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"Early speculative interest under strict financial oversight from the DNCG.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No fresh reporting in recent snippets; tracking interest only"}
];

const OUTGOING = [
  {name:"Pavel Sulc", sub:"Midfielder, Premier League interest", club:"Leeds United", pos:"CAM", report:"Leeds United have opened talks with Lyon over a move for attacking midfielder Pavel Sulc, though a deal is not considered close.", src:"L'Equipe", tier:2, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"flat", note:"Talks confirmed but described as at an early stage.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"Duplicate variant of Pavel Šulc; consolidated into single entry"},
  {name:"Jacob Widell Zetterstrom", sub:"23 · Sweden · GK", club:"Derby County", pos:"Goalkeeper", report:"Derby County credited with interest", src:"Transfer outlet", tier:3, fee:"Undisclosed", truth:50, prob:40, light:"y", trend:"up", note:"Interest only; no formal talks reported", lastSeen:"2026-08-07T01:42:32Z", baseProb:40, dead:true, deadReason:"Derby County interest stalled; no recent credible updates"},
  {name:"Malick Fofana", sub:"21 · Belgium · W", club:"Olympique Lyon", pos:"W", report:"Italian club tracking Belgian winger; €40m valuation", src:"Le Soir", tier:3, fee:"€40m", truth:55, prob:45, light:"y", trend:"flat", note:"Interest from unnamed Italian club; early-stage enquiry", lastSeen:"2026-08-08T18:06:11Z", baseProb:45},
  {name:"Orel Mangala", sub:"26 · France · M", club:"Olympique Lyon", pos:"M", report:"Loan move to Getafe confirmed", src:"MadeInFOOT", tier:3, fee:"Loan", truth:100, prob:100, light:"g", trend:"flat", note:"Official loan announcement confirmed", lastSeen:"2026-08-08T18:06:11Z", baseProb:100}
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
  getFrenchFootballNewsCluverSambiMbungu: {l:"Get French Football News", u:"https://www.getfootballnewsfrance.com/2026/lyon-overtake-psg-and-bundesliga-giants-to-sign-caens-rising-star-cluver-sambi-mbungu/"},
  madeInFOOTLosOpenda: {l:"MadeInFOOT", u:"https://news.google.com/rss/articles/CBMi3AFBVV95cUxNWmtGcUhTVnkwWmpDcHdFRWlzeXpXVFBPV0RkN1d6a1k5VGpFenFxYXBfb0JST1dmX0N3VEhVejVJUHlUalFOWU51RGhrcDdSRTZJMHhwNmJua3VaQzJ2UEpWSFdwNkQ0UE5IYmZfTzV0ZWEyb1UxT0Vxb293N0oyTGFNMGRGaXJXQVhmTENmeEUxOXBCdjF6LXk3NVlxZ2NqazlxYldMUzRjRkhsWlc2VkdzMHBVVUd3WC12WDRkTjEzangxcnNWTjlYSmE3SHpOc3JBd2tCRHVjdVZV"},
  madeInFOOTJunhoBae: {l:"MadeInFOOT", u:"https://news.google.com/"},
  madeInFOOTFelixBacher: {l:"MadeInFOOT", u:"https://news.google.com/rss/articles/CBMi5AFBVV95cUxQUGc5dnVPdFVZdTRRdHpYSzZFNXpZaDQtOWNHSklSem5ibEhBMlRQLUtsUWNTMmJNT255dGUySGVnYmJxb2tuRWcyOUtIOTFRMkFxbTFzS1hUdk9UcUs4emFfalIxV2pBazUtaHl3eDloeHdYcnB2QXFXZGVfLUVOVHRBUVRlbEVTbmpteE11N3c4bDBWZkE5R05SNjczc082cFF4WG1uWHV6YkxkNGNVWFV6TlhVSlJtd1JlR1o4SzBteG96N2JTSlVCSmo5VzM2MHJsV0RaSnd0LWNvd1lBdWtLbnA"},
  footMercatoJunhoBae: {l:"Foot Mercato", u:"https://news.google.com/rss/articles/CBMiqgFBVV95cUxQSHNwWXRtWXNtamlLcTVQcEVwbjNfYkNldEx5Q0U2R3NqRDE4cjBSc3FOb2pZak0wWVFiOGNCSTlHZXpNNkFkcnJRaEpEVWFVU0s0dksydWpiRlRwMFlhSWhmMFVCQTdvUUF2S3FZeDA4ckVWVU9mTnE3MFpNczZBVzFtTTNLR3hpbk9LVDBVTnRRRWJfLWtEcjJhVTFsVFlBRkNKRVZkZ1MtZw"},
  leSoirMalickFofana: {l:"Le Soir", u:"https://news.google.com/rss/articles/CBMivwFBVV95cUxNOVBkdVZXM3JSbWIxcVRmQlJmZ1R0RnBGYjdjQnVGd3ZPTUotQjFFSktYdkRKYTI1SExUX2xHSXdvRl9rQ2d4VktZYXhQWnZrTk1nYldTcFQ1R2F0MG1ic3VUQ1hyNnp1NENWeDRNd1IybGRQcUNKVXJBMW9YVGF3ZWlOVEwzSWhad0tZZExKSEJYZHV0VzJsempuTURoZmtNcmN5TUtSMFRRU1J2Z3M0dzUzdWhwTDcyeEp4dDdqaw"},
  madeInFOOTOrelMangala: {l:"MadeInFOOT", u:"https://news.google.com/rss/articles/CBMi2AFBVV95cUxNUUo5enRfUVh5Rjk5WXpNV2NodTZZZHJlbzBTVmtFTHZiTU50ZzJjV1FyNUFibXExWTMxVG84eUU1STB3Y3VBTEc1b2lzTkJEc2dEN3FZbXA4dG5XMWZ0ZHAzOVNJRjIzU09FbkNNTG9sLUxEaEo5S2JLUjdXeTB6MXVKZy1VVEZkdUtnTm1NZVBUamV0TXRteUdXeURaQU9NVzR6R0RBaE5DSVQycUpDMXljNzBTVjNUQkM3a1M1TldneHg2VXU5NTBGZTRuODRQYl9NS0ZDZmo"}};

const LINKMAP = {
  "Florian Thauvin": ["rmcsport"],
  "Madison Ingram": ["romano", "madeInFOOTJunhoBae"],
  "Julien Duranville": ["gffn-lyon", "getFrenchFootballNewsJulienDuranville"],
  "Mohamed Ouédraogo": ["gffn-lyon"],
  "Loïs Openda": ["gffn-lyon", "madeInFOOTLosOpenda"],
  "Cluver Sambi Mbungu": ["gffn-lyon", "getFrenchFootballNewsCluverSambiMbungu"],
  "Felix Bacher": ["gffn-lyon", "getFrenchFootballNewsLEquipeFelixBacher", "madeInFOOTFelixBacher"],
  "Pavel Šulc": ["gffn-lyon", "madeInFOOTJunhoBae"],
  "Loic Openda": ["getFrenchFootballNewsSkySportLoicOpenda"],
  "Jun-ho Bae": ["getFrenchFootballNewsLEquipeJunhoBae", "madeInFOOTJunhoBae", "footMercatoJunhoBae"],
  "Claudio Braga": ["footMercatoClaudioBraga"],
  "Pavel Sulc": ["getFrenchFootballNewsLEquipePavelSulc"],
  "Jacob Widell Zetterstrom": ["footMercatoClaudioBraga", "madeInFOOTJunhoBae"],
  "Mohamed Ouedraogo": ["getFrenchFootballNewsMohamedOuedraogo"],
  "Duje Caleta-Car": ["footMercatoClaudioBraga"],
  "Afonso Moreira": ["footMercatoClaudioBraga"],
  "Mads Bidstrup": ["footMercatoClaudioBraga"],
  "Kail Boudache": ["footMercatoClaudioBraga"],
  "Malick Fofana": ["leSoirMalickFofana"],
  "Orel Mangala": ["madeInFOOTOrelMangala"]};
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
