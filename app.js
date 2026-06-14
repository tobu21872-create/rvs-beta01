const templates = {
  bodies: [
    { id:'BODY-0001', name:'キハ54形500番台風', class:'Class21M', lengthMm:21300, cars:1, doorCount:2, type:'diesel' },
    { id:'BODY-0003', name:'東急5000系風', class:'Class20M', lengthMm:20000, cars:1, doorCount:4, type:'commuter' },
    { id:'BODY-0004', name:'E531系風', class:'Class20M', lengthMm:20000, cars:1, doorCount:4, type:'suburban' },
  ],
  fronts: [
    { id:'FRONT-0001', name:'キハ54形500番台風前面', compatibleBodies:['BODY-0001'] },
    { id:'FRONT-0002', name:'東急5000系風前面', compatibleBodies:['BODY-0003'] },
    { id:'FRONT-0003', name:'A771系専用前面', compatibleBodies:['BODY-0003'] },
    { id:'FRONT-0004', name:'E531系風前面', compatibleBodies:['BODY-0004'] },
  ],
  liveries: [
    { id:'LIVERY-0001', name:'小戸電鉄標準色', base:'#f8fafc', stripe:'#38bdf8', accent:'#0f172a' },
    { id:'LIVERY-0002', name:'Wedding-Liner', base:'#ffffff', stripe:'#f9a8d4', accent:'#facc15' },
    { id:'LIVERY-0003', name:'近郊標準', base:'#f8fafc', stripe:'#22c55e', accent:'#334155' },
  ]
};
const defaultProject = () => ({
  app:'Railway Vehicle Studio', version:'0.1.0-beta', language:'ja-JP',
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
  ],
  formations:[
    {id:'FORMATION-0001', name:'A505-1', type:'single', depot:'留萌', vehicleIds:['VEHICLE-0001']},
    {id:'FORMATION-0002', name:'WE01', type:'fixed', depot:'潮シオ', vehicleIds:['VEHICLE-0101','VEHICLE-0102','VEHICLE-0103','VEHICLE-0104']},
    {id:'FORMATION-0003', name:'A531-01(仮10両)', type:'fixed', depot:'白夜総合', vehicleIds:Array(10).fill('VEHICLE-0201')},
  ],
  routes:[
    {id:'ROUTE-0001', name:'七神本線', maxCars:10, maxLengthMm:200000, gauge:1067, electrification:'DC1500V'},
    {id:'ROUTE-0002', name:'白夜線', maxCars:4, maxLengthMm:80000, gauge:1067, electrification:'DC1500V'},
    {id:'ROUTE-0003', name:'優香線', maxCars:2, maxLengthMm:40000, gauge:1067, electrification:'DC1500V'},
  ],
  settings:{theme:'RVS Dark', unit:'mm'}
});
let state = { screen:'start', project: loadLocal() || defaultProject(), selectedVehicleId:'VEHICLE-0001', selectedFormationId:'FORMATION-0002', selectedRouteId:'ROUTE-0002'};
function $(id){return document.getElementById(id)}
function body(id){return templates.bodies.find(x=>x.id===id)}
function livery(id){return templates.liveries.find(x=>x.id===id)}
function vehicle(id){return state.project.vehicles.find(x=>x.id===id)}
function formation(id){return state.project.formations.find(x=>x.id===id)}
function route(id){return state.project.routes.find(x=>x.id===id)}
function saveLocal(){ localStorage.setItem('rvs_beta01_project', JSON.stringify(state.project)); }
function loadLocal(){ try{return JSON.parse(localStorage.getItem('rvs_beta01_project'))}catch{return null} }
function render(){
  const app=$('app');
  if(state.screen==='start') return renderStart(app);
  renderMain(app);
}
function renderStart(app){
  app.innerHTML=`<div class="start"><h1>車両工房 RVS β0.1</h1><p class="warn">First Train / HTM 社内β</p><p>画像ではなく、設計データで車両を組む試作版。</p><div class="row"><button id="newProject">新規プロジェクト</button><button id="openFile">.rvsを開く</button><input id="fileInput" type="file" accept=".rvs,.json" style="display:none"></div><hr><button id="demo">小戸電鉄デモを開く</button></div>`;
  $('newProject').onclick=()=>{state.project=defaultProject(); state.screen='main'; saveLocal(); render();};
  $('demo').onclick=()=>{state.screen='main'; render();};
  $('openFile').onclick=()=>$('fileInput').click();
  $('fileInput').onchange=e=>readFile(e.target.files[0]);
}
function renderMain(app){
  const v=vehicle(state.selectedVehicleId);
  app.innerHTML=`<div class="topbar"><div class="brand">車両工房 RVS β0.1｜${state.project.project.nameJa}</div><div class="row" style="flex:0 0 auto"><button id="saveBtn">保存</button><button id="loadBtn">読込</button><button id="pngBtn">PNG出力</button><input id="fileInput" type="file" accept=".rvs,.json" style="display:none"></div></div>
  <div class="layout"><aside class="panel"><h3>ライブラリ</h3><div class="section"><b>車両</b><div class="list">${state.project.vehicles.map(x=>`<button data-v="${x.id}">${x.number}</button>`).join('')}</div></div><div class="section"><b>編成</b><div class="list">${state.project.formations.map(x=>`<button data-f="${x.id}">${x.name}</button>`).join('')}</div></div><div class="section"><b>路線</b><div class="list">${state.project.routes.map(x=>`<button data-r="${x.id}">${x.name}</button>`).join('')}</div></div></aside>
  <main class="panel canvasWrap"><h2>${v.number}</h2><div class="canvas" id="canvas">${vehicleSvg(v, 0.45)}</div><p class="status">DR→Template→Vehicle。画像は保存せず、SVGを設計データから生成。</p></main>
  <aside class="panel"><h3>プロパティ</h3><div class="section">${properties(v)}</div><div class="section"><h3>入線判定</h3>${compatibilityPanel()}</div><div class="section"><h3>HTM</h3><span class="pill">白夜車輌製造</span><span class="pill">Hakuya Train-Manufacturing</span></div></aside></div>`;
  document.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{state.selectedVehicleId=b.dataset.v; render();});
  document.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{state.selectedFormationId=b.dataset.f; render();});
  document.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{state.selectedRouteId=b.dataset.r; render();});
  $('saveBtn').onclick=downloadRvs; $('loadBtn').onclick=()=>$('fileInput').click(); $('fileInput').onchange=e=>readFile(e.target.files[0]); $('pngBtn').onclick=exportPng;
}
function properties(v){ const b=body(v.bodyId), l=livery(v.liveryId); return `<div class="kv"><span>車番</span><b>${v.number}</b><span>車種</span><b>${v.type}</b><span>車体</span><b>${b.name}</b><span>車体長</span><b>${b.lengthMm}mm</b><span>塗装</span><b>${l.name}</b><span>種別</span><b>${v.serviceType||''}</b><span>行先</span><b>${v.destination||''}</b></div>`; }
function formationLength(f){ return f.vehicleIds.reduce((sum,id)=>sum+(body(vehicle(id).bodyId)?.lengthMm||0),0); }
function compatibilityPanel(){ const f=formation(state.selectedFormationId), r=route(state.selectedRouteId); const cars=f.vehicleIds.length, len=formationLength(f); const ok=cars<=r.maxCars && len<=r.maxLengthMm; return `<div class="kv"><span>編成</span><b>${f.name}</b><span>路線</span><b>${r.name}</b><span>両数</span><b>${cars} / 最大${r.maxCars}</b><span>長さ</span><b>${len}mm / 最大${r.maxLengthMm}mm</b><span>結果</span><b class="${ok?'ok':'bad'}">${ok?'入線可能':'入線不可'}</b></div>`; }
function vehicleSvg(v, scale=1){
  const b=body(v.bodyId), liv=livery(v.liveryId); const W=b.lengthMm/10, H=260, y=70; const doorCount=b.doorCount; const doorW=70; const margin=150; const gap=(W-margin*2-doorW*doorCount)/(doorCount-1 || 1);
  let doors='', windows=''; for(let i=0;i<doorCount;i++){ const x=margin+i*(doorW+gap); doors+=`<rect x="${x}" y="${y+42}" width="${doorW}" height="130" fill="#dbeafe" stroke="#1e293b" stroke-width="4"/>`; if(i<doorCount-1){ const wx=x+doorW+30, ww=Math.max(80,gap-60); windows+=`<rect x="${wx}" y="${y+45}" width="${ww}" height="54" rx="8" fill="#0f766e" stroke="#0f172a" stroke-width="3"/>`; }}
  const front=v.frontId?`<path d="M20 ${y+15} L110 ${y+15} L130 ${y+45} L130 ${y+180} L20 ${y+180} Z" fill="${liv.base}" stroke="#0f172a" stroke-width="5"/><rect x="48" y="${y+42}" width="54" height="45" rx="8" fill="#164e63"/>`:'';
  const pantos=v.pantographs?Array.from({length:v.pantographs}).map((_,i)=>{const px=i===0?W*0.25:W*0.75; return `<path d="M${px-55} ${y-5} L${px} ${y-55} L${px+55} ${y-5}" fill="none" stroke="#e5e7eb" stroke-width="8"/><line x1="${px-75}" y1="${y-5}" x2="${px+75}" y2="${y-5}" stroke="#e5e7eb" stroke-width="6"/>`}).join(''):'';
  return `<svg id="vehicleSvg" xmlns="http://www.w3.org/2000/svg" width="${W*scale}" height="${H*scale}" viewBox="0 0 ${W} ${H}"><rect width="100%" height="100%" fill="#020617"/><g class="svgText"><rect x="20" y="${y+20}" width="${W-40}" height="160" rx="18" fill="${liv.base}" stroke="#0f172a" stroke-width="6"/>${front}<rect x="45" y="${y+115}" width="${W-90}" height="18" fill="${liv.stripe}"/><rect x="45" y="${y+137}" width="${W-90}" height="8" fill="${liv.accent}"/>${doors}${windows}${pantos}<rect x="${W-180}" y="${y+35}" width="105" height="32" rx="5" fill="#111827"/><text x="${W-128}" y="${y+58}" text-anchor="middle" font-size="22" fill="#facc15">${v.destination||''}</text><text x="${W/2}" y="${y+215}" text-anchor="middle" font-size="34" fill="#e5e7eb">${v.number}</text><text x="60" y="${y+215}" font-size="24" fill="#94a3b8">${v.serviceType||''}</text></g></svg>`;
}
function downloadRvs(){ state.project.project.updatedAt=new Date().toISOString(); const blob=new Blob([JSON.stringify(state.project,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`${state.project.project.nameJa}.rvs`; a.click(); saveLocal(); }
function readFile(file){ if(!file)return; const reader=new FileReader(); reader.onload=()=>{try{state.project=JSON.parse(reader.result); state.screen='main'; saveLocal(); render();}catch(e){alert('読み込み失敗')}}; reader.readAsText(file); }
function exportPng(){ const svg=document.getElementById('vehicleSvg'); const xml=new XMLSerializer().serializeToString(svg); const img=new Image(); const svg64='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(xml))); img.onload=()=>{const c=document.createElement('canvas'); c.width=svg.viewBox.baseVal.width; c.height=svg.viewBox.baseVal.height; const ctx=c.getContext('2d'); ctx.drawImage(img,0,0); const a=document.createElement('a'); a.href=c.toDataURL('image/png'); a.download=(vehicle(state.selectedVehicleId)?.number||'vehicle')+'.png'; a.click();}; img.src=svg64; }
render();
