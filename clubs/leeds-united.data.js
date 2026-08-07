/* ============================================================
   MERCATO IQ · CLUB DATA · LEEDS UNITED · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce leeds-united.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (v1 -> v2, format-only, 28 Jul 2026):
   - Carried as-is from the v1 monolith dated 6 Jun 2026; no rumour
     re-verification or fresh sweep was performed.
   - v1 held a single probability per row. TRUE? scores here are
     SYNTHESISED: truth = clamp(prob + 25 + tierBonus, 10, 95),
     tierBonus T1 +15 / T2 +10 / T3 0 / T4 -10 (all rated rows are
     T3, so truth = prob + 25). Replace with evidenced scores at the
     first real refresh.
   - Two v1 light/band mismatches corrected (light fixed, prob kept):
     Perri prob 30 o->y, Struijk prob 15 r->o.
   - v1 carried ZERO source URLs. HUB/LINKMAP/WL_LINKMAP below are
     HUB-ONLY (named-source section fronts: Phil Hay/The Athletic,
     Leeds Live, YEP, BBC, Sky, TEAMtalk etc.), never aggregators.
     Deep-link on first refresh.
   ============================================================ */

/* ── IDENTITY & SKIN (stable, re-check rarely) ── */
const BRAND = {
  club: "Leeds United", mono: "LUFC", slug: "leeds-united",
  primary: "#2f6fe0", primaryBright: "#4d86f5", primaryDeep: "#1d428a",
  primaryRgb: "47,111,224",
  breadcrumb: ["England","Premier League"]
};

/* ── VOLATILE FACTS (machine-readable; verification cadence per runbook) ──
   verified is DELIBERATELY the stale v1 as-of date: nothing re-checked in migration. */
