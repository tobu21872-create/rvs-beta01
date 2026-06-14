const lib={
 bodies:[
  {id:'BODY-0001',dr:'DR-002',name:'キハ54形500番台',len:21300,doors:2,pattern:'kiha54',type:'diesel',class:'Class21M',height:126,cab:86,bead:true,skirt:false},
  {id:'BODY-0002',dr:'DR-012',name:'東武10030系',len:20000,doors:4,pattern:'tobu10030',type:'commuter',class:'Class20M',height:116,cab:78,bead:true,skirt:true},
  {id:'BODY-0003',dr:'DR-003',name:'東急5000系',len:20000,doors:4,pattern:'tokyu5000',type:'commuter',class:'Class20M',height:116,cab:76,bead:false,skirt:true},
  {id:'BODY-0004',dr:'DR-004',name:'E531系',len:20000,doors:4,pattern:'e531',type:'suburban',class:'Class20M',height:118,cab:86,bead:false,skirt:true},
  {id:'BODY-0004G',dr:'DR-004A/B',name:'E531系グリーン車',len:20000,doors:2,pattern:'e531green',type:'green',class:'Class20M-G',height:140,cab:0,bead:false,skirt:false},
  {id:'BODY-0005',dr:'DR-005',name:'313系5000番台',len:20000,doors:3,pattern:'313',type:'suburban3',class:'Class20M-3D',height:116,cab:86,bead:true,skirt:true},
  {id:'BODY-0006',dr:'DR-006',name:'521系100番台',len:20000,doors:3,pattern:'521',type:'acdc',class:'Class20M-ACDC',height:116,cab:88,bead:true,skirt:true},
  {id:'BODY-0007',dr:'DR-007',name:'E259系',len:21000,doors:1,pattern:'e259',type:'limited',class:'Class21M-L',height:118,cab:128,bead:false,skirt:true},
  {id:'BODY-0008',dr:'DR-008',name:'205系5000番台',len:20000,doors:4,pattern:'205',type:'commuter',class:'Class20M',height:116,cab:78,bead:true,skirt:false},
  {id:'BODY-0009',dr:'DR-010',name:'209系0番台',len:20000,doors:4,pattern:'209',type:'commuter',class:'Class20M',height:116,cab:78,bead:false,skirt:true},
  {id:'BODY-0010',dr:'DR-009',name:'BEC819系',len:20000,doors:3,pattern:'bec819',type:'battery',class:'Class20M-B',height:116,cab:88,bead:false,skirt:true},
  {id:'BODY-0011',dr:'DR-011',name:'787系',len:21000,doors:1,pattern:'787',type:'limited',class:'Class21M-LX',height:126,cab:132,bead:false,skirt:true}
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
 $('#app').innerHTML=`<header><h1>車両工房 RVS β0.7｜${state.project}</h1><div class="toolbar"><button class="primary" onclick="saveRvs()">.rvs保存</button><button onclick="loadRvs()">読込</button><button onclick="exportPng()">PNG出力</button><button onclick="loadDemo()">デモ再読込</button></div></header>
 <main class="layout"><section class="card"><h2>組立工場</h2><div class="inner">
 ${selector('車体 BODY','body',lib.bodies)}${selector('前面 FRONT','front',compatibleFronts())}${selector('屋根 ROOF','roof',lib.roofs)}${selector('塗装 LIVERY','livery',lib.liveries)}
 <h3>車両情報</h3><div class="row"><label>車番</label><input value="${state.vehicleNumber}" oninput="state.vehicleNumber=this.value;render()"></div><div class="row"><label>種別</label><input value="${state.service}" oninput="state.service=this.value;render()"></div><div class="row"><label>表示</label><input value="${state.destination}" oninput="state.destination=this.value;render()"></div>
 <h3>β0.7寸法DB</h3><div class="mini">内部単位をmmとして扱い、車体長・ドア中心・窓中心・台車中心・パンタ中心を形式別データとして表示。描画はSVGへ縮尺変換。</div>
 </div></section><section class="card"><h2>${state.vehicleNumber}</h2><div class="preview"><div class="svgWrap">${vehicleSvg(body,front,roof,liv)}</div></div><div class="credit">DR→Template→Vehicle。画像は保存せず、設計データからSVG生成。提供：白夜車輌製造（Hakuya Train-Manufacturing）</div></section><aside class="card"><h2>プロパティ</h2><div class="inner"><div class="meta"><b>${body.name}</b><br>${body.id} / ${body.dr}<br>車体長 ${body.len.toLocaleString()} mm<br>片側${body.doors}扉 / ${body.pattern}<br>Class ${body.class}<br><br><b>${front.name}</b><br>${front.id}<br><br><b>${roof.name}</b><br>${roof.id}<br>パンタ ${roof.panto} / 冷房 ${roof.ac}<br><br><b>${liv.name}</b><br>${liv.id}</div><h3>寸法DB</h3><div class="dimTable">${dimensionTable(body,roof)}</div><h3>描画レイヤー</h3><span class="pill">BODY</span><span class="pill">FRONT</span><span class="pill">WINDOW</span><span class="pill">DOOR</span><span class="pill">ROOF</span><span class="pill">UNDERFLOOR</span><span class="pill">LIVERY</span><h3>互換性</h3><div class="status">${compatibility(body,front)}</div></div></aside></main>`;
}
function selector(title,key,items){return `<h3>${title}</h3><select onchange="state.${key}=this.value;if('${key}'==='body'&&!compatibleFronts().some(f=>f.id===state.front))state.front='FRONT-0000';render()">${items.map(i=>`<option value="${i.id}" ${state[key]===i.id?'selected':''}>${i.name}｜${i.id}${i.dr?'｜'+i.dr:''}</option>`).join('')}</select>`}
function compatibility(body,front){let ok=front.compatible==='any'||front.compatible.includes(body.id);return ok?'<span class="ok">● 前面互換OK</span><span class="ok">● SVG生成OK</span><span class="ok">● 実車化レイヤーON</span>':'<span class="bad">● 前面非互換</span>'}
function vehicleSvg(b,f,r,l){
 const W=1280,H=390,bodyY=114,bodyH=b.height,cab=b.cab||0,scaleLen=b.len/20000;let bodyW=1120*scaleLen;if(bodyW>1180)bodyW=1180;let x0=(W-bodyW)/2, stripeY=bodyY+bodyH*0.60;let doors=doorXs(b.doors,b.pattern,x0,bodyW);let wins=windows(b.pattern,b.doors,bodyY,x0,bodyW);
 return `<svg id="rvs-svg" viewBox="0 0 ${W} ${H}" width="1280" height="390" xmlns="http://www.w3.org/2000/svg"><defs>${defs(l)}</defs><rect width="${W}" height="${H}" fill="#050915"/><g id="guide"><line x1="${x0}" x2="${x0+bodyW}" y1="${bodyY+bodyH+58}" y2="${bodyY+bodyH+58}" stroke="#263551" stroke-width="2"/><text x="38" y="34" fill="#94a3b8" font-size="13">RVS β0.7 / ${b.name} / ${b.len.toLocaleString()}mm / mm座標DB</text><line x1="${x0}" x2="${x0+bodyW}" y1="54" y2="54" stroke="#7dd3fc" stroke-width="1" opacity=".75"/><line x1="${x0}" x2="${x0}" y1="48" y2="60" stroke="#7dd3fc"/><line x1="${x0+bodyW}" x2="${x0+bodyW}" y1="48" y2="60" stroke="#7dd3fc"/><text x="${x0+bodyW/2}" y="49" fill="#bae6fd" font-size="12" text-anchor="middle">${b.len.toLocaleString()} mm</text></g><g id="roof">${roofSvg(r,x0,bodyW,bodyY,b)}</g><g id="body">${bodyShell(b,x0,bodyY,bodyW,bodyH,l)}${liverySvg(l,b,x0,bodyY,bodyW,bodyH,stripeY)}${frontSvg(f,b,x0,bodyY,bodyW,bodyH,cab,l)}</g><g id="windows">${wins.map(w=>win(w)).join('')}</g><g id="doors">${doors.map(d=>door(d,b,bodyY,bodyH)).join('')}</g><g id="under">${underSvg(b,r,x0,bodyW,bodyY+bodyH)}</g><g id="text"><rect x="${W/2-78}" y="${bodyY+18}" width="156" height="20" rx="4" fill="#111827" stroke="#475569"/><text x="${W/2}" y="${bodyY+33}" text-anchor="middle" font-size="11" fill="#f8fafc">${state.destination}</text><text x="${W/2}" y="78" text-anchor="middle" font-size="16" fill="#e5e7eb">${state.vehicleNumber}</text><text x="40" y="354" font-size="13" fill="#94a3b8">${b.id} + ${f.id} + ${r.id} + ${l.id}</text></g></svg>`
}
function defs(l){return `<linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".45" stop-color="${l.base}"/><stop offset="1" stop-color="#d9e2ee"/></linearGradient><linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a7f3ff"/><stop offset=".22" stop-color="#1e6974"/><stop offset="1" stop-color="#061c24"/></linearGradient><linearGradient id="doorMetal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e6eef7"/><stop offset=".5" stop-color="#cbd7e6"/><stop offset="1" stop-color="#f8fbff"/></linearGradient><filter id="soft"><feDropShadow dx="0" dy="2" stdDeviation="1" flood-color="#000" flood-opacity=".45"/></filter>`}
function bodyShell(b,x,y,w,h,l){let r=b.type.includes('limited')?24:7;let nose=b.type.includes('limited')?18:0;let s=`<rect x="${x+nose}" y="${y}" width="${w-nose*2}" height="${h}" rx="${r}" fill="url(#metal)" stroke="#0f172a" stroke-width="5" filter="url(#soft)"/>`;
 s+=`<rect x="${x+nose+5}" y="${y+7}" width="${w-nose*2-10}" height="6" fill="#f8fafc" opacity=".72"/><rect x="${x+nose+5}" y="${y+h-10}" width="${w-nose*2-10}" height="8" fill="#94a3b8" opacity=".55"/>`;
 if(b.bead){for(let yy of [y+18,y+32,y+h-28])s+=`<line x1="${x+18}" x2="${x+w-18}" y1="${yy}" y2="${yy}" stroke="#91a1b8" stroke-width="1" opacity=".55"/>`;for(let xx=x+70;xx<x+w-70;xx+=78)s+=`<line x1="${xx}" x2="${xx}" y1="${y+16}" y2="${y+h-18}" stroke="#cbd5e1" stroke-width=".7" opacity=".22"/>`}
 if(b.pattern==='e531green')s+=`<line x1="${x+18}" x2="${x+w-18}" y1="${y+62}" y2="${y+62}" stroke="#64748b" stroke-width="2" opacity=".55"/>`;
 return s
}
function liverySvg(l,b,x,y,w,h,stripeY){let s=''; if(b.type.includes('limited')){s+=`<rect x="${x+70}" y="${y+30}" width="${w-140}" height="9" fill="${l.stripe}"/><rect x="${x+70}" y="${y+42}" width="${w-140}" height="6" fill="${l.accent}"/>`}else{s+=`<rect x="${x+10}" y="${stripeY}" width="${w-20}" height="13" fill="${l.stripe}"/><rect x="${x+10}" y="${stripeY+17}" width="${w-20}" height="5" fill="${l.accent}" opacity=".9"/>`}
 if(l.id==='LIVERY-0002'){for(let cx of [x+92,x+w-92]){s+=`<g opacity=".88"><circle cx="${cx}" cy="${stripeY-20}" r="22" fill="none" stroke="${l.accent}" stroke-width="4"/><path d="M${cx} ${stripeY-42} L${cx+6} ${stripeY-20} L${cx+28} ${stripeY-20} L${cx+10} ${stripeY-8} L${cx+16} ${stripeY+14} L${cx} ${stripeY} L${cx-16} ${stripeY+14} L${cx-10} ${stripeY-8} L${cx-28} ${stripeY-20} L${cx-6} ${stripeY-20} Z" fill="none" stroke="${l.accent}" stroke-width="2"/></g>`}}
 return s
}
function doorXs(n,pattern,x,w){if(n===1)return[{x:x+w-230,w:76,kind:'limited'}];if(n===2)return[{x:x+150,w:70},{x:x+w-220,w:70}];if(n===3)return[{x:x+145,w:70},{x:x+w/2-35,w:70},{x:x+w-215,w:70}];return[{x:x+145,w:70},{x:x+390,w:70},{x:x+w-460,w:70},{x:x+w-215,w:70}]}
function windows(p,n,y,x,w){
 const base=(arr)=>arr.map(a=>({x:x+a[0]*w,y:y+a[1],w:a[2]*w,h:a[3],deck:a[4]||0}));
 if(p==='e531green')return base([[.22,18,.10,25,1],[.34,18,.10,25,1],[.48,18,.10,25,1],[.62,18,.10,25,1],[.27,82,.14,27],[.50,82,.14,27],[.72,82,.11,27]]);
 if(['e259','787'].includes(p))return base([[.18,30,.23,34],[.44,30,.23,34],[.72,30,.15,34]]);
 if(p==='kiha54')return base([[.06,24,.045,38],[.27,27,.095,28],[.40,27,.095,28],[.53,27,.095,28],[.66,27,.095,28],[.84,24,.045,38]]);
 if(['313','521','bec819'].includes(p))return base([[.23,27,.15,31],[.43,27,.12,31],[.62,27,.15,31],[.82,27,.07,31]]);
 if(p==='205')return base([[.075,26,.055,31],[.25,26,.12,31],[.45,26,.12,31],[.65,26,.12,31],[.87,26,.055,31]]);
 if(p==='209')return base([[.08,26,.055,31],[.265,26,.13,31],[.47,26,.13,31],[.675,26,.13,31],[.89,26,.055,31]]);
 return base([[.08,26,.052,33],[.245,26,.13,33],[.45,26,.14,33],[.68,26,.13,33],[.90,26,.052,33]])
}
function win(w){return `<g><rect x="${w.x-5}" y="${w.y-5}" width="${w.w+10}" height="${w.h+10}" rx="9" fill="#dbe5ef" stroke="#1e293b" stroke-width="2"/><rect x="${w.x}" y="${w.y}" width="${w.w}" height="${w.h}" rx="5" fill="url(#glass)" stroke="#0f172a" stroke-width="2"/><line x1="${w.x+w.w/2}" x2="${w.x+w.w/2}" y1="${w.y+2}" y2="${w.y+w.h-2}" stroke="#061c24" stroke-width="2" opacity=".7"/>${w.w>115?`<line x1="${w.x+w.w/3}" x2="${w.x+w.w/3}" y1="${w.y+2}" y2="${w.y+w.h-2}" stroke="#061c24" opacity=".48"/>`:''}<path d="M${w.x+5} ${w.y+5} L${w.x+w.w-5} ${w.y+5}" stroke="#cffafe" opacity=".35"/></g>`}
function door(d,b,y,h){let dh=b.type.includes('limited')?82:h-20;let dy=b.type.includes('limited')?y+25:y+12;return `<g filter="url(#soft)"><rect x="${d.x}" y="${dy}" width="${d.w}" height="${dh}" rx="6" fill="url(#doorMetal)" stroke="#26364e" stroke-width="3"/><rect x="${d.x+4}" y="${dy+4}" width="${d.w-8}" height="${dh-8}" rx="4" fill="none" stroke="#f8fafc" stroke-width="2" opacity=".8"/><line x1="${d.x+d.w/2}" y1="${dy+6}" x2="${d.x+d.w/2}" y2="${dy+dh-6}" stroke="#475569" stroke-width="2"/><rect x="${d.x+10}" y="${dy+14}" width="${d.w/2-16}" height="38" rx="3" fill="url(#glass)" stroke="#0f172a"/><rect x="${d.x+d.w/2+6}" y="${dy+14}" width="${d.w/2-16}" height="38" rx="3" fill="url(#glass)" stroke="#0f172a"/><rect x="${d.x+4}" y="${dy+dh-18}" width="${d.w-8}" height="3" fill="#94a3b8"/><circle cx="${d.x+d.w/2-5}" cy="${dy+68}" r="2" fill="#64748b"/><circle cx="${d.x+d.w/2+5}" cy="${dy+68}" r="2" fill="#64748b"/></g>`}
function roofSvg(r,x,w,y,b){let s=`<rect x="${x+25}" y="${y-22}" width="${w-50}" height="8" fill="#94a3b8"/><rect x="${x+45}" y="${y-30}" width="${w-90}" height="6" fill="#d1d9e5" opacity=".7"/>`;for(let i=0;i<r.ac;i++){let acW=r.detail==='limited'?105:94;let acX=x+w/2-acW/2+(i-(r.ac-1)/2)*135;s+=`<g filter="url(#soft)"><rect x="${acX}" y="${y-60}" width="${acW}" height="27" rx="3" fill="#cbd5e1" stroke="#64748b"/><rect x="${acX+10}" y="${y-54}" width="${acW-20}" height="8" fill="#334155" opacity=".45"/>${Array.from({length:7},(_,k)=>`<line x1="${acX+14+k*(acW-28)/6}" x2="${acX+14+k*(acW-28)/6}" y1="${y-57}" y2="${y-35}" stroke="#64748b" opacity=".45"/>`).join('')}</g>`}
 if(r.detail==='a771'){s+=equipmentCluster(x+160,y-42)+equipmentCluster(x+w-290,y-42)}
 if(r.detail==='acdc'){s+=equipmentCluster(x+w-330,y-42)}
 if(r.panto>0){let xs=r.panto===2?[x+230,x+w-230]:[x+w-260];xs.forEach((px,i)=>{let dir=i===0?1:-1;s+=`<g stroke="#dbe7f2" stroke-linecap="round" fill="none"><rect x="${px-44}" y="${y-32}" width="88" height="7" fill="#9aa8b7" stroke="#64748b"/><path d="M${px-58} ${y-32} L${px} ${y-82} L${px+58} ${y-32}" stroke-width="4"/><path d="M${px-35} ${y-32} L${px} ${y-58} L${px+35} ${y-32}" stroke-width="2"/><line x1="${px}" y1="${y-82}" x2="${px+dir*64}" y2="${y-94}" stroke-width="3"/><circle cx="${px-48}" cy="${y-33}" r="5" fill="#cbd5e1"/><circle cx="${px+48}" cy="${y-33}" r="5" fill="#cbd5e1"/></g>`})}return s}
function equipmentCluster(x,y){return `<g><rect x="${x}" y="${y}" width="60" height="22" rx="3" fill="#cbd5e1" stroke="#64748b"/><circle cx="${x+75}" cy="${y+9}" r="9" fill="#dbe4ee" stroke="#64748b"/><rect x="${x+92}" y="${y+2}" width="38" height="18" rx="2" fill="#aab6c5" stroke="#64748b"/><path d="M${x+132} ${y+12} H${x+180}" stroke="#94a3b8" stroke-width="3"/></g>`}
function frontSvg(f,b,x,y,w,h,cab,l){if(f.shape==='none'||cab===0)return'';let left='',right='',fill='url(#metal)';
 if(['limited','stream'].includes(f.shape)){left=`<path d="M${x} ${y+28} Q${x+42} ${y-8} ${x+cab+28} ${y} L${x+cab} ${y+h} L${x} ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="${x+42}" y="${y+28}" width="64" height="28" rx="10" fill="url(#glass)"/><path d="M${x+8} ${y+h-22} L${x+64} ${y+h-10}" stroke="#334155" stroke-width="5"/>`;right=`<path d="M${x+w-cab-28} ${y} Q${x+w-42} ${y-8} ${x+w} ${y+28} L${x+w} ${y+h} L${x+w-cab} ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="${x+w-106}" y="${y+28}" width="64" height="28" rx="10" fill="url(#glass)"/><path d="M${x+w-8} ${y+h-22} L${x+w-64} ${y+h-10}" stroke="#334155" stroke-width="5"/>`}
 else {left=`<path d="M${x} ${y+10} Q${x+14} ${y} ${x+cab} ${y} L${x+cab} ${y+h} L${x} ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="${x+24}" y="${y+28}" width="50" height="42" rx="9" fill="url(#glass)"/><circle cx="${x+cab-15}" cy="${y+90}" r="4" fill="#fbbf24"/><rect x="${x+10}" y="${y+h-26}" width="60" height="14" rx="2" fill="#cbd5e1" opacity=".7"/>`;right=`<path d="M${x+w-cab} ${y} Q${x+w-14} ${y} ${x+w} ${y+10} L${x+w} ${y+h} L${x+w-cab} ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="${x+w-74}" y="${y+28}" width="50" height="42" rx="9" fill="url(#glass)"/><circle cx="${x+w-cab+15}" cy="${y+90}" r="4" fill="#fbbf24"/><rect x="${x+w-70}" y="${y+h-26}" width="60" height="14" rx="2" fill="#cbd5e1" opacity=".7"/>`}
 return left+right
}
function underSvg(b,r,x,w,baseY){let s='';let boxes=[.06,.12,.19,.31,.38,.45,.52,.60,.68,.76,.84,.91];boxes.forEach((p,i)=>{let bx=x+p*w, bw=[48,58,74,54,50,78,55,66,48,82,55,62][i%12], bh=[25,31,22,35,28,31,25,34,24,30,26,32][i%12];s+=`<rect x="${bx}" y="${baseY+13+(i%2)*4}" width="${bw}" height="${bh}" rx="2" fill="#111827" stroke="#334155"/><circle cx="${bx+10}" cy="${baseY+23}" r="1.5" fill="#facc15" opacity=".65"/>`});return s+bogie(x+w*.17,baseY+47)+bogie(x+w*.83,baseY+47)}
function bogie(cx,y){return `<g filter="url(#soft)"><rect x="${cx-92}" y="${y-24}" width="184" height="32" fill="#0f172a"/><path d="M${cx-78} ${y-18} L${cx+78} ${y-18} L${cx+60} ${y+20} L${cx-60} ${y+20} Z" fill="#111827" stroke="#334155"/><circle cx="${cx-44}" cy="${y+6}" r="25" fill="#020617" stroke="#64748b" stroke-width="3"/><circle cx="${cx+44}" cy="${y+6}" r="25" fill="#020617" stroke="#64748b" stroke-width="3"/><circle cx="${cx-44}" cy="${y+6}" r="8" fill="#1e293b"/><circle cx="${cx+44}" cy="${y+6}" r="8" fill="#1e293b"/><path d="M${cx-72} ${y-4} Q${cx} ${y+20} ${cx+72} ${y-4}" stroke="#475569" fill="none"/></g>`}

function bodyMetrics(b){
 const width={commuter:2800,suburban:2950,green:2950,suburban3:2950,acdc:2950,battery:2950,diesel:2900,limited:2946}[b.type]||2800;
 const bodyHeightMm=b.type==='green'?4380:(b.type==='diesel'?4050:(b.type.includes('limited')?4100:4050));
 const floorMm=1080;
 const cabMm=b.cab?Math.round(b.cab*(b.len/1120)):0;
 return {lengthMm:b.len,widthMm:width,bodyHeightMm,floorMm,cabMm,doorCount:b.doors};
}
function positionSet(b,r){
 const m=bodyMetrics(b);
 const doorCenters={
  1:[m.lengthMm-3300],
  2:[3700,m.lengthMm-3700],
  3:[3300,10000,16700],
  4:[2600,7200,12800,17400]
 }[b.doors]||[];
 let windows=[];
 if(b.pattern==='e531green') windows=[4200,6200,8600,11000,13400,15800];
 else if(['e259','787'].includes(b.pattern)) windows=[5200,9200,13200,16600];
 else if(b.pattern==='kiha54') windows=[2100,5850,8200,10550,12900,15250,19000];
 else if(['313','521','bec819'].includes(b.pattern)) windows=[5000,8200,11800,15000,18400];
 else windows=[1700,5000,8200,11200,14600,18000];
 const bogies=[2500,m.lengthMm-2500];
 const pantos=r.panto===2?[3600,m.lengthMm-3600]:(r.panto===1?[m.lengthMm-4200]:[]);
 return {doorCenters,windows,bogies,pantos};
}
function dimensionTable(b,r){
 const m=bodyMetrics(b),p=positionSet(b,r);
 const row=(k,v)=>`<div class="dimRow"><span>${k}</span><b>${v}</b></div>`;
 return row('全長',m.lengthMm.toLocaleString()+' mm')+
 row('車体幅',m.widthMm.toLocaleString()+' mm')+
 row('車体高',m.bodyHeightMm.toLocaleString()+' mm')+
 row('床面高',m.floorMm.toLocaleString()+' mm')+
 row('運転台長',m.cabMm?m.cabMm.toLocaleString()+' mm':'なし')+
 row('ドア中心',p.doorCenters.map(x=>x.toLocaleString()).join(' / ')+' mm')+
 row('窓中心',p.windows.map(x=>x.toLocaleString()).join(' / ')+' mm')+
 row('台車中心',p.bogies.map(x=>x.toLocaleString()).join(' / ')+' mm')+
 row('パンタ中心',p.pantos.length?p.pantos.map(x=>x.toLocaleString()).join(' / ')+' mm':'なし');
}

function saveRvs(){const blob=new Blob([JSON.stringify({rvs:'0.7',state},null,2)],{type:'application/json'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='odorail-beta07.rvs';a.click()}
function loadRvs(){let i=document.createElement('input');i.type='file';i.accept='.rvs,.json';i.onchange=()=>{let f=i.files[0];let r=new FileReader();r.onload=()=>{try{let d=JSON.parse(r.result);state=d.state||state;render()}catch(e){alert('読込失敗')}};r.readAsText(f)};i.click()}
function exportPng(){let svg=document.getElementById('rvs-svg');let data=new XMLSerializer().serializeToString(svg);let img=new Image();let url='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(data);img.onload=()=>{let c=document.createElement('canvas');c.width=2560;c.height=780;let ctx=c.getContext('2d');ctx.fillStyle='#050915';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);let a=document.createElement('a');a.download=state.vehicleNumber+'.png';a.href=c.toDataURL('image/png');a.click()};img.src=url}
function loadDemo(){state={project:'小戸電鉄',vehicleNumber:'クハA771-1',body:'BODY-0003',front:'FRONT-0003',roof:'ROOF-0003',livery:'LIVERY-0002',destination:'WEDDING-LINER',service:'臨時特急'};render()}
render();
