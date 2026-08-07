/* ============================================================
   MERCATO IQ · CLUB DATA · COVENTRY CITY · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce coventry-city.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (format migration only, data carried from the
   6 Jun 2026 v1 dashboard, no re-verification):
   · truth values SYNTHESISED conservatively from source tier and
     recency (T1 85 / T2 70 / T3 55 / T4 35, minus 10 where a note
     reads cooled or stale): every v1 row is tier-3 pattern-based
     framing and none reads stale at its own data date, so all rows
     carry truth 55. The old prob is kept unchanged as "prob".
   · Light-band fix (light adjusted, prob untouched): the old
     outgoing framing row, prob 35 'o' -> 'y'.
   · The v1 file was a pre-window placeholder holding ONE incoming
     and ONE outgoing framing row (no named targets asserted). To
     satisfy the v2 briefing gates, the incoming aggregate has been
     DECOMPOSED into position-level framing rows taken verbatim from
     the old POSITIONS heat block (no players invented), with
     prob_i = round(42 x w_i / 75) scaled off the aggregate row, and
     one outgoing framing row split out from the old outgoing note
     ("a standout sold only at a premium"). Replace all framing rows
     with real sourced threads at the first live refresh.
   · Old file held no source URLs at all, so LINKMAP/WL_LINKMAP
     point at named-source hubs only (Coventry Telegraph, BBC CWR,
     official site); replace with exact URLs at next refresh.
   · No badge payload existed in v1 and no coventrycity.png is held
     in the project, so the build intentionally uses the SVG shield
     fallback (CCFC monogram) until a true PNG is supplied.
   · The old method-legend NB named "Avom & Hadj Moussa", players
     never referenced elsewhere in the v1 file (a v1 copy artifact);
     carried under as-is rules, flagged for pruning at next refresh.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Coventry City", mono: "CCFC", slug: "coventry-city",
  primary: "#6CADDF", primaryBright: "#90c1e7", primaryDeep: "#406785",
  primaryRgb: "108,173,223",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook)
   verified deliberately stale (old build date): next refresh must re-verify all fields. ── */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Frank Lampard",
  dof: "Doug King (Owner and Chairman; recruitment under the ownership/coach structure)",
  europe: "None (2026/27)",
  finish: "1st (2025/26 Championship, champions, 95 points)",
  owner: "Doug King",
  window: "Opens 15 Jun, runs to 1 Sep 2026"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Coventry+City/Transfer+News",
    "https://www.transferfeed.com/clubs/coventry-city",
    "https://www.coventrytelegraph.net/all-about/coventry-city-fc",
    "https://www.skysports.com/coventry-city"
  ],
  queries: [
    "Coventry City transfer news <current month + year>",
    "Coventry City bid OR medical OR 'personal terms'",
    "Coventry City mercato L'Equipe RMC Foot Mercato",
    "Coventry City transfer Voetbal International Telegraaf Tavolieri HLN",
    "Coventry City transfer Fotbollskanalen VG Tipsbladet"
  ],
  note: "Foreign desks per profile: France (L'Equipe, RMC, Foot Mercato), Netherlands (Voetbal International, De Telegraaf), Belgium (Tavolieri, HLN), Scandinavia (Fotbollskanalen, VG, Tipsbladet). For every linked player also search the current club's local press in the native language. Priority home sources: The Athletic, BBC CWR, Coventry Telegraph, reliable Midlands beat. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "6 Jun 2026", updated: "2026-06-06T12:00:00Z", label: "Build: Champions up, augment the core (migrated to v2, awaiting live refresh)" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Miguel Ángel Brau", sub:"Permanent, four-year contract", club:"Granada", pos:"DF", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left-back and Frank Lampard's first signing since promotion, pending work permit/international clearance"},
  {name:"Carl Rushworth", sub:"25 · England · GK", club:"Brighton", pos:"Goalkeeper", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Formally announced by Coventry, with the keeper describing it as joining a club he already calls home."}
];
const CONFIRMED_OUT = [
  {name:"Jamie Allen", sub:"Released", club:"Free agent", pos:"MF", fee:"Released", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Contract expired at end of Championship-winning season"},
  {name:"Bradley Collins", sub:"Released", club:"Free agent", pos:"GK", fee:"Released", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Goalkeeper released as part of promotion-window squad trim"}
];

const INCOMING = [
  {name:"PL-level quality additions", sub:"Augment the core", club:"Market", pos:"MULTI", report:"window framing", src:"Pattern-based", tier:3, fee:"£40-80m total", truth:55, prob:42, light:'y', trend:'up',
   note:"A small number of high-impact, survival-ready signings to lift a settled, title-winning squad. Lampard's connections (notably Chelsea) may aid deals. Specific names firm up as the window opens; none fabricated here.", lastSeen:"2026-08-04T19:10:50Z", baseProb:42, dead:true, deadReason:"no longer a current link"},
  {name:"Striker / goals", sub:"Framing, no named target", club:"Market", pos:"ST", report:"window framing", src:"Pattern-based", tier:3, fee:"Within £40-80m envelope", truth:55, prob:34, light:'y', trend:'flat',
   note:"Cutting edge against Premier League defences is the clearest single need in the v1 framing. Decomposed from the aggregate additions row via the old POSITIONS heat (60/75); no named target existed pre-window.", lastSeen:"2026-08-04T19:10:50Z", baseProb:34, dead:true, deadReason:"no longer a current link"},
  {name:"Centre-back", sub:"Framing, no named target", club:"Market", pos:"CB", report:"window framing", src:"Pattern-based", tier:3, fee:"Within £40-80m envelope", truth:55, prob:29, light:'o', trend:'flat',
   note:"Solidity at the step up: a Premier League-grade defender to shore up a Championship-built back line. Decomposed from the aggregate additions row via the old POSITIONS heat (52/75); no named target existed pre-window.", lastSeen:"2026-08-04T19:10:50Z", baseProb:29, dead:true, deadReason:"no longer a current link"},
  {name:"Midfield quality", sub:"Framing, no named target", club:"Market", pos:"CM", report:"window framing", src:"Pattern-based", tier:3, fee:"Within £40-80m envelope", truth:55, prob:27, light:'o', trend:'flat',
   note:"Composure on the ball against better pressing sides. Decomposed from the aggregate additions row via the old POSITIONS heat (48/75); no named target existed pre-window.", lastSeen:"2026-08-04T19:10:50Z", baseProb:27, dead:true, deadReason:"no longer a current link"},
  {name:"Mykhailo Mudryk", sub:"23 · Ukraine · W", club:"Arsenal", pos:"Winger", report:"Coventry are among clubs exploring option; deal 'agreed' with urgency needed on £30m striker", src:"Coventry Telegraph", tier:3, fee:"Loan", truth:35, prob:25, light:"o", trend:"flat", note:"Xabi Alonso's Bayer Leverkusen comment suggests move unlikely; low credibility of Coventry involvement", lastSeen:"2026-08-07T01:42:32Z", baseProb:25},
  {name:"Tim Iroegbunam", sub:"Approach expected", club:"Everton", pos:"MF", report:"Coventry are one of three English clubs (with Hull City and Ipswich Town) plus two Italian sides showing interest in the Everton midfielder, whose contract has a year left to run.", src:"TeamTalk", tier:2, fee:"~£20m", truth:55, prob:20, light:"o", trend:"flat", note:"No formal offers yet; loan-with-obligation structure possible", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dead:true, deadReason:"No recent credible reporting; link appears stale (last reported weeks ago with Aston Villa)"},
  {name:"Fikayo Tomori", sub:"Long-shot interest, Liverpool now favourites", club:"AC Milan", pos:"DF", report:"Frank Lampard's Coventry held the strongest interest in bringing his former Chelsea player back to England, but Liverpool have since entered talks with Milan, all but ending Coventry's hopes.", src:"TuttoJuve (via Sports Mole)", tier:2, fee:"€15m-€20m", truth:50, prob:10, light:"r", trend:"flat", note:"Liverpool's move for defensive cover effectively ends Coventry's chances", lastSeen:"2026-08-04T19:10:50Z", baseProb:10, dead:true, deadReason:"No recent credible reporting; interest claimed by Frank Lampard Coventry but no current updates"},
  {name:"Harvey Elliott", sub:"Speculative interest from a promoted club", club:"Liverpool", pos:"MF", report:"Elliott struggled on loan at Aston Villa and Liverpool are open to offers this summer; former Everton CEO Keith Wyness suggested a promoted club could move for him, with Coventry among names mentioned.", src:"Football Insider", tier:3, fee:"~£25m", truth:30, prob:15, light:"o", trend:"flat", note:"No concrete negotiations reported; speculative at this stage", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dead:true, deadReason:"No recent credible reporting; historical loan context insufficient for current window activity"},
  {name:"Caleb Yirenkyi", sub:"20 · Ghana · W", club:"Nordsjaelland", pos:"W", report:"Coventry City have agreed a deal with Nordsjaelland for World Cup star Caleb Yirenkyi; deal confirmed as club-record transfer", src:"Coventry Telegraph", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"up", note:"Agreement reached; described as club-record transfer", lastSeen:"2026-08-07T14:38:27Z", baseProb:100},
  {name:"Gustavo Hamer", sub:"28 · Netherlands · M", club:"Sheffield United", pos:"Midfielder", report:"Coventry City remain in talks over Gustavo Hamer deal but gap in valuation exists", src:"Coventry Observer", tier:3, fee:"Undisclosed", truth:60, prob:55, light:"g", trend:"flat", note:"Ongoing talks but valuation gap remains; Sheffield United holding firm", lastSeen:"2026-08-07T01:42:32Z", baseProb:55, dead:true, deadReason:"Latest bid rejected by Sheffield United; deal appears off as of latest reporting"}
];

const OUTGOING = [
  {name:"Fringe & squad trim", sub:"Step-up churn", club:"Various", pos:"MULTI", report:"window framing", src:"Pattern-based", tier:3, fee:"Mixed", truth:55, prob:35, light:'y', trend:'flat',
   note:"Limited outgoings; the title-winning core is largely retained. PRICING: standard floors on fringe names; a standout sold only at a premium.", lastSeen:"2026-08-04T19:10:50Z", baseProb:35, dead:true, deadReason:"no longer a current link"},
  {name:"Standout core asset", sub:"Premium-only scenario", club:"Unknown suitors", pos:"MULTI", report:"window framing", src:"Pattern-based", tier:3, fee:"Premium only", truth:55, prob:12, light:'r', trend:'flat',
   note:"Split out from the v1 outgoing note: any sale from the title-winning core happens only at a heavy premium, and the stated plan is retention. No suitor or player was named pre-window; treated as a low-likelihood scenario, not a live thread.", lastSeen:"2026-08-04T19:10:50Z", baseProb:12, dead:true, deadReason:"no longer a current link"}
];
const DEAD = [
  {name:"Ellis Simms", sub:"Wolves interest reported to have cooled", club:"Wolverhampton Wanderers", pos:"FW", report:"Wolves had been linked with a move for the Coventry striker but are reported to have cooled their interest after securing a free-agent alternative instead.", src:"Coventry Telegraph", tier:2, fee:"~£10m (mooted)", truth:55, prob:15, light:"o", trend:"flat", note:"Deal appears to have stalled; Simms more likely to stay for now", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dir:"out", deadReason:"link went cold", deadAt:"2026-08-06T10:24:32Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Champions</b> - promoted with 95 points after 25 years."},
  {ar:"⬆", t:"<b>Lampard's pull</b> - connections aid recruitment."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Wholesale change</b> - not the plan; augment, don't overhaul."},
  {ar:"⬇", t:"<b>Standing pat</b> - PL-level quality is still essential."},
];
const NEW = [
  {ar:"✦", t:"Context: promoted as champions; <b>no Europe</b>; survival is the goal."},
  {ar:"✦", t:"In: a few high-impact PL-ready players. Out: fringe only; core retained."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Invented specific targets</b> - none asserted without sourcing."},
  {ar:"✕", t:"<b>Championship-only links</b> - reframed for the PL step up."},
];

const POSITIONS = [
  {p:"High-impact additions", w:75, x:"A few PL-level players to augment the core"},
  {p:"Striker / goals", w:60, x:"Cutting edge against PL defences"},
  {p:"Centre-back", w:52, x:"Solidity at the step up"},
  {p:"Midfield quality", w:48, x:"Composure on the ball"},
  {p:"Squad depth", w:40, x:"Cover for a longer, harder season"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"PL-ready targets", club:"Market", pos:"MULTI", dir:"in", age:"framing", tier:3, note:"A few high-impact additions to augment the title-winning core; Lampard's connections may help. Names firm up as the window opens.", dead:true, deadReason:"no longer a current link"},
  {name:"Core retention", club:"Coventry City", pos:"MULTI", dir:"out", age:"framing", tier:3, note:"The promotion-winning core is largely kept; only fringe players expected to move.", dead:true, deadReason:"no longer a current link"}
];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   HUB-ONLY STATUS: the v1 file carried zero source URLs, so every entry below is a
   named-source hub, not an article link. Replace with exact URLs at next refresh.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  covTel:    {l:"Coventry Telegraph · CCFC", u:"https://www.coventrytelegraph.net/all-about/coventry-city-fc"},
  bbcCov:    {l:"BBC Sport · Coventry City", u:"https://www.bbc.co.uk/sport/football/teams/coventry-city"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  ccfc:      {l:"Coventry City Official", u:"https://www.ccfc.co.uk/news/"},
  sky:       {l:"Sky Sports · Coventry City", u:"https://www.skysports.com/coventry-city"},
  athletic:  {l:"The Athletic · football", u:"https://www.nytimes.com/athletic/football/"},
  theHardTackleBenJacobsMykhailoMudryk: {l:"TheHardTackle (Ben Jacobs)", u:"https://thehardtackle.com/transfer-news/2026/08/04/coventry-city-eyeing-summer-move-for-mykhailo-mudryk/"},
  teamTalkTimIroegbunam: {l:"TeamTalk", u:"https://www.teamtalk.com/everton/tim-iroegbunam-transfer-news-everton-hull-city-ipswich-town-coventry-city"},
  sportsMoleFikayoTomori: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/liverpool/transfer-talk/news/premier-league-giant-make-initial-contact-for-tomori-to-end-coventry-chances_602200.html"},
  footballInsiderHarveyElliott: {l:"Football Insider", u:"https://www.footballinsider247.com/liverpool-contacts-in-agreement-over-harvey-elliott-situation-coventry-ipswich-tipped-for-deal/"},
  coventryTelegraphEllisSimms: {l:"Coventry Telegraph", u:"https://www.coventrytelegraph.net/sport/football/transfer-news/coventry-city-ellis-simms-wolves-34099886"},
  bBCSportMiguelngelBrau: {l:"BBC Sport", u:"https://feeds.bbci.co.uk/sport/football/articles/c8e4l36e8j8o"},
  sportsMoleJamieAllen: {l:"Sports Mole", u:"https://www.sportsmole.co.uk/football/coventry-city/transfer-talk/feature/coventry-summer-transfers-all-confirmed-ins-and-outs-for-2026_599293.html"},
  coventryLiveCalebYirenkyi: {l:"CoventryLive", u:"https://www.coventrytelegraph.net/sport/football/transfer-news/"},
  coventryTelegraphCalebYirenkyi: {l:"Coventry Telegraph", u:"https://news.google.com/rss/articles/CBMirgFBVV95cUxNd0phU2pXaFB0RXB0UDEyU2oyLUhTamtTRjhGTjNhYzYweXc1b3ZXc0NNRTNQeWswRFFxd21oRVNKd1FHaEdodnQ4ZGJIWTNmaC1pY0RjQ3JvOXl1UGFSQ25ValYwWGtFU3JRWW5HZHZEYUFOZkx3V281eUxMTGN2aVlYeERQWGtJc3M1aDZia3NfZFRSRk1MZG9EdklJbFBsVXdJdjZEeXhRbE8tZUHSAbMBQVVfeXFMT0VyV3VFek15R2dBNTBpSk5UcXNmT1hwcDZMeS14N2ZKTG9aTjk1Q0ZvOENyVEZYTUh0U0w5T0Y3RG9CY0M0cWRGanlzdVJxNjc5U0VEcFF5UVIzcm82eThVUHZpbGtzNVhUYmxOTjJaZTA5RTFFaTAzazNPVjEyZDFzcVJ1d0ItRUhRYmZyQjRIWlpLX1NobUF3SlZlaU4xS1JJcXlFWjdhMHVzTzU3dDFsUG8?oc=5"},
  coventryTelegraphMykhailoMudryk: {l:"Coventry Telegraph", u:"https://news.google.com/rss/articles/CBMiqwFBVV95cUxOQVZQUldVV0s2Ynpuc0c0VVhZbk1RYnNZNVhXR0VCaVNlb0EtNVVlOHRqLXVwX1VFOVNXcm8xRG9ZVWw1aXdkWEUzTUpta1hmbDJwY1JPWVBPZGZ5OURIbjBvY19iSDFvUnAyM19GeHQyak9BbE43ZlQtOXE3eVJZMGk5bFBudmtWNFllMkgtQ19VTDdyUVdNdHlWbnZjRVpUZ19JRTVyREV3WnM?oc=5"},
  coventryObserverGustavoHamer: {l:"Coventry Observer", u:"https://news.google.com/rss/articles/CBMixwFBVV95cUxObjFsS3gwWmRZS3VHMkthVExMeVF1bGt6Wkt6d2daRll3bUtsZzhZSEdIUGdCT0xDZnpnRHNNWVZjZVdFUUtybHBnalRZUk1ZaUc1alZuallaVVJVMHNDNE9zblh2a1ItUDFLaTE4WVlXNWhUWWNUZVc3V1dmd1d6OGlVQnU1c2MxejdNUjJxcnc4VElmMGZoWmFRYWNvRDNZd0tDVUZnNU5uMlVSejAwQTY4dnZxV2h4NVNfRDR2c3lTWXlHNllF?oc=5"},
  coventryTelegraphCalebYirenkyi1: {l:"Coventry Telegraph", u:"https://news.google.com/rss/articles/CBMirgFBVV95cUxNd0phU2pXaFB0RXB0UDEyU2oyLUhTamtTRjhGTjNhYzYweXc1b3ZXc0NNRTNQeWswRFFxd21oRVNKd1FHaEdodnQ4ZGJIWTNmaC1pY0RjQ3JvOXl1UGFSQ25ValYwWGtFU3JRWW5HZHZEYUFOZkx3V281eUxMTGN2aVlYeERQWGtJc3M1aDZia3NfZFRSRk1MZG9EdklJbFBsVXdJdjZEeXhRbE8tZUHSAbMBQVVfeXFMT0VyV3VFek15R2dBNTBpSk5UcXNmT1hwcDZMeS14N2ZKTG9aTjk1Q0ZvOENyVEZYTUh0U0w5T0Y3RG9CY0M0cWRGanlzdVJxNjc5U0VEcFF5UVIzcm82eThVUHZpbGtzNVhUYmxOTjJaZTA5RTFFaTAzazNPVjEyZDFzcVJ1d0ItRUhRYmZyQjRIWlpLX1NobUF3SlZlaU4xS1JJcXlFWjdhMHVzTzU3dDFsUG8"},
  coventryCityFootballClubCarlRushworth: {l:"Coventry City Football Club", u:"https://news.google.com/rss/articles/CBMipgFBVV95cUxNTS1oMHlqY3U1bTI0dXFTYkdSRVR6cmVRcVNGT3J6WXBraWVuX3BvTHducWN1RmpPUWtsYnVOR3FER1JRdF8yT2pYek9hUmkzMllQQ012THZGM1BBa1l2dW8wc1N3MnZKekt2VWVnRzVmeU5SWDJYTUZKODZZLWFWYVBVdXRHdllpS2RwNXVPODFwZjY0M1V1RUdfR3NUVWlnakhPcmh3"}};
const LINKMAP = {
  "PL-level quality additions": ["covTel","bbcCov","sky"],
  "Striker / goals": ["covTel","bbcGossip"],
  "Centre-back": ["covTel","bbcGossip"],
  "Midfield quality": ["covTel","bbcGossip"],
  "Fringe & squad trim": ["covTel","ccfc"],
  "Standout core asset": ["covTel","athletic"],
  "Mykhailo Mudryk": ["theHardTackleBenJacobsMykhailoMudryk", "coventryTelegraphMykhailoMudryk"],
  "Tim Iroegbunam": ["teamTalkTimIroegbunam"],
  "Fikayo Tomori": ["sportsMoleFikayoTomori"],
  "Harvey Elliott": ["footballInsiderHarveyElliott"],
  "Ellis Simms": ["coventryTelegraphEllisSimms"],
  "Miguel Ángel Brau": ["bBCSportMiguelngelBrau"],
  "Jamie Allen": ["sportsMoleJamieAllen"],
  "Bradley Collins": ["sportsMoleJamieAllen"],
  "Caleb Yirenkyi": ["coventryLiveCalebYirenkyi", "coventryTelegraphCalebYirenkyi", "coventryTelegraphCalebYirenkyi1"],
  "Carl Rushworth": ["coventryLiveCalebYirenkyi", "coventryCityFootballClubCarlRushworth"],
  "Gustavo Hamer": ["coventryObserverGustavoHamer"]};
const WL_LINKMAP = {
  "PL-ready targets":"covTel","Core retention":"ccfc",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `<em>Lampard</em>'s champions return after 25 years: augment a settled, mature core`,
  heroLede: `Coventry City are back in the Premier League for the first time since 2001, and as <b>Championship champions</b> (95 points) under Frank <b>Lampard</b>. The story is stability: Lampard, in charge since November 2024, built a mature, settled core (their key players cluster between 24 and 30) with newcomers contributing only a small share of minutes. Owner-chairman <b>Doug King</b> backs an ambitious but disciplined step up; Lampard's connections could help attract quality to augment, not overhaul.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Doug King</b> (Owner &amp; Chairman)</span>
      <span>HEAD COACH: <b>Frank Lampard</b></span>
      <span>OWNER: <b>Doug King</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">1<small>st</small></div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£60-110<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£20-50<small>m</small></div></div>
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
        <p>A <b>stability-led</b> model under owner-chairman <b>Doug King</b>, coached by <b>Lampard</b>. Coventry won the title with continuity, a mature core and minimal reliance on newcomers, and intend to augment rather than overhaul for the step up.</p>
        <div class="quote">Lampard wants the club to be "ambitious" in the summer while respecting the size of the jump; the foundation is a settled, experienced squad.</div>
        <p><b>This window's logic:</b> add Premier League-level quality in key areas while protecting the cohesion that won promotion.</p>
        <ul>
          <li>Strengths to build on: a strong set-piece game and a balanced, mature squad.</li>
          <li>Lampard's connections (notably at Chelsea) could aid recruitment.</li>
          <li>Markets: targeted PL-ready additions, not a volume rebuild.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> weight a small number of high-impact, survival-ready additions; treat the core as retained.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Under owner <b>Doug King</b>, Coventry have rebuilt sustainably from financial near-collapse a decade ago; promotion brings a transformational revenue uplift.</p>
        <ul>
          <li>No European football means the looser <b>85%</b> cost cap.</li>
          <li>Promotion revenue funds targeted, ambitious additions.</li>
          <li>A settled core limits how much must be spent at once.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> the step up is vast; revenue must be deployed shrewdly to make survival realistic.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">Premier League football and Lampard's profile lift Coventry's pull, but survival and protecting a settled core define a measured summer.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>A founding Premier League member back after 25 years, Coventry carry a strong heritage, and Lampard's name recognition is a genuine recruitment asset for an ambitious promoted club.</p>
        <ul>
          <li>Lampard's profile and connections help attract quality.</li>
          <li>A passionate fanbase and restored stability appeal to recruits.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> a settled core is a strength, but PL-level reinforcements are essential to survive.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>The new <b>Squad Cost Ratio</b> caps wages, agent fees and amortisation at <b>85% of revenue for clubs outside Europe</b>, the looser of the two limits. For a promoted side that headroom matters: it allows aggressive squad-building to survive, provided the trading is disciplined.</p>
        <p>Promotion revenue widens the budget; a settled core keeps the rebuild targeted and the ratio manageable.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation.</li>
          <li>Targeted spending protects compliance and cohesion.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: continuity plus quality stays up</h5>
        <ul>
          <li>Augmenting a settled, title-winning core could beat the drop.</li>
          <li>Lampard's connections and the 85% cap support smart additions.</li>
          <li>Set-piece strength travels well to the Premier League.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: the size of the jump</h5>
        <ul>
          <li>Championship quality may fall short against elite opposition.</li>
          <li>A mature core risks being stretched over a long, harder season.</li>
          <li>Recent promoted sides have struggled to stay up.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> keep the title-winning core, add a small number of high-impact, PL-ready players (helped by Lampard's connections), and use promotion revenue and the 85% cap to give survival a real chance.
    </div>
  </section>
`,
  confirmedPending: `<b>Window opens 15 June; nothing is registered yet.</b> Coventry go up as champions with a settled squad and a clear manager in Lampard. The brief is to augment a mature core with Premier League quality rather than rebuild. Specific incomings firm up as the window opens.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, King network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed both affordability and SCR headroom; with the cost cap in play, clearing the fringe is what unlocks a marquee arrival.`,
  pricingBanner: `
      <b>Pricing principle: as promoted champions, Coventry are buyers paying a promotion premium</b>, with a settled core they will largely keep at holder's premiums. Lampard's profile and connections may help negotiate, but selling clubs price up for the newly-rich. Fringe names move at softer floors.
    `,
  excludedNote: `<b>Excluded as stale:</b> Championship-era links are reframed for the Premier League; no specific incoming is asserted without sourcing.`,
  spendIn: { v: `£60-110m`, x: `Targeted Premier League-level quality to augment a settled core, funded by promotion revenue.` },
  spendOut: { v: `£20-50m`, x: `Fringe players moved on; the title-winning core largely retained.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: David Ornstein, Fabrizio Romano, BBC, The Athletic; ESPN on Coventry's squad profile. <i>Used for:</i> promotion as champions, Lampard's tenure.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Premier League, FourFourTwo and reliable national and regional writers.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">King network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Avom &amp; Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
