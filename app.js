const bodies={
 tokyu5000:{id:'BODY-0003A',name:'東急5000系 実測風',dr:'DR-003',class:'Class20M',length:20000,width:2800,height:4050,doors:[3000,8000,13000,18000],windows:[1350,4550,6250,9550,11250,14550,16250],pockets:[2450,3550,7450,8550,12450,13550,17450,18550],bogies:[2700,17300],beads:[1150,1700],type:'commuter',bogieType:'SS167'},
 e531:{id:'BODY-0004A',name:'E531系 近郊実測風',dr:'DR-004',class:'Class20M',length:20000,width:2950,height:4100,doors:[3300,8000,12600,17300],windows:[1350,5050,6500,9600,11100,14200,15700,18800],pockets:[2750,3850,7450,8550,12050,13150,16750,17850],bogies:[2800,17200],beads:[1200],type:'suburban',bogieType:'DT71'},
 e531g:{id:'BODY-0004G',name:'E531系 サロ二階建て風',dr:'DR-004A/B',class:'Class20M-G',length:20000,width:2950,height:4300,doors:[2700,17300],windows:[5200,7100,9000,10900,12800,14700],pockets:[2200,3200,16800,17800],bogies:[2800,17200],beads:[1000,2500],type:'green',bogieType:'TR255'},
 kiha54:{id:'BODY-0001A',name:'キハ54形500番台 実測風',dr:'DR-002',class:'Class21M',length:21300,width:2900,height:4000,doors:[5200,16100],windows:[1700,3000,7200,8800,10400,12000,13600,18900],pockets:[4750,5650,15650,16550],bogies:[3100,18200],beads:[1100],type:'diesel',bogieType:'DIESEL'},
 e259:{id:'BODY-0007A',name:'E259系 特急実測風',dr:'DR-007',class:'Class25M-L',length:25000,width:2940,height:4100,doors:[2300,22600],windows:[5600,7600,9600,11600,13600,15600,17600,19600],pockets:[1900,2700,22200,23000],bogies:[3500,21500],beads:[1200,1950],type:'limited',bogieType:'LTD'}
};
const fronts={tokyu:{id:'FRONT-0002',name:'東急5000系前面風'},e531:{id:'FRONT-0004',name:'E531系前面風'},a771:{id:'FRONT-A771',name:'A771系前面'},kiha54:{id:'FRONT-0001',name:'キハ54前面'},e259:{id:'FRONT-0007',name:'E259前面風'}};
const roofs={a771:{id:'ROOF-A771-14',name:'A771屋根 β1.6',cooler:'AU712',pantographs:[3600,16400],vFacilities:true},commuter:{id:'ROOF-0100',name:'AU712集中冷房',cooler:'AU712',pantographs:[],vFacilities:false},e531:{id:'ROOF-0101',name:'E531屋根機器',cooler:'AU726',pantographs:[7200],vFacilities:true},limited:{id:'ROOF-0102',name:'特急屋根',cooler:'AU75',pantographs:[],vFacilities:false},diesel:{id:'ROOF-DIESEL',name:'気動車屋根',cooler:'AU系',pantographs:[],vFacilities:false}};
const under={a771m:{id:'UNDER-A771-M',name:'A771 M車床下',items:['VVVF','MR','AIR-TANK','BRAKE']},a771t:{id:'UNDER-A771-T',name:'A771 Tc/T床下',items:['SIV','AIR-TANK','TOILET-TANK','BRAKE']},e531m:{id:'UNDER-E531-M',name:'E531 M車床下',items:['VVVF','SIV','MR','AIR-TANK','BRAKE']},diesel:{id:'UNDER-DIESEL',name:'気動車床下',items:['ENGINE','FUEL','MR','AIR-TANK']},limited:{id:'UNDER-LTD',name:'特急床下',items:['SIV','CP','AIR-TANK','BRAKE']}};
const liveries={wedding:{id:'LIVERY-0002',name:'Wedding-Liner',base:'#f8fbff',stripe:'#f9a8d4',accent:'#facc15',lower:'#313948'},odorail:{id:'LIVERY-0001',name:'小戸電鉄標準',base:'#f8fbff',stripe:'#38bdf8',accent:'#22c55e',lower:'#344155'},jrgreen:{id:'LIVERY-E531',name:'E531帯風',base:'#f8fbff',stripe:'#22c55e',accent:'#0ea5e9',lower:'#343a40'},limited:{id:'LIVERY-E259',name:'E259現塗装風',base:'#f6f6f6',stripe:'#dc2626',accent:'#111827',lower:'#4b5563'}};
const vehicles=[
 {id:'V-A771-M',name:'モハA771-1 / 屋根床下革命',body:'tokyu5000',front:'a771',roof:'a771',under:'a771m',livery:'wedding',service:'WEDDING-LINER'},
 {id:'V-A771-TC',name:'クハA771-1 / WC床下',body:'tokyu5000',front:'a771',roof:'commuter',under:'a771t',livery:'wedding',service:'WEDDING-LINER'},
 {id:'V-E531-M',name:'モハE531風',body:'e531',front:'e531',roof:'e531',under:'e531m',livery:'jrgreen',service:'普通'},
 {id:'V-KIHA54',name:'キハA505-1',body:'kiha54',front:'kiha54',roof:'diesel',under:'diesel',livery:'odorail',service:'普通 白夜中央'},
 {id:'V-E259',name:'E259系風',body:'e259',front:'e259',roof:'limited',under:'limited',livery:'limited',service:'特急'}
];
let state={...vehicles[0]};
const $=id=>document.getElementById(id);
function fillSelect(id,obj){const s=$(id);s.innerHTML='';Object.entries(obj).forEach(([k,v])=>{const o=document.createElement('option');o.value=k;o.textContent=`${v.id} ${v.name}`;s.appendChild(o);});}
function init(){const vs=$('vehicleSelect');vehicles.forEach((v,i)=>{const o=document.createElement('option');o.value=i;o.textContent=v.name;vs.appendChild(o)});fillSelect('bodySelect',bodies);fillSelect('frontSelect',fronts);fillSelect('roofSelect',roofs);fillSelect('underSelect',under);fillSelect('liverySelect',liveries);vs.onchange=()=>{state={...vehicles[+vs.value]};sync();render()};['body','front','roof','under','livery'].forEach(key=>{$(key+'Select').onchange=e=>{state[key]=e.target.value;render()}});$('demoBtn').onclick=()=>{state={...vehicles[0]};$('vehicleSelect').value=0;sync();render()};$('saveBtn').onclick=saveRvs;$('loadFile').onchange=loadRvs;$('pngBtn').onclick=exportPng;sync();render()}
function sync(){$('bodySelect').value=state.body;$('frontSelect').value=state.front;$('roofSelect').value=state.roof;$('underSelect').value=state.under;$('liverySelect').value=state.livery;}
function mmX(x,b){return 40+x/b.length*920}function mmW(w,b){return w/b.length*920}

