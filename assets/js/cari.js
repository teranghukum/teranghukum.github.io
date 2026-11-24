// Pencarian sederhana sisi-klien untuk GitHub Pages (statis, tanpa server).
// Indeks dibangkitkan Jekyll ke /search.json dari judul halaman/artikel yang sudah terbit.
document.addEventListener('DOMContentLoaded', async () => {
  const input = document.getElementById('q'); const list = document.getElementById('hasil');
  if(!input || !list) return;
  let idx = [];
  try { idx = await (await fetch('/search.json')).json(); } catch(e) { return; }
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase(); list.innerHTML='';
    if(!q) return;
    idx.filter(x => (x.title+' '+(x.bidang||'')+' '+(x.jenis||'')).toLowerCase().includes(q))
       .forEach(x => { const li=document.createElement('li'); const a=document.createElement('a'); a.href=x.url; a.textContent=x.title; li.appendChild(a); list.appendChild(li); });
  });
});
