
/* ============================================================
   DATA: edit this block on each daily update, page re-renders.
   light: 'g'=green(>50%) 'y'=yellow(30-50%) 'o'=orange(15-30%) 'r'=red(<15%)
   trend: 'up' | 'flat' | 'down'
   ============================================================ */
/*==DATA==*/
/* ============================================================
   MERCATO IQ · CLUB DATA · TORINO · STATE OF RECORD
   ============================================================ */

const BRAND = {
  club: "Torino", mono: "T", slug: "torino",
  primary: "#003DA5", primaryBright: "#3399FF", primaryDeep: "#001F4D",
  primaryRgb: "0,61,165",
  breadcrumb: ["Your Nation","Your League"]
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
  queries: ["torino transfer news"]
};

const REPORT_META = { label: "Updated 03 Aug 2026 – European refresh
, updated: "2026-08-03T12:48:44Z"};

const CONFIRMED_IN = 
    [];
const CONFIRMED_OUT = [];
const INCOMING = [];
const OUTGOING = [];
const RISERS = [];
const FALLERS = [];
const NEW = [];
const IGNORE = [];
const POSITIONS = [];
const WATCHLIST = [];

const HUB = {
  club: {l:"Torino Official", u:"#"}
};

const LINKMAP = {};
const WL_LINKMAP = {};

const PROSE = {
  heroH2: `Torino · 2026/27 Season`,
  heroLede: `Transfer window active. Torino preparing squad for next season.`,
  stats: `<div class="stat"><div class="l">Window Status</div><div class="v">Active</div></div>`,
  spendIn: { v: `TBD` },
  spendOut: { v: `TBD` },
  methodLegend: ``
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
