/* ============================================================
   MERCATO IQ · CLUB DATA · NEWCASTLE UNITED · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce newcastle-united.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (30 Jul 2026): first live-format build for this
   club (previously on the legacy single-page template with no
   BRAND-driven colours). Researched fresh via live web search.
   ============================================================ */

const BRAND = {
  club: "Newcastle United", mono: "NUFC", slug: "newcastle-united",
  primary: "#BFC4C9", primaryBright: "#FFFFFF", primaryDeep: "#000000",
  primaryRgb: "191,196,201",
  breadcrumb: ["England","Premier League"]
};
const VOLATILE = {
  verified: "2026-07-30",
  coach: "VACANT — Eddie Howe left the role 30 Jul 2026; Ross Wilson (Sporting Director) and CEO David Hopkinson run the search, Al-Ahli's Matthias Jaissle the advanced favourite",
  dof: "Ross Wilson (Sporting Director)",
  europe: "None (2026/27)",
  finish: "12th (2025/26, 49 pts)",
  owner: "PIF-led consortium (chairman Yasir Al-Rumayyan); PCP Capital Partners (Amanda Staveley/Mehrdad Ghodoussi) and Reuben Brothers minority stakes",
  window: "Opened 15 Jun, closes 1 Sep 2026, 11pm UK"
};
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Newcastle+United/Transfer+News",
    "https://www.chroniclelive.co.uk/all-about/newcastle-united-fc",
    "https://www.shieldsgazette.com/sport/football/newcastle-united",
    "https://www.skysports.com/newcastle-united",
    "https://www.teamtalk.com/newcastle-united"
  ],
  queries: [
    "Newcastle United transfer news July 2026",
    "Newcastle United bid OR medical OR 'personal terms'",
    "Newcastle United head coach appointment Jaissle McKenna Conte",
    "Newcastle United calciomercato Scalvini Atalanta Tutto Atalanta",
    "Newcastle United fichajes Marca AS Relevo Ederson Oso",
    "Newcastle Bruno Guimaraes Arsenal Telegraph talkSPORT"
  ],
  note: "NUFC-specific beat prioritised: Chronicle Live (Lee Ryder), Shields Gazette/NUFC The Mag, The Athletic (Chris Waugh). Foreign desks per profile: Italy (Tutto Atalanta/Gazzetta for Scalvini and Ederson), Spain (Marca/AS/Relevo for Oso, Real Betis local press for Ezzalzouli), Czech/Portugal (for Hornicek). Coaching-search sweep runs in parallel given the 30 Jul vacancy. Trace every aggregator hit (TransferFeed, NewsNow) to its original reporter, never link the aggregator itself."
};

const REPORT_META = { asof: "30 Jul 2026", updated: "2026-07-30T18:00:00Z", label: "Emergency build: Eddie Howe quits as head coach, Jaissle the advanced favourite; Bruno Guimaraes-to-Arsenal now 'the final straw' with a decision expected within days" };

