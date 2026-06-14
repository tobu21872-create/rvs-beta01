const lib={
 bodies:[
  {id:'BODY-0001',dr:'DR-002',name:'キハ54形500番台 実測近似',len:21300,width:2900,height:4050,doors:2,family:'diesel',profile:'kiha54',bogie:'BOGIE-DT44',frontDefault:'FRONT-0001',roofDefault:'ROOF-0001',liveryDefault:'LIVERY-0001'},
  {id:'BODY-0003',dr:'DR-003',name:'東急5000系 実測近似',len:20000,width:2800,height:4050,doors:4,family:'commuter',profile:'tokyu5000',bogie:'BOGIE-SS174',frontDefault:'FRONT-0002',roofDefault:'ROOF-0003',liveryDefault:'LIVERY-0002'},
  {id:'BODY-0004',dr:'DR-004',name:'E531系 実測近似',len:20000,width:2950,height:4120,doors:4,family:'suburban',profile:'e531',bogie:'BOGIE-DT71',frontDefault:'FRONT-0004',roofDefault:'ROOF-0004',liveryDefault:'LIVERY-0003'},
  {id:'BODY-0004G',dr:'DR-004A/B',name:'E531系グリーン車 実測近似',len:20000,width:2950,height:4380,doors:2,family:'green',profile:'e531green',bogie:'BOGIE-TR255',frontDefault:'FRONT-0000',roofDefault:'ROOF-0006',liveryDefault:'LIVERY-0003'},
  {id:'BODY-0005',dr:'DR-005',name:'313系5000番台 実測近似',len:20000,width:2950,height:4050,doors:3,family:'suburban3',profile:'jrc313',bogie:'BOGIE-C313',frontDefault:'FRONT-0005',roofDefault:'ROOF-0005',liveryDefault:'LIVERY-0005'},
  {id:'BODY-0006',dr:'DR-006',name:'521系100番台 実測近似',len:20000,width:2950,height:4070,doors:3,family:'acdc',profile:'series521',bogie:'BOGIE-DT71',frontDefault:'FRONT-0006',roofDefault:'ROOF-0005',liveryDefault:'LIVERY-0004'},
  {id:'BODY-0007',dr:'DR-007',name:'E259系 実測近似',len:21000,width:2946,height:4100,doors:1,family:'limited',profile:'e259',bogie:'BOGIE-TR259',frontDefault:'FRONT-0007',roofDefault:'ROOF-0007',liveryDefault:'LIVERY-0007'},
  {id:'BODY-0008',dr:'DR-008',name:'205系5000番台 実測近似',len:20000,width:2800,height:4050,doors:4,family:'commuter_old',profile:'series205',bogie:'BOGIE-DT50',frontDefault:'FRONT-0009',roofDefault:'ROOF-0002',liveryDefault:'LIVERY-0010'},
  {id:'BODY-0009',dr:'DR-010',name:'209系0番台 実測近似',len:20000,width:2800,height:4050,doors:4,family:'commuter',profile:'series209',bogie:'BOGIE-DT61',frontDefault:'FRONT-0010',roofDefault:'ROOF-0002',liveryDefault:'LIVERY-0011'},
  {id:'BODY-0010',dr:'DR-009',name:'BEC819系 実測近似',len:20000,width:2950,height:4070,doors:3,family:'battery',profile:'bec819',bogie:'BOGIE-DT819',frontDefault:'FRONT-0006',roofDefault:'ROOF-0005',liveryDefault:'LIVERY-0009'},
  {id:'BODY-0011',dr:'DR-011',name:'787系 実測近似',len:21000,width:2940,height:4200,doors:1,family:'limited',profile:'series787',bogie:'BOGIE-DT787',frontDefault:'FRONT-0008',roofDefault:'ROOF-0007',liveryDefault:'LIVERY-0008'},
  {id:'BODY-0012',dr:'DR-012',name:'東武10030系 実測近似',len:20000,width:2800,height:4050,doors:4,family:'commuter_old',profile:'tobu10030',bogie:'BOGIE-FS',frontDefault:'FRONT-0011',roofDefault:'ROOF-0002',liveryDefault:'LIVERY-0012'}
 ],
 fronts:[
  {id:'FRONT-0000',name:'なし（中間車）',compatible:'any',shape:'none'},
  {id:'FRONT-0001',name:'キハ54前面',compatible:['BODY-0001'],shape:'kiha54'},
  {id:'FRONT-0002',name:'東急5000前面',compatible:['BODY-0003'],shape:'tokyu5000'},
  {id:'FRONT-0003',name:'A771系専用前面',compatible:['BODY-0003'],shape:'a771'},
  {id:'FRONT-0004',name:'E531前面',compatible:['BODY-0004'],shape:'e531'},
  {id:'FRONT-0005',name:'313系前面',compatible:['BODY-0005'],shape:'jrc313'},
  {id:'FRONT-0006',name:'521/BEC819前面',compatible:['BODY-0006','BODY-0010'],shape:'series521'},
  {id:'FRONT-0007',name:'E259前面',compatible:['BODY-0007'],shape:'e259'},
  {id:'FRONT-0008',name:'787系前面',compatible:['BODY-0011'],shape:'series787'},
  {id:'FRONT-0009',name:'205系前面',compatible:['BODY-0008'],shape:'series205'},
  {id:'FRONT-0010',name:'209系前面',compatible:['BODY-0009'],shape:'series209'},
  {id:'FRONT-0011',name:'東武10030前面',compatible:['BODY-0012'],shape:'tobu10030'}
 ],
 roofs:[
  {id:'ROOF-0001',name:'気動車屋根',panto:0,ac:3,detail:'diesel'},
  {id:'ROOF-0002',name:'20m通勤標準',panto:0,ac:1,detail:'commuter'},
  {id:'ROOF-0003',name:'A771 AU712＋ダブルパンタ',panto:2,ac:1,detail:'a771'},
  {id:'ROOF-0004',name:'E531交流機器＋パンタ',panto:1,ac:1,detail:'acdc'},
  {id:'ROOF-0005',name:'近郊3ドア標準',panto:1,ac:2,detail:'suburban'},
  {id:'ROOF-0006',name:'グリーン車屋根',panto:0,ac:2,detail:'green'},
  {id:'ROOF-0007',name:'特急標準',panto:0,ac:3,detail:'limited'}
 ],

 bogies:[
  {id:'BOGIE-SS174',name:'SS174系イメージ（通勤ボルスタレス）',kind:'commuter',primary:'#0f172a',accent:'#64748b'},
  {id:'BOGIE-DT71',name:'DT71系イメージ（近郊電動台車）',kind:'suburban',primary:'#111827',accent:'#7c8da3'},
  {id:'BOGIE-TR255',name:'TR255系イメージ（グリーン車付随台車）',kind:'trailer',primary:'#111827',accent:'#94a3b8'},
  {id:'BOGIE-C313',name:'313系台車イメージ',kind:'jrc',primary:'#111827',accent:'#64748b'},
  {id:'BOGIE-DT44',name:'気動車台車イメージ',kind:'diesel',primary:'#18181b',accent:'#71717a'},
  {id:'BOGIE-TR259',name:'E259特急台車イメージ',kind:'limited',primary:'#111827',accent:'#9ca3af'},
  {id:'BOGIE-DT787',name:'787特急台車イメージ',kind:'limited',primary:'#1f2937',accent:'#94a3b8'},
  {id:'BOGIE-DT50',name:'DT50系イメージ',kind:'old',primary:'#111827',accent:'#64748b'},
  {id:'BOGIE-DT61',name:'DT61系イメージ',kind:'commuter',primary:'#111827',accent:'#64748b'},
  {id:'BOGIE-DT819',name:'BEC819系台車イメージ',kind:'suburban',primary:'#111827',accent:'#60a5fa'},
  {id:'BOGIE-FS',name:'FS系イメージ',kind:'old',primary:'#111827',accent:'#64748b'}
 ],
 liveries:[
  {id:'LIVERY-0001',name:'小戸電鉄標準色',base:'#f8fafc',stripe:'#38bdf8',accent:'#0f172a'},
  {id:'LIVERY-0002',name:'Wedding-Liner',base:'#ffffff',stripe:'#f9a8d4',accent:'#facc15'},
  {id:'LIVERY-0003',name:'E531帯',base:'#f8fafc',stripe:'#22c55e',accent:'#334155'},
  {id:'LIVERY-0004',name:'521赤帯',base:'#f8fafc',stripe:'#be123c',accent:'#7c2d12'},
  {id:'LIVERY-0005',name:'313オレンジ',base:'#f8fafc',stripe:'#f97316',accent:'#64748b'},
  {id:'LIVERY-0007',name:'E259現塗装',base:'#f8fafc',stripe:'#111827',accent:'#ef4444'},
  {id:'LIVERY-0008',name:'787グレー',base:'#94a3b8',stripe:'#475569',accent:'#e5e7eb'},
  {id:'LIVERY-0009',name:'BEC819青',base:'#f8fafc',stripe:'#2563eb',accent:'#1e3a8a'},
  {id:'LIVERY-0010',name:'205武蔵野風',base:'#f8fafc',stripe:'#f97316',accent:'#7c2d12'},
  {id:'LIVERY-0011',name:'209京浜東北風',base:'#f8fafc',stripe:'#38bdf8',accent:'#0f172a'},
  {id:'LIVERY-0012',name:'東武ステンレス風',base:'#e5e7eb',stripe:'#2563eb',accent:'#f59e0b'}
 ]
};
const profiles={
 tokyu5000:{cab:1320,sections:[['crew',520],['door',1300],['win',1900],['pocket',420],['door',1300],['win',2080],['win',1550],['door',1300],['win',2080],['win',1550],['door',1300],['win',1880],['crew',520]],bogies:[2500,17500],pantos:[4200,15800],beads:[920,1550,2580],note:'東急5000系：4扉・大型窓・戸袋/乗務員扉を座標化'},
 e531:{cab:1450,sections:[['crew',520],['door',1300],['winS',1100],['win',1900],['door',1300],['win',1850],['winS',1250],['door',1300],['win',1850],['winS',1250],['door',1300],['win',1500],['crew',520]],bogies:[2600,17400],pantos:[15400],beads:[1050,2560],note:'E531系：近郊窓・戸袋差・交流屋根機器を座標化'},
 e531green:{cab:0,sections:[['deck',2300],['doorS',950],['gwinU',1700],['gwinD',1700],['gwinU',1700],['gwinD',1700],['gwinU',1700],['gwinD',1700],['doorS',950],['deck',2300]],bogies:[2700,17300],pantos:[],beads:[1120,2200,3150],note:'E531系サロ：2階建て窓配置を分離'},
 series521:{cab:1500,sections:[['crew',520],['win',1500],['win',1500],['door',1300],['win',1850],['win',1850],['door',1300],['win',1450],['crew',520]],bogies:[2500,17500],pantos:[14300],beads:[1020,2550],note:'521系：地方近郊3扉配置'},
 jrc313:{cab:1450,sections:[['crew',520],['win',1600],['door',1300],['win',1650],['win',1650],['door',1300],['win',1650],['win',1650],['door',1300],['win',1450],['crew',520]],bogies:[2500,17500],pantos:[15100],beads:[1030,2550],note:'313系5000：JR東海3扉配置'},
 kiha54:{cab:1200,sections:[['crew',500],['winS',900],['win',1120],['win',1120],['win',1120],['doorS',900],['win',1120],['win',1120],['win',1120],['win',1120],['doorS',900],['crew',500]],bogies:[2600,18700],pantos:[],beads:[980,2500],note:'キハ54：21.3m級気動車・片開き2扉'},
 e259:{cab:2150,sections:[['nose',1600],['doorT',900],['twin',2600],['twin',3000],['twin',3000],['twin',3000],['doorT',900],['nose',1600]],bogies:[3100,17900],pantos:[],beads:[980,2540],note:'E259：特急連続窓'},
 series787:{cab:2200,sections:[['nose',1600],['doorT',900],['twin',2400],['twin',2400],['twin',2400],['twin',2400],['doorT',900],['nose',1600]],bogies:[3100,17900],pantos:[],beads:[1000,2600],note:'787：JR九州特急窓'},
 series205:{cab:1350,sections:[['crew',520],['door',1300],['win',1750],['win',1500],['door',1300],['win',1750],['win',1500],['door',1300],['win',1750],['win',1500],['door',1300],['crew',520]],bogies:[2500,17500],pantos:[15100],beads:[920,1500,2580],note:'205系：国鉄/JR4扉配置'},
 series209:{cab:1350,sections:[['crew',520],['door',1300],['win',1850],['win',1450],['door',1300],['win',1850],['win',1450],['door',1300],['win',1850],['win',1450],['door',1300],['crew',520]],bogies:[2500,17500],pantos:[15100],beads:[930,2580],note:'209系：軽量ステンレス4扉'},
 bec819:{cab:1500,sections:[['crew',520],['win',1500],['door',1300],['win',1700],['win',1700],['door',1300],['win',1550],['door',1300],['crew',520]],bogies:[2500,17500],pantos:[14300],beads:[1020,2550],note:'BEC819：蓄電池電車3扉'},
 tobu10030:{cab:1420,sections:[['crew',520],['door',1300],['win',1750],['win',1500],['door',1300],['win',1750],['win',1500],['door',1300],['win',1750],['win',1500],['door',1300],['crew',520]],bogies:[2500,17500],pantos:[15100],beads:[920,1450,2520],note:'東武10030：ビードあり4扉'}
};
let state={project:'小戸電鉄',vehicleNumber:'クハA771-1',body:'BODY-0003',front:'FRONT-0003',roof:'ROOF-0003',livery:'LIVERY-0002',destination:'WEDDING-LINER',service:'臨時特急'};
const $=s=>document.querySelector(s), by=(a,id)=>a.find(x=>x.id===id);
function compatibleFronts(){const b=state.body;return lib.fronts.filter(f=>f.compatible==='any'||f.compatible.includes(b));}
function setBody(id){state.body=id;const b=by(lib.bodies,id);if(!compatibleFronts().some(f=>f.id===state.front))state.front=b.frontDefault;state.roof=b.roofDefault;state.livery=b.liveryDefault;render();}
function render(){const b=by(lib.bodies,state.body),f=by(lib.fronts,state.front),r=by(lib.roofs,state.roof),l=by(lib.liveries,state.livery),p=profile(b);$('#app').innerHTML=`<header><h1>車両工房 RVS β1.2｜${state.project}</h1><div class="toolbar"><button class="primary" onclick="saveRvs()">.rvs保存</button><button onclick="loadRvs()">読込</button><button onclick="exportPng()">PNG出力</button><button onclick="loadDemo()">A771デモ</button></div></header><main class="layout"><section class="card"><h2>実測テンプレート工場</h2><div class="inner">${selector('車体 BODY','body',lib.bodies,'setBody')}${selector('前面 FRONT','front',compatibleFronts())}${selector('屋根 ROOF','roof',lib.roofs)}${selector('塗装 LIVERY','livery',lib.liveries)}<h3>車両情報</h3><div class="row"><label>車番</label><input value="${state.vehicleNumber}" oninput="state.vehicleNumber=this.value;render()"></div><div class="row"><label>種別</label><input value="${state.service}" oninput="state.service=this.value;render()"></div><div class="row"><label>表示</label><input value="${state.destination}" oninput="state.destination=this.value;render()"></div><div class="notice">β1.2：台車を輪軸・軸箱・側梁・枕ばね・ヨーダンパ風パーツへ分解。mm座標DBからSVG生成。</div></div></section><section class="card"><h2>${state.vehicleNumber}</h2><div class="preview"><div class="svgWrap">${vehicleSvg(b,f,r,l,p)}</div></div><div class="credit">画像は保存せず、部品ID・寸法・座標データからSVG生成。提供：白夜車輌製造（Hakuya Train-Manufacturing）</div></section><aside class="card"><h2>プロパティ</h2><div class="inner"><div class="meta"><b>${b.name}</b><br>${b.id} / ${b.dr}<br>${b.len.toLocaleString()} mm・幅${b.width} mm・高${b.height} mm<br>片側${b.doors}扉 / ${b.profile}<br><span class="badge">${p.note}</span><br><br><b>${f.name}</b><br>${f.id}<br><br><b>${r.name}</b><br>${r.id}<br>パンタ ${r.panto} / 冷房 ${r.ac}<br><br><b>${l.name}</b><br>${l.id}</div><h3>mm座標DB</h3><div class="dimTable">${dimensionTable(b,p)}</div><h3>レイヤー</h3>${['BODY','BEAD','END','WINDOW','POCKET','DOOR','ROOF','PANTOGRAPH','UNDERFLOOR','BOGIE','LIVERY','TEXT'].map(x=>`<span class="pill">${x}</span>`).join('')}<h3>互換性</h3><div class="status">${compatibility(b,f)}</div></div></aside></main>`}
function selector(title,key,items,fn){return `<h3>${title}</h3><select onchange="${fn?`${fn}(this.value)`: `state.${key}=this.value;render()`}">${items.map(i=>`<option value="${i.id}" ${state[key]===i.id?'selected':''}>${i.name}｜${i.id}${i.dr?'｜'+i.dr:''}</option>`).join('')}</select>`}
function compatibility(b,f){let ok=f.compatible==='any'||f.compatible.includes(b.id);return ok?'<span class="ok">● 前面互換OK</span><span class="ok">● 実測テンプレート接続OK</span><span class="ok">● SVG生成OK</span>':'<span class="warn">● 前面非互換</span>'}
function profile(b){let base=profiles[b.profile]||profiles.tokyu5000;let parts=[];let total=base.cab*2+base.sections.reduce((a,s)=>a+s[1],0);let scale=b.len/total;let x=base.cab*scale;for(const [type,w0] of base.sections){let w=w0*scale;parts.push({type,w,center:x+w/2,start:x,end:x+w});x+=w;}return {...base,parts,cab:base.cab*scale};}
function mmX(mm,x,w,b){return x+(mm/b.len)*w;}
function vehicleSvg(b,f,r,l,p){const W=1320,H=620,x=80,y=210,w=1160,h=170,base=y+h;return `<svg id="rvs-svg" viewBox="0 0 ${W} ${H}" width="100%" xmlns="http://www.w3.org/2000/svg"><defs>${defs()}</defs><rect width="${W}" height="${H}" fill="#050914"/><text x="90" y="55" fill="#9fb4cc" font-size="18">RVS β1.2 / ${b.name} / ${b.len.toLocaleString()}mm / measured-template</text><line x1="${x}" y1="88" x2="${x+w}" y2="88" stroke="#67e8f9"/><line x1="${x}" y1="78" x2="${x}" y2="98" stroke="#67e8f9"/><line x1="${x+w}" y1="78" x2="${x+w}" y2="98" stroke="#67e8f9"/>${roofSvg(b,r,x,w,y,p)}${bodyShell(b,l,x,y,w,h,p)}${livery(b,l,x,y,w,h)}${drawBeads(b,x,y,w,h,p)}${drawParts(b,x,y,w,h,p)}${frontSvg(f,b,l,x,y,w,h,p)}${underSvg(b,r,x,w,base,p)}<text x="${x+w/2-90}" y="${y-24}" fill="#e5edf7" font-size="24">${state.vehicleNumber}</text><rect x="${x+w*.56}" y="${y+42}" width="270" height="32" rx="4" fill="#111827" stroke="#334155"/><text x="${x+w*.56+42}" y="${y+64}" fill="#f8fafc" font-size="18">${state.destination}</text><text x="90" y="540" fill="#9fb4cc" font-size="16">${b.id} + ${f.id} + ${r.id} + ${l.id}</text></svg>`}
function defs(){return `<linearGradient id="metal" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#edf3f9"/><stop offset="1" stop-color="#cbd5e1"/></linearGradient><linearGradient id="glass" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#0f766e"/><stop offset=".6" stop-color="#164e63"/><stop offset="1" stop-color="#041b25"/></linearGradient><linearGradient id="door" x1="0" x2="1"><stop offset="0" stop-color="#e2e8f0"/><stop offset=".5" stop-color="#f8fafc"/><stop offset="1" stop-color="#cbd5e1"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="#000" flood-opacity=".45"/></filter>`}
function bodyShell(b,l,x,y,w,h,p){let nose=b.family==='limited'?60:0;let s=`<path d="M${x+nose} ${y} H${x+w-nose} ${b.family==='limited'?`Q${x+w-15} ${y+18} ${x+w} ${y+48}`:`Q${x+w-8} ${y+6} ${x+w} ${y+18}`} V${y+h} H${x} V${y+18} ${b.family==='limited'?`Q${x+15} ${y+18} ${x+nose} ${y}`:`Q${x+8} ${y+6} ${x+nose} ${y}`} Z" fill="url(#metal)" stroke="#07111f" stroke-width="4"/>`;return s}
function drawBeads(b,x,y,w,h,p){let s='';p.beads.forEach(mm=>{let yy=y+h-(mm/3200)*h;s+=`<line x1="${x+12}" x2="${x+w-12}" y1="${yy}" y2="${yy}" stroke="#94a3b8" stroke-width="2" opacity=".45"/>`});if(['commuter_old','diesel','suburban3','acdc'].includes(b.family)){for(let yy=y+22;yy<y+h-18;yy+=18)s+=`<line x1="${x+16}" x2="${x+w-16}" y1="${yy}" y2="${yy}" stroke="#64748b" opacity=".18"/>`;}if(b.family==='green')s+=`<line x1="${x+16}" x2="${x+w-16}" y1="${y+h*.52}" y2="${y+h*.52}" stroke="#64748b" stroke-width="2" opacity=".5"/>`;return s;}
function livery(b,l,x,y,w,h){let sy=b.family==='limited'?y+h*.45:y+h*.61;let s=`<rect x="${x+18}" y="${sy}" width="${w-36}" height="12" fill="${l.stripe}"/><rect x="${x+18}" y="${sy+17}" width="${w-36}" height="4" fill="${l.accent}" opacity=".95"/>`;if(l.id==='LIVERY-0002')s+=`<path d="M${x+245} ${sy-5} l28 24 l-37-8 l39-11 l-27 33" fill="none" stroke="${l.accent}" stroke-width="4" opacity=".9"/>`;return s;}
function drawParts(b,x,y,w,h,p){let s='';p.parts.forEach(part=>{let px=mmX(part.center,x,w,b),pw=Math.max(9,part.w/b.len*w);if(part.type==='win'||part.type==='winS')s+=windowPart(px-pw*.42,y+38,pw*.84,part.type==='winS'?34:44,b.family);if(part.type==='twin')s+=windowPart(px-pw*.43,y+40,pw*.86,40,'limited');if(part.type==='gwinU')s+=windowPart(px-pw*.42,y+22,pw*.84,30,'green');if(part.type==='gwinD')s+=windowPart(px-pw*.42,y+94,pw*.84,30,'green');if(part.type==='door')s+=doorPart(px-34,y+12,68,h-20,'double');if(part.type==='doorS')s+=doorPart(px-25,y+16,50,h-28,'single');if(part.type==='doorT')s+=doorPart(px-26,y+32,52,h-56,'single');if(part.type==='pocket')s+=pocketPart(px-pw*.35,y+48,pw*.7,34);if(part.type==='crew')s+=crewDoor(px-19,y+18,38,h-34);if(part.type==='cab')s+=cabSide(px-pw*.38,y+36,pw*.76,42);if(part.type==='deck'||part.type==='nose')s+=`<rect x="${px-pw/2+6}" y="${y+25}" width="${Math.max(20,pw-12)}" height="${h-52}" rx="9" fill="#cbd5e1" opacity=".22"/>`});return s;}
function windowPart(x,y,w,h,kind){return `<g><rect x="${x-5}" y="${y-5}" width="${w+10}" height="${h+10}" rx="9" fill="#dbe4ee" stroke="#0f172a" stroke-width="3"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="url(#glass)" stroke="#082f38" stroke-width="2"/><path d="M${x+7} ${y+6} H${x+w-8}" stroke="#cffafe" opacity=".55"/><line x1="${x+w/2}" x2="${x+w/2}" y1="${y+3}" y2="${y+h-3}" stroke="#0f3b44" stroke-width="2" opacity=".45"/></g>`}
function pocketPart(x,y,w,h){return `<g opacity=".65"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#aab8c8" stroke="#64748b"/><line x1="${x+w/2}" x2="${x+w/2}" y1="${y+5}" y2="${y+h-5}" stroke="#475569" opacity=".5"/></g>`}
function doorPart(x,y,w,h,type){let half=w/2;return `<g filter="url(#shadow)"><rect x="${x-4}" y="${y-4}" width="${w+8}" height="${h+8}" rx="8" fill="#e2e8f0" stroke="#172235" stroke-width="3"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="url(#door)"/><line x1="${x+half}" x2="${x+half}" y1="${y+4}" y2="${y+h-4}" stroke="#475569" stroke-width="2"/><rect x="${x+8}" y="${y+17}" width="${half-13}" height="40" rx="4" fill="url(#glass)"/><rect x="${x+half+5}" y="${y+17}" width="${half-13}" height="40" rx="4" fill="url(#glass)"/><circle cx="${x+half-8}" cy="${y+h*.58}" r="2.5" fill="#64748b"/><circle cx="${x+half+8}" cy="${y+h*.58}" r="2.5" fill="#64748b"/><rect x="${x+8}" y="${y+h-18}" width="${w-16}" height="5" fill="#94a3b8" opacity=".75"/></g>`}
function crewDoor(x,y,w,h){return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#dce6f1" stroke="#334155" stroke-width="2"/><rect x="${x+7}" y="${y+14}" width="${w-14}" height="32" rx="5" fill="url(#glass)"/><circle cx="${x+w-8}" cy="${y+h*.55}" r="2" fill="#475569"/></g>`}
function cabSide(x,y,w,h){return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="url(#glass)" stroke="#0f172a" stroke-width="3"/><path d="M${x+8} ${y+6} H${x+w-8}" stroke="#cffafe" opacity=".55"/></g>`}
function frontSvg(f,b,l,x,y,w,h,p){if(f.shape==='none')return'';let cab=Math.max(70, p.cab/b.len*w);let left=`<path d="M${x} ${y+10} Q${x+18} ${y} ${x+cab} ${y} L${x+cab} ${y+h} L${x} ${y+h} Z" fill="url(#metal)" stroke="#07111f" stroke-width="4"/><rect x="${x+26}" y="${y+34}" width="55" height="42" rx="9" fill="url(#glass)"/><rect x="${x+22}" y="${y+h-30}" width="70" height="13" rx="3" fill="#cbd5e1" opacity=".76"/><circle cx="${x+cab-20}" cy="${y+92}" r="4" fill="#fbbf24"/>`;let right=`<path d="M${x+w-cab} ${y} Q${x+w-18} ${y} ${x+w} ${y+10} L${x+w} ${y+h} L${x+w-cab} ${y+h} Z" fill="url(#metal)" stroke="#07111f" stroke-width="4"/><rect x="${x+w-81}" y="${y+34}" width="55" height="42" rx="9" fill="url(#glass)"/><rect x="${x+w-92}" y="${y+h-30}" width="70" height="13" rx="3" fill="#cbd5e1" opacity=".76"/><circle cx="${x+w-cab+20}" cy="${y+92}" r="4" fill="#fbbf24"/>`;if(['e259','series787'].includes(f.shape)){left=`<path d="M${x} ${y+45} Q${x+52} ${y-14} ${x+cab+38} ${y} L${x+cab} ${y+h} L${x} ${y+h} Z" fill="url(#metal)" stroke="#07111f" stroke-width="4"/><rect x="${x+52}" y="${y+36}" width="68" height="28" rx="11" fill="url(#glass)"/>`;right=`<path d="M${x+w-cab-38} ${y} Q${x+w-52} ${y-14} ${x+w} ${y+45} L${x+w} ${y+h} L${x+w-cab} ${y+h} Z" fill="url(#metal)" stroke="#07111f" stroke-width="4"/><rect x="${x+w-120}" y="${y+36}" width="68" height="28" rx="11" fill="url(#glass)"/>`;}return left+right;}
function roofSvg(b,r,x,w,y,p){let s=`<rect x="${x+14}" y="${y-35}" width="${w-28}" height="8" fill="#9aa8b7"/><rect x="${x+95}" y="${y-48}" width="${w-190}" height="5" fill="#64748b" opacity=".7"/>`;let acW=r.detail==='limited'?118:150;for(let i=0;i<r.ac;i++){let ax=x+w*(i+1)/(r.ac+1)-acW/2;s+=cooler(ax,y-76,acW);}if(r.detail==='a771'){s+=equipCluster(x+185,y-55)+equipCluster(x+w-330,y-55);}if(r.detail==='acdc'||r.detail==='suburban')s+=equipCluster(x+w-350,y-55);p.pantos.forEach((mm,i)=>{let px=mmX(mm,x,w,b);s+=panto(px,y-43,i===0?1:-1)});return s;}
function cooler(x,y,w){return `<g><rect x="${x}" y="${y}" width="${w}" height="28" rx="4" fill="#cbd5e1" stroke="#64748b"/><rect x="${x+14}" y="${y+5}" width="${w-28}" height="18" fill="#94a3b8" opacity=".55"/>${Array.from({length:9},(_,k)=>`<line x1="${x+18+k*(w-36)/8}" x2="${x+18+k*(w-36)/8}" y1="${y+5}" y2="${y+23}" stroke="#475569" opacity=".5"/>`).join('')}</g>`}
function equipCluster(x,y){return `<g><rect x="${x}" y="${y}" width="56" height="21" rx="3" fill="#cbd5e1" stroke="#64748b"/><circle cx="${x+74}" cy="${y+10}" r="9" fill="#dbe4ee" stroke="#64748b"/><rect x="${x+92}" y="${y+3}" width="38" height="17" rx="2" fill="#aab6c5" stroke="#64748b"/><path d="M${x+132} ${y+11} H${x+184}" stroke="#94a3b8" stroke-width="3"/></g>`}
function panto(px,y,dir){return `<g stroke="#dbe7f2" stroke-linecap="round" fill="none"><rect x="${px-48}" y="${y}" width="96" height="7" fill="#9aa8b7" stroke="#64748b"/><path d="M${px-62} ${y} L${px} ${y-55} L${px+62} ${y}" stroke-width="4"/><path d="M${px-38} ${y} L${px} ${y-28} L${px+38} ${y}" stroke-width="2"/><line x1="${px}" y1="${y-55}" x2="${px+dir*72}" y2="${y-68}" stroke-width="3"/><circle cx="${px-47}" cy="${y}" r="5" fill="#cbd5e1"/><circle cx="${px+47}" cy="${y}" r="5" fill="#cbd5e1"/></g>`}
function underSvg(b,r,x,w,base,p){let s='';let boxes=[.08,.16,.25,.34,.44,.54,.64,.74,.84,.92];boxes.forEach((q,i)=>{let bx=x+q*w,bw=[58,82,62,96,56,78,64,88,58,70][i%10],bh=[25,34,28,31,24,35,27,31,25,32][i%10];s+=`<rect x="${bx-bw/2}" y="${base+16+(i%2)*5}" width="${bw}" height="${bh}" rx="2" fill="#111827" stroke="#334155"/>`});p.bogies.forEach(mm=>s+=bogie(mmX(mm,x,w,b),base+56,b));return s;}
function bogie(cx,y,b){
 const spec=by(lib.bogies,b.bogie)||lib.bogies[0];
 const accent=spec.accent||'#64748b';
 const primary=spec.primary||'#111827';
 const air=spec.kind==='limited'||spec.kind==='suburban'||spec.kind==='trailer';
 const motor=spec.kind!=='trailer'&&spec.kind!=='limited';
 let spring=air
  ? `<ellipse cx="${cx-52}" cy="${y-18}" rx="13" ry="8" fill="#cbd5e1" stroke="${accent}"/><ellipse cx="${cx+52}" cy="${y-18}" rx="13" ry="8" fill="#cbd5e1" stroke="${accent}"/>`
  : `<path d="M${cx-67} ${y-23} q10 12 20 0 q10 -12 20 0" stroke="${accent}" fill="none" stroke-width="2"/><path d="M${cx+27} ${y-23} q10 12 20 0 q10 -12 20 0" stroke="${accent}" fill="none" stroke-width="2"/>`;
 let motorBox=motor?`<rect x="${cx-24}" y="${y-4}" width="48" height="22" rx="4" fill="#1e293b" stroke="${accent}" opacity=".85"/>`:'';
 return `<g filter="url(#shadow)" class="bogie">
  <rect x="${cx-118}" y="${y-36}" width="236" height="14" rx="3" fill="${primary}" stroke="#334155"/>
  <path d="M${cx-110} ${y-28} L${cx+110} ${y-28} L${cx+88} ${y+26} L${cx-88} ${y+26} Z" fill="#0b1220" stroke="${accent}" stroke-width="2"/>
  <rect x="${cx-92}" y="${y-17}" width="28" height="18" rx="4" fill="#1e293b" stroke="${accent}"/><rect x="${cx+64}" y="${y-17}" width="28" height="18" rx="4" fill="#1e293b" stroke="${accent}"/>
  ${spring}${motorBox}
  <circle cx="${cx-58}" cy="${y+18}" r="30" fill="#020617" stroke="${accent}" stroke-width="4"/>
  <circle cx="${cx+58}" cy="${y+18}" r="30" fill="#020617" stroke="${accent}" stroke-width="4"/>
  <circle cx="${cx-58}" cy="${y+18}" r="10" fill="#213142" stroke="#0f172a"/><circle cx="${cx+58}" cy="${y+18}" r="10" fill="#213142" stroke="#0f172a"/>
  <line x1="${cx-91}" y1="${y+18}" x2="${cx+91}" y2="${y+18}" stroke="#475569" stroke-width="2"/>
  <path d="M${cx-104} ${y-8} Q${cx} ${y+36} ${cx+104} ${y-8}" stroke="${accent}" fill="none" opacity=".65"/>
  <path d="M${cx-118} ${y-20} L${cx+118} ${y+30}" stroke="#64748b" opacity=".45"/>
 </g>`
}
function dimensionTable(b,p){const row=(k,v)=>`<div class="dimRow"><span>${k}</span><b>${v}</b></div>`;let doors=p.parts.filter(x=>x.type.includes('door')).map(x=>Math.round(x.center));let wins=p.parts.filter(x=>x.type.includes('win')).map(x=>Math.round(x.center));return row('全長',b.len.toLocaleString()+' mm')+row('車体幅',b.width.toLocaleString()+' mm')+row('車体高',b.height.toLocaleString()+' mm')+row('車端長',Math.round(p.cab).toLocaleString()+' mm')+row('部品数',p.parts.length)+row('扉中心',doors.map(x=>x.toLocaleString()).join(' / ')+' mm')+row('窓中心',wins.map(x=>x.toLocaleString()).join(' / ')+' mm')+row('台車形式', (by(lib.bogies,b.bogie)||{}).name||'未設定')+row('台車中心',p.bogies.map(x=>x.toLocaleString()).join(' / ')+' mm')+row('パンタ中心',p.pantos.length?p.pantos.map(x=>x.toLocaleString()).join(' / ')+' mm':'なし')}
function saveRvs(){const blob=new Blob([JSON.stringify({rvs:'1.2',state},null,2)],{type:'application/json'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='odorail-beta12.rvs';a.click();}
function loadRvs(){let i=document.createElement('input');i.type='file';i.accept='.rvs,.json';i.onchange=()=>{let f=i.files[0];let r=new FileReader();r.onload=()=>{try{let d=JSON.parse(r.result);state=d.state||state;render()}catch(e){alert('読込失敗')}};r.readAsText(f)};i.click();}
function exportPng(){let svg=document.getElementById('rvs-svg');let data=new XMLSerializer().serializeToString(svg);let img=new Image();let url='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(data);img.onload=()=>{let c=document.createElement('canvas');c.width=2640;c.height=1240;let ctx=c.getContext('2d');ctx.fillStyle='#050914';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);let a=document.createElement('a');a.download=state.vehicleNumber+'.png';a.href=c.toDataURL('image/png');a.click()};img.src=url;}
function loadDemo(){state={project:'小戸電鉄',vehicleNumber:'クハA771-1',body:'BODY-0003',front:'FRONT-0003',roof:'ROOF-0003',livery:'LIVERY-0002',destination:'WEDDING-LINER',service:'臨時特急'};render();}
render();
