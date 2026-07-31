# Premier League Transfer Intelligence Framework
## Claude Project Knowledge Base

Version: 1.4 (adds the mandatory Editorial & Style Rules: British English, no em dashes, journalistic non-AI tone, and an explicit sceptic's note requirement for thinly-sourced or low-quality-sourced rumours)
Purpose: Build and maintain a comprehensive transfer rumour intelligence engine covering all Premier League clubs.

---

# Objective

Aggregate, score, rank, and monitor transfer rumours across all Premier League clubs using a weighted source model.

The goal is NOT to simply collect rumours.

The goal is to:

- Identify emerging transfer stories before competitors
- Score credibility
- Track momentum over time
- Measure probability of completion
- Surface genuine developments while filtering noise

---

# Source Reliability Model

## Tier 1: Elite Sources (90-100%)

When these sources publish a story, transfer probability should increase significantly.

### Global Sources

David Ornstein
https://www.nytimes.com/athletic/author/david-ornstein/

Fabrizio Romano
https://x.com/FabrizioRomano

Ben Jacobs
https://x.com/JacobsBen

Florian Plettenberg
https://x.com/Plettigoal

Matteo Moretto
https://x.com/MatteMoretto

Sacha Tavolieri
https://x.com/sachatavolieri

Gianluca Di Marzio
https://gianlucadimarzio.com

### Additional Verification Sources

BBC Sport
https://www.bbc.com/sport/football

Sky Sports Transfer Centre
https://www.skysports.com/transfer-centre

The Athletic
https://www.nytimes.com/athletic/football/

---

# Tier 1B: Continental & Foreign Press (mandatory sweep)

Premier League targets are routinely reported FIRST in the selling club's domestic press, days or weeks before any English outlet picks the story up (e.g. Alajbegovic broke via Italian and Balkan press; Troilo via ParmaToday and Tuttomercatoweb; Mingueza and the Mayenda-to-Porto line via Moretto/Relevo). Every refresh MUST include a foreign-press sweep, not just English sources.

## Mandatory sweep rules

1. For EVERY linked player, search the local press of the player's CURRENT club (the selling-club beat) in the native language, including the player's name alone as a query.
2. For every club profile, sweep the markets that club habitually buys from (defined in each club .md) at least once per refresh.
3. A local beat paper's effective tier RISES within its specialism (ParmaToday on a Parma player, Diario de Navarra on an Osasuna player, Faro de Vigo on a Celta player).
4. Trace aggregator and translation sites (Sport Witness, Football Italia, Get Football, TransferFeed, NewsNow) back to the named original outlet and link the original, never the aggregator.
5. National-team windows (World Cup, Euros, AFCON, Copa America) spike foreign-press coverage: increase sweep frequency for squads at tournaments.
6. Tier placement below is the BASELINE; a reporter rises a tier within their proven specialism (club beat on their own club, regional desk on cross-border links from their league).

## Global multi-market reporters (Tier 1-2, sit above national desks)

Fabrizio Romano (T1) https://x.com/FabrizioRomano
David Ornstein (T1, The Athletic) https://x.com/David_Ornstein
Matteo Moretto (T2, Relevo, Spain/Italy/Germany axis) https://x.com/MatteMoretto
Florian Plettenberg (T2, Sky DE) https://x.com/Plettigoal
Gianluca Di Marzio (T2, Sky Italia) https://gianlucadimarzio.com
Sacha Tavolieri (T2, Belgium/France) https://x.com/sachatavolieri
Nicolo Schira (T2, Italy/free agents) https://x.com/NicoSchira
Rudy Galetti (T3, multi-market) https://x.com/RudyGaletti
Ekrem Konur (T3, multi-market discovery) https://x.com/Ekremkonur
Ben Jacobs (T2, CBS, Gulf/PL) https://x.com/JacobsBen
Graeme Bailey (T3, TBR/HITC) https://x.com/GraemeBailey

## England (national, non-club-specific)

The Athletic (T1) https://www.nytimes.com/athletic/football/
BBC Sport / Simon Stone (T1) https://www.bbc.com/sport/football
Sky Sports / Keith Downie, Lyall Thomas (T1-2) https://www.skysports.com/transfer-centre
The Times / Paul Joyce (T1) https://www.thetimes.com/sport/football
Sami Mokbel (T2, BBC) https://x.com/SamiMokbel81_DM
Pete O'Rourke (T3, Football Insider/TEAMtalk) https://x.com/SunSport_Pete
TEAMtalk (T3) https://www.teamtalk.com
Football Insider (T3) https://www.footballinsider247.com
SportsBoom (T3, original reporting) https://www.sportsboom.co.uk/football/transfer-news/

## Scotland (Celtic, Rangers, cross-border)

Daily Record / Scott Burns, Gavin Berry (T2) https://www.dailyrecord.co.uk/sport/football
The Scottish Sun (T3) https://www.thescottishsun.co.uk/sport/
Fraser Fletcher (T3) https://x.com/Fraser_Fletcher
Glasgow World (T3) https://www.glasgowworld.com/sport/football
The Celtic Star / Rangers Review (T3, club beats)

## Italy

Gianluca Di Marzio (Sky Italia) (T2) https://gianlucadimarzio.com
Nicolo Schira (T2) https://x.com/NicoSchira
Fabrizio Romano (T1, Italian desk) https://x.com/FabrizioRomano
TuttoMercatoWeb (T3) https://www.tuttomercatoweb.com
Calciomercato.com (T3) https://www.calciomercato.com
Corriere dello Sport (T3) https://www.corrieredellosport.it
La Gazzetta dello Sport (T3) https://www.gazzetta.it
Tuttosport (T3) https://www.tuttosport.com
Local beats: ParmaToday/Parmalive (Parma), Il Mattino (Napoli), Tuttosport (Turin/Juve), Il Romanista (Roma), TuttoAtalanta (Atalanta), Calcio Como (Como)

## Germany

Florian Plettenberg (Sky DE) (T2) https://x.com/Plettigoal
Philipp Hinze (Sky DE) (T3) https://x.com/philipphinze24
Christian Falk (Bild/Sport Bild) (T2) https://x.com/cfbayern
Bild (T3) https://www.bild.de/sport/fussball/
Kicker (T3) https://www.kicker.de
Sky Sport Germany (T2) https://www.skysport.de

## France

L'Equipe (T2) https://www.lequipe.fr/Football/
RMC Sport (T2) https://rmcsport.bfmtv.com
Foot Mercato / Santi Aouna (T2-3) https://www.footmercato.net
Santi Aouna (T3) https://x.com/Santi_J_FM
Sebastien Denis (T3, RMC) https://x.com/sebastiendenis
Maxime Buchot (T3, Nantes beat) https://x.com/MaximeBuchot
Get French Football News (T3, translation/original) https://www.getfootballnewsfrance.com
Local beats: Ouest-France (Rennes/Nantes), La Voix du Nord (Lille/Lens), Nice-Matin (Monaco/Nice), Le Progres (Lyon)

## Spain

Relevo / Matteo Moretto (T2) https://www.relevo.com/futbol/
Marca (T3) https://www.marca.com
Diario AS (T3) https://as.com
Mundo Deportivo / Sport (T3, Barcelona) https://www.mundodeportivo.com
Fabrizio Romano (T1, Spain desk)
Local beats: Diario de Navarra (Osasuna), Faro de Vigo (Celta), Estadio Deportivo (Sevilla), Superdeporte (Valencia)

## Portugal

A Bola (T3) https://www.abola.pt
Record (T3) https://www.record.pt
O Jogo (T3) https://www.ojogo.pt
Maisfutebol (T3) https://maisfutebol.iol.pt
Pedro Sepulveda (T2-3, SIC) https://x.com/pedrosepulveda
Bruno Andrade (T3) https://x.com/Bruno__Andrade_

## Netherlands & Belgium

Voetbal International (T2) https://www.vi.nl
De Telegraaf / Mike Verweij (T2) https://www.telegraaf.nl/sport
Rik Elfrink (T3, PSV/ED) https://x.com/RikElfrink
Voetbalnieuws (T3) https://www.voetbalnieuws.nl
Sacha Tavolieri (T2, Belgium) https://x.com/sachatavolieri
Het Laatste Nieuws (T3) https://www.hln.be/sport
Het Nieuwsblad / Sudinfo (T3, Belgium)

## Turkey

Yagiz Sabuncuoglu (T2) https://x.com/yagosabuncuoglu
Fanatik (T3) https://www.fanatik.com.tr
A Spor / Sabah (T3)
Ekrem Konur (T3, multi-market but Turkey-strong) https://x.com/Ekremkonur

## Switzerland & Austria (Salzburg, Swiss/Austrian Bundesliga)

Blick (T3, Switzerland) https://www.blick.ch/sport/
Sky Sport Austria (T3) https://www.skysportaustria.at
Salzburger Nachrichten (T3, RB Salzburg beat) https://www.sn.at

## Scandinavia (Eredivisie/Nordic feeders)

Tipsbladet (T3, Denmark) https://www.tipsbladet.dk
VG (T3, Norway) https://www.vg.no/sport/fotball
Fotbollskanalen (T3, Sweden) https://www.fotbollskanalen.se

## Balkans

SportSport.ba (T3, Bosnia) https://sportsport.ba
B92 / Mozzart Sport (T3, Serbia) https://www.b92.net/sport
Sportske novosti (T3, Croatia) https://sportske.jutarnji.hr

## South America

Gaston Edul (T2, TyC, Argentina) https://x.com/gastonedul
Cesar Luis Merlo (T2, Argentina) https://x.com/CLMerlo
TyC Sports (T3, Argentina) https://www.tycsports.com
Ole (T3, Argentina) https://www.ole.com.ar
Jorge Nicola (T3, Brazil) https://x.com/jorgenicola
Vene Casagrande (T3, Brazil) https://x.com/venecasagrande
Globo Esporte (T3, Brazil) https://ge.globo.com
UOL Esporte / ESPN Brasil (T3, Brazil)

## Africa

Africafoot (T3, francophone) https://www.africafoot.com
RMC Sport Afrique (T3)

---

# Tier 2: Club Specialists (75-90%)

These sources often break stories before national journalists.

---

## Arsenal

Charles Watts
https://x.com/charles_watts

Arseblog News
https://arseblog.news

Football London Arsenal
https://www.football.london/arsenal-fc/

---

## Aston Villa

John Percy
https://x.com/JPercyTelegraph

Villa Report
https://x.com/villareport

Birmingham Live Villa
https://www.birminghammail.co.uk/all-about/aston-villa-fc

---

## Bournemouth

Mark McAdam
https://x.com/markmcadamtv

Bournemouth Echo
https://www.bournemouthecho.co.uk/sport/afcbournemouth/

---

## Brentford

Jay Harris
https://x.com/JayHarris85

Beesotted
https://beesotted.com

---

## Brighton

Andy Naylor
https://x.com/AndyNaylorBHAFC

Sussex World Brighton
https://www.sussexworld.co.uk/sport/football/brighton-and-hove-albion

---

## Burnley

Andy Jones
https://x.com/adjones_journo

Lancashire Telegraph Burnley
https://www.lancashiretelegraph.co.uk/sport/football/burnleyfc/

---

## Chelsea

Matt Law
https://x.com/Matt_Law_DT

Nizaar Kinsella
https://x.com/NizaarKinsella

Simon Phillips
https://x.com/siphillipssport

---

## Crystal Palace

Matt Woosnam
https://x.com/MattWoosie

The Palace Way
https://thepalaceway.com

---

## Everton

Paul Joyce
https://x.com/_pauljoyce

Joe Thomas
https://x.com/JoeThomasSport

Liverpool Echo Everton
https://www.liverpoolecho.co.uk/all-about/everton-fc

---

## Fulham

Peter Rutzler
https://x.com/peterrutzler

Hammy End
https://hammyend.com

---

## Leeds United

Phil Hay
https://x.com/PhilHay_

Leeds Live
https://www.leeds-live.co.uk/sport/leeds-united/

---

## Liverpool

Paul Joyce
https://x.com/_pauljoyce

James Pearce
https://x.com/JamesPearceLFC

David Lynch
https://x.com/dmlynchlfc

---

## Manchester City

Sam Lee
https://x.com/SamLee

Jack Gaughan
https://x.com/Jack_Gaughan

Simon Bajkowski
https://x.com/spbajko

---

## Manchester United

Laurie Whitwell
https://x.com/lauriewhitwell

Samuel Luckhurst
https://x.com/samuelluckhurst

Simon Stone
https://x.com/sistoney67

---

## Newcastle United

Chris Waugh
https://x.com/ChrisDHWaugh

Craig Hope
https://x.com/CraigHope_DM

Chronicle Live
https://www.chroniclelive.co.uk/all-about/newcastle-united-fc

---

## Nottingham Forest

Paul Taylor
https://x.com/nottmtails

Nottinghamshire Live
https://www.nottinghampost.com/all-about/nottingham-forest-fc

---

## Sunderland

Sunderland Echo
https://www.sunderlandecho.com/sport/football/sunderland-afc

Roker Report
https://rokerreport.sbnation.com

The Roar Podcast
https://x.com/theroarpod

The Northern Echo (SAFC beat)
https://www.thenorthernecho.co.uk/sport/

Foreign-press sweep (mandatory, per Tier 1B): Italy (Di Marzio, TuttoMercatoWeb, ParmaToday and other Serie A local beats), France/Belgium (L'Equipe, RMC, Foot Mercato, Tavolieri: the Ghisolfi network), Netherlands (Voetbal International, De Telegraaf), Germany (Bild, Kicker, Plettenberg), Spain (Marca, AS, Diario de Navarra and other La Liga local beats), Balkans (SportSport.ba, B92), South America (TyC, Ole). Reason: Sunderland's recruitment model buys from these markets, so their press breaks Sunderland links first (Alajbegovic, Troilo, Titraoui, Geertruida all did).

---

## Tottenham

Alasdair Gold
https://x.com/AlasdairGold

Dan Kilpatrick
https://x.com/Dan_KP

Spurs Web
https://www.spurs-web.com

---

## West Ham

ExWHUEmployee
https://x.com/ExWHUEmployee

Jacob Steinberg
https://x.com/JacobSteinberg

Claret and Hugh
https://www.claretandhugh.info

---

## Wolves

Nathan Judah
https://x.com/NathanJudah

Molineux News
https://www.molineux.news

---

# Tier 3: Discovery Sources (40-75%)

Useful for identifying stories before confirmation.

Transfermarkt
https://www.transfermarkt.com

NewsNow Football
https://www.newsnow.co.uk/h/Sport/Football

Football Transfers
https://www.footballtransfers.com

Sport Witness
https://sportwitness.co.uk

Reddit Club Communities

Official Club Forums

Club Podcasts

Fan Media

---

# Tier 4: Low Reliability Sources (0-40%)

Monitor only for trend detection.

The Sun

Daily Mirror

CaughtOffside

90min

Goal.com Rumour Pages

Anonymous ITKs

Fan Accounts

Telegram Channels

TikTok Transfer Accounts

---

# Transfer Probability Scoring Model

## 100%

Official Club Announcement

Medical Completed

Registration Confirmed

---

## 95%

David Ornstein

Romano "Here We Go"

Club Confirmation Pending Announcement

---

## 85%

Multiple Tier 1 Sources

Club Specialist + Romano

Club Specialist + Ornstein

---

## 75%

Single Trusted Club Correspondent

Multiple Club Specialists

---

## 65%

Several Tier 2 Sources

One Tier 2 Source Plus Supporting Evidence

---

## 50%

Emerging Story

Multiple Fan Sources

Local Media Only

---

## 30%

Single Fan Source

Unverified Reports

---

## 10%

Anonymous ITK

No Supporting Evidence

---

# Rumour Momentum Model

Track changes over time.

Variables:

Source Score

Volume Score

Recency Score

Cross-Source Confirmation

Official Signals

Agent Activity

Player Social Media Activity

Journalist Escalation

Club Correspondent Escalation

---

# Keywords That Increase Probability

Bid Submitted

Improved Offer

Negotiations Advanced

Personal Terms Agreed

Medical Scheduled

Medical Booked

Deal Agreed

Documents Signed

Here We Go

Agreement Reached

Travel Arranged

---

# Keywords That Decrease Probability

Monitoring

Interested

Considering

Tracking

Admire

Long-Term Target

Watching

Linked With

Could Move

Potential Option

---

# X Search Queries

For every club run:

"#ARSENAL transfer"

"Arsenal bid"

"Arsenal personal terms"

"Arsenal medical"

"Arsenal negotiations"

Repeat for every Premier League club.

---

# Reddit Monitoring

Monitor:

r/soccer

r/PremierLeague

Club-specific subreddits

Track:

Breaking rumours

Local journalist references

Fan sightings

Training ground reports

Airport sightings

Medical sightings

---

# Official Sources

Every club should have:

Official Website

Official X Account

Official YouTube Channel

Official Instagram

Official Press Conferences

Official Squad Updates

---

# Daily Monitoring Schedule

Every 15 Minutes

- Romano
- Ornstein
- Club Correspondents

Every Hour

- NewsNow
- Transfermarkt
- Reddit

Every 4 Hours

- Club Media
- Podcasts
- Fan Media

---

# Output Format

For every player:

Player:
Current Club:
Destination Club:
Probability:
Trend:
Source Quality:
Latest Development:
Supporting Sources:
Contradictory Sources:
Estimated Completion Window:

---

# Confirmed-Transfer Gating Rule (mandatory, added v1.3)

FootballTransfers.com (https://www.footballtransfers.com/en) is the **gating source of truth for the CONFIRMED_IN / CONFIRMED_OUT tables** on every club page, on top of (not instead of) the normal Tier 1 official-confirmation rules already in this framework.

**On every refresh:**

1. Check FootballTransfers.com for the club's completed/official transfers this window before touching the CONFIRMED_IN / CONFIRMED_OUT tables.
2. A player is only added to (or kept in) CONFIRMED_IN / CONFIRMED_OUT once they appear there as done. Do not add a player to a confirmed table on the strength of a Tier 1 "here we go" or club-statement alone if FootballTransfers.com has not yet listed it, hold it in INCOMING/OUTGOING at a high probability instead (this is a **display gate**, not a downgrade of the underlying story's credibility) and promote it the moment FootballTransfers.com catches up. In practice, once Sky Sports/Romano/Ornstein/the club itself have confirmed a deal, FootballTransfers.com typically lists it within the same news cycle, so this gate is rarely a long hold.
3. As soon as a player is confirmed, **remove them entirely from INCOMING/OUTGOING and WATCHLIST** in the same refresh, a confirmed player should appear exactly once, in the relevant CONFIRMED table, never duplicated in a rumour section.
4. Do not use FootballTransfers.com as a rumour source in its own right for anything short of a completed deal (it stays Tier 3 discovery-only for pre-confirmation stories, per the Tier 3 list above), its role here is specifically the confirmed-deals gate, not a rumour feed.
5. This rule applies going forward on every future refresh cycle for every club, not as a one-off cleanup.

---

# Editorial & Style Rules (mandatory, added v1.4)

These rules govern how every rumour, headline, lede and note is written, on club pages and on the aggregated nation/league/global landing pages. They apply to every future refresh and every new piece of copy, not as a one-off cleanup.

1. **British English throughout.** Spellings, terminology and idiom follow British English (e.g. "favour" not "favor", "boots" not "cleats", "match-fit" not "healthy"), matching a UK football desk, not an American one.
2. **Never use an em dash.** No "—" character anywhere in generated copy, headlines, notes, ledes or captions. Use a comma, a colon, a full stop and a new sentence, or a plain hyphen with spaces ("word - word") where a parenthetical aside is genuinely needed. This applies to every field, including `note`, `heroLede`, `summary` and any prose field in `PROSE`.
3. **Write like a transfer journalist, not like an AI.** Short, direct sentences. Lead with the news, not with throat-clearing ("It is worth noting that...", "In terms of..."). No hedge-stacking, no repeating the same qualifier twice in one sentence, no generic filler ("this is a developing story" without saying what actually developed). Vary sentence length and structure the way a beat reporter would, not in a uniform templated cadence.
4. **Always give an editorial read on thin or poor-quality sourcing.** When a rumour rests on a single source, or on a Tier 3/4 outlet only (aggregator feeds, anonymous ITKs, fan accounts, CaughtOffside/90min-style clickbait), the `note` field must say so plainly and give a view on how seriously to take it, not just restate the claim neutrally. Do not present a one-source Tier 4 rumour with the same flat, neutral tone as a Romano "here we go". Skew the language toward scepticism when the sourcing is weak; skew it toward confidence when multiple Tier 1-2 sources corroborate. This is an explicit instruction to have and state a view, not to simply log what was reported.

---

# Rules

Never increase probability solely because multiple low-quality sources repeat the same story.

Weight source quality more heavily than source volume.

Recent reports override older reports.

Club correspondents generally outrank national newspapers for club-specific information.

Official confirmation overrides everything.

A rumour should not exceed 85% probability without Tier 1 confirmation.

A rumour should not exceed 95% probability without official signals.

Always explain WHY a probability changed.

Always provide supporting evidence.

Always provide contradictory evidence if available.

Never treat aggregators as primary sources.

Always trace stories back to the original reporter.

Never rely on English-language outlets alone: run the Tier 1B foreign-press sweep on every refresh, and search the selling club's local press for every linked player.

A player only enters CONFIRMED_IN/CONFIRMED_OUT once FootballTransfers.com lists the deal as done (see Confirmed-Transfer Gating Rule above); the instant that happens, remove them from every rumour table in the same refresh.

Write every piece of copy per the Editorial & Style Rules above: British English, no em dashes, journalistic (not AI-sounding) tone, and an explicit sceptic's note on thinly-sourced or low-quality-sourced rumours.

---

# Changelog

## v1.4

- Added the Editorial & Style Rules section: British English throughout, a hard ban on the em dash character in any generated copy, a journalistic (not AI-sounding) writing standard, and a mandatory requirement to give an explicit editorial read (leaning sceptical) whenever a rumour is thinly sourced or sourced from a low-quality outlet. Applies to every future refresh across club pages and the aggregated nation/league/global landing pages.
- As part of applying this rule for the first time, swept existing club prose for the em dash character and normalised it to plain punctuation.

## v1.3

- Added the Confirmed-Transfer Gating Rule: FootballTransfers.com (https://www.footballtransfers.com/en) is now the mandatory gate for adding a player to CONFIRMED_IN/CONFIRMED_OUT on every club page, and the mandatory trigger for removing that player from INCOMING/OUTGOING/WATCHLIST in the same refresh, so no player appears both as confirmed and as an open rumour at once. Applies to every future refresh, not a one-off pass.

## v1.2

- Reorganised Tier 1B into named-reporter desks for every major footballing nation, with baseline tiers shown and the "tier rises within specialism" rule made explicit.
- Added nations not previously covered: Scotland (Celtic/Rangers and cross-border), Switzerland & Austria (RB Salzburg and the Swiss/Austrian leagues), Scandinavia (Eredivisie/Nordic feeders), and an Africa francophone line.
- Added a Global multi-market reporters block (Romano, Ornstein, Moretto, Plettenberg, Di Marzio, Tavolieri, Schira, Galetti, Konur, Jacobs, Bailey) so cross-border links route to the right desk.
- Documented reporters and outlets already in live dashboard use that were undocumented: Philipp Hinze, Maxime Buchot, Santi Aouna, Pete O'Rourke, Fraser Fletcher, Christian Falk, Mike Verweij, Rik Elfrink, Gaston Edul, Cesar Luis Merlo, Pedro Sepulveda, plus Calciomercato.com, Relevo, Get French Football News, SportsBoom, Maisfutebol, Faro de Vigo, Parmalive, TuttoAtalanta and Calcio Como.
- Note on the Moretto axis: Moretto (Relevo) is Tier 2 and was already in the framework; the late-June Mingueza (Celta, free agent) and Mayenda-to-Porto lines were fresh reports, not source gaps. A missing player is a completeness-sweep issue, not a missing source.

## v1.1

- Added Tier 1B continental and foreign-press mandatory sweep.
