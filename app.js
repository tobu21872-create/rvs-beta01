const templates = {
  bodies: [
    {id:'BODY-0001',dr:'DR-002',name:'キハ54形500番台風',class:'Class21M',lengthMm:21300,doorCount:2,type:'diesel',pattern:'kiha54',roof:'diesel',widthMm:2800,source:'HTM Data'},
    {id:'BODY-0002',dr:'DR-TBD',name:'キハ40風',class:'Class21M',lengthMm:21300,doorCount:2,type:'diesel_old',pattern:'kiha40',roof:'diesel_old',widthMm:2900,source:'仮枠'},
    {id:'BODY-0003',dr:'DR-003',name:'東急5000系風',class:'Class20M',lengthMm:20000,doorCount:4,type:'commuter',pattern:'tokyu5000',roof:'commuter',widthMm:2800,source:'HTM Data'},
    {id:'BODY-0004',dr:'DR-004',name:'E531系風',class:'Class20M',lengthMm:20000,doorCount:4,type:'suburban_acdc',pattern:'e531',roof:'acdc_suburban',widthMm:2950,source:'HTM Data'},
    {id:'BODY-0004G',dr:'DR-004A/B',name:'E531系グリーン車風',class:'Class20M-G',lengthMm:20000,doorCount:2,type:'green_double_deck',pattern:'e531_green',roof:'green_car',widthMm:2950,source:'HTM Data'},
    {id:'BODY-0005',dr:'DR-005',name:'313系5000番台風',class:'Class20M-3D',lengthMm:20000,doorCount:3,type:'suburban_3door',pattern:'313_5000',roof:'jr_central',widthMm:2950,source:'HTM Data'},
    {id:'BODY-0006',dr:'DR-006',name:'521系100/0番台風',class:'Class20M-ACDC',lengthMm:20000,doorCount:3,type:'acdc_3door',pattern:'521',roof:'acdc_2car',widthMm:2950,source:'HTM Data'},
    {id:'BODY-0007',dr:'DR-007',name:'E259系風',class:'Class20M-L',lengthMm:21000,doorCount:1,type:'limited_express',pattern:'e259',roof:'limited',widthMm:2946,source:'HTM Data'},
    {id:'BODY-0008',dr:'DR-008',name:'205系5000番台風',class:'Class20M',lengthMm:20000,doorCount:4,type:'commuter',pattern:'205_5000',roof:'commuter',widthMm:2800,source:'HTM Data'},
    {id:'BODY-0009',dr:'DR-010',name:'209系0番台風',class:'Class20M',lengthMm:20000,doorCount:4,type:'commuter',pattern:'209_0',roof:'commuter',widthMm:2800,source:'HTM Data'},
    {id:'BODY-0010',dr:'DR-009',name:'BEC819系風',class:'Class20M-Battery',lengthMm:20000,doorCount:3,type:'battery_emu',pattern:'bec819',roof:'battery',widthMm:2950,source:'HTM Data'},
    {id:'BODY-0011',dr:'DR-011',name:'787系風',class:'Class20M-LX',lengthMm:21000,doorCount:1,type:'limited_express',pattern:'787',roof:'limited',widthMm:2950,source:'HTM Data'},
    {id:'BODY-0012',dr:'DR-TBD',name:'東武10030系風',class:'Class20M',lengthMm:20000,doorCount:4,type:'commuter_private',pattern:'tobu10030',roof:'commuter',widthMm:2800,source:'仮枠'},
    {id:'BODY-0013',dr:'DR-TBD',name:'東京メトロ8000系風',class:'Class20M',lengthMm:20000,doorCount:4,type:'subway',pattern:'metro8000',roof:'subway',widthMm:2800,source:'仮枠'},
    {id:'BODY-0014',dr:'DR-TBD',name:'E233系3000番台風',class:'Class20M',lengthMm:20000,doorCount:4,type:'suburban',pattern:'e233_3000',roof:'suburban',widthMm:2950,source:'仮枠'},
  ],
  fronts: [
    {id:'FRONT-0001',name:'キハ54形500番台風前面',compatibleBodies:['BODY-0001'],shape:'flat_diesel'},
    {id:'FRONT-0002',name:'東急5000系風前面',compatibleBodies:['BODY-0003'],compatibleTypes:['commuter','commuter_private','subway'],shape:'rounded_commuter'},
    {id:'FRONT-0003',name:'A771系専用前面',compatibleBodies:['BODY-0003'],shape:'a771'},
    {id:'FRONT-0004',name:'E531系風前面',compatibleBodies:['BODY-0004','BODY-0014'],shape:'suburban'},
    {id:'FRONT-0005',name:'313系風前面',compatibleBodies:['BODY-0005'],shape:'jr_central'},
    {id:'FRONT-0006',name:'521/BEC819系風前面',compatibleBodies:['BODY-0006','BODY-0010'],shape:'local_acdc'},
    {id:'FRONT-0007',name:'E259系風前面',compatibleBodies:['BODY-0007'],shape:'limited_e259'},
    {id:'FRONT-0008',name:'205系風前面',compatibleBodies:['BODY-0008'],shape:'205'},
    {id:'FRONT-0009',name:'209系風前面',compatibleBodies:['BODY-0009'],shape:'209'},
    {id:'FRONT-0011',name:'787系風前面',compatibleBodies:['BODY-0011'],shape:'787'},
  ],
  liveries: [
    {id:'LIVERY-0001',name:'小戸電鉄標準色',base:'#f8fafc',stripe:'#38bdf8',accent:'#0f172a'},
    {id:'LIVERY-0002',name:'Wedding-Liner',base:'#ffffff',stripe:'#f9a8d4',accent:'#facc15',sparkle:true},
    {id:'LIVERY-0003',name:'近郊標準',base:'#f8fafc',stripe:'#22c55e',accent:'#334155'},
    {id:'LIVERY-0004',name:'E259旧塗装風',base:'#f8fafc',stripe:'#ef4444',accent:'#111827'},
    {id:'LIVERY-0005',name:'E259現塗装風',base:'#f8fafc',stripe:'#64748b',accent:'#ef4444'},
    {id:'LIVERY-0006',name:'JR東海風',base:'#f8fafc',stripe:'#f97316',accent:'#22c55e'},
    {id:'LIVERY-0007',name:'521系赤帯風',base:'#f8fafc',stripe:'#b91c1c',accent:'#7f1d1d'},
    {id:'LIVERY-0008',name:'ハピライン風',base:'#cbd5e1',stripe:'#ec4899',accent:'#84cc16'},
    {id:'LIVERY-0009',name:'787系風',base:'#1f2937',stripe:'#6b7280',accent:'#f59e0b'},
    {id:'LIVERY-0010',name:'205系オレンジ風',base:'#f8fafc',stripe:'#f97316',accent:'#64748b'},
    {id:'LIVERY-0011',name:'209系水色風',base:'#f8fafc',stripe:'#38bdf8',accent:'#64748b'},
  ]
};

