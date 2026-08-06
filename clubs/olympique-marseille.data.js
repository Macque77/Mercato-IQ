/* ============================================================
   MERCATO IQ · CLUB DATA · OLYMPIQUE DE MARSEILLE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Olympique de Marseille",
  mono: "OM",
  slug: "olympique-marseille",
  primary: "#00A8E1",
  primaryBright: "#5CD0FF",
  primaryDeep: "#004E6B",
  primaryRgb: "0,168,225",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Habib Beye (appointed 19 Feb 2026, succeeding the sacked Roberto De Zerbi)",
  dof: "Grégory Lorenzi (Sporting Director, appointed 28 May 2026 after a decade at Stade Brestois)",
  europe: "UEFA Europa League (2026/27)",
  finish: "5th Ligue 1 (2025/26)",
  owner: "Frank McCourt (95% stake); Pablo Longoria (President)",
  window: "Opens 1 Jul, closes 31 Aug 2026"
};

const SWEEP = {
  feeds: ["https://www.transfermarkt.com/", "https://www.getfootballnewsfrance.com/tag/marseille/"],
  queries: ["Olympique de Marseille transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Olympique de Marseille"
};

const CONFIRMED_IN = [
  {name:"Matteo Guendouzi", sub:"27 · CM · France/Italy", to:"permanent from Lazio", fee:"€18m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 1 Aug 2026. Midfielder joins from Lazio to strengthen the engine room."},
  {name:"Sacha Lung", sub:"Attacker", club:"Unattached/previous club", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Officially announced arrival on 19/06."},
  {name:"Adam El Boughlamy", sub:"Prospect, chose OM over PSG", club:"Unattached academy signing", pos:"CM", fee:"Undisclosed", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Exclusive report (18/06) that the youngster snubbed PSG to join Marseille."},
  {name:"Facundo Medina", sub:"27 · Argentina · CB", club:"Lens", pos:"", fee:"€18m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Marseille's biggest outlay of the 2026/27 window, following his season at the Velodrome. Recorded as a permanent arrival in Foot Mercato's club table rather than announced fresh this week."},
  {name:"Timothy Weah", sub:"26 · United States · W", club:"Juventus", pos:"", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Move made permanent after his spell at Marseille. Fee not published in the sources checked."}
];

const CONFIRMED_OUT = [
  {name:"Bilal Nadir", sub:"Midfielder", club:"Undisclosed (German interest reported)", pos:"CM", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official departure confirmed 01/07."},
  {name:"Pierre-Emerick Aubameyang", sub:"37 · Gabon · ST", club:"Free agent", pos:"", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Second Marseille spell over, with the striker logged as a 2026/27 departure. Next club not established."},
  {name:"Mason Greenwood", sub:"24 · England · W", club:"Undisclosed", pos:"", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Listed as departed in Foot Mercato's Marseille window table. Destination and fee are not verified here, so the exit stands but the buying club does not. Worth a follow-up before running it as a headline."}
];

const INCOMING = [
  {name:"Ousmane Dembélé", sub:"29 · RW · France", club:"PSG", pos:"RW", report:"2 Aug 2026", src:"Fabrice Hawkins / L'Équipe", tier:2, fee:"€50m+", truth:55, prob:35, light:"y", trend:"flat", note:"Hawkins reports Marseille interest in the PSG winger; PSG are not motivated to sell.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Luis Díaz", sub:"29 · LW · Colombia", club:"Liverpool", pos:"LW", report:"30 Jul 2026", src:"Sky Sports News", tier:2, fee:"€60m", truth:48, prob:28, light:"o", trend:"flat", note:"Sky reports Marseille are monitoring; Liverpool are unlikely to sell to a Ligue 1 rival.", lastSeen:"2026-08-04T19:10:50Z", baseProb:28},
  {name:"Moris Valinčić", sub:"22 · RB · Croatia", club:"Dinamo Zagreb", pos:"RB", report:"30 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:45, prob:22, light:"o", trend:"flat", note:"Marseille have made an enquiry over the Croatian right-back.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Djibril Sidibé", sub:"33 · RB · France", club:"Free agent", pos:"RB", report:"22 Jul 2026", src:"Get French Football News", tier:2, fee:"Free transfer", truth:40, prob:16, light:"o", trend:"flat", note:"The 2018 World Cup winner has been mentioned as a possible experienced free-agent option.", lastSeen:"2026-08-04T19:10:50Z", baseProb:16},
  {name:"Memphis Depay", sub:"Forward, out-of-contract option", club:"Corinthians", pos:"ST", report:"Marseille have made contact over a possible move for Memphis Depay, whose contract at Corinthians expired, but his wage demands are seen as a major obstacle.", src:"Foot Mercato", tier:2, fee:"Free transfer", truth:50, prob:20, light:"o", trend:"flat", note:"Reported as unlikely to progress due to prohibitive wage demands.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Ilan Kebbal", sub:"Winger, monitored", club:"Paris FC", pos:"RW", report:"Marseille are exploring a move for Paris FC winger Ilan Kebbal, though the newly promoted club's manager has publicly said he wants to keep him.", src:"Foot Mercato", tier:3, fee:"Undisclosed", truth:45, prob:25, light:"o", trend:"flat", note:"Paris FC boss Liam Rosenior has publicly ruled out a departure, cooling the rumour.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Guillaume Restes", sub:"Goalkeeper, depth option", club:"Toulouse FC", pos:"GK", report:"Marseille have been credited with interest in Toulouse goalkeeper Guillaume Restes as competition/succession for the current No.1 spot.", src:"Foot Mercato", tier:3, fee:"Undisclosed", truth:40, prob:20, light:"o", trend:"flat", note:"Speculative given uncertainty over Rulli's future in Marseille.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20}
];

const OUTGOING = [
  {name:"Igor Paixão", sub:"25 · W · Brazil", club:"Leeds United", pos:"W", report:"1 Aug 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:45, prob:18, light:"o", trend:"flat", note:"Leeds United reported to have included the winger on their shortlist, though nothing concrete has emerged.", lastSeen:"2026-08-04T19:10:50Z", baseProb:18},
  {name:"Gerónimo Rulli", sub:"34 · GK · Argentina", club:"Manchester City", pos:"GK", report:"30 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:48, prob:20, light:"o", trend:"flat", note:"Manchester City reported to have submitted an offer for the veteran shot-stopper.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Pierre-Emile Højbjerg", sub:"30 · CM · Denmark", club:"AC Milan", pos:"CM", report:"18 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:42, prob:14, light:"r", trend:"flat", note:"AC Milan reported to have considered the Danish midfielder as an option.", lastSeen:"2026-08-04T19:10:50Z", baseProb:14},
  {name:"Geronimo Rulli", sub:"Goalkeeper, offer submitted", club:"Manchester City", pos:"GK", report:"Manchester City have submitted an offer for Marseille goalkeeper Geronimo Rulli, though Marseille want to control the timing and line up a replacement before letting him leave.", src:"Fabrizio Romano", tier:1, fee:"Undisclosed", truth:70, prob:55, light:"g", trend:"flat", note:"Marseille reportedly want a replacement (e.g. Restes) lined up before sanctioning the sale.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Pierre-Emile Hojbjerg", sub:"Midfielder, Serie A interest", club:"AC Milan", pos:"CDM", report:"AC Milan are considering a move for Marseille midfielder Pierre-Emile Hojbjerg as they look to add experience to their midfield.", src:"Sky Sport", tier:2, fee:"Undisclosed", truth:55, prob:35, light:"y", trend:"flat", note:"Described as under consideration rather than an active bid.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Igor Paixao", sub:"Winger, valuation gap", club:"Leeds United", pos:"LW", report:"Leeds United have placed Igor Paixao third on their shortlist, but a large valuation gap (OM want 50m euros, Leeds offering 30-35m) makes the deal difficult.", src:"Foot Mercato", tier:2, fee:"€50m demanded / €30-35m offered", truth:60, prob:30, light:"y", trend:"flat", note:"Significant gap between valuation and offer reduces the near-term likelihood of a deal.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];
const DEAD = [
  {name:"Martin Terrier", sub:"29 · FW · France", club:"Bayer Leverkusen", pos:"FW", report:"30 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:52, prob:30, light:"y", trend:"flat", note:"Marseille are competing with Rennes, Terrier's former club, to sign the striker.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dir:"in", deadReason:"signed for stade-rennais", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Nayef Aguerd", sub:"29 · CB · Morocco", club:"Stade Rennais", pos:"CB", report:"30 Jul 2026", src:"Get French Football News", tier:2, fee:"TBD", truth:50, prob:26, light:"o", trend:"flat", note:"Former club Stade Rennais are exploring bringing the defender back.", lastSeen:"2026-08-04T19:10:50Z", baseProb:26, dir:"out", deadReason:"completed move to stade-rennais", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Facundo Medina", sub:"Defender, talks opened", club:"Bayer Leverkusen", pos:"CB", report:"Bayer Leverkusen have opened talks over signing Marseille defender Facundo Medina, though no agreement has yet been reached.", src:"Le Phoceen", tier:3, fee:"Undisclosed", truth:45, prob:25, light:"o", trend:"flat", note:"Early-stage talks only, per local outlet Le Phoceen.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25, dir:"out", deadReason:"completed move to olympique-marseille", deadAt:"2026-08-06T10:49:41Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Guendouzi arrives from Lazio</b>: €18m midfield signing completed 1 Aug."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Grégory Lorenzi joins as Sporting Director from Brest, bringing a decade of recruitment experience to Habib Beye's rebuild."}
];

const IGNORE = [];

const POSITIONS = [
  {p:"Forward reinforcement", w:65, x:"Dembélé, Díaz and Terrier links all point to a wide-forward priority as Beye reshapes the attack for Europa League football."}
];

const WATCHLIST = [];

const HUB = {
  "gnews-matteoguendouzi": {l:"Related news search: Matteo Guendouzi", u:"https://news.google.com/search?q=Olympique%20de%20Marseille%20Matteo%20Guendouzi%20transfer&hl=en-GB&gl=GB"},
  "hawkins": {l:"Fabrice Hawkins (L'Équipe)", u:"https://x.com/HawkinsFabrice"},
  "lequipe": {l:"L'Équipe", u:"https://www.lequipe.fr/Football/"},
  "skynews": {l:"Sky Sports News", u:"https://www.skysports.com/football/news"},
  "gffn-marseille": {l:"Get French Football News · Marseille", u:"https://www.getfootballnewsfrance.com/tag/marseille/"},
  fabrizioRomanoviaFootballTransfersMasonGreenwood: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/07/fabrizio-romano-transfer-news-arsenal-leandro-trossard-man-utd-youri-tielemans-real-madrid-michael-olise"},
  getFrenchFootballNewsFootMercatoMartinTerrier: {l:"Get French Football News (Foot Mercato)", u:"https://www.getfootballnewsfrance.com/2026/marseille-to-rival-rennes-in-race-to-sign-martin-terrier-from-bayer-leverkusen/"},
  getFrenchFootballNewsFootMercatoMemphisDepay: {l:"Get French Football News (Foot Mercato)", u:"https://www.getfootballnewsfrance.com/2026/marseille-set-their-sights-on-memphis-depay-but/"},
  getFrenchFootballNewsFootMercatoIlanKebbal: {l:"Get French Football News (Foot Mercato)", u:"https://www.getfootballnewsfrance.com/2026/i-want-to-keep-him-paris-fcs-new-manager-liam-rosenior-rules-out-departure-of-coventry-city-target-ilan-kebbal/"},
  footMercatoGuillaumeRestes: {l:"Foot Mercato", u:"https://www.footmercato.net/club/om/actualite"},
  getFrenchFootballNewsFabrizioRomanoGeronimoRulli: {l:"Get French Football News (Fabrizio Romano)", u:"https://www.getfootballnewsfrance.com/2026/manchester-city-submit-offer-for-marseille-goalkeeper-geronimo-rulli-as-agreement-nears/"},
  getFrenchFootballNewsSkySportPierreEmileHojbjerg: {l:"Get French Football News (Sky Sport)", u:"https://www.getfootballnewsfrance.com/2026/ac-milan-consider-marseilles-pierre-emile-hojbjerg/"},
  getFrenchFootballNewsFootMercatoNayefAguerd: {l:"Get French Football News (Foot Mercato)", u:"https://www.getfootballnewsfrance.com/2026/rennes-plot-move-to-bring-nayef-aguerd-back-from-marseille/"},
  getFrenchFootballNewsFootMercatoIgorPaixao: {l:"Get French Football News (Foot Mercato)", u:"https://www.getfootballnewsfrance.com/2026/marseilles-igor-paixao-included-on-leeds-united-shortlist-but/"},
  getFrenchFootballNewsLePhoceenFacundoMedina: {l:"Get French Football News (Le Phoceen)", u:"https://www.getfootballnewsfrance.com/2026/bayer-leverkusen-target-marseilles-facundo-medina/"},
  footMercatoFacundoMedina: {l:"Foot Mercato", u:"https://www.footmercato.net/club/om/tableau/"}};

const LINKMAP = {
  "Matteo Guendouzi": ["gnews-matteoguendouzi"],
  "Ousmane Dembélé": ["hawkins", "lequipe"],
  "Luis Díaz": ["skynews"],
  "Martin Terrier": ["gffn-marseille", "getFrenchFootballNewsFootMercatoMartinTerrier"],
  "Moris Valinčić": ["gffn-marseille"],
  "Djibril Sidibé": ["gffn-marseille"],
  "Igor Paixão": ["gffn-marseille"],
  "Nayef Aguerd": ["gffn-marseille", "getFrenchFootballNewsFootMercatoNayefAguerd"],
  "Gerónimo Rulli": ["gffn-marseille"],
  "Pierre-Emile Højbjerg": ["gffn-marseille"],
  "Mason Greenwood": ["fabrizioRomanoviaFootballTransfersMasonGreenwood", "footMercatoGuillaumeRestes", "footMercatoFacundoMedina"],
  "Memphis Depay": ["getFrenchFootballNewsFootMercatoMemphisDepay"],
  "Ilan Kebbal": ["getFrenchFootballNewsFootMercatoIlanKebbal"],
  "Guillaume Restes": ["footMercatoGuillaumeRestes"],
  "Geronimo Rulli": ["getFrenchFootballNewsFabrizioRomanoGeronimoRulli"],
  "Pierre-Emile Hojbjerg": ["getFrenchFootballNewsSkySportPierreEmileHojbjerg"],
  "Igor Paixao": ["getFrenchFootballNewsFootMercatoIgorPaixao"],
  "Facundo Medina": ["getFrenchFootballNewsLePhoceenFacundoMedina", "footMercatoFacundoMedina"],
  "Pierre-Emerick Aubameyang": ["footMercatoGuillaumeRestes", "footMercatoFacundoMedina"],
  "Sacha Lung": ["footMercatoGuillaumeRestes"],
  "Adam El Boughlamy": ["footMercatoGuillaumeRestes"],
  "Bilal Nadir": ["footMercatoGuillaumeRestes"],
  "Timothy Weah": ["footMercatoFacundoMedina"]};
const WL_LINKMAP = {
  "Martin Terrier": ["gffn-marseille"]
};

const PROSE = {
  heroH2: `Beye and new sporting director Lorenzi weigh up a busy squad reshuffle`,
  heroLede: `Marseille's only confirmed arrival so far is midfielder <b>Matteo Guendouzi</b> from Lazio, but the rumour mill is working overtime under new Sporting Director <b>Grégory Lorenzi</b>, freshly arrived from Brest. Forward reinforcements dominate the incoming links - <b>Ousmane Dembélé</b>, <b>Luis Díaz</b> and <b>Martin Terrier</b> all mentioned - while question marks hang over <b>Igor Paixão</b>, <b>Nayef Aguerd</b> and goalkeeper <b>Gerónimo Rulli</b> amid outside interest.`,
  metaRow: `<span>DECISION-MAKER: <b>Pablo Longoria</b> (President)</span> <span>HEAD COACH: <b>Habib Beye</b></span> <span>WINDOW: <b>1 Jul – 31 Aug</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">5<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">Europa League</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: ``,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `Rulli, Paixão and Aguerd are all attracting interest, though none of the links look close to completion yet.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `€18m confirmed`, x: `Guendouzi's arrival is the only fee confirmed to date.` },
  spendOut: { v: `None confirmed`, x: `No departures confirmed this window despite several live enquiries.` },
  methodLegend: ``
};
