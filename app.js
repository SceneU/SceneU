/* =========================================================
   우리의 하루 - 가상 휴대폰 연애 시뮬레이션
   순수 HTML/CSS/JS (빌드 없음). 데이터는 config.js 에서 고쳐요.
   ========================================================= */
(function () {
  'use strict';
  var C = window.CONFIG;
  var phone = document.getElementById('phone');

  /* ---------- 유틸 ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }
  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }
  function comma(n) { return Number(n).toLocaleString('en-US'); }
  function compact(n) {
    if (n >= 10000) { return (Math.round(n / 1000) / 10) + '만'; }
    return comma(n);
  }
  function qs(r, s) { return r.querySelector(s); }
  function qsa(r, s) { return Array.prototype.slice.call(r.querySelectorAll(s)); }

  /* ---------- 저장소 (못 써도 에러 없이) ---------- */
  var mem = {};
  var store = {
    get: function (k) {
      try { var v = localStorage.getItem(k); if (v !== null) { return v; } } catch (e) {}
      return mem[k] === undefined ? null : mem[k];
    },
    set: function (k, v) { mem[k] = v; try { localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { delete mem[k]; try { localStorage.removeItem(k); } catch (e) {} }
  };

  var USER = { name: '', igId: '' };
  function loadUser() {
    var raw = store.get('ourday.user');
    if (!raw) { return false; }
    try {
      var u = JSON.parse(raw);
      if (u && u.name && u.igId) { USER = u; return true; }
    } catch (e) {}
    return false;
  }
  function handleReset() {
    try {
      if (/[?&]reset=1/.test(location.search)) {
        store.del('ourday.user'); store.del('ourday.dm'); store.del('ourday.dmRead');
        if (history.replaceState) { history.replaceState(null, '', location.pathname); }
      }
    } catch (e) {}
  }
  function isStandalone() {
    try {
      return window.navigator.standalone === true ||
        (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
    } catch (e) { return false; }
  }

  /* ---------- 아이콘 ---------- */
  var I = {};
  I.signal = '<svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>';
  I.wifi = '<svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor"><path d="M8.5 2.2c2.5 0 4.7.9 6.4 2.6l1.1-1.2C14 1.7 11.4.7 8.5.7S3 1.7 1 3.6l1.1 1.2c1.7-1.7 3.9-2.6 6.4-2.6z"/><path d="M8.5 5.5c1.5 0 2.800.5 3.800 1.500l1.100-1.200C12.100 4.600 10.400 3.900 8.500 3.900S4.900 4.600 3.600 5.800l1.100 1.200c1-1 2.300-1.500 3.800-1.500z"/><circle cx="8.5" cy="9.7" r="1.7"/></svg>';
  I.batt = '<svg width="27" height="13" viewBox="0 0 27 13"><rect x=".5" y=".5" width="22" height="12" rx="3.6" fill="none" stroke="currentColor" opacity=".45"/><rect x="2" y="2" width="19" height="9" rx="2.3" fill="currentColor"/><path d="M24 4.5v4c.9-.3 1.5-1.2 1.5-2s-.6-1.7-1.5-2z" fill="currentColor" opacity=".5"/></svg>';
  I.lock = '<svg width="20" height="24" viewBox="0 0 20 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="2.5" y="10.5" width="15" height="11" rx="3" fill="currentColor" stroke="none"/><path d="M5.500 10.500V7a4.500 4.500 0 019 0v3.500"/></svg>';
  I.chevUp = '<svg width="20" height="10" viewBox="0 0 20 10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l7-6 7 6"/></svg>';
  I.flash = '<svg width="22" height="26" viewBox="0 0 22 26" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"><path d="M6 2h10l-1.500 5h-7z M7.500 7v14a3.500 3.500 0 007 0V7"/><path d="M11 11v4" stroke-linecap="round"/></svg>';
  I.camera = '<svg width="26" height="22" viewBox="0 0 26 22" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"><path d="M3 6h5l2-3h6l2 3h5v13H3z"/><circle cx="13" cy="12.500" r="4.200"/></svg>';
  I.search = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="10.500" cy="10.500" r="6.500"/><path d="M15.500 15.500L21 21"/></svg>';
  I.mic = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5.500 11a6.500 6.500 0 0013 0M12 17.500V21"/></svg>';
  I.back = '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2L2 10l8 8"/></svg>';
  I.chevR = '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1.500 1.500L7 7l-5.500 5.500"/></svg>';
  I.person = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4.500"/><path d="M3.500 22c0-5 3.800-8 8.500-8s8.500 3 8.500 8z"/></svg>';
  I.photo = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="4.500" width="18" height="15" rx="2.500"/><circle cx="9" cy="10" r="1.800"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>';
  I.video = '<svg width="26" height="18" viewBox="0 0 26 18" fill="none" stroke="#0a84ff" stroke-width="2" stroke-linejoin="round"><rect x="1.500" y="2" width="16" height="14" rx="3.500"/><path d="M18 7l6-3.500v11L18 11z"/></svg>';
  I.plus = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round"><path d="M10 3v14M3 10h14"/></svg>';
  I.info = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a84ff" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9.500"/><path d="M12 11v6" stroke-width="2.400"/><circle cx="12" cy="7.500" r=".9" fill="#0a84ff"/></svg>';
  I.filter = '<svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round"><path d="M2 3h18M5 9h12M8 15h6"/></svg>';
  I.trash = '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V4.500h6V7M6.500 7l1 13h9l1-13"/></svg>';
  I.dots3 = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>';
  I.share = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.900" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4M7.500 8.500L12 4l4.500 4.500M5 12v7h14v-7"/></svg>';
  I.heart = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.900" stroke-linejoin="round"><path d="M12 20s-7.500-4.600-9-9.200C2 7 4.400 4.500 7.400 4.500c1.900 0 3.500 1 4.600 2.600 1.100-1.600 2.700-2.600 4.600-2.600 3 0 5.400 2.500 4.400 6.300C19.500 15.400 12 20 12 20z"/></svg>';
  I.compass = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.900" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.500 8.500l-2 5-5 2 2-5z"/></svg>';
  I.tabs = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.900" stroke-linejoin="round"><rect x="3" y="7" width="14" height="13" rx="2.500"/><path d="M7 4h12a2 2 0 012 2v10"/></svg>';
  /* X 앱 */
  I.xlogo = function (s) { return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><path d="M4.500 3.500l15 17" stroke-width="2.800"/><path d="M19.500 3.500l-15 17" stroke-width="1.300"/></svg>'; };
  I.reply = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linejoin="round"><path d="M4 5h16v11h-8.500L7 20v-4H4z"/></svg>';
  I.repost = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3.500L3.500 7 7 10.500M3.500 7H16a3 3 0 013 3v2.500M17 20.500l3.500-3.500L17 13.500M20.500 17H8a3 3 0 01-3-3v-2.500"/></svg>';
  I.like = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linejoin="round"><path d="M12 20s-7.500-4.600-9-9.200C2 7 4.400 4.500 7.400 4.500c1.900 0 3.500 1 4.600 2.600 1.100-1.600 2.700-2.600 4.600-2.600 3 0 5.400 2.500 4.400 6.300C19.500 15.400 12 20 12 20z"/></svg>';
  I.views = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round"><path d="M6 20v-9M12 20V5M18 20v-6"/></svg>';
  I.bm = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linejoin="round"><path d="M6 4h12v16l-6-4.500L6 20z"/></svg>';
  I.shr = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4M7.500 8.500L12 4l4.500 4.500M5 12v7h14v-7"/></svg>';
  I.home = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3.500 11L12 3.500l8.500 7.500v9.500H14.500v-6h-5v6H3.500z"/></svg>';
  I.homeOn = '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3.500 11L12 3.500l8.500 7.500v9.500H14.500v-6h-5v6H3.500z"/></svg>';
  I.bell = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 17V11a6 6 0 0112 0v6l1.500 2h-15zM10 21h4"/></svg>';
  I.mail = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3.500c-5 0-9 3.400-9 7.700 0 2.500 1.400 4.700 3.600 6.100-.2 1.200-.9 2.400-1.900 3.300 2-.1 3.800-.9 5-1.900.7.200 1.500.3 2.300.3 5 0 9-3.400 9-7.800S17 3.500 12 3.500z"/></svg>';
  I.mailOn = '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3.500c-5 0-9 3.400-9 7.700 0 2.500 1.400 4.700 3.600 6.100-.2 1.200-.9 2.400-1.900 3.300 2-.1 3.800-.9 5-1.900.7.200 1.500.3 2.300.3 5 0 9-3.400 9-7.800S17 3.500 12 3.500z"/></svg>';
  I.chatPlus = '<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.900" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.500c-4.700 0-8.500 3.200-8.500 7.200 0 2.300 1.300 4.400 3.400 5.700-.2 1.100-.8 2.200-1.800 3 1.900-.1 3.500-.8 4.700-1.800.7.200 1.400.3 2.200.3"/><path d="M17.500 12v7M14 15.500h7"/></svg>';
  I.chevDn = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.400" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
  I.sort = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round"><path d="M8 20V5M4 9l4-4 4 4M16 4v15M12 15l4 4 4-4"/></svg>';
  I.pencil = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20l1-4.500L16.500 4a2 2 0 013 3L8 18.500z"/></svg>';
  I.lockSm = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="10" rx="3" fill="currentColor" stroke="none"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>';
  /* 전화 앱 탭 */
  I.tStar = '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l2.700 5.900 6.300.7-4.700 4.300 1.300 6.300L12 17l-5.600 3.200 1.300-6.300L3 9.600l6.300-.7z"/></svg>';
  I.tClock = '<svg width="26" height="26" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.500" fill="currentColor"/><path d="M12 6.500V12.500h4.500" stroke="#fff" stroke-width="2.200" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  I.tPerson = '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="9.500" r="3.400" fill="#fff"/><path d="M5.500 18.500c1-3 3.600-4.300 6.500-4.300s5.500 1.300 6.500 4.300A9.500 9.500 0 0112 21.500a9.500 9.500 0 01-6.500-3z" fill="#fff"/></svg>';
  I.tKeys = '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="4.500" r="2"/><circle cx="12" cy="4.500" r="2"/><circle cx="19" cy="4.500" r="2"/><circle cx="5" cy="11" r="2"/><circle cx="12" cy="11" r="2"/><circle cx="19" cy="11" r="2"/><circle cx="5" cy="17.500" r="2"/><circle cx="12" cy="17.500" r="2"/><circle cx="19" cy="17.500" r="2"/><circle cx="12" cy="23" r="1.500" opacity="0"/></svg>';
  I.tVoice = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round"><circle cx="6.500" cy="12" r="3.800"/><circle cx="17.500" cy="12" r="3.800"/><path d="M6.500 15.800h11"/></svg>';
  I.handset = '<svg viewBox="0 0 24 24" fill="#fff"><path d="M20.010 15.380c-1.230 0-2.420-.2-3.530-.56a.977.977 0 00-1.010.24l-1.570 1.970c-2.830-1.350-5.480-3.900-6.890-6.830l1.950-1.660c.27-.28.35-.67.24-1.020-.37-1.110-.56-2.300-.56-3.530 0-.54-.45-.99-.99-.99H4.190C3.650 3 3 3.240 3 3.990 3 13.280 10.730 21 20.010 21c.71 0 .99-.63.99-1.180v-3.450c0-.54-.45-.99-.99-.99z"/></svg>';

  /* ---------- 앱 아이콘 (직접 그린 단순한 아이콘) ---------- */
  var ICO = {};
  ICO.x = '<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#000"/><path d="M17 16l26 28" stroke="#fff" stroke-width="5.500"/><path d="M43 16L17 44" stroke="#fff" stroke-width="2.200"/></svg>';
  ICO.instagram = '<svg viewBox="0 0 60 60"><defs><radialGradient id="igG" cx=".3" cy="1.05" r="1.15"><stop offset="0" stop-color="#fdf497"/><stop offset=".1" stop-color="#fdf497"/><stop offset=".45" stop-color="#fd5949"/><stop offset=".6" stop-color="#d6249f"/><stop offset="1" stop-color="#285aeb"/></radialGradient></defs><rect width="60" height="60" fill="url(#igG)"/><rect x="15" y="15" width="30" height="30" rx="9" fill="none" stroke="#fff" stroke-width="3"/><circle cx="30" cy="30" r="7" fill="none" stroke="#fff" stroke-width="3"/><circle cx="38.500" cy="21.500" r="2" fill="#fff"/></svg>';
  ICO.youtube = '<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fff"/><rect x="9" y="16.500" width="42" height="27" rx="8" fill="#ee2e3d"/><path d="M25.500 23v14l12-7z" fill="#fff"/></svg>';
  ICO.weverseFb = '<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#05051c"/><text x="30" y="41" font-size="36" font-style="italic" font-weight="700" text-anchor="middle" fill="#eeeef2" font-family="Georgia,serif">w</text></svg>';
  ICO.photos = '<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fff"/><g transform="translate(30 30)" style="mix-blend-mode:multiply"><ellipse cx="0" cy="-10" rx="7.500" ry="11.500" fill="#f6d24a" opacity=".9"/><ellipse cx="0" cy="-10" rx="7.500" ry="11.500" fill="#f39a3a" opacity=".9" transform="rotate(45)"/><ellipse cx="0" cy="-10" rx="7.500" ry="11.500" fill="#ea5a5a" opacity=".9" transform="rotate(90)"/><ellipse cx="0" cy="-10" rx="7.500" ry="11.500" fill="#c06bd6" opacity=".9" transform="rotate(135)"/><ellipse cx="0" cy="-10" rx="7.500" ry="11.500" fill="#5a8ee6" opacity=".9" transform="rotate(180)"/><ellipse cx="0" cy="-10" rx="7.500" ry="11.500" fill="#4cc3e8" opacity=".9" transform="rotate(225)"/><ellipse cx="0" cy="-10" rx="7.500" ry="11.500" fill="#5cc86b" opacity=".9" transform="rotate(270)"/><ellipse cx="0" cy="-10" rx="7.500" ry="11.500" fill="#a8d64a" opacity=".9" transform="rotate(315)"/></g></svg>';
  ICO.settings = '<svg viewBox="0 0 60 60"><defs><linearGradient id="stG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9a9aa0"/><stop offset="1" stop-color="#6a6a70"/></linearGradient></defs><rect width="60" height="60" fill="url(#stG)"/><g transform="translate(30 30)"><circle r="17" fill="none" stroke="#dcdce0" stroke-width="7" stroke-dasharray="6.670 6.670"/><circle r="14" fill="#e6e6ea"/><circle r="6.500" fill="#85858a"/></g></svg>';
  ICO.phone = '<svg viewBox="0 0 60 60"><defs><linearGradient id="phG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ae17a"/><stop offset="1" stop-color="#2bb648"/></linearGradient></defs><rect width="60" height="60" fill="url(#phG)"/><g transform="translate(14 14) scale(1.350)" fill="#fff">' + I.handset.replace('<svg viewBox="0 0 24 24" fill="#fff">', '').replace('</svg>', '') + '</g></svg>';
  ICO.safari = '<svg viewBox="0 0 60 60"><defs><linearGradient id="sfBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e3e4ea"/></linearGradient><linearGradient id="sfC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#52b8ff"/><stop offset="1" stop-color="#0a5fe6"/></linearGradient></defs><rect width="60" height="60" fill="url(#sfBg)"/><circle cx="30" cy="30" r="22" fill="url(#sfC)" stroke="#d8dae0" stroke-width="1.500"/><circle cx="30" cy="30" r="19.500" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray=".6 3.080" opacity=".9"/><g transform="rotate(45 30 30)"><path d="M30 13l5.500 17H24.500z" fill="#ff3b30"/><path d="M30 47l5.500-17H24.500z" fill="#fff"/></g></svg>';
  ICO.messages = '<svg viewBox="0 0 60 60"><defs><linearGradient id="msG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ae17a"/><stop offset="1" stop-color="#2bb648"/></linearGradient></defs><rect width="60" height="60" fill="url(#msG)"/><path d="M30 14c-9.400 0-17 6.200-17 13.800 0 4.400 2.500 8.300 6.500 10.800-.5 2.200-1.800 4.300-3.500 6 3.400-.3 6.700-1.700 9-3.500 1.600.4 3.300.6 5 .6 9.400 0 17-6.200 17-13.900C47 20.200 39.400 14 30 14z" fill="#fff"/></svg>';
  ICO.kakao = '<svg viewBox="0 0 60 60"><rect width="60" height="60" fill="#fae100"/><ellipse cx="30" cy="27.500" rx="19.500" ry="15.500" fill="#3b1e1e"/><path d="M19.500 37l-3.500 10 11.500-6.500z" fill="#3b1e1e"/><text x="30" y="31.500" font-size="10.500" font-weight="800" text-anchor="middle" fill="#fae100" font-family="Arial,Helvetica,sans-serif">TALK</text></svg>';

  /* ---------- 공통 요소 ---------- */
  function sbHtml(mode, left) {
    return '<div class="sb ' + mode + '"><span>' + esc(left || C.TIME) + '</span><span class="r">' + I.signal + I.wifi + I.batt + '</span></div>';
  }
  /* 사진 이름이 조금 달라도(대문자 .JPG, .jpeg, .png, .HEIC, .jpg.jpg 처럼 확장자가 두 번) 찾아서 보여줘요 */
  var EXT1 = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG', '.heic', '.HEIC'];
  var EXT2 = ['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG', '.heic', '.HEIC'];
  function variants(src) {
    var m = String(src).match(/^(.*?)(\.[A-Za-z0-9]+)$/);
    if (!m) { return [src]; }
    var out = [src], seen = {};
    seen[src] = 1;
    function add(v) { if (!seen[v]) { seen[v] = 1; out.push(v); } }
    EXT1.forEach(function (e) { add(m[1] + e); });
    EXT2.forEach(function (e) { add(m[1] + m[2] + e); });
    return out;
  }
  /* 가능한 이름을 한꺼번에(동시에) 시도해서 제일 먼저 맞는 걸 쓰고, 찾은 이름은 기억해요 */
  var RES = {}, RESW = {};
  function resolve(src, cb) {
    if (!src) { cb(null); return; }
    if (RES[src] !== undefined) { cb(RES[src] || null); return; }
    var w = RESW[src] || (RESW[src] = []);
    w.push(cb);
    if (w.length > 1) { return; }
    var vs = variants(src), n = vs.length, ok = [];
    function fin() {
      if (RES[src] !== undefined) { return; }
      for (var j = 0; j < n; j++) {
        if (ok[j] === undefined) { return; }
        if (ok[j]) { done(vs[j]); return; }
      }
      done('');
    }
    function done(v) {
      RES[src] = v;
      var list = RESW[src] || [];
      RESW[src] = [];
      list.forEach(function (f) { f(v || null); });
    }
    vs.forEach(function (v, i) {
      var im = new Image();
      im.onload = function () { ok[i] = true; fin(); };
      im.onerror = function () { ok[i] = false; fin(); };
      im.src = v;
    });
  }
  function rs(src) { return (src && RES[src]) ? RES[src] : src; }
  function setBg(div, srcs) {
    (function next(i) {
      if (i >= srcs.length) { return; }
      resolve(srcs[i], function (v) {
        if (v) { div.style.backgroundImage = 'url("' + v + '")'; } else { next(i + 1); }
      });
    })(0);
  }
  /* 시작 화면에 있는 동안 배경과 프로필 사진을 미리 받아둬요 */
  function preload() {
    var list = [C.IMG && C.IMG.lockWallpaper, C.IMG && C.IMG.homeWallpaper];
    (C.TWEETS || []).forEach(function (t) { if (t && t.avatar) { list.push(t.avatar); } });
    list.forEach(function (s) { if (s) { resolve(s, function () {}); } });
  }
  function avHtml(kind, name) {
    if (kind === 'person') { return '<div class="av">' + I.person + '</div>'; }
    return '<div class="av">' + esc(String(name || '?').charAt(0)) + '</div>';
  }
  function imgTag(src, cls) {
    return '<img ' + (cls ? 'class="' + cls + '" ' : '') + 'src="' + esc(rs(src)) + '" alt="" draggable="false">';
  }
  function xav(src, fb) {
    return '<div class="xav' + (fb === 'black' ? ' blk' : '') + '">' + I.person + (src ? '<img data-rm="1" src="' + esc(rs(src)) + '" data-orig="' + esc(src) + '" alt="">' : '') + '</div>';
  }
  function xavDefault() { return '<div class="xav">' + I.person + '</div>'; }

  /* 이미지가 없으면 깨진 아이콘 대신 대체 표시 */
  phone.addEventListener('error', function (e) {
    var t = e.target;
    if (!t || t.tagName !== 'IMG') { return; }
    var orig = t.getAttribute('data-orig') || t.getAttribute('src') || '';
    t.setAttribute('data-orig', orig);
    var vs = variants(orig);
    var i = parseInt(t.getAttribute('data-vi') || '0', 10) + 1;
    if (i < vs.length) { t.setAttribute('data-vi', String(i)); t.src = vs[i]; return; }
    if (t.getAttribute('data-rm')) { t.remove(); return; }
    var d = document.createElement('div');
    d.className = 'ph';
    d.innerHTML = I.photo;
    if (t.parentNode) { t.parentNode.replaceChild(d, t); }
  }, true);

  function alertBox(title, msg) {
    var o = el('<div class="alert-ov"><div class="alert"><div class="tt">' + esc(title) + (msg ? '<p>' + esc(msg) + '</p>' : '') + '</div><button type="button">확인</button></div></div>');
    qs(o, 'button').addEventListener('click', function () { o.remove(); });
    phone.appendChild(o);
  }
  function soon() { alertBox('준비 중'); }

  /* 홈 바 */
  var hb = el('<div id="hb"></div>');
  var hbHit = el('<div id="hbHit"></div>');
  function setHB(mode) { hb.className = mode === 'dark' ? 'dark' : (mode === 'off' ? 'off' : ''); }

  function swipeDetect(elm, cb) {
    var sx = 0, sy = 0, on = false;
    elm.addEventListener('pointerdown', function (e) { sx = e.clientX; sy = e.clientY; on = true; });
    elm.addEventListener('pointercancel', function () { on = false; });
    elm.addEventListener('pointerup', function (e) {
      if (!on) { return; }
      on = false;
      cb(e.clientX - sx, e.clientY - sy);
    });
  }

  /* ---------- 상태 ---------- */
  var L = {};          // 레이어 모음
  var current = 'start';
  var curApp = null;
  var appCleanup = null;

  function clearLayers() { qsa(phone, '.layer').forEach(function (n) { n.remove(); }); }

  /* =========================================================
     시작 화면
     ========================================================= */
  function showStart() {
    current = 'start';
    clearLayers();
    setHB('off');
    var s = el('<section class="layer start fade-in"><div class="card">' +
      '<p class="sub">시작하기 전에 알려주세요</p>' +
      '<label>이름<input id="inName" maxlength="10" autocomplete="off" placeholder="이름"></label>' +
      '<label>인스타그램 아이디<div class="at"><span>@</span><input id="inIg" maxlength="30" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="instagram_id"></div></label>' +
      '<p class="note">※ 본인 또는 가상의 아이디만 입력해주세요.</p>' +
      '<button class="go" id="goBtn" type="button" disabled>시작</button></div></section>');
    phone.appendChild(s);
    (function () {
      var list = variants((C.IMG && C.IMG.startBg) || './start-bg.jpg');
      (function next(i) {
        if (i >= list.length) { return; }
        var im = new Image();
        im.onload = function () {
          s.style.backgroundImage = 'url("' + list[i] + '")';
          s.style.backgroundSize = 'cover';
          s.style.backgroundRepeat = 'no-repeat';
          s.style.backgroundPosition = 'center';
        };
        im.onerror = function () { next(i + 1); };
        im.src = list[i];
      })(0);
    })();
    var inName = qs(s, '#inName'), inIg = qs(s, '#inIg'), go = qs(s, '#goBtn');
    function clean() {
      inIg.value = inIg.value.replace(/^@+/, '').replace(/[^A-Za-z0-9_.]/g, '');
      go.disabled = !(inName.value.trim().length >= 1 && /^[A-Za-z0-9_.]{1,30}$/.test(inIg.value));
    }
    inName.addEventListener('input', clean);
    inIg.addEventListener('input', clean);
    go.addEventListener('click', function () {
      clean();
      if (go.disabled) { return; }
      USER = { name: inName.value.trim().slice(0, 10), igId: inIg.value.slice(0, 30) };
      store.set('ourday.user', JSON.stringify(USER));
      showLock();
    });
    L.start = s;
  }

  /* =========================================================
     잠금화면
     ========================================================= */
  var passBuf = '';
  var passOn = false;
  var LETTERS = { 1: '', 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ', 0: '' };

  function showLock() {
    current = 'lock';
    clearLayers();
    passBuf = ''; passOn = false;
    setHB('light');
    var notifs = C.NOTIFS.map(function (n) {
      return '<div class="notif"><div class="ic">' + ICO.phone + '</div><div class="tx"><b>' + esc(n.name) + '</b><span>' + esc(n.text) + '</span></div><div class="tm">' + esc(n.time) + '</div></div>';
    }).join('');
    var keys = '';
    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function (d) {
      keys += '<button class="key" type="button" data-k="' + d + '"><b>' + d + '</b><small>' + LETTERS[d] + '</small></button>';
    });
    keys += '<div class="key empty"></div><button class="key" type="button" data-k="0"><b>0</b><small></small></button><div class="key empty"></div>';
    var l = el('<section class="layer lock" id="lock">' +
      '<div class="bgimg bg-lock" id="lockBg"></div><div class="shade"></div>' + sbHtml('light', C.CARRIER) +
      '<div class="lk-top">' + I.lock + '<div class="lk-date">' + esc(C.DATE) + '</div><div class="lk-time">' + esc(C.TIME) + '</div></div>' +
      '<div class="notifs">' + notifs + '</div>' +
      '<div class="lk-btn l">' + I.flash + '</div><div class="lk-btn r">' + I.camera + '</div>' +
      '<div class="lk-hint">' + I.chevUp + '위로 쓸어올려 잠금 해제</div><div class="lk-hit" id="lkHit"></div>' +
      '<div class="pass" id="pass"><h2>암호 입력</h2><div class="dots" id="dots"><i></i><i></i><i></i><i></i></div>' +
      '<div class="keys">' + keys + '</div>' +
      '<div class="foot"><span>긴급 상황</span><button type="button" id="passR">취소</button></div></div></section>');
    phone.appendChild(l);
    phone.appendChild(hbHit); phone.appendChild(hb);
    L.lock = l;
    setBg(qs(l, '#lockBg'), [C.IMG.lockWallpaper]);
    qs(l, '#lkHit').addEventListener('click', showPass);
    swipeDetect(l, function (dx, dy) { if (!passOn && dy < -50 && Math.abs(dy) > Math.abs(dx)) { showPass(); } });
    qsa(l, '.key[data-k]').forEach(function (k) {
      k.addEventListener('click', function () { pressKey(k.getAttribute('data-k')); });
    });
    qs(l, '#passR').addEventListener('click', function () {
      if (passBuf.length > 0) { passBuf = passBuf.slice(0, -1); renderDots(); } else { hidePass(); }
    });
  }
  function showPass() {
    if (current !== 'lock') { return; }
    passOn = true; passBuf = ''; renderDots();
    qs(L.lock, '#pass').classList.add('on');
  }
  function hidePass() {
    passOn = false; passBuf = ''; renderDots();
    qs(L.lock, '#pass').classList.remove('on');
  }
  function renderDots() {
    if (!L.lock) { return; }
    qsa(L.lock, '#dots i').forEach(function (d, i) { d.classList.toggle('f', i < passBuf.length); });
    var r = qs(L.lock, '#passR');
    if (r) { r.textContent = passBuf.length > 0 ? '삭제' : '취소'; }
  }
  function pressKey(d) {
    if (!passOn || passBuf.length >= 4) { return; }
    passBuf += d;
    renderDots();
    if (passBuf.length === 4) { setTimeout(checkPass, 130); }
  }
  function checkPass() {
    if (passBuf === String(C.PASSCODE)) { unlock(); return; }
    var dots = qs(L.lock, '#dots');
    dots.classList.remove('shake'); void dots.offsetWidth; dots.classList.add('shake');
    try { if (navigator.vibrate) { navigator.vibrate(200); } } catch (e) {}
    setTimeout(function () { passBuf = ''; renderDots(); dots.classList.remove('shake'); }, 450);
  }
  function unlock() {
    buildHome();
    var lock = L.lock;
    phone.insertBefore(L.home, lock);
    lock.classList.add('fade-out');
    current = 'home';
    setTimeout(function () { lock.remove(); L.lock = null; }, 360);
  }
  document.addEventListener('keydown', function (e) {
    if (current === 'lock' && passOn && /^[0-9]$/.test(e.key)) { pressKey(e.key); }
    if (current === 'lock' && !passOn && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowUp')) { showPass(); }
    if (current === 'lock' && passOn && e.key === 'Backspace') { passBuf = passBuf.slice(0, -1); renderDots(); }
  });

  /* =========================================================
     홈 화면
     ========================================================= */
  function appHtml(id, label, icon, extra) {
    return '<button type="button" class="app" data-app="' + id + '"><div class="ico">' + icon + (extra || '') + '</div>' + (label ? '<span class="lb">' + esc(label) + '</span>' : '') + '</button>';
  }
  function buildHome() {
    var weverse = appHtml('weverse', 'Weverse', ICO.weverseFb, '<img data-rm="1" src="' + esc(C.IMG.weverse) + '" alt="">');
    var h = el('<section class="layer home" id="home">' +
      '<div class="bgimg bg-home" id="homeBg"></div><div class="shade"></div>' + sbHtml('light') +
      '<div class="grid">' +
      appHtml('x', 'X', ICO.x) + appHtml('instagram', 'Instagram', ICO.instagram) + appHtml('youtube', 'YouTube', ICO.youtube) + weverse +
      appHtml('photos', '사진', ICO.photos) + appHtml('settings', '설정', ICO.settings) +
      '</div>' +
      '<div class="dots-pg"><i class="on"></i><i></i></div>' +
      '<div class="pill">' + I.search + '<span>검색</span></div>' +
      '<div class="dock">' + appHtml('phone', '', ICO.phone) + appHtml('safari', '', ICO.safari) + appHtml('messages', '', ICO.messages) + appHtml('kakao', '', ICO.kakao) + '</div></section>');
    L.home = h;
    setBg(qs(h, '#homeBg'), [C.IMG.homeWallpaper, C.IMG.lockWallpaper]);
    qsa(h, '.app').forEach(function (a) {
      a.addEventListener('click', function () { openApp(a.getAttribute('data-app'), qs(a, '.ico')); });
    });
    if (!phone.contains(hb)) { phone.appendChild(hbHit); phone.appendChild(hb); }
    phone.insertBefore(h, phone.firstChild);
    setHB('light');
  }

  /* =========================================================
     앱 열기/닫기
     ========================================================= */
  var IMPL = {};
  function openApp(id, fromEl) {
    if (current !== 'home') { return; }
    if (id === 'youtube') {
      try { window.open(C.YOUTUBE_URL, '_blank', 'noopener'); } catch (e) {}
      return;
    }
    if (!IMPL[id]) { soon(); return; }
    var pr = phone.getBoundingClientRect();
    var layer = el('<section class="layer" id="appLayer"></section>');
    if (fromEl) {
      var r = fromEl.getBoundingClientRect();
      layer.style.transformOrigin = (r.left + r.width / 2 - pr.left) + 'px ' + (r.top + r.height / 2 - pr.top) + 'px';
    }
    phone.insertBefore(layer, hbHit);
    layer.classList.add('opening');
    layer.addEventListener('animationend', function f() { layer.classList.remove('opening'); layer.removeEventListener('animationend', f); });
    current = 'app'; curApp = id;
    L.app = layer;
    appCleanup = IMPL[id](layer) || null;
  }
  function closeApp() {
    if (current !== 'app' || !L.app) { return; }
    var layer = L.app;
    current = 'home';
    if (appCleanup) { try { appCleanup(); } catch (e) {} appCleanup = null; }
    layer.classList.remove('opening');
    layer.classList.add('closing');
    setHB('light');
    setTimeout(function () { layer.remove(); }, 290);
    L.app = null; curApp = null;
  }
  function goHome() {
    if (current === 'app') { closeApp(); }
    else if (current === 'lock') { showPass(); }
  }
  hbHit.addEventListener('click', goHome);
  swipeDetect(hbHit, function (dx, dy) { if (dy < -40) { goHome(); } });
  /* 모든 앱: 맨 아래에서 위로 쓸어올리면 홈으로 */
  (function () {
    var sy = 0, on = false;
    phone.addEventListener('pointerdown', function (e) {
      var r = phone.getBoundingClientRect();
      on = (e.clientY > r.bottom - 60);
      sy = e.clientY;
    });
    phone.addEventListener('pointerup', function (e) {
      if (on && current === 'app' && sy - e.clientY > 45) { goHome(); }
      on = false;
    });
  })();

  /* 오른쪽에서 밀려 들어오는 하위 화면 */
  function pushView(parent, html, cls) {
    var v = el('<div class="view slide-in ' + (cls || '') + '">' + html + '</div>');
    parent.appendChild(v);
    return v;
  }
  function popView(v, after) {
    v.classList.remove('slide-in');
    v.classList.add('slide-out');
    setTimeout(function () { v.remove(); if (after) { after(); } }, 260);
  }

  /* =========================================================
     전화 앱
     ========================================================= */
  IMPL.phone = function (layer) {
    setHB('dark');
    var mode = 'all';
    layer.innerHTML = '<div class="pa" style="position:absolute;inset:0;background:#fff">' + sbHtml('dark') +
      '<div class="scroll"><div class="pa-body"><h1>최근 통화</h1>' +
      '<div class="search">' + I.search + '<span>검색</span>' + I.mic + '</div><div id="calls"></div></div></div>' +
      '<div class="pa-top"><button class="cbtn" type="button">편집</button>' +
      '<div class="seg"><button type="button" data-m="all" class="on">모두</button><button type="button" data-m="missed">부재중 전화</button></div>' +
      '<button class="cbtn" type="button" style="padding:0 13px">' + I.filter + '</button></div>' +
      '<div class="tabbar">' +
      '<div class="tab">' + I.tStar + '즐겨찾기</div>' +
      '<div class="tab on">' + I.tClock + '최근 통화</div>' +
      '<div class="tab">' + I.tPerson + '연락처</div>' +
      '<div class="tab">' + I.tKeys + '키패드</div>' +
      '<div class="tab">' + I.tVoice + '음성 사서함<span class="bd">' + esc(C.VOICEMAIL_BADGE) + '</span></div></div></div>';
    function renderCalls() {
      var html = '';
      C.CALLS.forEach(function (c) {
        if (mode === 'missed' && !c.missed) { return; }
        var nm = c.name + (c.count ? ' (' + c.count + ')' : '');
        var arrow = c.dir === 'out' ? '↗' : '↙';
        html += '<div class="row">' + avHtml(c.avatar, c.name) +
          '<div class="mid"><div class="nm"><b class="' + (c.missed ? 'red' : '') + '">' + esc(nm) + '</b><span>' + arrow + ' ' + esc(c.type) + '</span></div>' +
          '<div class="when">' + esc(c.time) + '</div><div class="info">' + I.info + '</div></div></div>';
      });
      qs(layer, '#calls').innerHTML = html;
    }
    renderCalls();
    qsa(layer, '.seg button').forEach(function (b) {
      b.addEventListener('click', function () {
        mode = b.getAttribute('data-m');
        qsa(layer, '.seg button').forEach(function (x) { x.classList.toggle('on', x === b); });
        renderCalls();
        qs(layer, '.scroll').scrollTop = 0;
      });
    });
  };

  /* =========================================================
     사파리 앱
     ========================================================= */
  IMPL.safari = function (layer) {
    setHB('dark');
    var cards = C.NEWS.map(function (n, i) {
      return '<div class="ncard" data-i="' + i + '"><div class="th">' + imgTag(n.img) + '</div><div class="nt"><div class="pr">' + esc(n.press) + ' · ' + esc(n.time) + '</div><div class="ti">' + esc(n.title) + '</div></div></div>';
    }).join('');
    layer.innerHTML = '<div class="sf" style="position:absolute;inset:0;background:#fff">' + sbHtml('dark') +
      '<div class="sf-main"><div class="glogo"><span style="color:#4285f4">G</span><span style="color:#ea4335">o</span><span style="color:#fbbc05">o</span><span style="color:#4285f4">g</span><span style="color:#34a853">l</span><span style="color:#ea4335">e</span></div>' +
      '<div class="gsearch">' + I.search + '<span>검색 또는 URL 입력</span>' + I.mic + '</div>' +
      '<div class="sec">뉴스</div>' + cards + '</div>' +
      '<div class="addr"><span style="color:#0a84ff">' + I.back + '</span><span class="u">google.com</span><span style="color:#0a84ff">' + I.share + '</span></div></div>';
    qsa(layer, '.ncard').forEach(function (c) {
      c.addEventListener('click', function () { openArticle(layer, C.NEWS[parseInt(c.getAttribute('data-i'), 10)]); });
    });
  };
  function openArticle(layer, n) {
    var paras = n.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    var v = pushView(layer, sbHtml('dark') +
      '<div class="art-top"><button class="back" type="button">' + I.back + '<span>뒤로</span></button><span style="width:50px"></span></div>' +
      '<div class="scroll"><div class="art-body"><div class="pr">' + esc(n.press) + '</div><h2>' + esc(n.title) + '</h2><div class="tm">입력 ' + esc(n.time) + '</div>' +
      '<div class="hero">' + imgTag(n.img) + '</div>' + paras + '</div></div>', 'art');
    qs(v, '.back').addEventListener('click', function () { popView(v); });
  }

  /* =========================================================
     문자 앱
     ========================================================= */
  var msgUnread = null;
  IMPL.messages = function (layer) {
    setHB('dark');
    if (!msgUnread) { msgUnread = {}; C.MESSAGES.forEach(function (m) { msgUnread[m.id] = !!m.unread; }); }
    layer.innerHTML = '<div class="ms" style="position:absolute;inset:0;background:#fff">' + sbHtml('dark') +
      '<div class="scroll"><div class="ms-body"><h1>메시지</h1><div class="search" style="margin-top:2px">' + I.search + '<span>검색</span>' + I.mic + '</div>' +
      '<div class="fpills"><span class="fpill">모든 메시지</span><span class="fpill">알 수 없는 발신자</span></div><div id="threads"></div></div></div>' +
      '<div class="ms-top"><span class="txt">편집</span><span class="txt">' + I.pencil + '</span></div></div>';
    function renderList() {
      var html = '';
      C.MESSAGES.forEach(function (m) {
        var last = m.msgs[m.msgs.length - 1];
        html += '<div class="trow" data-id="' + m.id + '">' + (msgUnread[m.id] ? '<i class="dot"></i>' : '') +
          avHtml(m.kind === 'spam' ? 'person' : 'initial', m.name) +
          '<div class="mid"><div class="l1"><b>' + esc(m.name) + '</b><span>' + esc(m.listTime) + ' ' + I.chevR + '</span></div><div class="pv">' + esc(last.text) + '</div></div></div>';
      });
      qs(layer, '#threads').innerHTML = html;
      qsa(layer, '.trow').forEach(function (r) {
        r.addEventListener('click', function () { openThread(layer, r.getAttribute('data-id'), renderList); });
      });
    }
    renderList();
  };
  function linkify(text) {
    return String(text).split(/(https?:\/\/[^\s]+)/g).map(function (p) {
      return /^https?:\/\//.test(p) ? '<span class="lnk">' + esc(p) + '</span>' : esc(p);
    }).join('');
  }
  function openThread(layer, id, onClose) {
    var m = C.MESSAGES.filter(function (x) { return x.id === id; })[0];
    if (!m) { return; }
    msgUnread[id] = false;
    var spam = m.kind === 'spam';
    var bubs = '', prev = '';
    m.msgs.forEach(function (g, i) {
      bubs += '<div class="bub ' + g.from + (prev && prev !== g.from ? ' gap' : '') + '"><div class="b">' + linkify(g.text) + '</div><span class="tt">' + esc(g.time) + '</span></div>';
      prev = g.from;
    });
    var v = pushView(layer, sbHtml('dark') +
      '<div class="th-top"><button class="back" type="button" style="padding-top:2px">' + I.back + '<span>메시지</span></button>' +
      '<div class="c">' + avHtml(spam ? 'person' : 'initial', m.name) + '<span>' + esc(m.name) + ' ' + '</span></div><span style="margin-top:6px">' + I.video + '</span></div>' +
      '<div class="th-body" id="thb"><div class="divd">' + esc(m.divider) + '</div>' +
      (spam ? '<div class="note-s">문자(SMS) · 발신자 정보 없음</div>' : '') + bubs +
      (m.delivered ? '<div class="deliv">전달됨</div>' : '') + '</div>' +
      '<div class="th-in"><div class="pl">' + I.plus + '</div><div class="bx"><span>문자 메시지</span>' + I.mic + '</div></div>', 'ms');
    v.style.background = '#fff';
    var body = qs(v, '#thb');
    requestAnimationFrame(function () { body.scrollTop = body.scrollHeight; });
    setTimeout(function () { body.scrollTop = body.scrollHeight; }, 320);
    qs(v, '.back').addEventListener('click', function () { popView(v, onClose); });
    qsa(v, '.lnk').forEach(function (a) { a.addEventListener('click', soon); });
    /* 길게 누르거나 왼쪽으로 밀면 보낸 시각 표시 */
    var timer = null, sx = 0, moved = false;
    body.addEventListener('pointerdown', function (e) {
      sx = e.clientX; moved = false;
      timer = setTimeout(function () { body.classList.toggle('reveal'); timer = null; }, 450);
    });
    body.addEventListener('pointermove', function (e) { if (Math.abs(e.clientX - sx) > 8 && timer) { clearTimeout(timer); timer = null; } });
    body.addEventListener('pointerup', function (e) {
      if (timer) { clearTimeout(timer); timer = null; }
      if (e.clientX - sx < -40) { body.classList.toggle('reveal'); }
    });
    body.addEventListener('pointercancel', function () { if (timer) { clearTimeout(timer); timer = null; } });
  }

  /* =========================================================
     사진 앱
     ========================================================= */
  IMPL.photos = function (layer) {
    setHB('dark');
    var tab = 'lib';
    layer.innerHTML = '<div class="pt" style="position:absolute;inset:0;background:#fff"><div id="ptMain"></div>' +
      '<div class="tabbar" id="ptBar">' +
      '<div class="tab on" data-t="lib">' + I.photo.replace('<svg ', '<svg width="26" height="26" ') + '보관함</div>' +
      '<div class="tab" data-t="col">' + '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.800"><rect x="3.500" y="6.500" width="17" height="13" rx="2.500"/><path d="M6.500 4h11"/></svg>' + '컬렉션</div>' +
      '<div class="tab dis" aria-disabled="true">' + I.search.replace('width="18" height="18"', 'width="26" height="26"') + '검색</div></div></div>';
    var main = qs(layer, '#ptMain');
    function render() {
      qsa(layer, '#ptBar .tab[data-t]').forEach(function (t) { t.classList.toggle('on', t.getAttribute('data-t') === tab); });
      if (tab === 'lib') { renderLib(); } else { renderCol(); }
    }
    function gridHtml(list, withDays) {
      return '<div class="pgrid">' + list.map(function (p, i) {
        return '<div class="c" data-i="' + i + '">' + imgTag(p.src) + (withDays ? '<span class="dl">' + p.daysLeft + '일</span>' : '') + '</div>';
      }).join('') + '</div>';
    }
    function renderLib() {
      main.innerHTML = sbHtml('dark') + '<div class="pt-top"><div class="r1" style="display:flex;justify-content:space-between;align-items:center"><h1>보관함</h1><div class="rt"><span class="pbtn dis" aria-disabled="true">선택</span><span class="pbtn dis" aria-disabled="true">' + I.dots3 + '</span></div></div>' +
        '<div class="pt-seg dis" aria-disabled="true"><span>연도</span><span>월</span><span>일</span><span class="on">모든 사진</span></div></div>' +
        '<div class="pt-scroll">' + gridHtml(C.GALLERY, false) + '<div class="pcount">사진 ' + C.GALLERY.length + '장</div></div>';
      var sc = qs(main, '.pt-scroll');
      requestAnimationFrame(function () { sc.scrollTop = sc.scrollHeight; });
      qsa(main, '.pgrid .c').forEach(function (c) {
        c.addEventListener('click', function () { openViewer(C.GALLERY, parseInt(c.getAttribute('data-i'), 10), 'lib'); });
      });
    }
    function renderCol() {
      var dis = ' dis" aria-disabled="true';
      main.innerHTML = sbHtml('dark') + '<div class="pt-top"><div class="r1" style="display:flex;justify-content:space-between;align-items:center"><h1>컬렉션</h1></div></div>' +
        '<div class="pt-scroll" style="padding-top:calc(var(--top) + 54px)"><div class="col-body" style="padding-top:0">' +
        '<h2 class="' + dis + '">사람 및 반려동물</h2><div class="cards' + dis + '"><div class="cd">사람</div><div class="cd">반려동물</div></div>' +
        '<h2 class="' + dis + '">내 앨범</h2><div class="cards' + dis + '"><div class="cd">즐겨찾기</div><div class="cd">최근 항목</div></div>' +
        '<h2 class="' + dis + '">미디어 유형</h2><div class="lst' + dis + '"><div class="li">비디오</div><div class="li">셀피</div><div class="li">라이브 포토</div><div class="li">스크린샷</div></div>' +
        '<h2>유틸리티</h2><div class="lst">' +
        '<div class="li' + dis + '">가져오기</div><div class="li' + dis + '">숨겨진 항목</div>' +
        '<button class="li" type="button" id="goTrash">' + I.trash + '<span>최근 삭제된 항목</span><span class="n">' + C.TRASH.length + ' ' + I.chevR + '</span></button></div></div></div>';
      qs(main, '#goTrash').addEventListener('click', openTrash);
    }
    qsa(layer, '#ptBar .tab[data-t]').forEach(function (t) {
      t.addEventListener('click', function () { tab = t.getAttribute('data-t'); render(); });
    });
    function openTrash() {
      var v = pushView(layer, sbHtml('dark') +
        '<div class="tr-top"><button class="back" type="button">' + I.back + '<span>컬렉션</span></button><div class="tt">최근 삭제된 항목</div><span class="pbtn dis" aria-disabled="true">선택</span></div>' +
        '<div class="scroll"><div class="trash-note">사진과 비디오는 30일 동안 여기에 보관된 후 영구적으로 삭제됩니다.</div>' + gridHtml(C.TRASH, true) + '<div style="height:150px"></div></div>' +
        '<div class="tr-bar"><span class="dis" aria-disabled="true">모두 삭제</span><span class="rr dis" aria-disabled="true">모두 복구</span></div>', 'pt');
      v.style.background = '#fff';
      qs(v, '.back').addEventListener('click', function () { popView(v); });
      qsa(v, '.pgrid .c').forEach(function (c) {
        c.addEventListener('click', function () { openViewer(C.TRASH, parseInt(c.getAttribute('data-i'), 10), 'trash'); });
      });
    }
    function openViewer(list, idx, kind) {
      var i = idx;
      var v = el('<div class="viewer"></div>');
      layer.appendChild(v);
      setHB('light');
      function draw() {
        var p = list[i];
        var tools = kind === 'trash'
          ? '<div class="vb"><span class="dd dis" aria-disabled="true">삭제</span><span class="rr dis" aria-disabled="true">복구</span></div>'
          : '<div class="vb pic"><span class="dis" aria-disabled="true">' + I.share + '</span><span class="dis" aria-disabled="true">' + I.heart + '</span><span class="dis" aria-disabled="true">' + I.info.replace(/#0a84ff/g, '#fff') + '</span><span class="dis" aria-disabled="true">' + I.trash.replace('class="ic"', 'width="24" height="24"') + '</span></div>';
        v.innerHTML = sbHtml('light') + '<div class="vt"><button class="back" type="button">' + I.back + '<span>뒤로</span></button>' +
          '<div class="dt"><b>' + esc(p.date) + '</b><span>' + esc(p.time) + '</span></div><span class="sp"></span></div>' +
          '<div class="vi">' + imgTag(p.src) + '</div>' + tools;
        qs(v, '.back').addEventListener('click', function () { v.remove(); setHB('dark'); });
      }
      draw();
      swipeDetect(v, function (dx, dy) {
        if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) {
          var n = i + (dx < 0 ? 1 : -1);
          if (n >= 0 && n < list.length) { i = n; draw(); }
        }
      });
    }
    render();
  };

  /* =========================================================
     X(트위터) 앱
     ========================================================= */
  var liked = {};
  var xCtx = null;
  var dmArrived = parseInt(store.get('ourday.dm') || '0', 10) || 0;
  var dmStarted = false;
  var dmRead = {};
  try { dmRead = JSON.parse(store.get('ourday.dmRead') || '{}') || {}; } catch (e) { dmRead = {}; }

  function rich(s) {
    return String(s).split(/(\{IG\}|\{NAME\})/).map(function (p) {
      if (p === '{IG}') { return '<span class="mention">@' + esc(USER.igId) + '</span>'; }
      if (p === '{NAME}') { return esc(USER.name); }
      return esc(p);
    }).join('');
  }
  function unreadCount() {
    var n = 0;
    for (var i = 0; i < dmArrived && i < C.DMS.length; i++) { if (!dmRead[C.DMS[i].id]) { n++; } }
    return n;
  }
  function likeCount(t) { return t.like + (liked[t.id] ? 1 : 0); }
  function actsHtml(t, opts) {
    opts = opts || {};
    var rtAttr = t.hasQuotes ? ' data-lp="1"' : '';
    var rtCount = t.hasQuotes ? '<span class="rtn" data-act="quotes">' + compact(t.rt) + '</span>' : '<span>' + compact(t.rt) + '</span>';
    return '<div class="acts"><span class="a">' + I.reply + '</span>' +
      '<button type="button"' + rtAttr + '>' + I.repost + rtCount + '</button>' +
      '<button type="button" class="lk' + (liked[t.id] ? ' on' : '') + '" data-act="like" data-id="' + t.id + '">' + I.like + '<span>' + compact(likeCount(t)) + '</span></button>' +
      '<span class="a">' + I.views + '<span>' + compact(t.views) + '</span></span>' +
      '<span class="a">' + I.bm + '</span><span class="a">' + I.shr + '</span></div>';
  }
  function tweetHtml(t) {
    var media = '';
    if (t.card) {
      media += '<div class="twirl"><div class="cd"><span class="lab">twirl twirl</span>' + esc(t.card) + '</div><div class="src">출처: twirl-twirl.invalid</div></div>';
    }
    if (t.images) {
      media += '<div class="imgs two">' + t.images.map(function (s) { return '<div class="im">' + imgTag(s) + '</div>'; }).join('') + '</div>';
    }
    return '<article class="tw" data-id="' + t.id + '">' + xav(t.avatar, t.avatarFallback) +
      '<div class="mn"><div class="hd"><b>' + esc(t.name) + '</b><span>@' + esc(t.handle) + ' · ' + esc(t.age) + '</span><span class="xl">' + I.xlogo(17) + '</span></div>' +
      '<div class="tx">' + rich(t.text) + '</div>' + media + actsHtml(t) + '</div></article>';
  }
  function updateBadge() {
    if (!xCtx) { return; }
    var b = qs(xCtx.layer, '#dmBadge');
    var n = unreadCount();
    if (b) { b.textContent = n; b.style.display = n > 0 ? 'flex' : 'none'; }
  }
  function bannerShow(d) {
    var b = el('<div class="banner"><div class="bi" style="color:#fff">' + I.xlogo(22) + '</div><div><b>새 쪽지</b><span>' + esc(d.name) + ': ' + rich(d.msgs[0]) + '</span></div></div>');
    phone.appendChild(b);
    setTimeout(function () { b.classList.add('on'); }, 30);
    setTimeout(function () { b.classList.remove('on'); }, 3200);
    setTimeout(function () { b.remove(); }, 3800);
  }
  function startDMs() {
    if (dmStarted || dmArrived >= C.DMS.length) { return; }
    dmStarted = true;
    var first = dmArrived === 0;
    function step() {
      dmArrived++;
      store.set('ourday.dm', String(dmArrived));
      if (first && dmArrived === 1) { bannerShow(C.DMS[0]); }
      updateBadge();
      if (xCtx && xCtx.tab === 'dm' && xCtx.renderDM) { xCtx.renderDM(); }
      if (dmArrived < C.DMS.length) { setTimeout(step, C.DM_INTERVAL); }
    }
    setTimeout(step, C.DM_FIRST_DELAY);
  }

  IMPL.x = function (layer) {
    setHB('dark');
    var ctx = { layer: layer, tab: 'home' };
    xCtx = ctx;
    layer.innerHTML = '<div class="xa" style="position:absolute;inset:0;background:#fff"><div id="xBase"></div></div>';
    var base = qs(layer, '#xBase');
    var root = qs(layer, '.xa');

    function barHtml() {
      var n = unreadCount();
      return '<div class="x-bar">' +
        '<button type="button" data-go="home">' + (ctx.tab === 'home' ? I.homeOn : I.home) + '<i class="rd"></i></button>' +
        '<button type="button" data-soon="1">' + I.search.replace('width="18" height="18"', 'width="26" height="26"') + '</button>' +
        '<button type="button" data-soon="1"><span class="pf">' + I.person.replace('<svg ', '<svg width="20" height="20" ').replace('fill="currentColor"', 'fill="#fff"') + '</span></button>' +
        '<button type="button" data-soon="1">' + I.bell + '</button>' +
        '<button type="button" data-go="dm">' + (ctx.tab === 'dm' ? I.mailOn : I.mail) + '<span class="bg2" id="dmBadge" style="display:' + (n > 0 ? 'flex' : 'none') + '">' + n + '</span></button></div>';
    }
    function bindBar() {
      qsa(base, '[data-soon]').forEach(function (b) { b.addEventListener('click', soon); });
      qsa(base, '[data-go]').forEach(function (b) {
        b.addEventListener('click', function () {
          var g = b.getAttribute('data-go');
          if (g === ctx.tab) { return; }
          ctx.tab = g; render();
        });
      });
    }
    function renderHome() {
      base.innerHTML = sbHtml('dark') +
        '<div class="x-top"><div class="t1"><span class="me">' + I.person.replace('<svg ', '<svg width="20" height="20" ').replace('fill="currentColor"', 'fill="#fff"') + '</span>' + I.xlogo(24) + '</div>' +
        '<div class="t2"><button type="button" class="on">추천</button><button type="button">팔로잉</button></div></div>' +
        '<div class="x-feed">' + C.TWEETS.map(tweetHtml).join('') + '</div>' +
        '<button class="fab" type="button" data-soon="1">' + I.plus.replace('width="20" height="20"', 'width="26" height="26"') + '</button>' + barHtml();
      bindBar();
      bindFeed(base);
    }
    function dmRows() {
      var rows = '';
      for (var i = dmArrived - 1; i >= 0; i--) {
        if (i >= C.DMS.length) { continue; }
        var d = C.DMS[i];
        var unread = !dmRead[d.id];
        var last = d.msgs[d.msgs.length - 1];
        rows += '<div class="dmr' + (unread ? ' unread' : '') + '" data-id="' + d.id + '">' + xavDefault() +
          '<div class="mn"><div class="l1"><b>' + esc(d.name) + '</b><span class="tm">' + esc(d.time) + '</span></div><div class="l2"><div class="pv">' + rich(last) + '</div>' + (unread ? '<i class="ud"></i>' : '') + '</div></div></div>';
      }
      return rows || '<div class="dm-empty">아직 쪽지가 없어요</div>';
    }
    function renderDM() {
      base.innerHTML = sbHtml('dark') +
        '<div class="dm-top"><div class="t1"><span class="me2">' + I.person.replace('<svg ', '<svg width="22" height="22" ').replace('fill="currentColor"', 'fill="#fff"') + '</span><b>Chat</b><span class="flt">전체' + I.chevDn + '</span></div><div class="sb2">' + I.search + '<span>검색</span></div></div>' +
        '<div class="dm-list">' + dmRows() + '</div>' +
        '<button class="fab" type="button" data-soon="1">' + I.chatPlus + '</button>' + barHtml();
      bindBar();
      qsa(base, '.dmr').forEach(function (r) {
        r.addEventListener('click', function () { openDM(r.getAttribute('data-id')); });
      });
    }
    ctx.renderDM = renderDM;
    function render() { if (ctx.tab === 'home') { renderHome(); } else { renderDM(); } }

    /* 피드/상세에서 쓰는 공통 동작: 마음, 트윗 열기, 재게시 숫자 */
    function bindFeed(scope) {
      qsa(scope, '.tw').forEach(function (a) {
        a.addEventListener('click', function (e) {
          if (e.target.closest('[data-act]') || e.target.closest('[data-lp]') || a.__lp) { a.__lp = false; return; }
          openDetail(a.getAttribute('data-id'));
        });
      });
      bindActs(scope);
    }
    function bindActs(scope) {
      qsa(scope, '[data-act="like"]').forEach(function (b) {
        b.addEventListener('click', function (e) {
          e.stopPropagation();
          var id = b.getAttribute('data-id');
          liked[id] = !liked[id];
          var t = C.TWEETS.filter(function (x) { return x.id === id; })[0];
          qsa(layer, '[data-act="like"][data-id="' + id + '"]').forEach(function (x) {
            x.classList.toggle('on', !!liked[id]);
            var sp = qs(x, 'span'); if (sp) { sp.textContent = compact(likeCount(t)); }
          });
        });
      });
      qsa(scope, '[data-act="quotes"]').forEach(function (s) {
        s.addEventListener('click', function (e) { e.stopPropagation(); openActivity(); });
      });
      qsa(scope, '[data-lp]').forEach(function (b) {
        var timer = null;
        b.addEventListener('pointerdown', function () {
          timer = setTimeout(function () { timer = null; var art = b.closest('.tw'); if (art) { art.__lp = true; } openActivity(); }, 500);
        });
        ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) {
          b.addEventListener(ev, function () { if (timer) { clearTimeout(timer); timer = null; } });
        });
      });
    }

    /* 트윗 상세 */
    function openDetail(id) {
      var t = C.TWEETS.filter(function (x) { return x.id === id; })[0];
      if (!t) { return; }
      var media = '';
      if (t.card) { media += '<div class="twirl"><div class="cd"><span class="lab">twirl twirl</span>' + esc(t.card) + '</div><div class="src">출처: twirl-twirl.invalid</div></div>'; }
      if (t.images) { media += '<div class="imgs two">' + t.images.map(function (s) { return '<div class="im">' + imgTag(s) + '</div>'; }).join('') + '</div>'; }
      var replies = (t.replies || []).map(function (r) {
        return '<div class="rp">' + xavDefault() + '<div><div class="hd"><b>' + esc(r.name) + '</b><span>@' + esc(r.handle) + ' · ' + esc(r.age) + '</span></div><div class="tx">' + esc(r.text) + '</div></div></div>';
      }).join('');
      var rtN = t.hasQuotes ? '<span class="rtn" data-act="quotes">' + comma(t.rt) + '</span>' : '<span>' + comma(t.rt) + '</span>';
      var v = pushView(root, sbHtml('dark') +
        '<div class="dtop"><button type="button" class="back" style="color:#0f1419">' + I.back + '</button><span class="tt">게시물</span></div>' +
        '<div class="scroll"><div class="dbody"><div class="au">' + xav(t.avatar, t.avatarFallback) + '<div><b>' + esc(t.name) + '</b><span>@' + esc(t.handle) + '</span></div></div>' +
        '<div class="big">' + rich(t.text) + '</div>' + media +
        '<div class="meta">' + esc(t.detailTime) + ' · 2026. 10. 24. · 조회 <b>' + t.views + '</b>회</div>' +
        '<div class="acts"><span class="a" style="opacity:.35">' + I.reply + '</span><button type="button" class="gr"' + (t.hasQuotes ? ' data-lp="1"' : '') + '>' + I.repost + rtN + '</button>' +
        '<button type="button" class="lk' + (liked[t.id] ? ' on' : '') + '" data-act="like" data-id="' + t.id + '">' + I.like + '<span>' + comma(likeCount(t)) + '</span></button>' +
        '<span class="a">' + I.bm + '<span>' + comma(t.bm) + '</span></span><span class="a">' + I.shr + '</span></div>' +
        '<div class="lockbox">' + I.lockSm + '<span>일부 계정만 답글을 쓸 수 있습니다.</span></div>' + replies + '</div></div>', 'xa');
      v.style.background = '#fff';
      qs(v, '.back').addEventListener('click', function () { popView(v); });
      /* 상세 화면의 마음은 숫자에 쉼표 표기 */
      qsa(v, '[data-act="like"]').forEach(function (b) {
        b.addEventListener('click', function (e) {
          e.stopPropagation();
          var tid = b.getAttribute('data-id');
          liked[tid] = !liked[tid];
          b.classList.toggle('on', !!liked[tid]);
          qs(b, 'span').textContent = comma(likeCount(t));
          qsa(base, '[data-act="like"][data-id="' + tid + '"]').forEach(function (x) {
            x.classList.toggle('on', !!liked[tid]); qs(x, 'span').textContent = compact(likeCount(t));
          });
        });
      });
      qsa(v, '[data-act="quotes"]').forEach(function (s) { s.addEventListener('click', function (e) { e.stopPropagation(); openActivity(); }); });
      qsa(v, '[data-lp]').forEach(function (b) {
        var timer = null;
        b.addEventListener('pointerdown', function () { timer = setTimeout(function () { timer = null; openActivity(); }, 500); });
        ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { b.addEventListener(ev, function () { if (timer) { clearTimeout(timer); timer = null; } }); });
      });
    }

    /* 게시 활동 (인용 / 재게시) */
    function openActivity() {
      if (qs(root, '.view.act')) { return; }
      var t6 = C.TWEETS.filter(function (x) { return x.hasQuotes; })[0];
      var mini = (t6.images || []).map(function (s) { return '<div>' + imgTag(s) + '</div>'; }).join('');
      function quotesHtml() {
        return C.QUOTES.map(function (q) {
          return '<div class="qt">' + xavDefault() + '<div style="flex:1;min-width:0"><div class="hd" style="display:flex;gap:4px;font-size:15px"><b>' + esc(q.name) + '</b><span style="color:#536471">@' + esc(q.handle) + ' · ' + esc(q.age) + '</span></div>' +
            '<div class="tx" style="font-size:15px;line-height:20px;margin-top:2px">' + esc(q.text) + '</div>' +
            '<div class="emb"><div class="ee"><div class="hd"><b>' + esc(t6.name) + '</b><span>@' + esc(t6.handle) + ' · ' + esc(t6.age) + '</span></div><p>' + rich(t6.text) + '</p><div class="mini">' + mini + '</div></div></div>' +
            '<div class="acts"><span class="a">' + I.reply + '</span><span class="a">' + I.repost + '</span><span class="a">' + I.like + '</span><span class="a">' + I.views + '</span><span class="a">' + I.bm + '</span><span class="a">' + I.shr + '</span></div></div></div>';
        }).join('');
      }
      function repostsHtml() {
        return C.REPOSTS.map(function (r) {
          return '<div class="rep-row">' + xavDefault() + '<div><b>' + esc(r.name) + '</b><span>@' + esc(r.handle) + '</span></div></div>';
        }).join('');
      }
      var v = pushView(root, sbHtml('dark') +
        '<div class="act-top"><div class="t1"><button type="button" class="bk back" style="color:#0f1419;padding:0">' + I.back + '</button>게시 활동<span class="so">' + I.sort + '</span></div>' +
        '<div class="t2"><button type="button" data-t="q" class="on">' + I.pencil + '인용</button><button type="button" data-t="r">재게시</button></div></div>' +
        '<div class="act-list" id="actList">' + quotesHtml() + '</div>', 'xa act');
      v.style.background = '#fff';
      qs(v, '.bk').addEventListener('click', function () { popView(v); });
      qsa(v, '.t2 button').forEach(function (b) {
        b.addEventListener('click', function () {
          qsa(v, '.t2 button').forEach(function (x) { x.classList.toggle('on', x === b); });
          qs(v, '#actList').innerHTML = b.getAttribute('data-t') === 'q' ? quotesHtml() : repostsHtml();
          qs(v, '#actList').scrollTop = 0;
        });
      });
    }

    /* 쪽지 대화 */
    function openDM(id) {
      var d = C.DMS.filter(function (x) { return x.id === id; })[0];
      if (!d) { return; }
      dmRead[id] = true;
      store.set('ourday.dmRead', JSON.stringify(dmRead));
      var bub = d.msgs.map(function (m) {
        return '<div class="dbub"><div class="b">' + rich(m) + '</div></div>';
      }).join('');
      var v = pushView(root, sbHtml('dark') +
        '<div class="dtop"><button type="button" class="back" style="color:#0f1419">' + I.back + '</button><span class="tt" style="font-size:17px">' + esc(d.name) + '</span></div>' +
        '<div class="dmv-body"><div class="dmv-info">' + xavDefault() + '<b>' + esc(d.name) + '</b><span>@' + esc(d.handle) + '</span>' +
        '<small>2026년 10월 가입 · 팔로워 ' + d.followers + '명 · 팔로잉 ' + d.following + '명 · 게시물 ' + d.posts + '개</small></div>' +
        bub + '<div class="dbub"><div class="t">' + esc(d.time) + '</div></div></div>' +
        '<div class="dm-in"><span class="pl">' + I.plus.replace('width="20" height="20"', 'width="26" height="26"') + '</span><div><span>쪽지</span>' + I.mic.replace('width="18" height="18"', 'width="24" height="24"') + '</div></div>', 'xa');
      v.style.background = '#fff';
      qs(v, '.back').addEventListener('click', function () {
        popView(v, function () { updateBadge(); if (ctx.tab === 'dm') { renderDM(); } });
      });
      updateBadge();
    }

    render();
    startDMs();
    return function () { xCtx = null; };
  };

  /* =========================================================
     시작
     ========================================================= */
  function boot() {
    phone.classList.toggle('standalone', isStandalone());
    handleReset();
    preload();
    if (loadUser()) { showLock(); } else { showStart(); }
    try {
      if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
        navigator.serviceWorker.register('./sw.js').catch(function () {});
      }
    } catch (e) {}
  }
  boot();
})();
