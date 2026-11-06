(() => {
  'use strict';
  const keys=['dryness','landcover','proximity','slope'];
  const labels={dryness:'Kekeringan',landcover:'Tutupan lahan',proximity:'Kedekatan',slope:'Kemiringan'};
  const defaults={dryness:35,landcover:30,proximity:20,slope:15};
  // Fully synthetic, fixed values (0–1) for deterministic example behavior.
  const data=Array.from({length:20},(_,i)=>({
    dryness:((i*19+23)%91+6)/100,
    landcover:((i*31+46)%88+8)/100,
    proximity:((i*43+17)%91+5)/100,
    slope:((i*37+34)%83+10)/100
  }));
  let selected=0;
  const inputByKey=Object.fromEntries(keys.map(k=>[k,document.getElementById(k)]));
  const riskColor=v=>v<.35?'#77b7a2':v<.65?'#e0c67b':'#d4846a';
  const riskText=v=>v<.35?'RENDAH':v<.65?'SEDANG':'TINGGI';
  const effectiveWeights=()=>{const raw=Object.fromEntries(keys.map(k=>[k,Number(inputByKey[k].value)]));const sum=Object.values(raw).reduce((a,b)=>a+b,0);return Object.fromEntries(keys.map(k=>[k,sum?raw[k]/sum:0]))};
  const score=(row,w)=>keys.reduce((a,k)=>a+row[k]*w[k],0);
  function render(){
    const rawSum=keys.reduce((a,k)=>a+Number(inputByKey[k].value),0);
    const w=effectiveWeights();
    keys.forEach(k=>document.getElementById(k+'-value').textContent=(w[k]*100).toFixed(1)+'%');
    document.getElementById('total-weights').textContent=rawSum?rawSum+' → 100%':'0%';
    const scores=data.map(d=>score(d,w));
    const avg=scores.reduce((a,b)=>a+b,0)/scores.length;
    document.getElementById('average-score').textContent=avg.toFixed(2);
    document.getElementById('high-count').textContent=String(scores.filter(s=>s>=.65).length).padStart(2,'0');
    const grid=document.getElementById('risk-grid');
    grid.innerHTML=scores.map((s,i)=>`<button class="risk-cell ${i===selected?'selected':''}" type="button" data-cell="${i}" aria-label="Sel ${i+1}, indeks ${s.toFixed(2)}, ${riskText(s)}" aria-pressed="${String(i===selected)}" style="background:${riskColor(s)}"><span>${String(i+1).padStart(2,'0')}</span></button>`).join('');
    grid.querySelectorAll('[data-cell]').forEach(el=>el.addEventListener('click',()=>{selected=Number(el.dataset.cell);render()}));
    const active=scores[selected];document.getElementById('selected-score').textContent=active.toFixed(2);document.getElementById('selected-category').textContent=riskText(active);document.getElementById('cell-label').textContent=String(selected+1).padStart(2,'0');
    document.getElementById('factor-bars').innerHTML=keys.map(k=>{const part=data[selected][k]*w[k];return `<div class="factor-row"><span>${labels[k]}</span><div class="factor-track"><div class="factor-fill" style="width:${(part*100).toFixed(2)}%"></div></div><span>${part.toFixed(2)}</span></div>`}).join('');
    document.getElementById('cell-computation').textContent=keys.map(k=>`${data[selected][k].toFixed(2)}×${w[k].toFixed(2)}`).join(' + ')+` = ${active.toFixed(3)}`;
  }
  keys.forEach(k=>inputByKey[k].addEventListener('input',render));
  document.getElementById('reset-weights').addEventListener('click',()=>{keys.forEach(k=>inputByKey[k].value=defaults[k]);selected=0;render()});
  render();
})();
