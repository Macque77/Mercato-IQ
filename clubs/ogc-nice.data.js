/* ============================================================
   MERCATO IQ · CLUB DATA · OGC NICE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "OGC Nice",
  mono: "OGCN",
  slug: "ogc-nice",
  primary: "#ED1C24",
  primaryBright: "#FF6B6B",
  primaryDeep: "#1A1A1A",
  primaryRgb: "237,28,36",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Olivier Pantaloni (appointed 17 Jun 2026 as a free agent from FC Lorient, succeeding Claude Puel)",
  dof: "Vacant - Roger Ricort overseeing club finances, with a reported €70m savings target before the window closes",
  europe: "None (2026/27)",
  finish: "16th Ligue 1 (2025/26) - won relegation play-off 4-1 on aggregate vs AS Saint-Étienne",
  owner: "INEOS / Sir Jim Ratcliffe (since Jul 2019); Maurice Cohen (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.nice-premium.com/", "https://www.getfootballnewsfrance.com/tag/nice/"],
  queries: ["OGC Nice transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · OGC Nice"
};

const CONFIRMED_IN = [
  {name:"Gauthier Hein", sub:"Midfielder/winger", club:"FC Metz", pos:"RW", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official transfer confirmed by Foot Mercato on 02/08."},
  {name:"Laurent Abergel", sub:"Defensive midfielder", club:"FC Lorient", pos:"CDM", fee:"Undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official signing confirmed 02/07."}
];

const CONFIRMED_OUT = [
  {name:"Maxime Dupe", sub:"Goalkeeper", club:"FC Nantes", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official free-agent return to Nantes confirmed 24/06."},
  {name:"Charles Vanhoutte", sub:"Midfielder", club:"Feyenoord", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure confirmed 19/06."},
  {name:"Gabin Bernardeau", sub:"Midfielder", club:"FC Lorient", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure confirmed 09/07."},
  {name:"Kail Boudache", sub:"Defender", club:"Olympique Lyonnais", pos:"CB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official free transfer to Lyon confirmed 15/06."},
  {name:"Jeremie Boga", sub:"29 · Ivory Coast · W", club:"Undisclosed", pos:"", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Listed among Nice's 2026/27 departures alongside Aliou Balde, Charles Vanhoutte and Gabin Bernardeau. Destination and fee not confirmed in this check, so publish the exit only, not a landing spot."}
];

const INCOMING = [
  {name:"Franck Magri", sub:"ST", club:"Free agent (ex-Toulouse)", pos:"ST", report:"29 Jul 2026", src:"Get French Football News", tier:2, fee:"Free transfer", truth:48, prob:24, light:"o", trend:"flat", note:"The free-agent forward is on Nice's radar following Elye Wahi's loan departure.", lastSeen:"2026-08-04T19:10:50Z", baseProb:24, dead:true, deadReason:"No recent snippet support; appears stale from on-page entry dated 29 Jul 2026"},
  {name:"James Tavernier", sub:"34 · RB · England", club:"Free agent (ex-Rangers)", pos:"RB", report:"1 Aug 2026", src:"Get French Football News", tier:2, fee:"Free transfer", truth:50, prob:24, light:"o", trend:"flat", note:"Nice are one of two French suitors (with Paris FC) for the veteran Rangers captain.", lastSeen:"2026-08-04T19:10:50Z", baseProb:24, dead:true, deadReason:"Listed as both incoming and outgoing on page; no recent confirmation of either direction; appears contradictory and stale"},
  {name:"Robbie Ure", sub:"FW", club:"IK Sirius", pos:"FW", report:"4 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:45, prob:20, light:"o", trend:"flat", note:"The Allsvenskan top scorer is being tracked by Nice alongside Strasbourg and Lyon.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No recent snippet support; appears stale from on-page entry dated 4 Jul 2026"},
  {name:"Kevin Carlos", sub:"MF", club:"Getafe", pos:"MF", report:"12 Jul 2026", src:"Get French Football News", tier:3, fee:"Loan with option", truth:40, prob:22, light:"o", trend:"flat", note:"Turkish side Samsunspor are reported to be pursuing the same player on a loan-with-option deal, complicating Nice's interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22, dead:true, deadReason:"Listed as both incoming and outgoing on page; no recent snippet support; conflicting status"},
  {name:"William Mikelbrencis", sub:"Defender, under consideration", club:"FC Lugano", pos:"LB", report:"Nice are tracking Lugano full-back William Mikelbrencis, though he has also received a contract offer from Valencia, complicating any move to the Cote d'Azur.", src:"L'Equipe", tier:3, fee:"Undisclosed", truth:45, prob:30, light:"y", trend:"flat", note:"Competing Valencia interest reported the same week reduces the likelihood of Nice winning the race.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"No recent snippet support; on-page entry incomplete and unconfirmed"},
  {name:"Bamba Dieng", sub:"Forward, striker shortlist option", club:"Lorient", pos:"ST", report:"Bamba Dieng features on Nice's striker shortlist as the club looks to replace departing forwards this summer.", src:"L'Equipe", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"Shortlisted alongside Simon Banza; no formal approach confirmed yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No recent snippet support; on-page entry indicates only on shortlist, no active pursuit confirmed"},
  {name:"Gauthier Hein", sub:"unknown · unknown · unknown", club:"FC Metz", pos:"unknown", report:"Gauthier Hein officially signed with OGC Nice from Metz", src:"Le Figaro / ici.fr", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Deal completed during summer window", lastSeen:"2026-08-08T18:06:11Z", baseProb:100},
  {name:"Adama Camara", sub:"Unknown · Unknown · Unknown", club:"Paris FC", pos:"Unknown", report:"RC Lens and OGC Nice are courting Paris FC's Adama Camara", src:"TOP Mercato", tier:3, fee:"Unknown", truth:60, prob:40, light:"y", trend:"flat", note:"Nice among clubs interested; Paris FC taking position", lastSeen:"2026-08-07T01:42:32Z", baseProb:40, dead:true, deadReason:"Listed as courting only; no recent snippet confirmation of deal"}
];

const OUTGOING = [
  {name:"Mohamed-Ali Cho", sub:"22 · FW · France", club:"Hull City", pos:"FW", report:"2 Aug 2026", src:"Get French Football News", tier:2, fee:"€20m", truth:65, prob:58, light:"g", trend:"up", note:"Hull City's reported €20m offer is described as 'on the verge of finalising' - a big sale for a club needing to hit financial savings targets.", lastSeen:"2026-08-04T19:10:50Z", baseProb:58, dead:true, deadReason:"Listed twice as outgoing with no recent snippet confirmation; appears stale"},
  {name:"Kojo Peprah Oppong", sub:"Centre-back, Premier League interest", club:"Burnley", pos:"CB", report:"Burnley have registered interest in Nice centre-back Kojo Peprah Oppong as they look to bolster their defensive options following promotion.", src:"L'Equipe", tier:2, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"flat", note:"Described as growing interest rather than a concrete approach.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"No recent snippet support; on-page entry incomplete and unconfirmed"},
  {name:"Kevin Carlos", sub:"unknown · unknown · forward", club:"OGC Nice", pos:"FW", report:"Undesirable at OGC Nice, Kevin Carlos will be loaned to Italy", src:"MadeInFOOT", tier:3, fee:"Loan", truth:75, prob:75, light:"g", trend:"up", note:"Multiple reports of Kevin Carlos departure; loan to Italian club", lastSeen:"2026-08-08T18:06:11Z", baseProb:75},
  {name:"James Tavernier", sub:"Defender, veteran free-agent option", club:"Rangers", pos:"RB", report:"Rangers captain James Tavernier is being courted by both Nice and Paris FC as a possible experienced addition at right-back.", src:"Foot Mercato", tier:2, fee:"Free transfer", truth:55, prob:30, light:"y", trend:"flat", note:"Same player linked to two of the tracked Ligue 1 clubs simultaneously, indicating early speculative interest.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"Listed as both incoming and outgoing on page; no recent confirmation of either direction; appears contradictory and stale"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Cho-to-Hull City nearing completion</b>: a reported €20m fee would be a major boost to Nice's finances."}
];

const FALLERS = [
  {ar:"⬇", t:"<b>Dupé leaves for Nantes</b>: veteran goalkeeper exits as a free agent."}
];

const NEW = [
  {ar:"✦", t:"Nice survived the drop only via a 4-1 aggregate play-off win over Saint-Étienne, and the summer priority under new free-agent coach Olivier Pantaloni is squarely financial: Roger Ricort is targeting €70m in savings before the window shuts."}
];

const IGNORE = [
  {ar:"✕", t:"<b>William Mikelbrencis</b>: the free-agent Hamburg defender was linked with Nice in late July but instead received an offer from Valencia - the move to Nice appears dead."}
];

const POSITIONS = [];

const WATCHLIST = [
  {name:"Mohamed-Ali Cho", club:"OGC Nice", pos:"FW", dir:"out", age:"~1 day", tier:2, note:"Hull City's €20m bid reported close to being finalised.", dead:true, deadReason:"Listed twice as outgoing with no recent snippet confirmation; appears stale"}
];

const HUB = {
  "gffn-nice": {l:"Get French Football News · Nice", u:"https://www.getfootballnewsfrance.com/tag/nice/"},
  "nicepremium": {l:"Nice Premium", u:"https://www.nice-premium.com/"},
  getFrenchFootballNewsFootMercatoFranckMagri: {l:"Get French Football News (Foot Mercato)", u:"https://www.getfootballnewsfrance.com/2026/former-toulouse-forward-franck-magri-attracts-interest-from-nice/"},
  getFrenchFootballNewsLEquipeWilliamMikelbrencis: {l:"Get French Football News (L'Equipe)", u:"https://www.getfootballnewsfrance.com/2026/nice-target-william-mikelbrencis-received-valencia-contract-offer/"},
  getFrenchFootballNewsLEquipeRobbieUre: {l:"Get French Football News (L'Equipe)", u:"https://www.getfootballnewsfrance.com/2026/strasbourg-nice-and-lyon-pursuing-allsvenskans-top-scorer-robbie-ure/"},
  getFrenchFootballNewsLEquipeBambaDieng: {l:"Get French Football News (L'Equipe)", u:"https://www.getfootballnewsfrance.com/2026/bamba-dieng-and-simon-banza-on-nices-striker-shortlist/"},
  getFrenchFootballNewsLEquipeMohamedAliCho: {l:"Get French Football News (L'Equipe)", u:"https://www.getfootballnewsfrance.com/2026/hull-city-get-closer-to-securing-deal-for-nices-mohamed-ali-cho/"},
  getFrenchFootballNewsLEquipeKojoPeprahOppong: {l:"Get French Football News (L'Equipe)", u:"https://www.getfootballnewsfrance.com/2026/burnley-interested-in-nice-centre-back-kojo-peprah-oppong/"},
  getFrenchFootballNewsLEquipeKevinCarlos: {l:"Get French Football News (L'Equipe)", u:"https://www.getfootballnewsfrance.com/2026/nices-kevin-carlos-targeted-by-samsunspor/"},
  getFrenchFootballNewsFootMercatoJamesTavernier: {l:"Get French Football News (Foot Mercato)", u:"https://www.getfootballnewsfrance.com/2026/rangers-legend-james-tavernier-courted-by-paris-fc-and-nice/"},
  footMercatoGauthierHein: {l:"Foot Mercato", u:"https://www.footmercato.net/club/ogc-nice/actualite"},
  getFrenchFootballNewsMaximeDupe: {l:"Get French Football News", u:"https://www.getfootballnewsfrance.com/2026/official-maxime-dupe-returns-to-fc-nantes/"},
  footMercatoGauthierHein1: {l:"Foot Mercato", u:"https://www.footmercato.net/club/ogc-nice/tableau/"},
  madeInFOOTGauthierHein: {l:"MadeInFOOT", u:"https://news.google.com/rss/articles/CBMiywFBVV95cUxQWDBIQTFjdmJoY3JCekxndWRuaHRGaWJEY1NteWZ0OFdUM0R3dUxfYmFfeUFHZFBfMzJIWkU1Uk45M0FBM0RxOXh4cnRHTEI3bEpuZlA0LXNKX25IclNIR0RUYmlZbmdxN1ZyeVA3eWVDOGJQLXZEZ19ScTBxWDNaMTlqX1JObnhKM0RreFpTaGdCODFWUjdxWlJWeHYxVjFCQTVDcTI5TDJhR2dOdk9HRTVaQ1dqMklBdFJudUstYjUwZXhxMjJEcm5R"},
  tOPMercatoAdamaCamara: {l:"TOP Mercato", u:"https://news.google.com/rss/articles/CBMiugFBVV95cUxPbnI2NXBNdDVwV24zMGg1QTlLVWxvY3hUb002ZS1OQV8telpvd0xSb2pmNmIyZ2Ftd01MVUk3X0xMa2VRWXZZQmJDbGlYLU4wLVQtVzRqa0xybXJpZjFadWNvZFlDT2g0ZmlpbW0tSkx6Z3hXVmJmWUozM0VKeXdDM1FDaEUwckQ5bTBIZ3pZckhwNlRYcldMSl9jSnpLYl9hdUJLRnBCOXg5eTh4YlFDZlZSNTdOb1o5Z2c"},
  leFigaroGauthierHein: {l:"Le Figaro", u:"https://news.google.com/rss/articles/CBMi4gFBVV95cUxPU3BJS2UzZ3NuOHU3SWdha21uZlBUb0xhZDVuMW1zS2hGeHR5anYzZ19Xcm5ZeXJpcEFjX1h3YzJzZi16UFJUY2JFNmQ2WEkwUlR2aGFOdU1aMzhlWEFUdXNyeWhWNUdYemV3RW5YNUNSUHMtRHBKUjVZSXRXMFJHNi1GUnhiN1BFOGF5OVlRLXFjZlpWQlB4ZEJMQ1R4Vkh0akxVeFI1dURKaUZFbG9hMjdoY2FudEF4Zm9PSE5qNWpRSmZZMkpibVNSQzBUMjNSUFdYZ3VxcDVDQXhjUWhqNWRB"},
  madeInFOOTKevinCarlos: {l:"MadeInFOOT", u:"https://news.google.com/rss/articles/CBMi0AFBVV95cUxOLWFURzV5ZjBUVXVlbUY4QUlPUmtiM1ZkOV9LbkFYdldMWWJqQnJZb1FfWFpULTBLbGFJdkJyV2RkSGZ1aS04ZHQ2Y1pzT0QwUGh2Zk9ff09OR0cybiD3a2NoR3pOZTdEUmVsTzVGM0otVGMtRFVjcmxFbUwzS2dKX3dUYi02UlJRckc0SlM3TGpMTGdiZWdJRVJZbjRTRDZTUC1VTHAzdlZ2RHlqa0J3cm9jWG5fR0dlV3VWZ1V5LU5rTXRYbldXNUpUZE9ZSHM3dUVv"}};

const LINKMAP = {
  "Maxime Dupé": ["gffn-nice"],
  "Franck Magri": ["gffn-nice", "getFrenchFootballNewsFootMercatoFranckMagri"],
  "James Tavernier": ["gffn-nice", "getFrenchFootballNewsFootMercatoJamesTavernier"],
  "Robbie Ure": ["gffn-nice", "getFrenchFootballNewsLEquipeRobbieUre"],
  "Kevin Carlos": ["gffn-nice", "getFrenchFootballNewsLEquipeKevinCarlos", "madeInFOOTKevinCarlos"],
  "Mohamed-Ali Cho": ["gffn-nice", "getFrenchFootballNewsLEquipeMohamedAliCho"],
  "William Mikelbrencis": ["gffn-nice", "getFrenchFootballNewsLEquipeWilliamMikelbrencis"],
  "Bamba Dieng": ["getFrenchFootballNewsLEquipeBambaDieng"],
  "Kojo Peprah Oppong": ["getFrenchFootballNewsLEquipeKojoPeprahOppong"],
  "Gauthier Hein": ["footMercatoGauthierHein", "footMercatoGauthierHein1", "madeInFOOTGauthierHein", "leFigaroGauthierHein"],
  "Laurent Abergel": ["footMercatoGauthierHein"],
  "Charles Vanhoutte": ["footMercatoGauthierHein", "footMercatoGauthierHein1"],
  "Gabin Bernardeau": ["footMercatoGauthierHein"],
  "Kail Boudache": ["footMercatoGauthierHein"],
  "Maxime Dupe": ["getFrenchFootballNewsMaximeDupe"],
  "Jeremie Boga": ["footMercatoGauthierHein1"],
  "Adama Camara": ["tOPMercatoAdamaCamara"]};
const WL_LINKMAP = {
  "Mohamed-Ali Cho": ["gffn-nice"]
};

const PROSE = {
  heroH2: `Survival secured, now the accountants take over`,
  heroLede: `Nice stayed up only by beating Saint-Étienne 4-1 on aggregate in the relegation play-off, and this window is about balancing the books as much as the squad: Sporting Director figure <b>Roger Ricort</b> is reportedly targeting €70m in savings, with <b>Mohamed-Ali Cho</b>'s near-complete €20m move to Hull City doing much of the heavy lifting. New head coach <b>Olivier Pantaloni</b>, hired as a free agent after guiding Lorient to promotion, takes charge of a club in transition.`,
  metaRow: `<span>DECISION-MAKER: <b>Maurice Cohen</b> (President)</span> <span>HEAD COACH: <b>Olivier Pantaloni</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">16<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Cho's move to Hull City is reported as close to being finalised.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Cho's sale is the key piece of Nice's financial reset this summer.`,
  pricingBanner: ``,
  excludedNote: `Mikelbrencis' move collapsed after Valencia intervened - kept here for transparency, not as a live story.`,
  spendIn: { v: `Free-agent targets`, x: `Magri, Tavernier and Ure are all free-agent or low-cost targets rather than fee-based deals.` },
  spendOut: { v: `€20m expected`, x: `Cho's reported move to Hull City would be a significant boost toward the club's savings target.` },
  methodLegend: ``
};