const CONFIRMED_IN = [
  {name:"Sean Steur", sub:"20 · CM/DM · Netherlands", to:"permanent from Ajax", fee:"£23m", free:false, status:"done", statusTxt:"DONE, SIGNED",
   note:"Confirmed by Sky Sports: a five-year deal signed in the immediate aftermath of Sandro Tonali's departure to Tottenham, filling the vacated central-midfield slot with a younger, cheaper profile. A composed Eredivisie ball-player Newcastle's recruitment team have tracked for over a year; regarded as a squad player initially rather than a like-for-like Tonali replacement."},
  {name:"Bazoumana Touré", sub:"20 · RW/LW · Ivory Coast", to:"permanent, undisclosed selling club", fee:"£42m", free:false, status:"done", statusTxt:"DONE, SIGNED",
   note:"Confirmed by Sky Sports at £42m: a statement swoop for a highly-rated Ivorian winger, part of the club's declared shift toward an 18-24 age bracket, £20-40m recruitment model under Ross Wilson. Adds direct competition on the right and left flanks ahead of any Jacob Murphy exit."},
  {name:"Ewen Jaouen", sub:"20 · GK · France (U21)", to:"permanent from Stade de Reims", fee:"≈£18-24m", free:false, status:"done", statusTxt:"DONE, SIGNED",
   note:"Fabrizio Romano's 'here we go': a long-term deal to June 2030 for a 34-appearance, 15-clean-sheet Ligue 2 season. Signed as a development goalkeeper behind the senior pecking order, not an immediate Nick Pope replacement — that role is being addressed separately via the live Lukáš Horníček pursuit below."},
  {name:"Kyle Healy", sub:"16 · RB", to:"West Ham United academy", fee:"Undisclosed (academy fee)", free:false, status:"done", statusTxt:"DONE, SIGNED",
   note:"Romano confirmed the academy switch on 23 Jul: six U18 Premier League appearances at West Ham last season. A future-facing addition with zero first-team implication this window, included for completeness of the state of record."},
  {name:"Lukáš Horníček", sub:"24 · GK · Czech Republic", to:"from SC Braga", fee:"≈£24.5-30m (release clause)", free:false, status:"pending", statusTxt:"AGREED, RELEASE CLAUSE TRIGGERED",
   note:"Multiple outlets (TeamTalk, Shields Gazette, Football365) report the £24.5m-30m release clause has been triggered and personal terms are close, positioning Horníček as the senior alternative to Nick Pope after Newcastle again missed out on James Trafford (now signing for Leeds). Reported to have already turned down interest from Hull City. Not yet a club announcement, so it is held here rather than in the fully-confirmed table; expect a formal unveiling within days."},
];
const CONFIRMED_OUT = [
  {name:"Anthony Gordon", sub:"25 · LW · England", to:"Barcelona (permanent)", fee:"£69m", free:false, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Confirmed by Sky Sports: the England winger completes a move to Barcelona, one of three marquee departures (with Tonali and Isak's move last transfer deadline day) that funded this summer's rebuild after a 12th-place finish and no European football. Newcastle immediately opened a chase for a direct like-for-like in Abde Ezzalzouli (see Incoming)."},
  {name:"Sandro Tonali", sub:"26 · CM · Italy", to:"Tottenham Hotspur (permanent)", fee:"£100m", free:false, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"A Tottenham club-record fee, confirmed by Sky Sports and ESPN. A landmark sale that reshapes the midfield picture and materially strengthens Newcastle's Squad Cost Ratio headroom heading into a summer already featuring the Bruno Guimaraes saga."},
  {name:"Kieran Trippier", sub:"35 · RB · England", to:"Wolverhampton Wanderers", fee:"Free transfer", free:true, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Confirmed by Sky Sports: the veteran right-back leaves on a free at the end of his contract after four years and a League Cup winner's medal, ending his second spell on Tyneside."},
  {name:"Emil Krafth", sub:"31 · RB · Sweden", to:"Released, free agent", fee:"Free (contract expired)", free:true, status:"exit", statusTxt:"DONE, DEPARTED",
   note:"Contract-expiry departure confirmed in early summer reporting; a squad-depth exit with no fee, freeing a wage-bill slot rather than driving strategy."},
];

const INCOMING = [
  {name:"Matthias Jaissle", sub:"38 · Head Coach appointment", club:"Al-Ahli (Saudi Pro League)", pos:"Head coach", report:"30 Jul 2026", src:"Khel Now / Sky Sports News", tier:2, fee:"Compensation (PIF-to-PIF)", truth:65, prob:45, light:'y', trend:'up',
   note:"The gating decision of the entire window: Eddie Howe left the head-coach role today after squad-composition concerns, missing out on Johan Manzambi being the final straw. Jaissle, back-to-back AFC Champions League winner at PIF-owned Al-Ahli and formerly of Red Bull Salzburg, is reported to be in 'advanced discussions', helped by his existing relationship with Newcastle's Saudi ownership. Sporting director Ross Wilson and CEO David Hopkinson are compiling the shortlist; Kieran McKenna and Antonio Conte are also named. True reflects credible, multi-outlet reporting of talks; Happens is tempered because nothing is signed and a PIF-to-PIF appointment, while logical, still needs Al-Ahli's release and full board sign-off."},
  {name:"Giorgio Scalvini", sub:"22 · CB · Italy", club:"Atalanta", pos:"CB", report:"29 Jul 2026", src:"Sebastien Vidal / Tutto Atalanta", tier:2, fee:"≈€45m (£38m)", truth:60, prob:40, light:'y', trend:'up',
   note:"Reported to be in 'pole position', advancing on an estimated €45m fee, part of a reported £68m double defensive swoop alongside the Horníček goalkeeper deal. Atalanta, missing Champions League football under new coach Maurizio Sarri, are said to be willing to cash in on their academy-produced centre-back to rebalance finances. Fits Newcastle's real need: Fabian Schär and Dan Burn are both 34 with deals expiring 2027, so this is genuine succession planning, not a luxury signing. Tottenham are also credited with interest."},
  {name:"Abde Ezzalzouli", sub:"24 · LW/RW · Morocco", club:"Real Betis", pos:"W", report:"29 May 2026 (recurring through Jul)", src:"Graeme Bailey (TeamTalk, exclusive)", tier:2, fee:"≈£43-52m (release clause ≈€60m)", truth:60, prob:35, light:'y', trend:'up',
   note:"Framed repeatedly by TeamTalk as the direct Anthony Gordon replacement, with Betis 'fully expecting' to lose him after an outstanding season (his camp reportedly open to the move) and a 'clear pathway to a prominent attacking role' cited as Newcastle's edge. Barcelona hold a 20% sell-on. Competition is real and wide (Chelsea, Man City, Everton, Villa, Dortmund, Leipzig, Napoli), which caps Happens despite Newcastle's stated advantage; still live as of late July per TeamTalk's continuing coverage."},
  {name:"Joaquín Oso", sub:"21 · RB/LB · Spain", club:"Sevilla", pos:"FB", report:"14 Jul 2026", src:"TEAMtalk", tier:3, fee:"Undisclosed (contact made)", truth:45, prob:20, light:'o', trend:'down',
   note:"Newcastle made contact to explore conditions of a deal for the versatile Sevilla full-back, with Nottingham Forest also enquiring. By mid-July, Fiorentina were reported to have 'accelerated' and moved ahead of Newcastle, Tottenham and Fulham in the race, which drags Happens down; monitored rather than a live priority chase."},
  {name:"Ederson (Atalanta)", sub:"24 · DM · Brazil", club:"Atalanta", pos:"DM", report:"18-20 Jul 2026", src:"CaughtOffside / TheHardTackle", tier:3, fee:"Undisclosed ('big' offer required)", truth:40, prob:20, light:'o', trend:'flat',
   note:"Conflicting within 48 hours: one report (19 Jul) had Ederson 'set for an Atalanta stay' despite the Newcastle links, the next (20 Jul) had Atalanta 'prepared to cash in' if a big offer arrives. Newcastle are credited with interest as an alternative central-midfield option should Bruno Guimaraes be sold, but the club's own stance is unresolved, hence the moderate truth and low probability."},
];

const OUTGOING = [
  {name:"Bruno Guimarães", sub:"28 · CM · Brazil, captain", club:"Arsenal", pos:"CM/DM", report:"30 Jul 2026", src:"Sky Sports / Telegraph (Luke Edwards) / talkSPORT (Ben Jacobs)", tier:1, fee:"£75-85m", truth:80, prob:55, light:'g', trend:'up',
   note:"The defining storyline of the window. The Newcastle captain told the club he wants to join Arsenal after Brazil's World Cup exit; Newcastle value him at ≈£85m, Arsenal believe anything above £75m has a real chance. Telegraph's Luke Edwards reports Howe himself now believes Guimarães will be sold and that it was 'the final straw' behind his own exit today. talkSPORT's Ben Jacobs says Guimarães wants clarity before Friday's pre-season return and expects resolution 'by Friday or shortly after'. Two years plus a club option remain on his contract, so Newcastle are not forced sellers, but the player's stated wish plus the coaching vacuum materially lift the probability versus a normal transfer saga."},
  {name:"Jacob Murphy", sub:"31 · RW/LW · England", club:"Everton", pos:"W", report:"12 Jul 2026", src:"TEAMtalk", tier:3, fee:"Enquiry stage, undisclosed", truth:50, prob:22, light:'o', trend:'flat',
   note:"Everton have launched an enquiry as they work through multiple winger options; a decade-long servant whose game time is squeezed by Bazoumana Touré's arrival and any Ezzalzouli deal. PRICING: enquiry-stage only with no bid reported, so probability stays modest, but the squeeze on minutes makes an exit logical business."},
  {name:"Lewis Hall", sub:"22 · LB/LWB · England", club:"Manchester United", pos:"LB", report:"10-13 Jul 2026", src:"TEAMtalk / Caught Offside", tier:3, fee:"≈£55-60m", truth:45, prob:20, light:'o', trend:'flat',
   note:"Manchester United are described as 'determined' to land Hall, valued at roughly £55-60m, with reports suggesting the player himself is open to the move. Newcastle have set what's called a 'prohibitive' price tag, and United are also tracking two other left-backs, which softens Happens. A sale would leave a fresh full-back hole alongside the Oso interest above."},
  {name:"Nick Pope", sub:"34 · GK · England", club:"Ipswich Town (interest)", pos:"GK", report:"~Jul 2026", src:"Shields Gazette (Lee Ryder)", tier:2, fee:"Undisclosed", truth:60, prob:30, light:'y', trend:'up',
   note:"First revealed by the Gazette: Pope 'will be allowed to leave' this summer, with Ipswich and other Premier League sides interested. Explicitly contingent on Newcastle first landing a senior replacement — which is exactly what the live Horníček deal is designed to unlock, so this rises once that's formally announced."},
  {name:"Joe Willock", sub:"26 · CM/AM · England", club:"Open to reasonable offers", pos:"CM", report:"~Jul 2026", src:"Shields Gazette", tier:2, fee:"Reasonable offer accepted", truth:60, prob:28, light:'o', trend:'flat',
   note:"Entering the final year of his contract; the club is 'actively trying to strengthen' central midfield and would accept a fair offer for the experienced, well-travelled squad option. A sell-to-avoid-a-free calculation rather than an active push to move him on."},
];

const RISERS = [
  {ar:"⬆", t:"<b>Bruno Guimarães</b>: 'final straw' framing behind Howe's exit, decision reportedly due within days."},
  {ar:"⬆", t:"<b>Matthias Jaissle</b>: advanced talks for the vacant head-coach seat, helped by the shared PIF ownership link."},
  {ar:"⬆", t:"<b>Giorgio Scalvini</b>: Newcastle reported 'in pole position', part of a £68m double defensive swoop."},
  {ar:"⬆", t:"<b>Nick Pope</b>: exit path clears as the Horníček goalkeeper deal edges toward completion."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Johan Manzambi</b>: lost to Aston Villa's club-record £59.5m deal — a factor in Howe's own departure."},
  {ar:"⬇", t:"<b>James Trafford</b>: missed for a third straight window, now signing for Leeds United (£40m)."},
  {ar:"⬇", t:"<b>Víctor Muñoz</b>: gone to Liverpool for £34.5m after Newcastle were in the race throughout June."},
  {ar:"⬇", t:"<b>Joaquín Oso</b>: Fiorentina reported to have 'accelerated' past Newcastle in the chase."},
];
const NEW = [
  {ar:"✦", t:"BREAKING: <b>Eddie Howe leaves</b> as head coach (30 Jul); <b>Matthias Jaissle</b> (Al-Ahli) the advanced favourite, McKenna and Conte also named."},
  {ar:"✦", t:"<b>Bruno Guimarães-to-Arsenal</b> escalates sharply: Telegraph and talkSPORT both now report momentum toward a £75-85m sale within days."},
  {ar:"✦", t:"Defensive business advancing: <b>Horníček</b> (GK, release clause triggered) and <b>Scalvini</b> (CB, 'pole position') form a reported £68m double deal."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Johan Manzambi</b>: resolved — signed for Aston Villa in a club-record £59.5m deal; any 2026 piece still listing him as a Newcastle target is stale."},
  {ar:"✕", t:"<b>James Trafford</b>: resolved — signing for Leeds United; treat any lingering Newcastle-Trafford link as recycled from the 2024/2025 chases."},
  {ar:"✕", t:"<b>Víctor Muñoz</b>: resolved — Liverpool completed the £34.5m signing in July; discount any Newcastle framing as pre-resolution reporting."},
  {ar:"✕", t:"<b>Aaron Ramsdale (£13.8m)</b>: dated reporting from the 2025 window, not current business; excluded from this refresh."},
];

const POSITIONS = [
  {p:"Head coach", w:95, x:"The gating decision for the entire window; vacancy opened today, Jaissle the advanced name"},
  {p:"Centre-back", w:72, x:"Schär (34) and Burn (34) both out of contract 2027; Scalvini the live succession target"},
  {p:"Winger", w:65, x:"Replacing Gordon; Ezzalzouli the stated priority after Muñoz was lost to Liverpool"},
  {p:"Goalkeeper", w:58, x:"Pope exit path opens once Horníček (senior) completes; Jaouen signed as the long-term project"},
  {p:"Central midfield", w:50, x:"Contingent on a Bruno Guimarães sale; Steur signed as depth, Ederson monitored as a possible replacement"},
];

const WATCHLIST = [
  {name:"Nick Woltemade", club:"Newcastle United", pos:"ST", dir:"out", age:"~2 wks", tier:2, note:"The Athletic (Chris Waugh) reports his fit in Howe's system was already uncertain after a difficult World Cup; with Howe now gone, his standing under a new coach is an open question, though a sale remains unlikely given the fee sunk into him."},
  {name:"Yoane Wissa", club:"Newcastle United", pos:"ST", dir:"out", age:"~2 wks", tier:2, note:"The Athletic reports Newcastle explored a sale market but judged the financial hit too heavy; the club is banking on a stronger season after his World Cup involvement rather than moving him on."},
  {name:"Joe White", club:"Newcastle United", pos:"CM", dir:"out", age:"~3 wks", tier:3, note:"Academy midfielder expected to leave permanently for 'a fresh start' after a disappointing loan at Bradford City (four appearances)."},
  {name:"Harrison Ashby", club:"Newcastle United", pos:"RB/LWB", dir:"out", age:"~3 wks", tier:3, note:"Signed from West Ham with promise but never made his senior Newcastle debut across three loan spells; expected to be allowed to leave permanently."},
  {name:"Dan Burn & Fabian Schär", club:"Newcastle United", pos:"CB", dir:"out", age:"~4 wks", tier:3, note:"Both 34 with contracts expiring 2027; not an active sale story, but their situation is the direct driver of the Scalvini centre-back pursuit above. Monitoring only."},
  {name:"Kieran McKenna / Antonio Conte", club:"Alternate coaching candidates", pos:"Head coach", dir:"in", age:"~same day", tier:3, note:"Named alongside Jaissle as the search continues; no reported contact confirmed for either as of 30 Jul, well behind Jaissle in the reported pecking order."},
];

const HUB = {
  bbcNUFC:    {l:"BBC Sport · Newcastle United", u:"https://www.bbc.co.uk/sport/football/teams/newcastle-united"},
  bbcGossip:  {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  skyNUFC:    {l:"Sky Sports · Newcastle United", u:"https://www.skysports.com/newcastle-united"},
  athletic:   {l:"The Athletic · Newcastle United (Chris Waugh)", u:"https://www.nytimes.com/athletic/football/club/newcastle-united/"},
  romano:     {l:"Fabrizio Romano · X", u:"https://x.com/FabrizioRomano"},
  chronicle:  {l:"Chronicle Live · Newcastle United (Lee Ryder)", u:"https://www.chroniclelive.co.uk/all-about/newcastle-united-fc"},
  leeRyder:   {l:"Lee Ryder · X", u:"https://x.com/lee_ryder"},
  shieldsGaz: {l:"Shields Gazette · Newcastle United", u:"https://www.shieldsgazette.com/sport/football/newcastle-united"},
  teamtalk:   {l:"TEAMtalk · Newcastle United", u:"https://www.teamtalk.com/newcastle-united"},
  telegraph:  {l:"Luke Edwards (The Telegraph) · X", u:"https://x.com/LukeEdwardsTele"},
  talksport:  {l:"Ben Jacobs (talkSPORT) · X", u:"https://x.com/JacobsBen"},
  nufcOfficial:{l:"Newcastle United Official · news", u:"https://www.newcastleunited.com/en/news"},
  tuttoAtalanta:{l:"Tutto Atalanta", u:"https://www.tuttoatalanta.com/"},
  newcastleWorld:{l:"Newcastle World · football", u:"https://www.newcastleworld.com/sport/football/newcastle-united"},
  khelnow:    {l:"Khel Now · football", u:"https://khelnow.com/football"},
};
const LINKMAP = {
  "Sean Steur": ["skyNUFC","nufcOfficial"],
  "Bazoumana Touré": ["skyNUFC","nufcOfficial"],
  "Ewen Jaouen": ["romano","nufcOfficial"],
  "Kyle Healy": ["romano"],
  "Lukáš Horníček": ["teamtalk","shieldsGaz"],
  "Anthony Gordon": ["skyNUFC"],
  "Sandro Tonali": ["skyNUFC"],
  "Kieran Trippier": ["skyNUFC"],
  "Emil Krafth": ["chronicle"],
  "Matthias Jaissle": ["khelnow","skyNUFC"],
  "Giorgio Scalvini": ["tuttoAtalanta","teamtalk"],
  "Abde Ezzalzouli": ["teamtalk"],
  "Joaquín Oso": ["teamtalk"],
  "Ederson (Atalanta)": ["teamtalk"],
  "Bruno Guimarães": ["telegraph","talksport","skyNUFC"],
  "Jacob Murphy": ["teamtalk"],
  "Lewis Hall": ["teamtalk"],
  "Nick Pope": ["shieldsGaz","leeRyder"],
  "Joe Willock": ["shieldsGaz"],
};
const WL_LINKMAP = {
  "Nick Woltemade":"athletic","Yoane Wissa":"athletic","Joe White":"shieldsGaz","Harrison Ashby":"shieldsGaz",
  "Dan Burn & Fabian Schär":"teamtalk","Kieran McKenna / Antonio Conte":"khelnow",
};

const PROSE = {
  heroH2: `The dugout is empty and the captain wants out: Newcastle's window is thrown into <em>chaos</em>`,
  heroLede: `Newcastle United's summer flipped on its head on 30 July: head coach <b>Eddie Howe</b> walked away after almost five years, with reporting pointing to frustration over a summer that has already sold <b>Anthony Gordon</b> (£69m), <b>Sandro Tonali</b> (£100m) and, last deadline day, <b>Alexander Isak</b> — and then missed out on primary target <b>Johan Manzambi</b> to Aston Villa. Hours later, captain <b>Bruno Guimarães</b>' wish to join Arsenal is being framed by the Telegraph as "the final straw," with talkSPORT reporting a resolution possible within days. Beneath the upheaval, real recruitment business continues at pace: a goalkeeper (<b>Lukáš Horníček</b>) and a centre-back (<b>Giorgio Scalvini</b>) are both advancing, and <b>Matthias Jaissle</b> of PIF sister club Al-Ahli is the early favourite to take the reins.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Ross Wilson</b> (Sporting Director) &amp; David Hopkinson (CEO)</span>
      <span>HEAD COACH: <b>Vacant</b> (Howe departed 30 Jul)</span>
      <span>OWNER: <b>PIF-led consortium</b> (Yasir Al-Rumayyan)</span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">12<small>th</small></div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat gold"><div class="l">Est. Gross Spend</div><div class="v">£120-180<small>m</small></div></div>
    <div class="stat gold"><div class="l">Est. Sales</div><div class="v">£180-260<small>m</small></div></div>
    <div class="stat gold"><div class="l">SCR Cost Cap</div><div class="v">85<small>%</small></div></div>`,
  positionPanel: `
  <!-- ANALYSIS: MODEL + FINANCE -->
  <section id="sec-position">
    <div class="sec-head"><h3>Club Position</h3><span class="num">01</span></div>
    <p class="sec-sub">The lens through which every rumour is weighted: the recruitment philosophy, the balance sheet, the brand, and today's coaching upheaval.</p>

    <div class="cards">
      <!-- THE MODEL -->
      <div class="card">
        <h4>The Model <span class="tag">IN FLUX</span></h4>
        <p>Under sporting director <b>Ross Wilson</b> (ex-Nottingham Forest, appointed after triggering his release clause), Newcastle have pivoted this summer toward a declared <b>Borussia Dortmund-style framework</b>: buy players aged roughly 18-24 in the £20-40m bracket with development and resale ceiling, rather than chase 30-year-old marquee names. Steur, Touré, Jaouen and Healy all fit that mould exactly.</p>
        <div class="quote">The model just lost its author on the pitch: Eddie Howe, the manager who turned this recruitment into results, left the building hours before this report was filed. Whoever replaces him inherits the framework, not necessarily the say over it.</div>
        <p><b>This window's logic:</b> sell the ageing, injury-prone or homesick (Gordon, Tonali, Isak), reinvest in youth and defensive succession (Scalvini, Horníček), and now, urgently, appoint a head coach who can hold the dressing room together while Bruno Guimarães' exit is negotiated.</p>
        <ul>
          <li>Stated needs pre-crisis: a senior goalkeeper, a centre-back, a winger to replace Gordon.</li>
          <li>New, more urgent needs: a head coach, and a contingency plan if the captain leaves.</li>
          <li>Markets: Serie A (Scalvini, Ederson), La Liga (Ezzalzouli, Oso), Ligue 2/France (Jaouen), plus the PIF network for the coaching search.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> treat every incoming link as provisional until a head coach is confirmed — recruitment philosophy is set, but a new voice can still reprioritise targets within weeks.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">TRANSITIONING</span></h4>
        <p>Backed by the <b>PIF-led consortium</b> under chairman Yasir Al-Rumayyan, with PCP Capital Partners and the Reuben Brothers holding minority stakes, Newcastle's ultimate financial ceiling is enormous. In practice, spending has run through disciplined channels: a 2024-25 accounting profit of £34.7m was substantially inflated by one-off related-party asset sales, masking an underlying operating loss estimated near £98.4m, with staff costs running at 72.6% of revenue.</p>
        <ul>
          <li>The <b>Squad Cost Ratio</b> regime replacing PSR closes off the related-party accounting workarounds Newcastle leaned on in 2025.</li>
          <li>This summer's sales (Isak £125m, Tonali £100m, Gordon £69m) generate very large one-off inflows and materially strengthen the SCR position for years, not just this window.</li>
          <li>A £106.5m equity injection from parent company PZ Newco and a new £100m HSBC/First Abu Dhabi Bank facility add further liquidity headroom.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> cash is genuinely available; the constraint this summer is less the balance sheet than boardroom bandwidth, spent instead on an unplanned coaching search.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">Missing Europe and losing a popular manager on the same day tests a project built on momentum; the PIF financial base and network offer a fast way to answer both questions.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>Newcastle enter this window without European football for the first time since 2023, after a 12th-place finish that undercut the momentum of the PIF era's early Champions League run. Losing Howe — widely seen as the best manager Newcastle have had this century — on the eve of pre-season, and simultaneously fighting to keep the club captain, is a serious reputational wobble at exactly the moment a head-coach candidate is weighing up the job.</p>
        <ul>
          <li>The PIF-Al-Ahli relationship is a genuine differentiator: Jaissle's advanced talks lean directly on that network.</li>
          <li>A swift, credible coaching appointment is now the single biggest lever on how this whole window is remembered.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> the same sales (Isak, Tonali, Gordon) that strengthen the balance sheet are the ones cited as reasons Howe grew frustrated and Guimarães wants to leave.</div>
      </div>
      <div class="card">
        <h4>The SCR Cushion <span class="tag">EASED, NOT SOLVED</span></h4>
        <p>With no European football in 2026/27, Newcastle sit under the looser <b>85% Squad Cost Ratio</b> cap rather than the 70% ceiling that applies to clubs in continental competition. Combined with this summer's outgoing fees, that gives real headroom to fund the Scalvini/Horníček defensive rebuild and a marquee winger without immediately pressing the ratio.</p>
        <ul>
          <li>A 3-year net transfer position feeds the SCR calculation, so the Isak/Tonali/Gordon fees compound benefit across multiple windows.</li>
          <li>The looser 85% cap outside Europe is, ironically, the one silver lining of missing out on continental football this season.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: financial headroom and a network no rival can match</h5>
        <ul>
          <li>Real cash from three big sales plus fresh equity and bank facilities give genuine spending power.</li>
          <li>The PIF/Al-Ahli link offers a fast, credible route to a proven, title-winning coach in Jaissle.</li>
          <li>A looser 85% cost cap outside Europe gives more room than most of the Premier League's mid-table.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: a squad and a season built on quicksand</h5>
        <ul>
          <li>Pre-season begins with no head coach, a captain trying to leave, and three key attacking/midfield exits already banked.</li>
          <li>A rushed or wrong coaching appointment could waste the financial advantage entirely.</li>
          <li>Losing Guimarães without a like-for-like replacement lined up leaves a genuine leadership and control-of-midfield gap.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> land the head coach fast — Jaissle is the live favourite — resolve Guimarães's future inside the week as both parties want, bank the Scalvini/Horníček defensive rebuild, and use the well-funded, looser-cap position to land one marquee winger (Ezzalzouli) to actually replace Gordon's output. The financial base is stronger than the mood; the next 10 days will decide which one wins out.
    </div>
  </section>
`,
  confirmedPending: `<b>Horníček's £24.5-30m release-clause move is agreed in principle but not yet formally announced</b> — expect confirmation within days once terms and a medical are finalised. There is, as of writing, <b>no contract-renewal story to report for Bruno Guimarães</b>; if anything the opposite is true, with reporting suggesting Newcastle themselves now expect to sell rather than retain their captain. Watch this space: a swift head-coach appointment could change that calculus overnight.`,
  incomingSub: `Every link carries two independent readings. <b style="color:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="color:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Wilson network 15%, finance 10%, competition 5%. <b style="color:var(--gold)">NEW</b> flags a link that surfaced or materially moved since Howe's departure broke this afternoon.`,
  outgoingSub: `Three confirmed sales (Gordon, Tonali, plus last deadline day's Isak deal) have already banked close to £300m combined; a fourth, Bruno Guimarães, would fund the head-coach transition and a marquee winger in one move.`,
  pricingBanner: `
      <b>Pricing principle: with sales already funding a rebuild, Newcastle are pragmatic rather than reluctant sellers this summer.</b> Three multipliers push fees up regardless: <b>(1)</b> genuine first-team quality (Guimarães, Willock) draws Premier League and European interest; <b>(2)</b> contract length gives Newcastle leverage on Guimarães specifically (two years plus an option); <b>(3)</b> a competitive market (Man Utd on Hall, Everton on Murphy) supports the asking price. The one softener: out-of-contract-adjacent players (Pope, entering the final stages of his Newcastle career) are priced to move rather than to deter.
    `,
  excludedNote: `<b>Excluded as stale/already-resolved:</b> Johan Manzambi (signed for Aston Villa, £59.5m — a direct factor in Howe's exit), James Trafford (signing for Leeds United after Newcastle missed out a third time), Víctor Muñoz (signed for Liverpool, £34.5m) and a recycled Aaron Ramsdale report dated to the 2025 window. Any article still framing these as live Newcastle targets is out of date.`,
  spendIn: { v: `£120-180m`, x: `Horníček and Scalvini (≈£55-65m combined) are close to done; a winger (Ezzalzouli) and any central-midfield replacement for Guimarães would push toward the top of the range, contingent on the coaching appointment.` },
  spendOut: { v: `£180-260m`, x: `Gordon (£69m) and Tonali (£100m) are already banked; a Guimarães sale at the reported £75-85m valuation would be the single largest fee of the summer if it completes as expected within days.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: Fabrizio Romano, Sky Sports, The Telegraph (Luke Edwards on Newcastle specifically), talkSPORT (Ben Jacobs). <i>Used for:</i> all confirmed transfers, Howe's exit, and the Bruno Guimarães escalation.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Chronicle Live/Shields Gazette (Lee Ryder and the NUFC beat), The Athletic (Chris Waugh), TeamTalk exclusives (Graeme Bailey on Ezzalzouli), Tutto Atalanta on Scalvini.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk aggregated pieces, CaughtOffside, TheHardTackle, Football365, Khel Now on the coaching search.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: unverified fan sites, recycled aggregator posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> only, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Wilson network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="color:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Manzambi, Trafford and Muñoz links fall on this basis post-resolution.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="color:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b>: the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="color:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window: fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
