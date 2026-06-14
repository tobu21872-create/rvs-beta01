const templates = {
  bodies: [
    { id:'BODY-0001', dr:'DR-002', name:'キハ54形500番台風', class:'Class21M', lengthMm:21300, doorCount:2, type:'diesel', windowPattern:'diesel_2door', roofPattern:'diesel', widthMm:2800, source:'HTM Data' },
    { id:'BODY-0002', dr:'DR-TBD', name:'キハ40風', class:'Class21M', lengthMm:21300, doorCount:2, type:'diesel', windowPattern:'diesel_2door_old', roofPattern:'diesel', widthMm:2900, source:'仮枠' },
    { id:'BODY-0003', dr:'DR-003', name:'東急5000系風', class:'Class20M', lengthMm:20000, doorCount:4, type:'commuter', windowPattern:'commuter_4door', roofPattern:'commuter', widthMm:2800, source:'HTM Data' },
    { id:'BODY-0004', dr:'DR-004', name:'E531系風', class:'Class20M', lengthMm:20000, doorCount:4, type:'suburban', windowPattern:'suburban_4door_large', roofPattern:'acdc_suburban', widthMm:2950, source:'HTM Data' },
    { id:'BODY-0004G', dr:'DR-004A/B', name:'E531系グリーン車風', class:'Class20M-G', lengthMm:20000, doorCount:2, type:'green_double_deck', windowPattern:'double_deck_green', roofPattern:'green_car', widthMm:2950, source:'HTM Data' },
    { id:'BODY-0005', dr:'DR-005', name:'313系5000番台風', class:'Class20M-3D', lengthMm:20000, doorCount:3, type:'suburban_3door', windowPattern:'suburban_3door_wide', roofPattern:'jr_central', widthMm:2950, source:'HTM Data' },
    { id:'BODY-0006', dr:'DR-006', name:'521系風', class:'Class20M-ACDC', lengthMm:20000, doorCount:3, type:'acdc_suburban_3door', windowPattern:'suburban_3door_wide', roofPattern:'acdc_2car', widthMm:2950, source:'HTM Data' },
    { id:'BODY-0007', dr:'DR-007', name:'E259系風', class:'Class25M-L', lengthMm:21000, doorCount:1, type:'limited_express', windowPattern:'limited_large', roofPattern:'limited', widthMm:2946, source:'HTM Data' },
    { id:'BODY-0008', dr:'DR-008', name:'205系5000番台風', class:'Class20M', lengthMm:20000, doorCount:4, type:'commuter', windowPattern:'commuter_4door_205', roofPattern:'commuter', widthMm:2800, source:'HTM Data' },
    { id:'BODY-0009', dr:'DR-010', name:'209系0番台風', class:'Class20M', lengthMm:20000, doorCount:4, type:'commuter', windowPattern:'commuter_4door_209', roofPattern:'commuter', widthMm:2800, source:'HTM Data' },
    { id:'BODY-0010', dr:'DR-009', name:'BEC819系風', class:'Class20M-Battery', lengthMm:20000, doorCount:3, type:'battery_emu', windowPattern:'suburban_3door_wide', roofPattern:'battery', widthMm:2950, source:'HTM Data' },
    { id:'BODY-0011', dr:'DR-011', name:'787系風', class:'Class20M-LX', lengthMm:21000, doorCount:1, type:'limited_express', windowPattern:'limited_787', roofPattern:'limited', widthMm:2950, source:'HTM Data' },
    { id:'BODY-0012', dr:'DR-TBD', name:'東武10030系風', class:'Class20M', lengthMm:20000, doorCount:4, type:'commuter', windowPattern:'commuter_4door_private', roofPattern:'commuter', widthMm:2800, source:'仮枠' },
    { id:'BODY-0013', dr:'DR-TBD', name:'東京メトロ8000系風', class:'Class20M', lengthMm:20000, doorCount:4, type:'subway', windowPattern:'commuter_4door_subway', roofPattern:'subway', widthMm:2800, source:'仮枠' },
    { id:'BODY-0014', dr:'DR-TBD', name:'E233系3000番台風', class:'Class20M', lengthMm:20000, doorCount:4, type:'suburban', windowPattern:'suburban_4door_large', roofPattern:'suburban', widthMm:2950, source:'仮枠' },
  ],
  fronts: [
    { id:'FRONT-0001', name:'キハ54形500番台風前面', compatibleTypes:['diesel'] },
    { id:'FRONT-0002', name:'東急5000系風前面', compatibleTypes:['commuter','subway'] },
    { id:'FRONT-0003', name:'A771系専用前面', compatibleBodies:['BODY-0003'] },
    { id:'FRONT-0004', name:'E531系風前面', compatibleBodies:['BODY-0004'] },
    { id:'FRONT-0005', name:'313系風前面', compatibleBodies:['BODY-0005'] },
    { id:'FRONT-0006', name:'521系風前面', compatibleBodies:['BODY-0006','BODY-0010'] },
    { id:'FRONT-0007', name:'E259系風前面', compatibleBodies:['BODY-0007'] },
    { id:'FRONT-0008', name:'205系風前面', compatibleBodies:['BODY-0008'] },
    { id:'FRONT-0009', name:'209系風前面', compatibleBodies:['BODY-0009'] },
    { id:'FRONT-0011', name:'787系風前面', compatibleBodies:['BODY-0011'] },
  ],
  liveries: [
    { id:'LIVERY-0001', name:'小戸電鉄標準色', base:'#f8fafc', stripe:'#38bdf8', accent:'#0f172a' },
    { id:'LIVERY-0002', name:'Wedding-Liner', base:'#ffffff', stripe:'#f9a8d4', accent:'#facc15' },
    { id:'LIVERY-0003', name:'近郊標準', base:'#f8fafc', stripe:'#22c55e', accent:'#334155' },
    { id:'LIVERY-0004', name:'E259旧塗装風', base:'#f8fafc', stripe:'#ef4444', accent:'#111827' },
    { id:'LIVERY-0005', name:'E259現塗装風', base:'#f8fafc', stripe:'#64748b', accent:'#ef4444' },
    { id:'LIVERY-0006', name:'JR東海風', base:'#f8fafc', stripe:'#f97316', accent:'#22c55e' },
    { id:'LIVERY-0007', name:'521系赤帯風', base:'#f8fafc', stripe:'#ef4444', accent:'#64748b' },
    { id:'LIVERY-0008', name:'ハピライン風', base:'#fdf2f8', stripe:'#ec4899', accent:'#f97316' },
    { id:'LIVERY-0009', name:'787系風', base:'#111827', stripe:'#6b7280', accent:'#f59e0b' },
  ]
};