const defaultProject = () => ({
  app:'Railway Vehicle Studio', version:'0.3.0-beta', language:'ja-JP',
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
    {id:'VEHICLE-0701', number:'205系5000番台風', type:'Tc', bodyId:'BODY-0008', frontId:'FRONT-0008', liveryId:'LIVERY-0010', destination:'府中本町', serviceType:'普通'},
    {id:'VEHICLE-0801', number:'BEC819系風', type:'Mc', bodyId:'BODY-0010', frontId:'FRONT-0006', liveryId:'LIVERY-0001', destination:'若松', serviceType:'普通'},
    {id:'VEHICLE-0901', number:'209系0番台風', type:'Tc', bodyId:'BODY-0009', frontId:'FRONT-0009', liveryId:'LIVERY-0011', destination:'南浦和', serviceType:'各停'},
    {id:'VEHICLE-1001', number:'787系風', type:'Tc', bodyId:'BODY-0011', frontId:'FRONT-0011', liveryId:'LIVERY-0009', destination:'博多', serviceType:'特急'},
    {id:'VEHICLE-1101', number:'東武10030系風', type:'Tc', bodyId:'BODY-0012', frontId:'FRONT-0002', liveryId:'LIVERY-0001', destination:'浅草', serviceType:'普通'},
    {id:'VEHICLE-1201', number:'東京メトロ8000系風', type:'Tc', bodyId:'BODY-0013', frontId:'FRONT-0002', liveryId:'LIVERY-0003', destination:'中央林間', serviceType:'各停'},
    {id:'VEHICLE-1301', number:'E233系3000番台風', type:'Tc', bodyId:'BODY-0014', frontId:'FRONT-0004', liveryId:'LIVERY-0003', destination:'熱海', serviceType:'普通'},
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

const LS_KEY='rvs_beta03_project';
let state = { screen:'start', project: loadLocal() || defaultProject(), selectedVehicleId:'VEHICLE-0102', selectedFormationId:'FORMATION-0002', selectedRouteId:'ROUTE-0002'};
function $(id){return document.getElementById(id)}
function body(id){return templates.bodies.find(x=>x.id===id)}
function front(id){return templates.fronts.find(x=>x.id===id)}
function livery(id){return templates.liveries.find(x=>x.id===id)}
function vehicle(id){return state.project.vehicles.find(x=>x.id===id)}
function formation(id){return state.project.formations.find(x=>x.id===id)}
function route(id){return state.project.routes.find(x=>x.id===id)}
function saveLocal(){ localStorage.setItem(LS_KEY, JSON.stringify(state.project)); }
function loadLocal(){ try{return JSON.parse(localStorage.getItem(LS_KEY));}catch(e){return null} }
function render(){ const app=$('app'); if(state.screen==='start'){renderStart(app)} else {renderMain(app)} }
function renderStart(app){ app.innerHTML=`<div class="start"><h1>車両工房 RVS β0.3</h1><p>First Train / HTM社内β</p><p>図形集合体を粛清し、DR構造テンプレートからSVGを生成する試作版。</p><button id="newBtn">新規プロジェクト</button><button id="openBtn">.rvsを開く</button><input id="openFile" type="file" accept=".rvs,.json" style="display:none"><hr><button id="demoBtn">小戸電鉄デモを開く</button></div>`; $('demoBtn').onclick=()=>{state.screen='main';render()}; $('newBtn').onclick=()=>{state.project=defaultProject(); state.screen='main'; saveLocal(); render()}; $('openBtn').onclick=()=>$('openFile').click(); $('openFile').onchange=e=>readFile(e.target.files[0]); }
function renderMain(app){ const v=vehicle(state.selectedVehicleId)||state.project.vehicles[0]; state.selectedVehicleId=v.id; app.innerHTML=`<div class="top"><div class="brand">車両工房 RVS β0.3｜${state.project.project.nameJa}</div><div class="toolbar"><button id="saveBtn">.rvs保存</button><button id="loadBtn">読込</button><button id="pngBtn">PNG出力</button><button id="resetBtn">デモ再読込</button><input id="fileInput" type="file" accept=".rvs,.json" style="display:none"></div></div>
<div class="layout"><aside class="panel"><h3>ライブラリ</h3><div class="section"><b>車両サンプル</b><div class="list">${state.project.vehicles.map(x=>`<button class="${x.id===state.selectedVehicleId?'active':''}" data-v="${x.id}">${x.number}<span class="badge">${body(x.bodyId)?.dr||''}</span></button>`).join('')}</div></div><div class="section"><b>編成</b><div class="list">${state.project.formations.map(x=>`<button class="${x.id===state.selectedFormationId?'active':''}" data-f="${x.id}">${x.name}</button>`).join('')}</div></div><div class="section"><b>路線</b><div class="list">${state.project.routes.map(x=>`<button class="${x.id===state.selectedRouteId?'active':''}" data-r="${x.id}">${x.name}</button>`).join('')}</div></div></aside>
<main class="panel canvasWrap"><h2>${v.number}</h2><div class="canvas" id="canvas">${vehicleSvg(v, mobileScale())}</div><p class="status">β0.3：DRごとのドア・窓・前面・屋根差分をSVG構造化。画像は保存せず、設計データのみで生成。</p></main>
<aside class="panel"><h3>ビルダー</h3><div class="section">${builderPanel(v)}</div><div class="section"><h3>プロパティ</h3>${properties(v)}</div><div class="section"><h3>入線判定</h3>${compatibilityPanel()}</div><div class="section"><h3>HTM</h3><span class="pill">白夜車輌製造</span><span class="pill">Hakuya Train-Manufacturing</span><p class="credit">公開時クレジット推奨：Created with RVS / HTM</p></div></aside></div>`;
  document.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{state.selectedVehicleId=b.dataset.v; render();});
  document.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{state.selectedFormationId=b.dataset.f; render();});
  document.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{state.selectedRouteId=b.dataset.r; render();});
  $('bodySel').onchange=e=>{v.bodyId=e.target.value; v.frontId=autoFront(v.bodyId); saveLocal(); render();};
  $('frontSel').onchange=e=>{v.frontId=e.target.value || null; saveLocal(); render();};
  $('liverySel').onchange=e=>{v.liveryId=e.target.value; saveLocal(); render();};
  $('pantoSel').onchange=e=>{v.pantographs=Number(e.target.value); saveLocal(); render();};
  ['numInput','destInput','svcInput'].forEach(id=>$(id).onchange=e=>{ if(id==='numInput')v.number=e.target.value; if(id==='destInput')v.destination=e.target.value; if(id==='svcInput')v.serviceType=e.target.value; saveLocal(); render(); });
  $('saveBtn').onclick=downloadRvs; $('loadBtn').onclick=()=>$('fileInput').click(); $('fileInput').onchange=e=>readFile(e.target.files[0]); $('pngBtn').onclick=exportPng; $('resetBtn').onclick=()=>{localStorage.removeItem(LS_KEY); state.project=defaultProject(); render();};
}
function mobileScale(){ return window.innerWidth<900 ? 0.34 : 0.50; }
function compatibleFronts(v){ const b=body(v.bodyId); return templates.fronts.filter(f=>!f.compatibleBodies || f.compatibleBodies.includes(b.id) || (f.compatibleTypes||[]).includes(b.type)); }
function autoFront(bodyId){ const b=body(bodyId); const f=templates.fronts.find(x=>(x.compatibleBodies||[]).includes(bodyId)) || templates.fronts.find(x=>(x.compatibleTypes||[]).includes(b.type)); return f?.id || null; }
function builderPanel(v){ return `<label>車番<input id="numInput" value="${v.number||''}"></label><div class="grid2"><label>種別<input id="svcInput" value="${v.serviceType||''}"></label><label>行先<input id="destInput" value="${v.destination||''}"></label></div><label>車体<select id="bodySel">${templates.bodies.map(b=>`<option value="${b.id}" ${b.id===v.bodyId?'selected':''}>${b.id} ${b.name}</option>`).join('')}</select></label><label>前面<select id="frontSel"><option value="">なし/中間車</option>${compatibleFronts(v).map(f=>`<option value="${f.id}" ${f.id===v.frontId?'selected':''}>${f.id} ${f.name}</option>`).join('')}</select></label><label>塗装<select id="liverySel">${templates.liveries.map(l=>`<option value="${l.id}" ${l.id===v.liveryId?'selected':''}>${l.id} ${l.name}</option>`).join('')}</select></label><label>パンタ<select id="pantoSel"><option value="0" ${!v.pantographs?'selected':''}>なし</option><option value="1" ${v.pantographs===1?'selected':''}>1基</option><option value="2" ${v.pantographs===2?'selected':''}>2基</option></select></label>`; }
function properties(v){ const b=body(v.bodyId), l=livery(v.liveryId), f=front(v.frontId); return `<div class="kv"><span>車番</span><b>${v.number}</b><span>車種</span><b>${v.type}</b><span>車体</span><b>${b.name}</b><span>DR</span><b>${b.dr}</b><span>車体長</span><b>${b.lengthMm}mm</b><span>ドア数</span><b>${b.doorCount}</b><span>前面</span><b>${f?.name||'なし'}</b><span>塗装</span><b>${l.name}</b></div>`; }
function formationLength(f){ return f.vehicleIds.reduce((sum,id)=>sum+(body(vehicle(id)?.bodyId)?.lengthMm||0),0); }
function compatibilityPanel(){ const f=formation(state.selectedFormationId), r=route(state.selectedRouteId); const cars=f.vehicleIds.length, len=formationLength(f); const ok=cars<=r.maxCars && len<=r.maxLengthMm; return `<div class="kv"><span>編成</span><b>${f.name}</b><span>路線</span><b>${r.name}</b><span>両数</span><b>${cars} / 最大${r.maxCars}</b><span>長さ</span><b>${len}mm / 最大${r.maxLengthMm}mm</b><span>結果</span><b class="${ok?'ok':'bad'}">${ok?'入線可能':'入線不可'}</b></div>`; }

