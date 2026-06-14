const lib={
 bodies:[
  {id:'BODY-0001',dr:'DR-002',name:'キハ54形500番台',len:21300,doors:2,pattern:'kiha54',type:'diesel',class:'Class21M',height:128,cab:92,bead:true,skirt:false,width:2900},
  {id:'BODY-0002',dr:'DR-012',name:'東武10030系',len:20000,doors:4,pattern:'tobu10030',type:'commuter',class:'Class20M',height:118,cab:82,bead:true,skirt:true,width:2800},
  {id:'BODY-0003',dr:'DR-003',name:'東急5000系',len:20000,doors:4,pattern:'tokyu5000',type:'commuter',class:'Class20M',height:116,cab:78,bead:false,skirt:true,width:2800},
  {id:'BODY-0004',dr:'DR-004',name:'E531系',len:20000,doors:4,pattern:'e531',type:'suburban',class:'Class20M',height:118,cab:88,bead:false,skirt:true,width:2950},
  {id:'BODY-0004G',dr:'DR-004A/B',name:'E531系グリーン車',len:20000,doors:2,pattern:'e531green',type:'green',class:'Class20M-G',height:148,cab:0,bead:false,skirt:false,width:2950},
  {id:'BODY-0005',dr:'DR-005',name:'313系5000番台',len:20000,doors:3,pattern:'313',type:'suburban3',class:'Class20M-3D',height:116,cab:88,bead:true,skirt:true,width:2950},
  {id:'BODY-0006',dr:'DR-006',name:'521系100番台',len:20000,doors:3,pattern:'521',type:'acdc',class:'Class20M-ACDC',height:116,cab:90,bead:true,skirt:true,width:2950},
  {id:'BODY-0007',dr:'DR-007',name:'E259系',len:21000,doors:1,pattern:'e259',type:'limited',class:'Class21M-L',height:118,cab:132,bead:false,skirt:true,width:2946},
  {id:'BODY-0008',dr:'DR-008',name:'205系5000番台',len:20000,doors:4,pattern:'205',type:'commuter',class:'Class20M',height:116,cab:80,bead:true,skirt:false,width:2800},
  {id:'BODY-0009',dr:'DR-010',name:'209系0番台',len:20000,doors:4,pattern:'209',type:'commuter',class:'Class20M',height:116,cab:80,bead:false,skirt:true,width:2800},
  {id:'BODY-0010',dr:'DR-009',name:'BEC819系',len:20000,doors:3,pattern:'bec819',type:'battery',class:'Class20M-B',height:116,cab:90,bead:false,skirt:true,width:2950},
  {id:'BODY-0011',dr:'DR-011',name:'787系',len:21000,doors:1,pattern:'787',type:'limited',class:'Class21M-LX',height:126,cab:136,bead:false,skirt:true,width:2940}
 ],
 fronts:[
  {id:'FRONT-0000',name:'なし（中間車）',compatible:'any',shape:'none'},
  {id:'FRONT-0001',name:'キハ54前面',compatible:['BODY-0001'],shape:'flat'},
  {id:'FRONT-0002',name:'東急5000前面',compatible:['BODY-0002','BODY-0003','BODY-0008','BODY-0009'],shape:'rounded'},
  {id:'FRONT-0003',name:'A771系専用前面',compatible:['BODY-0003'],shape:'a771'},
  {id:'FRONT-0004',name:'E531前面',compatible:['BODY-0004','BODY-0004G'],shape:'e531'},
  {id:'FRONT-0005',name:'313系前面',compatible:['BODY-0005'],shape:'313'},
  {id:'FRONT-0006',name:'521系前面',compatible:['BODY-0006','BODY-0010'],shape:'521'},
  {id:'FRONT-0007',name:'E259前面',compatible:['BODY-0007'],shape:'limited'},
  {id:'FRONT-0008',name:'787系前面',compatible:['BODY-0011'],shape:'stream'}
 ],
 roofs:[
  {id:'ROOF-0001',name:'気動車屋根',panto:0,ac:3,detail:'diesel'},
  {id:'ROOF-0002',name:'20m通勤標準',panto:0,ac:1,detail:'commuter'},
  {id:'ROOF-0003',name:'A771ダブルパンタ',panto:2,ac:1,detail:'a771'},
  {id:'ROOF-0004',name:'E531パンタ付き',panto:1,ac:1,detail:'acdc'},
  {id:'ROOF-0005',name:'近郊3ドア標準',panto:1,ac:2,detail:'suburban'},
  {id:'ROOF-0006',name:'特急標準',panto:0,ac:3,detail:'limited'}
 ],
 liveries:[
  {id:'LIVERY-0001',name:'小戸電鉄標準色',base:'#f8fafc',stripe:'#38bdf8',accent:'#0f172a'},
  {id:'LIVERY-0002',name:'Wedding-Liner',base:'#ffffff',stripe:'#f9a8d4',accent:'#facc15'},
  {id:'LIVERY-0003',name:'E531帯',base:'#f8fafc',stripe:'#22c55e',accent:'#334155'},
  {id:'LIVERY-0004',name:'521赤帯',base:'#f8fafc',stripe:'#be123c',accent:'#7c2d12'},
  {id:'LIVERY-0005',name:'313オレンジ',base:'#f8fafc',stripe:'#f97316',accent:'#64748b'},
  {id:'LIVERY-0006',name:'E259旧塗装',base:'#f8fafc',stripe:'#ef4444',accent:'#111827'},
  {id:'LIVERY-0007',name:'E259現塗装',base:'#f8fafc',stripe:'#111827',accent:'#ef4444'},
  {id:'LIVERY-0008',name:'787グレー',base:'#94a3b8',stripe:'#475569',accent:'#e5e7eb'},
  {id:'LIVERY-0009',name:'BEC819青',base:'#f8fafc',stripe:'#2563eb',accent:'#1e3a8a'}
 ]
};
let state={project:'小戸電鉄',vehicleNumber:'クハA771-1',body:'BODY-0003',front:'FRONT-0003',roof:'ROOF-0003',livery:'LIVERY-0002',destination:'WEDDING-LINER',service:'臨時特急'};
const $=s=>document.querySelector(s); const by=(arr,id)=>arr.find(x=>x.id===id);
function compatibleFronts(){const b=state.body;return lib.fronts.filter(f=>f.compatible==='any'||f.compatible.includes(b));}
function render(){
 const body=by(lib.bodies,state.body), front=by(lib.fronts,state.front), roof=by(lib.roofs,state.roof), liv=by(lib.liveries,state.livery);
 $('#app').innerHTML=`<header><h1>車両工房 RVS β0.8｜${state.project}</h1><div class="toolbar"><button class="primary" onclick="saveRvs()">.rvs保存</button><button onclick="loadRvs()">読込</button><button onclick="exportPng()">PNG出力</button><button onclick="loadDemo()">デモ再読込</button></div></header>
 <main class="layout"><section class="card"><h2>組立工場</h2><div class="inner">
 ${selector('車体 BODY','body',lib.bodies)}${selector('前面 FRONT','front',compatibleFronts())}${selector('屋根 ROOF','roof',lib.roofs)}${selector('塗装 LIVERY','livery',lib.liveries)}
 <h3>車両情報</h3><div class="row"><label>車番</label><input value="${state.vehicleNumber}" oninput="state.vehicleNumber=this.value;render()"></div><div class="row"><label>種別</label><input value="${state.service}" oninput="state.service=this.value;render()"></div><div class="row"><label>表示</label><input value="${state.destination}" oninput="state.destination=this.value;render()"></div>
 <h3>β0.8実車化</h3><div class="mini">窓枠・黒ゴム・扉縁・戸袋・機器箱・台車枠・屋根機器を細分化。図形集合体から「部品集合体」へ移行。</div>
 </div></section><section class="card"><h2>${state.vehicleNumber}</h2><div class="preview"><div class="svgWrap">${vehicleSvg(body,front,roof,liv)}</div></div><div class="credit">DR→Template→Vehicle。画像は保存せず、設計データからSVG生成。提供：白夜車輌製造（Hakuya Train-Manufacturing）</div></section><aside class="card"><h2>プロパティ</h2><div class="inner"><div class="meta"><b>${body.name}</b><br>${body.id} / ${body.dr}<br>車体長 ${body.len.toLocaleString()} mm<br>片側${body.doors}扉 / ${body.pattern}<br>Class ${body.class}<br><br><b>${front.name}</b><br>${front.id}<br><br><b>${roof.name}</b><br>${roof.id}<br>パンタ ${roof.panto} / 冷房 ${roof.ac}<br><br><b>${liv.name}</b><br>${liv.id}</div><h3>寸法DB</h3><div class="dimTable">${dimensionTable(body,roof)}</div><h3>描画レイヤー</h3><span class="pill">BODY</span><span class="pill">FRONT</span><span class="pill">WINDOW</span><span class="pill">DOOR</span><span class="pill">ROOF</span><span class="pill">UNDERFLOOR</span><span class="pill">LIVERY</span><span class="pill">DETAIL</span><h3>互換性</h3><div class="status">${compatibility(body,front)}</div></div></aside></main>`;
}
function selector(title,key,items){return `<h3>${title}</h3><select onchange="state.${key}=this.value;if('${key}'==='body'&&!compatibleFronts().some(f=>f.id===state.front))state.front='FRONT-0000';render()">${items.map(i=>`<option value="${i.id}" ${state[key]===i.id?'selected':''}>${i.name}｜${i.id}${i.dr?'｜'+i.dr:''}</option>`).join('')}</select>`}
function compatibility(body,front){let ok=front.compatible==='any'||front.compatible.includes(body.id);return ok?'<span class="ok">● 前面互換OK</span><span class="ok">● SVG生成OK</span><span class="ok">● β0.8 Detail ON</span>':'<span class="bad">● 前面非互換</span>'}
function mmX(mm,x0,w,b){return x0+(mm/b.len)*w}
function metrics(b){return {lengthMm:b.len,widthMm:b.width||2800,bodyHeightMm:b.type==='green'?4380:(b.type==='diesel'?4050:(b.type.includes('limited')?4100:4050)),floorMm:1080,cabMm:b.cab?Math.round(b.cab*(b.len/1120)):0,doorCount:b.doors}}
function pos(b,r){
 const L=b.len; let doorCenters={1:[L-3300],2:[3700,L-3700],3:[3300,10000,16700],4:[2500,7100,12900,17500]}[b.doors]||[];
 let windows=[];
 if(b.pattern==='e531green') windows=[4100,6000,8300,10700,13100,15500];
 else if(['e259','787'].includes(b.pattern)) windows=[4700,7600,10500,13400,16300];
 else if(b.pattern==='kiha54') windows=[2100,5600,7700,9800,11900,14000,16100,18300];
 else if(['313','521','bec819'].includes(b.pattern)) windows=[5000,7600,12300,14900,18400];
 else windows=[1500,4700,8450,11100,15100,18500];
 const bogies=[2500,L-2500];
 const pantos=r.panto===2?[3600,L-3600]:(r.panto===1?[L-4300]:[]);
 return {doorCenters,windows,bogies,pantos};
}
function vehicleSvg(b,f,r,l){
 const W=1280,H=430; const bodyY=150, bodyH=b.height, scaleLen=b.len/20000; let bodyW=Math.min(1160,1080*scaleLen); const x0=(W-bodyW)/2; const p=pos(b,r);
 return `<svg id="rvs-svg" viewBox="0 0 ${W} ${H}" width="1280" height="430" xmlns="http://www.w3.org/2000/svg"><defs>${defs(l)}</defs><rect width="${W}" height="${H}" fill="#050915"/><g id="guide">${guide(b,x0,bodyW)}</g><g id="roof">${roofSvg(b,r,x0,bodyW,bodyY,p)}</g><g id="shell">${shell(b,l,x0,bodyY,bodyW,bodyH)}${livery(b,l,x0,bodyY,bodyW,bodyH)}${front(f,b,l,x0,bodyY,bodyW,bodyH)}</g><g id="windows">${windowSet(b,x0,bodyY,bodyW,bodyH,p)}</g><g id="doors">${doorSet(b,x0,bodyY,bodyW,bodyH,p)}</g><g id="under">${under(b,r,x0,bodyW,bodyY+bodyH,p)}</g><g id="text"><rect x="${W/2-82}" y="${bodyY+13}" width="164" height="18" rx="4" fill="#111827" stroke="#475569"/><text x="${W/2}" y="${bodyY+27}" text-anchor="middle" font-size="10" fill="#f8fafc">${state.destination}</text><text x="${W/2}" y="86" text-anchor="middle" font-size="16" fill="#e5e7eb">${state.vehicleNumber}</text><text x="40" y="392" font-size="13" fill="#94a3b8">${b.id} + ${f.id} + ${r.id} + ${l.id}</text></g></svg>`
}
function defs(l){return `<linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".35" stop-color="${l.base}"/><stop offset=".78" stop-color="#dce6f1"/><stop offset="1" stop-color="#b8c4d2"/></linearGradient><linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#b9f6ff"/><stop offset=".22" stop-color="#216d78"/><stop offset="1" stop-color="#06161d"/></linearGradient><linearGradient id="glass2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2c8791"/><stop offset="1" stop-color="#062029"/></linearGradient><linearGradient id="doorMetal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#dbe8f4"/><stop offset=".55" stop-color="#edf5fc"/><stop offset="1" stop-color="#b8c7d8"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="2" stdDeviation="1.4" flood-color="#000" flood-opacity=".45"/></filter><filter id="inner"><feDropShadow dx="0" dy="1" stdDeviation=".8" flood-color="#020617" flood-opacity=".7"/></filter>`}
function guide(b,x,w){return `<text x="38" y="34" fill="#94a3b8" font-size="13">RVS β0.8 / ${b.name} / ${b.len.toLocaleString()}mm / detail SVG</text><line x1="${x}" x2="${x+w}" y1="62" y2="62" stroke="#7dd3fc" stroke-width="1" opacity=".75"/><line x1="${x}" x2="${x}" y1="56" y2="68" stroke="#7dd3fc"/><line x1="${x+w}" x2="${x+w}" y1="56" y2="68" stroke="#7dd3fc"/><text x="${x+w/2}" y="57" fill="#bae6fd" font-size="12" text-anchor="middle">${b.len.toLocaleString()} mm</text>`}
function shell(b,l,x,y,w,h){let nose=b.type.includes('limited')?22:0, r=b.type.includes('limited')?24:8;let s=`<rect x="${x+nose}" y="${y}" width="${w-nose*2}" height="${h}" rx="${r}" fill="url(#metal)" stroke="#0b1220" stroke-width="4" filter="url(#shadow)"/>`;
 s+=`<rect x="${x+nose+8}" y="${y+8}" width="${w-nose*2-16}" height="7" fill="#f8fafc" opacity=".86"/><rect x="${x+nose+8}" y="${y+h-13}" width="${w-nose*2-16}" height="7" fill="#94a3b8" opacity=".50"/>`;
 if(b.bead){for(let yy=y+22;yy<y+h-18;yy+=16)s+=`<line x1="${x+nose+8}" x2="${x+w-nose-8}" y1="${yy}" y2="${yy}" stroke="#94a3b8" stroke-width="1" opacity=".26"/>`}
 if(b.pattern==='e531green')s+=`<line x1="${x+20}" x2="${x+w-20}" y1="${y+h*.52}" y2="${y+h*.52}" stroke="#8291a4" stroke-width="2" opacity=".45"/>`;
 return s}