const defaultProject = () => ({
  app:'Railway Vehicle Studio', version:'0.2.0-beta', language:'ja-JP',
  provider:{nameJa:'白夜車輌製造', nameEn:'Hakuya Train-Manufacturing'},
  project:{id:'PROJECT-0001', nameJa:'小戸電鉄', nameEn:'Odo Electric Railway', updatedAt:new Date().toISOString()},
  companies:[{id:'COMPANY-0001', name:'小戸電鉄'}],
  vehicles:[
    {id:'VEHICLE-0001', number:'キハA505-1', type:'D', bodyId:'BODY-0001', frontId:'FRONT-0001', liveryId:'LIVERY-0001', destination:'白夜中央', serviceType:'普通'},
    {id:'VEHICLE-0101', number:'クハA771-1', type:'Tc', bodyId:'BODY-0003', frontId:'FRONT-0003', liveryId:'LIVERY-0002', destination:'潮宮市', serviceType:'臨時特急'},
    {id:'VEHICLE-0102', number:'モハA771-1', type:'M', bodyId:'BODY-0003', frontId:null, liveryId:'LIVERY-0002', destination:'潮宮市', serviceType:'臨時特急', pantographs:2},
    {id:'VEHICLE-0103', number:'モハA770-1', type:'M', bodyId:'BODY-0003', frontId:null, liveryId:'LIVERY-0002', destination:'潮宮市', serviceType:'臨時特急'},
    {id:'VEHICLE-0104', number:'クハA770-1', type:'Tc', bodyId:'BODY-0003', frontId:'FRONT-0003', liveryId:'LIVERY-0002', destination:'潮宮市', serviceType:'臨時特急'},
    {id:'VEHICLE-0201', number:'クハA531-1', type:'Tc', bodyId:'BODY-0003', frontId:'FRONT-0002', liveryId:'LIVERY-0001', destination:'潮宮市', serviceType:'普通'},
    {id:'VEHICLE-0301', number:'クハE531風', type:'Tc', bodyId:'BODY-0004', frontId:'FRONT-0004', liveryId:'LIVERY-0003', destination:'上野', serviceType:'普通'},
    {id:'VEHICLE-0302', number:'モハE531風', type:'M', bodyId:'BODY-0004', frontId:null, liveryId:'LIVERY-0003', pantographs:1, destination:'上野', serviceType:'普通'},
    {id:'VEHICLE-0303', number:'サロE531風', type:'G', bodyId:'BODY-0004G', frontId:null, liveryId:'LIVERY-0003', destination:'', serviceType:'Green Car'},
    {id:'VEHICLE-0401', number:'313系5000番台風', type:'Tc', bodyId:'BODY-0005', frontId:'FRONT-0005', liveryId:'LIVERY-0006', destination:'大垣', serviceType:'快速'},
    {id:'VEHICLE-0501', number:'521系100番台風', type:'Mc', bodyId:'BODY-0006', frontId:'FRONT-0006', liveryId:'LIVERY-0007', destination:'金沢', serviceType:'普通'},
    {id:'VEHICLE-0502', number:'521系0番台風', type:'Mc', bodyId:'BODY-0006', frontId:'FRONT-0006', liveryId:'LIVERY-0008', destination:'福井', serviceType:'普通'},
    {id:'VEHICLE-0601', number:'E259系旧塗装風', type:'Tc', bodyId:'BODY-0007', frontId:'FRONT-0007', liveryId:'LIVERY-0004', destination:'成田空港', serviceType:'特急'},
    {id:'VEHICLE-0602', number:'E259系現塗装風', type:'Tc', bodyId:'BODY-0007', frontId:'FRONT-0007', liveryId:'LIVERY-0005', destination:'成田空港', serviceType:'特急'},
    {id:'VEHICLE-0701', number:'205系5000番台風', type:'Tc', bodyId:'BODY-0008', frontId:'FRONT-0008', liveryId:'LIVERY-0003', destination:'府中本町', serviceType:'普通'},
    {id:'VEHICLE-0801', number:'BEC819系風', type:'Mc', bodyId:'BODY-0010', frontId:'FRONT-0006', liveryId:'LIVERY-0001', destination:'若松', serviceType:'普通'},
    {id:'VEHICLE-0901', number:'209系0番台風', type:'Tc', bodyId:'BODY-0009', frontId:'FRONT-0009', liveryId:'LIVERY-0001', destination:'南浦和', serviceType:'各停'},
    {id:'VEHICLE-1001', number:'787系風', type:'Tc', bodyId:'BODY-0011', frontId:'FRONT-0011', liveryId:'LIVERY-0009', destination:'博多', serviceType:'特急'},
  ],
  formations:[
    {id:'FORMATION-0001', name:'A505-1', type:'single', depot:'留萌', vehicleIds:['VEHICLE-0001']},
    {id:'FORMATION-0002', name:'WE01', type:'fixed', depot:'潮シオ', vehicleIds:['VEHICLE-0101','VEHICLE-0102','VEHICLE-0103','VEHICLE-0104']},
    {id:'FORMATION-0003', name:'A531-01(仮10両)', type:'fixed', depot:'白夜総合', vehicleIds:Array(10).fill('VEHICLE-0201')},
    {id:'FORMATION-0004', name:'E531系サンプル', type:'fixed', depot:'勝田', vehicleIds:['VEHICLE-0301','VEHICLE-0302','VEHICLE-0303']},
    {id:'FORMATION-0005', name:'313系5000番台6両', type:'fixed', depot:'大垣', vehicleIds:Array(6).fill('VEHICLE-0401')},
    {id:'FORMATION-0006', name:'E259系6両', type:'fixed', depot:'鎌倉', vehicleIds:Array(6).fill('VEHICLE-0602')},
  ],
  routes:[
    {id:'ROUTE-0001', name:'七神本線', maxCars:10, maxLengthMm:200000, gauge:1067, electrification:'DC1500V'},
    {id:'ROUTE-0002', name:'白夜線', maxCars:4, maxLengthMm:80000, gauge:1067, electrification:'DC1500V'},
    {id:'ROUTE-0003', name:'優香線', maxCars:2, maxLengthMm:40000, gauge:1067, electrification:'DC1500V'},
    {id:'ROUTE-0004', name:'特急線サンプル', maxCars:12, maxLengthMm:252000, gauge:1067, electrification:'DC1500V'},
  ],
  settings:{theme:'RVS Dark', unit:'mm'}
});

