/* ============================================================
   MERCATO IQ · CLUB DATA · CAMBRIDGE UNITED · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Cambridge United", mono: "CU", slug: "cambridge-united",
  primary: "#F8B334", primaryBright: "#FFD97A", primaryDeep: "#8F6300",
  primaryRgb: "248,179,52",
  breadcrumb: ["England","League One"]
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
  queries: ["cambridge-united transfer news"]
};

const REPORT_META = {
  asof: "29 Jul 2026",
  updated: "2026-07-29T00:00:00Z",
  label: "Transfer window active; pending updates"
};

const CONFIRMED_IN = [];
const CONFIRMED_OUT = [];
const INCOMING = [
  {name:"Callum Stead", sub:"unknown · unknown · Striker", club:"Barnet", pos:"Striker", report:"Signed as first summer signing", src:"BBC", tier:2, fee:"unknown", truth:95, prob:95, light:"g", trend:"down", note:"Confirmed signing from Barnet", lastSeen:"2026-08-08T11:19:01Z", baseProb:95},
  {name:"Callum Perry", sub:"unknown · unknown · unknown", club:"Coventry City", pos:"unknown", report:"Season-long loan from Coventry City", src:"The Coventry Observer", tier:3, fee:"Loan", truth:95, prob:95, light:"g", trend:"down", note:"Season-long loan confirmed", lastSeen:"2026-08-08T11:19:01Z", baseProb:95},
  {name:"Patrick Bauer", sub:"unknown · unknown · Defender", club:"AFC Wimbledon", pos:"Defender", report:"Signed from AFC Wimbledon", src:"BBC", tier:2, fee:"unknown", truth:95, prob:95, light:"g", trend:"down", note:"Confirmed signing from AFC Wimbledon", lastSeen:"2026-08-08T11:19:01Z", baseProb:95},
  {name:"Sean Raggett", sub:"unknown · unknown · Defender", club:"Rotherham United", pos:"Defender", report:"Loan signing from Rotherham United", src:"BBC", tier:2, fee:"Loan", truth:95, prob:95, light:"g", trend:"down", note:"Confirmed loan signing", lastSeen:"2026-08-08T11:19:01Z", baseProb:95}
];
const OUTGOING = [
  {name:"Maldini Kacurri", sub:"unknown · Albanian · Defender", club:"Arsenal", pos:"Defender", report:"Cambridge United joining chase (implies departure sought)", src:"SportsBoom UK", tier:3, fee:"unknown", truth:40, prob:30, light:"y", trend:"up", note:"Rumour of transfer chase; unclear if player is leaving or if Cambridge is just interested in signing him from elsewhere", lastSeen:"2026-08-08T11:19:01Z", baseProb:30}
];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  "flw": {l:"Football League World", u:"https://www.footballleagueworld.co.uk/"},
  bBCCallumStead: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE15bmpfQmduNVRYU1BORjd6MEFqRnZPMzRjdlNUVGhET0ZHM1kzUTZ5NDktanVkX0N6aUJpOHhVZU9RWlFuMHVGeHJYektVaG11OWlDNDBFa3A5aUZiWDZxci1rS1ExV00?oc=5"},
  theCoventryObserverCallumPerry: {l:"The Coventry Observer", u:"https://news.google.com/rss/articles/CBMixAFBVV95cUxNSlE3bGlTcFZrQU0zUGhqczNJSUdoVG9GLWZ3X19jcjlXQS1HeXpKN19oeVJxMWtzS1NheVc0QnEtV1FLaWp3U0xieVpMM09tM0Nza0hfdGt3bmk2UmRna1VKd3VrODgtWlV0NTFFeXpGRmFGWVZHUGlHRzA2Y2Uzc1h1bnBSbGdBNnkzQ3hTMnNMLWoxelM0MnczN3EwUXN5MUc1d2pnbHBFMVBsd2NtXzhzbFI4dFZiUFI5dGJZUHc3YU5I?oc=5"},
  bBCPatrickBauer: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE5qLXhEZEhXQUk0MmYydk1hMFdCRXFqSjVzY0VrQ3dwN1hFbDc2ZlA2dktXQUhVS3BYUDZreWFPT3ZZM09uTW14UHYtX204RHRjQ00wYXFaSldGTm9mZ05CeUtXaFFkb0U?oc=5"},
  bBCSeanRaggett: {l:"BBC", u:"https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9ZV050ZzZIWkJjNm5hYUkxTmNRanF2enVuLXNqTGxWSEtvQ21zUmhDanRRWTBKRWpudnJvOTZObnJiSEI0QkM5bFRpbWUtUFVqS19PVW9xQ1J4ZVpuRWpMRWxXbE1DQk0?oc=5"},
  cambridgeUnitedAdamMayor: {l:"Cambridge United", u:"https://news.google.com/rss/articles/CBMiekFVX3lxTE9ZTFRJTXB0aE1pU2hjbjRxRmpwZF9YYm42UDZEUHpvUDhmaTJ0dnRnczRUaUhGQVVNWXpVaVdJSnZBelkyTEphRUtvSTNNUktZcnJPUk1EYi1XSUtjX2ZEbVJoNlFWWUMtV2JzQjNpbHpPWDNtY0wya0ZB?oc=5"},
  sportsboomcoukMaldiniKacurri: {l:"sportsboom.co.uk", u:"https://news.google.com/rss/articles/CBMi2AFBVV95cUxQSEhEdTJtcy1mNmZGUzhEbU5aUGRkYXhibnNNdmdXVXo3R21LXzVwdHp6bFBudjdBRWtwWmxmUVhoS0d2VENfRjFjZ0N1QktUSkg3MVdZQlJmV2wyQ3NvVTJhWHN4RTZOM2ZmYm5tTlNUQk9TVXRYUFA2d0hVRzBfOV93SHhYZ0tRSW1TUDhwZ3NaT2xKdnpDMkFxeWpqdWswRW1FZjIxS2J6cXBTSzh4LWVMbENpdlJNV1RDZFYxcGxwbWk5cHYzV091ak9ySEQ0NU9RN281ZHc?oc=5"}};

const LINKMAP = {
  "Luke Berry": ["flw"],
  "Callum Stead": ["bBCCallumStead"],
  "Callum Perry": ["theCoventryObserverCallumPerry"],
  "Patrick Bauer": ["bBCPatrickBauer"],
  "Sean Raggett": ["bBCSeanRaggett"],
  "Adam Mayor": ["cambridgeUnitedAdamMayor"],
  "Maldini Kacurri": ["sportsboomcoukMaldiniKacurri"]};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Cambridge United · 2026/27 Season`,
  heroLede: `Transfer window active. Cambridge United preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
};