
/* ============================================================
   DATA: edit this block on each daily update, page re-renders.
   light: 'g'=green(>50%) 'y'=yellow(30-50%) 'o'=orange(15-30%) 'r'=red(<15%)
   trend: 'up' | 'flat' | 'down'
   ============================================================ */
/*==DATA==*/
/* ============================================================
   MERCATO IQ · CLUB DATA · TOTTENHAM HOTSPUR · STATE OF RECORD
   This file IS the club's live state. A refresh edits ONLY this
   file, then engine/build.py splices it into template.html to
   produce tottenham-hotspur.html. Never hand-edit the built html.
   Mechanics: engine/REFRESH_RUNBOOK.md · Rules: 00_MASTER_ENGINE.md
   ------------------------------------------------------------
   MIGRATION NOTE (30 Jul 2026): first live-format build for this
   club (previously on the legacy single-page template with no
   BRAND-driven colours). Researched fresh via live web search.
   ============================================================ */

const BRAND = {
  club: "Tottenham Hotspur", mono: "TOT", slug: "tottenham-hotspur",
  primary: "#132257", primaryBright: "#2F4FA0", primaryDeep: "#080E22",
  primaryRgb: "19,34,87",
  breadcrumb: ["England","Premier League"]
};
const VOLATILE = {
  verified: "2026-07-30", coach: "Roberto De Zerbi (since 31 Mar 2026)", dof: "Johan Lange (Sporting Director)",
  europe: "None (2026/27) - missed out after 17th-place finish", finish: "17th (2025/26, survived on final day)",
  owner: "ENIC Group / Lewis family - Peter Charrington (Non-Exec Chairman), Vinai Venkatesham (CEO)", window: "Opened 16 Jun, runs to 1 Sep 2026"
};
const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/Premier+League/Tottenham+Hotspur", "https://www.skysports.com/tottenham-hotspur", "https://www.football.london/tottenham-hotspur-fc/"],
  queries: ["Tottenham transfer news 2026", "Spurs bid OR medical OR 'here we go'", "Tottenham Hotspur exclusive Romano OR Ornstein"],
  note: "Italian desks (Gazzetta, Longari, Schira) tracked closely for the Romero/Vicario Serie A angles; Norwegian and Bosnian outlets checked for the Schjelderup/Alajbegovic winger links; Dutch press monitored for Troy Parrott's AZ Alkmaar situation."
};
const REPORT_META = { label: "Updated 03 Aug 2026 – European refresh , updated: "2026-08-03T12:48:44Z"};

const CONFIRMED_IN = [
  {name:"Sandro Tonali", sub:"26 · CM · Italy", to:"permanent from Newcastle United", fee:"£100m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"The marquee deal of Spurs' rebuild - a straight cash fee, not the part-exchange some had speculated, confirmed by TeamTalk and Sports Mole among others. Tonali becomes the on-pitch anchor of De Zerbi's midfield reset and the clearest signal yet that this is a spend-to-recover summer rather than a cautious one."},
  {name:"Mateus Fernandes", sub:"21 · CM · Portugal", to:"permanent from West Ham United", fee:"£85m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Fernandes arrives as the long-term creative midfield piece, completing a £185m double swoop alongside Tonali inside the same window. Early framing from Sports Mole and TeamTalk positions him as the closest thing Spurs now have to a Maddison-style No.8/10 hybrid."},
  {name:"Jan-Paul van Hecke", sub:"26 · CB · Netherlands", to:"permanent from Brighton & Hove Albion", fee:"£52m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Third of the summer's big-ticket arrivals, van Hecke slots in as a left-footed centre-back alongside the incoming Senesi - a deliberate response to last season's defensive collapse that nearly cost Spurs their Premier League status."},
  {name:"Marcos Senesi", sub:"29 · CB · Argentina", to:"free transfer from Bournemouth", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"A shrewd free-agent pickup to add experienced cover at the back without touching the transfer budget, allowing the bulk of spend to go on Tonali, Fernandes and van Hecke."},
  {name:"Andy Robertson", sub:"32 · LB · Scotland", to:"free transfer from Liverpool", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Robertson's Anfield exit on a free lands him competition and cover at left-back, and gives De Zerbi a proven leader to help stabilise a squad that went through three head coaches in a single season."},
  {name:"Martin Dubravka", sub:"37 · GK · Slovakia", to:"free transfer from Burnley", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Pure squad depth behind Antonin Kinsky and (for now) Guglielmo Vicario - low-cost, low-risk, and consistent with Lange's pattern of using free transfers to preserve fee spend for the difference-makers."},

];

const CONFIRMED_OUT = [
  {name:"Luka Vuskovic", sub:"19 · CB · Croatia", to:"permanent to Brighton & Hove Albion", fee:"£46m (£50m w/ add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"The single biggest outgoing fee of the window, funding a large chunk of the defensive rebuild - a striking reversal given Vuskovic was signed as a long-term captaincy prospect barely 18 months earlier."},
  {name:"Yves Bissouma", sub:"29 · DM · Mali", to:"released, free transfer", fee:"Released", free:true, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Let go on a free at contract expiry, with Tonali and Fernandes' arrivals rendering him surplus to De Zerbi's midfield plans."},
  {name:"Radu Dragusin", sub:"24 · CB · Romania", to:"loan (permanent on conditions) to Fiorentina", fee:"Loan, conditional permanent", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"A season-long loan with a permanent trigger, easing Dragusin out of a centre-back pool that now includes van Hecke, Senesi, Porro-adjacent cover and (for now) Romero."},
  {name:"Tynan Thompson", sub:"18 · LW · England", to:"permanent to Manchester United", fee:"£8m", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"A promising academy sale to a Premier League rival - modest business by this summer's standards but a clean, undisputed fee for a fringe prospect."},
  {name:"Will Lankshear", sub:"21 · ST · England", to:"permanent to Middlesbrough", fee:"£10m (£20m w/ add-ons)", free:false, status:"done", statusTxt:"DONE, OFFICIAL",
   note:"Lankshear drops into the Championship for regular football, with a healthy add-on structure protecting Spurs' upside if he develops into a Premier League-standard striker."},
];

const INCOMING = [
  {name:"Savinho", sub:"22 · W · Brazil", club:"Manchester City", pos:"RW/LW", report:"25 Jul 2026", src:"Fabrizio Romano", tier:1, fee:"£60m", truth:78, prob:55, light:'g', trend:'up',
   note:"Romano says talks have genuinely started and the move is 'absolutely on', with De Zerbi personally driving the pursuit. The only obstacle is City's: Guardiola's side need a replacement winger lined up before sanctioning the sale, which is what's separating this from an imminent 'here we go'. It's a second attempt after Spurs were rebuffed in 2025, this time with City's leverage weaker."},
  {name:"Rafael Leão", sub:"27 · W · Portugal", club:"AC Milan", pos:"LW", report:"28 Jul 2026", src:"Fabrizio Romano", tier:1, fee:"Undisclosed, cheaper than Savinho/Gakpo", truth:48, prob:26, light:'o', trend:'up',
   note:"Romano's framing is telling: Fenerbahce are the only club with a concrete bid in, Milan want him gone, and Leão has reportedly asked to leave - meaning he could be Spurs' most gettable, and cheapest, marquee winger if De Zerbi decides to move. No direct Tottenham approach confirmed yet, which keeps this speculative rather than advanced. OBSTACLES: no bid from Spurs on record; Leão's wage demands remain a question mark."},
  {name:"Cody Gakpo", sub:"27 · W/F · Netherlands", club:"Liverpool", pos:"LW/ST", report:"29 Jul 2026", src:"Fabrizio Romano (Here We Go podcast)", tier:1, fee:"Not yet tested", truth:52, prob:20, light:'o', trend:'flat',
   note:"Romano says to 'keep an eye' on this one, noting Spurs still like Gakpo and that 'there will be many movements about wingers' for Tottenham this window. But Liverpool value him highly within a settled front line, and would likely only sanction a sale if their own Bradley Barcola business strains the books. Background interest, not an active negotiation."},
  {name:"Eli Junior Kroupi", sub:"20 · ST · France", club:"Bournemouth", pos:"ST", report:"29 Jul 2026", src:"TeamTalk / Gerard Romero", tier:2, fee:"£80-111m valuation, bid now shelved", truth:62, prob:12, light:'r', trend:'down',
   note:"Spurs were reportedly 24 hours from a £80m+ bid before Kroupi broke his foot and now needs surgery, ruling him out into the new year. De Zerbi remains 'a huge admirer' and the plan is to revisit next summer once fit - but for this window the move is dead, and the injury is precisely why the striker shortlist below has suddenly expanded."},
  {name:"Fisnik Asllani", sub:"23 · ST · Kosovo", club:"Hoffenheim", pos:"ST", report:"29 Jul 2026", src:"TeamTalk", tier:3, fee:"Not yet tested", truth:40, prob:27, light:'o', trend:'up',
   note:"Emerged as a direct fallback once Kroupi's injury forced a rethink, with RB Leipzig and Barcelona also credited with interest. Nothing beyond shortlist-level exclusive reporting so far, but the timing (named within hours of the Kroupi news breaking) suggests genuine internal discussion at Spurs rather than pure speculation."},
  {name:"Ferran Torres", sub:"26 · ST/W · Spain", club:"Barcelona", pos:"ST", report:"29 Jul 2026", src:"TeamTalk", tier:3, fee:"Contract-expiry fallback, no fee agreed", truth:36, prob:16, light:'o', trend:'down',
   note:"Framed as available only if his Barcelona contract talks collapse, and PSG are reported to be further along in that scenario than Spurs, who have so far only held soft discussions through intermediaries. A break-glass option rather than a live target."},
];

const OUTGOING = [
  {name:"Cristian Romero", sub:"28 · CB · Argentina", club:"Inter Milan (Barcelona lurking)", pos:"CB", report:"28 Jul 2026", src:"Gianluigi Longari / Fabrizio Romano", tier:1, fee:"≈€40m (£35m)", truth:80, prob:62, light:'g', trend:'up',
   note:"Longari reports Inter and Spurs are close on a fee near €40m, with personal terms the only remaining hold-up; Romano has separately called it 'over' for Romero at Tottenham. The wrinkle is Barcelona, who are keeping tabs while they engineer a sale of their own to fund a move - but by most accounts Romero himself remains keener on Inter, and Spurs have reportedly already fielded his farewell performance."},
  {name:"Lucas Bergvall", sub:"20 · CM · Sweden", club:"Nottingham Forest or Newcastle United", pos:"CM", report:"18 Jul 2026", src:"David Ornstein (The Athletic)", tier:1, fee:"Not yet tested", truth:82, prob:45, light:'y', trend:'up',
   note:"This is the most solidly sourced departure story on the board - Ornstein reported Bergvall has directly informed the club of his wish to leave for a fresh start, squeezed out of the midfield picture by the Tonali/Fernandes arrivals and wary of a season without European football. Forest are said to be leading on the money, Newcastle on the project; his contract runs to 2031 so Spurs hold full leverage on fee."},
  {name:"Djed Spence", sub:"25 · RB/RWB · England", club:"Liverpool, Manchester United and Inter Milan circling", pos:"RB", report:"24 Jul 2026", src:"TeamTalk (Graeme Bailey) / Spurs Web (George Sessions)", tier:2, fee:"≈£40m / €40m", truth:60, prob:42, light:'y', trend:'up',
   note:"Genuinely three-way interest now: Liverpool have been 'having a serious look', United were linked with a £40m move, and Inter Milan are in direct talks seeking a discount on Spurs' €40m valuation. Sessions' reporting is the useful corrective here - Spence isn't pushing to leave, but with Robertson in and Porro locked down long-term, his path to minutes has narrowed and Spurs would sanction a sale at their price."},
  {name:"Guglielmo Vicario", sub:"29 · GK · Italy", club:"Juventus", pos:"GK", report:"24 Jul 2026", src:"Gazzetta dello Sport", tier:2, fee:"≈£20m", truth:55, prob:36, light:'y', trend:'up',
   note:"Gazzetta reports Vicario 'quietly edging closer' to Juventus as their fallback should the Emi Martínez pursuit fail, with Inter Milan previously sniffing too. The key domestic detail: De Zerbi has made Antonin Kinsky his No.1, which is precisely what has freed the club to sanction Vicario's departure if the £20m valuation is met."},
  {name:"Richarlison", sub:"29 · ST/W · Brazil", club:"Juventus or Fenerbahce", pos:"ST", report:"24 Jul 2026", src:"CaughtOffside", tier:3, fee:"€20-25m (£17-21m)", truth:45, prob:28, light:'o', trend:'flat',
   note:"Talks are described as open rather than advanced, with Juventus eyeing him as a Kolo Muani alternative and Fenerbahce also credited with interest - Richarlison reportedly prefers Serie A. A single-source story at this stage, worth tracking rather than trusting outright, and complicated by an earlier scout claim (now discounted, see Ignore list) that he'd move as part of a Tonali part-exchange."},
];

const RISERS = [
  {ar:"⬆", t:"<b>Savinho</b>: Romano upgrades this from background interest to an active, De Zerbi-driven negotiation - now blocked only by Manchester City sourcing a replacement."},
  {ar:"⬆", t:"<b>Cristian Romero</b>: fee reportedly agreed in principle with Inter around €40m; Barcelona's late interest is noise rather than a genuine rival bid so far."},
  {ar:"⬆", t:"<b>Lucas Bergvall</b>: Ornstein's direct, player-sourced scoop turns a squad-depth story into a firm expected exit, with Forest and Newcastle both circling."},
  {ar:"⬆", t:"<b>Guglielmo Vicario</b>: Kinsky's promotion to No.1 has visibly unlocked this one - Gazzetta now describing a 'quiet' but real approach from Juventus."},
];
const FALLERS = [
  {ar:"⬇", t:"<b>Eli Junior Kroupi</b>: a broken foot needing surgery has shelved what was set to be an £80m+ marquee bid, ruling him out until the new year."},
  {ar:"⬇", t:"<b>Ferran Torres</b>: reported as a fallback-only option, and PSG are said to be further advanced if his Barcelona deal collapses."},
  {ar:"⬇", t:"<b>Micky van de Ven to Manchester United</b>: once a live United target, now fading fast as Spurs push through a new long-term contract off the back of the summer rebuild."},
];
const NEW = [
  {ar:"✦", t:"Kroupi's injury (29 Jul) reshuffled the entire striker plan within 24 hours, pushing Asllani and Tresoldi up Spurs' shortlist as fallback options."},
  {ar:"✦", t:"Ornstein's Bergvall exclusive turned a slow-burn squad-depth story into a firm, player-driven exit expected before deadline day."},
  {ar:"✦", t:"Romano now frames Savinho as a genuine, live negotiation rather than recycled 2025 interest, with the ball explicitly in Manchester City's court."},
];
const IGNORE = [
  {ar:"✕", t:"<b>Solanke/Richarlison 'part-exchange for Tonali'</b>: sourced to a single ex-scout's opinion published before the Tonali fee was confirmed as a straight £100m cash deal - discount."},
  {ar:"✕", t:"<b>Micky van de Ven to Manchester United</b>: described in the same reporting cycle as a 'massive blow' for United now that Spurs are closing in on a new contract; treat as dead."},
  {ar:"✕", t:"<b>Bart Verbruggen / Jan-Paul van Hecke 'Brighton duo monitored'</b>: van Hecke is already a completed Spurs signing and the goalkeeper angle pre-dates both Dubravka's arrival and Kinsky's promotion to No.1 - stale."},
];

const POSITIONS = [
  {p:"Wide forward / winger", w:90, x:"Lange and De Zerbi are explicitly working two winger targets at once (Savinho advanced, Leão/Gakpo in reserve) - the clearest remaining priority of the summer."},
  {p:"Striker depth", w:82, x:"Kroupi's injury blew up the top striker plan overnight; Asllani, Tresoldi and a possible Ferran Torres or Troy Parrott reunion are all being scrambled as alternatives."},
  {p:"Centre-back leadership", w:74, x:"Van Hecke and Senesi add numbers, but a probable Romero exit removes the dressing room's defensive figurehead - succession planning matters as much as recruitment here."},
  {p:"Right-back competition", w:56, x:"Spence's likely departure (three suitors circling) would leave Pedro Porro without senior cover at right wing-back."},
  {p:"Goalkeeper succession", w:44, x:"Kinsky is now first choice; if Vicario's Juventus move completes, a firm, funded No.2 plan needs to follow rather than relying on Dubravka alone."},
];

const WATCHLIST = [
  {name:"Martin Baturina", club:"Como", pos:"AM/W", dir:"in", age:"~3 wks", tier:3, note:"Como want €80m (£68m) and have already rejected a reported £47m bid from a Premier League club; parked as the luxury No.10/wide option behind the Savinho and Leão chases."},
  {name:"Kerim Alajbegovic", club:"Bayer Leverkusen", pos:"W", dir:"in", age:"~1 wk", tier:2, note:"18-year-old Bosnian winger; Schira reports Spurs and Chelsea have both approached his camp, with Leverkusen holding out for €30m. Longer-term project rather than an immediate deadline-day play."},
  {name:"Nicolo Tresoldi", club:"Club Brugge", pos:"ST", dir:"in", age:"~1 day", tier:3, note:"Named alongside Asllani as a fallback striker option once Kroupi's injury complicated the priority move; Roma and Borussia Dortmund also credited with interest."},
  {name:"Andreas Schjelderup", club:"Benfica", pos:"W", dir:"in", age:"~10 days", tier:2, note:"Benfica's €80m (£68m) valuation looks a stretch this deep into a £237m summer; TeamTalk describes talks as 'very early stage' with no formal bid submitted."},
  {name:"Troy Parrott", club:"AZ Alkmaar", pos:"ST", dir:"in", age:"ongoing", tier:4, note:"Sold on permanently with a sell-on clause still owed to Spurs; his breakout Eredivisie scoring form has revived boyhood-club reunion talk, but nothing formal has followed the interview quotes yet."},
  {name:"Dominic Solanke", club:"Tottenham (exit direction)", pos:"ST", dir:"out", age:"~3 mths", tier:4, note:"Fitness and form questions have lingered since a season-ending injury last term, and continued spend elsewhere on attackers keeps exit chatter alive - but no club or fee has attached itself to this yet."},
];

const HUB = {
  ornstein: {l:"David Ornstein · The Athletic", u:"https://x.com/David_Ornstein"},
  romano: {l:"Fabrizio Romano", u:"https://x.com/FabrizioRomano"},
  longari: {l:"Gianluigi Longari", u:"https://x.com/Glongari"},
  schira: {l:"Nicolò Schira", u:"https://x.com/NicoSchira"},
  bbcSpurs: {l:"BBC Sport · Tottenham Hotspur", u:"https://www.bbc.co.uk/sport/football/teams/tottenham-hotspur"},
  skySpurs: {l:"Sky Sports · Tottenham Hotspur", u:"https://www.skysports.com/tottenham-hotspur"},
  footballLondon: {l:"football.london · Spurs", u:"https://www.football.london/tottenham-hotspur-fc/"},
  teamtalk: {l:"TeamTalk · Tottenham Hotspur", u:"https://www.teamtalk.com/tottenham-hotspur"},
  graemeBailey: {l:"Graeme Bailey · TeamTalk", u:"https://x.com/GraemeBailey"},
  spursWeb: {l:"Spurs Web", u:"https://www.spurs-web.com/"},
  georgeSessions: {l:"George Sessions · Spurs Web", u:"https://x.com/GeorgeSessions"},
  readTottenham: {l:"Read Tottenham", u:"https://readtottenham.com/"},
  caughtOffside: {l:"CaughtOffside", u:"https://www.caughtoffside.com/"},
  gazzetta: {l:"Gazzetta dello Sport", u:"https://www.gazzetta.it/"},
  sportsMole: {l:"Sports Mole · Spurs", u:"https://www.sportsmole.co.uk/football/spurs/"},
};

const LINKMAP = {
  "Sandro Tonali": ["teamtalk","sportsMole"],
  "Mateus Fernandes": ["teamtalk","sportsMole"],
  "Jan-Paul van Hecke": ["teamtalk","sportsMole"],
  "Marcos Senesi": ["teamtalk","sportsMole"],
  "Andy Robertson": ["teamtalk","sportsMole"],
  "Martin Dubravka": ["teamtalk","sportsMole"],
  "Luka Vuskovic": ["teamtalk","sportsMole"],
  "Yves Bissouma": ["teamtalk","sportsMole"],
  "Radu Dragusin": ["teamtalk","sportsMole"],
  "Tynan Thompson": ["sportsMole"],
  "Will Lankshear": ["teamtalk","sportsMole"],
  "Savinho": ["romano"],
  "Rafael Leão": ["romano"],
  "Cody Gakpo": ["romano"],
  "Eli Junior Kroupi": ["teamtalk"],
  "Fisnik Asllani": ["teamtalk"],
  "Ferran Torres": ["teamtalk"],
  "Cristian Romero": ["longari","romano"],
  "Lucas Bergvall": ["ornstein"],
  "Djed Spence": ["graemeBailey","georgeSessions"],
  "Guglielmo Vicario": ["gazzetta"],
  "Richarlison": ["caughtOffside"],
};
const WL_LINKMAP = {
  "Martin Baturina": "teamtalk",
  "Kerim Alajbegovic": "schira",
  "Nicolo Tresoldi": "teamtalk",
  "Andreas Schjelderup": "teamtalk",
  "Troy Parrott": "skySpurs",
  "Dominic Solanke": "footballLondon",
};

const PROSE = {
  heroH2: `From <em>relegation scare</em> to a £237m reset - can De Zerbi's Spurs land one more winger before deadline day?`,
  heroLede: `Twelve months after lifting the Europa League, Tottenham spent 2025/26 fighting relegation and survived only on the final day, going through three head coaches before <b>Roberto De Zerbi</b> steadied the ship. With <b>no European football</b> to offset the accounts in 2026/27, the club has instead gone all-in domestically: <b>six permanent deals, £237m spent</b>, rebuilding midfield and defence almost from scratch around Sandro Tonali, Mateus Fernandes and three new defenders. The live tension now sits at the top of the pitch - a marquee winger to complete De Zerbi's system, with Savinho, Rafael Leão and Cody Gakpo all in play - funded in part by a near-certain Cristian Romero exit to Inter Milan.`,
  metaRow: `<span>DECISION-MAKER: <b>Johan Lange</b> (Sporting Director)</span> <span>HEAD COACH: <b>Roberto De Zerbi</b></span> <span>OWNER: <b>ENIC / Lewis family</b></span> <span>WINDOW: <b>16 Jun – 1 Sep 2026</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">17th</div></div><div class="stat"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Summer Spend</div><div class="v">£237m</div></div><div class="stat"><div class="l">Net Spend</div><div class="v">-£173m</div></div><div class="stat"><div class="l">Confirmed Deals</div><div class="v">6 in / 5 out</div></div>`,
  positionPanel: `<section id="sec-position"><h3>Club Position</h3>
  <div class="card"><h4>The Model</h4><p>Tottenham enter this window as a club mid-overhaul, not mid-project. The 2025/26 season was, by any measure, a crisis year: reigning Europa League champions and Champions League participants who nonetheless required a final-day draw with Everton to avoid relegation, cycling through Ange Postecoglou's successor Thomas Frank, a 44-day Igor Tudor interim spell, and finally Roberto De Zerbi from late March. De Zerbi's brief since arriving has been unambiguous - rebuild a squad that had been stripped of confidence and identity, and do it fast, with Johan Lange (sole sporting director since Fabio Paratici's departure for Fiorentina) empowered to spend well beyond a normal Spurs summer. The result is six permanent deals worth £237m, headlined by Sandro Tonali and Mateus Fernandes in midfield and a near-total defensive reset around Jan-Paul van Hecke and Marcos Senesi. This is recognisably a different recruitment philosophy to the Daniel Levy era: less protracted negotiation, more urgency, and a willingness to break the club's transfer record twice in one window.</p></div>
  <div class="card"><h4>Financial Position</h4><p>The uncomfortable backdrop is that this spend is happening without any European football, and therefore without the broadcast and matchday revenue that funded recent windows. A -£173m net spend is a genuinely bold bet on Premier League recovery alone, and it explains why outgoing business - Luka Vuskovic's £46m sale to Brighton, and the expected departures of Cristian Romero, Guglielmo Vicario and Lucas Bergvall - is being treated as integral to the plan rather than incidental squad-trimming. Profitability and sustainability considerations sit in the background of every remaining deal: a winger arriving this window (Savinho at £60m being the clearest live scenario) is realistically contingent on at least one more sale completing first.</p></div>
  </section>
  <section id="sec-tradeoff"><h3>Reputation &amp; The Cost-Cap Trade-Off</h3>
  <div class="card"><h4>Ownership in Flux</h4><p>The boardroom picture has shifted as much as the dressing room. Daniel Levy's 25-year chairmanship ended when he sold his stake to Eight Sports Capital (Brooklyn Earick), amid long-reported friction with the Lewis family who control ENIC. Peter Charrington now holds the non-executive chairman role with an oversight and financial remit, while CEO Vinai Venkatesham - an Arsenal recruit - runs the club day-to-day. It is a deliberately split structure, replacing Levy's single point of control, and this summer's aggressive spend is the first real test of whether it can move as decisively as its predecessor when a deal needs closing.</p></div>
  <div class="card"><h4>The Tension</h4><p>Spurs are trying to do two contradictory things at once: rebuild squad depth and quality after a relegation scare, while also raising real money through sales of first-team players (Romero, Vicario, Bergvall, Spence) who would ordinarily be core to a rebuild. That tension is precisely why so many of this window's stories are two-sided - a striker search complicated by Kroupi's injury, a winger chase gated by Manchester City's own business, and a captain's exit balanced against the funds it releases.</p></div>
  <div class="riskgrid">
    <div class="risk-r"><b>Risk</b><p>No European income in 2026/27 makes the £237m outlay a pure bet on a top-half Premier League finish; a slow start under a still-bedding-in De Zerbi would tighten the finances fast.</p></div>
    <div class="risk-d"><b>Reward</b><p>A settled Tonali–Fernandes midfield, a rebuilt back line and one marquee winger would give Spurs a squad arguably stronger than the one that won the Europa League - assembled at speed rather than over several windows.</p></div>
  </div>
  <div class="verdict"><b>Verdict:</b> This is the most transformative Tottenham window in years, but it is being built on sand until the outgoing business - Romero above all - actually clears. Expect the winger position to move only once one of Romero, Vicario or Bergvall is signed, sealed and banked.</div>
  </section>`,
  confirmedPending: `Beyond the six completed deals, the only meaningful pending domestic story is Micky van de Ven's new contract - talks are described as having 'positive early communication', and closing it out would be the clearest signal yet that the defensive spine built this summer is meant to stay together. No further incoming deals are reported as agreed-but-unannounced; the winger business remains at negotiation stage rather than paperwork stage.`,
  incomingSub: `Every link carries two independent readings. <b style="colour:var(--gold)">True?</b> = how credible the reported interest is, weighted by source tier, corroboration across outlets, and how recently it broke. <b style="colour:var(--gold)">Happening?</b> = the realistic chance of the move completing this window specifically, weighing fee gap, player stance, competing suitors and the selling club's own plans. The two frequently diverge - Savinho's interest is highly credible and reasonably live, while Rafael Leão's is credible but currently undriven from the Spurs side.`,
  outgoingSub: `Spurs' outgoing business has gone from routine squad-trimming to central financial strategy: with £237m already spent and no European revenue this year, sales of first-team names - Romero, Vicario, Bergvall, Spence - are what will determine whether a marquee winger actually arrives.`,
  pricingBanner: `Lange's pricing approach has split cleanly in two: academy and fringe sales (Lankshear, Thompson, Dragusin) have moved for modest, largely fixed fees to keep the squad lean, while first-team departures (Romero, Vicario, Bergvall, Spence) are being priced at full market value rather than discounted for a swift exit - reflecting how much this summer's remaining incoming business depends on them landing well.`,
  excludedNote: `<b>Excluded as stale/already-resolved:</b> the Solanke/Richarlison "part-exchange for Tonali" idea (Tonali was completed for straight cash, not a swap); Manchester United's interest in Micky van de Ven (superseded by Spurs' own contract progress); and lingering Bart Verbruggen/Jan-Paul van Hecke goalkeeper chatter that pre-dates both Dubravka's arrival and Antonin Kinsky's promotion to No.1.`,
  spendIn: { v: "£237m committed, more targeted", x: "Six permanent deals are already done; a winger fee in the £50-70m range (Savinho most likely, Leão or Gakpo as alternates) is the most probable remaining outlay, gated by at least one more sale completing first." },
  spendOut: { v: "£64m banked, more expected", x: "Vuskovic's sale and academy business have brought in £64m so far; a completed Romero exit (~£35m) plus a Vicario sale (~£20m) would push incoming funds past £100m before deadline day." },
  methodLegend: `<div class="col"><h5>Source Tiers</h5><p><b>Tier 1</b> - Romano, Ornstein/The Athletic, BBC Sport-grade exclusives (e.g. Ornstein's direct Bergvall scoop, Longari's Romero fee reporting).<br><b>Tier 2</b> - Sky Sports, football.london, major nationals, and top foreign outlets like Gazzetta dello Sport (Vicario).<br><b>Tier 3</b> - Established exclusives from outlets like TeamTalk, Spurs Web and CaughtOffside, credible but less consistently corroborated.<br><b>Tier 4</b> - Aggregator-level pickups, single-source foreign items, or long-range speculation (e.g. Troy Parrott reunion talk).</p></div>
  <div class="col"><h5>Weighting Model</h5><p><b>True?</b> rewards source tier, independent corroboration and recency, and is discounted heavily for stories resting on a single unnamed insider. <b>Happening?</b> layers on fee realism, the selling club's actual willingness (Manchester City's Savinho replacement need; Bournemouth's shattered Kroupi timeline), player stance, and competing suitors. A story can score high on credibility and low on completion likelihood, and vice versa - treat the two numbers as answering different questions, not as one blended score.</p></div>`
};

/*==ENDDATA==*/

/* ---------- BOOT: apply club brand + prose (data-driven shell) ---------- */
(function(){
  const rs=document.documentElement.style;
  rs.setProperty('--red',BRAND.primary);
  rs.setProperty('--red-bright',BRAND.primaryBright);
  rs.setProperty('--red-deep',BRAND.primaryDeep);
  rs.setProperty('--primary-rgb',BRAND.primaryRgb);
  document.title='Mercato IQ: '+BRAND.club;
  document.getElementById('brandName').innerHTML='Mercato <b>IQ</b> · '+BRAND.club;
  document.getElementById('monoText').textContent=BRAND.mono;
  /* Breadcrumb: Global > Nation > League > Club, every level a real link, so there is
     always a clear way back up the chain from a club page. */
  const crumbSlugify = s => (s||'').toLowerCase().trim().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-');
  const crumbParts = [{ label: 'Global', href: 'index.html' }];
  (BRAND.breadcrumb||[]).forEach((x,i)=>{
    const href = i===0 ? `nations/${crumbSlugify(x)}.html` : `leagues/${crumbSlugify(x)}.html`;
    crumbParts.push({ label: x, href });
  });
  document.getElementById('crumb').innerHTML=crumbParts.map(p=>`<a href="${p.href}">${p.label}</a><span class="sep">›</span>`).join('')+`<b>${BRAND.club}</b>`;
  // Also render in header for easy navigation
  const headerBreadEl = document.getElementById('headerBreadcrumbs');
  if(headerBreadEl) {
    const headerBread = crumbParts.map((p,i) => `<a href="${p.href}">${p.label}</a>` + (i < crumbParts.length - 1 ? `<span class="sep">/</span>` : '')).join('');
    headerBreadEl.innerHTML = headerBread + `<span class="sep">/</span><span class="current">${BRAND.club}</span>`;
  }
  const set=(id,h)=>{const el=document.getElementById(id); if(el) el.innerHTML=h||'';};
  set('heroH2',PROSE.heroH2); set('heroLede',PROSE.heroLede); set('metaRow',PROSE.metaRow);
  set('statStrip',PROSE.stats); set('panel-position',PROSE.positionPanel);
  set('pendingNote',PROSE.confirmedPending); set('pricingBanner',PROSE.pricingBanner);
  set('excludedNote',PROSE.excludedNote); set('methodLegend',PROSE.methodLegend);
  set('inSub',PROSE.incomingSub); set('outSub',PROSE.outgoingSub);
  set('spendInV',PROSE.spendIn.v); set('spendInX',PROSE.spendIn.x);
  set('spendOutV',PROSE.spendOut.v); set('spendOutX',PROSE.spendOut.x);
  const dd=document.getElementById('discDate'); if(dd) dd.textContent=REPORT_META.asof;
})();
function srcLinksHTML(name){
  const keys = LINKMAP[name] || [];
  if(!keys.length) return '<span class="hubnote">No verified link held for this thread: traced source named in the row.</span>';
  return keys.map(k=>{const h=HUB[k];return `<a href="${h.u}" target="_blank" rel="noopener">${h.l} &#8599;</a>`;}).join('');
}

/* ---------- RENDER ---------- */
const lightColor = {g:'var(--green)', y:'var(--yellow)', o:'var(--orange)', r:'var(--crit)'};
const trendGlyph = {up:'⬆', flat:'➡', down:'⬇'};

function probCell(prob, light){
  if(light==='confirmed') return `<span class="confirmed">CONFIRMED</span>`;
  return `<div class="prob-wrap">
      <span class="ldot" style="background:${lightColor[light]};box-shadow:0 0 7px ${lightColor[light]}"></span>
      <div class="prob-bar"><div class="prob-fill" style="width:${prob}%;background:${lightColor[light]}"></div></div>
      <span class="prob-val" style="color:${lightColor[light]}">${prob}%</span>
    </div>`;
}
function tierBadge(t){ return `<span class="tier t${t}">T${t}</span>`; }
function trendCell(tr){
  const cls = tr==='up'?'up':tr==='down'?'down':'flat';
  return `<span class="trend ${cls}">${trendGlyph[tr]}</span>`;
}

function lightFor(v){ return v>50?'g':v>=30?'y':v>=15?'o':'r'; }
function rateRows(p){
  const tl = p.tlight || lightFor(p.truth);
  const hl = p.light  || lightFor(p.prob);
  return `<div class="rate">
      <div class="rate-row"><span class="rl">True?</span><span class="rate-dot" style="background:${lightColor[tl]}"></span><div class="rate-bar"><div class="rate-fill" style="width:${p.truth}%;background:${lightColor[tl]}"></div></div><span class="rate-val" style="color:${lightColor[tl]}">${p.truth}%</span></div>
      <div class="rate-row"><span class="rl">Happens?</span><span class="rate-dot" style="background:${lightColor[hl]}"></span><div class="rate-bar"><div class="rate-fill" style="width:${p.prob}%;background:${lightColor[hl]}"></div></div><span class="rate-val" style="color:${lightColor[hl]}">${p.prob}%</span></div>
    </div>`;
}

function renderTable(list, id){
  document.getElementById(id).innerHTML = list.map((p,i)=>`
    <tr class="rumour-row" data-row="${id}-${i}" tabindex="0" aria-expanded="false">
      <td class="cell-name" data-label="Player"><div class="pl-name">${p.name}${p.isNew?'<span class="new-tag">NEW</span>':''}<span class="src-toggle">SOURCES &#9656;</span></div><div class="pl-sub">${p.sub}</div></td>
      <td data-label="Club">${p.club}</td>
      <td data-label="Pos"><span class="pos">${p.pos}</span></td>
      <td class="fee" data-label="Reported">${p.report}</td>
      <td data-label="Source">${p.src} ${tierBadge(p.tier)}</td>
      <td class="fee" data-label="Est. fee">${p.fee}</td>
      <td data-label="Rating">${rateRows(p)}</td>
      <td data-label="Trend">${trendCell(p.trend)}</td>
      <td class="note" data-label="Analysis">${p.note}</td>
    </tr>
    <tr class="src-row" data-for="${id}-${i}"><td colspan="9"><div class="src-links"><span class="lbl">TRACED SOURCES</span>${srcLinksHTML(p.name)}</div></td></tr>`).join('');
  document.querySelectorAll(`#${id} tr.rumour-row`).forEach(row=>{
    const open = ()=>{
      const tgt = document.querySelector(`tr.src-row[data-for="${row.dataset.row}"]`);
      const isOpen = tgt.classList.toggle('open');
      row.classList.toggle('open', isOpen);
      row.setAttribute('aria-expanded', isOpen?'true':'false');
    };
    row.addEventListener('click', e=>{ if(e.target.closest('a')) return; open(); });
    row.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(); } });
  });
}
renderTable(INCOMING,'incoming');
renderTable(OUTGOING,'outgoing');

/* Overview ins/outs snapshot -- top-4 by Happens? probability, click-through to the full tab */
function ovCard(p, dir){
  const color = lightColor[p.light] || 'var(--muted)';
  const vs = dir==='in' ? `from ${p.club}` : `to ${p.club}`;
  return `<div class="ov-card" data-go="${dir}">
      <div class="ov-main">
        <div class="ov-name">${p.name}</div>
        <div class="ov-vs">${vs} &middot; ${p.pos}</div>
      </div>
      <div class="ov-side">
        <div class="ov-fee">${p.fee}</div>
        <div class="ov-pct" style="color:${color}">${p.prob}% likely</div>
      </div>
    </div>`;
}
function renderOverviewSnapshot(){
  const topIn = [...INCOMING].sort((a,b)=>b.prob-a.prob).slice(0,4);
  const topOut = [...OUTGOING].sort((a,b)=>b.prob-a.prob).slice(0,4);
  document.getElementById('ovIn').innerHTML = topIn.length ? topIn.map(p=>ovCard(p,'in')).join('') : '<div class="ov-empty">No live targets tracked yet.</div>';
  document.getElementById('ovOut').innerHTML = topOut.length ? topOut.map(p=>ovCard(p,'out')).join('') : '<div class="ov-empty">No exits tracked yet.</div>';
  document.querySelectorAll('.ov-card[data-go]').forEach(c=>c.addEventListener('click', ()=>{
    const btn = document.querySelector(`.tabbtn[data-go="${c.dataset.go}"]:not(.ov-viewall)`);
    if(btn) btn.click();
  }));
}
renderOverviewSnapshot();

/* confirmed ledger */
function renderLedger(list, id, emptyMsg){
  const el = document.getElementById(id);
  if(!list.length){ el.innerHTML = `<div class="empty">${emptyMsg}</div>`; return; }
  el.innerHTML = list.map(d=>`
    <div class="deal">
      <div class="dmeta">
        <div class="dname">${d.name}</div>
        <div class="dsub">${d.sub} · → ${d.to}</div>
        <div class="dnote">${d.note}</div>
        <span class="status ${d.status}">${d.statusTxt}</span>
      </div>
      <div class="dfee ${d.free?'free':''}">${d.fee}</div>
    </div>`).join('');
}
renderLedger(CONFIRMED_IN,'confirmedIn','Awaiting first confirmed signing.');
renderLedger(CONFIRMED_OUT,'confirmedOut','No confirmed departures yet.');
document.getElementById('cinCount').textContent = CONFIRMED_IN.length;
document.getElementById('coutCount').textContent = CONFIRMED_OUT.length;

/* watchlist with direction filter */
function renderWatchlist(filter){
  const rows = WATCHLIST.filter(w => filter==='all' || w.dir===filter);
  document.getElementById('watchlist').innerHTML = rows.map(w=>`
    <div class="wl-item ${w.dir}" data-wl="${w.name}">
      <div class="wmeta">
        <div class="wtop">
          <span class="wname">${w.name}</span>
          <span class="wclub">${w.dir==='in'?'← '+w.club:'→ '+w.club}</span>
          <span class="wl-dir ${w.dir}">${w.dir.toUpperCase()}</span>
        </div>
        <div class="wnote">${w.note}</div>
        <div class="src-links" style="display:none"><span class="lbl">TRACED SOURCE</span>${(()=>{const k=WL_LINKMAP[w.name];if(!k) return '<span class="hubnote">Source named above; no verified link held.</span>';const h=HUB[k];return `<a href="${h.u}" target="_blank" rel="noopener">${h.l} &#8599;</a>`;})()}</div>
      </div>
      <div class="wright">
        <span class="wpos">${w.pos}</span>
        <span class="wage">${w.age}</span>
        <span class="tier t${w.tier}" style="font-family:var(--mono);font-size:10px;padding:1px 5px;border-radius:4px">T${w.tier}</span>
      </div>
    </div>`).join('');
}
renderWatchlist('all');
document.getElementById('watchlist').addEventListener('click', e=>{
  if(e.target.closest('a')) return;
  const item = e.target.closest('.wl-item'); if(!item) return;
  const box = item.querySelector('.src-links');
  if(box) box.style.display = box.style.display==='none' ? 'flex' : 'none';
});
document.querySelectorAll('.wl-tab').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.wl-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderWatchlist(btn.dataset.f);
  });
});

/* Top 10 combined by probability (exclude confirmed=100 absolute, but include as flag) */
const combined = [
  ...INCOMING.map(p=>({...p, dir:'IN'})),
  ...OUTGOING.filter(p=>p.light!=='confirmed').map(p=>({...p, dir:'OUT'}))
].sort((a,b)=>b.prob-a.prob).slice(0,10);

document.getElementById('top10').innerHTML = combined.map((p,i)=>`
  <div class="rank">
    <span class="n">${String(i+1).padStart(2,'0')}</span>
    <span class="nm">${p.name} <small>${p.dir} · ${p.club}</small></span>
    <span class="pct" style="color:${lightColor[p.light]}">${p.prob}%</span>
  </div>`).join('');

function chips(arr){ return arr.map(c=>`<div class="chip"><span class="ar">${c.ar}</span><span>${c.t}</span></div>`).join(''); }
document.getElementById('movers').innerHTML =
  `<div style="font-family:var(--mono);font-size:10.5px;letter-spacing:1.5px;color:var(--green);margin:2px 0 4px">RISERS</div>${chips(RISERS)}
   <div style="font-family:var(--mono);font-size:10.5px;letter-spacing:1.5px;color:var(--crit);margin:12px 0 4px">FALLERS</div>${chips(FALLERS)}
   <div style="font-family:var(--mono);font-size:10.5px;letter-spacing:1.5px;color:var(--gold);margin:12px 0 4px">NEW ENTRIES</div>${chips(NEW)}
   <div style="font-family:var(--mono);font-size:10.5px;letter-spacing:1.5px;color:var(--muted);margin:12px 0 4px">IGNORE</div>${chips(IGNORE)}`;

document.getElementById('positions').innerHTML = POSITIONS.map(p=>`
  <div class="pos-need">
    <span>${p.p} <small style="color:var(--muted);font-family:var(--mono);font-size:11px">${p.x}</small></span>
    <span class="heatbar"><span class="heatfill" style="width:${p.w}%"></span></span>
  </div>`).join('');

/* Transfer window status: Open / Closed / Deadline Day, shared logic with every other page level. */
const PL_WINDOW_CLOSES = "2026-09-01T22:00:00Z";
function windowStatus(closesIso){
  const diffMs = new Date(closesIso).getTime() - Date.now();
  if(diffMs <= 0) return { state: 'closed', label: 'Closed', color: 'var(--muted)' };
  if(diffMs <= 86400000) return { state: 'deadline', label: 'Deadline Day', color: 'var(--crit)' };
  return { state: 'open', label: 'Open', color: 'var(--green)' };
}
(function(){
  const st = windowStatus(PL_WINDOW_CLOSES);
  document.getElementById('windowLabel').textContent = st.label;
  const dot = document.getElementById('windowDot');
  dot.style.background = st.color;
  dot.style.boxShadow = `0 0 10px ${st.color}`;
  dot.style.animation = st.state === 'deadline' ? 'pulse 1s infinite' : st.state === 'closed' ? 'none' : '';
})();

/* last-updated stamp + live freshness ticker (single source: REPORT_META.updated ISO) */
(function(){
  document.getElementById('kicker').textContent =
    `${REPORT_META.label} · Data as of ${REPORT_META.asof}`;
  document.getElementById('asof').textContent = REPORT_META.asof.toUpperCase();
  const foot = document.getElementById('updatedFoot');
  if(foot) foot.textContent = `Live transfer tracker - updated ${REPORT_META.asof}.`;

  const t0 = new Date(REPORT_META.updated).getTime();
  const stamp = document.getElementById('stamp');
  function fmt(ms){
    if(isNaN(ms)) return ['CURRENT','var(--muted)'];
    if(ms < 0)   return ['POST-DATED','var(--muted)'];
    const s=Math.floor(ms/1000), m=Math.floor(s/60), h=Math.floor(m/60), d=Math.floor(h/24);
    let txt;
    if(s < 60)      txt = s+'s';
    else if(m < 60) txt = m+'m '+(s%60)+'s';
    else if(h < 24) txt = h+'h '+(m%60)+'m';
    else            txt = d+'d '+(h%24)+'h';
    const col = h<1 ? 'var(--green)' : d<1 ? 'var(--yellow)' : d<3 ? 'var(--orange)' : 'var(--crit)';
    return ['UPDATED '+txt+' AGO', col];
  }
  function tick(){
    const [txt,col] = fmt(Date.now() - t0);
    stamp.innerHTML =
      `<span class="seg dt">REFRESHED&nbsp;<b>${REPORT_META.asof}</b></span>`+
      `<span class="seg fresh" style="color:${col}"><span class="fdot" style="background:${col};box-shadow:0 0 8px ${col}"></span>${txt}</span>`;
  }
  tick(); setInterval(tick, 1000);
})();

/* ===== TAB + PAGER ENGINE (scroll-reduction protocol) =====
   Names chosen to avoid window globals (top, name, status, history etc.). */
(function(){
  const tabOrder = ['overview','confirmed','in','out','index','briefing','position','method'];
  const tabBtns  = Array.from(document.querySelectorAll('.tabbtn'));
  const meterEl  = document.getElementById('pgMeter');
  const prevBtn  = document.getElementById('pgPrev');
  const nextBtn  = document.getElementById('pgNext');
  let curIdx = 0;

  meterEl.innerHTML = tabOrder.map((t,i)=>`<span class="pg-dot${i===0?' on':''}" data-i="${i}" title="${t}"></span>`).join('');
  const dots = Array.from(meterEl.querySelectorAll('.pg-dot'));

  function showTab(idx, push){
    if(idx<0 || idx>=tabOrder.length) return;
    curIdx = idx;
    const key = tabOrder[idx];
    document.querySelectorAll('.tabpanel').forEach(p=>p.classList.toggle('active', p.id==='panel-'+key));
    tabBtns.forEach(b=>{
      const on = b.dataset.go===key;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on?'true':'false');
    });
    dots.forEach((d,i)=>d.classList.toggle('on', i===idx));
    prevBtn.disabled = idx===0;
    nextBtn.disabled = idx===tabOrder.length-1;
    if(push!==false){ try{ window.history.replaceState(null,'','#tab-'+key); }catch(e){} }
    window.scrollTo({top:0, behavior:'instant' in window ? 'instant' : 'auto'});
  }

  tabBtns.forEach(b=>b.addEventListener('click', ()=>showTab(tabOrder.indexOf(b.dataset.go))));
  dots.forEach(d=>d.addEventListener('click', ()=>showTab(parseInt(d.dataset.i,10))));
  prevBtn.addEventListener('click', ()=>showTab(curIdx-1));
  nextBtn.addEventListener('click', ()=>showTab(curIdx+1));
  document.addEventListener('keydown', e=>{
    if(e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if(e.key==='ArrowRight') showTab(curIdx+1);
    if(e.key==='ArrowLeft')  showTab(curIdx-1);
  });

  const h = (window.location.hash||'').replace('#tab-','');
  const start = tabOrder.indexOf(h);
  showTab(start>=0 ? start : 0, false);
})();