let state = { screen:'start', project: loadLocal() || defaultProject(), selectedVehicleId:'VEHICLE-0001', selectedFormationId:'FORMATION-0002', selectedRouteId:'ROUTE-0002'};
function $(id){return document.getElementById(id)}
function body(id){return templates.bodies.find(x=>x.id===id)}
function front(id){return templates.fronts.find(x=>x.id===id)}
function livery(id){return templates.liveries.find(x=>x.id===id)}
function vehicle(id){return state.project.vehicles.find(x=>x.id===id)}
function formation(id){return state.project.formations.find(x=>x.id===id)}
function route(id){return state.project.routes.find(x=>x.id===id)}
function saveLocal(){ localStorage.setItem('rvs_beta02_project', JSON.stringify(state.project)); }
function loadLocal(){ try{return JSON.parse(localStorage.getItem('rvs_beta02_project'))}catch{return null} }
function render(){ const app=$('app'); if(state.screen==='start') return renderStart(app); renderMain(app); }
function renderStart(app){
  app.innerHTML=`<div class="start"><h1>車両工房 RVS β0.2</h1><p class="warn">Template Builder Preview / HTM 社内β</p><p>DRサンプルを設計データ化して、車体・前面・塗装を組み替える試作版。</p><div class="row"><button id="newProject">新規プロジェクト</button><button id="openFile">.rvsを開く</button><input id="fileInput" type="file" accept=".rvs,.json" style="display:none"></div><hr><button id="demo">小戸電鉄デモを開く</button><p class="small">画像は同梱しない。RVSに残すのは寸法・座標・テンプレート定義のみ。</p></div>`;
  $('newProject').onclick=()=>{state.project=defaultProject(); state.screen='main'; saveLocal(); render();};
  $('demo').onclick=()=>{state.screen='main'; render();};
  $('openFile').onclick=()=>$('fileInput').click();
  $('fileInput').onchange=e=>readFile(e.target.files[0]);
}
function renderMain(app){
  const v=vehicle(state.selectedVehicleId) || state.project.vehicles[0]; if(!vehicle(state.selectedVehicleId)) state.selectedVehicleId=v.id;
  app.innerHTML=`<div class="topbar"><div class="brand">車両工房 RVS β0.2｜${state.project.project.nameJa}</div><div class="toolbar"><button id="saveBtn">.rvs保存</button><button id="loadBtn">読込</button><button id="pngBtn">PNG出力</button><button id="resetBtn">デモ再読込</button><input id="fileInput" type="file" accept=".rvs,.json" style="display:none"></div></div>
  <div class="layout"><aside class="panel"><h3>ライブラリ</h3><div class="section"><b>車両サンプル</b><div class="list">${state.project.vehicles.map(x=>`<button class="${x.id===state.selectedVehicleId?'active':''}" data-v="${x.id}">${x.number}<span class="badge">${body(x.bodyId)?.dr||''}</span></button>`).join('')}</div></div><div class="section"><b>編成</b><div class="list">${state.project.formations.map(x=>`<button class="${x.id===state.selectedFormationId?'active':''}" data-f="${x.id}">${x.name}</button>`).join('')}</div></div><div class="section"><b>路線</b><div class="list">${state.project.routes.map(x=>`<button class="${x.id===state.selectedRouteId?'active':''}" data-r="${x.id}">${x.name}</button>`).join('')}</div></div></aside>
  <main class="panel canvasWrap"><h2>${v.number}</h2><div class="canvas" id="canvas">${vehicleSvg(v, mobileScale())}</div><p class="status">β0.2：各DRサンプルをBODYテンプレートとして登録。画像は保存せず、SVGを設計データから生成。</p></main>
  <aside class="panel"><h3>ビルダー</h3><div class="section">${builderPanel(v)}</div><div class="section"><h3>プロパティ</h3>${properties(v)}</div><div class="section"><h3>入線判定</h3>${compatibilityPanel()}</div><div class="section"><h3>HTM</h3><span class="pill">白夜車輌製造</span><span class="pill">Hakuya Train-Manufacturing</span><p class="credit">公開時クレジット推奨：Created with RVS / HTM</p></div></aside></div>`;
  document.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{state.selectedVehicleId=b.dataset.v; render();});
  document.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{state.selectedFormationId=b.dataset.f; render();});
  document.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{state.selectedRouteId=b.dataset.r; render();});
  $('bodySel').onchange=e=>{v.bodyId=e.target.value; v.frontId=autoFront(v.bodyId); saveLocal(); render();};
  $('frontSel').onchange=e=>{v.frontId=e.target.value || null; saveLocal(); render();};
  $('liverySel').onchange=e=>{v.liveryId=e.target.value; saveLocal(); render();};
  $('numInput').onchange=e=>{v.number=e.target.value; saveLocal(); render();};
  $('destInput').onchange=e=>{v.destination=e.target.value; saveLocal(); render();};
  $('svcInput').onchange=e=>{v.serviceType=e.target.value; saveLocal(); render();};
  $('saveBtn').onclick=downloadRvs; $('loadBtn').onclick=()=>$('fileInput').click(); $('fileInput').onchange=e=>readFile(e.target.files[0]); $('pngBtn').onclick=exportPng; $('resetBtn').onclick=()=>{localStorage.removeItem('rvs_beta02_project'); state.project=defaultProject(); render();};
}
function mobileScale(){ return window.innerWidth<900 ? 0.34 : 0.45; }
function compatibleFronts(v){ const b=body(v.bodyId); return templates.fronts.filter(f=>!f.compatibleBodies || f.compatibleBodies.includes(b.id) || (f.compatibleTypes||[]).includes(b.type)); }
function autoFront(bodyId){ const b=body(bodyId); const f=templates.fronts.find(x=>(x.compatibleBodies||[]).includes(bodyId)) || templates.fronts.find(x=>(x.compatibleTypes||[]).includes(b.type)); return f?.id || null; }
function builderPanel(v){ return `<label>車番<input id="numInput" value="${v.number||''}"></label><div class="grid2"><label>種別<input id="svcInput" value="${v.serviceType||''}"></label><label>行先<input id="destInput" value="${v.destination||''}"></label></div><label>車体<select id="bodySel">${templates.bodies.map(b=>`<option value="${b.id}" ${b.id===v.bodyId?'selected':''}>${b.id} ${b.name}</option>`).join('')}</select></label><label>前面<select id="frontSel"><option value="">なし/中間車</option>${compatibleFronts(v).map(f=>`<option value="${f.id}" ${f.id===v.frontId?'selected':''}>${f.id} ${f.name}</option>`).join('')}</select></label><label>塗装<select id="liverySel">${templates.liveries.map(l=>`<option value="${l.id}" ${l.id===v.liveryId?'selected':''}>${l.id} ${l.name}</option>`).join('')}</select></label>`; }
function properties(v){ const b=body(v.bodyId), l=livery(v.liveryId), f=front(v.frontId); return `<div class="kv"><span>車番</span><b>${v.number}</b><span>車種</span><b>${v.type}</b><span>車体</span><b>${b.name}</b><span>DR</span><b>${b.dr}</b><span>車体長</span><b>${b.lengthMm}mm</b><span>ドア数</span><b>${b.doorCount}</b><span>前面</span><b>${f?.name||'なし'}</b><span>塗装</span><b>${l.name}</b></div>`; }
function formationLength(f){ return f.vehicleIds.reduce((sum,id)=>sum+(body(vehicle(id)?.bodyId)?.lengthMm||0),0); }
function compatibilityPanel(){ const f=formation(state.selectedFormationId), r=route(state.selectedRouteId); const cars=f.vehicleIds.length, len=formationLength(f); const ok=cars<=r.maxCars && len<=r.maxLengthMm; return `<div class="kv"><span>編成</span><b>${f.name}</b><span>路線</span><b>${r.name}</b><span>両数</span><b>${cars} / 最大${r.maxCars}</b><span>長さ</span><b>${len}mm / 最大${r.maxLengthMm}mm</b><span>結果</span><b class="${ok?'ok':'bad'}">${ok?'入線可能':'入線不可'}</b></div>`; }
function getDoorXs(b,W){ const dw=70; const margin = b.doorCount===1 ? W*0.18 : (b.type.includes('limited') ? W*0.14 : W*0.12); if(b.doorCount===1) return [margin]; const usable=W-margin*2-dw*b.doorCount; const gap=usable/(b.doorCount-1); return Array.from({length:b.doorCount},(_,i)=>margin+i*(dw+gap)); }
function drawWindows(b,W,y){
  if(b.windowPattern==='double_deck_green') return `<g>${Array.from({length:8},(_,i)=>{const x=210+i*((W-420)/8); return `<rect x="${x}" y="${y+35}" width="${(W-520)/8}" height="38" rx="6" fill="#0f766e"/><rect x="${x}" y="${y+96}" width="${(W-520)/8}" height="38" rx="6" fill="#0f766e"/>`;}).join('')}</g>`;
  if((b.type||'').includes('limited')) return `<g>${Array.from({length:7},(_,i)=>{const x=260+i*((W-520)/7); return `<rect x="${x}" y="${y+48}" width="${(W-620)/7}" height="58" rx="12" fill="#0f766e" stroke="#0f172a" stroke-width="3"/>`;}).join('')}</g>`;
  const doorXs=getDoorXs(b,W); let windows=''; for(let i=0;i<doorXs.length-1;i++){ const x=doorXs[i]+90, ww=doorXs[i+1]-doorXs[i]-115; windows+=`<rect x="${x}" y="${y+45}" width="${Math.max(70,ww)}" height="54" rx="8" fill="#0f766e" stroke="#0f172a" stroke-width="3"/>`; }
  if(doorXs[0]>170) windows+=`<rect x="110" y="${y+45}" width="${Math.max(50,doorXs[0]-150)}" height="50" rx="8" fill="#0f766e"/>`;
  const last=doorXs[doorXs.length-1]+90; if(last<W-170) windows+=`<rect x="${last}" y="${y+45}" width="${Math.max(50,W-last-160)}" height="50" rx="8" fill="#0f766e"/>`;
  return windows;
}
function vehicleSvg(v, scale=1){
  const b=body(v.bodyId), liv=livery(v.liveryId); const W=b.lengthMm/10, H=300, y=86; const doorW=b.doorCount===1?60:70;
  const doorXs=getDoorXs(b,W); const doors=doorXs.map(x=>`<rect x="${x}" y="${y+42}" width="${doorW}" height="130" fill="#dbeafe" stroke="#1e293b" stroke-width="4"/><line x1="${x+doorW/2}" y1="${y+46}" x2="${x+doorW/2}" y2="${y+168}" stroke="#1e293b" stroke-width="2"/>`).join('');
  const frontShape=v.frontId?`<path d="M20 ${y+20} L105 ${y+20} ${b.type.includes('limited')?`L150 ${y+64} L135 ${y+180}`:`L130 ${y+52} L130 ${y+180}`} L20 ${y+180} Z" fill="${liv.base}" stroke="#0f172a" stroke-width="5"/><rect x="48" y="${y+44}" width="58" height="45" rx="8" fill="#164e63"/>`:'';
  const roof=`<rect x="${W*0.36}" y="${y-25}" width="${W*0.28}" height="22" rx="8" fill="#cbd5e1" stroke="#334155"/>`;
  const pantos=v.pantographs?Array.from({length:v.pantographs}).map((_,i)=>{const px=v.pantographs===1?W*0.6:(i===0?W*0.28:W*0.72); return `<path d="M${px-55} ${y-5} L${px} ${y-55} L${px+55} ${y-5}" fill="none" stroke="#e5e7eb" stroke-width="8"/><line x1="${px-75}" y1="${y-5}" x2="${px+75}" y2="${y-5}" stroke="#e5e7eb" stroke-width="6"/>`}).join(''):'';
  const under=Array.from({length:6},(_,i)=>`<rect x="${160+i*((W-320)/6)}" y="${y+190}" width="${(W-420)/6}" height="32" rx="5" fill="#374151"/>`).join('');
  return `<svg id="vehicleSvg" xmlns="http://www.w3.org/2000/svg" width="${W*scale}" height="${H*scale}" viewBox="0 0 ${W} ${H}"><rect width="100%" height="100%" fill="#020617"/><g class="svgText">${roof}${pantos}<rect x="20" y="${y+20}" width="${W-40}" height="160" rx="18" fill="${liv.base}" stroke="#0f172a" stroke-width="6"/>${frontShape}<rect x="45" y="${y+115}" width="${W-90}" height="18" fill="${liv.stripe}"/><rect x="45" y="${y+137}" width="${W-90}" height="8" fill="${liv.accent}"/>${doors}${drawWindows(b,W,y)}${under}<rect x="${W-180}" y="${y+35}" width="105" height="32" rx="5" fill="#111827"/><text x="${W-128}" y="${y+58}" text-anchor="middle" font-size="22" fill="#facc15">${v.destination||''}</text><text x="${W/2}" y="${y+245}" text-anchor="middle" font-size="34" fill="#e5e7eb">${v.number}</text><text x="60" y="${y+245}" font-size="24" fill="#94a3b8">${v.serviceType||''}</text></g></svg>`;
}
function downloadRvs(){ state.project.project.updatedAt=new Date().toISOString(); const blob=new Blob([JSON.stringify(state.project,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`${state.project.project.nameJa}.rvs`; a.click(); saveLocal(); }
function readFile(file){ if(!file)return; const reader=new FileReader(); reader.onload=()=>{try{state.project=JSON.parse(reader.result); state.screen='main'; saveLocal(); render();}catch(e){alert('読み込み失敗')}}; reader.readAsText(file); }
function exportPng(){ const svg=document.getElementById('vehicleSvg'); const xml=new XMLSerializer().serializeToString(svg); const img=new Image(); const svg64='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(xml))); img.onload=()=>{const c=document.createElement('canvas'); c.width=svg.viewBox.baseVal.width; c.height=svg.viewBox.baseVal.height; const ctx=c.getContext('2d'); ctx.drawImage(img,0,0); const a=document.createElement('a'); a.href=c.toDataURL('image/png'); a.download=(vehicle(state.selectedVehicleId)?.number||'vehicle')+'.png'; a.click();}; img.src=svg64; }
render();
