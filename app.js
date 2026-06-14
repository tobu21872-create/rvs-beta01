const lib={
 bodies:[
  {id:'BODY-0001',dr:'DR-002',name:'キハ54形500番台',len:21300,doors:2,windows:'diesel',type:'diesel',class:'Class21M'},
  {id:'BODY-0002',dr:'DR-012',name:'東武10030系',len:20000,doors:4,windows:'commuter',type:'commuter',class:'Class20M'},
  {id:'BODY-0003',dr:'DR-003',name:'東急5000系',len:20000,doors:4,windows:'tokyu5000',type:'commuter',class:'Class20M'},
  {id:'BODY-0004',dr:'DR-004',name:'E531系',len:20000,doors:4,windows:'e531',type:'suburban',class:'Class20M'},
  {id:'BODY-0004G',dr:'DR-004A/B',name:'E531系グリーン車',len:20000,doors:2,windows:'doubledeck',type:'green',class:'Class20M-G'},
  {id:'BODY-0005',dr:'DR-005',name:'313系5000番台',len:20000,doors:3,windows:'313',type:'suburban3',class:'Class20M-3D'},
  {id:'BODY-0006',dr:'DR-006',name:'521系100番台',len:20000,doors:3,windows:'521',type:'acdc',class:'Class20M-ACDC'},
  {id:'BODY-0007',dr:'DR-007',name:'E259系',len:21000,doors:1,windows:'limited',type:'limited',class:'Class21M-L'},
  {id:'BODY-0008',dr:'DR-008',name:'205系5000番台',len:20000,doors:4,windows:'205',type:'commuter',class:'Class20M'},
  {id:'BODY-0009',dr:'DR-010',name:'209系0番台',len:20000,doors:4,windows:'209',type:'commuter',class:'Class20M'},
  {id:'BODY-0010',dr:'DR-009',name:'BEC819系',len:20000,doors:3,windows:'bec819',type:'battery',class:'Class20M-B'},
  {id:'BODY-0011',dr:'DR-011',name:'787系',len:21000,doors:1,windows:'787',type:'limited',class:'Class21M-LX'}
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
  {id:'ROOF-0001',name:'気動車屋根',panto:0,ac:3},
  {id:'ROOF-0002',name:'20m通勤標準',panto:0,ac:1},
  {id:'ROOF-0003',name:'A771ダブルパンタ',panto:2,ac:1},
  {id:'ROOF-0004',name:'E531パンタ付き',panto:1,ac:1},
  {id:'ROOF-0005',name:'近郊3ドア標準',panto:1,ac:2},
  {id:'ROOF-0006',name:'特急標準',panto:0,ac:3}
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
 const app=$('#app'); const body=by(lib.bodies,state.body), front=by(lib.fronts,state.front), roof=by(lib.roofs,state.roof), liv=by(lib.liveries,state.livery);
 app.innerHTML=`<header><h1>車両工房 RVS β0.4｜${state.project}</h1><div class="toolbar"><button class="primary" onclick="saveRvs()">.rvs保存</button><button onclick="loadRvs()">読込</button><button onclick="exportPng()">PNG出力</button><button onclick="loadDemo()">デモ再読込</button></div></header>
 <main class="layout"><section class="card"><h2>組立工場</h2><div class="inner">
 ${selector('車体 BODY','body',lib.bodies)}${selector('前面 FRONT','front',compatibleFronts())}${selector('屋根 ROOF','roof',lib.roofs)}${selector('塗装 LIVERY','livery',lib.liveries)}
 <h3>車両情報</h3><div class="row"><label>車番</label><input value="${state.vehicleNumber}" oninput="state.vehicleNumber=this.value;render()"></div><div class="row"><label>種別</label><input value="${state.service}" oninput="state.service=this.value;render()"></div><div class="row"><label>表示</label><input value="${state.destination}" oninput="state.destination=this.value;render()"></div>
 </div></section><section class="card"><h2>${state.vehicleNumber}</h2><div class="preview"><div class="svgWrap">${vehicleSvg(body,front,roof,liv)}</div></div><div class="credit">DR→Template→Vehicle。画像は保存せず、設計データからSVG生成。提供：白夜車輌製造（Hakuya Train-Manufacturing）</div></section><aside class="card"><h2>プロパティ</h2><div class="inner"><div class="meta"><b>${body.name}</b><br>${body.id} / ${body.dr}<br>車体長 ${body.len.toLocaleString()} mm<br>ドア数 片側${body.doors}扉<br>Class ${body.class}<br><br><b>${front.name}</b><br>${front.id}<br><br><b>${roof.name}</b><br>${roof.id}<br>パンタ ${roof.panto} / 冷房 ${roof.ac}<br><br><b>${liv.name}</b><br>${liv.id}</div><h3>互換性</h3><div class="status">${compatibility(body,front)}</div></div></aside></main>`;
}
function selector(title,key,items){return `<h3>${title}</h3><select onchange="state.${key}=this.value;if('${key}'==='body'&&!compatibleFronts().some(f=>f.id===state.front))state.front='FRONT-0000';render()">${items.map(i=>`<option value="${i.id}" ${state[key]===i.id?'selected':''}>${i.name}｜${i.id}${i.dr?'｜'+i.dr:''}</option>`).join('')}</select>`}
function compatibility(body,front){let ok=front.compatible==='any'||front.compatible.includes(body.id);return ok?'<span class="ok">● 前面互換OK</span><span class="ok">● SVG生成OK</span>':'<span class="bad">● 前面非互換</span>'}
function vehicleSvg(b,f,r,l){const W=1000,H=250,bodyY=70,bodyH=110,cab=70;let stripeY=bodyY+65;let doors=doorXs(b.doors);let wins=windows(b.windows,b.doors);let roof=roofSvg(r,W);let front=frontSvg(f,bodyY,bodyH,cab,l);return `<svg id="rvs-svg" viewBox="0 0 ${W} ${H}" width="1000" height="250" xmlns="http://www.w3.org/2000/svg"><rect width="1000" height="250" fill="#050915"/><g id="roof">${roof}</g><g id="body"><rect x="35" y="${bodyY}" width="930" height="${bodyH}" rx="${b.type.includes('limited')?18:4}" fill="${l.base}" stroke="#0f172a" stroke-width="5"/><rect x="40" y="${stripeY}" width="920" height="10" fill="${l.stripe}"/><rect x="40" y="${stripeY+14}" width="920" height="4" fill="${l.accent}" opacity=".8"/>${front.left}${front.right}</g><g id="doors">${doors.map(x=>door(x,bodyY)).join('')}</g><g id="windows">${wins.map(w=>win(w.x,w.y||bodyY+28,w.w,w.h||28)).join('')}</g><g id="text"><text x="500" y="63" text-anchor="middle" font-size="14" fill="#e5e7eb">${state.vehicleNumber}</text><rect x="450" y="88" width="100" height="18" rx="4" fill="#111827"/><text x="500" y="102" text-anchor="middle" font-size="10" fill="#f8fafc">${state.destination}</text><text x="42" y="205" font-size="12" fill="#94a3b8">${b.id} + ${f.id} + ${r.id} + ${l.id}</text></g><g id="under"><rect x="120" y="182" width="150" height="24" fill="#111827"/><rect x="390" y="182" width="250" height="28" fill="#111827"/><rect x="735" y="182" width="140" height="24" fill="#111827"/><circle cx="160" cy="205" r="22" fill="#020617" stroke="#475569"/><circle cx="225" cy="205" r="22" fill="#020617" stroke="#475569"/><circle cx="775" cy="205" r="22" fill="#020617" stroke="#475569"/><circle cx="840" cy="205" r="22" fill="#020617" stroke="#475569"/></g></svg>`}
function doorXs(n){if(n===1)return[815];if(n===2)return[180,780];if(n===3)return[150,500,850];return[165,380,620,835]}
function windows(pattern,doors){if(pattern==='doubledeck')return[{x:230,y:88,w:90,h:24},{x:350,y:88,w:90,h:24},{x:510,y:88,w:90,h:24},{x:650,y:88,w:90,h:24},{x:260,y:132,w:120,h:24},{x:510,y:132,w:120,h:24}];if(pattern==='limited'||pattern==='787')return[{x:170,w:250,h:24},{x:450,w:250,h:24},{x:730,w:120,h:24}];if(pattern==='diesel')return[{x:95,w:35},{x:290,w:80},{x:400,w:80},{x:510,w:80},{x:620,w:80},{x:735,w:35}];if(doors===3)return[{x:235,w:150},{x:430,w:120},{x:605,w:150},{x:780,w:55}];return[{x:90,w:45},{x:255,w:105},{x:455,w:115},{x:690,w:110},{x:905,w:45}]}
function door(x,y){return `<rect x="${x}" y="${y+14}" width="58" height="92" rx="5" fill="#e2e8f0" stroke="#1e293b" stroke-width="3"/><line x1="${x+29}" y1="${y+18}" x2="${x+29}" y2="${y+104}" stroke="#475569"/><rect x="${x+8}" y="${y+28}" width="17" height="38" rx="3" fill="#164e63"/><rect x="${x+33}" y="${y+28}" width="17" height="38" rx="3" fill="#164e63"/>`}
function win(x,y,w,h){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="#0f766e" stroke="#0f172a" stroke-width="3" opacity=".95"/>`}
function roofSvg(r,W){let s=`<rect x="90" y="55" width="820" height="8" fill="#94a3b8"/>`;for(let i=0;i<r.ac;i++){s+=`<rect x="${350+i*95}" y="36" width="70" height="18" rx="3" fill="#cbd5e1" stroke="#64748b"/>`}if(r.panto>0){let xs=r.panto===2?[220,780]:[760];xs.forEach((x,i)=>{s+=`<path d="M${x-55} 58 L${x} 25 L${x+55} 58" fill="none" stroke="#cbd5e1" stroke-width="4"/><line x1="${x}" y1="25" x2="${x+40}" y2="17" stroke="#cbd5e1" stroke-width="3"/>`})}return s}
function frontSvg(f,y,h,cab,l){if(f.shape==='none')return{left:'',right:''};let fill=l.base;let left=`<path d="M35 ${y} L${35+cab} ${y} L${35+cab} ${y+h} L35 ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="55" y="${y+28}" width="42" height="28" rx="5" fill="#164e63"/>`;let right=`<path d="M${965-cab} ${y} L965 ${y} L965 ${y+h} L${965-cab} ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="${905}" y="${y+28}" width="42" height="28" rx="5" fill="#164e63"/>`;if(['rounded','a771','e531','521','313'].includes(f.shape)){left=`<path d="M35 ${y+8} Q45 ${y} ${35+cab} ${y} L${35+cab} ${y+h} L35 ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="55" y="${y+25}" width="42" height="36" rx="8" fill="#164e63"/>`;right=`<path d="M${965-cab} ${y} L955 ${y} Q965 ${y+8} 965 ${y+h} L${965-cab} ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="905" y="${y+25}" width="42" height="36" rx="8" fill="#164e63"/>`}if(['limited','stream'].includes(f.shape)){left=`<path d="M35 ${y+18} Q65 ${y-8} ${35+cab+20} ${y} L${35+cab} ${y+h} L35 ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="65" y="${y+25}" width="55" height="24" rx="8" fill="#164e63"/>`;right=`<path d="M${965-cab-20} ${y} Q935 ${y-8} 965 ${y+18} L965 ${y+h} L${965-cab} ${y+h} Z" fill="${fill}" stroke="#0f172a" stroke-width="5"/><rect x="880" y="${y+25}" width="55" height="24" rx="8" fill="#164e63"/>`}return {left,right}}
function saveRvs(){const blob=new Blob([JSON.stringify({rvs:'0.4',state},null,2)],{type:'application/json'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='odorail-beta04.rvs';a.click()}
function loadRvs(){let i=document.createElement('input');i.type='file';i.accept='.rvs,.json';i.onchange=()=>{let f=i.files[0];let r=new FileReader();r.onload=()=>{try{let d=JSON.parse(r.result);state=d.state||state;render()}catch(e){alert('読込失敗')}};r.readAsText(f)};i.click()}
function exportPng(){let svg=document.getElementById('rvs-svg');let data=new XMLSerializer().serializeToString(svg);let img=new Image();let url='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(data);img.onload=()=>{let c=document.createElement('canvas');c.width=1600;c.height=400;let ctx=c.getContext('2d');ctx.fillStyle='#050915';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);let a=document.createElement('a');a.download=state.vehicleNumber+'.png';a.href=c.toDataURL('image/png');a.click()};img.src=url}
function loadDemo(){state={project:'小戸電鉄',vehicleNumber:'クハA771-1',body:'BODY-0003',front:'FRONT-0003',roof:'ROOF-0003',livery:'LIVERY-0002',destination:'WEDDING-LINER',service:'臨時特急'};render()}
render();
