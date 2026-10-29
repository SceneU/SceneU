/* 우리의 하루 - 서비스 워커 (상대경로 기준, 오프라인에서도 열리게) */
var CACHE = 'ourday-v2';
var CORE = ['./', './index.html', './style.css', './app.js', './config.js', './manifest.webmanifest'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
/* 네트워크 우선, 실패하면 캐시 (수정한 파일이 바로 반영돼요) */
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) { return; }
  /* 사진은 저장된 걸 먼저 보여주고(빠름), 뒤에서 새로 받아 갱신해요 */
  if (/\.(jpe?g|png|heic|gif|webp)$/i.test(new URL(req.url).pathname)) {
    e.respondWith(caches.open(CACHE).then(function (c) {
      return c.match(req).then(function (hit) {
        var net = fetch(req).then(function (res) { if (res && res.ok) { c.put(req, res.clone()); } return res; });
        return hit || net;
      });
    }).catch(function () { return fetch(req); }));
    return;
  }
  e.respondWith(
    fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
      return res;
    }).catch(function () { return caches.match(req).then(function (r) { return r || caches.match('./index.html'); }); })
  );
});