function livery(b,l,x,y,w,h){let sy=y+h*.62;let s=`<rect x="${x+10}" y="${sy}" width="${w-20}" height="12" fill="${l.stripe}"/><rect x="${x+10}" y="${sy+17}" width="${w-20}" height="4" fill="${l.accent}" opacity=".9"/>`;
 if(l.id==='LIVERY-0002')s+=`<g opacity=".85"><path d="M${x+190} ${sy-3} l22 20 l-26-8 l28-8 l-18 24" fill="none" stroke="${l.accent}" stroke-width="4"/><circle cx="${x+220}" cy="${sy+6}" r="5" fill="${l.accent}"/></g>`;
 if(['LIVERY-0006','LIVERY-0007'].includes(l.id))s+=`<rect x="${x+80}" y="${y+35}" width="${w-160}" height="10" fill="${l.accent}" opacity=".9"/>`;
 return s}
function windowSet(b,x,y,w,h,p){let s=''; const tall=b.pattern==='e531green'; p.windows.forEach((mm,i)=>{let cx=mmX(mm,x,w,b);let ww=tall?62:(['e259','787'].includes(b.pattern)?92:(b.pattern==='kiha54'?54:78));let yy=tall?(i%2?y+76:y+26):y+38;let hh=tall?30:42;s+=windowSvg(cx-ww/2,yy,ww,hh,i)});return s}
function windowSvg(x,y,w,h,i){return `<g filter="url(#inner)"><rect x="${x-5}" y="${y-5}" width="${w+10}" height="${h+10}" rx="9" fill="#dbe4ee" stroke="#0f172a" stroke-width="3"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="url(#glass)" stroke="#082f38" stroke-width="2"/><path d="M${x+8} ${y+5} H${x+w-10}" stroke="#cffafe" opacity=".55"/><line x1="${x+w/2}" x2="${x+w/2}" y1="${y+3}" y2="${y+h-3}" stroke="#0f3b44" stroke-width="2" opacity=".65"/></g>`}
function doorSet(b,x,y,w,h,p){let s=''; p.doorCenters.forEach((mm,i)=>{let cx=mmX(mm,x,w,b), dw=b.type.includes('limited')?54:76, dh=h-15;s+=doorSvg(cx-dw/2,y+9,dw,dh,i)});return s}
function doorSvg(x,y,w,h,i){return `<g filter="url(#shadow)"><rect x="${x-4}" y="${y-4}" width="${w+8}" height="${h+8}" rx="8" fill="#e2eaf4" stroke="#172235" stroke-width="3"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="url(#doorMetal)"/><line x1="${x+w/2}" x2="${x+w/2}" y1="${y+4}" y2="${y+h-4}" stroke="#475569" stroke-width="2"/><rect x="${x+10}" y="${y+18}" width="${w/2-15}" height="45" rx="5" fill="url(#glass2)" stroke="#092832"/><rect x="${x+w/2+5}" y="${y+18}" width="${w/2-15}" height="45" rx="5" fill="url(#glass2)" stroke="#092832"/><circle cx="${x+w/2-8}" cy="${y+h*.62}" r="2" fill="#64748b"/><circle cx="${x+w/2+8}" cy="${y+h*.62}" r="2" fill="#64748b"/><rect x="${x+8}" y="${y+h-19}" width="${w-16}" height="5" fill="#94a3b8" opacity=".75"/></g>`}
function front(f,b,l,x,y,w,h){if(f.shape==='none'||!b.cab)return''; const cab=b.cab; let left='',right=''; const limited=['limited','stream'].includes(f.shape);
 if(limited){left=`<path d="M${x} ${y+30} Q${x+42} ${y-10} ${x+cab+35} ${y} L${x+cab} ${y+h} L${x} ${y+h} Z" fill="url(#metal)" stroke="#0b1220" stroke-width="4"/><rect x="${x+40}" y="${y+33}" width="65" height="28" rx="10" fill="url(#glass)"/><path d="M${x+8} ${y+h-22} L${x+70} ${y+h-10}" stroke="#334155" stroke-width="5"/>`;right=`<path d="M${x+w-cab-35} ${y} Q${x+w-42} ${y-10} ${x+w} ${y+30} L${x+w} ${y+h} L${x+w-cab} ${y+h} Z" fill="url(#metal)" stroke="#0b1220" stroke-width="4"/><rect x="${x+w-105}" y="${y+33}" width="65" height="28" rx="10" fill="url(#glass)"/><path d="M${x+w-8} ${y+h-22} L${x+w-70} ${y+h-10}" stroke="#334155" stroke-width="5"/>`}
 else{left=`<path d="M${x} ${y+10} Q${x+14} ${y} ${x+cab} ${y} L${x+cab} ${y+h} L${x} ${y+h} Z" fill="url(#metal)" stroke="#0b1220" stroke-width="4"/><rect x="${x+24}" y="${y+32}" width="54" height="42" rx="9" fill="url(#glass)"/><rect x="${x+18}" y="${y+h-29}" width="68" height="15" rx="3" fill="#cbd5e1" opacity=".75"/><circle cx="${x+cab-18}" cy="${y+92}" r="4" fill="#fbbf24"/>`;right=`<path d="M${x+w-cab} ${y} Q${x+w-14} ${y} ${x+w} ${y+10} L${x+w} ${y+h} L${x+w-cab} ${y+h} Z" fill="url(#metal)" stroke="#0b1220" stroke-width="4"/><rect x="${x+w-78}" y="${y+32}" width="54" height="42" rx="9" fill="url(#glass)"/><rect x="${x+w-86}" y="${y+h-29}" width="68" height="15" rx="3" fill="#cbd5e1" opacity=".75"/><circle cx="${x+w-cab+18}" cy="${y+92}" r="4" fill="#fbbf24"/>`}
 return left+right}
