/* ============================================================
   MERCATO IQ · CLUB DATA · AJ AUXERRE · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "AJ Auxerre",
  mono: "AJA",
  slug: "aj-auxerre",
  primary: "#003D7C",
  primaryBright: "#4E8FDE",
  primaryDeep: "#00203F",
  primaryRgb: "0,61,124",
  breadcrumb: ["France", "Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Will Still (appointed 4 Jun 2026, succeeding Christophe Pélissier despite Pélissier securing back-to-back Ligue 1 survivals)",
  dof: "David Wantier (Sporting Director)",
  europe: "None (2026/27)",
  finish: "15th Ligue 1 (2025/26)",
  owner: "James Zhou",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/auxerre/"],
  queries: ["AJ Auxerre transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · AJ Auxerre"
};

const CONFIRMED_IN = [
  {name:"Sekou Fofana", sub:"Franco-Ivorian left-back signed from Lausanne-Sport", club:"Lausanne-Sport", pos:"LB", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Signed a four-year deal after 50 appearances for Lausanne since 2021."},
  {name:"Romain Faivre", sub:"Loan spell renewed for a second consecutive season", club:"AFC Bournemouth", pos:"CAM", fee:"Loan, no purchase option", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Bournemouth and Auxerre agreed a fresh season-long loan without a buy option, extending Faivre's stay after his 2025-26 loan spell."},
  {name:"Arthur Piedfort", sub:"21 · Belgium · CM", club:"KVC Westerlo", pos:"CM", fee:"€5.5m", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed by Auxerre, who handed the Belgian midfielder a four-year deal. Foot Mercato lists him as the club's biggest outlay of the window."},
  {name:"Paul Nardi", sub:"· France · GK", club:"Queens Park Rangers", pos:"Goalkeeper", fee:"Free", free:true, status:"done", statusTxt:"DONE, OFFICIAL", note:"Experienced goalkeeper joins on free transfer from QPR"},
  {name:"Rémy Labeau-Lascary", sub:"· France · LB", club:"AS Saint-Étienne", pos:"Left-back", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Left-back formed at Saint-Étienne joins Auxerre"}
];

const CONFIRMED_OUT = [
  {name:"Lassine Sinayoko", sub:"26 · ST · Mali", club:"Paris FC", pos:"ST", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Departed 21 Jul 2026 on a three-year deal, after skipping training to force the move through."}
];

const INCOMING = [
  {name:"Tim Meyer", sub:"Swiss revelation targeted as defensive midfield reinforcement", club:"Grasshopper Zurich", pos:"CDM", report:"Auxerre have moved into the acquisition phase for Tim Meyer", src:"TOP Mercato", tier:3, fee:"", truth:50, prob:50, light:"y", trend:"up", note:"Limited detail available", lastSeen:"2026-08-08T18:06:11Z", baseProb:50},
  {name:"Paul Nardi", sub:"Goalkeeper", club:"Free agent", pos:"GK", report:"Experienced goalkeeper Paul Nardi joins Auxerre from Queens Park Rangers on a free transfer", src:"L'Équipe", tier:2, fee:"Free", truth:95, prob:95, light:"g", trend:"flat", note:"Free agent signing confirmed by official announcement", lastSeen:"2026-08-08T07:40:33Z", baseProb:95},
  {name:"Rémy Labeau-Lascary", sub:"Defender", club:"Saint-Étienne", pos:"LB", report:"Left-back formed at Saint-Étienne, Auxerre in advanced negotiations to recruit him", src:"Foot Mercato", tier:3, fee:"", truth:85, prob:80, light:"g", trend:"flat", note:"Advanced negotiations reported; official announcement expected", lastSeen:"2026-08-08T07:40:33Z", baseProb:80}
];

const OUTGOING = [
  {name:"Kevin Danois", sub:"22 · · ", club:"AJ Auxerre", pos:"CM", report:"Two Premier League clubs are watching the 22-year-old", src:"Les Transferts", tier:3, fee:"", truth:50, prob:40, light:"y", trend:"up", note:"Attracting Premier League interest but no advanced talks reported", lastSeen:"2026-08-08T18:06:11Z", baseProb:40},
  {name:"Lassine Sinayoko", sub:"Forward", club:"Paris FC", pos:"FW", report:"Deal agreed with Paris FC; Lassine Sinayoko officially departed Auxerre and remains in Ligue 1", src:"Foot Mercato / ici.fr", tier:2, fee:"", truth:95, prob:95, light:"g", trend:"flat", note:"Transfer completed to Paris FC", lastSeen:"2026-08-08T07:40:33Z", baseProb:95}
];
const DEAD = [
  {name:"Mathys Detourbet", club:"AJ Auxerre", pos:"W", dir:"out", age:"~7mo", tier:2, note:"Manchester City have been credited with long-standing interest in the teenage winger.", deadReason:"completed move to as-monaco, manchester-city", deadAt:"2026-08-06T10:24:32Z"}
];

const RISERS = [];

const FALLERS = [
  {ar:"⬇", t:"<b>Sinayoko exits for Paris FC</b>: forced move completed after the striker skipped training to push the exit through."}
];

const NEW = [
  {ar:"✦", t:"A surprise change in the dugout: <b>Will Still</b> replaces Christophe Pélissier, who had just delivered a second consecutive Ligue 1 survival, as owner James Zhou opts for a change in direction."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "gffn-auxerre": {l:"Get French Football News · Auxerre", u:"https://www.getfootballnewsfrance.com/tag/auxerre/"},
  tOPMercatoTimMeyer: {l:"TOP Mercato", u:"https://www.msn.com/fr-fr/sport/football/mercato-auxerre-passe-%C3%A0-l-action-pour-la-r%C3%A9v%C3%A9lation-suisse-tim-meyer/ar-AA29bvFJ"},
  lesTransfertsKevinDanois: {l:"Les Transferts", u:"https://www.les-transferts.com/rumeurs-transferts/aj-auxerre-deux-clubs-anglais-viseraient-kevin-danois/"},
  lquipeSekouFofana: {l:"L'Équipe", u:"https://www.lequipe.fr/Football/Actualites/Transferts-venant-de-lausanne-sport-le-lateral-gauche-sekou-fofana-va-signer-a-auxerre/1702581"},
  lquipeRomainFaivre: {l:"L'Équipe", u:"https://www.lequipe.fr/Football/Actualites/Mercato-romain-faivre-repart-sur-un-pret-avec-l-aj-auxerre/1700937"},
  maliactuLassineSinayoko: {l:"Maliactu", u:"https://maliactu.net/mercato-lassine-sinayoko-quitte-auxerre-et-sengage-pour-trois-ans-avec-le-paris-fc/"},
  footMercatoArthurPiedfort: {l:"Foot Mercato", u:"https://www.footmercato.net/club/association-jeunesse-auxerroise/tableau/"},
  lquipePaulNardi: {l:"L'Équipe", u:"https://news.google.com/rss/articles/CBMi8wFBVV95cUxPZlJXeURJLThYOUZZNDlfUFhOMF9mcnJvVGNKYmpEZ1l6Q1Z3UUtKU192ZEpmdkNPWkF0YU1yV3RuUmhlTU91aEI2ODc2U2JrZnlfbFExMEg1Si15ZjBEeGY2bXRLOW5ad1pFN2t5U0RIdFlneXV5c1J4SExMRTloSmNZMTUtcEFLRWFSU2pyZzFCMXpqS0FVZDk5S0xmZW9oUi1mUlN2bHVEVHBHTlJMN25KdFMwRDhTYnNRdHhVckEwTTFRWWk2M1BEZHRWWjRtMkhOVEdyZkFBcTJBZWU3LVNQN0tjeDhVdUdSRy1PZTU0a0E?oc=5"},
  footMercatoRmyLabeauLascary: {l:"Foot Mercato", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxNLXJvUnl3ekEyU0NKZ3puY2pnU295VGtack9RLUVNaVZVOVVYWHhOMDR5SVJMZjh0c2xtMGpaYUk5Uk83cjh2cXNweDFBZ2ROd1YxdUItVHBFNFB1WlpkR0hzZ1YyYzFCdm5Lbk03UjladWxueXJMSVU1QW94bWsxeUhkeXcxR2E4UG5DY0U4a2lueGhhang4?oc=5"},
  footMercatoLassineSinayoko: {l:"Foot Mercato", u:"https://news.google.com/rss/articles/CBMipgFBVV95cUxPT3FaVlNOMWpxX2ZlaHUxSk1FZEluc0pDUG51TG5ULXdhSVJYREMwNDY3cGVjdmI5dmJaQ0ctdlBwa2R5SC1sVmN5a2JnTW9Db1BHbFRZVjN4TERGamQ1TkVIcDgtY0lSZVh3ZFJIWkNmbW9yMkVxZkE2WGpubFItMmlsbkppSGI0YjdUN0JsVVRZbXowMFVKb2xGRVVjY2tYdDZ4dWxR?oc=5"},
  icifrLassineSinayoko: {l:"ici.fr", u:"https://news.google.com/rss/articles/CBMi4wFBVV95cUxQSTUyLUIzY2g0bnpGcWJxSTAxaUxnajRTV1o2ZGVsb1BRQkE4ZFJ6VjhWbzcwaS14MDBQUXhXNkdtVHBBdngzRnFHTEotOUZGcUVxR01wQVpIZmlpQXUzdWt4VGlwaUtxVV9pLS1DNEZQdnk4ajBqdk5DRnhpN3dwc2plSFlZaVNCTWdialhsbk1lSzVySDFKTEJFbmxPeTBfZ084VXdXN21VNUluUzg0WlVrek9RelhOOVNiaTdVbjdCQmJDcDRKaUxrcTIwVFZ5UGdTSUFmU2RuTnhiNmdfc3pKbw?oc=5"},
  lquipePaulNardi1: {l:"L'Équipe", u:"https://news.google.com/rss/articles/CBMi8wFBVV95cUxPZlJXeURJLThYOUZZNDlfUFhOMF9mcnJvVGNKYmpEZ1l6Q1Z3UUtKU192ZEpmdkNPWkF0YU1yV3RuUmhlTU91aEI2ODc2U2JrZnlfbFExMEg1Si15ZjBEeGY2bXRLOW5ad1pFN2t5U0RIdFlneXV5c1J4SExMRTloSmNZMTUtcEFLRWFSU2pyZzFCMXpqS0FVZDk5S0xmZW9oUi1mUlN2bHVEVHBHTlJMN25KdFMwRDhTYnNRdHhVckEwTTFRWWk2M1BEZHRWWjRtMkhOVEdyZkFBcTJBZWU3LVNQN0tjeDhVdUdSRy1PZTU0a0E"},
  footMercatoRmyLabeauLascary1: {l:"Foot Mercato", u:"https://news.google.com/rss/articles/CBMilwFBVV95cUxNLXJvUnl3ekEyU0NKZ3puY2pnU295VGtack9RLUVNaVZVOVVYWHhOMDR5SVJMZjh0c2xtMGpaYUk5Uk83cjh2cXNweDFBZ2ROd1YxdUItVHBFNFB1WlpkR0hzZ1YyYzFCdm5Lbk03UjladWxueXJMSVU1QW94bWsxeUhkeXcxR2E4UG5DY0U4a2lueGhhang4"},
  footMercatoLassineSinayoko1: {l:"Foot Mercato", u:"https://news.google.com/rss/articles/CBMipgFBVV95cUxPT3FaVlNOMWpxX2ZlaHUxSk1FZEluc0pDUG51TG5ULXdhSVJYREMwNDY3cGVjdmI5dmJaQ0ctdlBwa2R5SC1sVmN5a2JnTW9Db1BHbFRZVjN4TERGamQ1TkVIcDgtY0lSZVh3ZFJIWkNmbW9yMkVxZkE2WGpubFItMmlsbkppSGI0YjdUN0JsVVRZbXowMFVKb2xGRVVjY2tYdDZ4dWxR"},
  icifrLassineSinayoko1: {l:"ici.fr", u:"https://news.google.com/rss/articles/CBMi4wFBVV95cUxQSTUyLUIzY2g0bnpGcWJxSTAxaUxnajRTV1o2ZGVsb1BRQkE4ZFJ6VjhWbzcwaS14MDBQUXhXNkdtVHBBdngzRnFHTEotOUZGcUVxR01wQVpIZmlpQXUzdWt4VGlwaUtxVV9pLS1DNEZQdnk4ajBqdk5DRnhpN3dwc2plSFlZaVNCTWdialhsbk1lSzVySDFKTEJFbmxPeTBfZ081VXdXN21VNUluUzg0WlVrek9RelhOOVNiaTdVbjdCQmJDcDRKaUxrcTIwVFZ5UGdTSUFmU2RuTnhiNmdfc3pKbw"},
  icifrLassineSinayoko2: {l:"ici.fr", u:"https://news.google.com/rss/articles/CBMi4wFBVV95cUxQSTUyLUIzY2g0bnpGcWJxSTAxaUxnajRTV1o2ZGVsb1BRQkE4ZFJ6VjhWbzcwaS14MDBQUXhXNkdtVHBBdngzRnFHTEotOUZGcUVxR01wQVpIZmlpQXUzdWt4VGlwaUtxVV9pLS1DNEZQdnk4ajBqdk5DRnhpN3dwc2plSFlZaVNCTWdialhsbk1lSzVySDFKTEJFbmxPeTBfZ080VXdXN21VNUluUzg0WlVrek9RelhOOVNiaTdVbjdCQmJDcDRKaUxrcTIwVFZ5UGdTSUFmU2RuTnhiNmdfc3pKbw"}};

const LINKMAP = {
  "Lassine Sinayoko": ["gffn-auxerre", "maliactuLassineSinayoko", "footMercatoLassineSinayoko", "icifrLassineSinayoko", "footMercatoLassineSinayoko1", "icifrLassineSinayoko1", "icifrLassineSinayoko2"],
  "Kévin Danois": ["gffn-auxerre"],
  "Mathys Detourbet": ["gffn-auxerre"],
  "Tim Meyer": ["tOPMercatoTimMeyer"],
  "Kevin Danois": ["lesTransfertsKevinDanois"],
  "Sekou Fofana": ["lquipeSekouFofana"],
  "Romain Faivre": ["lquipeRomainFaivre"],
  "Arthur Piedfort": ["footMercatoArthurPiedfort"],
  "Paul Nardi": ["lquipePaulNardi", "lquipePaulNardi1"],
  "Rémy Labeau-Lascary": ["footMercatoRmyLabeauLascary", "footMercatoRmyLabeauLascary1"]};
const WL_LINKMAP = {
  "Mathys Detourbet": ["gffn-auxerre"]
};

const PROSE = {
  heroH2: `Still's rebuild: sell to fund, after an unexpected change at the top`,
  heroLede: `Auxerre made the surprising choice to part ways with <b>Christophe Pélissier</b>, who had just secured back-to-back Ligue 1 survivals, in favour of <b>Will Still</b> - available since his Southampton dismissal. New Sporting Director <b>David Wantier</b> is reported to be targeting over €30m from player sales to fund the new manager's rebuild, with <b>Lassine Sinayoko</b> already sold to Paris FC and <b>Kévin Danois</b> expected to follow.`,
  metaRow: `<span>DECISION-MAKER: <b>James Zhou</b> (Owner)</span> <span>HEAD COACH: <b>Will Still</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">15<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed Out</div><div class="v">1</div></div>`,
  positionPanel: ``,
  confirmedPending: `Danois' sale is reported as part of the club's summer plan but not yet finalised.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: `The Wantier plan is explicitly to sell first and reinvest - Danois is next in line after Sinayoko.`,
  pricingBanner: ``,
  excludedNote: ``,
  spendIn: { v: `None reported`, x: `No incoming deals confirmed while the club prioritises player sales.` },
  spendOut: { v: `€30m+ targeted`, x: `Sinayoko's sale is banked; Danois is reported as the next planned departure.` },
  methodLegend: ``
};
