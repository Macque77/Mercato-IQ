/* ============================================================
   MERCATO IQ · CLUB DATA · DYNAMO DRESDEN · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Dynamo Dresden", mono: "DD", slug: "dynamo-dresden",
  primary: "#FFD700", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "255,215,0",
  breadcrumb: ["Germany","2. Bundesliga"]
};

const VOLATILE = {
  verified: "2026-07-29",
  coach: "TBD",
  dof: "TBD",
  europe: "TBD",
  finish: "TBD",
  owner: "TBD",
  window: "Opens 15 Jun; closes 1 Sep 2026, 11pm UK"
};

const SWEEP = {
  feeds: ["https://www.newsnow.co.uk/h/Sport/Football/"],
  queries: ["dynamo-dresden transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Thomas Keller", sub:"unknown · unknown · unknown", club:"unknown", pos:"unknown", fee:"", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Transfer to Dynamo Dresden completed"}
];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Kofi Amoako", sub:"unknown · unknown · unknown", club:"Dynamo Dresden", pos:"unknown", report:"Dynamo Dresden: Kofi Amoako nicht zu halten", src:"fussballdaten.de", tier:3, fee:"", truth:70, prob:70, light:"g", trend:"flat", note:"Cannot be retained; departure appears imminent", lastSeen:"2026-08-07T01:42:32Z", baseProb:70}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Dynamo-Dresden Official", u:"#"},
  dNNDresdnerNeuesteNachrichtenBrooklynEzeh: {l:"DNN - Dresdner Neueste Nachrichten", u:"https://news.google.com/rss/articles/CBMitwFBVV95cUxPT1Ywb3VZRDJIUVNXUXZSWnU1RTRmMFJiSVprMFp4RWhmT3FPNjNuaUJJbW9aRmlLV25zUDlqTUo4cHVFakUwMlVxR3lBYndPb3ZmODRuU1lPTVpzaHdZSE5TWi1qMmJfT05OVlZOdExNQXh6Z3RrNWEwa1c4cnE1ZUZFdU53M2NIVlY4eUxXenlwU1p1N2M5QUhWOGp4M0wtaDRsNDZjQUN4XzdQWEVLdjZoNzNHZ1HSAdMBQVVfeXFMUC1GOEpja3EyblBWYkVhMnlMOGVoMDk3VmUwQ2hGTU1MeHhrQ0tHaUFldWV5UHUxWTdXOTRzNUpQcm1zaUZOR3ptWXMyQW00TWRGVHFjaTFkY0tXemc3NkNfc0FXU1FvekZaSGJuS1d0RGl2OXNHTVhBR2dSSTdudGlVXzBXdGt3ZVVWQ1ZjT01FOTRvOWo4QjdNZE93RS1ZbWpDSEdJZW9CT29STnNrNUphWVhMT056MTRfMTJaZzZxRmFqcDlMOTFiSUl1aS13X08yWQ"},
  fussballdatendeKofiAmoako: {l:"fussballdaten.de", u:"https://news.google.com/rss/articles/CBMijwFBVV95cUxNakpONXNsd1ZianR5X2ZsM2FMMlp4RnB2ZW15NUR6UUYxSjUxSloyR215SDhCc3FvRnFieGxKRjNGVnVvLU8zQWd3cWVmUUxlU3pSV0Fod3czaHpxYm5YWUFFQVFmMllUNGhpaG0tV2lBZWNnUTEzV3VjZi1xMXBMdVVUOU10SGdhbXNTZWVGNA"},
  dNNDresdnerNeuesteNachrichtenThomasKeller: {l:"DNN - Dresdner Neueste Nachrichten", u:"https://news.google.com/rss/articles/CBMivgFBVV95cUxPVGZadElWc001RnROSldrVUthVTZTMFQ0bFY1Ykl4ckNuNnFYSEY5Z2JiekRKWGNHUDBRRGRYZ2hSMWxDOUpxOXdNVzhjRFRDVmxkcmJlNnBfTWNTOW1SNVpkVFNMQ3lKaUdQZEJKWW1MdWNnNVk5SUV3NVk2TGFWeVFORk9NbGREVlEzTS1MSThCRkFrdHdYUUcxa043MklyWWtVVUFRUWJBNTdzRXdvQnRKb2x6MC01TXAyTjBB"}};

const LINKMAP = {
  "Brooklyn Ezeh": ["dNNDresdnerNeuesteNachrichtenBrooklynEzeh"],
  "Kofi Amoako": ["fussballdatendeKofiAmoako"],
  "Thomas Keller": ["dNNDresdnerNeuesteNachrichtenThomasKeller"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Dynamo Dresden · 2026/27 Season`,
  heroLede: `Transfer window active. Dynamo Dresden preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};