function roofSvg(b,r,x,w,y,p){let s=`<rect x="${x+10}" y="${y-36}" width="${w-20}" height="8" fill="#9aa8b7"/><rect x="${x+80}" y="${y-48}" width="${w-160}" height="5" fill="#64748b" opacity=".7"/>`; const acW=r.detail==='limited'?130:170; for(let i=0;i<r.ac;i++){let ax=x+w*(i+1)/(r.ac+1)-acW/2;s+=`<g><rect x="${ax}" y="${y-74}" width="${acW}" height="28" rx="4" fill="#cbd5e1" stroke="#64748b"/><rect x="${ax+14}" y="${y-69}" width="${acW-28}" height="18" fill="#94a3b8" opacity=".55"/>${Array.from({length:8},(_,k)=>`<line x1="${ax+18+k*(acW-36)/7}" x2="${ax+18+k*(acW-36)/7}" y1="${y-69}" y2="${y-51}" stroke="#475569" opacity=".5"/>`).join('')}</g>`}
 if(r.detail==='a771'){s+=equipCluster(x+160,y-52)+equipCluster(x+w-310,y-52)} if(r.detail==='acdc'){s+=equipCluster(x+w-340,y-52)} p.pantos.forEach((mm,i)=>{let px=mmX(mm,x,w,b),dir=i===0?1:-1;s+=panto(px,y-41,dir)});return s}