const VOLATILE = {
  verified: "2026-06-06",
  coach: "Daniel Farke",
  dof: "Adam Underwood (Sporting Director)",
  europe: "None (2026/27)",
  finish: "14th (2025/26)",
  owner: "49ers Enterprises (chairman Paraag Marathe)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

/* ── SWEEP PLAN (fire ALL feeds + queries IN PARALLEL at refresh start) ── */
const SWEEP = {
  feeds: [
    "https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Leeds+United/Transfer+News",
    "https://www.yorkshireeveningpost.co.uk/sport/football/leeds-united",
    "https://www.leedslive.co.uk/sport/leeds-united/",
    "https://www.skysports.com/leeds-united",
    "https://www.teamtalk.com/leeds-united"
  ],
  queries: [
    "Leeds United transfer news <current month + year>",
    "Leeds United bid OR medical OR 'personal terms'",
    "Leeds United Phil Hay The Athletic",
    "Leeds United transfer Plettenberg Bild Kicker",
    "Leeds United mercato L'Equipe OR calciomercato Di Marzio OR Marca"
  ],
  note: "Foreign desks per profile: Italy (Di Marzio/TMW/Gazzetta/Corriere), Germany (Plettenberg/Sky DE/Bild/Kicker), France (L'Equipe/RMC/Foot Mercato), Spain (Marca/AS/Relevo-Moretto), NL (VI/Telegraaf), Belgium (Tavolieri/HLN). Add one query per movable live thread. Trace every aggregator hit to its original reporter (master s4)."
};

/* ── EDIT THESE EACH REFRESH ──────────────────────────
   asof: human display date · updated: full ISO timestamp (drives live ticker) */
const REPORT_META = { asof: "6 Jun 2026", updated: "2026-06-06T12:00:00Z", label: "Ampadu signed + personnel audit; No.9 the priority, Darlow eases the keeper question" };

/* CONFIRMED BUSINESS - move items here as deals are officially done.
   free:true renders the fee in gold. status: 'done' (signed in), 'exit' (departure locked), 'pending'. */
const CONFIRMED_IN = [
  {name:"Ethan Ampadu", sub:"25 · CM/CB · captain", to:"Stays, new deal to 2030", fee:"NEW DEAL", free:true, status:"done", statusTxt:"NEW DEAL SIGNED",
   note:"Confirmed 4 Jun: the club captain signs a fresh four-year contract to 2030, ending uncertainty over a deal that had been ticking toward its final year (2027 plus an option). Chairman Paraag Marathe called it a signal to the market ahead of the window. Not a transfer, but the summer's first locked-in piece of business and the spine of the consolidation plan, securing the squad's most-used outfield player (most tackles, duels and passes last season)."},
  {name:"Tarik Muharemović", sub:"23 · CB · Bosnia & Herzegovina", club:"Sassuolo", pos:"DF", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"6ft 4in World Cup defender signs a five-year deal after a Serie B title-winning loan spell at Sassuolo; 17 senior Bosnia caps."},
  {name:"Harry Wilson", sub:"29 · AM · Wales", club:"Fulham", pos:"MF", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Wales international arrives on a free transfer on a four-year deal after leaving Fulham at contract expiry."},
  {name:"James Trafford", sub:"22 · England · GK", club:"Manchester City", pos:"Goalkeeper", fee:"£40m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Club-record signing completed"}
];
const CONFIRMED_OUT = [
  {name:"Pascal Struijk", sub:"26 · CB · Netherlands", club:"Brighton & Hove Albion", pos:"DF", fee:"£18m (reported breakdown £15m + £3m add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"A surprise sale given Farke had told the board he should not be sold; Leeds retain a sell-on clause."},
  {name:"Karl Darlow", sub:"35 · GK · Wales", club:"Manchester United", pos:"GK", fee:"Free transfer", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Established as first-choice for much of the promotion/survival season, Darlow leaves on a free for a back-up role at Old Trafford."},
  {name:"Lucas Perri", sub:"Goalkeeper", club:"Torino", pos:"GK", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signing with Torino from Leeds United"}
];

const INCOMING = [
  {name:"Crysencio Summerville", sub:"24 · W · ex-Leeds", club:"West Ham", pos:"W", report:"~6h ago", src:"Leeds Live", tier:3, fee:"£20-30m", truth:55, prob:30, light:'y', trend:'up',
   note:"Rising on a fresh thread: West Ham, relegated, have reportedly made a decision on his future and an Elland Road return is 'on the cards'. Leeds' 2023/24 Championship Player of the Season already knows the club and Farke's system, an exact tactical and emotional fit. OBSTACLE: West Ham will want a fee recouping much of their outlay, plus his wages, but he is on-model as a proven, resale-age wide forward.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30},
  {name:"Roony Bardghji", sub:"20 · Sweden · RW", club:"Barcelona", pos:"RW", report:"3 Jun 2026", src:"TEAMtalk / Yorkshire Post", tier:3, fee:"£15-25m / loan", truth:50, prob:25, light:'o', trend:'up',
   note:"Fresh and rising: with Barcelona's summer plans set to squeeze the 20-year-old out, Leeds are reported ready to follow up a long-standing interest and are credited as a leading suitor. On-profile (young, high-ceiling, resale). OBSTACLES: a crowded six-club PL scramble (Sunderland, Villa, Brighton, Brentford, Everton also in), and the player's reported preference for a loan-back to Barcelona, which would give Leeds development value but no resale upside.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Jonathan David", sub:"ST · Canada", club:"Juventus", pos:"ST", report:"~2 days ago", src:"TEAMtalk", tier:3, fee:"Loan", truth:53, prob:28, light:'o', trend:'up',
   note:"Juventus are prepared to approve a loan exit and Leeds are interested, a high-profile fix for the No.9 need. Obstacle: a loan only (no resale upside), wages, and 'amid interest from others' means a competitive field. No T1 confirmation.", lastSeen:"2026-08-04T19:10:50Z", baseProb:28},
  {name:"Lois Openda", sub:"ST · Belgium", club:"RB Leipzig", pos:"ST", report:"~2 days ago", src:"TEAMtalk", tier:3, fee:"£25-35m", truth:47, prob:22, light:'o', trend:'down',
   note:"TEAMtalk says his future is likely in England and Leeds 'especially' want him, a genuine striker upgrade. OBSTACLES, now heavier: fee and wages sit at the very top of Leeds' range, and Nottingham Forest have entered hard, with Evangelos Marinakis reportedly pushing a £35m forward target to choose Forest over Leeds. Competition for the No.9 is intensifying.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Shea Charles", sub:"DM · Northern Ireland", club:"Southampton", pos:"DM", report:"~1 day ago", src:"Aggregated", tier:3, fee:"£10-15m", truth:50, prob:25, light:'o', trend:'up',
   note:"Leeds remain interested after Southampton's play-off exit: young, British, a holding-midfield profile that fits. Obstacle: T3 sourcing only, valuation, and no progression to talks reported yet.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Lutsharel Geertruida", sub:"25 · Netherlands", club:"RB Leipzig", pos:"CB/RB", report:"~2 days ago", src:"S. Vidal / YEP", tier:3, fee:"£17-20m", truth:47, prob:22, light:'o', trend:'flat',
   note:"Leeds are 'hoping to sign' the versatile Dutch defender. KEY OBSTACLE: Sunderland reportedly hold a purchase option on the same player from his loan spell, a direct, inside-track competitor. Leeds would likely need to act decisively or miss out.", lastSeen:"2026-08-04T19:10:50Z", baseProb:22},
  {name:"Liam Delap", sub:"ST · England", club:"Chelsea", pos:"ST", report:"~10 days ago", src:"Simon Phillips", tier:3, fee:"£25-30m", truth:45, prob:20, light:'o', trend:'flat',
   note:"Chelsea have indicated the English centre-forward is available. On-profile (young, British, resale). Obstacle: Chelsea's price, his wages, and Leeds are one of several clubs, no concrete bid.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Harvey Elliott", sub:"AM/W · England", club:"Liverpool", pos:"AM/W", report:"~2 days ago", src:"Football Insider", tier:3, fee:"£20-25m", truth:45, prob:20, light:'o', trend:'up',
   note:"Fresh link for the Liverpool creator seeking minutes, a clear quality and resale profile. Obstacle: Football Insider-tier sourcing, a likely crowded race for a player of his profile, and price.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20},
  {name:"Ayase Ueda", sub:"27 · Japan · ST", club:"Feyenoord", pos:"ST", report:"~4 wks", src:"Aggregated", tier:3, fee:"£12-18m", truth:43, prob:18, light:'o', trend:'flat',
   note:"Tracked by Leeds and Tottenham, a proven Eredivisie goalscorer in a friendly market. Obstacle: 27 is older than the ideal resale band, competition from Spurs, no recency refresh.", lastSeen:"2026-08-04T19:10:50Z", baseProb:18},
  {name:"James Trafford", sub:"24 · England · GK", club:"Manchester City", pos:"GK", report:"Joins from Manchester City in deal worth up to £45m", src:"BBC", tier:2, fee:"£45m", truth:100, prob:100, light:"g", trend:"flat", note:"Club-record deal, completed", lastSeen:"2026-08-07T14:38:27Z", baseProb:100, dead:true, deadReason:"Completed signing from Manchester City - moved to confirmed_in"}
];

const OUTGOING = [
  {name:"Joel Piroe", sub:"ST · Netherlands", club:"PSV / Boro / Rangers / Ipswich", pos:"ST", report:"~3 days ago", src:"TEAMtalk", tier:3, fee:"£8-10m", truth:83, prob:58, light:'g', trend:'up',
   note:"The clearest sale: Leeds are READY TO SELL at £8-10m and the suitor list is long (PSV, Middlesbrough, Rangers, Stoke, Birmingham, Ipswich). PRICING: a willing seller plus a short contract horizon caps the fee, this is a buyers' market, not a holder's price.", lastSeen:"2026-08-04T19:10:50Z", baseProb:58},
  {name:"Joe Gelhardt", sub:"ST · England", club:"Hull / Rangers / Celtic", pos:"ST", report:"~9h ago", src:"Aggregated", tier:3, fee:"£4-8m / loan", truth:75, prob:50, light:'y', trend:'up',
   note:"One year left on his deal, so a decision is forced this window. Newly-promoted Hull could pay a fee; Rangers' move is described as 'difficult'; Celtic also keen. The short contract erodes Leeds' leverage.", lastSeen:"2026-08-04T19:10:50Z", baseProb:50},
  {name:"Ao Tanaka", sub:"27 · Japan · CM", club:"Newcastle / Everton / Bundesliga", pos:"CM", report:"~4 wks", src:"F. Plettenberg", tier:3, fee:"£12-18m", truth:70, prob:45, light:'y', trend:'up',
   note:"Open to leaving after reduced minutes, with a long suitor list (Newcastle, Everton, Man Utd checks, plus Freiburg, Union Berlin, Southampton). PRICING: PL/Bundesliga demand holds a floor, but a player pushing to go softens it. A sale would trigger a midfield buy (Hackney/Charles).", lastSeen:"2026-08-04T19:10:50Z", baseProb:45},
  {name:"Wilfried Gnonto", sub:"W · Italy", club:"SC Freiburg", pos:"W", report:"~2 days ago", src:"S. Vidal", tier:3, fee:"£20-28m", truth:65, prob:40, light:'y', trend:'up',
   note:"Freiburg are keen and Leeds have SET a transfer fee, a holder's stance on a genuine resale asset. PRICING: still a saleable talent, so the price is firm; an exit here is the most likely funder of a 'blockbuster' incoming.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40},
  {name:"Largie Ramazani", sub:"W · DR Congo/Belgium", club:"Valencia", pos:"W", report:"~3 wks", src:"Football media", tier:3, fee:"£8-12m", truth:63, prob:38, light:'y', trend:'flat',
   note:"On loan at Valencia, where he has impressed (6 goals); a permanent move or fresh loan is the likely outcome. Squad-trimming that helps SCR headroom.", lastSeen:"2026-08-04T19:10:50Z", baseProb:38},
  {name:"Mateo Joseph", sub:"22 · Spain · ST", club:"Mallorca / Leicester / Wrexham", pos:"ST", report:"~4 wks", src:"TEAMtalk", tier:3, fee:"£6-10m", truth:50, prob:25, light:'o', trend:'down',
   note:"Leeds were prepared to sanction a sale, but an ACL injury has stalled momentum and weakened any fee. Likely to stay until fit unless a buyer gambles.", lastSeen:"2026-08-04T19:10:50Z", baseProb:25},
  {name:"Karl Darlow", sub:"33 · England · GK", club:"Leeds United", pos:"GK", report:"Signs with Manchester United after Leeds exit", src:"The Athletic", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Completed move to Manchester United", lastSeen:"2026-08-07T14:38:27Z", baseProb:100},
  {name:"Lucas Perri", sub:"23 · Brazil · GK", club:"Leeds United", pos:"GK", report:"Signing with Torino from Leeds United", src:"MOT Leeds News", tier:3, fee:"Undisclosed", truth:75, prob:75, light:"g", trend:"flat", note:"Torino interest in signing goalkeeper", lastSeen:"2026-08-07T14:38:27Z", baseProb:75}
];
const DEAD = [
  {name:"James Trafford", sub:"GK · England", club:"Man City", pos:"GK", report:"~4-5 wks", src:"TEAMtalk", tier:3, fee:"~£30m", truth:45, prob:20, light:'o', trend:'down',
   note:"A young English keeper to solve the No.1 question long term; TEAMtalk says ~£30m could be enough. OBSTACLE, and the reason this has eased: Karl Darlow has established himself as first choice and been offered an extension, so with Meslier the one near-certain exit the immediate need is depth, not a marquee number one. City's pricing and competition for a homegrown GK also bite.", lastSeen:"2026-08-04T19:10:50Z", baseProb:20, dir:"in", deadReason:"no fresh report in 5+ weeks", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Troy Parrott", sub:"ST · Ireland", club:"AZ Alkmaar", pos:"ST", report:"~7 wks", src:"Aggregated", tier:3, fee:"£12-16m", truth:41, prob:16, light:'o', trend:'down',
   note:"Earlier framed as a 'key target' for the striker hunt, but the link has gone quiet for weeks. Stays alive only on the strength of the underlying need.", lastSeen:"2026-08-04T19:10:50Z", baseProb:16, dir:"in", deadReason:"no fresh report in 7+ weeks", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Jack Harrison", sub:"W · England", club:"Fiorentina", pos:"W", report:"~5 wks", src:"Aggregated", tier:3, fee:"€8m option", truth:65, prob:40, light:'y', trend:'flat',
   note:"On loan at Fiorentina with an ~€8m permanent option; the player has said he is happy in Florence. A clean, likely permanent exit that clears wages.", lastSeen:"2026-08-04T19:10:50Z", baseProb:40, dir:"out", deadReason:"no fresh report in 5+ weeks", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Lucas Perri", sub:"GK · Brazil", club:"Brazilian clubs", pos:"GK", report:"~6 wks", src:"Jorge Nicola", tier:3, fee:"£6-10m", truth:55, prob:30, light:'y', trend:'flat',
   note:"A summer exit is being considered, with Brazilian clubs understood to be interested. Part of clearing a crowded goalkeeping department.", lastSeen:"2026-08-04T19:10:50Z", baseProb:30, dir:"out", deadReason:"no fresh report in 6+ weeks", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Carl Rushworth", club:"Brighton", pos:"GK", dir:"in", age:"~6 wks", tier:3, note:"Leeds and Newcastle have enquired about the young English keeper.", deadReason:"no fresh report in 6+ weeks", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Jeremy Monga", club:"Leicester", pos:"W", dir:"in", age:"~11d", tier:3, note:"talkSPORT: Leeds among several top-flight clubs after the 16-year-old winger.", deadReason:"signed for manchester-city", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Anis Hadj Moussa", club:"Feyenoord", pos:"W", dir:"in", age:"~8 wks", tier:4, note:"Eredivisie winger with broad interest incl. Saudi Arabia; early link.", deadReason:"no fresh report in 8+ weeks", deadAt:"2026-08-06T10:24:32Z"},
  {name:"Isaac Schmidt", club:"Werder Bremen", pos:"DF", dir:"out", age:"~7 wks", tier:3, note:"On loan with an option to buy; permanent exit possible.", deadReason:"no fresh report in 7+ weeks", deadAt:"2026-08-06T10:24:32Z"}
];

const RISERS = [
  {ar:"⬆", t:"<b>Ampadu</b> - confirmed: captain signs a new deal to 2030, the window's first locked-in business."},
  {ar:"⬆", t:"<b>Summerville</b> - West Ham decide his future; an Elland Road return is 'on the cards'."},
  {ar:"⬆", t:"<b>Bardghji</b> - Leeds emerge as a leading suitor as Barcelona plan to move the 20-year-old on."},
  {ar:"⬆", t:"<b>Piroe · Gelhardt</b> - sale green-lit / Hull's promotion opens a fee-paying exit."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Openda</b> - Nottingham Forest enter hard for a £35m forward; the No.9 race gets pricier."},
  {ar:"⬇", t:"<b>Trafford / marquee GK</b> - Darlow now first choice and offered an extension; the need eases to depth."},
  {ar:"⬇", t:"<b>Hidemasa Morita · Joao Gomes</b> - links the players themselves rebuffed; not live."},
  {ar:"⬇", t:"<b>Parrott · Mateo Joseph</b> - quiet for weeks / an ACL injury stalls a proposed sale."},
];
const NEW = [
  {ar:"✦", t:"Confirmed: <b>Ampadu</b> new deal to 2030. In: <b>Summerville</b> return on the cards, <b>Bardghji</b> (Barcelona) surfaces; <b>Doekhi</b>, <b>David</b> loan, <b>Hackney</b>, <b>Charles</b> still live."},
  {ar:"✦", t:"Out: <b>Gnonto to Freiburg</b> (fee set), <b>Meslier to Birmingham</b>, <b>Piroe</b> sale green-lit. Watch: <b>Tammy Abraham</b>, <b>Krejci</b> added to the long tail."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Joao Gomes · Morita</b> - links the players themselves have rebuffed; not live."},
  {ar:"✕", t:"<b>Unnamed clickbait</b> - '£25m sensation better than Rutter', 'Klopp favourite' carry no named club source."},
  {ar:"✕", t:"<b>Stale 100d+ aggregator links</b> - Gakpo, Kalvin Phillips, Sterling, Jhon Duran, Ward-Prowse etc. are prior-window noise."},
];

const POSITIONS = [
  {p:"Striker", w:95, x:"Overwhelming signal: David, Openda, Delap, Ueda + Piroe/Gelhardt/Joseph leaving; Forest now competing"},
  {p:"Centre-back", w:72, x:"Doekhi, Geertruida, Disasi, Bueno, Mac Allister, Krejci; settle the loan army"},
  {p:"Goalkeeper", w:66, x:"Eased: Meslier near-certain out, but Darlow now first choice and offered an extension, depth not a marquee No.1"},
  {p:"Central midfield", w:58, x:"Hackney, Charles, Karetsas; rises sharply if Tanaka is sold (Ampadu now secured)"},
  {p:"Wide / attacking mid", w:56, x:"Summerville return + Bardghji surface; Elliott, Buonanotte, Monga in the mix"},
];

/* WATCHLIST - the comprehensive long tail. Lower-credibility / monitoring-only / cooling links,
   aggregated (incl. TransferFeed feed). dir: 'in' | 'out'. Kept compact, not full analysis. */
const WATCHLIST = [
  {name:"Haris Tabakovic", club:"Hoffenheim", pos:"ST", dir:"in", age:"~1d", tier:4, note:"Hoffenheim want to sell the Bosnian striker a year early, a cheaper No.9 option among many."},
  {name:"Leo Scienza", club:"Southampton", pos:"W", dir:"in", age:"~1d", tier:4, note:"Impressed for Saints in 25/26; speculative wide link."},
  {name:"Zian Flemming", club:"Burnley", pos:"ST", dir:"in", age:"~11d", tier:4, note:"Dutch forward, 10 PL goals for relegated Burnley; value striker option."},
  {name:"Mikey Moore", club:"Tottenham", pos:"W", dir:"in", age:"~3d", tier:4, note:"Pundit (Keith Wyness) suggestion of a loan, no concrete club source."},
  {name:"Finn Azaz", club:"Southampton", pos:"AM", dir:"in", age:"~3d", tier:4, note:"Linked to strengthen the attacking midfield; thin sourcing."},
  {name:"Tammy Abraham", club:"Aston Villa", pos:"ST", dir:"in", age:"~5d", tier:3, note:"Villa signed him five months ago but an early exit is on the cards; Sunderland and Everton also considering. A proven-PL No.9 option in the striker hunt."},
  {name:"Ladislav Krejci", club:"(Czechia)", pos:"CB", dir:"in", age:"~7d", tier:3, note:"TEAMtalk: Leeds prepared to move for the World-Cup-bound defender despite competition. A centre-back option to settle the loan army."},
  {name:"Yassine Titraoui", club:"Charleroi", pos:"DM/CM", dir:"in", age:"~2d", tier:4, note:"Cross-link: Leeds floated alongside Sunderland (the stronger suitor) and Marseille for the young Algerian. Early, low-confidence."},
  {name:"Wilson Isidor", club:"Sunderland", pos:"ST", dir:"in", age:"~13d", tier:3, note:"Cross-link: Leeds monitoring the striker Sunderland may sell, keen to leave Wearside after reduced minutes."},
  {name:"Beto", club:"Everton", pos:"ST", dir:"in", age:"~13d", tier:4, note:"Re-linked a year on; another body in the striker market."},
  {name:"Axel Disasi", club:"Chelsea", pos:"CB", dir:"in", age:"~13d", tier:3, note:"Football Insider: Leeds expect to lead the race if he is made available."},
  {name:"Nick Pope", club:"Newcastle", pos:"GK", dir:"in", age:"~13d", tier:4, note:"Farke reportedly weighing a £5-10m move, an experienced GK alternative to Trafford."},
  {name:"Dmytro Riznyk", club:"Shakhtar", pos:"GK", dir:"in", age:"~9d", tier:4, note:"A 'serious interest' GK link; approach reported, little corroboration."},
  {name:"Santiago Bueno", club:"Wolves", pos:"CB", dir:"in", age:"~3 wks", tier:3, note:"Pete O'Rourke: Leeds targeting Wolves' defenders post-relegation."},
  {name:"Kevin Mac Allister", club:"Union SG", pos:"CB", dir:"in", age:"~4 wks", tier:3, note:"Among several PL clubs tracking the Argentine defender."},
  {name:"Daniel Svensson", club:"Dortmund", pos:"LB", dir:"in", age:"~3 wks", tier:3, note:"Tuttomercato: growing English interest in the 24-year-old left-back."},
  {name:"Jhon Solis", club:"Girona", pos:"MF", dir:"in", age:"~3 wks", tier:4, note:"Leeds and Brentford credited with interest in the Colombian midfielder."},
  {name:"Gustavo Hamer", club:"Sheffield Utd", pos:"MF", dir:"in", age:"~3 wks", tier:4, note:"Sports Boom: monitoring the creative midfielder's situation."},
  {name:"Wilfried Gnonto", club:"SC Freiburg", pos:"W", dir:"out", age:"~2d", tier:3, note:"(Also in main table.) Freiburg target; Leeds have set a fee."},
  {name:"Sebastiaan Bornauw", club:"FC Koln", pos:"CB", dir:"out", age:"~3 wks", tier:3, note:"Kicker: a candidate to return to Koln; on-loan centre-back."},
  {name:"Maximilian Wober", club:"Werder Bremen", pos:"CB", dir:"out", age:"~4 wks", tier:3, note:"On loan at Werder; future beyond the season unclear, contract to 2027."},
  {name:"Sam Byram", club:"(seeking club)", pos:"DF", dir:"out", age:"~9d", tier:4, note:"Just 85 minutes all season; a likely free-agent-style departure."}
];

/* ---------- SOURCE LINKS ----------
   HUB-ONLY after v1 migration: the v1 monolith stored no URLs, so every entry
   below is the named source's section front, never an aggregator (TransferFeed,
   NewsNow). Replace with exact traced article URLs at the first live refresh. */
const HUB = {
  lufc:      {l:"Leeds United Official", u:"https://www.leedsunited.com/news/"},
  philhay:   {l:"The Athletic · Leeds United (Phil Hay)", u:"https://www.nytimes.com/athletic/football/team/leeds-united/"},
  yep:       {l:"Yorkshire Evening Post · LUFC", u:"https://www.yorkshireeveningpost.co.uk/sport/football/leeds-united"},
  ypost:     {l:"The Yorkshire Post · LUFC", u:"https://www.yorkshirepost.co.uk/sport/football/leeds-united"},
  leedslive: {l:"Leeds Live · LUFC", u:"https://www.leedslive.co.uk/sport/leeds-united/"},
  bbcLeeds:  {l:"BBC Sport · Leeds United", u:"https://www.bbc.co.uk/sport/football/teams/leeds-united"},
  bbcGossip: {l:"BBC Sport · gossip column", u:"https://www.bbc.co.uk/sport/football/gossip"},
  sky:       {l:"Sky Sports · Leeds United", u:"https://www.skysports.com/leeds-united"},
  teamtalk:  {l:"TEAMtalk · Leeds United", u:"https://www.teamtalk.com/leeds-united"},
  fInsider:  {l:"Football Insider", u:"https://www.footballinsider247.com/"},
  nixon:     {l:"Alan Nixon · Patreon", u:"https://www.patreon.com/alannixon"},
  plett:     {l:"Florian Plettenberg (Sky DE) · X", u:"https://x.com/Plettigoal"},
  orourke:   {l:"Pete O'Rourke · X", u:"https://x.com/SunSport_Pete"},
  talksport: {l:"talkSPORT · football", u:"https://talksport.com/football/"},
  kicker:    {l:"Kicker", u:"https://www.kicker.de/"},
  tmw:       {l:"TuttoMercatoWeb", u:"https://www.tuttomercatoweb.com/"},
  sportsboom:{l:"SportsBoom · transfer news", u:"https://www.sportsboom.co.uk/football/transfer-news/"},
  yorkshireEveningPostJamesTrafford: {l:"Yorkshire Evening Post", u:"https://www.yorkshireeveningpost.co.uk/sport/football/leeds-united/leeds-united-transfers-james-trafford-man-city-8838021"},
  leedsAllOverLucasPerri: {l:"Leeds All Over", u:"https://www.leedsallover.com/leeds-united-agree-lucas-perri-loan-transfer-to-torino/"},
  leedsUnitedofficialTarikMuharemovi: {l:"Leeds United (official)", u:"https://www.leedsunited.com/en/news/tarik-muharemovic-signs-for-leeds-united"},
  skySportsHarryWilson: {l:"Sky Sports", u:"https://www.skysports.com/football/news/11095/13561731/harry-wilson-to-leeds-united-wales-international-makes-elland-road-switch-after-leaving-fulham"},
  leedsUnitedofficialPascalStruijk: {l:"Leeds United (official)", u:"https://www.leedsunited.com/en/news/pascal-struijk-joins-brighton-and-hove-albion"},
  tSNKarlDarlow: {l:"TSN", u:"https://www.tsn.ca/soccer/article/wales-keeper-darlow-joins-united-on-free-from-leeds/"},
  davidOrnsteinonXJamesTrafford: {l:"David Ornstein on X", u:"https://x.com/David_Ornstein/status/2081803067859652704"},
  skySportsJamesTrafford: {l:"Sky Sports", u:"https://news.google.com/rss/articles/CBMi2wFBVV95cUxPcllrZE53Sk9DWEZ4dGkyYVhqeTJWdFdnSmVxMEY4MzhkcGE4NzFFREw3VFpjd25GYUtDbzZ4bjZJLXpMNFBVdmU0Sk9kQ0hjVW52WEJEdzFlRWxaVjhENUFOcEV0WVpZV2RPdGVZQ1ZHckkxSlc2QXdRWlZPQ3IxWFZSd2JtR2RKdnVFdWVaUnZyeUNVcGxqMzBwYjdObGd6LTVsRzFMTWp5LUlHSjVUbnJ2OUxxMGFIRWJlc0VQLWpCOHZlTFVfMWpMZE9aMXhqaWpuVU1icjN6Rk0"},
  skySportsJamesTrafford1: {l:"Sky Sports", u:"https://news.google.com/rss/articles/CBMi2wFBVV95cUxPcllrZE53Sk9DWEZ4dGkyYVhqeTJWdFdnSmVxMEY4MzhkcGE4NzFFREw3VFpjd21GYUtDbzZ4bjZJLXpMNFBVdmU0Sk9kQ0hjVW52WEJEdzFlRWxaVjhENUFOcEV0WVpZV2RPdGVZQ1ZHckkxSlc2QXdRWlZPQ3IxWFZSd2JtR2RKdnVFdWVaUnZyeUNVcGxqMzBwYjdObGd6LTVsRzFMTWp5LUlHSjVUbnJ2OUxxMGFIRWJlc0VQLWpCOHZlTFVfMWpMZE9aMXhqaWpuVU1icjN6Rk0"},
  bBCJamesTrafford: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTFA5RUo5d3hqVmp2amlTSnhhbkQ3NlR3SURPQ0xtSEd2R3oxZFBkQXoyeWZBQjdQNE1OR0Z1OWJ1T2YxV3lubjZSOFhvak43akpBd3RKWExwQUt3NnpOX2hJdnRUVE16bms"},
  theAthleticKarlDarlow: {l:"The Athletic", u:"https://news.google.com/rss/articles/CBMijwFBVV95cUxOb2FTdnYtaUdtZWdmZ3dXcTFJanVVZmV0Q3lPSGwxWlV6Ukw5ZHJwNVhFUlNFYzZVODUzOWtFYlVoN0Rjd2ktNWptejJKZERoX2lxdGdJMFZwVGdTR1Qzak9CWFFicmRCU2ZXbF9kanBfN1ZGWml4X0tRMTR6VDVuazhfRXdSQTQ3cWlzTDVkaw"},
  mOTLeedsNewsLucasPerri: {l:"MOT Leeds News", u:"https://news.google.com/rss/articles/CBMipwFBVV95cUxNRmdVOG01Vmh2eHQ0dEljRHpCV083bDU1Z09ra2RFTUJMX21NN3ZMSEsydXRRdWRTcTZSV0ExWUgzeU5GUGFRTzBnWmhzWG5QNGlGQnJJTlVnc2ZBTkhaUlBPN1VfUVlJZFlKNU0xaHNaNjRncVFQWmQ2RkVrLWZJWDh0azRMRmhjNFd4NDF3QTE1ODhnNGRTT080T2plUndVa2tRY0ZrSQ"}};
const LINKMAP = {
  "Crysencio Summerville": ["leedslive","yep"],
  "Roony Bardghji": ["teamtalk","ypost"],
  "Danilho Doekhi": ["kicker","leedslive"],
  "Hayden Hackney": ["nixon","teamtalk"],
  "Jonathan David": ["teamtalk"],
  "Lois Openda": ["teamtalk","leedslive"],
  "James Trafford": ["teamtalk","yep", "yorkshireEveningPostJamesTrafford", "davidOrnsteinonXJamesTrafford", "skySportsJamesTrafford", "skySportsJamesTrafford1", "bBCJamesTrafford"],
  "Shea Charles": ["leedslive"],
  "Lutsharel Geertruida": ["yep"],
  "Liam Delap": ["bbcGossip","leedslive"],
  "Harvey Elliott": ["fInsider"],
  "Ayase Ueda": ["leedslive"],
  "Troy Parrott": ["leedslive"],
  "Konstantinos Karetsas": ["teamtalk"],
  "Joel Piroe": ["teamtalk","leedslive"],
  "Joe Gelhardt": ["leedslive"],
  "Ao Tanaka": ["plett","teamtalk"],
  "Illan Meslier": ["leedslive","yep"],
  "Wilfried Gnonto": ["yep","leedslive"],
  "Jack Harrison": ["leedslive"],
  "Largie Ramazani": ["leedslive"],
  "Lucas Perri": ["leedslive", "leedsAllOverLucasPerri", "mOTLeedsNewsLucasPerri"],
  "Mateo Joseph": ["teamtalk"],
  "Pascal Struijk": ["fInsider","yep", "leedsUnitedofficialPascalStruijk"],
  "Ethan Ampadu": ["lufc","philhay"],
  "Tarik Muharemović": ["leedsUnitedofficialTarikMuharemovi"],
  "Harry Wilson": ["skySportsHarryWilson"],
  "Karl Darlow": ["tSNKarlDarlow", "theAthleticKarlDarlow"]};
const WL_LINKMAP = {
  "Haris Tabakovic":"kicker","Leo Scienza":"leedslive","Zian Flemming":"leedslive","Mikey Moore":"talksport",
  "Finn Azaz":"leedslive","Tammy Abraham":"bbcGossip","Ladislav Krejci":"teamtalk","Yassine Titraoui":"leedslive",
  "Wilson Isidor":"leedslive","Beto":"leedslive","Axel Disasi":"fInsider","Nick Pope":"leedslive",
  "Carl Rushworth":"leedslive","Dmytro Riznyk":"leedslive","Santiago Bueno":"orourke","Kevin Mac Allister":"leedslive",
  "Daniel Svensson":"tmw","Jhon Solis":"leedslive","Gustavo Hamer":"sportsboom","Jeremy Monga":"talksport",
  "Anis Hadj Moussa":"leedslive","Wilfried Gnonto":"yep","Sebastiaan Bornauw":"kicker","Maximilian Wober":"kicker",
  "Isaac Schmidt":"kicker","Sam Byram":"yep",
};

/* ── PROSE (derived outputs; REWRITE per master §9b on every refresh, never carry over) ── */
const PROSE = {
  heroH2: `Captain secured, the <em>No.9</em> is the priority: a churn-and-consolidate window`,
  heroLede: `Leeds enter the summer as a <b>14th-placed survivor with no European football</b>, and under the new cost rules that is quietly an <b>advantage</b>: their Squad Cost Ratio cap is the looser <b>85% of revenue</b>, not the 70% squeezing clubs in Europe. The first concrete business is retention, not arrival: captain <b>Ethan Ampadu has signed a new deal to 2030</b>, the spine of a 49ers-backed plan that reads as <b>consolidation</b>. The open priority is now a <b>No.9</b> (a striker hunt already drawing competition from Nottingham Forest), with the goalkeeper question softened by <b>Karl Darlow establishing himself as first choice</b>. Nothing on the incoming side yet carries a Tier 1 "here we go".`,
  metaRow: `
      <span>DECISION-MAKER: <b>Adam Underwood</b> (Sporting Director)</span>
      <span>HEAD COACH: <b>Daniel Farke</b></span>
      <span>OWNER: <b>49ers Enterprises</b></span>
      <span>WINDOW: <b>15 Jun → 1 Sep</b></span>
    `,
  stats: `
    <div class="stat"><div class="l">2025/26 Finish</div><div class="v">14<small>th</small></div></div>
    <div class="stat"><div class="l">2026/27 Europe</div><div class="v">NONE</div></div>
    <div class="stat"><div class="l">Est. Gross Spend</div><div class="v">£60-100<small>m</small></div></div>
    <div class="stat"><div class="l">Est. Sales</div><div class="v">£40-80<small>m</small></div></div>
    <div class="stat gold"><div class="l">SCR Cost Cap</div><div class="v">85<small>%</small></div></div>`,
  positionPanel: `
  <!-- ANALYSIS: MODEL + FINANCE -->
  <section id="sec-position">
    <div class="sec-head"><h3>Club Position</h3><span class="num">01</span></div>
    <p class="sec-sub">The lens through which every rumour is weighted: the recruitment philosophy, the balance sheet, the brand, and where a non-European season actually helps.</p>

    <div class="cards">
      <!-- THE MODEL -->
      <div class="card">
        <h4>The Model <span class="tag">CORE PRINCIPLE</span></h4>
        <p>A <b>data-informed, value-led</b> build under <b>49ers Enterprises</b> (chairman Paraag Marathe), now run day-to-day by sporting director <b>Adam Underwood</b> (promoted from head of football operations after Gretar Steinsson moved into a wider 49ers Enterprises group role), with head coach <b>Daniel Farke</b> and Alex Davies leading recruitment. The brief is establishment, not survival-by-the-skin: identify undervalued upside, blend it with proven EFL/PL quality, and <b>churn the fringe</b> aggressively.</p>
        <div class="quote">Farke's framing after sealing safety with three games to spare: the club must now <i>"push on"</i> this summer rather than stand still.</div>
        <p><b>Squad churn is the engine:</b> a large group of loanees and one-year-deal players (Piroe, Gelhardt, Meslier, the loan-army centre-backs) will be moved on to fund a smaller number of targeted upgrades.</p>
        <ul>
          <li>2026 plan: <b>quality over volume</b>, a genuine No.9 and a No.1 are the priorities.</li>
          <li>Markets: Europe-wide value, proven EFL/Championship, younger resale profiles.</li>
          <li>Retention is half the window: Ampadu's new deal is done, with Aaronson and Gruev still to resolve.</li>
        </ul>
        <div class="verdict"><b>Tracker implication:</b> upgrade fresh, well-sourced striker / goalkeeper / centre-back links; discount marquee or over-age names unless they are an immediate first-XI upgrade.</div>
      </div>

      <!-- FINANCE -->
      <div class="card">
        <h4>Financial Position <span class="tag">DISCIPLINED</span></h4>
        <p>Backed by <b>49ers Enterprises</b>, but promotion-and-survival spending means the new <b>Squad Cost Ratio</b> regime now governs the window. Sales (Piroe, Gnonto, Tanaka) are expected to <b>fund</b> the incomings rather than supplement them.</p>
        <ul>
          <li><b>No European football</b> means the SCR cap is the higher <b>85%</b> of revenue, not the 70% squeezing clubs in Europe. A genuine, if narrow, edge over some rivals.</li>
          <li>One of England's <b>largest fanbases</b> and a near-sold-out Elland Road underpin strong matchday and commercial revenue.</li>
          <li>A 3-year net transfer position feeds the calculation, so <b>clearing the fringe extends headroom</b>, not just cash.</li>
        </ul>
        <div class="verdict"><b>Caveat:</b> overall squad cost still sits mid/lower-table, Leeds must <b>trade smartly</b>, not splurge. The model is reinvestment, not a spending spree.</div>
      </div>
    </div>
  </section>

  <!-- REPUTATION + RISK/REWARD -->
  <section id="sec-tradeoff">
    <div class="sec-head"><h3>Reputation &amp; The Establish-or-Slip Curve</h3><span class="num">02</span></div>
    <p class="sec-sub">A storied name and ambitious ownership are recruitment assets, but a second season back is where promoted clubs either consolidate or fall.</p>

    <div class="cards" style="margin-bottom:18px">
      <div class="card">
        <h4>Reputational Standing</h4>
        <p>One of England's biggest, most storied clubs with a vast global fanbase, run by <b>well-resourced US ownership</b> (49ers Enterprises). That, plus Farke's stability, a record promotion-and-survival, a win at Old Trafford and an FA Cup semi-final, makes Leeds an <b>attractive, well-run destination</b> for value players seeking a platform.</p>
        <ul>
          <li>Big-club pull lets Leeds compete with mid-table rivals for upside targets.</li>
          <li>A settled, popular manager lowers the "project risk" players price in.</li>
        </ul>
        <div class="verdict"><b>Double edge:</b> the same profile puts the best assets in the window: Gnonto (Freiburg), Tanaka (a long suitor list) and Struijk (Villa/Newcastle/Spurs) are all being circled.</div>
      </div>
      <div class="card">
        <h4>The SCR Position <span class="tag">QUIET ADVANTAGE</span></h4>
        <p>New <b>Squad Cost Ratio</b> rules replace PSR this summer. The cap on wages + agent fees + amortisation is <b>85% of revenue, but only 70% for clubs in European competition.</b></p>
        <p>Because Leeds are <b>not</b> in Europe, they sit on the <b>looser 85% cap</b> while several rivals are squeezed to 70% and must also pay for a deeper rotation squad. It is a narrow but real recruitment edge.</p>
        <ul>
          <li>A 3-year net transfer position feeds the calculation; moving the loan army and one-year-deal players <b>extends headroom</b>.</li>
          <li>No midweek European load means signings are about <b>quality of the XI</b>, not squad-padding for rotation.</li>
        </ul>
      </div>
    </div>

    <div class="riskgrid">
      <div class="risk-r">
        <h5>▲ Reward: Consolidate, then climb</h5>
        <ul>
          <li>A settled Farke side with a <b>proper No.9 and a reliable goalkeeper</b> can realistically target the top half.</li>
          <li>The looser <b>85% cap</b> lets Leeds outspend some European rivals on wages within the rules.</li>
          <li>A large fanbase compounds commercial growth, widening the budget over time.</li>
        </ul>
      </div>
      <div class="risk-d">
        <h5>▼ Risk: Second-season syndrome</h5>
        <ul>
          <li>Over-trading the squad mid-cycle can <b>break cohesion</b> that survival was built on.</li>
          <li>Failing to fix the <b>striker and goalkeeper</b> gaps risks another relegation scrap.</li>
          <li>Selling a key man (Struijk or Gnonto) <b>without reinvesting</b> weakens the first XI.</li>
        </ul>
      </div>
    </div>
    <div class="verdict" style="margin-top:18px;max-width:none">
      <b>Net read:</b> the evidence-consistent play is <b>targeted reinvestment</b>, a striker and a goalkeeper as clear priorities, plus centre-back depth, funded by clearing a bloated fringe while exploiting the 85% cap. Establishment, not adventure: Leeds should buy to climb the table, not to chase Europe this year.
    </div>
  </section>
`,
  confirmedPending: `<b>The window opens 15 June, so no incoming or outgoing transfer is officially done yet.</b> The live "confirmed business" story is retention: with <b>Ethan Ampadu</b> now signed to 2030 (above), Leeds are still working on fresh terms for <b>Brenden Aaronson</b> and <b>Ilia Gruev</b>, and have offered <b>Karl Darlow</b>, now the first-choice keeper, a short-term extension. Farke has also told the board <b>Pascal Struijk should not be sold</b>. These move into the ledger only once announced.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is (source tier, corroboration, recency). <b style="colour:var(--gold)">Happens?</b> = how likely the move completes this window (fee realism, club stance, player will, competition, need). A link can be near-certainly real yet unlikely to complete. Weighting: recency 30%, source 25%, tactical fit 15%, 49ers / Underwood recruitment 15%, finance 10%, competition 5%. <b style="colour:var(--gold)">NEW</b> flags a link that surfaced or materially moved since the last refresh.`,
  outgoingSub: `Sales feed affordability and SCR headroom. The Piroe, Gnonto and Tanaka decisions set the reinvestment budget.`,
  pricingBanner: `
      <b>Pricing principle: outgoings sell at a holder's price, not market value.</b> Because Leeds are under no pressure on their prized assets, the keepers (Gnonto, Tanaka) are anchored <i>above</i> consensus, while the willing sales (Piroe, Gelhardt, Meslier) are priced to move. Four multipliers stack: <b>(1)</b> long contracts remove all buyer leverage; <b>(2)</b> near-ever-present minutes prove the asset; <b>(3)</b> a multi-club bidding war inflates the number; <b>(4)</b> elite suitors pay a premium for proven youth. <b>Genuine resale assets (Gnonto, Tanaka) hold a firmer floor</b>, whereas one-year-deal and fringe players (Piroe, Gelhardt) carry far less leverage. Treat the listed fees as <i>floors</i>; the no-need-to-sell stance is also why a higher price often <i>lowers</i> completion probability rather than raising the fee at the margin.
    `,
  excludedNote: `<b>Excluded as stale/dead:</b> 100+ day-old aggregator links recycled from prior windows (e.g. Cody Gakpo, Kalvin Phillips, Raheem Sterling, Jhon Duran, James Ward-Prowse, Tammy Abraham re-runs, Ben Chilwell, Callum Wilson) show no fresh reporting and are not treated as live.`,
  spendIn: { v: `£60-100m`, x: `Lower for value mids/CB cover only; upper if a striker (David/Openda/Delap) and a goalkeeper (Trafford) both land.` },
  spendOut: { v: `£40-80m`, x: `Funded by clearing the fringe: Piroe (£8-10m), Gelhardt, Meslier, Ramazani and the loan-army permanents. Upper end if Gnonto (£20-28m) and/or Tanaka are also sold.` },
  methodLegend: `
      <div class="col">
        <h5>Source Tiers (current)</h5>
        <div class="row"><span class="k tier t1">T1</span><span><b>Elite</b>: Ornstein, Romano, BBC, The Athletic, Phil Hay &amp; Yorkshire Evening Post exclusives, official club statements (Ampadu new deal). <i>Used for:</i> confirmed deals, manager/SD verification, SCR explainer.</span></div>
        <div class="row"><span class="k tier t2">T2</span><span><b>Strong</b>: Sky Sports, Florian Plettenberg (Tanaka), Alan Nixon (Hackney), Sebastien Vidal (Gnonto, Geertruida), Bild, L'Equipe, RMC. Local beat papers rise within their specialism: Leeds Live and the YEP on Elland Road threads.</span></div>
        <div class="row"><span class="k tier t3">T3</span><span><b>Moderate</b>: TEAMtalk, Football Insider, club sites, mixed-record nationals and regional press.</span></div>
        <div class="row"><span class="k tier t4">T4</span><span><b>Weak</b>: Fichajes, Africa Foot, Foot Sur 7, Media Foot, fan posts. <b>Aggregator feeds</b> (TransferFeed, NewsNow) are used as a <i>discovery index</i> for the full rumour sweep, then traced to the original reporter for weighting, never weighted as a primary source themselves.</span></div>
      </div>
      <div class="col">
        <h5>Weighting Model &amp; Recency Decay</h5>
        <div class="weights">
          <span class="w">Recency <b>30%</b></span><span class="w">Source <b>25%</b></span><span class="w">Tactical fit <b>15%</b></span>
          <span class="w">49ers / Underwood <b>15%</b></span><span class="w">Finance <b>10%</b></span><span class="w">Competition <b>5%</b></span>
        </div>
        <div class="row" style="margin-top:16px"><span class="k">0-7d</span><span>Very strong · <span class="k">8-14d</span> strong · <span class="k">15-30d</span> moderate</span></div>
        <div class="row"><span class="k">31-60d</span><span>weak · <span class="k">60d+</span> heavily discounted unless freshly re-reported.</span></div>
        <div class="row" style="margin-top:10px"><span class="k" style="colour:var(--gold)">NB</span><span>Recycled aggregator repetition does <b>not</b> refresh recency. Parrott &amp; Hadj Moussa fall on this basis.</span></div>
        <div class="row" style="margin-top:14px"><span class="k" style="colour:var(--gold)">TRUE?</span><span>Probability the reported interest is <b>real and accurately sourced</b> - the credibility of the link itself, driven by tier, corroboration and recency.</span></div>
        <div class="row"><span class="k" style="colour:var(--gold)">HAPPENS?</span><span>Probability the move <b>actually completes</b> this window - fee realism, club stance, player will, competition and need. The two move independently: a widely-reported link can read high on True yet low on Happens.</span></div>
        <div class="row" style="margin-top:8px"><span class="k">Lights</span><span>🟢 &gt;50% · 🟡 30-50% · 🟠 15-30% · 🔴 &lt;15% (applied to each metric separately).</span></div>
      </div>`
};
