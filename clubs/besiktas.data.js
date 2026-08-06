/* ============================================================
   MERCATO IQ · CLUB DATA · BEŞIKTAŞ · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Beşiktaş", mono: "B", slug: "besiktas",
  primary: "#000000", primaryBright: "#C0C0C0", primaryDeep: "#000000",
  primaryRgb: "20,20,20",
  breadcrumb: ["Turkey","Süper Lig"]
};

const VOLATILE = {
  verified: "2026-07-29",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["besiktas transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const DEAD = [
  {name:"Darwin Nunez", sub:"27 · FW · Uruguay", club:"Al-Hilal", pos:"FW", report:"3 Aug 2026", src:"Sacha Tavolieri / SportBible", tier:2, fee:"Loan", truth:50, prob:28, light:"o", trend:"flat", note:"Al-Hilal willing to loan Nunez out after a disappointing spell; now a four-way Süper Lig chase alongside Galatasaray, Fenerbahce and Trabzonspor rather than an exclusive Besiktas move.", lastSeen:"2026-08-04T19:10:50Z", baseProb:28, dead:true, deadReason:"signed for trabzonspor", dir:"in", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Mauro Icardi", sub:"33 · FW · Argentina", club:"Free agent (ex-Galatasaray)", pos:"FW", report:"3 Aug 2026", src:"Fotomac", tier:3, fee:"Free", truth:25, prob:10, light:"r", trend:"down", note:"Besiktas management have explicitly denied any interest; his agent says he wants to stay in Europe. Included as a live but low-credibility line, not a genuine pursuit.", lastSeen:"2026-08-04T19:10:50Z", baseProb:10, dead:true, deadReason:"No credible snippet supports this link", dir:"in", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Dusan Vlahovic", sub:"26 · FW · Serbia", club:"Juventus", pos:"FW", report:"31 Jul 2026", src:"SPORT (via Derick Kinoti)", tier:3, fee:"Undisclosed", truth:30, prob:12, light:"r", trend:"flat", note:"Besiktas reportedly offered an improved two-year deal, but Vlahovic is said to be fixated on a move to Barcelona instead.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12, dead:true, deadReason:"No credible snippet supports this link", dir:"in", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Youssouf Fofana", sub:"27 · France · DM", club:"AC Milan", pos:"DM", report:"Besiktas have made the Milan holding midfielder their priority for the middle of the pitch and are reported to have opened official contact. Milan, who paid around €26m two years ago, are said to be ready to listen at about €20m, which is the figure the Turkish club are working towards. Fofana is contracted at San Siro until June 2028.", src:"Calciomercato / Corriere dello Sport, via Fotomac", tier:3, fee:"€20m", truth:65, prob:40, light:"y", trend:"flat", note:"Italian market sites and the Istanbul press are driving this, not a tier-one name. No confirmed bid has been lodged and Besiktas have several midfield irons in the fire at once, which usually signals a wide net rather than an advanced deal.", lastSeen:"2026-08-06T08:09:17Z", baseProb:40, dead:true, deadReason:"No credible snippet supports this link; incomplete page entry", dir:"in", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Franck Kessie", sub:"29 · Ivory Coast · CM", club:"Free agent (ex Al-Ahli)", pos:"CM", report:"The Ivory Coast captain, out of contract after leaving Al-Ahli, was proposed to Besiktas by intermediaries and the board are reported to have put an offer to him as insurance against Wilfred Ndidi leaving. Al Ittihad have also moved for him and can outbid the Turkish side on salary, with Kessie having earned around €14m a year in Saudi Arabia.", src:"Takvim, via A Spor", tier:3, fee:"Free", truth:60, prob:35, light:"y", trend:"flat", note:"Agent-driven story, first surfaced by French site 225foot and recycled locally. Wage demands make it a long shot and the Saudi competition is the more plausible destination. Low confidence until Besiktas confirm terms.", lastSeen:"2026-08-06T08:09:17Z", baseProb:35, dead:true, deadReason:"No credible snippet supports this link; incomplete page entry", dir:"in", deadAt:"2026-08-06T14:21:38Z"},
  {name:"Wilfred Ndidi", sub:"29 · Nigeria · DM", club:"Al Diriyah", pos:"DM", report:"Saudi side Al Diriyah are pursuing the Nigerian and have held talks with both Besiktas and the player. An offer of around €7m was turned down and a fresh, improved proposal is expected in the coming days. Besiktas have started lining up midfield replacements in case he goes.", src:"A Spor", tier:3, fee:"€7m rejected", truth:70, prob:45, light:"y", trend:"flat", note:"Turkish-press sourced rather than tier one, but the pattern of a rejected bid plus contingency planning for Kessie lends it some weight.", lastSeen:"2026-08-06T08:09:17Z", baseProb:45, dead:true, deadReason:"No credible snippet confirms Al Diriyah pursuit or Beşiktaş outgoing link", dir:"out", deadAt:"2026-08-06T14:21:38Z"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"Besiktas have missed out on Mohamed Salah, who joined rivals Trabzonspor, and are one of four Süper Lig clubs chasing loaned-out Al-Hilal forward Darwin Nunez."}
];
const IGNORE = [];
const POSITIONS = [
  {p:"Centre-forward", w:40, x:"Marquee forward names (Nunez, Vlahovic) remain linked after Salah joined Trabzonspor, but each faces genuine competition from other Süper Lig or European clubs."}
];
const WATCHLIST = [];

const HUB = {
  football365Salah: {l:"Football365 · Salah", u:"https://www.football365.com/news/liverpool-mohamed-salah-agreement-next-club-nunez"},
  sportbibleNunez: {l:"SportBible · Nunez", u:"https://www.sportbible.com/football/football-news/darwin-nunez-in-talks-over-move-as-transfer-tug-of-war-begins-551522-20260803"},
  fotomacIcardi: {l:"Fotomac · Icardi", u:"https://www.fotomac.com.tr/besiktas/2026/08/03/mauro-icardi-besiktasa-transfer-olacak-mi-yonetimden-flas-karar"},
  peoplespersonVlahovic: {l:"The Peoples Person · Vlahovic", u:"https://thepeoplesperson.com/2026/07/31/dusan-vlahovic-man-united-target-makes-barcelona-call-after-besiktas-offer-313507/"},
  fotomacYoussoufFofana: {l:"Fotomac", u:"https://www.fotomac.com.tr/besiktas/2026/08/05/fofana-radarda"},
  aSporFranckKessie: {l:"A Spor", u:"https://www.aspor.com.tr/besiktas/2026/08/05/besiktasin-transferde-b-plani-franck-kessie"}};

const LINKMAP = {
  "Mohamed Salah": ["football365Salah"],
  "Darwin Nunez": ["sportbibleNunez"],
  "Mauro Icardi": ["fotomacIcardi"],
  "Dusan Vlahovic": ["peoplespersonVlahovic"],
  "Youssouf Fofana": ["fotomacYoussoufFofana"],
  "Franck Kessie": ["aSporFranckKessie"],
  "Wilfred Ndidi": ["aSporFranckKessie"]};
const WL_LINKMAP = {
  "Mohamed Salah": ["football365Salah"],
  "Darwin Nunez": ["sportbibleNunez"]
};

const PROSE = {
  heroH2: `Besiktas chase a marquee free-agent forward amid a crowded Süper Lig scrap`,
  heroLede: `Besiktas have missed out on <b>Mohamed Salah</b>, who chose a rival Trabzonspor move, but remain in the mix for one of the summer's biggest loan stories: <b>Darwin Nunez</b> has become the subject of a four-club Süper Lig chase after Al-Hilal made him available on loan. Besiktas have also been linked with free agent <b>Mauro Icardi</b> (denied by the club) and Juventus forward <b>Dusan Vlahovic</b>, who is reportedly fixated on a Barcelona move instead.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `No departures reported as advanced this window.`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};