function equipCluster(x,y){return `<g><rect x="${x}" y="${y}" width="58" height="22" rx="3" fill="#cbd5e1" stroke="#64748b"/><circle cx="${x+76}" cy="${y+10}" r="9" fill="#dbe4ee" stroke="#64748b"/><rect x="${x+94}" y="${y+3}" width="38" height="17" rx="2" fill="#aab6c5" stroke="#64748b"/><path d="M${x+134} ${y+11} H${x+184}" stroke="#94a3b8" stroke-width="3"/></g>`}
function panto(px,y,dir){return `<g stroke="#dbe7f2" stroke-linecap="round" fill="none"><rect x="${px-50}" y="${y}" width="100" height="7" fill="#9aa8b7" stroke="#64748b"/><path d="M${px-62} ${y} L${px} ${y-54} L${px+62} ${y}" stroke-width="4"/><path d="M${px-38} ${y} L${px} ${y-28} L${px+38} ${y}" stroke-width="2"/><line x1="${px}" y1="${y-54}" x2="${px+dir*72}" y2="${y-67}" stroke-width="3"/><circle cx="${px-49}" cy="${y}" r="5" fill="#cbd5e1"/><circle cx="${px+49}" cy="${y}" r="5" fill="#cbd5e1"/></g>`}
function under(b,r,x,w,base,p){let s=''; let pts=[.07,.13,.20,.29,.36,.43,.51,.59,.67,.75,.84,.91]; pts.forEach((q,i)=>{let bx=x+q*w, bw=[48,58,78,54,50,82,55,66,48,86,55,62][i%12], bh=[24,30,23,34,28,31,25,34,24,30,26,32][i%12];s+=`<rect x="${bx}" y="${base+14+(i%2)*5}" width="${bw}" height="${bh}" rx="2" fill="#111827" stroke="#334155"/><circle cx="${bx+10}" cy="${base+25}" r="1.6" fill="#facc15" opacity=".65"/>`}); p.bogies.forEach(mm=>{s+=bogie(mmX(mm,x,w,b),base+52)}); return s}
function bogie(cx,y){return `<g filter="url(#shadow)"><rect x="${cx-94}" y="${y-27}" width="188" height="34" fill="#0f172a"/><path d="M${cx-82} ${y-19} L${cx+82} ${y-19} L${cx+62} ${y+22} L${cx-62} ${y+22} Z" fill="#111827" stroke="#334155"/><circle cx="${cx-46}" cy="${y+7}" r="25" fill="#020617" stroke="#64748b" stroke-width="3"/><circle cx="${cx+46}" cy="${y+7}" r="25" fill="#020617" stroke="#64748b" stroke-width="3"/><circle cx="${cx-46}" cy="${y+7}" r="8" fill="#1e293b"/><circle cx="${cx+46}" cy="${y+7}" r="8" fill="#1e293b"/><path d="M${cx-74} ${y-5} Q${cx} ${y+20} ${cx+74} ${y-5}" stroke="#475569" fill="none"/><line x1="${cx-83}" x2="${cx+83}" y1="${y-2}" y2="${y+13}" stroke="#475569" opacity=".7"/></g>`}
function bodyMetrics(b){return metrics(b)}
function positionSet(b,r){return pos(b,r)}
function dimensionTable(b,r){const m=metrics(b),p=pos(b,r);const row=(k,v)=>`<div class="dimRow"><span>${k}</span><b>${v}</b></div>`;return row('全長',m.lengthMm.toLocaleString()+' mm')+row('車体幅',m.widthMm.toLocaleString()+' mm')+row('車体高',m.bodyHeightMm.toLocaleString()+' mm')+row('床面高',m.floorMm.toLocaleString()+' mm')+row('運転台長',m.cabMm?m.cabMm.toLocaleString()+' mm':'なし')+row('ドア中心',p.doorCenters.map(x=>x.toLocaleString()).join(' / ')+' mm')+row('窓中心',p.windows.map(x=>x.toLocaleString()).join(' / ')+' mm')+row('台車中心',p.bogies.map(x=>x.toLocaleString()).join(' / ')+' mm')+row('パンタ中心',p.pantos.length?p.pantos.map(x=>x.toLocaleString()).join(' / ')+' mm':'なし')}
function saveRvs(){const blob=new Blob([JSON.stringify({rvs:'0.8',state},null,2)],{type:'application/json'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='odorail-beta08.rvs';a.click()}
function loadRvs(){let i=document.createElement('input');i.type='file';i.accept='.rvs,.json';i.onchange=()=>{let f=i.files[0];let r=new FileReader();r.onload=()=>{try{let d=JSON.parse(r.result);state=d.state||state;render()}catch(e){alert('読込失敗')}};r.readAsText(f)};i.click()}
function exportPng(){let svg=document.getElementById('rvs-svg');let data=new XMLSerializer().serializeToString(svg);let img=new Image();let url='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(data);img.onload=()=>{let c=document.createElement('canvas');c.width=2560;c.height=860;let ctx=c.getContext('2d');ctx.fillStyle='#050915';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);let a=document.createElement('a');a.download=state.vehicleNumber+'.png';a.href=c.toDataURL('image/png');a.click()};img.src=url}
function loadDemo(){state={project:'小戸電鉄',vehicleNumber:'クハA771-1',body:'BODY-0003',front:'FRONT-0003',roof:'ROOF-0003',livery:'LIVERY-0002',destination:'WEDDING-LINER',service:'臨時特急'};render()}
render();
