/* =========================================================
   우리의 하루 - 설정 파일
   여기 값만 고치면 화면에 반영돼요.
   ========================================================= */
window.CONFIG = {
  /* ---------- 기본 ---------- */
  PASSCODE: "1107",            // 잠금 해제 비밀번호 (4자리)
  TIME: "8:00",                // 폰 안의 시간 (24시간제, 항상 고정)
  DATE: "10월 24일 토요일",       // 잠금화면 날짜
  CARRIER: "SKT",              // 잠금화면 왼쪽 위 글자
  YOUTUBE_URL: "https://youtu.be/bMgH4IQ8wMI?si=aPlpe7zaxmm6CFCP",

  /* ---------- 이미지 경로 (같은 이름으로 덮어쓰면 교체돼요) ---------- */
  IMG: {
    lockWallpaper: "./lock-wallpaper.jpg",
    homeWallpaper: "./home-wallpaper.jpg",
    weverse: "./weverse.png"
  },

  /* ---------- 잠금화면 부재중 알림 (위가 최근) ---------- */
  NOTIFS: [
    { name: "신정환", text: "부재중 전화 25건", time: "방금" },
    { name: "최영재", text: "부재중 전화 7건", time: "1분 전" },
    { name: "류인아", text: "부재중 전화 17건", time: "2분 전" }
  ],

  /* ---------- 전화 앱: 최근 통화 (위가 최근, 24시간제) ----------
     dir: "in" 수신 ↙ / "out" 발신 ↗
     missed: true 이면 이름이 빨간색
     avatar: "initial" 이니셜 / "person" 기본 사람 아이콘 */
  CALLS: [
    { name: "신정환", count: 25, type: "부재중 전화", dir: "in",  missed: true,  time: "07:59", avatar: "initial" },
    { name: "최영재", count: 7,  type: "부재중 전화", dir: "in",  missed: true,  time: "07:58", avatar: "initial" },
    { name: "류인아", count: 17, type: "부재중 전화", dir: "in",  missed: true,  time: "07:57", avatar: "initial" },
    { name: "발신번호 표시제한", type: "부재중 전화", dir: "in",  missed: true,  time: "07:41", avatar: "person" },
    { name: "류인아", type: "휴대전화",             dir: "out", missed: false, time: "07:35", avatar: "initial" },
    { name: "류인아", type: "FaceTime 영상 통화",   dir: "out", missed: false, time: "07:30", avatar: "initial" },
    { name: "발신번호 표시제한", type: "부재중 전화", dir: "in",  missed: true,  time: "06:12", avatar: "person" },
    { name: "류인아", type: "휴대전화",             dir: "in",  missed: false, time: "05:50", avatar: "initial" },
    { name: "류인아", type: "FaceTime 영상 통화",   dir: "in",  missed: false, time: "05:45", avatar: "initial" },
    { name: "발신번호 표시제한", type: "부재중 전화", dir: "in",  missed: true,  time: "02:03", avatar: "person" },
    { name: "류인아", type: "휴대전화",             dir: "out", missed: false, time: "어제",  avatar: "initial" },
    { name: "발신번호 표시제한", type: "부재중 전화", dir: "in",  missed: true,  time: "어제",  avatar: "person" },
    { name: "류인아", type: "FaceTime 영상 통화",   dir: "out", missed: false, time: "어제",  avatar: "initial" }
  ],
  VOICEMAIL_BADGE: 12,

  /* ---------- 사파리 뉴스 (모두 가상의 인물/언론사) ---------- */
  NEWS: [
    {
      press: "데일리스타", time: "32분 전", img: "./news1.jpg",
      title: "[단독] 신유 여자친구 비공개 계정 유출…팬들이 찾아냈다",
      body: [
        "가수 신유의 여자친구로 추측되는 A씨의 비공개 SNS 계정이 일부 팬들에 의해 알려지면서 열애설이 불거졌다.",
        "24일 온라인 커뮤니티에는 A씨의 비공개 계정에서 가져온 것으로 보이는 게시물 캡처가 잇따라 올라왔다. 해당 게시물에는 신유와 닮은 인물의 뒷모습과 함께 \"오늘도 고마워\"라는 글이 적혀 있었다.",
        "팬들은 게시물 속 배경과 소품이 신유의 최근 개인 방송 장면과 일치한다고 주장하고 있다. 다만 사실 여부는 확인되지 않았다."
      ]
    },
    {
      press: "연예톡", time: "1시간 전", img: "./news2.jpg",
      title: "신유 여친 비공개 계정 털렸다…게시물 캡처 SNS 확산",
      body: [
        "신유의 열애설 관련 게시물이 SNS를 중심으로 빠르게 퍼지고 있다.",
        "최초 유포자는 A씨의 비공개 계정 팔로워 목록과 게시물을 공개한 것으로 알려졌다. 이후 온라인에서는 \"신유가 좋아요를 누른 흔적이 있다\", \"같은 장소에서 찍은 사진이 있다\" 등의 글이 이어졌다.",
        "일부 네티즌은 무분별한 계정 추적과 사생활 유출에 대한 우려를 나타내기도 했다."
      ]
    },
    {
      press: "뉴스웨이브", time: "2시간 전", img: "./news3.jpg",
      title: "\"비공개 계정에 신유 사진 있었다\"…팬들 추적에 온라인 발칵",
      body: [
        "신유와 A씨의 사진이 담긴 것으로 보이는 게시물이 공개되며 온라인이 술렁이고 있다.",
        "유출된 게시물에는 두 사람이 카페로 보이는 공간에서 나란히 앉아 있는 모습이 담겼다. 팬 커뮤니티에서는 충격과 응원이 엇갈리는 반응이 나왔다.",
        "한편 관련 글과 캡처가 빠르게 삭제되고 있지만, 이미 여러 곳으로 퍼진 상태다."
      ]
    }
  ],

  /* ---------- 문자 앱 ----------
     kind: "contact" 연락처 / "spam" 받은 문자만 있는 번호
     unread: true 이면 파란 점
     msgs: from "them"(받은 문자, 왼쪽 회색) / "me"(보낸 문자, 오른쪽 초록)
     링크처럼 눌러도 이동하지 않을 주소는 {link:"..."} 형태 대신 본문에 http://example.invalid/.. 로 적어요 */
  MESSAGES: [
    { id: "m1", name: "15xx-0000", kind: "spam", unread: true, listTime: "07:12",
      divider: "문자 메시지 · 오늘 07:12",
      msgs: [{ from: "them", time: "07:12", text: "[가상택배] 고객님 택배가 오늘 배송 예정입니다. 주소지 확인이 필요하니 아래 링크에서 확인해주세요. http://example.invalid/a1b2" }] },
    { id: "m2", name: "070-0000-0000", kind: "spam", unread: true, listTime: "05:48",
      divider: "문자 메시지 · 오늘 05:48",
      msgs: [{ from: "them", time: "05:48", text: "[Web발신] (광고) 무료 상담 신청하고 최대 300만원 혜택 받으세요. 지금 바로 신청 http://example.invalid/c3d4 수신거부 080-000-0000" }] },
    { id: "m3", name: "050-0000-0000", kind: "spam", unread: true, listTime: "어제",
      divider: "문자 메시지 · 어제 22:10",
      msgs: [{ from: "them", time: "22:10", text: "[국제발신] 해외 결제 승인 안내. 본인이 아니면 아래 번호로 즉시 연락하세요. 02-0000-0000" }] },
    { id: "m4", name: "가상카드", kind: "spam", unread: false, listTime: "10월 19일",
      divider: "문자 메시지 · 10월 19일 21:03",
      msgs: [{ from: "them", time: "21:03", text: "[Web발신] 가상카드 승인 49,800원 일시불 10/19 21:03 ㈜가상마트" }] },
    { id: "m5", name: "엄마", kind: "contact", unread: false, listTime: "10월 1일",
      divider: "2026년 10월 1일 목요일 18:40",
      msgs: [
        { from: "them", time: "18:40", text: "밥은 먹었니" },
        { from: "me",   time: "18:41", text: "먹었어 엄마는?" },
        { from: "them", time: "18:42", text: "엄마도 먹었지" },
        { from: "them", time: "18:42", text: "요즘 아침저녁으로 쌀쌀하던데 옷 따뜻하게 입고 다녀라" },
        { from: "me",   time: "18:44", text: "알았어~" },
        { from: "them", time: "18:45", text: "주말에 시간 되면 집에 한번 와 반찬 해놨어" },
        { from: "me",   time: "18:46", text: "이번 주는 좀 바쁜데 다음 주에 갈게" },
        { from: "them", time: "18:48", text: "그래 몸 챙기고 사랑한다 우리 새끼" }
      ] },
    { id: "m6", name: "010-0000-0000", kind: "spam", unread: true, listTime: "9월 27일",
      divider: "문자 메시지 · 9월 27일 14:22",
      msgs: [{ from: "them", time: "14:22", text: "안녕하세요 대출 필요하시면 연락주세요" }] },
    { id: "m7", name: "070-0001-0000", kind: "spam", unread: false, listTime: "9월 3일",
      divider: "문자 메시지 · 9월 3일 11:05",
      msgs: [{ from: "them", time: "11:05", text: "[Web발신] (광고) 이벤트 당첨 안내 지금 확인하세요 http://example.invalid/e5f6" }] },
    { id: "m8", name: "신정환", kind: "contact", unread: false, listTime: "8월 14일",
      divider: "2026년 8월 14일 금요일 23:12", delivered: true,
      msgs: [
        { from: "them", time: "23:12", text: "자기야" },
        { from: "me",   time: "23:13", text: "왜 카톡 안 하고 갑자기 문자야?" },
        { from: "them", time: "23:13", text: "그냥" },
        { from: "me",   time: "23:14", text: "이거 보이스피싱이지" },
        { from: "them", time: "23:14", text: "아니 나야" },
        { from: "me",   time: "23:15", text: "그럼 전화해봐" }
      ] },
    { id: "m9", name: "070-0002-0000", kind: "spam", unread: false, listTime: "7월 30일",
      divider: "문자 메시지 · 7월 30일 09:30",
      msgs: [{ from: "them", time: "09:30", text: "[Web발신] (광고) 여름 시즌 할인 가상몰 최대 70% 세일 수신거부 080-000-0000" }] }
  ],

  /* ---------- 사진 앱 ----------
     GALLERY: ./photo01.jpg ~ photo08.jpg
     TRASH:   ./trash01.jpg ~ trash15.jpg
     오래된 사진이 위, 최신이 맨 아래. date/time 은 전체 화면에서 위에 표시돼요. */
  GALLERY: [
    { src: "./photo01.jpg", date: "10월 12일", time: "18:20" },
    { src: "./photo02.jpg", date: "10월 14일", time: "13:05" },
    { src: "./photo03.jpg", date: "10월 16일", time: "20:41" },
    { src: "./photo04.jpg", date: "10월 18일", time: "15:32" },
    { src: "./photo05.jpg", date: "10월 20일", time: "19:08" },
    { src: "./photo06.jpg", date: "10월 21일", time: "12:47" },
    { src: "./photo07.jpg", date: "10월 22일", time: "22:15" },
    { src: "./photo08.jpg", date: "10월 23일", time: "21:14" }
  ],
  TRASH: [
    { src: "./trash01.jpg", date: "9월 20일", time: "16:02", daysLeft: 29 },
    { src: "./trash02.jpg", date: "9월 22일", time: "17:40", daysLeft: 27 },
    { src: "./trash03.jpg", date: "9월 23일", time: "21:11", daysLeft: 26 },
    { src: "./trash04.jpg", date: "9월 25일", time: "09:58", daysLeft: 24 },
    { src: "./trash05.jpg", date: "9월 26일", time: "14:23", daysLeft: 23 },
    { src: "./trash06.jpg", date: "9월 28일", time: "19:36", daysLeft: 21 },
    { src: "./trash07.jpg", date: "9월 29일", time: "11:09", daysLeft: 20 },
    { src: "./trash08.jpg", date: "10월 1일", time: "18:44", daysLeft: 18 },
    { src: "./trash09.jpg", date: "10월 3일", time: "13:27", daysLeft: 16 },
    { src: "./trash10.jpg", date: "10월 4일", time: "20:15", daysLeft: 15 },
    { src: "./trash11.jpg", date: "10월 7일", time: "10:52", daysLeft: 12 },
    { src: "./trash12.jpg", date: "10월 10일", time: "17:31", daysLeft: 9 },
    { src: "./trash13.jpg", date: "10월 12일", time: "21:03", daysLeft: 7 },
    { src: "./trash14.jpg", date: "10월 15일", time: "15:48", daysLeft: 4 },
    { src: "./trash15.jpg", date: "10월 17일", time: "08:19", daysLeft: 2 }
  ],

  /* ---------- X(트위터) ----------
     {IG}  -> 시작 화면에서 입력한 인스타그램 아이디(@포함)
     {NAME} -> 시작 화면에서 입력한 이름
     card: 스핀 느낌의 둥근 글귀 카드 (가상 라벨)
     avatarFallback: 프로필 사진 파일이 없을 때 "black"이면 검정 원 */
  TWEETS: [
    { id: "t1", name: "pol.....", handle: "poleee", age: "9분", detailTime: "07:51",
      avatar: "./avatar1.jpg",
      text: "아니 나 지금 안 믿겨 상태임 나에게 무슨 일이 일어나고 있나요...",
      rt: 538, like: 764, views: 31200, bm: 21 },
    { id: "t2", name: "파일", handle: "file117", age: "17분", detailTime: "07:43",
      avatar: "./avatar2.jpg",
      text: "아 존나... 모르겠다 근데 알 사람들은 다 알긴 했잖아 이렇게 될 줄 몰랐던거지.. 아 그래도 비계 턴 사람 잘못이겠지....? 그냥 잠수탈래",
      card: "아니 파일아 이게 뭔 일임 나 지금 피자배달부 됨",
      rt: 1126, like: 1482, views: 58900, bm: 33 },
    { id: "t3", name: "ㅍㄷ..", handle: "pdd__", age: "24분", detailTime: "07:36",
      avatar: "./avatar3.jpg",
      text: "closed\n지금까지 하나도 안 감사했습니다 ㅋㅋ 시발",
      rt: 1203, like: 1811, views: 64300, bm: 40 },
    { id: "t4", name: "U..", handle: "u24_7", age: "31분", detailTime: "07:29",
      avatar: "./avatar4.jpg",
      text: "이건 뭐 다 죽자는 거죠",
      rt: 1087, like: 1356, views: 52700, bm: 27 },
    { id: "t5", name: "folder", handle: "folder_1107", age: "38분", detailTime: "07:22",
      avatar: "./avatar5.jpg",
      text: "그래도 아직 소속사 입장 안 나왔잖아 중립 박자",
      replies: [{ name: "유", handle: "yu_uo", age: "20분", text: "뭘 중립이야ㅋㅋ 눈은 장식임?" }],
      rt: 1044, like: 1291, views: 47100, bm: 29 },
    { id: "t6", name: ".", handle: "dot_8431", age: "42분", detailTime: "07:18",
      avatar: "./avatar6.jpg", avatarFallback: "black",
      text: "비계로 연애질 할 때는 좋았지 ㅋㅋ 그래도 아이돌인데 털릴 걸 각오하고 올렸어야지 증거 남길 만큼 그렇게 사랑했어? 스케줄 끝나고도 여친 만나러 가시느라 바빳나봐 여친 비계 {IG}",
      images: ["./tweet6-1.jpg", "./tweet6-2.jpg"],
      rt: 1372, like: 2015, views: 91500, bm: 58, hasQuotes: true }
  ],

  /* 6번째 트윗의 인용 (게시 활동 > 인용) */
  QUOTES: [
    { name: "zz", handle: "zzzz7878", age: "18분", text: "아이돌이 비계에 증거를 이렇게 남겨놨다고? ㅋㅋㅋ 프로의식 어디 갔냐" },
    { name: "ㅋㅋ", handle: "fiehfejh",  age: "21분", text: "팬들 돈으로 데이트했냐 싶음 ㅋㅋ 스케줄 뛰는 사이에 여친이랑 놀았네" },
    { name: "ㅇㅇ(싱태:정신병)",   handle: "oioi_",    age: "25분", text: "이제야 놀라는 척 하는 거 웃기다" },
    { name: "유우..", handle: "Yuuu__",     age: "29분", text: "이게 뭐냐 진짜....정신아프긔윤..." },
    { name: "eui",   handle: "eui_7",    age: "34분", text: "팬들한텐 연애 안 한다는 듯이 굴더니 뒤에서 이러고 있었네 ㅋㅋ 실망이다" }
  ],
  REPOSTS: [
    { name: ".", handle: "dfowejrdoer" }, { name: ".", handle: "dfowejrdoer" },
    { name: "ee", handle: "fnkejf" },           { name: "ee", handle: "fnkejf" },
    { name: "st", handle: "fjeijwfk" },         { name: "st", handle: "fjeijwfk" },
    { name: "아이고", handle: "aego77777" },        { name: "아이고", handle: "aego77777" }
  ],

  /* 검색(탐색) 화면의 실시간 트렌드. 위에서부터 이 순서로 보여요. */
  TRENDS: ["ㅇㅇ연애", "여친비계", "ㅇㅇ여친", "비밀연애"],

  /* 알림 탭: 새 계정(알계)들이 팔로우했다는 알림. more는 "외 N명" 숫자(0이면 한 명). 위가 최근. */
  NOTIS: [
    { who: ["zz", "ee", "user_3047182"], more: 14, time: "방금" },
    { who: ["ㅇㅇ"], more: 0, time: "1분" },
    { who: ["다죽자", "eui"], more: 8, time: "1분" },
    { who: ["z"], more: 0, time: "2분" },
    { who: [".", "11", "ㅗ"], more: 21, time: "2분" },
    { who: ["88"], more: 0, time: "3분" },
    { who: ["mon", "ㅈㄹ"], more: 5, time: "3분" },
    { who: ["eidkww"], more: 0, time: "4분" },
    { who: ["e", "user_1048326", "r_7720914"], more: 17, time: "5분" },
    { who: ["user_5503817"], more: 0, time: "5분" },
    { who: ["n_2087154", "user39174026"], more: 11, time: "6분" },
    { who: ["user_8841029"], more: 0, time: "7분" },
    { who: ["p_4619375", "user_9052718", "d_1830462"], more: 9, time: "8분" },
    { who: ["user24680135"], more: 0, time: "9분" },
    { who: ["s_7305921", "user_6617240"], more: 19, time: "11분" },
    { who: ["user_3158064"], more: 0, time: "12분" },
    { who: ["c_9284017", "user58203916", "b_4471028"], more: 6, time: "14분" },
    { who: ["user_119634"], more: 0, time: "16분" }
  ],

  /* 쪽지(DM): 새로 만든 익명 계정(알계)처럼 보이게. 일반 쪽지 목록에 들어와요. */
  DMS: [
    { id: "d1",  name: "user48201937", handle: "user48201937", time: "07:52", followers: 0, following: 2, posts: 0,
      msgs: ["{NAME}님 맞죠?", "여친이 트위터 계정도 있으시네 ㅋㅋ"] },
    { id: "d2",  name: "a8472910",     handle: "a8472910",     time: "07:53", followers: 1, following: 3, posts: 0,
      msgs: ["비계 털린 거 본인 맞음? 대답 좀 해봐요"] },
    { id: "d3",  name: "user_3047182", handle: "user_3047182", time: "07:53", followers: 0, following: 1, posts: 0,
      msgs: ["아이돌 여친이면 이 정도 각오는 했어야죠 ㅋㅋ"] },
    { id: "d4",  name: "k29481736",    handle: "k29481736",    time: "07:54", followers: 2, following: 4, posts: 0,
      msgs: ["사진 다 봤는데 생각보다 평범하네요 ㅋㅋ"] },
    { id: "d5",  name: "user90183746", handle: "user90183746", time: "07:55", followers: 0, following: 2, posts: 0,
      msgs: ["계정 지운다고 끝날 일 아닌 거 알죠?"] },
    { id: "d6",  name: "x_5029381",    handle: "x_5029381",    time: "07:55", followers: 3, following: 5, posts: 0,
      msgs: ["팬들 속여놓고 연애질하니까 좋았어요?"] },
    { id: "d7",  name: "user71920384", handle: "user71920384", time: "07:56", followers: 0, following: 2, posts: 0,
      msgs: ["입장문 안 쓰세요? 본인도 한마디 해야죠"] },
    { id: "d8",  name: "m4820175",     handle: "m4820175",     time: "07:57", followers: 1, following: 1, posts: 0,
      msgs: ["얼마나 잘났길래 그런 선택을 했는지 궁금하네요"] },
    { id: "d9",  name: "user6603921",  handle: "user6603921",  time: "07:58", followers: 0, following: 3, posts: 0,
      msgs: ["캡처 이미 다 돌고 있어요 ㅋㅋ"] },
    { id: "d10", name: "z9028374",     handle: "z9028374",     time: "07:59", followers: 2, following: 2, posts: 0,
      msgs: ["이제 와서 비공개로 돌려봤자 늦었죠"] }
  ],
  DM_FIRST_DELAY: 2000,   // 처음 들어가고 첫 쪽지가 오기까지 (ms)
  DM_INTERVAL: 3000       // 이후 쪽지 도착 간격 (ms)
};
