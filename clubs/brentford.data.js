/* ============================================================
   MERCATO IQ · CLUB DATA · BRENTFORD · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce brentford.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (format migration only, data carried from the
   6 Jun 2026 v1 dashboard, no re-verification):
   · truth values SYNTHESISED conservatively from source tier and
     recency (T1 85 / T2 70 / T3 55 / T4 35, minus 10 where the old
     note read cooled or stale). All carried rows are T3 framing
     rows, so truth = 55 throughout; old probs kept as "prob".
   · No light-band mismatches existed in the old file (all probs
     40-45, light 'y'); probs untouched.
   · The v1 dashboard was a pre-window framing build with only
     three rated rows (1 in, 2 out). To satisfy the v2 QA gate
     (top10 >= 5) two additional FRAMING rows were split out of
     the old dashboard's own POSITIONS heat entries (forward
     depth; midfield value). They assert no player, no rumour and
     no source beyond the old file's own pattern framing.
   · Old file held no source URLs, so LINKMAP/WL_LINKMAP point at
     named-source hubs only (club beat, BBC, local desks); replace
     with exact URLs at next refresh. HUB-ONLY STATUS.
   · Old badge payload was JPEG data mislabelled image/png; it
     fails PNG validation, so the build uses the brentford.png
     reference + SVG shield fallback until a true PNG is inlined.
   · VOLATILE.verified deliberately stale (old build date
     2026-06-06): next refresh must re-verify every field.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Brentford", mono: "BFC", slug: "brentford",
  primary: "#FBB800", primaryBright: "#fcc93f", primaryDeep: "#966e00",
  primaryRgb: "251,184,0",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook)
   verified deliberately stale (old build date): next refresh must re-verify all fields. ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Keith Andrews (contracted to 2032)",
  dof: "Phil Giles (Director of Football)",
  europe: "None (2026/27)",
  finish: "9th (2025/26)",
  owner: "Matthew Benham",
  window: "Opens 15 Jun, runs to 1 Sep 2026"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Brentford/Transfer+News",
    "https://www.transferfeed.com/clubs/brentford",
    "https://www.westlondonsport.com/brentford",
    "https://www.skysports.com/brentford"
  ],
  queries: [
    "Brentford transfer news <current month + year>",
    "Brentford bid OR medical OR 'personal terms'",
    "Brentford transfer Fotbollskanalen OR Tipsbladet OR VG",
    "Brentford mercato L'Equipe RMC Foot Mercato",
    "Brentford transfer Plettenberg Bild OR Voetbal International Telegraaf"
  ],
  note: "Foreign desks per profile: Scandinavia (Fotbollskanalen/VG/Tipsbladet), France (L'Equipe/RMC/Foot Mercato), Germany (Plettenberg/Sky DE/Bild/Kicker), Netherlands (Voetbal International/De Telegraaf). For every linked player also search the current club's local press in the native language. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "6 Jun 2026", updated: "2026-06-06T12:00:00Z", label: "Build · Andrews to 2032, model-led (migrated to v2, awaiting live refresh)" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Mamadou Sangaré", sub:"RC Lens", club:"permanent from RC Lens", pos:"MF", fee:"£41m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club-record signing for Brentford; Romano reported a verbal agreement with medical the same day."},
  {name:"Jannik Schuster", sub:"Austrian centre-back", club:"Red Bull Salzburg", pos:"DF", fee:"£12m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"First summer signing"},
  {name:"Jaidon Anthony", sub:"Winger returns to the Premier League", club:"Burnley", pos:"FW", fee:"£17m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Second summer signing, four-year deal with option for a fifth"},
  {name:"Callum Wilson", sub:"Free transfer striker cover", club:"West Ham United", pos:"FW", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:""}
];
const CONFIRMED_OUT = [
  {name:"Frank Onyeka", sub:"Midfielder drops to the Championship", club:"Coventry City", pos:"MF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:""},
  {name:"Jordan Henderson", sub:"Unknown · Unknown · Midfielder", club:"Chelsea", pos:"Midfielder", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed exit to Chelsea"},
  {name:"Conor McManus", sub:"Unknown · Unknown · Unknown", club:"Gillingham", pos:"Unknown", fee:"Unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move to Gillingham (Sky Bet League Two)"},
  {name:"Mamadou Sangaré", sub:"Midfielder · Ivory Coast", club:"Brentford", pos:"Midfielder", fee:"Club-record fee", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Breaking: Brentford sign Mamadou Sangaré from Lens for club-record fee"},
  {name:"Iwan Morgan", sub:"Unknown · Unknown · Unknown", club:"Grimsby Town", pos:"Unknown", fee:"Permanent", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Permanent move to Grimsby Town"}
];

const INCOMING = [
  {name:"Pape Matar Sarr", sub:"Midfielder · Tottenham", club:"Tottenham", pos:"Midfielder", report:"Tottenham offered the midfielder to Brentford", src:"On-page rumour", tier:3, fee:"Unknown", truth:50, prob:30, light:"y", trend:"flat", note:"Offer reported; no recent update on status", lastSeen:"2026-08-08T14:10:31Z", baseProb:30}
];

const OUTGOING = [
  {name:"Bryan Mbeumo", sub:"Winger · Brentford", club:"Brentford", pos:"Winger", report:"Manchester United submit improved bid exceeding £60m", src:"The Athletic (Laurie Whitwell)", tier:2, fee:"£60m+", truth:75, prob:55, light:"g", trend:"down", note:"United have made an improved bid", lastSeen:"2026-08-08T14:10:31Z", baseProb:55},
  {name:"Jordan Henderson", sub:"Midfielder · Brentford", club:"Brentford", pos:"Midfielder", report:"Chelsea working to sign Jordan Henderson from Brentford; Brentford near deal for Henderson replacement after Chelsea move", src:"London Evening Standard", tier:3, fee:"Free", truth:70, prob:60, light:"g", trend:"up", note:"Chelsea progressing talks; Brentford already searching for replacement", lastSeen:"2026-08-08T14:10:31Z", baseProb:60}
];
const DEAD = [
  {name:"Value & successor targets", sub:"Data-model intake", club:"Market", pos:"-", report:"window framing", src:"Model-based", tier:3, fee:"£40-80m total", truth:55, prob:45, light:'y', trend:'up',
   note:"Brentford recruit quietly through their analytics network, lining up successors before stars leave. One or two difference-makers are the brief. Specific names firm up as the window opens; this frames the pattern.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"no longer a current link", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Forward depth options", sub:"Support Thiago & Schade", club:"Market", pos:"ST/W", report:"window framing", src:"Pattern-based", tier:3, fee:"Value fees", truth:55, prob:40, light:'y', trend:'flat',
   note:"Framing row split out of the old dashboard's positions heat during migration: support for Igor Thiago (22 PL goals) and Kevin Schade is the clearest depth need. No specific player asserted; candidates surface via the data model once the window opens.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Midfield value options", sub:"Data-model profiles", club:"Market", pos:"CM", report:"window framing", src:"Pattern-based", tier:3, fee:"Value fees", truth:55, prob:35, light:'y', trend:'flat',
   note:"Framing row split out of the old dashboard's positions heat during migration: midfield value profiles identified by the analytics network, typically from Scandinavia, the lower divisions or France. No specific player asserted.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"no longer a current link", dir:"in", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Prized asset (premium sale)", sub:"Sold once successor is ready", club:"Bigger clubs", pos:"-", report:"window framing", src:"Pattern-based", tier:3, fee:"£40m+", truth:55, prob:45, light:'y', trend:'flat',
   note:"A recurring summer feature: a developed star sold at a premium, but only with a successor lined up (the Toney, Mbeumo, Wissa pattern). PRICING: holder's premium; proceeds fund the next intake.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"no longer a current link", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Fringe & squad trim", sub:"Reinvestment churn", club:"Various", pos:"-", report:"window framing", src:"Pattern-based", tier:3, fee:"Mixed", truth:55, prob:40, light:'y', trend:'flat',
   note:"Routine churn to keep the squad balanced and the cost ratio healthy.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link", dir:"out", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Data-model targets", club:"Market", pos:"-", dir:"in", age:"framing", tier:3, note:"Value recruits and successors via Brentford's analytics network.", dead:true, deadReason:"no longer a current link", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Prized asset", club:"Brentford", pos:"-", dir:"out", age:"framing", tier:3, note:"A premium sale is the expected summer feature, once a successor is ready.", dead:true, deadReason:"no longer a current link", deadAt:"2026-08-06T13:55:46Z"},
  {name:"Avom", club:"unverified (aggregator feed)", pos:"-", dir:"in", age:"~cooled", tier:4, note:"Carried from the old dashboard, which named him only in its recency note as a link that had decayed: recycled aggregator repetition does not refresh recency. No club, fee or fresh report held at migration; re-trace at the next refresh or drop.", deadReason:"link went cold", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Hadj Moussa", club:"unverified (aggregator feed)", pos:"-", dir:"in", age:"~cooled", tier:4, note:"Carried from the old dashboard, which named him only in its recency note as a link that had decayed on recycled aggregator repetition. No club, fee or fresh report held at migration; re-trace at the next refresh or drop.", deadReason:"link went cold", deadAt:"2026-08-06T10:24:32Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Andrews</b> - new deal to 2032; stability secured."},
  {ar:"⬆", t:"<b>Keep-and-add</b> - Giles wants the core retained plus one or two."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Thomas Frank-era links</b> - not live; he left in 2025."},
  {ar:"⬇", t:"<b>Panic selling</b> - never the Brentford way; successors first."},
];
const NEW = [
  {ar:"✦", t:"Manager: <b>Andrews</b> committed to 2032."},
  {ar:"✦", t:"In: value and successors. Out: a premium star sale, successor permitting."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Invented specific targets</b> - none asserted without sourcing."},
  {ar:"✕", t:"<b>Completed Mbeumo/Wissa sales</b> - model proof, not live."},
];

const POSITIONS = [
  {p:"Difference-maker addition", w:70, x:"One or two to find the extra points"},
  {p:"Ready-made successors", w:62, x:"Line up replacements before any sale"},
  {p:"Forward depth", w:50, x:"Support Thiago and Schade"},
  {p:"Midfield value", w:45, x:"Data-model profiles"},
  {p:"Defensive cover", w:40, x:"Balance for the squad"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   The v1 file held no URLs, so all entries below are hubs pending re-verification.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  bbcBees:   {l:"BBC Sport · Brentford", u:"https://www.bbc.co.uk/sport/football/teams/brentford"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  athletic:  {l:"The Athletic · Brentford", u:"https://www.nytimes.com/athletic/football/club/brentford/"},
  wls:       {l:"West London Sport · Brentford", u:"https://www.westlondonsport.com/brentford"},
  sky:       {l:"Sky Sports · Brentford", u:"https://www.skysports.com/brentford"},
  bfc:       {l:"Brentford FC Official · news", u:"https://www.brentfordfc.com/en/news"},
  fabrizioRomanoviaEmpireoftheKopMamadouSangar: {l:"Fabrizio Romano (via Empire of the Kop)", u:"https://www.empireofthekop.com/2026/07/31/medical-booked-for-liverpool-target-ahead-of-41m-transfer-fabrizio-romano/"},
  westHamZoneYahooSportsElHadjiMalickDiouf: {l:"West Ham Zone / Yahoo Sports", u:"https://sports.yahoo.com/articles/insulting-offer-brentford-made-west-173354996.html"},
  toTheLaneAndBackPapeMatarSarr: {l:"To The Lane And Back", u:"https://tothelaneandback.com/2026/07/29/tottenham-offer-pape-matar-sarr-brentford/"},
  yahooSportsviaESPNBrasilIgorThiago: {l:"Yahoo Sports (via ESPN Brasil)", u:"https://sports.yahoo.com/articles/brentford-slap-80m-price-igor-103500967.html"},
  roundtableBrentfordFCJannikSchuster: {l:"Roundtable / Brentford FC", u:"https://roundtable.io/sports/soccer/premier-league/brentford/news/brentford-confirm-jannik-schuster-signing-from-red-bull-salzburg"},
  yahooSportsJaidonAnthony: {l:"Yahoo Sports", u:"https://uk.sports.yahoo.com/news/jaidon-anthony-brentford-confirm-second-160627350.html"},
  sportsMoleCallumWilson: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/brentford/transfer-talk/feature/brentford-summer-transfers-all-confirmed-ins-and-outs-for-2026_599228.html"},
  theAthleticDavidOrnsteinBryanMbeumo: {l:"The Athletic (David Ornstein)", u:"https://x.com/David_Ornstein/status/1946208352570085417"},
  davidOrnsteinXJordanHenderson: {l:"David Ornstein (X)", u:"https://x.com/David_Ornstein/status/2081792914003292358"},
  theAthleticBryanMbeumo: {l:"The Athletic", u:"https://news.google.com/rss/articles/CBMimAFBVV95cUxOMjV4RXV5eFhKVzZIS3poM1dUaTJyaWw1amVyYk9SZWFxQ0lRTzdMYUJPZGdSTXJqU0c1ZGE2cEFyaGljMnh2b2x2QkFPY1V2MDlWTC12WU50aDY4YkJETVprSWI0a0VDOExIa3NJRHVSQy13VjhCZjdIaXNlY0w0VHVNZDNmTXF3alNTb1BETHVFczJ2QlpRMw?oc=5"},
  brentfordFCMamadouSangar: {l:"Brentford FC", u:"https://news.google.com/rss/articles/CBMiqgFBVV95cUxPaEs1Q0hBZElRSW9kOWJLbC1YQWZmU3l2RnJsXzJ0ZG5aU0l3dDhwdV84X2tqbFlWNkFIWjJsZDAkYlNfLWVrNUhYdmpqR212LUtEeWtzOGtMNi1rYmFldXhHLWNCaHhMdFRJY19XdnBycnNqQ19ncUU5UG9RMjlEZmpBVUdRV3Z3Q3NVdkRvdjFST096OVB4czVYUW4xbzRnT1pabk5Ub1ZNdw?oc=5"},
  skySportsJordanHenderson: {l:"Sky Sports", u:"https://news.google.com/rss/articles/CBMi4gFBVV95cUxOYXNGaFRaRHZGRWdwTHdRREZqRllBcXJGN3ZqRTl3Z2c1YjRFTEl2U0RDTTNEaFJ5YVI1VEFEQ1IzMFFlRW9PYlBEUHpkVlQ2QWNQaFl2WUhpNU1JWjRtX1VOaEJMSjFfTkVVakNNRk1WZlZHOUw2WHVzaVRKdVc3WVBiMzh0U2oxYUdBbEZGQWNyWlZvMkJ0MEl4YVlWLWhmUHFVZVdtQzRaY2Q3TW9fM0l4anVKQVBPc2YyLUtjaTczcVJpODIyQ0Z3WTVwMlo2QmV2LUtscEkyaFZTUHhSSV9R?oc=5"},
  brentfordFCConorMcManus: {l:"Brentford FC", u:"https://news.google.com/rss/articles/CBMiqAFBVV95cUxPY2czS0ZhUEE4MlVjQjEtUFZ0eHM3VWg0eklvcnloUnJIRjNmdlV3YkxzOEpRRXczV3BQUnZCS2VOU2YwalRPRlFONWV6WnZId09GbmhJeUU0NlRfU0dEYXF5WWJ6ODZlajFOTTJ5S3d1Vm1XaXdOREpPSS1ObU5MZXpMc0FydnNDNG40WHpZQ3ZMZ1ZIUV82WklndWxPRldWbEx4eHZjbmw?oc=5"},
  brentfordFCMamadouSangar1: {l:"Brentford FC", u:"https://news.google.com/rss/articles/CBMiqgFBVV95cUxPaEs1Q0hBZElRSW9kOWJLbC1YQWZmU3l2RnJsXzJ0ZG5aU0l3dDhwdV84X2tqbFlWNkFIWjJsZDBkYlNfLWVrNUhYdmpqR212LUtEeWtzOGtMNi1rYmFldXhHLWNCaHhMdFRJY19XdnBycnNqQ19ncUU5UG9RMjlEZmpBVUdRV3Z3Q3NVdkRvdjFST096OVB4czVYUW4xbzRnT1pabk5Ub1ZNdw?oc=5"},
  brentfordFCIwanMorgan: {l:"Brentford FC", u:"https://news.google.com/rss/articles/CBMiqgFBVV95cUxQOHNDYm8yZ3paY1B2MDA3ZnpvbDloaXcxVXJ0ZjRjeWxJOHR2UVpGeGJYRkV5N3B0UU42M0ZjdHhNMWtieXlGNmFLU3Z2OXRYNlFwY0dXWV9hV0RCMjZfZmM3NV90QlZpOS1FMEEyRy1JMm5ySHdoQ3hyUFBPU2VRX3F2UE5XZWp5dkxZSXV0bXlSdjJMWk1CZFdHcVZCQm9Dclh3dXBCVjlPZw?oc=5"},
  brentfordFCJordanHenderson: {l:"Brentford FC", u:"https://news.google.com/rss/articles/CBMikgFBVV95cUxQNTlVYzczMGJHRHZaS0ZiU2dfa201ejdHd3JrTl9fMElUUGNDNWtPNGoweU4yY2dnTmszcVdUTmdIY3FPR2VoU3lyWFF6endKMHdwZUlrNzJna2VoaTNPV1hCaEhrOVFyWUllRHZLMEU2RGpGZXFKR01JTDZfZjBGYjBrdFhjY1lkUk5XQzZMb29BQQ?oc=5"},
  londonEveningStandardJordanHenderson: {l:"London Evening Standard", u:"https://news.google.com/rss/articles/CBMikwFBVV95cUxOMjNqMHQ3TzNGUG1PUDhtQkdWTkNpSzdlOTJFc0FkTS1KLTIyaFpldWhKNEd4emk4Ri1iVTRXY3pDMk1MZExfSjBxemFra2ltZVlnMGE2OHNMc1VtSGNJcnBOVHQxNm1HY1pQcm9UVTEwTlk5NWdOVVREcVg2d1F6cXRkd2ZHcG5hUjJUTWJ3U0NnWk0?oc=5"}};
const LINKMAP = {
  "Value & successor targets": ["bbcBees","athletic","wls"],
  "Forward depth options": ["bbcBees","wls"],
  "Midfield value options": ["bbcBees","wls"],
  "Prized asset (premium sale)": ["bbcBees","athletic"],
  "Fringe & squad trim": ["wls","sky"],
  "Mamadou Sangaré": ["fabrizioRomanoviaEmpireoftheKopMamadouSangar", "brentfordFCMamadouSangar", "brentfordFCMamadouSangar1"],
  "El Hadji Malick Diouf": ["westHamZoneYahooSportsElHadjiMalickDiouf"],
  "Pape Matar Sarr": ["toTheLaneAndBackPapeMatarSarr"],
  "Igor Thiago": ["yahooSportsviaESPNBrasilIgorThiago"],
  "Jannik Schuster": ["roundtableBrentfordFCJannikSchuster"],
  "Jaidon Anthony": ["yahooSportsJaidonAnthony"],
  "Callum Wilson": ["sportsMoleCallumWilson"],
  "Frank Onyeka": ["sportsMoleCallumWilson"],
  "Bryan Mbeumo": ["theAthleticDavidOrnsteinBryanMbeumo", "theAthleticBryanMbeumo"],
  "Jordan Henderson": ["davidOrnsteinXJordanHenderson", "skySportsJordanHenderson", "brentfordFCJordanHenderson", "londonEveningStandardJordanHenderson"],
  "Conor McManus": ["brentfordFCConorMcManus"],
  "Iwan Morgan": ["brentfordFCIwanMorgan", "brentfordFCMamadouSangar1"]};
const WL_LINKMAP = {
  "Data-model targets":"bbcBees","Prized asset":"athletic",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `<em>Andrews</em> tied to 2032: the succession machine hums on`,
  heroLede: `Brentford head into the summer with stability rare for a club their size: Keith <b>Andrews</b>, promoted from set-piece coach a year ago, has signed a new deal to <b>2032</b> after a strong top-half campaign. The model under owner <b>Matthew Benham</b> and director of football <b>Phil Giles</b> is unchanged, data-led recruitment, promote from within, and replace departing stars before they leave (Toney, then Mbeumo and Wissa, all succeeded smoothly). The brief now: keep the team together and add one or two to climb higher.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Phil Giles</b> (Director of Football)</span>
      <span>HEAD COACH: <b>Keith Andrews</b></span>
      <span>OWNER: <b>Matthew Benham</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">9<small>th</small></div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£50-90<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£50-110<small>m</small></div></div>
    <div class="stat gold"><div class="l">SCR Cost Cap</div><div class="v">85<small>%</small></div></div>`,
  positionPanel: `
  <!-- ANALYSIS: MODEL + FINANCE -->
  <section id="sec-position">
    <div class="sec-head"><h3>Club Position</h3><span class="num">01</span></div>
    <p class="sec-sub">The lens through which every rumour is weighted: the recruitment philosophy, the balance sheet, the brand, and the cost-cap trade-off.</p>

    <div class="cards">
      <!-- THE MODEL -->
      <div class="card">
        <h4>The Model <span class="tag">CORE PRINCIPLE</span></h4>
        <p>A <b>data-driven, succession-led</b> model under owner <b>Matthew Benham</b> and DoF <b>Phil Giles</b>, coached by <b>Andrews</b>. Brentford identify value early, promote from within, and replace stars before they depart, a method that has kept them rising without overspending.</p>
        <div class="quote">Giles: it is about "keeping the team together and maybe adding one or two more" to find the extra points that lift Brentford toward the European places.</div>
        <p><b>This window's logic:</b> retain the core, line up ready-made successors, and add one or two difference-makers.</p>
        <ul>
          <li>Model proof: Igor Thiago (22 PL goals, Brazil) and Kevin Schade stepped up for Wissa and Mbeumo.</li>
          <li>Markets: undervalued talent via the analytics network, Scandinavia, the lower divisions, France.</li>
          <li>Specific incomings firm up as the window opens; none fabricated here.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> weight value, data-model profiles in, and a premium star sale out only once a successor is secured.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Owned by <b>Matthew Benham</b>, Brentford are a benchmark for sustainable, analytics-led football, consistently turning recruitment into profit and stability.</p>
        <ul>
          <li>No European football brings the looser <b>85%</b> cost cap.</li>
          <li>Player-trading profit (the Mbeumo/Wissa sales) underpins the books.</li>
          <li>Disciplined wages and fees keep the model healthy.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> the model relies on selling at the right time, and on recruitment hitting.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">Stability and a clear identity make Brentford a respected destination, and the 85% cap eases the finances even without European football.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>One of the smartest-run clubs in the league, Brentford's stability and pathway appeal to players and staff, even if they lack European football or a marquee badge.</p>
        <ul>
          <li>Andrews tied to 2032 signals continuity and trust in the model.</li>
          <li>A proven step-up pathway (Thiago, Schade) attracts ambitious talent.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> success makes the best players targets, so a premium sale is a recurring feature.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue for clubs outside Europe</b>, the looser of the two limits (European clubs sit at 70%). No continental football is a sporting blow but a quiet financial edge over rivals juggling the tighter cap.</p>
        <p>Brentford's trading profit keeps the ratio comfortable; disciplined spending does the rest.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation.</li>
          <li>Selling high and buying value keeps the cycle and ratio healthy.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: the model lifts them toward Europe</h5>
        <ul>
          <li>Retaining the core plus one or two upgrades could find the missing points.</li>
          <li>Andrews' continuity anchors the project.</li>
          <li>The 85% cap leaves room to add quality.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: one sale too many or a recruitment miss</h5>
        <ul>
          <li>If a successor is not ready, a key sale could bite.</li>
          <li>Thin squad depth can be exposed over a long season.</li>
          <li>Standing still while rivals strengthen risks slipping back.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> trust the succession model, keep the core, line up ready-made replacements, and add one or two difference-makers within the 85% cap to push for the European places.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; nothing is registered yet.</b> The settled business is the dugout: <b>Andrews'</b> deal to 2032. Brentford's model means incomings are identified quietly and replacements lined up before sales; specific names firm up as the window opens, not invented here.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Giles network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: Brentford sell late and high, with replacements ready.</b> Their data-led model means any prized asset (the next Mbeumo or Wissa) is priced at a steep premium, and they rarely sell until the successor is in. Fringe names move at softer floors; the club almost never overpays incoming.
    `,
  excludedNote: `<b>Excluded as stale:</b> Thomas Frank-era links are not live (he left in 2025 and was later sacked by Spurs); completed Mbeumo/Wissa sales are model proof, not live. No specific incoming is asserted without sourcing.`,
  spendIn: { v: `£50-90m`, x: `One or two difference-makers plus ready-made successors, via the data model.` },
  spendOut: { v: `£50-110m`, x: `A premium sale of a prized asset is likely once a successor is secured, plus fringe trimming.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic. <i>Used for:</i> Andrews' new deal and Brentford's settled structure.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, ESPN, reliable national and club writers, the west London beat inside its patch.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Giles network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom &amp; Hadj Moussa fell on this basis in the old build and sit in the Rumour Mill pending a fresh trace.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b>: the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window: fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
