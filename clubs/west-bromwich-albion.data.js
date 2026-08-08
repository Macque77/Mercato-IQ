/* ============================================================
   MERCATO IQ · CLUB DATA · WEST BROMWICH ALBION · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "West Bromwich Albion", mono: "WBA", slug: "west-bromwich-albion",
  primary: "#00448C", primaryBright: "#5CA9FF", primaryDeep: "#00285C",
  primaryRgb: "0,68,140",
  breadcrumb: ["England","Championship"]
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
  queries: ["west-bromwich-albion transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [
  {name:"Matt Ingram", sub:"GK", club:"Free agent", pos:"GK", fee:"Free", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Confirmed arrival among a batch of summer signings."},
  {name:"Jimmy-Jay Morgan", sub:"Unknown · Unknown · Unknown", club:"Chelsea", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official signing from Chelsea"},
  {name:"Alfie Gilchrist", sub:"Unknown · Unknown · Unknown", club:"Chelsea", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Official signing from Chelsea"},
  {name:"Nat Phillips", sub:"Unknown · Unknown · Unknown", club:"Liverpool FC", pos:"Unknown", fee:"Undisclosed", free:false, status:"done", statusTxt:"DONE, OFFICIAL", note:"Completes permanent transfer from Liverpool"}
];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Tommy Watson", sub:"20 · LW · England", club:"Brighton", pos:"LW", report:"~1 wk ago", src:"Sunderland Echo", tier:3, fee:"Loan", truth:45, prob:15, light:'o', trend:'flat', note:"Very early, Brighton have not decided their plan for him yet, background noise for now.", lastSeen:"2026-08-04T19:10:50Z", baseProb:15, dead:true, deadReason:"No fresh confirmation or detail in snippets; stale on-page rumour"},
  {name:"Jimmy-Jay Morgan", sub:"Unknown · Unknown · Unknown", club:"Chelsea", pos:"Unknown", report:"Official signing from Chelsea", src:"We Ain't Got No History", tier:3, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed official transfer", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Alfie Gilchrist", sub:"Unknown · Unknown · Unknown", club:"Chelsea", pos:"Unknown", report:"Official signing from Chelsea", src:"We Ain't Got No History", tier:3, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed official transfer", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Nat Phillips", sub:"Unknown · Unknown · Defender", club:"Liverpool", pos:"Defender", report:"Completes permanent transfer from Liverpool", src:"Liverpool FC", tier:2, fee:"Unknown", truth:100, prob:100, light:"g", trend:"flat", note:"Confirmed permanent transfer", lastSeen:"2026-08-07T01:42:32Z", baseProb:100},
  {name:"Carter Pinnington", sub:"Unknown · Unknown · GK", club:"Liverpool FC", pos:"GK", report:"Joins West Bromwich Albion in permanent transfer from Liverpool FC", src:"Liverpool FC official", tier:2, fee:"Undisclosed", truth:100, prob:100, light:"g", trend:"flat", note:"Permanent transfer completed", lastSeen:"2026-08-08T07:40:33Z", baseProb:100}
];
const OUTGOING = [
  {name:"Eseosa Sule", sub:"Winger", club:"Undisclosed", pos:"W", report:"~4 days ago", src:"West Brom News", tier:2, fee:"Undisclosed", truth:60, prob:55, light:'g', trend:'up', note:"Club's own dedicated transfer reporter using strong imminent language, worth some credence.", lastSeen:"2026-08-04T19:10:50Z", baseProb:55, dead:true, deadReason:"No fresh confirmation or detail in snippets; stale on-page rumour"},
  {name:"Isaac Price", sub:"Unknown · Unknown · Unknown", club:"West Bromwich Albion", pos:"Unknown", report:"Everton target in return bid", src:"SportsBoom UK", tier:3, fee:"Unknown", truth:35, prob:30, light:"y", trend:"flat", note:"Everton linked with a move", lastSeen:"2026-08-07T01:42:32Z", baseProb:30, dead:true, deadReason:"Everton interest confirmed in recent snippet but no confirmed departure from West Brom; remains a target but not a confirmed outgoing"}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "gnews-mattingram": {l:"Related news search: Matt Ingram", u:"https://news.google.com/search?q=West%20Bromwich%20Albion%20Matt%20Ingram%20transfer&hl=en-GB&gl=GB"},
  "sunderlandecho": {l:"Sunderland Echo", u:"https://www.sunderlandecho.com/sport/football"},
  "westbromnews": {l:"West Brom News", u:"https://www.westbromwichalbionnews.co.uk/"},
  weAintGotNoHistoryJimmyJayMorgan: {l:"We Ain't Got No History", u:"https://news.google.com/rss/articles/CBMi3AFBVV95cUxNTzhaaGNvVmhIQWFWc0ZDNS1SYlZFSFpqLWJRSngtUUhreXdPN3NNTmYtY0tUd0ROLU9MS0NSRjN5RUIzSVdMUlpxMlZLT2RFRmI2UldhTFJSU3lPNl9FS05EcDdzQmFUbEpHdWdMQ1FuYWxNVjA3STBLQnBlSmNOMFVnczFfUkRfQ1ItMWNzZm1IeTFsSWxFMk5McnlPMFcydTlZRmoxTW01eXU1dmprM1IxY3RZbW9TWDV4RjhhblliUFpEYW0wR3MxcUS2RUxUdHhQYkVrOU9UYnpX"},
  weAintGotNoHistoryAlfieGilchrist: {l:"We Ain't Got No History", u:"https://news.google.com/rss/articles/CBMi2wFBVV95cUxNSTUyUE1tcDEwOFRjbFZhdU5mX0NkMG80NXlxOG9ucUFwT0lhUUc4RkRpRDBvNHVsMmV1aVBtYXZmNzRvRUt5elR2dVZuSWpRMUZHVWlkbXZUMkthQlZMMWtvaFdOZld6bmJPVE5qYjZLZmhQcERGWm1JbmoyRUJSS1NyX0FWaEdDNEJEOVJxdGpJM19WMnNNSjh1U0ZiZTJQR0NvbURYRWhCVkF6X2FGU2ZZSk5neE9PczI5RXFzcE9SaF80ZjVrdVVPUTZDODBMWE9KN1ZBeFRNSVk"},
  liverpoolFCNatPhillips: {l:"Liverpool FC", u:"https://news.google.com/rss/articles/CBMimwFBVV95cUxQelhFSVZJdk8wbzBvMWRTb2JGZldSZDZhQ1hHZXZTa0xEVHdKMG5feUoybS1QWUpYSENCM1hmUWhycmZYbUxCdmhydEN2ek5VQ2lfcnlHMm1WX2RnTjBCRlJvdC1tMHcyQ0pHaGloUVRrU0szd1dGOXVIMVVtMnAyaUpzZmJjaHNmdjRuSXNNQWtaY0pEblhFb1VjONIBowFBVV95cUxOLS0yclZBZTB3SEl1Y2pIUUxFbHQwamtkM0pMU0J3ZG0xbXJmUnd0OW9oa0RETVlfcmV5cFR6MVNoUk5ueG9OcGRZazE1WmF2dHVZWlk1ellVZWxpa1ZCdzFXT0V3Z2doTDExUXM5VmhTQ2w2dzdFVEd0QmFMMldwdmRWSkFVVlZSOW94ZzdtbDlubjlSbTAwb21vaTdfeklsVFln"},
  sportsBoomUKIsaacPrice: {l:"SportsBoom UK", u:"https://news.google.com/rss/articles/CBMipAFBVV95cUxOa3AtTkYwbFRYWTN3UEJJNE9ZaVN0N3NmdmtNdEYxb09WZkxsaU9Zd1lwTzQzT3E4TllMbWNsaVpIRVdpNFljQTVRZnNTSC1SV3ZLM3lpd282dVFVVUZGQjZUR2tVaFNFUlhKNjM5bUh0c00zSDM5ekd2dkNrVk9zUHZwU2dTZVhJV3Jxbzd2R1QxeTRwZ2I1aThjcUZEOXpidEkwaQ"},
  liverpoolFCCarterPinnington: {l:"Liverpool FC", u:"https://news.google.com/rss/articles/CBMigwFBVV95cUxQTGFhRWhwenRNTkhXVDBvZ3JTZ2NsdVpHZW5FblAtNjdpUERFcGM5eHNzekJpWG56S0tnN2ZYYmxZUFVMMElZbVhoM2hWYnRFSURIM0FSbmFxaVpJRlFBTFlSYlRjTFBWRFZfcDdVY2pXdDZSd0lTd0d3NDFWNXRIMXFwd9IBiwFBVV95cUxNa3BfNHpBbWd4RUVlRGxEMjlxYTJJN2dMNVRBVWxMREpyTWExVjBCWkVwcV95M3plaURoNWdZd093My1Nd2tJdXgzTmx4eEROVXNGZEd4QUV3SG9FYm04S1o0Q3NxamIzWWxPMmlsY1JsaFZhOHVGNkhfem00X1lBRzkwS0pfckdZUFFJ"},
  weAintGotNoHistoryJimmyJayMorgan1: {l:"We Ain't Got No History", u:"https://news.google.com/rss/articles/CBMi3AFBVV95cUxNTzhaaGNvVmhIQWFWc0ZDNS1SYlZFSFpqLWJRSngtUUhreXdPN3NNTmYtY0tUd0ROLU9MS0NSRjN5RUIzSVdMUlpxMlZLT2RFRmI2UldhTFJSU3lPNl9FS05EcDdzQmFUbEpHdWdMQ1FuYWxNVjA3STBLQnBlSmNOMFVnczFfUkRfQ1ItMWNzZm1IeTFsSWxFMk5McnlPMFcydTlZRmoxTW41eXU1dmprM1IxY3RZbW9TWDV4RjhhblliUFpEYW0wR3MxcUS2RUxUdHhQYkVrOU9UYnpX"}};

const LINKMAP = {
  "Matt Ingram": ["gnews-mattingram"],
  "Tommy Watson": ["sunderlandecho"],
  "Eseosa Sule": ["westbromnews"],
  "Jimmy-Jay Morgan": ["weAintGotNoHistoryJimmyJayMorgan", "weAintGotNoHistoryJimmyJayMorgan1"],
  "Alfie Gilchrist": ["weAintGotNoHistoryAlfieGilchrist"],
  "Nat Phillips": ["liverpoolFCNatPhillips"],
  "Isaac Price": ["sportsBoomUKIsaacPrice"],
  "Carter Pinnington": ["liverpoolFCCarterPinnington"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `West Bromwich Albion · 2026/27 Season`,
  heroLede: `Transfer window active. West Bromwich Albion preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};