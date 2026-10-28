// Mira (UTAC): funcionament fora de línia. Serveix la còpia desada a l'instant i l'actualitza en segon pla.
const APP='mirastudio',V=APP+'-78b6314419';
const CORE=["./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./icons/icon-maskable-192.png", "./icons/icon-maskable-512.png", "./icons/favicon-32.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith(APP+'-')&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  const nav=r.mode==='navigate',key=nav?'./index.html':r;
  e.respondWith(caches.open(V).then(async c=>{const hit=await c.match(key,{ignoreSearch:nav});
    const net=fetch(nav?'./index.html':r,{cache:'no-cache'}).then(res=>{const et=res&&res.headers.get('etag');if(res&&res.ok&&!(et&&hit&&hit.headers.get('etag')===et))c.put(key,res.clone());return res}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit}const res=await net;return res||new Response('Sense connexió',{status:503})}))});
