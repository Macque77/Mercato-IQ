/* ============================================================
   MERCATO IQ · CLUB DATA · FC SOCHAUX-MONTBÉLIARD · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "FC Sochaux-Montbéliard", mono: "FS", slug: "asse-sochaux",
  primary: "#F4CD1E", primaryBright: "#FFE666", primaryDeep: "#8F7800",
  primaryRgb: "244,205,30",
  breadcrumb: ["France","Ligue 2"]
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
  queries: ["asse-sochaux transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [
  {name:"Elson Mendes", sub:"Unknown · Unknown", club:"Turkish 1st Division", pos:"Unknown", report:"Elson Mendes leaves FC Sochaux-Montbéliard for Turkish 1st division", src:"maCommune.info", tier:3, fee:"Unknown", truth:90, prob:95, light:"g", trend:"flat", note:"Departure confirmed - transferred to Turkish football", lastSeen:"2026-08-08T18:06:11Z", baseProb:95}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Sochaux Official", u:"#"},
  fCSochauxMontbliardVictorLobry: {l:"FC Sochaux-Montbéliard", u:"https://news.google.com/rss/articles/CBMiiwFBVV95cUxQR0wxNVJWMlNOLVhSS2F5NVhFVFNhM0F3eHc1QjkwYUhhMGoxS3Y2SVQ1Mi05elJwdjJBckQ2MHdrS0poSHJwaVUzYzFkYjVYWENiLVFlaU8xa2N6ZWxyaVYwS1U2eFNaUDZCbTBEMFgwTDBQb1JaSWhNQWgzeE1zRjl6Q092ck"},
  icifrSaadAgouzoul: {l:"ici.fr", u:"https://news.google.com/rss/articles/CBMi8wFBVV95cUxNaV80ZUJsTG5IOWZ4bVltU3FUS2tYYmc5UzU1c2pWM3JKUXVscExWcXplQXFrTTN2TTBld0FobXgxOGdYQ25qYWZzdGdJZGxwN2lKeUVydFc4UUpoeDh6b3h1Y3hCTFlocFE5VFU1X0Fsd0VmdzUzbjFWZ2Z6OTRYdjN2NUo3ZHpPRV9oczlMeW9DVnU0ZDNsN1NtcTR5bmhleDFlVzRTUXRsRzVCN3hDc1lZdEliMWFsLWdwZzBjYi1sLWJoYVNlRmZVcXpWQ1I3bGNPMW5leGtlMUJvVDlTU1FZT2lnOFFEUjhLdTg3MlJXaG8"},
  fCSochauxMontbliardSamyBaghdadi: {l:"FC Sochaux-Montbéliard", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxOYVNsLS1MaWd1eV9VZ0tOMmkyVGcyUmt0TzlnM2JkX1FZOGlaSVhMRzU3ZDJWZDJzOEoxVmFzTjJpUEx3VXYzb0JxcVRnVk1TWEFpQW42VFpMaGMtbHJwTldqS2U4RXJhWjQ5LVZubi1pTmFZMU9vaDBKRlVmRHdLNklfWUVBWVF2cXdYWFh3"},
  fCSochauxMontbliardJonathanMexique: {l:"FC Sochaux-Montbéliard", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxORjRxcmFHSXlNX3NxWXp5MWhlNDlQYzhuRGdTUzg5REV0a0p4Z3UzOTVqQVNLWHZKTXIwRTBPVnBUdHlkT3JRWVhHU2tyUnpUQk1qbGM5aEY3cnZROUxTcVp5dTJlczVaZ2VWbERrQkEwQ2x3WEp4R283MThmMUVVekV1d1Y5VkVWRUJvR3Z3YjE"},
  maCommuneinfoElsonMendes: {l:"maCommune.info", u:"https://news.google.com/rss/articles/CBMiowFBVV95cUxOV1pzdFpPY1hZbjFPdEpORWdOREV3bjBjTXpBbVJQQmtRQi1URnU2T2hfWHlpLTRCbUFycGNnczdvTjh2LWlNX1l6Z0lIc0dxbmlabnpSbHZ2SU5HNzVsc2tlSXN1MVlvX2FxOTFCMzFsMXJDTVI1M0hlZ1NtY3pPem9jRm5sckNHMVFFb2R0U0ppUUZFMmVYdmNRMF9hWDVZaTRv"},
  fCSMOfficialVictorLobry: {l:"FCSM Official", u:"https://news.google.com/rss/articles/CBMiiwFBVV95cUxQR0wxNVJWMlNOLVhSS2F5NVhFVFNhM0F3eHc1QjkwYUhhMGoxS3Y2SVQ1Mi05elJwdjJBckQ2MHdrS0poSHJwaVUzYzFkYjVYWENiLVFlaU8xa2N6ZWxyaVYwS1U2eFNaUDZCbTBEMFgwTDBQb1JaSWhNQWgzeE1zRjl6Q092ck1SQ3BV"},
  icifrSaadAgouzoul1: {l:"ici.fr", u:"https://news.google.com/rss/articles/CBMi8wFBVV95cUxNaV80ZUJsTG5IOWZ4bVltU3FUS2tYYmc5UzU1c2pWM3JKUXVscExWcXplQXFrTTN2TTBld0FobXgxOGdYQ25qYWZzdGdJZGxwN2lKeUVydFc4UUpoeDh6b3h1Y3hCTFlocFE5VFU1X0Fsd0VmdzUzbjFWZ2Z6OTRYdjN2NUo3ZHpPRV9oczlMeW9DVnU0ZDNsN1NtcTR5bmhleDFlVzRTUXRsRzVCN3hDc1lZdEliMWFsLWdwZzBjYi1sLWJoYVNlRmZVcXpWQ1I3bGNPMW5leGtlMUJvVDlTU1FZT2lnOFFEUjhLdTg3MlJXaG8?oc=5"},
  fCSMofficialVictorLobry: {l:"FCSM official", u:"https://news.google.com/rss/articles/CBMiiwFBVV95cUxQR0wxNVJWMlNOLVhSS2F5NVhFVFNhM0F3eHc1QjkwYUhhMGoxS3Y2SVQ1Mi05elJwdjJBckQ2MHdrS0poSHJwaVUzYzFkYjVYWENiLVFlaU8xa2N6ZWxyaVYwS1U2eFNaUDZCbTBEMFgwTDBQb1JaSWhNQWgzeE1zRjl6Q092ckpSQ3BV?oc=5"},
  fCSMofficialSamyBaghdadi: {l:"FCSM official", u:"https://news.google.com/rss/articles/CBMijgFBVV95cUxOYVNsLS1MaWd1eV9VZ0tOMmkyVGcyUmt0TzlnM2JkX1FZOGlaSVhMRzU3ZDJWZDJzOEoxVmFzTjJpUEx3VXYzb0JxcVRnVk1TWEFpQW42VFpMaGMtbHJwTldqS2U4RXJhWjQ5LVZubi1pTmFZMU9vaDBKRlVmRHdLNklfWUVBWVF2cXdYWFh3?oc=5"},
  fCSMofficialJonathanMexique: {l:"FCSM official", u:"https://news.google.com/rss/articles/CBMikAFBVV95cUxORjRxcmFHSXlNX3NxWXp5MWhlNDlQYzhuRGdTUzg5REV0a0p4Z3UzOTVqQVNLWHZKTXIwRTBPVnBUdHlkT3JRWVhHU2tyUnpUQk1qbGM5aEY3cnZROUxTcVp5dTJlczVaZ2VWbERrQkEwQ2x3WEp4R283MThmMUVVekV1d1Y5VkVWRUJvR3Z3YjE?oc=5"},
  maCommuneinfoElsonMendes1: {l:"maCommune.info", u:"https://news.google.com/rss/articles/CBMiowFBVV95cUxOV1pzdFpPY1hZbjFPdEpORWdOREV3bjBjTXpBbVJQQmtRQi1URnU2T2hfWXlpLTRCbUFycGNnczdvTjh2LWlNX1l6Z0lIc0dxbmlabnpSbHZ2SU5HNzVsc2tlSXN1MVlvX2FxOTFCMzFsMXJDTVI1M0hlZ1NtY3pPem9jRm5sckNHMVFFb2R0U0ppUUZFMmVYdmNRMF9hWDVZaTRv?oc=5"}};

const LINKMAP = {
  "Victor Lobry": ["fCSochauxMontbliardVictorLobry", "fCSMOfficialVictorLobry", "fCSMofficialVictorLobry"],
  "Saad Agouzoul": ["icifrSaadAgouzoul", "icifrSaadAgouzoul1"],
  "Samy Baghdadi": ["fCSochauxMontbliardSamyBaghdadi", "fCSMofficialSamyBaghdadi"],
  "Jonathan Mexique": ["fCSochauxMontbliardJonathanMexique", "fCSMofficialJonathanMexique"],
  "Elson Mendes": ["maCommuneinfoElsonMendes", "maCommuneinfoElsonMendes1"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `FC Sochaux-Montbéliard · 2026/27 Season`,
  heroLede: `Transfer window active. FC Sochaux-Montbéliard preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};