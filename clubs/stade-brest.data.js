/* ============================================================
   MERCATO IQ · CLUB DATA · STADE BRESTOIS 29 · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Stade Brestois 29", mono: "SB29", slug: "stade-brest",
  primary: "#D2001C", primaryBright: "#FF5C6C", primaryDeep: "#7A0011",
  primaryRgb: "210,0,28",
  breadcrumb: ["France","Ligue 1"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "Julien Lachuer (promoted internally 24 Jun 2026, following the sudden passing of Eric Roy on 17 Jun 2026)",
  dof: "Vacant - Grégory Lorenzi left after a decade at the club to become Olympique de Marseille's Sporting Director (28 May 2026)",
  europe: "None (2026/27)",
  finish: "12th Ligue 1 (2025/26)",
  owner: "Denis Le Saint (President/Chairman since 10 May 2016)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.getfootballnewsfrance.com/tag/brest/"],
  queries: ["Stade Brestois transfer news 2026"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 · Stade Brestois 29"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];

const RISERS = [];

const FALLERS = [];

const NEW = [
  {ar:"✦", t:"Brest are rebuilding their entire football department this summer: long-serving head coach <b>Eric Roy</b> passed away suddenly in June, with assistant <b>Julien Lachuer</b> promoted to replace him, while sporting director <b>Grégory Lorenzi</b> left the same month to take the equivalent role at Marseille."}
];

const IGNORE = [];

const POSITIONS = [];

const WATCHLIST = [];

const HUB = {
  "gffn-brest": {l:"Get French Football News · Brest", u:"https://www.getfootballnewsfrance.com/tag/brest/"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `A club in mourning, rebuilding its leadership before the market moves`,
  heroLede: `Stade Brestois enter this window still processing the loss of long-serving head coach <b>Eric Roy</b>, who passed away in June at 58. Assistant <b>Julien Lachuer</b> has been promoted to succeed him, while sporting director <b>Grégory Lorenzi</b>, in the role for a decade, departed the same month to join Olympique de Marseille. No transfer business has been reported yet as the new-look football department settles in.`,
  metaRow: `<span>DECISION-MAKER: <b>Denis Le Saint</b> (President)</span> <span>HEAD COACH: <b>Julien Lachuer</b></span> <span>WINDOW: <b>15 Jun – 1 Sep</b></span>`,
  stats: `<div class="stat gold"><div class="l">2025/26 Finish</div><div class="v">12<small>th</small></div></div><div class="stat gold"><div class="l">2026/27 Europe</div><div class="v">None</div></div><div class="stat gold"><div class="l">Confirmed Moves</div><div class="v">0</div></div>`,
  positionPanel: ``,
  confirmedPending: `No transfer deals reported as agreed this window; the sporting director post remains vacant.`,
  incomingSub: `Every link carries two independent readings: True? (credibility) and Happens? (completion likelihood this window).`,
  outgoingSub: ``,
  pricingBanner: ``,
  excludedNote: `No genuine transfer rumours have surfaced for Brest at time of writing - the honest state of the market for this club right now.`,
  spendIn: { v: `None reported`, x: `No incoming deals confirmed this window.` },
  spendOut: { v: `None reported`, x: `No outgoing deals confirmed this window.` },
  methodLegend: ``
};
