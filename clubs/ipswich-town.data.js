/* ============================================================
   MERCATO IQ · CLUB DATA · IPSWICH TOWN · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce ipswich-town.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Ipswich Town", mono: "ITFC", slug: "ipswich-town",
  primary: "#3A64A3", primaryBright: "#4f7fc7", primaryDeep: "#274a7d",
  primaryRgb: "58,100,163",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook) ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Kieran McKenna (Fulham interest reported, ~£8m buy-out)",
  dof: "Mark Ashton (Chief Executive; recruitment under the McKenna structure)",
  europe: "None (2026/27)",
  finish: "2nd, Championship (2025/26); promoted at the first attempt",
  owner: "Gamechanger 20 Ltd (Brett Johnson / ORG / Mark Detmer)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Ipswich+Town/Transfer+News",
    "https://www.transferfeed.com/clubs/ipswich-town",
    "https://www.eadt.co.uk/sport/",
    "https://www.twtd.co.uk/",
    "https://www.skysports.com/ipswich-town"
  ],
  queries: [
    "Ipswich Town transfer news <current month + year>",
    "Ipswich Town bid OR medical OR 'personal terms'",
    "Kieran McKenna Fulham buy-out",
    "Ipswich Town Voetbal International Telegraaf HLN Tavolieri",
    "Ipswich Town mercato L'Equipe RMC Foot Mercato",
    "Ipswich Town Fotbollskanalen VG Tipsbladet"
  ],
  note: "Priority beat per profile: The Athletic, BBC Radio Suffolk, East Anglian Daily Times, TWTD. Foreign desks per profile: Netherlands (Voetbal International, De Telegraaf), Belgium (Tavolieri, HLN), Scandinavia (Fotbollskanalen, VG, Tipsbladet), France (L'Equipe, RMC, Foot Mercato). For every linked player also search the current club's local press in the native language. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "6 Jun 2026", updated: "2026-06-06T00:00:00Z", label: "Build · Promoted, McKenna future key (migrated to v2, awaiting live refresh)" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Chuba Akpom", sub:"30 · ST · England", club:"Ajax", pos:"FW", fee:"£8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Proven Championship-and-Eredivisie goalscorer returns to England to lead the line back in the Premier League."},
  {name:"Cedric Kipre", sub:"29 · CB · Ivory Coast", club:"Stade de Reims", pos:"DF", fee:"£3.9m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ligue 1 centre-back adds height and top-flight-ready experience to Kieran McKenna's defence."},
  {name:"Issa Diop", sub:"29 · CB · France", club:"Fulham", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"First of Ipswich's two raids on Fulham this summer, addressing centre-back depth for the top flight."},
  {name:"Florentino Luís", sub:"26 · Portugal · MF", club:"Burnley", pos:"MF", fee:"£16m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Defensive midfielder joins the newly promoted side on a five-year deal for an initial £16m plus a reported £3m in add-ons, chosen ahead of interest from Hull City. Made 33 appearances for Burnley last season."},
  {name:"Chris Atherton", sub:"unknown · unknown · unknown", club:"Chelsea", pos:"unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed signing from Chelsea"},
  {name:"Florentino Luis", sub:"unknown · unknown · Midfielder", club:"Burnley", pos:"Midfielder", fee:"unknown", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed from relegated Burnley"}
];
const CONFIRMED_OUT = [
  {name:"Arijanet Muric", sub:"27 · GK · Kosovo", club:"Sassuolo", pos:"GK", fee:"£6m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Ends his Ipswich spell (including a prior loan at Sassuolo) with a permanent move back to Serie A."},
  {name:"Sammie Szmodics", sub:"30 · FW · Republic of Ireland", club:"Derby County", pos:"FW", fee:"Season-long loan with mandatory obligation to buy (£5.4m if Derby promoted, £2.7m otherwise)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Returns to a club he previously enjoyed a loan spell at; converts to a permanent Derby deal at season's end."},
  {name:"Conor Chaplin", sub:"27 · AM · England", club:"Released", pos:"MF", fee:"Released", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Released as Ipswich trims its promotion-winning Championship squad for the step back up."},
  {name:"Conor Townsend", sub:"33 · LB · England", club:"Released", pos:"DF", fee:"Released", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left-back released after his contract expired."},
  {name:"Sam Szmodics", sub:"30 · Republic of Ireland · AM", club:"Derby County", pos:"AM/FW", fee:"Loan with obligation to buy", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Reported as a done deal by the club's local press, with the attacker rejoining Derby. Structured as a loan carrying an obligation, so the permanent element lands next summer."}
];

const INCOMING = [
  {name:"Tim Iroegbunam", sub:"Midfielder", club:"Everton", pos:"M", report:"Hull City and Ipswich Town transfer rumours: Everton's Tim Iroegbunam", src:"BBC", tier:2, fee:"Undisclosed", truth:65, prob:60, light:"g", trend:"flat", note:"Rumour linking Iroegbunam to Ipswich", lastSeen:"2026-08-07T14:38:27Z", baseProb:60},
  {name:"PL-ready survival signings (framing)", sub:"Spine upgrades", club:"Market", pos:"Spine", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"£50-90m total", truth:55, prob:40, light:'y', trend:'up',
   note:"The core need: several Premier League-level additions to avoid a repeat of the 2024/25 drop. Names firm up once the manager question is settled.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link"},
  {name:"Striker: goals for survival (framing)", sub:"Position need, no named target yet", club:"Market", pos:"ST", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"TBC", truth:55, prob:35, light:'y', trend:'flat',
   note:"Framing row from the positions board, not a named rumour: goals for survival are a stated priority of the rebuild, and a striker addition is expected once the manager question is resolved. No individual target has yet been credibly linked.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"no longer a current link"},
  {name:"Centre-back: solidity at the step up (framing)", sub:"Position need, no named target yet", club:"Market", pos:"CB", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"TBC", truth:55, prob:30, light:'y', trend:'flat',
   note:"Framing row from the positions board, not a named rumour: defensive solidity at the step up is flagged as a core requirement after the 2024/25 drop. No individual target has yet been credibly linked.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dead:true, deadReason:"no longer a current link"},
  {name:"Full-back: PL-level quality and pace (framing)", sub:"Position need, no named target yet", club:"Market", pos:"FB", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"TBC", truth:55, prob:25, light:'o', trend:'flat',
   note:"Framing row from the positions board, not a named rumour: Premier League-level quality and pace at full-back is listed among the positions most likely strengthened. No individual target has yet been credibly linked.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25, dead:true, deadReason:"no longer a current link"},
  {name:"Sasa Lukic", sub:"Midfielder", club:"Fulham", pos:"M", report:"The Athletic report that Lukic looks destined to Ipswich", src:"The Athletic", tier:2, fee:"Undisclosed", truth:70, prob:65, light:"g", trend:"down", note:"Rumoured transfer target", lastSeen:"2026-08-07T14:38:27Z", baseProb:65},
  {name:"Julio Enciso", sub:"Winger", club:"Brighton", pos:"W", report:"Ipswich are confident of re-signing the Paraguayan", src:"Various", tier:2, fee:"Undisclosed", truth:65, prob:60, light:"g", trend:"up", note:"Confident of re-signing", lastSeen:"2026-08-07T14:38:27Z", baseProb:60},
  {name:"Florentino Luis", sub:"Midfielder", club:"Burnley", pos:"M", report:"Ipswich Town sign midfielder from relegated Burnley", src:"BBC", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"up", note:"Deal completed", lastSeen:"2026-08-07T14:38:27Z", baseProb:100},
  {name:"Issa Diop", sub:"Centre-back", club:"Fulham", pos:"CB", report:"Issa Diop joins from Fulham for £8.5m", src:"BBC", tier:2, fee:"£8.5m", truth:100, prob:100, light:"g", trend:"up", note:"Deal completed", lastSeen:"2026-08-07T14:38:27Z", baseProb:100},
  {name:"Armand Laurienté", sub:"Winger", club:"Sunderland", pos:"W", report:"Ipswich Town explore move for Sunderland's former transfer target Armand Laurienté", src:"sunderlandecho.com", tier:3, fee:"Undisclosed", truth:60, prob:55, light:"g", trend:"up", note:"Ipswich exploring move", lastSeen:"2026-08-07T14:38:27Z", baseProb:55},
  {name:"Chris Atherton", sub:"unknown · unknown · unknown", club:"Chelsea", pos:"unknown", report:"Chris Atherton joins Ipswich Town", src:"Chelsea Football Club official", tier:2, fee:"unknown", truth:95, prob:95, light:"g", trend:"flat", note:"Official announcement from Chelsea", lastSeen:"2026-08-07T17:40:24Z", baseProb:95}
];

const OUTGOING = [
  {name:"Manager: McKenna (risk)", sub:"Fulham front-runner", club:"Fulham", pos:"Head coach", report:"~3 days ago", src:"Sky Sports / TalkSPORT", tier:1, fee:"~£8m buy-out", truth:85, prob:45, light:'y', trend:'up',
   note:"The pivotal uncertainty. McKenna is the bookies' favourite for Fulham after Silva's exit, with an £8m buy-out. Retention is Ipswich's priority one; his departure would reshape the entire summer.", lastSeen:"2026-08-04T19:10:50Z", baseProb:45, dead:true, deadReason:"no longer a current link"},
  {name:"Fringe & squad trim", sub:"Promotion churn", club:"Various", pos:"Squad", report:"~1 wk ago", src:"Aggregated", tier:3, fee:"Mixed", truth:55, prob:40, light:'y', trend:'flat',
   note:"Championship-level squad players moved on to make room for PL-quality upgrades.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dead:true, deadReason:"no longer a current link"},
  {name:"George Hirst", sub:"unknown · unknown · unknown", club:"Stoke City", pos:"unknown", report:"Stoke ready to pay £10m to land George Hirst", src:"Transfer rumour", tier:3, fee:"£10m", truth:65, prob:60, light:"g", trend:"down", note:"Stoke City interested in acquiring striker", lastSeen:"2026-08-07T17:40:24Z", baseProb:60}
];

const RISERS = [
  {ar:"⬆", t:"<b>Promotion</b> - straight back up at the first attempt."},
  {ar:"⬆", t:"<b>Survival recruitment</b> - PL-ready additions the priority."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>McKenna certainty</b> - Fulham circling for the manager."},
  {ar:"⬇", t:"<b>Last time's approach</b> - must out-recruit the 2024/25 drop."},
];
const NEW = [
  {ar:"✦", t:"Context: promoted 2nd; <b>no Europe</b>; first job is survival."},
  {ar:"✦", t:"Key risk out: <b>McKenna</b> to Fulham. In: PL-ready spine."},
];
const IGNORE = [
  {ar:"✕", t:"<b>2024/25 PL links</b> - not live business."},
  {ar:"✕", t:"<b>Unsourced incomings</b> - held pending the manager call."},
];

const POSITIONS = [
  {p:"Keep the manager", w:88, x:"McKenna the Fulham front-runner; retention first"},
  {p:"Central midfield", w:62, x:"Iroegbunam-type PL-ready profile"},
  {p:"Striker", w:58, x:"Goals for survival"},
  {p:"Centre-back", w:52, x:"Solidity at the step up"},
  {p:"Full-back", w:45, x:"PL-level quality and pace"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"Kieran McKenna", club:"Fulham?", pos:"Head coach", dir:"out", age:"~3d", tier:1, note:"(Also in the main Outgoing table.) Fulham front-runner with an £8m buy-out; retention is the priority.", dead:true, deadReason:"Manager; not senior men's first-team player transfer activity"},
  {name:"Tim Iroegbunam", club:"Everton", pos:"CM", dir:"in", age:"~3d", tier:3, note:"(Also in the main Incoming table.) Reported midfield target; one year left on his deal."}
];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  twtd:     {l:"TWTD · Ipswich Town news", u:"https://www.twtd.co.uk/"},
  eadt:     {l:"East Anglian Daily Times · sport", u:"https://www.eadt.co.uk/sport/"},
  sky:      {l:"Sky Sports · Ipswich Town", u:"https://www.skysports.com/ipswich-town"},
  talksport:{l:"talkSPORT · football", u:"https://talksport.com/football/"},
  bbc:      {l:"BBC Sport · Ipswich Town", u:"https://www.bbc.co.uk/sport/football/teams/ipswich-town"},
  bbcSuffolk:{l:"BBC Radio Suffolk", u:"https://www.bbc.co.uk/sounds/play/live:bbc_radio_suffolk"},
  itfc:     {l:"ITFC Official · news", u:"https://www.itfc.co.uk/news/"},
  suffolkNewsSkySportsNewsSasaLukic: {l:"Suffolk News (Sky Sports News)", u:"https://www.suffolknews.co.uk/ipswich/sport/transfer-talk-town-eyeing-second-raid-on-fulham-9475948/"},
  sportsMoleChubaAkpom: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/ipswich-town/transfer-talk/feature/ipswich-summer-transfers-all-confirmed-ins-and-outs-for-2026_599297.html"},
  tWTDcoukIssaDiop: {l:"TWTD.co.uk", u:"https://www.twtd.co.uk/ipswich-town-news/52375/town-confirm-diop-signing"},
  suffolkNewsSammieSzmodics: {l:"Suffolk News", u:"https://www.suffolknews.co.uk/ipswich/sport/forward-seals-move-away-from-portman-road-9476664/"},
  pAYahooSportFlorentinoLus: {l:"PA / Yahoo Sport", u:"https://sports.yahoo.com/articles/ipswich-town-complete-signing-florentino-172500458.html"},
  eastAnglianDailyTimesJulioEnciso: {l:"East Anglian Daily Times", u:"https://www.eadt.co.uk/sport/26428973.ipswich-town---transfer-update-julio-enciso-sasa-lukic/"},
  eastAnglianDailyTimesSasaLukic: {l:"East Anglian Daily Times", u:"https://www.eadt.co.uk/sport/26428485.ipswich-town---blues-expected-sign-sasa-lukic-julio-encio/"},
  ipswichStarEastAnglianDailyTimesSamSzmodics: {l:"Ipswich Star / East Anglian Daily Times", u:"https://www.eadt.co.uk/sport/ipswich-town/"},
  bBCFlorentinoLuis: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE1kOTg0Y0R3ajI3eGRXTjdldXlvdC1mUmtmMG9yNXFaZzhxdEQ4Tmt0d3VJSnZhOGlwSXBJd3ktc2E2SEY1T1dXNjFadXZuM2VWbXJCaXdzS2Y5SVBubklpVjg5SFhtRXc"},
  bBCIssaDiop: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFBHbjBEcWk4dmZWcUlxSkhFSHVLTkJiUHY2bGxzX0dlWjdBWTJobU5jSy1kMmNBbmtSN1JCdTNjOWpYSjNCaFlZakZrQXRaN3dsU0xQQ3VNc05YWVk5WG4xd0hzanlxVzg"},
  bBCTimIroegbunam: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiakFVX3lxTE8weW1vN2xSckppQjEyNGdrWk82LU1iQnhvWXlkSXZpRmlfUHBOemJxOFZoMkVqQmNWUWdpQnk2STZUZkxFQ0Jzd1JyWHV1MWxUWEh5X1hhbUY3ZnZQRHhRaGF1SnAyYndrR1E"},
  sunderlandEchoArmandLaurient: {l:"Sunderland Echo", u:"https://news.google.com/rss/articles/CBMi5AFBVV95cUxQcDdOb0lFcHYyRHhob0xjWW9VWEpXZW9LeHQ3QmpTMUpGODM0UDQyOUEzQkRXZWd6VlA3aGhJMUNKcjYyQm9KTWt0TW5RWWN0YnVWbVZWR2hXaEZWdndBTDMwNV9wUDZ3VUhtbkZ5d0pzTHFWV0tvUXZ1VHVwUXByR1BmNEhJWU5kdjRqc1FheGhLRmgtM3ZQTWFOWV9Qbk9XVzctdDJTNk1VYTE0M21uR0tHMWtleDZIMmYzUmR4M3FLUzdFRmhxaTJXY1VyYV9GWWUyemVRbnYzbkt5VFdLZlRfM3A"},
  ipswichstarcoukGeorgeHirst: {l:"ipswichstar.co.uk", u:"https://news.google.com/rss/articles/CBMinwFBVV95cUxOZWN3QjRhdVdZTFcxd09HSzRaUEdFLWwzZXdoLU9kXzJBT21mdHBUV0hnYWR2dXVUZkE5ajJvR2gzajljWktwN3RWLVA0ODNjMmtqM250R1RRcTF2MERXYS1kNnJXVVRMNk1SdTdBbmlVYm4zNldXUkJHZ0JkQXVJQVRGM0NTMjk3b2FNaFBua3psUWdpcVV0N3MyM3h2aVU"},
  chelseaFCOfficialChrisAtherton: {l:"Chelsea FC Official", u:"https://news.google.com/rss/articles/CBMigAFBVV95cUxNb0U2WVlkZGVmM3hHZm1jTHNHYzcwRUxPT3JXWlhUaGV4M1lJeF9PNmhIMnl6MU1XRU9SQmh3YzRLbFRtZHFfZ19KMDlTV0pvRTNSRzBuX081cTlqTGFtQTQzYklaRndsR19XQXNWaGh0WjZQb3huY2w1d0JaYmo3Vw"},
  bBCTimIroegbunam1: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5JSTY1WkIyWnd6cFkzTWJLOTR4QnFvYlFubGJpN0hkMGxRNFZpZ05iWVZMZnN5X2E0ZFBxNDFnLVNadGd2dFdXNHlBa3NpYWtMRE1KcTVQU0YwLURJb18xMHYyTWkwaWc"},
  transferrumourGeorgeHirst: {l:"Transfer rumour", u:"unknown"}};
const LINKMAP = {
  "Tim Iroegbunam": ["twtd","eadt", "bBCTimIroegbunam", "bBCTimIroegbunam1"],
  "PL-ready survival signings (framing)": ["eadt","twtd"],
  "Striker: goals for survival (framing)": ["eadt"],
  "Centre-back: solidity at the step up (framing)": ["eadt"],
  "Full-back: PL-level quality and pace (framing)": ["eadt"],
  "Manager: McKenna (risk)": ["sky","talksport","bbc"],
  "Fringe & squad trim": ["twtd","eadt"],
  "Sasa Lukic": ["suffolkNewsSkySportsNewsSasaLukic", "eastAnglianDailyTimesSasaLukic"],
  "Chuba Akpom": ["sportsMoleChubaAkpom"],
  "Cedric Kipre": ["sportsMoleChubaAkpom"],
  "Issa Diop": ["tWTDcoukIssaDiop", "bBCIssaDiop"],
  "Arijanet Muric": ["sportsMoleChubaAkpom"],
  "Sammie Szmodics": ["suffolkNewsSammieSzmodics"],
  "Conor Chaplin": ["sportsMoleChubaAkpom"],
  "Conor Townsend": ["sportsMoleChubaAkpom"],
  "Florentino Luís": ["pAYahooSportFlorentinoLus"],
  "Julio Enciso": ["eastAnglianDailyTimesJulioEnciso"],
  "Sam Szmodics": ["ipswichStarEastAnglianDailyTimesSamSzmodics"],
  "Florentino Luis": ["bBCFlorentinoLuis"],
  "Armand Laurienté": ["sunderlandEchoArmandLaurient"],
  "George Hirst": ["ipswichstarcoukGeorgeHirst", "transferrumourGeorgeHirst"],
  "Chris Atherton": ["chelseaFCOfficialChrisAtherton"]};
const WL_LINKMAP = {
  "Kieran McKenna":"sky","Tim Iroegbunam":"twtd",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `<em>McKenna</em>'s bounce-back: promoted again, now the fight is to keep him and stay up`,
  heroLede: `Ipswich are back in the Premier League at the first attempt, a <b>second-placed</b> Championship finish sealing Kieran <b>McKenna</b>'s third promotion in four years after relegation in 2024/25. The defining summer question is twofold: <b>can they keep McKenna</b>, the reported bookies' favourite for the Fulham vacancy with an £8m buy-out, and can they recruit a squad capable of survival this time. The model under CEO <b>Mark Ashton</b> is a sustainable, recruitment-led Premier League project.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Mark Ashton</b> (Chief Executive)</span>
      <span>HEAD COACH: <b>Kieran McKenna</b></span>
      <span>OWNER: <b>Gamechanger 20 Ltd</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">2<small>nd</small></div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£70-120<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£30-70<small>m</small></div></div>
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
        <p>A <b>sustainable, recruitment-led</b> project under CEO <b>Mark Ashton</b>, coached (for now) by <b>McKenna</b>. After bouncing straight back, the brief is to recruit smarter than in 2024/25 to make survival stick.</p>
        <div class="quote">McKenna has spoken of building "a sustainable Premier League football club", learning from a relegation in which the squad was upgraded but not quite enough.</div>
        <p><b>This window's logic:</b> resolve the manager, then add Premier League-ready quality across the spine.</p>
        <ul>
          <li>Manager: McKenna the Fulham front-runner; retention is priority one.</li>
          <li>Targets linked: Tim Iroegbunam (Everton) among midfield options.</li>
          <li>Markets: proven Championship standouts plus PL-level additions for survival.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> weight the manager question heavily, then PL-ready, survival-profile additions; discount pure projects.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Backed by US-based ownership (<b>Gamechanger 20 Ltd</b>), Ipswich pair ambition with sustainability, and promotion brings significant central and parachute-linked revenue.</p>
        <ul>
          <li>No European football means the looser <b>85%</b> cost cap.</li>
          <li>Promotion revenue funds an aggressive but disciplined rebuild.</li>
          <li>Avoiding overpayment on promotion premiums is the challenge.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> spend must be sharp; the 2024/25 drop showed money alone does not guarantee survival.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">McKenna's stock and an attractive project draw players, but Premier League survival and the risk of losing the manager define a pivotal summer.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>Ipswich's rise under McKenna has won admiration, and the manager himself is among the most coveted in England, hence the Fulham link, which is both a compliment and a threat.</p>
        <ul>
          <li>McKenna's reputation helps attract ambitious players.</li>
          <li>A clear project and modern setup appeal to recruits.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> the better McKenna does, the more suitors circle, so keeping him is the first job.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue for clubs outside Europe</b>, the looser of the two limits. For a promoted side that headroom matters: it allows aggressive squad-building to survive, provided the trading is disciplined.</p>
        <p>Promotion revenue widens the budget, but disciplined trading is essential to stay compliant and competitive.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation.</li>
          <li>Smart, value-led recruitment protects the ratio.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: a smarter survival bid</h5>
        <ul>
          <li>Keeping McKenna and recruiting sharply could make survival stick this time.</li>
          <li>Promotion revenue plus the 85% cap allow a real squad upgrade.</li>
          <li>A settled core that has won promotion gives a foundation.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: a repeat of 2024/25</h5>
        <ul>
          <li>Losing McKenna mid-rebuild would be a major blow.</li>
          <li>Promotion premiums can erode value in the market.</li>
          <li>The step up is steep; recent promoted sides have struggled.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> first secure McKenna, then recruit PL-ready quality across the spine, learning from the 2024/25 drop, and use promotion revenue and the 85% cap to give survival a genuine chance.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; the manager question comes first.</b> McKenna is the head coach but is strongly linked to Fulham's vacancy (£8m buy-out). Squad-building, aimed at avoiding a repeat of the 2024/25 drop, depends partly on resolving his future. Targets enter the ledger only on announcement.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Ashton network 15%, finance 10%, competition 5%. Rows marked <b style="colour:var(--gold)">(framing)</b> are position-need context from the club's own board, not named rumours.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: as a promoted club, Ipswich are mostly buyers, paying a promotion premium.</b> Selling clubs lift fees knowing Ipswich have parachute-backed budgets; their own prized assets (a Jack Clarke) carry holder's premiums. Fringe and Championship-level squad players move at softer floors. Contract status sets the fee: an out-of-contract player aged 24+ leaves on a full Bosman free, so no fee applies regardless of homegrown status; the holder's-premium logic only governs players still under contract.
    `,
  excludedNote: `<b>Excluded as stale:</b> 2024/25 Premier League links are not live; McKenna remains the manager for now but is flagged as a Fulham target throughout. Unsourced incoming names are held pending the manager call.`,
  spendIn: { v: `£70-120m`, x: `PL-ready additions across the spine for a serious survival bid, funded by promotion revenue.` },
  spendOut: { v: `£30-70m`, x: `Fringe and Championship-level squad players; a prized asset only at a premium.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic; Sky Sports on the McKenna-Fulham link. <i>Used for:</i> promotion, the manager situation.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: East Anglian Daily Times, TWTD and reliable regional and national writers; BBC Radio Suffolk on the local beat.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals and regional press.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Ashton network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom &amp; Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
