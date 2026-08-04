/* ============================================================
   MERCATO IQ · CLUB DATA · SUNDERLAND · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce sunderland.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Sunderland", mono: "SAFC", slug: "sunderland",
  primary: "#e21f26", primaryBright: "#ff2b24", primaryDeep: "#a3151a",
  primaryRgb: "226,31,38",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook) ── */
const VOLATILE = {
  verified: "2026-07-27",
  coach: "Régis Le Bris",
  dof: "Florent Ghisolfi (Director of Football)",
  europe: "Europa League (2026/27)",
  finish: "7th (2025/26)",
  owner: "Kyril Louis-Dreyfus (with Juan Sartori; Bia Sports group)",
  window: "Open until 1 Sep 2026, 11pm UK"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Sunderland/Transfer+News",
    "https://www.transferfeed.com/clubs/sunderland/3",
    "https://www.sunderlandecho.com/sport/football/sunderland-afc",
    "https://www.skysports.com/sunderland",
    "https://www.sportsmole.co.uk/football/sunderland/"
  ],
  queries: [
    "Sunderland transfer news <current month + year>",
    "Sunderland bid OR medical OR 'personal terms'",
    "Sunderland calciomercato",
    "Sunderland mercato Foot Mercato L'Equipe",
    "Sunderland transfer Bild Plettenberg"
  ],
  note: "Foreign desks per profile: Italy (Di Marzio/TMW/ParmaLive), France-Belgium (L'Equipe/RMC/Tavolieri), NL (VI/Telegraaf), Germany (Bild/Kicker), Spain (Marca/AS/Navarra), Balkans, South America. Add one query per movable live thread. Trace every aggregator hit to its original reporter (master §4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "31 Jul 2026", updated: "2026-07-31T09:00:00Z", label: "FootballTransfers-gated refresh: Rusyn's Karpaty Lviv exit and Pembélé's Le Havre move now confirmed, Dan Neil's Rangers destination locked in; Poku faces a 1 Aug Leverkusen deadline, Masuaku's Konyaspor exit is contested, and Soulé's interest has petered out entirely" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Thomas Meunier", sub:"34 · RB · Belgium", to:"Sunderland (free from Lille)", fee:"FREE", free:true, status:"done", statusTxt:"SIGNED IN",
   note:"Done (15 Jul): the Belgium international right-back joins on a free from Lille on a two-year deal, medical passed. He is taking a post-World Cup break and links up with the squad in August. A veteran exception rather than a value buy, but ready-made, Europa-tested cover at right-back after Cirkin's exit and with Geertruida back at Leipzig."},
];
const CONFIRMED_OUT = [
  {name:"Eliezer Mayenda", sub:"21 · ST · Spain U21", to:"Stade Rennais", club:"Stade Rennais", fee:"~€20m (£17m)", status:"done", statusTxt:"SALE CONFIRMED",
   note:"Done (5 Jul): the first big sale of the window, a permanent move to Stade Rennais on a five-year deal for a reported €20m. Rennes won a tug-of-war with Porto and Betis. With Brobbey ahead of him and a starting role in France on offer, both sides were willing; the cash eases the SCR position but sharpened the striker question, since eased again by the two-striker plan."},
  {name:"Milan Aleksić", sub:"20 · DM", to:"Partizan (loan)", club:"Partizan (loan)", fee:"LOAN", free:true, status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Confirmed: the 20-year-old Serbian midfielder has rejoined Partizan Belgrade, where he developed, on loan (with an option, per B92). A fringe development player heading out for minutes."},
  {name:"Harrison Jones", sub:"21 · MF · academy", to:"Peterborough United", club:"Peterborough United", fee:"Undisclosed", status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Confirmed: the academy graduate has joined Peterborough United on a permanent deal, ending more than 15 years with the club. A squad-list departure that trims the fringe."},
  {name:"Dan Neil", sub:"24 · CM · academy", to:"Rangers", club:"Rangers", fee:"FREE", free:true, status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Destination now locked in: Sky Sports confirms the captain who led the club back to the Premier League across 200-plus appearances has signed a three-year deal at Rangers on a Bosman free, seeing off Southampton's interest along the way."},
  {name:"Dennis Cirkin", sub:"LB · academy era", to:"Free agent (Middlesbrough linked)", club:"Free agent (Middlesbrough linked)", fee:"FREE", free:true, status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Confirmed on the official retained list. Five years and 120-plus appearances on Wearside end on a free; the exit opens a left-back depth slot that Meunier does not fill, driving the Methalie pursuit."},
  {name:"Bertrand Traoré", sub:"30 · winger", to:"Free agent (Ajax linked)", club:"Free agent (Ajax linked)", fee:"FREE", free:true, status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"The retained list confirmed the one-year option was not taken up, and he leaves a free agent after an injury-hit campaign; Africafoot reported Ajax weighing a move. His exit is a big reason wide attack is now the priority."},
  {name:"Niall Huggins", sub:"25 · RB/LB", to:"Free agent", club:"Free agent", fee:"FREE", free:true, status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Named on the official retained list after an injury-hit spell since 2021, leaves on expiry."},
  {name:"Nazariy Rusyn", sub:"27 · ST · Ukraine", to:"Karpaty Lviv", club:"Karpaty Lviv", fee:"Free/nominal", free:true, status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Confirmed by SAFC (1 Jul): a permanent, free-or-nominal-fee move back to Ukraine on a four-year deal at Karpaty. A fringe forward exit that had been tracked as a rumour for weeks; now off the board entirely."},
  {name:"Timothée Pembélé", sub:"22 · LB/RB · France", to:"Le Havre", club:"Le Havre", fee:"FREE", free:true, status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Confirmed by SAFC (16 Jul): a free, permanent move to Le Havre. Corrects an earlier tracking error - a prior refresh had him watchlisted as a possible incoming full-back target; he was in fact already a Sunderland player heading out the door. Picked up this cycle via the FootballTransfers.com confirmed-deals cross-check."},
  {name:"Zak Johnson", sub:"20 · CB", to:"York City", club:"York City", fee:"Undisclosed", status:"exit", statusTxt:"EXIT CONFIRMED",
   note:"Confirmed by York City FC: a permanent return to League Two after being tracked in earlier refreshes only as an Oxford United rumour. A fringe academy centre-back exit."},
];

const INCOMING = [
  {name:"Ernest Poku", sub:"22 · Netherlands U21 · RW", club:"Bayer Leverkusen", pos:"RW", report:"~2 days ago", src:"Football FanCast / Get German Football News", tier:3, fee:"~£21m (€25m)", truth:60, prob:32, light:'y', trend:'up',
   note:"Live again with a real deadline attached: Leverkusen have reportedly set 1 Aug as their internal cutoff to sell, with Sunderland described as favourites and 'almost certain to join an English club', at a fee around €25m/£21m. Nottingham Forest remain competing, but the imminent deadline is a genuine forcing mechanism that lifts this above the drift of the last refresh."},
  {name:"Mariano Troilo", sub:"22 · Argentina · CB", club:"Parma", pos:"CB", report:"~12 wks ago", src:"Sport Witness / ParmaLive / OneFootball", tier:3, fee:"~€30m (£26m)", truth:50, prob:16, light:'o', trend:'down',
   note:"No fresh reporting found since the original Sport Witness/ParmaLive line (7 May): Sunderland and Fulham 'ready to invest' around €30m, but Parma still want a 'significant offer' and no bid has followed in nearly three months. Per the recency-decay rules this now sits in weak/heavily-discounted territory; kept in the main table because it remains an on-model, plausible need rather than dead, but the lack of movement is the story."},
  {name:"Dayann Methalie", sub:"20 · France · LB/LWB", club:"Toulouse", pos:"LB", report:"~1-2 days ago", src:"RMC Sport (Fabrice Hawkins) / Get French Football News / Sunderland Echo", tier:2, fee:"~£25.7m bid, Toulouse want €30m+", truth:76, prob:52, light:'g', trend:'flat',
   note:"Still the most live thread at the club, but a genuine contradiction has emerged. Get French Football News and the Echo both still frame Sunderland as 'close to complete' at around €30m, personal terms said to remain in place on a five-year deal. But Toulouse president Olivier Cloarec went on record (29 Jul, via the Echo) saying flatly 'there is no agreement between the two clubs' after three to four weeks of talks, with Sunderland's actual bid put at roughly £25.7m against a Toulouse ask still above €30m. Both things can be true at once - advanced, not signed - so probability holds rather than climbs until the fee gap closes."},
  {name:"Matías Galarza", sub:"24 · Paraguay · CM", club:"River Plate", pos:"CM", report:"~4 wks ago", src:"Football FanCast", tier:3, fee:"~£4-6m", truth:38, prob:8, light:'r', trend:'down',
   note:"Fading further: Football FanCast's own update names Olympiacos and Getafe as the clubs actually in pole position, with no fresh Sunderland step reported. With Sadiki and Xhaka both staying, only a depth need remains in central midfield. Drifting into the Rumour Mill."},
  {name:"Roony Bardghji", sub:"20 · Sweden · RW/AM", club:"Barcelona", pos:"RW", report:"~2 wks ago", src:"TheHardTackle / Sport (Spain)", tier:3, fee:"Undisclosed (loan or permanent both floated)", truth:42, prob:12, light:'r', trend:'flat',
   note:"Sunderland in 'preliminary negotiations' per TheHardTackle (13 Jul), competing directly with Leeds and Aston Villa; Barcelona are said to be fielding more than ten enquiries for the winger. On-model age, but early-stage and multi-club with no fee agreed - genuine interest, low completion odds this window."}
];

const OUTGOING = [
  {name:"Anthony Patterson", sub:"26 · GK", club:"Wrexham / Millwall / Wolves", pos:"GK", report:"~2 wks ago", src:"Sunderland Echo", tier:3, fee:"£7-10m", truth:80, prob:48, light:'y', trend:'flat',
   note:"Still the most likely clean sale, but not close. Wrexham lead and prefer a loan (with or without an option), Millwall are keen on a permanent, and Wolves are circling; Rangers have been put off by the roughly £7m asking price. Roefs is the clear No.1 and Ellborg is signed as cover, so the exit logic holds even without fresh movement this refresh."},
  {name:"Noah Sadiki", sub:"21 · DR Congo · DM/CM", club:"Man Utd / City / Chelsea / Arsenal", pos:"DM/CM", report:"~2 wks ago", src:"Tavolieri / TEAMtalk", tier:2, fee:"£55-65m+", truth:86, prob:18, light:'o', trend:'flat',
   note:"The crown jewel, and Sunderland are blocking. Manchester United, Manchester City and Chelsea are all keen and Arsenal have now been linked too, but the club's stance is unequivocal: not for sale this summer, contracted long term, integral to Le Bris. No fresh movement this refresh; the firm no keeps completion low."},
  {name:"Simon Adingra", sub:"24 · Ivory Coast · W", club:"AS Roma / West Ham", pos:"W", report:"~1-3 days ago", src:"Sunderland Echo / TEAMtalk / TheHardTackle", tier:3, fee:"~£30m (€35m)", truth:64, prob:36, light:'y', trend:'up',
   note:"The field has widened materially. Roma now view him as a backup option behind Nusa and Mbaye rather than a first choice, but RB Leipzig, Ipswich, Hull and - most concretely - West Ham (TheHardTackle, 28 Jul, described as actively pursuing) have all entered the picture, with reporting now framing a departure as 'more than likely' this summer at around £30m/€35m. He struggled after arriving from Brighton (1 goal, 1 assist in 15) and spent time on loan at Monaco. No bid confirmed yet, but the breadth of interest lifts Happens."},
  {name:"Granit Xhaka", sub:"33 · CM · leader", club:"Chelsea / Man Utd", pos:"CM", report:"~4 wks ago", src:"Sky Sports (Downie/Sheth)", tier:2, fee:"£8m bid rejected", truth:82, prob:5, light:'r', trend:'flat',
   note:"Resolved: staying. Chelsea's £8m opening bid was rejected out of hand and Sunderland made a public 'power play' of their stance; the captain is committed with two years left and the Europa pull. No change this refresh; the sale angle is closed."},
  {name:"Wilson Isidor", sub:"25 · ST", club:"West Ham + others", pos:"ST", report:"~2 wks ago", src:"Sunderland Echo", tier:3, fee:"£15-20m", truth:50, prob:24, light:'o', trend:'down',
   note:"Retention looking more likely still. The Echo (5 Jul) frames Sunderland as leaning toward keeping him: Brobbey is preferred as the senior No.1, but the Europa League fixture load argues for keeping Isidor as rotation cover rather than selling into it. West Ham interest was floated but has not advanced."},
  {name:"Brian Brobbey", sub:"24 · ST · NED", club:"Man Utd / Everton / Bayern", pos:"ST", report:"~2 wks ago", src:"Football Transfers / Peoples Person", tier:3, fee:"£30-34m+", truth:56, prob:16, light:'o', trend:'flat',
   note:"Wanted after a strong World Cup, but not cheaply, and no fresher reporting found this refresh. Manchester United have weighed a move, Everton are linked and Bayern have surfaced on aggregator feeds, with Sunderland's ask reported around £34m. He is the senior striker with Mayenda gone and is central to the two-striker plan; no agreed deal, holding firm."},
  {name:"Arthur Masuaku", sub:"32 · DR Congo · LB", club:"Konyaspor (Turkey)", pos:"LB", report:"~1-2 days ago", src:"FootballPlace / Sunderland Echo (contested)", tier:3, fee:"Free/undisclosed", truth:52, prob:40, light:'y', trend:'up',
   note:"Genuinely contested this refresh. FootballPlace reports Sunderland have 'agreed' his exit with Konyaspor closing in on a free transfer and a medical expected in Turkey within days (per Turkish outlet Konya'nın Sesi). But the Echo's own 30 Jul round-up flags 'conflicting reports' and says the move 'may be stalling' as Masuaku explores alternative options. Reinildo is the only other senior left-back on the books, so this remains directly tied to how the Methalie pursuit resolves; probability raised sharply but flagged as unresolved rather than done."},
  {name:"Romaine Mundle", sub:"22 · LW", club:"Rangers / continental", pos:"LW", report:"~3 wks ago", src:"Sunderland Echo / Voetbalnieuws", tier:3, fee:"£10-16m", truth:48, prob:24, light:'o', trend:'down',
   note:"No fresh reporting found this refresh; still recovering from summer surgery and held out as a precaution in pre-season. Rangers and various continental clubs remain credited from the last cycle, but this has gone quiet - flagged as stale."},
  {name:"Robin Roefs", sub:"23 · GK", club:"Chelsea / Liverpool", pos:"GK", report:"~9 wks ago", src:"aggregated / O'Rourke", tier:3, fee:"£45-55m", truth:48, prob:10, light:'r', trend:'flat',
   note:"Courted at the top of the league but going nowhere. He is the established No.1 after an impressive first season, precisely why Patterson is the one leaving, and Sunderland have no need to sell on a deal to 2030. No fresh movement; quiet."},
  {name:"Enzo Le Fée", sub:"26 · CM/AM", club:"Liverpool / Villa / Arsenal", pos:"CM/AM", report:"~9 wks ago", src:"SportsBoom / Fichajes", tier:3, fee:"£22-30m", truth:44, prob:14, light:'r', trend:'down',
   note:"Several Champions-League-chasing clubs linked, but the player has played it down as 'the media part' and Sunderland have no need to sell above his ~€23m arrival cost. No fresh reporting found this refresh; flagged as stale."},
  {name:"Chemsdine Talbi", sub:"20 · Morocco · RW", club:"Villa / Brighton / Napoli", pos:"RW", report:"~cooled", src:"SportsBoom", tier:3, fee:"£25-35m", truth:40, prob:12, light:'r', trend:'flat',
   note:"Broad monitoring of a prized young winger only a year in; any sale would be at a steep premium with Sunderland holding the cards, and with wide attack now a need the club would resist letting him go. No concrete bid, no fresh reporting this refresh."},
  {name:"Trai Hume", sub:"24 · NI · RB", club:"Brighton / Real Madrid", pos:"RB", report:"~11 wks ago", src:"aggregated / TEAMtalk", tier:4, fee:"£20-30m", truth:34, prob:10, light:'r', trend:'flat',
   note:"Brighton interest is plausible but quiet, and with Meunier now added Sunderland have cover rather than pressure. Under contract to 2030, so the holder's price applies. No fresh reporting this refresh."},
  {name:"Habib Diarra", sub:"22 · CM · club-record", club:"Galatasaray", pos:"CM", report:"~11 wks ago", src:"Turkish press", tier:4, fee:"£35m+", truth:20, prob:6, light:'r', trend:'flat',
   note:"Galatasaray's planning touched the club-record signing. Very unlikely: a cornerstone bought last summer whom Sunderland would resist hard and price prohibitively. No fresh reporting this refresh."},
];

const RISERS = [
  {ar:"⬆", t:"<b>Masuaku</b> - out: FootballPlace reports Sunderland have agreed his exit, Konyaspor closing in on a free with a medical mooted within days, though the Echo flags the deal may be contested."},
  {ar:"⬆", t:"<b>Poku</b> - in: Leverkusen have reportedly set a 1 Aug internal deadline to sell, with Sunderland described as favourites."},
  {ar:"⬆", t:"<b>Adingra</b> - out: interest has broadened well past Roma alone, with West Ham now the most concrete suitor alongside RB Leipzig, Ipswich and Hull."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Soulé</b> - interest has collapsed: Italian press (football-italia/Tuttosport) has Sunderland among clubs whose pursuit 'petered out', and the Echo reports no concrete indication Sunderland will pursue it; Roma have instead proposed him to AC Milan."},
  {ar:"⬇", t:"<b>Troilo</b> - no fresh reporting in nearly three months since the original Sport Witness/ParmaLive line; drifting toward stale."},
  {ar:"⬇", t:"<b>Galarza</b> - Olympiacos and Getafe are now reported in pole position, not Sunderland."},
];
const NEW = [
  {ar:"✦", t:"<b>Confirmed exits land via the FootballTransfers cross-check:</b> Nazariy Rusyn (Karpaty Lviv), Timothée Pembélé (Le Havre) and Zak Johnson (York City) all move to Confirmed this refresh; Dan Neil's free-agency resolves to a signed three-year Rangers deal."},
  {ar:"✦", t:"<b>Poku deadline:</b> Leverkusen reportedly want the winger sold by 1 Aug, with Sunderland the favourites."},
  {ar:"✦", t:"<b>Methalie contradiction:</b> Get French Football News/the Echo still have Sunderland 'close to complete', but Toulouse's own president says on record there is 'no agreement' yet - both threads are live and reported this cycle."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Matías Soulé</b> - interest has petered out per Italian press; Roma have proposed him to AC Milan instead. Target missed."},
  {ar:"✕", t:"<b>Tarik Muharemović</b> - signed for Leeds United (~£34m, Romano 'here we go'); Sunderland and Bournemouth lost the race on financial terms. Target missed."},
  {ar:"✕", t:"<b>Folarin Balogun</b> - Sunderland sources have played down the ~£40m links; no interest in the striker. Not live."},
  {ar:"✕", t:"<b>Óscar Mingueza</b> - signed Crystal Palace on a free; Sunderland's enquiry (Moretto) went unrewarded. Target missed."},
  {ar:"✕", t:"<b>Kerim Alajbegović</b> - Chelsea now reported 'most likely to do a deal' (Telegraph); Sunderland effectively out. Demoted to the Rumour Mill."},
  {ar:"✕", t:"<b>Stale 100d+ aggregator links</b> - Mathys Tel, Angel Gomes, Jonathan David, Liam Delap, Guendouzi etc. are last-window noise."},
];

const POSITIONS = [
  {p:"Wide attacker / winger", w:88, x:"Now the top need after Mayenda and Traoré exits; Soulé the marquee (field widened), Poku (£22m) the new name, Ejuke/Bardghji monitored"},
  {p:"Left-sided centre-back", w:80, x:"Troilo (~€30m, Parma) firming as lead, Sunderland and Fulham 'ready to invest'; Boyomo a fallback"},
  {p:"Left-back", w:84, x:"Now advancing fast: Methalie (~€30m, Toulouse) has personal terms agreed and clubs in advanced talks; Masuaku's own exit interest (Konyaspor) adds urgency, Meunier covers only the right"},
  {p:"Striker / centre-forward", w:46, x:"Need eased by Le Bris's 'two-and-a-half strikers' model (Brobbey + Isidor); Abline cooling"},
  {p:"Holding / central midfield", w:38, x:"Sadiki blocked and Xhaka staying; Galarza only a fading depth option"},
  {p:"Goalkeeper depth", w:26, x:"Roefs No.1 with Ellborg signed as cover; a need only opens as Patterson leaves"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"Chidera Ejuke", club:"Sevilla", pos:"W", dir:"in", age:"~1 day", tier:4, note:"Super Eagles winger linked as Sunderland weigh wide options; multiple clubs (incl. an Anderlecht/Belgium return) in the mix and stiff competition. Early, thinly sourced (Fichajes/afrik-foot), monitoring only."},
  {name:"Geoffrey Kondogbia", club:"free/veteran", pos:"DM", dir:"in", age:"~2 days", tier:4, note:"Surfaced on the aggregator feed as a midfield option, but an experienced veteran profile is off the buy-young model with Sadiki staying. Thinly sourced, monitoring only."},
  {name:"Marlon Gomes", club:"Shakhtar Donetsk", pos:"CM", dir:"in", age:"~6 wks", tier:3, note:"Sunderland, Villa and Newcastle sent officials to check the 21-year-old Brazilian (~€20m). Bang on-model, but no progression since mid-June, so monitoring only."},
  {name:"Flavien Boyomo", club:"Osasuna", pos:"CB", dir:"in", age:"~14 wks", tier:3, note:"A Moretto-linked, affordable centre-back in the right age band, named as a Troilo fallback. No progression to talks; a depth option if the Parma thread stalls."},
  {name:"Lutsharel Geertruida", club:"RB Leipzig", pos:"RB/CB", dir:"in", age:"~3 wks", tier:2, note:"Cooled: the loan lapsed and he returned to Leipzig, Meunier is now signed at right-back. A permanent is a lower priority; the recycled 'Liverpool full agreement' line is stale January reporting."},
  {name:"Arne Engels", club:"Celtic", pos:"CM", dir:"in", age:"~3 wks", tier:3, note:"Moving, but toward Nottingham Forest, who lead the race; Sunderland were only ever tracking alongside several clubs, with no offer."},
  {name:"Jakob Breum", club:"Go Ahead Eagles", pos:"CM", dir:"in", age:"~5 wks", tier:4, note:"Earlier interest in the Danish midfielder, also monitored by Fulham and Celtic. On-model age, early-stage, quiet since."},
  {name:"Víctor Muñoz", club:"Osasuna", pos:"W", dir:"in", age:"~cooled", tier:3, note:"Diario de Navarra maintained Sunderland interest after winter bids; no fresh corroboration this window."},
  {name:"Yassine Titraoui", club:"Charleroi", pos:"DM/CM", dir:"in", age:"~2 days", tier:3, note:"Back on the feeds: Belgian/French press had an offer and a player preference for Sunderland earlier in the summer; a genuine on-model holder, but no confirmed fresh bid, so monitoring."},
  {name:"Lamine Camara", club:"Monaco", pos:"DM/CM", dir:"in", age:"~stale", tier:3, note:"On-model young holder; TEAMtalk had Monaco open at £25-30m, but no fresh reporting and Monaco are strong."},
  {name:"Harry Wilson", club:"Fulham", pos:"W", dir:"in", age:"~stale", tier:3, note:"Named as a contender earlier; an experienced Premier League wide option, off the youth model."},
  {name:"Amadou Koné", club:"Neom (KSA)", pos:"CM", dir:"in", age:"~cooled", tier:3, note:"Echo round-up had Sunderland and Forest considering the 21-year-old box-to-box. Early, quiet."},
  {name:"Aaron Wan-Bissaka", club:"West Ham", pos:"RB", dir:"in", age:"~stale", tier:4, note:"Relegated West Ham open to selling; experienced cover, but off the youth model and now surplus with Meunier in and Hume around."},
  {name:"Jhon Lucumí", club:"Bologna", pos:"CB", dir:"in", age:"~cooled", tier:3, note:"A former target: Juventus, Roma and Bournemouth are the current suitors, with a release clause in play. Sunderland not currently active."},
  {name:"Alan Browne", club:"Middlesbrough", pos:"CM", dir:"out", age:"~2 days", tier:3, note:"Under contract to 2027 and will be allowed to leave, though a permanent looks less likely per the feeds. Squad midfielder."},
  {name:"Jenson Seelt", club:"Wolfsburg", pos:"CB", dir:"out", age:"~stale", tier:3, note:"The squad review flags a departure as highly likely; earlier talks over a permanent after a loan. A fringe centre-back."},
  {name:"Aji Alese", club:"continental", pos:"CB/LB", dir:"out", age:"~2 wks", tier:3, note:"Named in the squad review among defenders whose departure 'seems highly likely'. Fringe, injury-hit; an exit for minutes."},
];

/* ---------- SOURCE LINKS ----------
   Exact URLs only where verified this refresh; otherwise the named source's hub.
   Aggregators (TransferFeed etc.) are never linked: the traced original is. */
const HUB = {
  echo:      {l:"Sunderland Echo · SAFC", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc"},
  safc:      {l:"SAFC Official", u:"https://www.safc.com/news/"},
  sky:       {l:"Sky Sports · Sunderland", u:"https://www.skysports.com/sunderland"},
  downie:    {l:"Keith Downie (Sky) · X", u:"https://x.com/SkySports_Keith"},
  skyXhaka:  {l:"Sky Sports · Xhaka stays", u:"https://www.skysports.com/football/news/11095/13560190/sunderland-transfer-news-granit-xhaka-staying-at-stadium-of-light-after-chelsea-bid-for-black-cats-captain-rejected"},
  hinze:     {l:"Philipp Hinze (Sky Germany) · X", u:"https://x.com/philipphinze24"},
  nEcho:     {l:"The Northern Echo · sport", u:"https://www.thenorthernecho.co.uk/sport/"},
  teamtalk:  {l:"TEAMtalk · Sunderland", u:"https://www.teamtalk.com/sunderland"},
  ttSoule:   {l:"TEAMtalk · Soulé talks opened", u:"https://www.teamtalk.com/sunderland/matias-soule-30m-sunderland-transfer-talks-opened-roma-attacker"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  fInsider:  {l:"Football Insider", u:"https://www.footballinsider247.com/"},
  fInsMeth:  {l:"Football Insider · Methalie (sources)", u:"https://www.footballinsider247.com/sunderland/transfers/sources-sunderland-line-up-move-for-dayann-methalie"},
  caught:    {l:"CaughtOffside · Methalie", u:"https://www.caughtoffside.com/2026/07/15/sunderland-ligue-1-impressive-bargain/"},
  ftransfers:{l:"Football Transfers · Brobbey", u:"https://www.footballtransfers.com/en"},
  ffcSadiki: {l:"Football FanCast · Sadiki stance", u:"https://www.footballfancast.com/sunderlands-stance-on-selling-noah-sadiki-transfer-chelsea/"},
  moretto:   {l:"Matteo Moretto · X", u:"https://x.com/MatteMoretto"},
  tavolieri: {l:"Sacha Tavolieri · X", u:"https://x.com/sachatavolieri"},
  dimarzio:  {l:"Gianluca Di Marzio (Sky Italia)", u:"https://gianlucadimarzio.com/"},
  sportsboom:{l:"SportsBoom · transfer news", u:"https://www.sportsboom.co.uk/football/transfer-news/"},
  sportsmole:{l:"Sports Mole · Sadiki message", u:"https://www.sportsmole.co.uk/football/sunderland/transfer-talk/news/sunderland-send-firm-message-to-man-united-city-and-chelsea-over-noah-sadiki_600984.html"},
  vi:        {l:"Voetbal International", u:"https://www.vi.nl/"},
  voetbal:   {l:"Voetbalnieuws", u:"https://www.voetbalnieuws.nl/"},
  afoot:     {l:"Africa Foot", u:"https://www.africafoot.com/"},
  fanatik:   {l:"Fanatik", u:"https://www.fanatik.com.tr/"},
  b92:       {l:"B92 · Aleksić to Partizan", u:"https://www.b92.net/sport"},
  navarra:   {l:"Diario de Navarra · Osasuna", u:"https://www.diariodenavarra.es/"},
  lequipe:   {l:"L'Équipe · football", u:"https://www.lequipe.fr/Football/"},
  orourke:   {l:"Pete O'Rourke · X", u:"https://x.com/SunSport_Pete"},
  soule:     {l:"Sunderland Echo · Soulé pursuit", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/matias-soule-sunderland-transfer-pursuit-8791481"},
  souleFio:  {l:"Echo · Fiorentina/Villa & Soulé (TMW)", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/fiorentina-talks-sunderland-aston-villa-transfer-target-8815729"},
  souleProf: {l:"Echo · Soulé profiled, Fulham rivalry", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/matias-soule-profile-sunderland-fulham-roma-star-linked-8793424"},
  troiloOF:  {l:"OneFootball · Troilo £17m link", u:"https://onefootball.com/en/news/sunderland-leeds-united-and-fulham-linked-with-17m-move-for-centre-back-mariano-troilo-43113216"},
  troiloSW:  {l:"Sport Witness · Troilo ~€30m", u:"https://sportwitness.co.uk/fulham-and-sunderland-ready-to-invest-in-centre-back-around-e30m-will-prove-convincing/"},
  parmalive: {l:"ParmaLive · Troilo", u:"https://www.parmalive.com/"},
  methalieRT:{l:"Roundtable · Methalie £15m (O'Rourke)", u:"https://roundtable.io/sports/soccer/premier-league/sunderland/transfers/sunderland-line-up-move-for-15m-ligue-1-full-back-as-black-cats-plot-clever-transfer-play"},
  methalieEcho:{l:"Echo · Methalie & Cirkin/Pembélé", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-transfer-dennis-cirkin-timothee-pembele-dayann-methaile-8800977"},
  pokuGGFN:  {l:"Get German Football News · Poku", u:"https://www.getfootballnewsgermany.com/2026/poku-leverkusen-sunderland-nottingham-forest/"},
  pokuEcho:  {l:"Echo · Poku set for England move", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/chelsea-sunderland-transfer-target-winger-england-move-8817611"},
  pokuFFC:   {l:"Football FanCast · Poku boost", u:"https://www.footballfancast.com/sunderland-handed-ernest-poku-boost-as-leverkusen-set-transfer-deadline/"},
  galarzaFFC:{l:"Football FanCast · Galarza", u:"https://www.footballfancast.com/race-leader-named-sunderland-receive-green-light-bid-for-matias-galarza/"},
  ablineMedia:{l:"Média Foot · Abline", u:"https://mediafoot.net/info-media-foot-sunderland-veut-matthis-abline-fc-nantes/"},
  pattersonEcho:{l:"Echo · Patterson dilemma", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-transfer-news-anthony-patterson-flo-ghisolfi-8793526"},
  xhakaEcho: {l:"Echo · Xhaka power play", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-granit-xhaka-power-play-chelsea-manchester-united-8789908"},
  sadikiTT:  {l:"TEAMtalk · Sunderland block Sadiki", u:"https://www.teamtalk.com/sunderland/noah-sadiki-transfer-news-sunderland-block-transfer-man-utd-man-city-chelsea"},
  brobbeyPP: {l:"Peoples Person · Brobbey decision", u:"https://thepeoplesperson.com/2026/06/29/brian-brobbey-sunderlands-asking-price-for-united-target-revealed-312080/"},
  adingraVGR:{l:"Echo · Adingra Roma interest (VoceGialloRossa)", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-transfers-roma-adingra-brighton-winger-target-8824170"},
  adingraReshuffle:{l:"Echo · £77m reshuffle round-up (Gazzetta/Leggo/TEAMtalk)", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderlands-potential-ps77m-transfer-reshuffle-under-florent-ghisolfi-emerges-as-rumours-develop-8826923"},
  bardghji:  {l:"Echo · Bardghji loan angle (Sport)", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-transfers-roma-adingra-brighton-winger-target-8824170"},
  methalieEcho2:{l:"Echo · Black Cats step up Methalie pursuit (RMC Sport)", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-transfer-news-dayann-methalie-8824763"},
  methalieGFFN:{l:"Get French Football News · Methalie close to €30m move", u:"https://www.getfootballnewsfrance.com/2026/sunderland-close-to-complete-e30m-transfer-of-toulouse-left-back-dayann-methalie/"},
  masuakuEcho:{l:"Echo · Masuaku-Konyaspor interest (Yeni Açık)", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/arthur-masuaku-transfer-interest-emerges-as-turkish-club-konyaspor-eye-sunderland-defender-reports-8822736"},
  liveBlog29: {l:"Echo · transfer live blog (Masuaku, Reinildo context)", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-transfer-news-live-blog-8825625"},
  pokuSky:   {l:"Sky Sports · Sunderland transfer live blog", u:"https://www.skysports.com/football/live-blog/11695/13375102/sunderland-transfer-news-rumours-and-gossip-live-updates-and-latest-on-deals-signings-loans-and-contracts"},
  ejuke:     {l:"Afrik-Foot · Ejuke to Sunderland", u:"https://www.afrik-foot.com/en-ng/chidera-ejuke-sunderland-sevilla-winger"},
  alajTel:   {l:"Echo · Alajbegović to Chelsea likely", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/chelsea-sunderland-transfer-target-winger-england-move-8817611"},
  meunier:   {l:"SAFC Official · Meunier joins", u:"https://www.safc.com/news/"},
  meunierGFFN:{l:"Get French Football News · Meunier", u:"https://www.getfootballnewsfrance.com/"},
  mayendaRennes:{l:"SAFC Official · Mayenda to Rennes", u:"https://www.safc.com/news/"},
  gffn:      {l:"Get French Football News · Mayenda", u:"https://www.getfootballnewsfrance.com/"},
  neilSky:   {l:"Sky Sports · Dan Neil signs for Rangers", u:"https://www.skysports.com/football/news/11095/13559448/dan-neil-rangers-sign-ex-sunderland-captain-despite-southampton-talks-as-midfielder-pens-three-year-deal"},
  rangersOfficial:{l:"Rangers FC · Neil signing announced", u:"https://www.rangers.co.uk/article/rangers-announce-signing-of-dan-neil/4pgPzDcH4JgTwvCRc0myeJ"},
  rusynSafc: {l:"SAFC Official · Rusyn to Karpaty Lviv", u:"https://www.safc.com/news/2026/july/01/rusyn-joins-karpaty-on-permanent-deal/"},
  pembeleSafc:{l:"SAFC Official · Pembélé to Le Havre", u:"https://www.safc.com/news/2026/july/16/timoth-e-pemb-l--joins-le-havre/"},
  johnsonYork:{l:"York City FC · Zak Johnson returns", u:"https://yorkcityfootballclub.co.uk/zak-johnson-returns-to-york-city-on-permanent-deal/"},
  pokuFFC2:  {l:"Football FanCast · Leverkusen set 1 Aug deadline", u:"https://www.footballfancast.com/sunderland-handed-ernest-poku-boost-as-leverkusen-set-transfer-deadline/"},
  bardghjiHT:{l:"TheHardTackle · Sunderland in talks for Bardghji", u:"https://thehardtackle.com/transfer-news/2026/07/13/sunderland-in-talks-to-sign-roony-bardghji-aston-villa-leeds-united-also-in-contact/"},
  souleFootIt:{l:"Football Italia · Soulé proposed to Milan", u:"https://football-italia.net/report-soule-proposed-to-milan-roma-e30m-price/"},
  souleEcho2:{l:"Echo · Soulé interest cools", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-transfer-news-8830712"},
  galarzaFFC2:{l:"Football FanCast · Galarza race leaders named", u:"https://www.footballfancast.com/race-leader-named-sunderland-receive-green-light-bid-for-matias-galarza/"},
  masuakuFP: {l:"FootballPlace · Masuaku exit agreed, Konyaspor closing in", u:"https://footballplace.co.uk/arthur-masuaku-sunderland-konyaspor-transfer/"},
  masuakuEcho2:{l:"Echo · Masuaku deal contested, reshuffle round-up", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-transfer-news-8830712"},
  adingraHT: {l:"TheHardTackle · West Ham pursuing Adingra", u:"https://thehardtackle.com/transfer-news/2026/07/28/west-ham-united-in-transfer-tussle-to-sign-simon-adingra/"},
  methalieCloarec:{l:"Echo · Toulouse president on Methalie: 'no agreement'", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-transfer-news-toulouse-dayann-methalie-8829363"},
  methalieBoost:{l:"Echo · Methalie boost, £25.7m Toulouse talks continue", u:"https://www.sunderlandecho.com/sport/football/sunderland-afc/sunderland-handed-major-dayann-methalie-transfer-boost-as-ps257m-toulouse-talks-continue-8826919"},
};
const LINKMAP = {
  "Ernest Poku": ["pokuFFC2","pokuGGFN","pokuSky"],
  "Mariano Troilo": ["troiloSW","troiloOF","parmalive"],
  "Dayann Methalie": ["methalieGFFN","methalieCloarec","methalieBoost","methalieEcho2","methalieRT"],
  "Matthis Abline": ["ablineMedia","lequipe"],
  "Matías Galarza": ["galarzaFFC2"],
  "Roony Bardghji": ["bardghjiHT"],
  "Anthony Patterson": ["pattersonEcho","downie"],
  "Noah Sadiki": ["sadikiTT","ffcSadiki","tavolieri"],
  "Simon Adingra": ["adingraHT","adingraReshuffle","adingraVGR"],
  "Arthur Masuaku": ["masuakuFP","masuakuEcho2","masuakuEcho"],
  "Granit Xhaka": ["skyXhaka","xhakaEcho"],
  "Wilson Isidor": ["sportsboom","echo"],
  "Brian Brobbey": ["brobbeyPP","ftransfers"],
  "Romaine Mundle": ["echo","voetbal"],
  "Robin Roefs": ["caught","bbcGossip"],
  "Enzo Le Fée": ["sportsboom","teamtalk"],
  "Chemsdine Talbi": ["sportsboom"],
  "Trai Hume": ["teamtalk"],
  "Habib Diarra": ["fanatik"],
  "Thomas Meunier": ["meunier","meunierGFFN"],
  "Eliezer Mayenda": ["mayendaRennes","gffn"],
  "Milan Aleksić": ["b92","safc"],
  "Harrison Jones": ["nEcho"],
  "Dan Neil": ["neilSky","rangersOfficial"],
  "Dennis Cirkin": ["safc"],
  "Bertrand Traoré": ["safc","afoot"],
  "Niall Huggins": ["safc"],
  "Nazariy Rusyn": ["rusynSafc"],
  "Timothée Pembélé": ["pembeleSafc"],
  "Zak Johnson": ["johnsonYork"],
};
const WL_LINKMAP = {
  "Chidera Ejuke":"ejuke",
  "Geoffrey Kondogbia":"echo","Marlon Gomes":"sportsboom","Flavien Boyomo":"moretto","Lutsharel Geertruida":"hinze",
  "Arne Engels":"teamtalk","Jakob Breum":"echo","Víctor Muñoz":"navarra","Yassine Titraoui":"teamtalk",
  "Lamine Camara":"teamtalk","Harry Wilson":"echo","Amadou Koné":"echo","Aaron Wan-Bissaka":"echo",
  "Jhon Lucumí":"echo","Alan Browne":"nEcho","Jenson Seelt":"echo","Aji Alese":"echo",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `A confirmed-deals clean-up plus a live deadline: Rusyn, Pembélé and Johnson move to Confirmed, Poku faces a 1 Aug Leverkusen cutoff, and the Methalie and Masuaku threads both carry genuine contradictions`,
  heroLede: `Five-and-a-half weeks into the window (deadline Tuesday 1 Sep, 11pm), Sunderland's confirmed business is <b>one arrival and eight departures</b>: <b>Thomas Meunier</b> is in on a free from Lille, and out go <b>Eliezer Mayenda</b> (~€20m to Stade Rennais), <b>Dan Neil</b> (now locked in at Rangers on a three-year deal), plus <b>Nazariy Rusyn</b> (Karpaty Lviv), <b>Timothée Pembélé</b> (Le Havre) and <b>Zak Johnson</b> (York City) - all three picked up this refresh via the FootballTransfers.com confirmed-deals cross-check rather than general news. They remain a <b>7th-placed, Europa League club</b> with <b>Régis Le Bris</b> in the dugout and <b>Florent Ghisolfi</b> running a stated "quality over quantity" plan. The live story is left-back: <b>Dayann Methalie</b> remains the most advanced incoming thread, with Get French Football News and the Echo both still framing Sunderland as close to a ~€30m deal - but Toulouse's own president, Olivier Cloarec, said on record (29 Jul) that "there is no agreement between the two clubs," with Sunderland's actual bid closer to £25.7m against a Toulouse ask above €30m. That same left-back need may resolve itself from the other direction: <b>Arthur Masuaku</b>'s own exit to Konyaspor is reported as agreed by one outlet and contested by another in the same news cycle. Up front, <b>Matías Soulé</b>'s interest has effectively collapsed - Italian press now has Sunderland among clubs whose pursuit "petered out," with Roma instead shopping him to AC Milan - while <b>Ernest Poku</b> has the opposite trajectory: Bayer Leverkusen are reported to have set a <b>1 Aug internal deadline</b> to sell, with Sunderland the named favourites. <b>Simon Adingra</b>'s outgoing interest has broadened well past Roma, with West Ham now the most concrete suitor. The prize assets remain protected: <b>Xhaka</b> stays after Chelsea's rejected £8m bid, and <b>Sadiki</b> interest (United, City, Chelsea, Arsenal) is being blocked outright. Nothing yet carries a Tier 1 "here we go" on a fresh Sunderland arrival this window.`,
  metaRow: `
      <span>DECISION-MAKER: <b>Florent Ghisolfi</b> (Dir. of Football)</span>
      <span>HEAD COACH: <b>Régis Le Bris</b></span>
      <span>OWNER: <b>Kyril Louis-Dreyfus</b></span>
      <span>WINDOW: <b>Open → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">7<small>th</small></div></div>
    <div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">EUROPA</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£45-110<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£40-140<small>m</small></div></div>
    <div class="stat gold"><div class="l">SCR Cost Cap</div><div class="v">70<small>%</small></div></div>`,
  positionPanel: `
  <!-- ANALYSIS: MODEL + FINANCE -->
  <section id="sec-position">
    <div class="sec-head"><h3>Club Position</h3><span class="num">01</span></div>
    <p class="sec-sub">The lens through which every rumour is weighted: the recruitment philosophy, the balance sheet, the brand, and the European trade-off.</p>

    <div class="cards">
      <!-- THE MODEL -->
      <div class="card">
        <h4>The Model <span class="tag">CORE PRINCIPLE</span></h4>
        <p>A <b>data-led, resale-first</b> system built on the Brighton blueprint: Ghisolfi and the club's data &amp; analysis department target undervalued players with high ceilings rather than proven Premier League names. Players are bought young, developed, and sold up the pyramid to reinvest. The <b>€20m Mayenda sale to Rennes</b> is the model working in real time.</p>
        <div class="quote">Ghisolfi's framing: Sunderland do not <i>need</i> to sell, but selling is built-in, young talent will only come if Wearside isn't seen as a <i>"final destination"</i>.</div>
        <p><b>Proven resale:</b> Jobe Bellingham (~£28m to Dortmund), bought and sold by the club; the fee part-funded the £30m Habib Diarra signing, complete with sell-on clause. <i>(Amad Diallo is sometimes cited here but was a loanee from Man Utd: development proof only, never a Sunderland sale.)</i></p>
        <ul>
          <li>2026 plan per Le Bris: a <b>disciplined "six or seven" window</b>, not last summer's overhaul of 14, and he calls the market <b>slow</b>.</li>
          <li>Meunier (34, free) and Xhaka (33) are <b>veteran exceptions</b>, not the rule.</li>
          <li>Sweet-spot markets: France · Belgium · Netherlands · Germany · Italy, ages 20-25 (Soulé, Troilo, Methalie, Poku all fit).</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> upgrade young, continental, resale-rich profiles (Soulé, Troilo, Methalie, Poku). Discount expensive proven veterans unless they're an immediate first-XI upgrade.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">STRONG</span></h4>
        <p>Revenue is climbing toward a <b>~£200m stretch target</b>. Commercial income (~£16m) has quadrupled since the 2021 takeover; matchday receipts (~£11.6m) are set to roughly double at Premier League level on a ~47,000 average gate.</p>
        <ul>
          <li><b>Three years</b> of parachute payments now secured (more than one PL season).</li>
          <li>Macquarie borrowing against PL distributions is <b>routine</b>, finance experts read it as lenders pricing in <b>zero relegation risk</b> and guaranteed 26/27 income.</li>
          <li>Akira BV (Louis-Dreyfus family) facility against the Academy of Light; owner equity injections ongoing; PSR headroom described as healthy.</li>
          <li>Bia Sports multi-sport vehicle drives Hummel/Fanatics retail and hospitality growth; commercial leadership was in transition this summer (CBO David Bruce departed, Bia's Tom Burwell as interim CEO) ahead of a permanent appointment.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> overall squad cost still <b>lags PL rivals</b>, Ghisolfi himself says they have "no choice but to keep investing." Spending power is real but not Big-Six.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The European Trade-Off</h3><span class="num">02</span></div>
    <p class="sec-sub">Standing in the game is now a recruitment asset, but it cuts both ways, and Europe re-prices the whole budget.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>From <i>Sunderland 'Til I Die</i> decline to a club where young players visibly grow. That track record (Bellingham, Amad, now Sadiki) is now <b>leverage</b>: targets accept the project as a stepping-stone, and the Soulé pursuit, a Roma first-teamer weighing Wearside among his options, shows Sunderland can now <b>compete for genuine Serie A quality</b>. The flip side showed earlier this window: losing Muharemović to Leeds on wages was a reminder the club is not yet always the top payer, and the Soulé field has since widened to Villa and Fiorentina.</p>
        <ul>
          <li>Le Bris a Premier League Manager of the Season nominee, now on a fresh contract.</li>
          <li>Negotiating power up; can attract Roma/Parma starters and out-muscle many mid-table rivals, but not always on salary.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> the same profile that attracts talent also puts the gems in the shop window: Man Utd, City, Chelsea and now Arsenal are circling Sadiki, and Brobbey drew eyes with a strong World Cup.</div>
      </div>
      <div class="card">
        <h4>The SCR Tightening <span class="tag">KEY TENSION</span></h4>
        <p>New <b>Squad Cost Ratio</b> rules replace PSR this summer. The cap on wages + agent fees + amortisation is <b>85% of revenue, but only 70% for clubs in European competition.</b></p>
        <p>So Europa qualification is <b>genuinely double-edged</b>: more income (gate, prize money, profile) but a <b>stricter ratio</b>, plus a deeper squad needed for rotation = more wages pressing on a lower ceiling.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation; the Bellingham profit is <b>about to fade</b> from that average, which the Mayenda sale helps replenish.</li>
          <li>That is precisely why fringe sales (Patterson, Isidor, Mundle, a possible Adingra) now <b>extend headroom</b> rather than merely raise cash.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: Chasing Europa toward the Champions League</h5>
        <ul>
          <li><b>Winning the Europa League = an automatic Champions League berth</b>, the single biggest financial prize available to a club this size.</li>
          <li>A deep run boosts UEFA coefficient revenue and global profile, compounding the commercial flywheel.</li>
          <li>European nights raise the club's pull on exactly the young continental talent the model targets.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: The cost of over-reaching</h5>
        <ul>
          <li>Over-recruiting for rotation risks <b>breaching the 70% SCR cap</b> → fines, reduced future headroom, or sporting sanction.</li>
          <li>Prioritising Thursday-night Europa football can <b>drain league form</b> and the squad's slim depth.</li>
          <li>Selling a crown jewel (Sadiki) funds depth but <b>weakens the first XI</b> mid-cycle.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> Champions League is a 2-3 season horizon, not this summer's explicit aim, Ghisolfi's stated goal is <b>stability</b>. The evidence-consistent play is targeted value additions (a winger, a centre-back and a left-back) funded by monetising peripheral assets, keeping the 70% cap intact, and treating a Europa run as upside rather than a budget Sunderland will gamble the ratio to chase.
    </div>
  </section>
`,
  confirmedPending: `<b>Pending / context:</b> Meunier is confirmed but links up in August after a post-World Cup break. <b>Melker Ellborg</b> (signed in January) is the goalkeeping cover behind Robin Roefs, so a Patterson sale does not require a replacement keeper. <b>Geertruida</b> has returned to RB Leipzig after Sunderland let the ~€23m loan option lapse; any permanent is now a fresh, lower-priority negotiation. On the striker line, Le Bris's "two-and-a-half strikers" comment suggests an out-and-out No.9 may <b>not</b> be signed at all if Brobbey and Isidor both stay.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, Ghisolfi network 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed affordability and SCR headroom. The Sadiki decision alone swings the entire budget.`,
  pricingBanner: `
      <b>Pricing principle: outgoings sell at a holder's price, not market value.</b> Because Sunderland are under no pressure to sell, every fee below is anchored <i>above</i> consensus valuation. Four multipliers stack: <b>(1)</b> long contracts remove all buyer leverage; <b>(2)</b> near-ever-present minutes prove the asset; <b>(3)</b> a multi-club bidding war inflates the number; <b>(4)</b> elite suitors pay a premium for proven youth. <b>Homegrown players (Patterson, Mundle) carry a further premium</b>: pure profit on the books and scarce squad-list value. Treat the listed fees as <i>floors</i>; the no-need-to-sell stance is also why a higher price often <i>lowers</i> completion probability rather than raising the fee at the margin.
    `,
  excludedNote: `<b>Excluded as stale/dead:</b> Matías Soulé (interest petered out per Italian press, Roma have proposed him to AC Milan instead); Tarik Muharemović (signed Leeds United, ~£34m, target missed); Folarin Balogun (links played down by the club); Óscar Mingueza (signed Crystal Palace on a free); the recycled Geertruida "Liverpool full agreement" line (a January report predating that window); and 100+ day-old aggregator links from last summer (e.g. Mathys Tel, Angel Gomes, Jonathan David, Liam Delap, Matteo Guendouzi) that show no fresh reporting and are not treated as live.`,
  spendIn: { v: `£45-110m`, x: `The rebuild now leads with wide attack: a club-record winger (Soulé ~£30m) or the cheaper Poku (~£22m), plus a centre-back (Troilo ~€30m) and a left-back (Methalie ~£15m). The out-and-out striker hunt has eased under the two-striker model. Upper end only if a Sadiki sale is reinvested rather than banked.` },
  spendOut: { v: `£40-140m`, x: `Mayenda banked (~€20m) is the first real cash. Free exits (Neil, Cirkin, Traoré, Huggins) clear wage space, no fee. More comes from under-contract assets at holder's prices: roughly £25-60m of fringe sales (Patterson, Isidor, Mundle, a possible Adingra to Roma ~£30m) without Sadiki; £140m-plus if he goes at a premium (£55-70m).` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: Ornstein, Romano, Di Marzio (Sky Italia), BBC, The Athletic, Sunderland Echo exclusives, official club statements (Meunier in, Mayenda to Rennes).</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky/Keith Downie (Xhaka, Patterson), Tavolieri (Sadiki), Bild (Poku), L'Équipe (Abline), RMC, Voetbal International. Local beat papers rise within their specialism: ParmaLive on Troilo, VoceGialloRossa on the Roma/Adingra line.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, Pete O'Rourke (Methalie), SportsBoom, Corriere dello Sport, TuttoMercatoweb, Get German Football News, club sites, mixed-record nationals and regional press.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Média Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">Ghisolfi network <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Carry-over links with no fresh late-July reporting (Marlon Gomes, Boyomo, Camara) decay on this basis and sit in the Rumour Mill.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
