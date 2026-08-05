/* ============================================================
   MERCATO IQ · CLUB DATA · STADE BRESTOIS 29 · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Stade Brestois 29", mono: "SB29", slug: "stade-brest",
  primary: "#D2001C", primaryBright: "#FF5C6C", primaryDeep: "#7A0011",
  primaryRgb: "210,0,28",
  breadcrumb: ["France","Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Julien Lachuer (promoted internally 24 Jun 2026, following the sudden passing of Eric Roy on 17 Jun 2026)",
  dof: "Vacant - Grégory Lorenzi left after a decade at the club to become Olympique de Marseille's Sporting Director (28 May 2026)",
  europe: "None (2026/27)",
  finish: "12th Ligue 1 (2025/26)",
  owner: "Denis Le Saint (President/Chairman since 10 May 2016)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/brest/"],
  queries: ["Stade Brestois transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Stade Brestois 29"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [
  {name:"Pierre Lees-Melou", sub:"32 · CM · France", club:"Paris FC", pos:"CM", fee:"~€6.5m + bonuses", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed departure to newly-promoted Paris FC on a deal through June 2027, their fourth signing of the summer."},
  {name:"Daouda Guindo", sub:"Free transfer after contract expiry", club:"Stade de Reims", pos:"CM", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Midfielder joins Ligue 2 side Reims on a free transfer following his Brest contract expiration"}
];
const INCOMING = [
  {name:"Joseph Nonge", sub:"21 · CM · Belgium", club:"Kocaelispor", pos:"CM", report:"2 Aug 2026", src:"Sacha Tavolieri", tier:1, fee:"~€2.5m valuation", truth:75, prob:60, light:"g", trend:"flat", note:"Tavolieri reports personal terms are already agreed with the player; Brest are now negotiating a permanent fee with the Turkish club.", lastSeen:"2026-08-04T19:10:50Z", baseProb:60},
  {name:"Moussa Koné", sub:"ST · Free Agent", club:"Free Agent (ex-Nîmes)", pos:"ST", report:"3 Aug 2026", src:"TOPMercato.com", tier:3, fee:"Free (€0)", truth:50, prob:35, light:"y", trend:"flat", note:"Brest are weighing a reunion with a forward who previously scored against them, available on a free transfer.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35},
  {name:"Tochukwu Nnadi", sub:"MF · Nigeria", club:"Marseille", pos:"MF", report:"31 Jul 2026", src:"BUTFootballClub.fr / JeunesFooteux.com", tier:3, fee:"Loan or reduced fee (valued ~€6m)", truth:45, prob:25, light:"o", trend:"flat", note:"Squeezed for minutes at OM after his €6m move from Zulte Waregem, Brest are exploring a loan or permanent deal to relaunch him.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25}
];
const OUTGOING = [
  {name:"Joris Chotard", sub:"24 · CM · France", club:"Stade Brest", pos:"CM", report:"31 Jul 2026", src:"L'Équipe", tier:1, fee:"Undisclosed (valued ~€7m)", truth:65, prob:55, light:"g", trend:"flat", note:"Brest's second-most valuable player has accepted Saudi side Neom SC's proposal; clubs are still negotiating the fee.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55},
  {name:"Kamory Doumbia", sub:"23 · AM · Mali", club:"Stade Brest", pos:"AM", report:"2 Aug 2026", src:"Sport.fr / BFM Marseille", tier:2, fee:"Undisclosed", truth:55, prob:30, light:"y", trend:"flat", note:"New Marseille sporting director Grégory Lorenzi is monitoring the playmaker, but Brest are working to keep him after an injury-hit season.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Ludovic Ajorque", sub:"32 · ST · France", club:"Stade Brest", pos:"ST", report:"1 Aug 2026", src:"Sport.fr (But!)", tier:2, fee:"Undisclosed", truth:50, prob:25, light:"o", trend:"flat", note:"Lorenzi knows Ajorque from his own Brest days and has flagged the veteran forward as a possible reinforcement for Marseille's attack.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Romain Del Castillo", sub:"Attracting Ligue 1 interest amid club upheaval", club:"Ligue 1 rivals (unspecified)", pos:"RW", report:"Del Castillo, who contributed 13 goal involvements last season, is attracting interest from unspecified Ligue 1 rivals amid instability at Brest.", src:"Get French Football News", tier:3, fee:"Undisclosed", truth:45, prob:30, light:"y", trend:"flat", note:"Contract runs to 2027; interest described as not yet concrete", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Hugo Magnetti", sub:"Weighing a new challenge", club:"Ligue 1 rivals (unspecified)", pos:"CM", report:"Magnetti is reportedly evaluating his options this summer with a preference to seek a new challenge away from Brest.", src:"Get French Football News", tier:3, fee:"Undisclosed", truth:42, prob:30, light:"y", trend:"flat", note:"Contract runs to 2027; part of wider unrest following Éric Roy's death and sale of the club being explored", lastSeen:"2026-08-04T19:10:50Z", baseProb:30}
];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Brest are rebuilding their entire football department this summer: long-serving head coach <b>Eric Roy</b> passed away suddenly in June, with assistant <b>Julien Lachuer</b> promoted to replace him, while sporting director <b>Grégory Lorenzi</b> left the same month to take the equivalent role at Marseille."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "gffn-brest": {l:"Get French Football News · Brest", u:"https://www.getfootballnewsfrance.com/tag/brest/"},
  sachaTavolieriviaMorningFootJosephNonge: {l:"Sacha Tavolieri (via Morning Foot)", u:"https://morning-foot.com/ligue-1/brest/mercato-brest-joseph-nonge-kocaelispor/"},
  tOPMercatocomMoussaKon: {l:"TOPMercato.com", u:"https://www.topmercato.com/club/stade-brestois-29/"},
  bUTFootballClubfrTochukwuNnadi: {l:"BUTFootballClub.fr", u:"https://lesnouvellesdufoot.fr/france/sb29/"},
  lquipeviaTOPMercatoJorisChotard: {l:"L'Équipe (via TOPMercato)", u:"https://www.topmercato.com/2123948-mercato-le-2e-joueur-le-plus-cher-de-brest-dit-oui-a-une-destination-exotique/"},
  soccerwayPierreLeesMelou: {l:"Soccerway", u:"https://fr.soccerway.com/actualites/football-ligue-1-pierre-lees-melou-quitte-brest-et-s-engage-avec-le-paris-fc-jusqu-en-2027/Ot0NHKS7"},
  getFrenchFootballNewsLukeEntwistleRomainDelCastillo: {l:"Get French Football News (Luke Entwistle)", u:"https://www.getfootballnewsfrance.com/2026/exclusive-romain-del-castillo-and-hugo-magnetti-could-leave-brest/"},
  getFrenchFootballNewsDaoudaGuindo: {l:"Get French Football News", u:"https://www.getfootballnewsfrance.com/2026/official-daouda-guindo-completes-reims-switch/"}};

const LINKMAP = {
  "Joseph Nonge": ["sachaTavolieriviaMorningFootJosephNonge"],
  "Moussa Koné": ["tOPMercatocomMoussaKon"],
  "Tochukwu Nnadi": ["bUTFootballClubfrTochukwuNnadi"],
  "Joris Chotard": ["lquipeviaTOPMercatoJorisChotard"],
  "Kamory Doumbia": ["sportfrBFMMarseilleKamoryDoumbia"],
  "Ludovic Ajorque": ["sportfrLudovicAjorque"],
  "Pierre Lees-Melou": ["soccerwayPierreLeesMelou"],
  "Romain Del Castillo": ["getFrenchFootballNewsLukeEntwistleRomainDelCastillo"],
  "Hugo Magnetti": ["getFrenchFootballNewsLukeEntwistleRomainDelCastillo"],
  "Daouda Guindo": ["getFrenchFootballNewsDaoudaGuindo"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A club in mourning, rebuilding its leadership before the market moves`,
  heroLede: `Stade Brestois enter this window still processing the loss of long-serving head coach <b>Eric Roy</b>, who passed away in June at 58. Assistant <b>Julien Lachuer</b> has been promoted to succeed him, while sporting director <b>Grégory Lorenzi</b>, in the role for a decade, departed the same month to join Olympique de Marseille. No transfer business has been reported yet as the new-look football department settles in.`,
  metaRow: `<span>DECISION-MAKER: <b>Denis Le Saint</b> (President)</span> <span>HEAD COACH: <b>Julien Lachuer</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">12<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed Moves</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `No transfer deals reported as agreed this window; the sporting director post remains vacant.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: `No genuine transfer rumours have surfaced for Brest at time of writing - the honest state of the market for this club right now.`,
  spendIn: { v: `None reported`, x: `No incoming deals confirmed this window.` },
  spendOut: { v: `None reported`, x: `No outgoing deals confirmed this window.` },
  methodLegend: ``
};