function drawFrontEnd(f,l){
 const type = f.id.includes('A771')?'a771':(f.id.includes('0004')?'e531':(f.id.includes('0001')?'kiha54':(f.id.includes('0007')?'e259':'tokyu')));
 if(type==='e259'){
  return `<g class="frontUnit"><path d="M40 105 C72 88 132 92 170 112 L170 245 L40 245 Z" fill="${l.base}" stroke="#243044" stroke-width="3"/><path d="M58 118 C92 105 126 108 150 124 L124 157 H66 Z" fill="#111827"/><path d="M72 125 C98 116 123 118 141 128" stroke="#94a3b8"/><rect x="62" y="178" width="50" height="8" rx="4" fill="#111827"/><circle cx="118" cy="182" r="5" fill="#fef3c7"/><path d="M40 238 H155 L170 252 H52 Z" fill="#111827" opacity=".75"/><rect x="95" y="248" width="38" height="12" rx="5" fill="#1f2937"/></g>`;
 }
 if(type==='kiha54'){
  return `<g class="frontUnit"><rect x="40" y="95" width="145" height="150" rx="10" fill="${l.base}" stroke="#243044" stroke-width="3"/><rect x="58" y="111" width="44" height="46" rx="4" fill="#111827"/><rect x="116" y="111" width="44" height="46" rx="4" fill="#111827"/><rect x="68" y="119" width="24" height="30" fill="#334155"/><rect x="126" y="119" width="24" height="30" fill="#334155"/><rect x="54" y="178" width="112" height="9" fill="${l.stripe}"/><circle cx="72" cy="198" r="5" fill="#fde68a"/><circle cx="150" cy="198" r="5" fill="#fde68a"/><path d="M40 238 H180 V252 H52 Z" fill="#111827" opacity=".8"/><rect x="98" y="246" width="35" height="14" rx="4" fill="#334155"/></g>`;
 }
 if(type==='e531'){
  return `<g class="frontUnit"><path d="M40 99 C62 94 125 94 178 102 L178 245 L40 245 Z" fill="${l.base}" stroke="#243044" stroke-width="3"/><rect x="60" y="116" width="94" height="50" rx="6" fill="#111827"/><rect x="68" y="124" width="37" height="34" rx="3" fill="#334155"/><rect x="111" y="124" width="35" height="34" rx="3" fill="#334155"/><line x1="104" y1="122" x2="84" y2="158" stroke="#94a3b8" stroke-width="2"/><line x1="135" y1="122" x2="116" y2="158" stroke="#94a3b8" stroke-width="2"/><rect x="68" y="176" width="65" height="12" rx="3" fill="#111827"/><circle cx="57" cy="198" r="5" fill="#fde68a"/><circle cx="150" cy="198" r="5" fill="#fde68a"/><path d="M40 236 H174 L190 247 H48 Z" fill="#111827" opacity=".75"/><rect x="95" y="244" width="42" height="13" rx="5" fill="#334155"/></g>`;
 }
 if(type==='a771'){
  return `<g class="frontUnit"><path d="M40 99 C58 93 125 92 185 101 L185 245 L40 245 Z" fill="${l.base}" stroke="#243044" stroke-width="3"/><path d="M58 112 H166 V168 H58 Z" fill="#111827"/><rect x="68" y="122" width="38" height="36" rx="4" fill="#334155"/><rect x="115" y="122" width="42" height="36" rx="4" fill="#334155"/><line x1="98" y1="118" x2="78" y2="158" stroke="#9fb4ce" stroke-width="2"/><line x1="148" y1="118" x2="124" y2="158" stroke="#9fb4ce" stroke-width="2"/><rect x="66" y="175" width="80" height="12" rx="4" fill="#111827"/><circle cx="62" cy="198" r="5" fill="#fef3c7"/><circle cx="158" cy="198" r="5" fill="#fef3c7"/><path d="M40 238 H182 L200 250 H52 Z" fill="#111827" opacity=".82"/><rect x="96" y="247" width="45" height="13" rx="5" fill="#334155"/><path d="M180 103 q10 28 0 62" fill="none" stroke="#cbd5e1" stroke-width="2" opacity=".7"/></g>`;
 }
 return `<g class="frontUnit"><path d="M40 98 C60 92 130 92 185 102 L185 245 L40 245 Z" fill="${l.base}" stroke="#243044" stroke-width="3"/><rect x="62" y="116" width="96" height="49" rx="6" fill="#111827"/><rect x="70" y="124" width="38" height="33" rx="4" fill="#334155"/><rect x="117" y="124" width="32" height="33" rx="4" fill="#334155"/><rect x="68" y="176" width="76" height="10" rx="4" fill="#111827"/><circle cx="64" cy="198" r="5" fill="#fde68a"/><circle cx="154" cy="198" r="5" fill="#fde68a"/><path d="M40 237 H180 L194 249 H50 Z" fill="#111827" opacity=".78"/><rect x="98" y="245" width="38" height="14" rx="5" fill="#334155"/></g>`;
}