function geom(b,W){
  const p=b.pattern;
  if(p==='kiha54') return {doorXs:[170, W-245], doorW:75, cab:120, windows:[310,480,650,820,990,1160,1330,1500].map(x=>[x,95]), roofBoxes:[[W*.42,22,W*.16,26]], skirt:false};
  if(p==='kiha40') return {doorXs:[150,W-240], doorW:80,cab:135,windows:[300,480,660,840,1020,1200,1380,1560].map(x=>[x,90]), roofBoxes:[[W*.25,20,180,24],[W*.60,20,180,24]], skirt:false};
  if(p==='tokyu5000') return {doorXs:[210,520,860,1190].map(x=>x*W/1400), doorW:78, cab:120, windows:[[350*W/1400,155],[660*W/1400,145],[1000*W/1400,145],[1310*W/1400,70]], roofBoxes:[[W*.42,18,W*.20,36]], skirt:true};
  if(p==='e531'||p==='e233_3000') return {doorXs:[170,500,830,1160].map(x=>x*W/1400), doorW:76,cab:110,windows:[[300*W/1400,135],[635*W/1400,155],[970*W/1400,150],[1290*W/1400,65]], roofBoxes:[[W*.38,18,W*.22,34]], skirt:true};
  if(p==='e531_green') return {doorXs:[250*W/1400,1120*W/1400], doorW:76,cab:0, doubleDeck:true, windows:Array.from({length:8},(_,i)=>[350*W/1400+i*95*W/1400,70*W/1400]), roofBoxes:[[W*.42,20,W*.20,26]], skirt:true};
  if(p==='313_5000') return {doorXs:[210,700,1190].map(x=>x*W/1400),doorW:76,cab:115,windows:[[330*W/1400,105],[455*W/1400,105],[820*W/1400,105],[945*W/1400,105],[1300*W/1400,70]],roofBoxes:[[W*.25,18,150,28],[W*.55,18,150,28]],skirt:true};
  if(p==='521'||p==='bec819') return {doorXs:[230,700,1170].map(x=>x*W/1400),doorW:78,cab:115,windows:[[360*W/1400,150],[825*W/1400,145],[1270*W/1400,70]],roofBoxes:[[W*.28,18,170,30],[W*.60,18,170,30]],skirt:true};
  if(p==='e259') return {doorXs:[210*W/1500],doorW:70,cab:170,nose:true,windows:Array.from({length:6},(_,i)=>[390*W/1500+i*155*W/1500,125*W/1500]),roofBoxes:[[W*.20,18,140,24],[W*.55,18,160,24]],skirt:true};
  if(p==='787') return {doorXs:[250*W/1500],doorW:70,cab:170,nose:true,windows:Array.from({length:8},(_,i)=>[380*W/1500+i*115*W/1500,88*W/1500]),roofBoxes:[[W*.22,20,140,22],[W*.58,20,140,22]],skirt:true};
  if(p==='205_5000') return {doorXs:[175,505,835,1165].map(x=>x*W/1400),doorW:72,cab:110,windows:[[285*W/1400,130],[620*W/1400,130],[950*W/1400,130],[1285*W/1400,70]],roofBoxes:[[W*.40,20,W*.20,25]],skirt:false};
  if(p==='209_0') return {doorXs:[180,505,835,1160].map(x=>x*W/1400),doorW:74,cab:110,windows:[[300*W/1400,145],[635*W/1400,145],[965*W/1400,145],[1280*W/1400,70]],roofBoxes:[[W*.38,18,W*.22,30]],skirt:true};
  if(p==='tobu10030'||p==='metro8000') return {doorXs:[180,500,835,1165].map(x=>x*W/1400),doorW:72,cab:115,windows:[[295*W/1400,135],[625*W/1400,135],[965*W/1400,135],[1285*W/1400,70]],roofBoxes:[[W*.18,18,150,24],[W*.55,18,150,24]],skirt:false};
  return {doorXs:[W*.2,W*.45,W*.7,W*.88],doorW:72,cab:100,windows:[[W*.32,130],[W*.57,130],[W*.82,80]],roofBoxes:[[W*.4,20,W*.2,30]],skirt:true};
}
function roundRect(x,y,w,h,rx,fill,stroke='#0f172a',sw=3){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`}
function drawFront(v,b,liv,W,y,g){
  if(!v.frontId) return '';
  const f=front(v.frontId); const shape=f?.shape||'flat';
  if(shape==='limited_e259') return `<path d="M20 ${y+30} C55 ${y+12},105 ${y+12},165 ${y+45} L145 ${y+182} L20 ${y+182} Z" fill="${liv.base}" stroke="#0f172a" stroke-width="5"/><rect x="60" y="${y+48}" width="68" height="42" rx="14" fill="#164e63"/><path d="M38 ${y+120} L145 ${y+120}" stroke="${liv.stripe}" stroke-width="16"/>`;
  if(shape==='787') return `<path d="M20 ${y+32} C78 ${y+15},135 ${y+26},170 ${y+70} L145 ${y+182} L20 ${y+182} Z" fill="${liv.base}" stroke="#0f172a" stroke-width="5"/><rect x="62" y="${y+48}" width="76" height="38" rx="10" fill="#111827"/><circle cx="105" cy="${y+120}" r="15" fill="${liv.accent}"/>`;
  if(shape==='a771') return `<path d="M20 ${y+20} L110 ${y+20} L140 ${y+55} L130 ${y+182} L20 ${y+182} Z" fill="${liv.base}" stroke="#0f172a" stroke-width="5"/><rect x="48" y="${y+48}" width="58" height="48" rx="10" fill="#064e3b"/><circle cx="95" cy="${y+132}" r="25" fill="none" stroke="${liv.accent}" stroke-width="7"/>`;
  return `<path d="M20 ${y+22} L100 ${y+22} L132 ${y+55} L132 ${y+182} L20 ${y+182} Z" fill="${liv.base}" stroke="#0f172a" stroke-width="5"/><rect x="48" y="${y+48}" width="58" height="48" rx="8" fill="#164e63"/>`;
}
function drawDoors(g,y,liv){return g.doorXs.map(x=>`${roundRect(x,y+55,g.doorW,128,8,'#dbeafe','#1e293b',4)}<line x1="${x+g.doorW/2}" y1="${y+60}" x2="${x+g.doorW/2}" y2="${y+178}" stroke="#1e293b" stroke-width="2"/><rect x="${x+14}" y="${y+75}" width="${g.doorW-28}" height="42" rx="6" fill="#14532d" opacity=".75"/>`).join('')}
function drawWindows(g,y,b){
  if(g.doubleDeck){ return g.windows.map(([x,w])=>`${roundRect(x,y+40,w,38,6,'#0f766e')} ${roundRect(x,y+105,w,38,6,'#0f766e')}`).join('') }
  return g.windows.map(([x,w])=>roundRect(x,y+66,w,58,b.type.includes('limited')?12:8,'#0f766e')).join('')
}
function drawRoof(g,y,b,v,W){ const boxes=(g.roofBoxes||[]).map(([x,yy,w,h])=>roundRect(x,y-yy,w,h,6,'#cbd5e1','#334155',2)).join(''); const p=Number(v.pantographs||0); const pantos=Array.from({length:p}).map((_,i)=>{const px=p===1?W*.62:(i===0?W*.28:W*.72); const dir=p===2?(i===0?1:-1):1; return `<g><path d="M${px-70*dir} ${y+6} L${px} ${y-55} L${px+70*dir} ${y+6}" fill="none" stroke="#e5e7eb" stroke-width="7"/><line x1="${px-90}" y1="${y+6}" x2="${px+90}" y2="${y+6}" stroke="#e5e7eb" stroke-width="6"/></g>`}).join(''); return boxes+pantos; }
function drawUnderfloor(g,y,W,b){ const count=b.type.includes('limited')?5:7; return Array.from({length:count},(_,i)=>roundRect(160+i*((W-320)/count),y+205,(W-430)/count,34,5,'#374151','#111827',2)).join('') }
function sparkles(liv,W,y){ if(!liv.sparkle) return ''; let s=''; for(let i=0;i<24;i++){const x=120+((i*127)%Math.max(200,W-240)); const yy=y+130+((i*31)%45); s+=`<circle cx="${x}" cy="${yy}" r="${2+(i%3)}" fill="#fecdd3" opacity=".9"/>`;} return s; }
function vehicleSvg(v, scale=1){
  const b=body(v.bodyId), liv=livery(v.liveryId); const W=b.lengthMm/10, H=340, y=88, g=geom(b,W);
  const bodyShape=b.type.includes('limited')?`<path d="M20 ${y+32} L${W-36} ${y+32} L${W-20} ${y+56} L${W-20} ${y+190} L20 ${y+190} Z" fill="${liv.base}" stroke="#0f172a" stroke-width="6"/>`:roundRect(20,y+28,W-40,164,18,liv.base,'#0f172a',6);
  const skirt=g.skirt?`<rect x="45" y="${y+182}" width="${W-90}" height="18" fill="#111827" opacity=".65"/>`:'';
  return `<svg id="vehicleSvg" xmlns="http://www.w3.org/2000/svg" width="${W*scale}" height="${H*scale}" viewBox="0 0 ${W} ${H}"><rect width="100%" height="100%" fill="#020617"/><g>${drawRoof(g,y,b,v,W)}${bodyShape}${drawFront(v,b,liv,W,y,g)}<rect x="45" y="${y+124}" width="${W-90}" height="18" fill="${liv.stripe}"/><rect x="45" y="${y+148}" width="${W-90}" height="8" fill="${liv.accent}"/>${sparkles(liv,W,y)}${drawDoors(g,y,liv)}${drawWindows(g,y,b)}${skirt}${drawUnderfloor(g,y,W,b)}<rect x="${W-190}" y="${y+44}" width="112" height="34" rx="5" fill="#111827"/><text x="${W-134}" y="${y+68}" text-anchor="middle" font-size="22" fill="#facc15">${v.destination||''}</text><text x="${W/2}" y="${y+282}" text-anchor="middle" font-size="34" fill="#e5e7eb">${v.number}</text><text x="60" y="${y+282}" font-size="24" fill="#94a3b8">${v.serviceType||''}</text><text x="${W-60}" y="${y+282}" text-anchor="end" font-size="18" fill="#64748b">${b.dr}</text></g></svg>`;
}
function downloadRvs(){ state.project.project.updatedAt=new Date().toISOString(); const blob=new Blob([JSON.stringify(state.project,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`${state.project.project.nameJa}.rvs`; a.click(); saveLocal(); }
function readFile(file){ if(!file)return; const reader=new FileReader(); reader.onload=()=>{try{state.project=JSON.parse(reader.result); state.screen='main'; saveLocal(); render();}catch(e){alert('読み込み失敗')}}; reader.readAsText(file); }
function exportPng(){ const svg=document.getElementById('vehicleSvg'); const xml=new XMLSerializer().serializeToString(svg); const img=new Image(); const svg64='data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(xml))); img.onload=()=>{const c=document.createElement('canvas'); c.width=svg.viewBox.baseVal.width; c.height=svg.viewBox.baseVal.height; const ctx=c.getContext('2d'); ctx.drawImage(img,0,0); const a=document.createElement('a'); a.href=c.toDataURL('image/png'); a.download=(vehicle(state.selectedVehicleId)?.number||'vehicle')+'.png'; a.click();}; img.src=svg64; }
render();
