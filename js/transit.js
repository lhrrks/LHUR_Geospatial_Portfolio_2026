(() => {
  'use strict';
  const nodes={A:{name:'Gerbang Utama',x:85,y:270},B:{name:'Peron Barat',x:220,y:105},C:{name:'Titik Transit',x:388,y:215},D:{name:'Halte Utara',x:555,y:88},E:{name:'Pintu Selatan',x:235,y:330}};
  const edges=[['A','B',165],['B','C',240],['C','D',180],['A','E',210],['E','C',190],['B','D',290],['E','D',310]];
  function shortestPath(start,end){
    const dist=Object.fromEntries(Object.keys(nodes).map(k=>[k,Infinity]));const prev={};const unvisited=new Set(Object.keys(nodes));dist[start]=0;
    while(unvisited.size){let u=null;for(const item of unvisited)if(u===null||dist[item]<dist[u])u=item;if(u===null||dist[u]===Infinity)break;unvisited.delete(u);if(u===end)break;for(const [a,b,w] of edges){const v=a===u?b:b===u?a:null;if(v===null||!unvisited.has(v))continue;const candidate=dist[u]+w;if(candidate<dist[v]){dist[v]=candidate;prev[v]=u}}}
    if(!Number.isFinite(dist[end]))return {path:[],distance:Infinity};const path=[];let at=end;while(at!==undefined){path.unshift(at);at=prev[at]}return {path,distance:dist[end]};
  }
  const svg=document.getElementById('route-graph');const origin=document.getElementById('origin'),destination=document.getElementById('destination'),speed=document.getElementById('walking-speed');
  const edgeId=(a,b)=>[a,b].sort().join('-');
  function render(){
    const start=origin.value,end=destination.value;
    const result=shortestPath(start,end);
    const active=new Set(result.path.slice(1).map((n,i)=>edgeId(result.path[i],n)));
    const kmh=Number(speed.value),eta=result.distance/1000/kmh*60;
    document.getElementById('speed-value').textContent=kmh.toFixed(1)+' km/jam';
    document.getElementById('route-distance').textContent=String(result.distance);
    document.getElementById('route-eta').textContent=eta.toFixed(1);
    document.getElementById('route-edges').textContent=String(Math.max(0,result.path.length-1)).padStart(2,'0');
    const lines=edges.map(([a,b,d])=>{const x=nodes[a],y=nodes[b],picked=active.has(edgeId(a,b));return `<line class="edge ${picked?'active':''}" x1="${x.x}" y1="${x.y}" x2="${y.x}" y2="${y.y}"/><text class="distance" x="${(x.x+y.x)/2+7}" y="${(x.y+y.y)/2-7}">${d}m</text>`}).join('');
    const points=Object.entries(nodes).map(([id,n])=>`<circle class="station-node ${result.path.includes(id)?'active':''}" cx="${n.x}" cy="${n.y}" r="13"/><text x="${n.x+17}" y="${n.y-12}">${id}</text><text class="distance" x="${n.x+17}" y="${n.y+3}">${n.name}</text>`).join('');
    svg.innerHTML=lines+points;
    document.getElementById('route-steps').innerHTML=result.path.map((id,i)=>`<span class="route-step">${i+1}. ${id} — ${nodes[id].name}</span>`).join('');
    document.getElementById('route-formula').textContent=`ETA = (${result.distance} m ÷ 1000) ÷ ${kmh.toFixed(1)} km/jam × 60 = ${eta.toFixed(2)} menit. Ini estimasi berbasis kecepatan konstan, bukan prediksi waktu aktual.`;
    document.getElementById('route-segments').innerHTML=result.path.slice(1).map((b,i)=>{const a=result.path[i],edge=edges.find(([x,y])=>edgeId(x,y)===edgeId(a,b));return `<tr><td>${a} → ${b}</td><td>${edge[2]} m</td><td>Terpilih</td></tr>`}).join('')||'<tr><td colspan="3">Asal sama dengan tujuan; tidak ada ruas yang ditempuh.</td></tr>';
  }
  [origin,destination].forEach(s=>s.addEventListener('change',render));speed.addEventListener('input',render);
  document.getElementById('swap').addEventListener('click',()=>{const temp=origin.value;origin.value=destination.value;destination.value=temp;render()});
  render();
})();
