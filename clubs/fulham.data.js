/* ============================================================
   MERCATO IQ · CLUB DATA · FULHAM · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce fulham.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (format migration only, data carried from the
   6 Jun 2026 v1 dashboard, no re-verification):
   · The v1 page predates the True?/Happens? dual rating. truth
     values are SYNTHESISED conservatively from source tier
     (T1 85 / T2 70 / T3 55 / T4 35, minus 10 where the note reads
     cooled or stale); the old probability is kept as prob.
   · No light-band fixes were needed: all v1 probs already sat in
     the correct bands.
   · The v1 page held only 4 rated rows (2 in, 2 out), below the
     5-row top10 QA gate. Two additional FRAMING rows (central
     midfield, full-back) are split from the page's own Positions
     board and clearly labelled in their notes; they are not
     invented rumours.
   · The v1 page held no source URLs, so LINKMAP/WL_LINKMAP point
     at named-source hubs only; replace with exact URLs at the
     next live refresh.
   · The v1 badge payload was JPEG data mislabelled image/png; it
     fails PNG validation, so the build uses the fulham.png
     reference + SVG shield fallback until a true PNG is inlined.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Fulham", mono: "FFC", slug: "fulham",
  primary: "#ffffff", primaryBright: "#ffffff", primaryDeep: "#999999",
  primaryRgb: "255,255,255",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook)
   verified deliberately stale (old build date): next refresh must re-verify all fields. ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "To be appointed (Marco Silva left for Benfica; McKenna and Frank linked)",
  dof: "Recruitment under the ownership/coach structure (no separate DoF confirmed)",
  europe: "None (2026/27)",
  finish: "11th (2025/26)",
  owner: "Shahid Khan (Fulham Football LLC)",
  window: "Opens 15 Jun, closes 1 Sep 2026"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Fulham/Transfer+News",
    "https://www.transferfeed.com/clubs/fulham",
    "https://www.theathletic.com/football/club/fulham/",
    "https://hammyend.com/",
    "https://www.skysports.com/fulham"
  ],
  queries: [
    "Fulham transfer news <current month + year>",
    "Fulham bid OR medical OR 'personal terms'",
    "Fulham transfer A Bola Record Portugal",
    "Fulham mercato L'Equipe RMC Foot Mercato",
    "Fulham fichajes Marca AS Relevo Moretto",
    "Fulham transfer TyC Sports Ole Globo Esporte"
  ],
  note: "Priority sources per profile: The Athletic (Peter Rutzler on the Fulham beat), BBC, reliable west-London beat (Hammy End). Foreign desks per profile: Portugal (A Bola, Record); France (L'Equipe, RMC, Foot Mercato); Spain (Marca, AS, Relevo/Moretto, La Liga local beats); South America (TyC Sports, Ole, Globo Esporte). For every linked player also search the current club's local press in the native language; trace relay sites (Sport Witness, Football Italia, Get Football) to the named original outlet (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "6 Jun 2026", updated: "2026-06-06T00:00:00Z", label: "Build · Silva gone, manager pending (migrated to v2, awaiting live refresh)" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Gonzalo García", sub:"21 · ST · Spain", club:"permanent from Real Madrid", pos:"ST", fee:"€40m + €2m add-ons", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Real Madrid's breakout Castilla forward joins Fulham; Madrid keep a 30% sell-on clause and matching rights."},
  {name:"César Palacios", sub:"Real Madrid academy", club:"permanent from Real Madrid", pos:"MF", fee:"€10m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Academy midfielder joins Fulham as part of the same round of Real Madrid academy sales as Gonzalo García."},
  {name:"Jonah Kusi-Asare", sub:"18 · ST · Sweden", club:"Bayern Munich", pos:"FW", fee:"£5.2m (Bayern hold a buy-back clause)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Highly-rated Swedish teenage striker completes a permanent move after his loan spell."}
];
const CONFIRMED_OUT = [
  {name:"Marco Silva", sub:"Head coach · departed", to:"Joined Benfica", club:"Joined Benfica", fee:"Free (deal expired)", free:true, status:"exit", statusTxt:"DEPARTED",
   note:"Left after five years to replace Mourinho at Benfica; his Fulham deal expired. A successor is not yet confirmed. Flagged so no planning item treats him as the current coach."},
  {name:"Raúl Jiménez", sub:"35 · ST · Mexico", club:"Wolverhampton Wanderers", pos:"FW", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"World Cup-bound Mexico striker leaves on a free and rejoins Wolves, where he spent six years before his Fulham switch."},
  {name:"Issa Diop", sub:"29 · CB · France", club:"Ipswich Town", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Fulham's fringe centre-back completes a permanent move to newly-promoted Ipswich, the first of two raids by Kieran McKenna's side on the Cottagers this summer."},
  {name:"Harry Wilson", sub:"29 · AM · Wales", club:"Leeds United", pos:"MF", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Wales international leaves on a free at contract expiry and signs a four-year deal at Elland Road."}
];

const INCOMING = [
  {name:"Manager appointment", sub:"McKenna / Frank linked", club:"TBC", pos:"Head coach", report:"~4 days ago", src:"Sky Sports / Irish Times", tier:1, fee:"Compensation", truth:85, prob:50, light:'y', trend:'up',
   note:"The gating decision. Kieran McKenna (Ipswich, ~£8m compensation) and the available Thomas Frank are among early names; Khan says the club will move deliberately. Squad plans follow the appointment. True is high (elite-tier reporting on the vacancy); Happens sits at evens on any single named outcome.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50, dead:true, deadReason:"no longer a current link"},
  {name:"Striker (Jimenez replacement)", sub:"Goals up front", club:"Market", pos:"ST", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"£25-45m", truth:55, prob:35, light:'y', trend:'flat',
   note:"With Jimenez leaving on a free, a new forward is a clear need. Names firm up once the manager is appointed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"no longer a current link"},
  {name:"Central midfield need", sub:"Framing row · no named target", club:"Market", pos:"CM", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"TBC", truth:55, prob:25, light:'o', trend:'flat',
   note:"FRAMING ROW split from this page's own Positions board (not a named rumour): midfield quality and depth flagged as a likely strengthening area once the head coach is appointed.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25, dead:true, deadReason:"no longer a current link"},
  {name:"Full-back addition", sub:"Framing row · no named target", club:"Market", pos:"FB", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"TBC", truth:55, prob:22, light:'o', trend:'flat',
   note:"FRAMING ROW split from this page's own Positions board (not a named rumour): full-back balance for the new system, paced to the incoming coach's preferences.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22, dead:true, deadReason:"no longer a current link"},
  {name:"Chibuike Nwaiwu", sub:"19 · Nigeria · Defender", club:"Chelsea", pos:"LB", report:"Fulham went furthest of three Premier League suitors", src:"Press reports", tier:3, fee:"Undisclosed", truth:60, prob:55, light:"g", trend:"up", note:"Competitive pursuit among multiple clubs", lastSeen:"2026-08-07T17:40:24Z", baseProb:55, dead:true, deadReason:"On-page entry with unclear status; no recent snippet; insufficient information to maintain"},
  {name:"Gonzalo García", sub:"Unknown · Spain · ST", club:"Real Madrid", pos:"ST", report:"Fulham sign Real Madrid striker", src:"Unknown", tier:3, fee:"Undisclosed", truth:50, prob:40, light:"y", trend:"down", note:"On-page entry; no recent snippet found to update or confirm", lastSeen:"2026-08-07T23:07:30Z", baseProb:40},
  {name:"César Palacios", sub:"Unknown · Unknown · CM", club:"Real Madrid", pos:"CM", report:"Fulham sign Real Madrid midfielder", src:"Unknown", tier:3, fee:"Undisclosed", truth:50, prob:40, light:"y", trend:"down", note:"On-page entry; no recent snippet found to update or confirm", lastSeen:"2026-08-07T23:07:30Z", baseProb:40},
  {name:"Shea Charles", sub:"20 · England · CM", club:"Southampton", pos:"CM", report:"Fulham advancing in £25m transfer talks", src:"London Evening Standard", tier:3, fee:"£25m", truth:75, prob:70, light:"g", trend:"flat", note:"Third summer signing, talks progressing", lastSeen:"2026-08-07T23:07:30Z", baseProb:70},
  {name:"Abdelhamid Ait Boudlal", sub:"23 · Morocco · LB", club:"Rennes", pos:"LB", report:"Fulham have £20m offer rejected for Rennes defender", src:"The Athletic", tier:2, fee:"£20m", truth:65, prob:55, light:"g", trend:"up", note:"First offer rejected; target keen on move per Evening Standard", lastSeen:"2026-08-07T23:07:30Z", baseProb:55}
];

const OUTGOING = [
  {name:"Raúl Jiménez", sub:"33 · Mexico · Striker", club:"Benfica", pos:"ST", report:"Raúl Jiménez exit; striker replacement being sought", src:"Press reports", tier:3, fee:"Free", truth:80, prob:75, light:"g", trend:"up", note:"Departure expected; Jiménez replacement search underway", lastSeen:"2026-08-07T17:40:24Z", baseProb:75, dead:true, deadReason:"Striker departure noted as needing replacement; appears to have left but no confirmation snippet provided"},
  {name:"Ageing spine & fringe", sub:"Squad refresh", club:"Various", pos:"SQD", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"Mixed", truth:55, prob:40, light:'y', trend:'flat',
   note:"A refresh of older players is likely under a new coach, balanced against the cost rules.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link"},
  {name:"Kevin", sub:"22 · Brazil · LW", club:"Fulham", pos:"LW", report:"Roma's €50m bid rejected; Fulham holding firm", src:"Unknown", tier:3, fee:"€50m", truth:60, prob:40, light:"y", trend:"down", note:"On-page entry; no recent snippet found to confirm latest status", lastSeen:"2026-08-07T23:07:30Z", baseProb:40},
  {name:"Sasa Lukic", sub:"27 · Serbia · CM", club:"Ipswich Town", pos:"CM", report:"Sasa Lukic completes Ipswich medical ahead of £9m move", src:"The Athletic", tier:1, fee:"£9m", truth:95, prob:95, light:"g", trend:"flat", note:"Medical completed; deal imminent", lastSeen:"2026-08-07T23:07:30Z", baseProb:95}
];

const RISERS = [
  {ar:"⬆", t:"<b>Manager search</b> - McKenna and Frank among the names."},
  {ar:"⬆", t:"<b>Striker need</b> - replacing Jimenez is a priority."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Silva</b> - departed for Benfica; an era ends."},
  {ar:"⬇", t:"<b>Market passivity</b> - the new coach will want decisiveness."},
];
const NEW = [
  {ar:"✦", t:"Context: <b>Silva left for Benfica</b>; successor pending."},
  {ar:"✦", t:"In: manager + a striker. Out: Jimenez (free) and an ageing-spine refresh."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Silva-as-current</b> planning - he has left."},
  {ar:"✕", t:"<b>Unsourced incomings</b> - held until the manager lands."},
];

const POSITIONS = [
  {p:"Head coach (appointment)", w:90, x:"The gating decision; McKenna and Frank linked"},
  {p:"Striker", w:68, x:"Replace the departing Jimenez"},
  {p:"Spine refresh", w:55, x:"Renew ageing areas"},
  {p:"Midfield", w:45, x:"Quality and depth"},
  {p:"Full-back", w:40, x:"Balance for the new system"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"Kieran McKenna", club:"Ipswich", pos:"Head coach", dir:"in", age:"~4d", tier:1, note:"(Also in the main Incoming table via the manager row.) Linked to the vacancy; ~£8m compensation, not yet contacted formally.", dead:true, deadReason:"Managerial appointment, not first-team player transfer"},
  {name:"Raul Jimenez", club:"Fulham", pos:"ST", dir:"out", age:"~1 wk", tier:3, note:"(Also in main table.) Out of contract; set to leave on a free.", dead:true, deadReason:"no longer a current link"}
];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  sky:       {l:"Sky Sports · Fulham", u:"https://www.skysports.com/fulham"},
  bbc:       {l:"BBC Sport · Fulham", u:"https://www.bbc.co.uk/sport/football/teams/fulham"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  athletic:  {l:"The Athletic · Fulham (Peter Rutzler)", u:"https://www.theathletic.com/football/club/fulham/"},
  hammy:     {l:"Hammy End · Fulham beat", u:"https://hammyend.com/"},
  ffc:       {l:"Fulham FC Official", u:"https://www.fulhamfc.com/news/"},
  itimes:    {l:"Irish Times · soccer", u:"https://www.irishtimes.com/sport/soccer/"},
  fabrizioRomanoviaFootballTransfersGonzaloGarca: {l:"Fabrizio Romano (via FootballTransfers)", u:"https://www.footballtransfers.com/en/transfer-news/uk-premier-league/2026/08/fabrizio-romano-transfer-news-chelsea-trevoh-chalobah-barcelona-rodri-real-madrid-franco-mastantuono"},
  soccernetNGChibuikeNwaiwu: {l:"Soccernet NG", u:"https://soccernet.ng/2026/08/tottenham-crystal-fulham-super-eagles.html"},
  theHardTackleviaGloboEsporteKevin: {l:"TheHardTackle (via Globo Esporte)", u:"https://thehardtackle.com/transfer-news/2026/08/04/as-roma-offer-e50-million-to-sign-kevin-fulham-want-more/"},
  sportsMoleSkySportsNewsSasaLukic: {l:"Sports Mole (Sky Sports News)", u:"https://www.sportsmole.co.uk/football/fulham/transfer-talk/news/potential-fulham-exit-lukic-emerges-as-target-for-premier-league-club_601956.html"},
  eSPNGonzaloGarca: {l:"ESPN", u:"https://www.espn.com/soccer/story/_/id/49523499/fulham-sign-gonzalo-garcia-real-madrid"},
  fulhamFCofficialCsarPalacios: {l:"Fulham FC (official)", u:"https://www.fulhamfc.com/news/2026/august/03/palacios-joins-fulham/"},
  fulhamFCofficialJonahKusiAsare: {l:"Fulham FC (official)", u:"https://www.fulhamfc.com/news/2026/june/27/kusi-asare-signs-permanently/"},
  fulhamFCofficialRalJimnez: {l:"Fulham FC (official)", u:"https://www.fulhamfc.com/news/2026/june/09/raul-leaves-fulham/"},
  fulhamFCofficialIssaDiop: {l:"Fulham FC (official)", u:"https://www.fulhamfc.com/news/2026/july/22/diop-departs/"},
  skySportsHarryWilson: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13561731/harry-wilson-to-leeds-united-wales-international-makes-elland-road-switch-after-leaving-fulham"},
  bBCGonzaloGarca: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1iZEp2UFc0bkdtYmlHTXN4akx3eFJ5ZDdYWm9PSzFXaFdqNlc2MzdlUUFlMWNFSWVpWEZBd1FZR2w1QnREaVlNX3pvR3Nvb0lsS1ZhWU1JWDRCNkZiakxZZ3BrekhTRkk"},
  eveningStandardSheaCharles: {l:"Evening Standard", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxQdmlVVlNZMTJ1MWtZY0YySDkxSVVHd19tY1duazI2SC1DRmRmX0ZDbTJYbThpS2JlZ1M0OE5JV051NXZZQkxleXdVSUZsdl8zQ0xCQi1nUXpiQWIxNlVLNGRRb29GS21OaHFMNlhLSnNWQm9uMjdKNDlJdENWcVJWSl9PZERJVXFLQ3BNMXB5QkhyUng0ZVhZ"},
  skySportsNewsSasaLukic: {l:"Sky Sports News", u:"https://www.skysports.com"},
  transfermarktKevin: {l:"Transfermarkt", u:"https://www.transfermarkt.com"},
  theAthleticDavidOrnsteinAbdelhamidAitBoudlal: {l:"The Athletic / David Ornstein", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxPb3N1a19vU3otZ24zZXFZSExNeHlyMEJEWUpEYnZGM2hGWkJFN3MxSXhqLVVZVV9Mb2NhVVhrN3ZlVEVlOG5wTTJwa0lQYXBaT0EtLVR4cEp5b3VINGYybU9JTDJ2UVRyaXM1SjFteFhIMl8tVTlwYjJaOWJBVm1VN0FtZEVnWjg3VGp4aFN3?oc=5"},
  bBCDavidOrnsteinSasaLukic: {l:"BBC / David Ornstein", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxNUEdQNUd5NGhicWtLajJmYzl0SnUwd1ZmLU1TZ0tXVkNPVVN3ZFBERkhMT1lFWDF5X3ZFTXhTQ2twQ0x5WEowakRSMnhjMWlTQVZ0OWJvcnhEdDVoT0oyWVZVNFAwTTgyT2E3SXBJTFQtT1F0dU5XdVRiYnpKRFZoRUNSSUZZQWtEcGZtWGlDOUY?oc=5"},
  bBCSheaCharles: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE41d2t1UjhGVmNRZXJiMnA5LXJhMzZIbGFhOHlIRkxlZS1oUEZUWW1ucDVPLVpLRDBiUS1zTU5GM3FwR2E3VlRycEpvY3ljcjdKUXFfNF9jR1d1dGFoMmpTdEVNYktUODJ6aXc"},
  theAthleticDavidOrnsteinAbdelhamidAitBoudlal1: {l:"The Athletic / David Ornstein", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxPb3N1a19vU3otZ24zZXFZSExNeHlyMEJEWUpEYnZGM2hGWkJFN3MxSXhqLVVZVV9Mb2NhVVhrN3ZlVEVlOG5wMTJwa0lQYXBaT0EtLVR4cEp5b3VINGYybU9JTDJ2UVRyaXM1SjFteFhIMl8tVTlwYjJaOWJBVm1VN0FtZEVnWjg3VGp4aFN3"},
  tNTSportsGonzaloGarca: {l:"TNT Sports", u:"https://news.google.com/rss/articles/CBMizAFBVV95cUxOMTRxWkRFd09WTEZDcXF1dTdFeFYtal9FTUR2N1JSSlQxVmd2cGpoZVVsVDl4eVRTNl90Q0ZiQ3BxUWRCbWNLZGNHU3FkM2hnbHFLVUJvTnFEbDg0ZkxxTmQwM3RKVDJwbmFtek9Tak9jakl2NGtBRGx5RHNQNmpacWticHFPa2J1STlURXJaSHpwLTJFa3ZCdndadkFaMjhJQUZ3MVVnOTFtVzZNamRlNE5ucGhTX2JoSTdzcldfVjg0QTNkVGJheHI2czU"},
  bBCDavidOrnsteinSasaLukic1: {l:"BBC / David Ornstein", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxNUEdQNUd5NGhicWtLajJmYzl0SnUwd1ZmLU1TZ0tXVkNPVVN3ZFBERkhMT1lFWDF5X3ZFTXhTQ2twQ0x5WEowakRSMnhjMWlTQVZ0OWJvcnhEdDVoT0oyWVZVNFAwTTgyT2E3SXBJTFQtT1F0dU5XdVRiYnpKRFZoRUNSSUZZQWtEcGZtWGlDOUY"},
  eveningStandardSheaCharles1: {l:"Evening Standard", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxQdmlVVlNZMTJ1MWtZY0YySDkxSVVHd19tY1duazI2SC1DRmRmX0ZDbTJYbThpS2JlZ1M0OE5JV051NXZZQkxleXdVSUZsdl8zQ0xCQi1nUXpiYWIxNlVLNGRRb29GS21OaHFMNlhLSnNWQm9uMjdKNDlJdENWcVJWSl9PZERJVXFLQ3BNMXB5QkhyUng0ZVhZ"},
  theAthleticAbdelhamidAitBoudlal: {l:"The Athletic", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxPb3N1a19vU3otZ24zZXFZSExNeHlyMEJEWUpEYnZGM2hGWkJFN3MxSXhqLVVZVV9Mb2NhVVhrN3ZlVEVlOG5wTTJwa0lQYXBaT0EtLVR4cEp5b3VINGYybU9JTDJ2UVRyaXM1SjFteFhIMl8tVTlwYjJaOWJBVm1VN0FtZEVnWjg3VGp4aFN3"}};
const LINKMAP = {
  "Manager appointment": ["sky","itimes","athletic"],
  "Striker (Jimenez replacement)": ["bbcGossip","athletic"],
  "Central midfield need": ["athletic"],
  "Full-back addition": ["athletic"],
  "Raul Jimenez": ["sky","bbc"],
  "Ageing spine & fringe": ["athletic","bbc"],
  "Marco Silva": ["sky","bbc","ffc"],
  "Gonzalo García": ["fabrizioRomanoviaFootballTransfersGonzaloGarca", "eSPNGonzaloGarca", "bBCGonzaloGarca", "tNTSportsGonzaloGarca"],
  "César Palacios": ["fabrizioRomanoviaFootballTransfersGonzaloGarca", "fulhamFCofficialCsarPalacios", "bBCGonzaloGarca", "tNTSportsGonzaloGarca"],
  "Chibuike Nwaiwu": ["soccernetNGChibuikeNwaiwu"],
  "Kevin": ["theHardTackleviaGloboEsporteKevin", "transfermarktKevin"],
  "Sasa Lukic": ["sportsMoleSkySportsNewsSasaLukic", "skySportsNewsSasaLukic", "bBCDavidOrnsteinSasaLukic", "bBCDavidOrnsteinSasaLukic1"],
  "Jonah Kusi-Asare": ["fulhamFCofficialJonahKusiAsare"],
  "Raúl Jiménez": ["fulhamFCofficialRalJimnez", "eveningStandardSheaCharles"],
  "Issa Diop": ["fulhamFCofficialIssaDiop"],
  "Harry Wilson": ["skySportsHarryWilson"],
  "Shea Charles": ["eveningStandardSheaCharles", "bBCSheaCharles", "eveningStandardSheaCharles1"],
  "Abdelhamid Ait Boudlal": ["theAthleticDavidOrnsteinAbdelhamidAitBoudlal", "theAthleticDavidOrnsteinAbdelhamidAitBoudlal1", "theAthleticAbdelhamidAitBoudlal"]};
const WL_LINKMAP = {
  "Kieran McKenna":"sky","Raul Jimenez":"bbc",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `End of the <em>Silva</em> era: Fulham hunt a head coach after the Benfica exit`,
  heroLede: `Fulham face their biggest summer in years: Marco <b>Silva</b>, who led them up from the Championship and made them a settled top-flight side over five seasons, has <b>left for Benfica</b> (replacing the Madrid-bound Mourinho). Owner <b>Shahid Khan</b> says a successor will come in a timely but deliberate manner, with Ipswich's <b>Kieran McKenna</b> and the available <b>Thomas Frank</b> among the early names. After back-to-back 11th-placed finishes, squad-building waits on the appointment.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Shahid Khan</b> (Owner)</span>
      <span>HEAD COACH: <b>To be appointed</b></span>
      <span>OWNER: <b>Shahid Khan (Fulham Football LLC)</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">11<small>th</small></div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£50-90<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£40-80<small>m</small></div></div>
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
        <p>A <b>stable, value-conscious</b> club under owner <b>Shahid Khan</b>, Fulham built five settled Premier League seasons under Silva. The immediate task is appointing his successor before the squad plan takes shape.</p>
        <div class="quote">Khan calls Fulham "an extraordinarily attractive destination for an incoming head coach", with a replacement to be appointed deliberately rather than rushed.</div>
        <p><b>This window's logic:</b> appoint the manager, refresh an ageing spine, and replace the departing Jimenez up front.</p>
        <ul>
          <li>Manager search: McKenna and Frank among the early names; none yet contacted formally.</li>
          <li>Forward need: Raul Jimenez is out of contract and set to leave.</li>
          <li>Markets: value signings and squad refresh, paced to the new coach.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> hold incomings light until the manager lands; weight a striker and squad refresh once appointed.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Run sustainably under <b>Shahid Khan</b>, Fulham combine prudent spending with steady Premier League revenue, having reached a club-record points tally in recent seasons.</p>
        <ul>
          <li>No European football brings the looser <b>85%</b> cost cap.</li>
          <li>Free departures (Jimenez) trim wages; value signings preferred.</li>
          <li>The budget and shape depend heavily on the new manager.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> Fulham have at times been criticised as "passive" in the market; the new coach will want decisiveness.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">Fulham are a stable, attractive Premier League club, but an unfilled dugout and the need to refresh an ageing spine define a pivotal summer.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>A well-run London club with a desirable home and stable top-flight status, Fulham are an appealing job, as Khan notes, though the lack of European football and a managerial gap add short-term uncertainty.</p>
        <ul>
          <li>Stability and a strong stadium and location aid recruitment.</li>
          <li>The right appointment could push Fulham back toward Europe.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> losing Silva is a blow, and the squad needs a refresh whoever arrives.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue for clubs outside Europe</b>, the looser of the two limits (European clubs sit at 70%). No continental football is a sporting blow but a quiet financial edge over rivals juggling the tighter cap.</p>
        <p>Prudent spending and free departures keep the ratio healthy; the new manager will shape the spend.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation.</li>
          <li>Releasing high earners on free transfers eases wages.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: a fresh voice lifts a stable base</h5>
        <ul>
          <li>A strong appointment could reinvigorate a settled squad.</li>
          <li>The 85% cap leaves room to refresh the spine.</li>
          <li>A push toward Europe is realistic with the right additions.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: a difficult transition</h5>
        <ul>
          <li>A drawn-out manager search delays squad planning.</li>
          <li>An ageing spine needs renewal whoever arrives.</li>
          <li>Past market "passivity" could resurface in a transitional summer.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> appoint the head coach decisively (McKenna and Frank linked), replace the departing Jimenez, refresh the spine, and use the looser 85% cap to aim back toward the European conversation.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; the head-coach seat is the gating item.</b> Silva has left for Benfica. No successor is confirmed: McKenna (Ipswich) and Frank are among the linked names, though Fulham say they will move deliberately. Recruitment, including replacing the departing Raul Jimenez, accelerates once the manager is in.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Khan network 15%, finance 10%, competition 5%. With the dugout unfilled this board is deliberately light: framing rows split from the Positions board are labelled as such and are not named rumours.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: Fulham price under-contract assets at a holder's premium</b> (a Rodrigo Muniz has long drawn interest), lifted by minutes and suitor interest. With the manager unresolved, Fulham are likely measured buyers; fringe and out-of-contract names move at softer floors or leave for nothing.
    `,
  excludedNote: `<b>Excluded as stale:</b> Silva is no longer the manager, so any planning item naming him as current is out of date; the head coach is not yet confirmed and is flagged as such.`,
  spendIn: { v: `£50-90m`, x: `A striker to replace Jimenez plus a spine refresh, paced to the new manager.` },
  spendOut: { v: `£40-80m`, x: `Jimenez leaves on a free; fringe and ageing names trimmed.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic (Peter Rutzler on the Fulham beat). <i>Used for:</i> Silva's departure to Benfica and the successor names.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, Irish Times, reliable national writers on the manager search.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals and regional press.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Khan network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom and Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
