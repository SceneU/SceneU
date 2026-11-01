/* =========================================================
   다국어 (한국어 / English / 日本語 / 中文简体)
   - 한국어가 기본이에요. 다른 언어는 lang-en.js / lang-ja.js / lang-zh.js 의 번역표로 바뀌어요.
   - 주소 끝에 ?lang=en 처럼 붙이면 바로 바뀌고, 설정 앱 / 시작 화면에서도 고를 수 있어요.
   - ?missing=1 을 같이 붙이면 번역이 안 된 한글을 콘솔(console.log)에 보여줘요.
   ========================================================= */
(function () {
  var LANGS = ['ko', 'en', 'ja', 'zh'];
  var LABEL = { ko: '한국어', en: 'English', ja: '日本語', zh: '简体中文' };
  var HTML_LANG = { ko: 'ko', en: 'en', ja: 'ja', zh: 'zh-Hans' };
  var lang = 'ko';
  try { lang = localStorage.getItem('ourday.lang') || 'ko'; } catch (e) {}
  var qm = /[?&]lang=(ko|en|ja|zh)\b/.exec(location.search);
  if (qm) { lang = qm[1]; try { localStorage.setItem('ourday.lang', lang); } catch (e) {} }
  var pack = (window.I18N_PACKS || {})[lang] || null;
  if (!pack) { lang = 'ko'; }
  var HAN = /[가-힣ㄱ-ㅎㅏ-ㅣ]/;
  var SKIP_KEYS = { SEARCH_KEYWORD: 1, PASSCODE: 1, YOUTUBE_URL: 1, IMG: 1, id: 1, handle: 1, avatar: 1, src: 1, kind: 1, type: 1, dir: 1 };
  var NAME_SET = { '신정환': 1, '최영재': 1, '이경민': 1, '한지훈': 1, '김도훈': 1, '한진': 1, '류인아': 1, '엄마': 1, '아빠': 1 };
  var WD = ['일', '월', '화', '수', '목', '금', '토'];
  var missing = {};
  var wantMissing = /[?&]missing=1/.test(location.search);

  var I = window.I18N = {
    lang: lang, pack: pack, labels: LABEL, order: LANGS,
    isKo: lang === 'ko',
    logic: pack && pack.logic ? pack.logic : null,
    set: function (l) {
      try { localStorage.setItem('ourday.lang', l); } catch (e) {}
      location.href = location.pathname + (l === 'ko' ? '' : '') ;
    }
  };
  document.documentElement.setAttribute('lang', HTML_LANG[lang] || 'ko');
  if (lang === 'ko') {
    I.t = function (s) { return s; };
    I.localizeConfig = function () {};
    I.logic = null;
    return;
  }

  var dict = pack.dict || {}, F = pack.fmt || {};
  var nameList = (pack.names || []).slice().sort(function (a, b) { return b[0].length - a[0].length; });
  function names(s) {
    for (var i = 0; i < nameList.length; i++) { if (s.indexOf(nameList[i][0]) >= 0) { s = s.split(nameList[i][0]).join(nameList[i][1]); } }
    return s;
  }
  function wdIdx(c) { return WD.indexOf(c); }
  var RULES = [
    [/^(\d+)분 전$/, function (m) { return F.ago(+m[1], 'm'); }],
    [/^(\d+)시간 전$/, function (m) { return F.ago(+m[1], 'h'); }],
    [/^(\d+)일 전$/, function (m) { return F.ago(+m[1], 'd'); }],
    [/^(\d+)주 전$/, function (m) { return F.ago(+m[1], 'w'); }],
    [/^(\d+)개월 전$/, function (m) { return F.ago(+m[1], 'mo'); }],
    [/^(\d+)년 전$/, function (m) { return F.ago(+m[1], 'y'); }],
    [/^(\d+)분$/, function (m) { return F.short(+m[1], 'm'); }],
    [/^(\d+)시간$/, function (m) { return F.short(+m[1], 'h'); }],
    [/^(\d+)주$/, function (m) { return F.short(+m[1], 'w'); }],
    [/^(\d{4})년 (\d+)월 (\d+)일 ([일월화수목금토])요일 (\d+:\d+)$/, function (m) { return F.ymdwt(+m[1], +m[2], +m[3], wdIdx(m[4]), m[5]); }],
    [/^(\d{4})년 (\d+)월 (\d+)일 ([일월화수목금토])요일$/, function (m) { return F.ymdw(+m[1], +m[2], +m[3], wdIdx(m[4])); }],
    [/^(\d+)월 (\d+)일 ([일월화수목금토])요일$/, function (m) { return F.mdw(+m[1], +m[2], wdIdx(m[3])); }],
    [/^(\d{4})년 (\d+)월 (\d+)일$/, function (m) { return F.ymd(+m[1], +m[2], +m[3]); }],
    [/^(\d+)월 (\d+)일$/, function (m) { return F.md(+m[1], +m[2]); }],
    [/^(오전|오후) (\d+):(\d+)$/, function (m) { return F.time(m[1] === '오전', +m[2], m[3]); }],
    [/^(오늘|어제) (\d+:\d+)$/, function (m) { return (m[1] === '오늘' ? F.today : F.yesterday) + ' ' + m[2]; }],
    [/^문자 메시지 · (.+)$/, function (m) { return F.sms + ' · ' + t(m[1]); }],
    [/^(\d+)번 엔딩$/, function (m) { return F.ending(+m[1]); }],
    [/^새 쪽지 (\d+)개$/, function (m) { return F.newMsgs(+m[1]); }],
    [/^(\S+)님 외 (\d+)명이 회원님을 팔로우했습니다$/, function (m) { return F.followedBy(m[1], +m[2]); }],
    [/^(\S+)님이 팔로우를 요청했습니다\.?$/, function (m) { return F.followReq(m[1]); }],
    [/^사진 (\d+)장$/, function (m) { return F.photosN(+m[1]); }],
    [/^([\d.]+)만$/, function (m) { return F.man(m[1]); }],
    [/^([\d.,]+)천$/, function (m) { return F.cheon(m[1]); }],
    [/^좋아요 ([\d,]+)개$/, function (m) { return F.likesN(m[1]); }],
    [/^댓글 ([\d,]+)개 모두 보기$/, function (m) { return F.viewComments(m[1]); }],
    [/^댓글 ([\d,]+)개$/, function (m) { return F.commentsN(m[1]); }],
    [/^친구 (\d+)$/, function (m) { return F.friendsN(+m[1]); }],
    [/^([↙↗↖↘]) (.+)$/, function (m, tt) { return m[1] + ' ' + tt(m[2]); }],
    [/^([A-Za-z0-9_.]+): (.+)$/, function (m, tt) { return m[1] + ': ' + tt(m[2]); }],
    [/^([A-Za-z0-9_.]+)(님)$/, function (m) { return F.nim ? F.nim(m[1]) : m[1]; }],
    [/^님 외 (\d+)명이 회원님을 팔로우했습니다$/, function (m) { return F.followedBy('\u0001', +m[1]).replace('\u0001', '').replace(/^\s+/, ''); }],
    [/^(.+?)님( 계정 지우면 더 이상해 보여요)$/, function (m) { var d = dict['{N}님' + m[2].replace(/^\s*/, ' ').replace(/^ /, '')]; if (d === undefined) { d = dict['{N}님 계정 지우면 더 이상해 보여요']; } return d === undefined ? null : d.split('{N}').join(m[1]); }],
    [/^요청 (\d+)개$/, function (m) { return F.reqN ? F.reqN(+m[1]) : null; }],
    [/^입력 (.+)$/, function (m, tt) { return tt('입력') + ' ' + m[1]; }],
    [/^(\d+:\d+) · (\d{4})\. (\d+)\. (\d+)\. · 조회$/, function (m, tt) { return m[1] + ' \u00b7 ' + F.ymd(+m[2], +m[3], +m[4]) + ' \u00b7 ' + tt('조회'); }],
    [/^(.+?) · (.+)$/, function (m, tt) { var a = tt(m[1]), b = tt(m[2]); return (HAN.test(a) || HAN.test(b)) ? null : a + ' \u00b7 ' + b; }],
    [/^([가-힣])$/, function (m) { return F.initial ? F.initial(m[1]) : null; }]
  ];
  if (pack.rules) { RULES = pack.rules.concat(RULES); }
  function dyn(s) {
    for (var i = 0; i < RULES.length; i++) {
      var m = RULES[i][0].exec(s);
      if (m) { var r = RULES[i][1](m, t); if (r !== undefined && r !== null) { return r; } }
    }
    return null;
  }
  function t(s) {
    if (typeof s !== 'string' || !HAN.test(s)) { return s; }
    var h = dict[s]; if (h !== undefined) { return h; }
    var tr = s.replace(/^\s+|\s+$/g, '');
    if (tr && tr !== s) {
      h = dict[tr]; if (h === undefined) { h = dyn(tr); }
      if (h !== undefined && h !== null) { return s.replace(tr, function () { return h; }); }
    } else {
      h = dyn(s); if (h !== null) { return h; }
    }
    var n = names(s);
    if (wantMissing && HAN.test(n) && !missing[s]) { missing[s] = 1; try { console.log('[i18n missing]', JSON.stringify(s)); } catch (e) {} }
    return n;
  }
  I.t = t;
  /* 트위터 닉네임(name)은 한글 그대로 둬요: TWEETS / QUOTES / replies 안의 name */
  var KEEP_NAME_IN = { TWEETS: 1, QUOTES: 1, replies: 1 };
  function walk(o, key, keep) {
    if (typeof o === 'string') { return (SKIP_KEYS[key] || NAME_SET[o] || (keep && key === 'name')) ? o : t(o); }
    if (Array.isArray(o)) { for (var i = 0; i < o.length; i++) { o[i] = walk(o[i], key, keep || !!KEEP_NAME_IN[key]); } return o; }
    if (o && typeof o === 'object') { for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k)) { o[k] = walk(o[k], k, keep || !!KEEP_NAME_IN[key]); } } }
    return o;
  }
  I.localizeConfig = function (C) { try { walk(C, ''); } catch (e) { try { console.log('[i18n]', e); } catch (e2) {} } };

  /* ---- 화면에 그려진 글자를 번역 (정적인 화면 글자 / 속성) ---- */
  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  function fixNode(n) {
    if (n.nodeType === 3) {
      var v = n.nodeValue;
      if (v && HAN.test(v)) { var r = t(v); if (r !== v) { n.nodeValue = r; } }
      return;
    }
    if (n.nodeType !== 1) { return; }
    var tag = n.nodeName;
    if (tag === 'SCRIPT' || tag === 'STYLE') { return; }
    for (var i = 0; i < ATTRS.length; i++) {
      var a = n.getAttribute && n.getAttribute(ATTRS[i]);
      if (a && HAN.test(a)) { var ra = t(a); if (ra !== a) { n.setAttribute(ATTRS[i], ra); } }
    }
    for (var c = n.firstChild; c; c = c.nextSibling) { fixNode(c); }
  }
  I.fixDom = fixNode;
  function start() {
    if (!document.body) { return; }
    fixNode(document.body);
    new MutationObserver(function (list) {
      for (var i = 0; i < list.length; i++) {
        var r = list[i];
        if (r.type === 'childList') { for (var j = 0; j < r.addedNodes.length; j++) { fixNode(r.addedNodes[j]); } }
        else if (r.type === 'characterData') { fixNode(r.target); }
        else if (r.type === 'attributes') { fixNode(r.target); }
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  }
  if (document.body) { start(); } else { document.addEventListener('DOMContentLoaded', start); }
})();