function drawWindow(x,y,w,h,type='normal'){return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="#152238" stroke="#101827" stroke-width="2"/><rect x="${x+4}" y="${y+4}" width="${w-8}" height="${h/3}" rx="2" fill="rgba(255,255,255,.18)"/><line x1="${x+w/2}" y1="${y+2}" x2="${x+w/2}" y2="${y+h-2}" stroke="#64748b" stroke-width="1" opacity=".8"/></g>`}
function drawDoor(x,y,w,h){return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#edf2f7" stroke="#334155" stroke-width="2"/><line x1="${x+w/2}" y1="${y+4}" x2="${x+w/2}" y2="${y+h-4}" stroke="#64748b"/><rect x="${x+12}" y="${y+18}" width="${w-24}" height="30" rx="3" fill="#172033"/><rect x="${x+4}" y="${y+h-10}" width="${w-8}" height="4" fill="#94a3b8"/></g>`}
function drawBogie(cx,y,type='SS167'){
 const cfg={
  SS167:{frame:'#263244',spring:'#94a3b8',motor:true,disc:true,yaw:true,label:'SS167'},
  DT71:{frame:'#1f2937',spring:'#cbd5e1',motor:true,disc:true,yaw:true,label:'DT71'},
  TR255:{frame:'#334155',spring:'#e2e8f0',motor:false,disc:true,yaw:true,label:'TR255'},
  DIESEL:{frame:'#3f3f46',spring:'#a8a29e',motor:false,disc:false,yaw:false,label:'DT22'},
  LTD:{frame:'#111827',spring:'#d1d5db',motor:false,disc:true,yaw:true,label:'TR-L'}
 }[type]||{};
 return `<g class="bogie" transform="translate(${cx-86},${y})">
  <rect x="10" y="18" width="152" height="28" rx="8" fill="${cfg.frame}" stroke="#0f172a" stroke-width="2"/>
  <rect x="36" y="2" width="100" height="16" rx="4" fill="#58657a" stroke="#1f2937"/>
  <path d="M22 31 C48 16 124 16 150 31" fill="none" stroke="#8fa1bc" stroke-width="4"/>
  <path d="M28 42 H144" stroke="#cbd5e1" stroke-width="3" opacity=".75"/>
  <circle cx="45" cy="54" r="21" fill="#111827" stroke="#0f172a" stroke-width="5"/>
  <circle cx="127" cy="54" r="21" fill="#111827" stroke="#0f172a" stroke-width="5"/>
  <circle cx="45" cy="54" r="11" fill="#475569"/><circle cx="127" cy="54" r="11" fill="#475569"/>
  ${cfg.disc?`<circle cx="45" cy="54" r="6" fill="#cbd5e1"/><circle cx="127" cy="54" r="6" fill="#cbd5e1"/>`:''}
  <rect x="31" y="37" width="28" height="15" rx="3" fill="#66758c"/><rect x="113" y="37" width="28" height="15" rx="3" fill="#66758c"/>
  <path d="M58 20 q12 20 28 0 q12 20 28 0" fill="none" stroke="${cfg.spring}" stroke-width="3"/>
  ${cfg.motor?`<rect x="68" y="36" width="36" height="24" rx="5" fill="#0f172a" stroke="#94a3b8"/><path d="M74 43 h24 M74 50 h24" stroke="#94a3b8"/>`:''}
  ${cfg.yaw?`<line x1="12" y1="8" x2="48" y2="34" stroke="#64748b" stroke-width="3"/><line x1="160" y1="8" x2="124" y2="34" stroke="#64748b" stroke-width="3"/>`:''}
  <text x="86" y="82" text-anchor="middle" font-size="9" fill="#334155">${cfg.label}</text>
 </g>`
}
function drawCooler(x,y,label){return `<g><rect x="${x}" y="${y}" width="150" height="38" rx="8" fill="#d8e0ea" stroke="#475569" stroke-width="2"/><rect x="${x+12}" y="${y+9}" width="46" height="20" rx="3" fill="#94a3b8"/><circle cx="${x+82}" cy="${y+19}" r="10" fill="#64748b"/><circle cx="${x+113}" cy="${y+19}" r="10" fill="#64748b"/><text x="${x+75}" y="${y-4}" text-anchor="middle" font-size="10" fill="#334155">${label}</text></g>`}
function drawPantograph(x,y){return `<g><rect x="${x-32}" y="${y+40}" width="64" height="8" rx="3" fill="#334155"/><circle cx="${x-22}" cy="${y+36}" r="4" fill="#475569"/><circle cx="${x+22}" cy="${y+36}" r="4" fill="#475569"/><path d="M${x-48} ${y+6} L${x} ${y+36} L${x+48} ${y+6}" fill="none" stroke="#1f2937" stroke-width="4"/><path d="M${x-34} ${y+6} L${x} ${y+36} L${x+34} ${y+6}" fill="none" stroke="#64748b" stroke-width="2"/><line x1="${x-60}" y1="${y+4}" x2="${x+60}" y2="${y+4}" stroke="#111827" stroke-width="4"/><line x1="${x-70}" y1="${y+1}" x2="${x-60}" y2="${y+4}" stroke="#111827" stroke-width="3"/><line x1="${x+60}" y1="${y+4}" x2="${x+70}" y2="${y+1}" stroke="#111827" stroke-width="3"/></g>`}
function drawVCB(x,y){return `<g><rect x="${x}" y="${y}" width="42" height="22" rx="4" fill="#cbd5e1" stroke="#475569"/><circle cx="${x+10}" cy="${y-3}" r="4" fill="#f8fafc" stroke="#64748b"/><circle cx="${x+30}" cy="${y-3}" r="4" fill="#f8fafc" stroke="#64748b"/><text x="${x+21}" y="${y+37}" text-anchor="middle" font-size="9" fill="#334155">VCB</text></g>`}
function drawUnderItem(x,y,type){
 const box=(w,h,c,t,extra='')=>`<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${c}" stroke="#111827" stroke-width="1.5"/>${extra}<text x="${x+w/2}" y="${y+h-10}" text-anchor="middle" font-size="10" fill="#f8fafc">${t}</text></g>`;
 if(type==='VVVF') return box(96,52,'#283648','VVVF',`<path d="M${x+8} ${y+8} h80 M${x+8} ${y+16} h80 M${x+8} ${y+24} h80 M${x+8} ${y+32} h80" stroke="#8fa1bc" opacity=".8"/><rect x="${x+10}" y="${y+36}" width="20" height="8" fill="#111827"/>`);
 if(type==='SIV') return box(84,46,'#415066','SIV',`<path d="M${x+8} ${y+10} h68 M${x+8} ${y+18} h68 M${x+8} ${y+26} h68" stroke="#cbd5e1" opacity=".55"/>`);
 if(type==='MR'||type==='CP') return `<g><rect x="${x}" y="${y+8}" width="86" height="38" rx="8" fill="#475569" stroke="#111827"/><circle cx="${x+18}" cy="${y+27}" r="11" fill="#1f2937"/><circle cx="${x+46}" cy="${y+27}" r="11" fill="#1f2937"/><rect x="${x+60}" y="${y+17}" width="18" height="20" fill="#94a3b8"/><text x="${x+43}" y="${y+58}" text-anchor="middle" font-size="10" fill="#334155">${type}</text></g>`;
 if(type==='AIR-TANK'||type==='TOILET-TANK') return `<g><rect x="${x}" y="${y+14}" width="92" height="25" rx="13" fill="#64748b" stroke="#1f2937"/><line x1="${x+18}" y1="${y+14}" x2="${x+18}" y2="${y+39}" stroke="#cbd5e1"/><line x1="${x+74}" y1="${y+14}" x2="${x+74}" y2="${y+39}" stroke="#cbd5e1"/><path d="M${x+5} ${y+27} H${x-8} M${x+100} ${y+27} H${x+112}" stroke="#334155"/><text x="${x+46}" y="${y+31}" text-anchor="middle" font-size="10" fill="#e5e7eb">${type==='TOILET-TANK'?'WC':'AIR'}</text></g>`;
 if(type==='BRAKE') return box(70,42,'#52525b','BRAKE',`<circle cx="${x+18}" cy="${y+18}" r="8" fill="#111827"/><circle cx="${x+42}" cy="${y+18}" r="8" fill="#111827"/>`);
 if(type==='ENGINE') return box(104,54,'#374151','ENGINE',`<path d="M${x+8} ${y+12} h88 M${x+8} ${y+22} h88 M${x+8} ${y+32} h88" stroke="#9ca3af"/><rect x="${x+72}" y="${y+8}" width="20" height="28" fill="#111827"/>`);
 if(type==='FUEL') return `<g><rect x="${x}" y="${y+12}" width="100" height="30" rx="15" fill="#4b5563" stroke="#111827"/><text x="${x+50}" y="${y+32}" text-anchor="middle" font-size="10" fill="#f8fafc">FUEL</text></g>`;
 return box(80,44,'#475569',type);
}
function render(){const b=bodies[state.body],f=fronts[state.front],r=roofs[state.roof],u=under[state.under],l=liveries[state.livery];$('title').textContent=state.name||'RVS Vehicle';$('subtitle').textContent=`${b.id} + ${f.id} + ${r.id} + ${u.id} + ${l.id}`;let svg=`<svg id="trainSvg" viewBox="0 0 1000 360" width="100%" xmlns="http://www.w3.org/2000/svg">`;
svg+=`<defs><linearGradient id="glass" x1="0" x2="1"><stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#334155"/></linearGradient></defs>`;
svg+=`<rect x="40" y="95" width="920" height="150" rx="16" fill="${l.base}" stroke="#243044" stroke-width="3"/>`;
svg+=`<line x1="48" y1="108" x2="952" y2="108" stroke="#b6c2d4" stroke-width="1"/><line x1="48" y1="238" x2="952" y2="238" stroke="#111827" stroke-width="2"/><rect x="40" y="245" width="920" height="8" fill="#1f2937" opacity=".65"/>`; 
svg+=`<path d="M45 215 H955 V245 H45 Z" fill="${l.lower}" opacity=".95"/>`;
svg+=`<rect x="40" y="170" width="920" height="14" fill="${l.stripe}"/><rect x="40" y="186" width="920" height="5" fill="${l.accent}"/>`;
(b.beads||[]).forEach(y=>svg+=`<line x1="48" y1="${95+y/20}" x2="952" y2="${95+y/20}" stroke="#cbd5e1" stroke-width="1" opacity=".9"/>`);
svg+=drawFrontEnd(f,l);
svg+=`<rect x="875" y="112" width="70" height="55" rx="6" fill="url(#glass)"/>`;
(b.pockets||[]).forEach(x=>{let px=mmX(x,b)-12;svg+=`<rect x="${px}" y="126" width="24" height="78" rx="2" fill="#e2e8f0" stroke="#cbd5e1"/>`});
(b.windows||[]).forEach(x=>svg+=drawWindow(mmX(x,b)-38,124,76,b.type==='green'?32:42));
(b.doors||[]).forEach(x=>svg+=drawDoor(mmX(x,b)-27,118,54,100));
if(b.type==='green'){b.windows.forEach(x=>svg+=drawWindow(mmX(x,b)-38,170,76,32));}
svg+=`<rect x="450" y="137" width="100" height="22" rx="3" fill="#0f172a"/><text x="500" y="153" text-anchor="middle" font-size="13" fill="#f8fafc">${state.service||'RVS'}</text>`;
// roof
svg+=`<path d="M70 92 C250 62 750 62 930 92" fill="none" stroke="#94a3b8" stroke-width="5" opacity=".8"/>`;
for(let cx of [310,690]) svg+=drawCooler(cx-75,55,r.cooler);
(r.pantographs||[]).forEach((x,i)=>{let px=mmX(x,b);svg+=drawPantograph(px,17);if(r.vFacilities){svg+=drawVCB(px+70,62);svg+=`<circle cx="${px+132}" cy="72" r="9" fill="#e5e7eb" stroke="#64748b"/><text x="${px+132}" y="92" text-anchor="middle" font-size="9" fill="#334155">LA</text><path d="M${px+35} 70 C${px+90} 45 ${px+210} 55 ${px+270} 70" fill="none" stroke="#1f2937" stroke-width="3"/>`;}});
// underfloor
let ux=145;(u.items||[]).forEach(it=>{svg+=drawUnderItem(ux,260,it);ux+=90});svg+=drawUnderItem(ux,260,'BRAKE');ux+=82;svg+=drawUnderItem(ux,260,'AIR-TANK');
(b.bogies||[]).forEach(x=>svg+=drawBogie(mmX(x,b),276,b.bogieType));
svg+=`<text x="50" y="336" font-size="12" fill="#334155">${b.dr} / ${b.length}mm / doors ${b.doors.length} / roof ${r.id} / under ${u.id}</text>`;
svg+=`</svg>`;$('svgWrap').innerHTML=svg;
$('props').innerHTML=rows([['車体',`${b.id} ${b.name}`],['前面',`${f.id} ${f.name}`],['屋根',`${r.id} ${r.name}`],['床下',`${u.id} ${u.name}`],['塗装',`${l.id} ${l.name}`],['車体長',`${b.length} mm`],['ドア中心',b.doors.join(' / ')],['台車中心',b.bogies.join(' / ')],['台車形式',b.bogieType],['屋根機器',`${r.cooler} / PT ${r.pantographs.length}`],['床下機器',u.items.join(' / ')]]);
$('compat').innerHTML=rows([['白夜線','<span class="ok">4両以下なら適合</span>'],['七神本線','<span class="ok">10両級まで適合</span>'],['画像保存','<span class="ok">なし：設計データのみ</span>']]);}
function rows(arr){return arr.map(([a,b])=>`<div class="propRow"><b>${a}</b><span>${b}</span></div>`).join('')}
function saveRvs(){const data={app:'RVS',version:'β1.6',state};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='odorail_beta16.rvs';a.click()}
function loadRvs(e){const file=e.target.files[0];if(!file)return;const rd=new FileReader();rd.onload=()=>{try{const d=JSON.parse(rd.result);if(d.state){state=d.state;sync();render()}}catch(err){alert('読込失敗')}};rd.readAsText(file)}
function exportPng(){const svg=document.getElementById('trainSvg');const data=new XMLSerializer().serializeToString(svg);const img=new Image();const blob=new Blob([data],{type:'image/svg+xml'});const url=URL.createObjectURL(blob);img.onload=()=>{const c=document.createElement('canvas');c.width=1600;c.height=576;const ctx=c.getContext('2d');ctx.fillStyle='#e8eef8';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(img,0,0,c.width,c.height);const a=document.createElement('a');a.href=c.toDataURL('image/png');a.download='rvs_beta16.png';a.click();URL.revokeObjectURL(url)};img.src=url}
init();
