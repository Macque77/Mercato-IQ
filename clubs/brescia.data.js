/* ============================================================
   MERCATO IQ · CLUB DATA · UNION BRESCIA · STATE OF RECORD
   ------------------------------------------------------------
   CORRECTION (03 Aug 2026, verified via live search): the
   historic Brescia Calcio was expelled from professional
   football. After finishing 18th in Serie B 2024/25 with a
   4-point deduction, president Massimo Cellino failed to
   resolve roughly EUR3m of debt; the club withdrew from
   contesting 2025/26 Serie C on 7 June 2025 and the FIGC
   formally excluded it on 3 July 2025 after it could not
   obtain a Serie C licence. Brescia's place in the city's
   football pyramid has been taken by Union Brescia, a
   rebrand/relocation of Feralpisalo (announced 17 July 2025 by
   chairman Giuseppe Pasini), now playing in Serie C. This is
   an administrative succession, not sporting continuity - this
   entry has been repointed to Union Brescia accordingly.
   ============================================================ */

const BRAND = {
  club: "Union Brescia", mono: "UB", slug: "brescia",
  primary: "#1E3A8A", primaryBright: "#6FA8FF", primaryDeep: "#0F1F4A",
  primaryRgb: "30,58,138",
  breadcrumb: ["Italy","Serie C"]
};

const VOLATILE = {
  verified: "2026-08-03",
  coach: "TBD",
  dof: "TBD",
  europe: "None (2026/27)",
  finish: "N/A - new entity, formed via Feralpisalo rebrand/relocation to Brescia (17 Jul 2025)",
  owner: "Giuseppe Pasini (Chairman)",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["union brescia transfer news"]
};

const REPORT_META = {
  asof: "03 Aug 2026",
  updated: "2026-08-03T14:30:00Z",
  label: "Updated 03 Aug 2026 - Union Brescia (formerly Feralpisalo)"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [
  {ar:"✦", t:"The historic Brescia Calcio was expelled from professional football in July 2025 after failing to resolve its debts and obtain a Serie C licence. Union Brescia, a rebrand and relocation of Feralpisalo, has taken up the city's place in Serie C for 2026/27."}
];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Union Brescia Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Union Brescia · 2026/27 Season`,
  heroLede: `Serie C. Union Brescia (formerly Feralpisalo, relocated and rebranded July 2025) preparing squad for next season after the historic Brescia Calcio's expulsion from professional football.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};
