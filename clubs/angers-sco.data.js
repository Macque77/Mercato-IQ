/* ============================================================
   MERCATO IQ · CLUB DATA · ANGERS SCO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Angers SCO", mono: "SCO", slug: "angers-sco",
  primary: "#0A0A0A", primaryBright: "#8C8C8C", primaryDeep: "#000000",
  primaryRgb: "10,10,10",
  breadcrumb: ["France","Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Stéphane Gilli (strongly linked since 4 Jun 2026 following Alexandre Dujeux's exit; not yet fully confirmed in the latest reporting)",
  dof: "Laurent Boissier (Director of Sport)",
  europe: "None (2026/27)",
  finish: "13th Ligue 1 (2025/26)",
  owner: "Chabane family; Romain Chabane (President)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/angers/"],
  queries: ["Angers SCO transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Angers SCO"
};

const CONFIRMED_IN = [
  {name:"Branco van den Boomen", sub:"27 · CM · Netherlands", to:"free transfer after terminating Ajax contract", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed 2 Jul 2026. Experienced Ligue 1-tested midfielder returns to France after his Ajax spell was cut short."},
  {name:"Anthony Bermont", sub:"21 · LW · France", club:"loan from RC Lens", pos:"LW", fee:"Loan", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left-footed-friendly attacking winger loaned in from RC Lens for the 2026-27 season, announced 16 June 2026."},
  {name:"Anthony Lopes", sub:"35 · GK · Portugal", club:"free from FC Nantes", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Veteran keeper signed a free two-year deal (plus option year) after his Nantes contract expired; announced 15-16 June 2026."},
  {name:"Usman Simbakoli", sub:"24 · ST · Central African Republic", club:"permanent from RWDM Brussels", pos:"ST", fee:"~€250k", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Forward signed from Belgian side RWDM, confirmed 3-4 July 2026; later extended his Angers contract to 2029."},
  {name:"Amine El Ouazzani", sub:"25 · FW · France/Morocco", club:"loan from Sporting Braga", pos:"FW", fee:"Loan (no purchase option)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Franco-Moroccan forward joined on a season-long loan without a buy option, confirmed 21 July 2026."}
];

const CONFIRMED_OUT = [
  {name:"Hervé Koffi", sub:"GK · Burkina Faso", club:"loan return to RC Lens", pos:"GK", fee:"Loan return", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan spell ended 30 June 2026; returned to parent club RC Lens (subsequently loaned onward to Union Saint-Gilloise)."},
  {name:"Goduine Koyalipou", sub:"FW · Central African Republic", club:"loan return to RC Lens", pos:"FW", fee:"Loan return", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Loan spell ended 30 June 2026; returned to parent club RC Lens."},
  {name:"Sidiki Chérif", sub:"19 · ST · Guinea", club:"permanent to Fenerbahçe", pos:"ST", fee:"€18m buy-option activated (deal incl. Jan 2026 €4m loan fee + up to €3m bonuses, total ~€25m)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Mandatory purchase option agreed as part of a January 2026 loan was activated in summer 2026, making this Angers' joint-record sale."},
  {name:"Lanroy Machine", sub:"20 · FW", club:"loan to SC Heerenveen", pos:"FW", fee:"Loan (with purchase option)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"20-year-old forward loaned to Dutch side Heerenveen with a buy option, confirmed 27-28 July 2026."},
  {name:"Dan Sinaté", sub:"20 · LB · Mali", club:"loan to Amiens SC", pos:"LB", fee:"Loan (no purchase option)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Young left-back loaned to Ligue 2 side Amiens SC for the season, confirmed 27-28 July 2026."},
  {name:"Florent Hanin", sub:"35 · LB · France", club:"free to Néa Salamina (Cyprus)", pos:"LB", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Veteran left-back left as a free agent after three seasons at Angers; signed with Cypriot club Néa Salamina around 16-17 July 2026."},
  {name:"Max-Edgar Chabot", sub:"18 · GK · France", club:"free to Manchester City", pos:"GK", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Highly-rated academy goalkeeper refused a first professional contract at Angers and moved to Manchester City as a free agent, confirmed around 29 July 2026."}
];

const INCOMING = [];

const OUTGOING = [];

const RISERS = [
  {ar:"⬆", t:"<b>Van den Boomen signs as a free agent</b>: experienced midfielder arrives after leaving Ajax by mutual consent."}
];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Angers' coaching search continues: Stéphane Gilli, available since his February exit from Paris FC, is the reported frontrunner to replace Alexandre Dujeux."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "gffn-angers": {l:"Get French Football News · Angers", u:"https://www.getfootballnewsfrance.com/tag/angers/"},
  africaFootJosephKalulu: {l:"AfricaFoot", u:"https://africafoot.com/joseph-kalulu-sur-le-radar-dangers/"},
  lesTransfertsPaulosAbraham: {l:"Les Transferts", u:"https://www.les-transferts.com/rumeurs-transferts/angers-sur-la-piste-dun-attaquant-suedois/"},
  footMercatoYahiaJlidi: {l:"Foot Mercato", u:"https://www.footmercato.net/a1014363220541494574-monaco-a-propose-4-meur-pour-arracher-yahia-jlidi-a-angers"},
  walfootHarounaDjibirin: {l:"Walfoot", u:"https://www.walfoot.be/news/2026-05-05/15-millions-pour-un-joueur-pas-encore-titulaire-en-ligue-1--le-dilemme-du-club-de-bruges"},
  angersSCOofficialAnthonyBermont: {l:"Angers SCO (official)", u:"https://angers-sco.fr/anthony-bermont-est-noirblanc/"},
  footMercatoAnthonyLopes: {l:"Foot Mercato", u:"https://www.footmercato.net/a684958082846347935-angers-annonce-larrivee-danthony-lopes"},
  footballKOUsmanSimbakoli: {l:"Football KO", u:"https://footballko.com/2026/07/04/mercato-officiel-usman-simbakoli-fait-son-retour-a-angers-sco-jusquen-2029/"},
  footballKOAmineElOuazzani: {l:"Football KO", u:"https://footballko.com/2026/07/21/mercato-officiel-angers-sco-recrute-un-nouvel-attaquant/"},
  euroFootNewsHervKoffi: {l:"EuroFootNews", u:"https://www.eurofootnews.net/mercato-angers-le-point-complet-au-29-juillet-2026/"},
  foot01SidikiChrif: {l:"Foot01", u:"https://www.foot01.com/mercato/officiel-sidiki-cherif-quitte-angers-pour-fenerbahce"},
  footballKOLanroyMachine: {l:"Football KO", u:"https://footballko.com/2026/07/28/mercato-officiel-angers-sco-prete-un-attaquant-au-sc-heerenveen-avec-option-dachat/"},
  footballKODanSinat: {l:"Football KO", u:"https://footballko.com/2026/07/28/mercato-officiel-un-jeune-defenseur-passe-dangers-a-amiens-en-pret/"},
  angersSCOofficialFlorentHanin: {l:"Angers SCO (official)", u:"https://angers-sco.fr/merci-flo/"},
  angersInfoMaxEdgarChabot: {l:"Angers Info", u:"https://my-angers.info/07/29/un-jeune-gardien-quitte-angers-sco-pour-rejoindre-manchester-city/191678"},
  angersInfoAmineElOuazzani: {l:"Angers Info", u:"https://news.google.com/rss/articles/CBMipAJBVV95cUxPN1dUT1JyZGIxcmxheFd2clVzQ01BUjh6a0tIVmJVTnVrbVFZN1FnZi0wNzRCRTlWcWlJb0JJaFlva0kzN012SDhnOGkxWUdqeFdTNmxGZlZxTF92TWtyMlFEc3dOM1ByY2JaR3BRNGFSVWlvS0txeVV6dWJheFRzRS1keW56WjczRVU4aEs0RDJlUEFUbGhIWnZ1MzNmOXRha25yQzV0OXBVb21iMGpVNjRMTHdyMW9GMG9aelVVeGJqa0lTVTNPUFB4bnZxOXhIdWdRS2s0Y1M5TFk5MU5CdjktQzFRand2U3k5Wl9DV3F5c0VvQWJBWnJZdS0yYUJWcEZTaWRGRE5VbDQtcVFHWXo3Z2dzVDVlZ1BENHJtcjdmUjZq0gGqAkFVX3lxTE5aVmJmM2pzdFVhTGdQWjdSQWhvbHZNNmVEYzZrZkpEcDZMSENLcXFlcW9aVWN5MUZaNjdSZ0dKeGtMWF9fVVRPQkpUaTRBZEFnbEl4V3RVeDVSSVBwR20yNmxJbm5fX3FmaVhHT1M3MFpMSTJaNEc2YjFfZWV0RnR3LXlpV0VZWHN2bmpoRVduWTVzZEtDUlphZEw0dTFXbC1EQzlQTGFxUXN0V1dBTmdfYm1QOVI0OElFOUFiR251TWZJODFLaHRGcGNCMi1acURNWnpFRVNkM3psRGtqY2hrRS1RNzhoOEVlbWwySVU1Y0FmNGpKdk8wMTR0am04dWFpcEwxa3VJUGI3aVF0V21pLU5fUHpaekxheE1Ha1o2Mnd5NkpuZ2NNR2c?oc=5"},
  lesVioletsComVandenBoomen: {l:"LesViolets.Com", u:"https://news.google.com/rss/articles/CBMiqgFBVV95cUxPcE1kRlU4NXltM3hqTG4yT1pMSnlJelpJa1FKT0FYZkpNbFpzUU12UzBENVdXMk56T0dGVWNnb2JGWjdUa1VFckxrWUxCWlVYRWN5MkFvRFdfUDVEYU5hSlpibHRlVjVoOFphY1BmaEhiU2VJRWZqdTJyT3V0ZkdQQXFkdWd0a1lDNkFmYVVtQXk3UVdHeGtseGtXQW1HWVV5V19uQ191Y2JQUQ?oc=5"},
  ouestFranceLanroyMachine: {l:"Ouest-France", u:"https://news.google.com/rss/articles/CBMi-AFBVV95cUxOYWdETFZvbG80VjhtRUJCdlc1WGh0bW80MXJLMnRybDZKMDNybXVuUF9OVEhPR1pwSVRJUUszaS1HOEx4TkRlVkRCX1hEOHlmaGdTREJVdGdLV3ZwVmh6UDgtc3bicDIxd05oVUFkVEtuZ2ktQ3c1NlBFZ1ZLWFA0TzhPQUlUXzZ5UTJ2SHc1Y0tYdlV4RDh4MFp5Wm5kdDdzdUVtRk1NZmNCdmEtcFRTSE9lQXB1Q2VQWGd0RU8yelJfQV9pc3RrWDFBc21UZEZFZlllbVBaaFctRTFZbXMzN0xwUkc4dnFZd05SWl9qaXlLWGp3N1V3bg?oc=5"},
  ouestFranceLanroyMachine1: {l:"Ouest-France", u:"https://news.google.com/rss/articles/CBMi-AFBVV95cUxOYWdETFZvbG80VjhtRUJCdlc1WGh0bW80MXJLMnRybDZKMDNybXVuUF9OVEhPR1pwSVRJUUszaS1HOEx4TkRlVkRCX1hEOHlmaGdTREJVdGdLV3ZwVmh6UDgtc3bicDIxd05oVUFkVEtuZ2ktQ3c1NlBFZ1ZLWEY0TzhPQUlUXzZ5UTJ2SHc1Y0tYdlV4RDh4MFp5Wm5kdDdzdUVtRk1NZmNCdmEtcFRTSE9lQXB1Q2VQWGd0RU8yelJfQV9pc3RrWDFBc21UZEZFZlllbVBaaFctRTFZbXMzN0xwUkc4dnFZd05SWl9qaXlLWGp3N1V3bg?oc=5"},
  ouestFranceLanroyMachine2: {l:"Ouest-France", u:"https://news.google.com/rss/articles/CBMi-AFBVV95cUxOYWdETFZvbG80VjhtRUJCdlc1WGh0bW80MXJLMnRybDZKMDNybXVuUF9OVEhPR1pwSVRJUUszaS1HOEx4TkRlVkRCX1hEOHlmaGdTREJVdGdLV3ZwVmh6UDgtc3bicDIxd05oVUFkVEtuZ2ktQ3c1NlBFZ1ZLWFE0TzhPQUlUXzZ5UTJ2SHc1Y0tYdlV4RDh4MFp5Wm5kdDdzdUVtRk1NZmNCdmEtcFRTSE9lQXB1Q2VQWGd0RU8yelJfQV9pc3RrWDFBc21UZEZFZlllbVBaaFctRTFZbXMzN0xwUkc4dnFZd05SWl9qaXlLWGp3N1V3bg?oc=5"}};

const LINKMAP = {
  "Branco van den Boomen": ["gffn-angers"],
  "Joseph Kalulu": ["africaFootJosephKalulu"],
  "Paulos Abraham": ["lesTransfertsPaulosAbraham"],
  "Yahia Jlidi": ["footMercatoYahiaJlidi"],
  "Harouna Djibirin": ["walfootHarounaDjibirin"],
  "Anthony Bermont": ["angersSCOofficialAnthonyBermont"],
  "Anthony Lopes": ["footMercatoAnthonyLopes"],
  "Usman Simbakoli": ["footballKOUsmanSimbakoli"],
  "Amine El Ouazzani": ["footballKOAmineElOuazzani", "angersInfoAmineElOuazzani"],
  "Hervé Koffi": ["euroFootNewsHervKoffi"],
  "Goduine Koyalipou": ["euroFootNewsHervKoffi"],
  "Sidiki Chérif": ["foot01SidikiChrif"],
  "Lanroy Machine": ["footballKOLanroyMachine", "ouestFranceLanroyMachine", "ouestFranceLanroyMachine1", "ouestFranceLanroyMachine2"],
  "Dan Sinaté": ["footballKODanSinat"],
  "Florent Hanin": ["angersSCOofficialFlorentHanin"],
  "Max-Edgar Chabot": ["angersInfoMaxEdgarChabot"],
  "Van den Boomen": ["lesVioletsComVandenBoomen"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A new coach search and one seasoned free-agent arrival`,
  heroLede: `Angers finished a comfortable 13th in their return season and enter this window still resolving their bench: <b>Alexandre Dujeux</b> departed in June and <b>Stéphane Gilli</b> - out of work since leaving Paris FC in February - is the reported favourite to replace him. On the pitch, free-agent midfielder <b>Branco van den Boomen</b> has already arrived after terminating his Ajax contract.`,
  metaRow: `<span>DECISION-MAKER: <b>Romain Chabane</b> (President)</span> <span>HEAD COACH: <b>TBC</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">13<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed In</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Head coach appointment still to be finalised; Stéphane Gilli remains the most strongly linked candidate.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `Free transfer`, x: `Van den Boomen arrives on a free after his Ajax exit.` },
  spendOut: { v: `None reported`, x: `No confirmed departures this window.` },
  methodLegend: ``
};
