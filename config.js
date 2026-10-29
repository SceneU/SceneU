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

  /* 검색창에 직접 입력할 때, 이 글자가 들어 있으면 결과가 나와요(다른 검색어는 "결과 없음") */
  SEARCH_KEYWORD: "신유",
  /* 검색(탐색) 화면의 실시간 트렌드. 위에서부터 이 순서로 보여요. */
  TRENDS: ["신유연애", "여친비계", "신유여친", "비밀연애"],


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
   
     /* ---------- 카카오톡 ----------
     FRIENDS: 친구 목록(가나다순으로 자동 정렬돼요)
     ROOMS: 친구 이름 -> 대화방. msgs 안에 { d:"2026-10-23", t:"08:10", from:"them"(상대) 또는 "me"(나), text:"내용" } 를 시간 순서대로 적어요.
            unread: 안 읽은 개수(채팅 목록의 빨간 숫자). msgs를 비워 두면 채팅 목록에 안 보이고, 친구를 눌러 들어가면 빈 대화방이 열려요. */
  KAKAO: {
    FRIENDS: ["신정환", "최영재", "이경민", "한지훈", "김도훈", "한진", "류인아", "엄마", "아빠"],
    ROOMS: {
      "엄마": { unread: 1, msgs: [
        { d: "2023-11-12", t: "19:20", from: "them", text: "밥은 먹었니" },
        { d: "2023-11-12", t: "19:21", from: "me",   text: "먹었어 엄마는?" },
        { d: "2023-11-12", t: "19:22", from: "them", text: "엄마도 먹었지 김장 때 올 수 있지?" },
        { d: "2023-11-12", t: "19:25", from: "me",   text: "응 그날 갈게" },
        { d: "2023-11-12", t: "19:26", from: "them", text: "그래 오면 김치 챙겨줄게" },
        { d: "2024-02-10", t: "08:40", from: "them", text: "설에 몇 시쯤 도착하니" },
        { d: "2024-02-10", t: "08:52", from: "me",   text: "점심 전에 갈 것 같아" },
        { d: "2024-02-10", t: "08:53", from: "them", text: "전 부쳐놓을게 천천히 와" },
        { d: "2024-05-08", t: "18:30", from: "me",   text: "엄마 아빠 어버이날 고마워요 사랑해요" },
        { d: "2024-05-08", t: "18:34", from: "them", text: "아이고 우리 새끼 엄마도 사랑한다" },
        { d: "2024-08-03", t: "17:05", from: "them", text: "엄마가 반찬 해서 문 앞에 두고 간다" },
        { d: "2024-08-03", t: "17:40", from: "me",   text: "방금 봤어 잘 먹을게" },
        { d: "2024-08-03", t: "17:41", from: "them", text: "냉장고에 바로 넣어" },
        { d: "2025-01-20", t: "09:15", from: "them", text: "요즘 감기 유행이라던데 몸은 괜찮니" },
        { d: "2025-01-20", t: "09:30", from: "me",   text: "괜찮아 걱정 마" },
        { d: "2025-01-20", t: "09:31", from: "them", text: "약 챙겨 먹고 따뜻하게 자" },
        { d: "2025-06-08", t: "11:20", from: "them", text: "이번 주말에 올 수 있어? 아빠가 삼겹살 구워준대" },
        { d: "2025-06-08", t: "11:45", from: "me",   text: "토요일에 갈게" },
        { d: "2025-11-02", t: "14:10", from: "them", text: "김장 올해도 할 거야" },
        { d: "2025-11-02", t: "14:30", from: "me",   text: "날짜 정해지면 말해줘" },
        { d: "2026-03-15", t: "10:05", from: "them", text: "날 풀렸다고 얇게 입고 다니지 마라" },
        { d: "2026-03-15", t: "10:12", from: "me",   text: "알았어~" },
        { d: "2026-08-22", t: "16:50", from: "them", text: "반찬 현관 앞에 두고 간다" },
        { d: "2026-08-22", t: "17:20", from: "me",   text: "고마워 엄마 잘 먹을게" },
        { d: "2026-08-22", t: "17:21", from: "them", text: "밥 거르지 말고" },
        { d: "2026-10-23", t: "08:10", from: "them", text: "요즘 아침저녁으로 쌀쌀하다 옷 따뜻하게 입고 다녀" },
        { d: "2026-10-23", t: "08:11", from: "them", text: "주말에 시간 되면 집에 한번 와" }
      ] },
      "아빠": { unread: 0, msgs: [
        { d: "2023-12-02", t: "21:10", from: "them", text: "어디냐" },
        { d: "2023-12-02", t: "21:12", from: "me",   text: "집이에요" },
        { d: "2023-12-02", t: "21:13", from: "them", text: "그래 조심히 다녀라" },
        { d: "2024-03-17", t: "15:20", from: "them", text: "차 점검 받았냐" },
        { d: "2024-03-17", t: "15:40", from: "me",   text: "아직요 이번 주에 받을게요" },
        { d: "2024-03-17", t: "15:41", from: "them", text: "엔진오일 갈 때 됐다" },
        { d: "2024-09-14", t: "11:05", from: "them", text: "추석 전에 시간 되면 와라" },
        { d: "2024-09-14", t: "11:30", from: "me",   text: "네 갈게요" },
        { d: "2025-05-08", t: "19:00", from: "them", text: "어버이날 뭐 필요 없다 몸이나 챙겨라" },
        { d: "2025-05-08", t: "19:20", from: "me",   text: "그래도 용돈 보냈어요" },
        { d: "2025-05-08", t: "19:22", from: "them", text: "고맙다" },
        { d: "2025-12-24", t: "07:30", from: "them", text: "눈 온다 길 미끄러우니 운전 조심해라" },
        { d: "2026-06-10", t: "13:00", from: "them", text: "아빠가 호박 따서 엄마 편에 보냈다" },
        { d: "2026-06-10", t: "13:25", from: "me",   text: "잘 먹을게요" },
        { d: "2026-10-12", t: "20:30", from: "them", text: "밥은 먹었냐" },
        { d: "2026-10-12", t: "20:40", from: "me",   text: "먹었어요" },
        { d: "2026-10-12", t: "20:41", from: "them", text: "그래 들어가라" }
      ] },
          "신정환": { unread: 7, msgs: [
        { d: "2023-11-03", t: "08:28", from: "them", text: "일어났어?" },
        { d: "2023-11-03", t: "08:31", from: "me", text: "ㅇ우웅" },
        { d: "2023-11-03", t: "08:31", from: "them", text: "눈 뜨고" },
        { d: "2023-11-03", t: "08:32", from: "me", text: "떵ㅇ서" },
        { d: "2023-11-03", t: "08:32", from: "them", text: "감고 보내지 말고" },
        { d: "2023-11-03", t: "08:33", from: "me", text: "어떻게 알았어?" },
        { d: "2023-11-03", t: "08:34", from: "them", text: "내가 너에 대해 모르는 게 어딨어" },
        { d: "2023-11-03", t: "08:34", from: "them", text: "준비하고 연락해" },
        { d: "2023-11-03", t: "08:35", from: "me", text: "우웅" },
        { d: "2023-11-03", t: "08:35", from: "them", text: "말고" },
        { d: "2023-11-03", t: "08:36", from: "me", text: "웅" },
        { d: "2023-11-03", t: "08:36", from: "them", text: "아 말고" },
        { d: "2023-11-03", t: "08:37", from: "me", text: "ㅋㅋ" },
        { d: "2023-11-03", t: "08:37", from: "them", text: "안 해" },
        { d: "2023-11-03", t: "08:38", from: "me", text: "아 왜" },
        { d: "2023-11-03", t: "08:38", from: "them", text: "사랑해" },
        { d: "2023-11-03", t: "08:39", from: "me", text: "나도 사랑해" },
        { d: "2023-12-09", t: "18:40", from: "me", text: "보고싶당" },
        { d: "2023-12-09", t: "18:41", from: "them", text: "왜 그래? 나 뭐 잘못했어?" },
        { d: "2023-12-09", t: "18:42", from: "me", text: "먼저 보고싶다고 해줘도 난리야" },
        { d: "2023-12-09", t: "18:43", from: "them", text: "아니 평소에 안 그러니까 그러지" },
        { d: "2023-12-09", t: "18:44", from: "me", text: "때려치자" },
        { d: "2023-12-09", t: "18:45", from: "them", text: "아 미안해" },
        { d: "2023-12-09", t: "18:45", from: "them", text: "나 지금 촬영 끝났어 갈게" },
        { d: "2023-12-09", t: "18:46", from: "me", text: "니가 보고싶단 이야기는 아니었는데" },
        { d: "2023-12-09", t: "18:46", from: "them", text: "?" },
        { d: "2023-12-09", t: "18:47", from: "me", text: "오늘 우리 방어회 먹기로 했잖아 너가 사 올 방어회가 보고싶당" },
        { d: "2023-12-09", t: "18:48", from: "them", text: "하 나 집에 갈래" },
        { d: "2023-12-09", t: "18:49", from: "me", text: "죄송합니다 정환님 제 마음 아시죠" },
        { d: "2023-12-09", t: "18:50", from: "them", text: "모르겠는데요" },
        { d: "2024-02-17", t: "14:10", from: "them", text: "배고파" },
        { d: "2024-02-17", t: "14:11", from: "them", text: "너 보고싶어서 밥이 안 넘어가" },
        { d: "2024-02-17", t: "14:13", from: "me", text: "확인 결과 최영재가 너 방금 치즈버거 2개에 아이스크림이랑 컵라면이랑 해치웠다던데" },
        { d: "2024-02-17", t: "14:14", from: "them", text: "최영재부터 해치울게" },
        { d: "2024-02-17", t: "14:14", from: "them", text: "근데 둘이 왜 연락하는데?" },
        { d: "2024-02-17", t: "14:15", from: "me", text: "알아서 좋을 거 없어" },
        { d: "2024-02-17", t: "14:15", from: "them", text: "아니 해명해" },
        { d: "2024-02-17", t: "14:16", from: "me", text: "영재 괴롭히면 죽어" },
        { d: "2024-02-17", t: "14:16", from: "them", text: "와 이제 나보다 최영재다?" },
        { d: "2024-02-17", t: "14:17", from: "me", text: "그러는 너는 나보다 이경민이잖아" },
        { d: "2024-02-17", t: "14:17", from: "them", text: "그건 또 무슨 소리야" },
        { d: "2024-02-17", t: "14:18", from: "me", text: "너 나랑 먹기로 했던 치폴레 이경민이랑 먼저 먹었잖아" },
        { d: "2024-02-17", t: "14:19", from: "them", text: "아니 그건 경민이가 사 와서" },
        { d: "2024-02-17", t: "14:19", from: "them", text: "근데 생각해 보니까 억울하네" },
        { d: "2024-02-17", t: "14:19", from: "them", text: "나 왜 또 해명해?" },
        { d: "2024-02-17", t: "14:20", from: "me", text: "넌 내 바보니까 ㅋㅋ" },
        { d: "2024-02-17", t: "14:20", from: "them", text: "맨날 이런 식으로 넘어가지" },
        { d: "2024-05-11", t: "18:05", from: "them", text: "나 촬영 늦게 끝날 거 같은데" },
        { d: "2024-05-11", t: "18:05", from: "them", text: "먼저 밥 먹어" },
        { d: "2024-05-11", t: "18:05", from: "them", text: "오늘 못 만날지도 몰라" },
        { d: "2024-05-11", t: "18:08", from: "me", text: "많이 늦게 끝나?" },
        { d: "2024-05-11", t: "18:09", from: "me", text: "좀만 기다려보고 많이 늦을 거 같으면 먼저 먹을게" },
        { d: "2024-05-11", t: "19:29", from: "me", text: "많이 늦나 보네" },
        { d: "2024-05-11", t: "19:54", from: "me", text: "뭐야? 난 시킨 적 없는 엽떡이 배달 왔어" },
        { d: "2024-05-11", t: "20:54", from: "me", text: "잘 먹었습니다 사랑해요 일 열시미 하세요" },
        { d: "2024-05-11", t: "21:57", from: "me", text: "나 먼저 잔당 오늘도 수고했으요" },
        { d: "2024-05-11", t: "23:57", from: "them", text: "너무 바빠서 이제 봤다" },
        { d: "2024-05-11", t: "23:58", from: "them", text: "잘 먹었어?" },
        { d: "2024-05-11", t: "23:59", from: "them", text: "그래도 혼자 먹었을 생각하니까 좀 그랬는데 너무 잘 먹어 보여서 ㅋㅋㅋㅋ" },
        { d: "2024-05-12", t: "00:29", from: "them", text: "나 숙소 들어왔어" },
        { d: "2024-05-12", t: "00:29", from: "them", text: "잘 자" },
        { d: "2024-05-12", t: "00:29", from: "them", text: "사랑해" },
        { d: "2024-08-23", t: "19:30", from: "them", text: "자기야" },
        { d: "2024-08-23", t: "19:30", from: "them", text: "나 오늘도 딜레이야ㅜㅜ" },
        { d: "2024-08-23", t: "19:32", from: "me", text: "어쩔 수 없지 괜찮아용" },
        { d: "2024-08-23", t: "19:33", from: "them", text: "나는 안 괜찮은데" },
        { d: "2024-08-23", t: "19:34", from: "me", text: "안 괜찮으면 어쩔 거야" },
        { d: "2024-08-23", t: "19:35", from: "them", text: "확 다 때려치고 갈까?" },
        { d: "2024-08-23", t: "19:36", from: "me", text: "아 나 백수 남친은 고민을 좀 해 봐야 하는데" },
        { d: "2024-08-23", t: "19:37", from: "them", text: "너무해" },
        { d: "2024-08-23", t: "19:38", from: "me", text: "너 너무 많이 먹어" },
        { d: "2024-08-23", t: "19:38", from: "them", text: "너도잖아" },
        { d: "2024-08-23", t: "19:39", from: "me", text: "그니까 내 벌이만으로 돼지 둘을 어떻게 먹여살려" },
        { d: "2024-08-23", t: "19:40", from: "them", text: "알겠어 오빠 열심히 돈 벌어올게" },
        { d: "2024-08-23", t: "19:40", from: "me", text: "웅 오빠" },
        { d: "2024-08-23", t: "19:41", from: "them", text: "이럴 때만" },
        { d: "2024-08-23", t: "20:41", from: "me", text: "자꾸 오라는 남자친구는 안 오고 배달기사님이 오시네 ♡" },
        { d: "2024-08-23", t: "20:42", from: "them", text: "체하지 말고 먹어" },
        { d: "2024-08-23", t: "20:43", from: "me", text: "네 오빠" },
        { d: "2024-08-23", t: "20:43", from: "them", text: "이럴 때만" },
        { d: "2024-12-06", t: "20:10", from: "them", text: "하 나 오늘도 딜레이돼서 못 보겠다" },
        { d: "2024-12-06", t: "20:11", from: "me", text: "또?" },
        { d: "2024-12-06", t: "20:11", from: "them", text: "나도 미치겠네" },
        { d: "2024-12-06", t: "20:12", from: "me", text: "난 괜찮아" },
        { d: "2024-12-06", t: "20:13", from: "them", text: "이번 활동 끝나면 볼 시간 생길 거야" },
        { d: "2024-12-06", t: "20:14", from: "me", text: "나 신경쓰지 말고 일해" },
        { d: "2024-12-06", t: "20:14", from: "them", text: "미안" },
        { d: "2024-12-06", t: "21:14", from: "me", text: "하 진짜 이제 그만 시켜 ㅋㅋㅋㅋㅋ" },
        { d: "2024-12-06", t: "21:15", from: "them", text: "아 왜 신경 쓰이니까 그렇지" },
        { d: "2024-12-06", t: "21:16", from: "me", text: "나 진짜 괜찮아 안 굶어" },
        { d: "2024-12-06", t: "21:17", from: "them", text: "너 나 없으면 안 챙겨먹는 거 아니까" },
        { d: "2024-12-06", t: "21:17", from: "them", text: "잘 좀 먹어" },
        { d: "2024-12-06", t: "21:18", from: "me", text: "제가요? 저는 알아서 잘 먹는데요" },
        { d: "2024-12-06", t: "21:19", from: "them", text: "그냥 그렇다고 해" },
        { d: "2024-12-06", t: "21:20", from: "me", text: "네 오빠" },
        { d: "2024-12-06", t: "21:20", from: "them", text: "이럴 때만" },
        { d: "2025-03-01", t: "19:40", from: "them", text: "나 오늘도 못 가" },
        { d: "2025-03-01", t: "19:41", from: "me", text: "알겠어" },
        { d: "2025-03-01", t: "19:42", from: "them", text: "미안해" },
        { d: "2025-03-01", t: "19:43", from: "me", text: "괜찮아" },
        { d: "2025-03-01", t: "20:43", from: "me", text: "아 이제 진짜 그만해라" },
        { d: "2025-03-01", t: "20:44", from: "them", text: "미안하니까 그렇지.." },
        { d: "2025-03-01", t: "20:45", from: "me", text: "진짜 그만해" },
        { d: "2025-03-01", t: "20:45", from: "me", text: "일단 오늘 건 잘 먹을게 버릴 순 없으니까" },
        { d: "2025-03-01", t: "20:46", from: "them", text: "귀여워 아 보고 싶다" },
        { d: "2025-03-01", t: "20:47", from: "me", text: "ㄴㄷㄴㄷ" },
        { d: "2025-05-24", t: "21:00", from: "me", text: "오늘도 못 봐?" },
        { d: "2025-05-24", t: "21:05", from: "me", text: "바쁜가 보네" },
        { d: "2025-05-24", t: "23:05", from: "them", text: "미안해 촬영이 길어져서 시간이 이렇게 된 줄 몰랐어" },
        { d: "2025-05-24", t: "23:07", from: "me", text: "아냐 일하느라 그런 건데 뭐" },
        { d: "2025-05-24", t: "23:08", from: "them", text: "아 진짜 미안해 지금이라도 갈까?" },
        { d: "2025-05-24", t: "23:09", from: "me", text: "너 요새 몇 시간 못 잔 거 알거든" },
        { d: "2025-05-24", t: "23:09", from: "me", text: "올 시간에 조금이라도 더 자" },
        { d: "2025-05-24", t: "23:10", from: "them", text: "미안해" },
        { d: "2025-08-16", t: "22:00", from: "them", text: "자기야" },
        { d: "2025-08-16", t: "22:02", from: "me", text: "못 오는 거 아니까 일 해" },
        { d: "2025-08-16", t: "22:03", from: "them", text: "미안해" },
        { d: "2025-08-16", t: "23:03", from: "me", text: "너 내가 이거 그만하라고 했지" },
        { d: "2025-08-16", t: "23:04", from: "them", text: "미안하니까 그렇지.." },
        { d: "2025-08-16", t: "23:05", from: "me", text: "넌 내가 뭐 이거 못 받아먹어서 이러는 줄 알아?" },
        { d: "2025-08-16", t: "23:06", from: "them", text: "왜 말 그런 식으로 해 또" },
        { d: "2025-08-16", t: "23:07", from: "me", text: "아 됐다 그만 이야기할래" },
        { d: "2025-08-16", t: "23:07", from: "me", text: "하지 마 이제" },
        { d: "2025-08-16", t: "23:09", from: "them", text: "자기야 미안해" },
        { d: "2025-08-16", t: "23:09", from: "them", text: "화났어?" },
        { d: "2025-08-16", t: "23:10", from: "them", text: "미안해..." },
        { d: "2026-02-19", t: "11:20", from: "me", text: "너 아프다며" },
        { d: "2026-02-19", t: "11:21", from: "them", text: "최영재가 말했지" },
        { d: "2026-02-19", t: "11:22", from: "me", text: "얼마나 아파" },
        { d: "2026-02-19", t: "11:23", from: "them", text: "별로 안 아파 지금 갈 거야" },
        { d: "2026-02-19", t: "11:24", from: "me", text: "아픈데 어딜 와" },
        { d: "2026-02-19", t: "11:25", from: "them", text: "그래도 우리 못 본 지 너무 오래됐잖아" },
        { d: "2026-02-19", t: "11:26", from: "me", text: "아 됐어 쉬어 죽 시켰으니까 먹고" },
        { d: "2026-02-19", t: "11:27", from: "them", text: "미안해" },
        { d: "2026-02-19", t: "11:28", from: "me", text: "이런 건 미안해 안 해도 돼" },
        { d: "2026-06-13", t: "19:50", from: "them", text: "{NAME}, 너 어디야" },
        { d: "2026-06-13", t: "19:51", from: "them", text: "왜 전화 안 받아" },
        { d: "2026-06-13", t: "19:52", from: "them", text: "너 여기 근처 왔었어?" },
        { d: "2026-06-13", t: "19:53", from: "them", text: "전화 받아" },
        { d: "2026-06-13", t: "19:53", from: "them", text: "{NAME}" },
        { d: "2026-06-13", t: "20:13", from: "me", text: "아 미안 나 일하느라 온 지 몰랐어" },
        { d: "2026-06-13", t: "20:13", from: "me", text: "왜? 무슨 일 있어?" },
        { d: "2026-06-13", t: "20:14", from: "them", text: "아 아니 너 본 거 같아서" },
        { d: "2026-06-13", t: "20:15", from: "me", text: "내가 거길 왜 가 ㅋㅋㅋ" },
        { d: "2026-06-13", t: "20:16", from: "them", text: "아무 일 없는 거면 됐어" },
        { d: "2026-10-10", t: "14:30", from: "them", text: "우리 놀러 가기로 한 날 나 일본 스케줄 생겨서 못 만날 것 같아" },
        { d: "2026-10-10", t: "14:32", from: "me", text: "괜찮아" },
        { d: "2026-10-10", t: "14:33", from: "them", text: "나 안 보고 싶냐" },
        { d: "2026-10-10", t: "14:34", from: "me", text: "일인데 뭐" },
        { d: "2026-10-10", t: "14:35", from: "them", text: "너무해 변했어" },
        { d: "2026-10-10", t: "14:36", from: "me", text: "그럼 어떡해" },
        { d: "2026-10-10", t: "14:36", from: "me", text: "정환아 뭐 어떡하라고 그럼 내가" },
        { d: "2026-10-10", t: "14:37", from: "them", text: "장난인데 왜 그래.." },
        { d: "2026-10-10", t: "14:39", from: "me", text: "넌 니가 하는 말은 생각 하나도 안 하지" },
        { d: "2026-10-10", t: "14:39", from: "me", text: "넌 내가 갑자기 이러는 것 같지" },
        { d: "2026-10-10", t: "14:40", from: "them", text: "{NAME}" },
        { d: "2026-10-10", t: "14:42", from: "me", text: "만나서 말하려고 했는데" },
        { d: "2026-10-10", t: "14:42", from: "me", text: "아 진짜" },
        { d: "2026-10-10", t: "14:43", from: "me", text: "우리 헤어지자" },
        { d: "2026-10-10", t: "14:43", from: "them", text: "뭐?" },
        { d: "2026-10-10", t: "14:44", from: "me", text: "너한테는 갑자기라서 미안한데 나 이제 답 안 할 거야" },
        { d: "2026-10-10", t: "14:45", from: "them", text: "야 {NAME}" },
        { d: "2026-10-10", t: "14:45", from: "them", text: "전화 받아" },
        { d: "2026-10-10", t: "14:46", from: "them", text: "{NAME}" },
        { d: "2026-10-10", t: "14:47", from: "them", text: "전화 받으라고" },
        { d: "2026-10-10", t: "14:49", from: "them", text: "너 진짜 이대로 헤어진다고?" },
        { d: "2026-10-10", t: "14:50", from: "them", text: "전화 받으라고" },
        { d: "2026-10-10", t: "14:53", from: "them", text: "너 내가 맨날 이런 식으로 너 감정 뱉고 후회하는 거 하지 말라고 했지" },
        { d: "2026-10-10", t: "14:54", from: "them", text: "생각 정리하고 연락해" },
        { d: "2026-10-24", t: "07:02", from: "them", text: "{NAME}" },
        { d: "2026-10-24", t: "07:08", from: "them", text: "너 인터넷 보지 마" },
        { d: "2026-10-24", t: "07:20", from: "them", text: "모르는 번호로 오는 전화 받지 마" },
        { d: "2026-10-24", t: "07:33", from: "them", text: "일어나면 연락해" },
        { d: "2026-10-24", t: "07:41", from: "them", text: "나 보기 싫어도 연락해" },
        { d: "2026-10-24", t: "07:47", from: "them", text: "{NAME}아" },
        { d: "2026-10-24", t: "07:56", from: "them", text: "걱정되니까 제발 연락해" }
      ] },

      "최영재": { unread: 6, msgs: [
        { d: "2025-03-14", t: "23:41", from: "them", text: "누나 형 지금 잠들었어" },
        { d: "2025-03-14", t: "23:41", from: "them", text: "걱정할 거 같아서" },
        { d: "2025-03-14", t: "23:44", from: "me", text: "아 ㅇㅋ 고마워 깨우지말고 일어나면 연락하라고 해줘" },
        { d: "2025-06-27", t: "09:02", from: "them", text: "누나 생일 축하해" },
        { d: "2025-06-27", t: "09:02", from: "them", text: "선물은 형이 알아서 잘 사줬겠지" },
        { d: "2025-06-27", t: "09:20", from: "me", text: "땡큐ㅋㅋ 근데 영재야 형이 준 건 준 거고" },
        { d: "2025-06-27", t: "09:20", from: "me", text: "넌 너지" },
        { d: "2025-06-27", t: "09:21", from: "them", text: "아 안 넘어가네" },
        { d: "2025-06-27", t: "09:21", from: "them", text: "뭐 가지고 싶은데" },
        { d: "2025-06-27", t: "09:30", from: "me", text: "정환이한테 말해놓음" },
        { d: "2025-06-27", t: "09:31", from: "them", text: "커플 가라 진짜" },
        { d: "2025-09-05", t: "20:15", from: "them", text: "나 누구게" },
        { d: "2025-09-05", t: "20:16", from: "me", text: "영재 핸드폰 돌려줘" },
        { d: "2025-09-05", t: "20:16", from: "them", text: "어떻게 알았어?" },
        { d: "2025-09-05", t: "20:17", from: "me", text: "내가 너에 대해 모르는 게 어딨어" },
        { d: "2025-09-05", t: "20:17", from: "them", text: "그 말 좀 스윗하다" },
        { d: "2025-09-05", t: "20:22", from: "them", text: "아니 왜 내폰에 이런 불미스러운 기록을..." },
        { d: "2026-02-18", t: "22:10", from: "them", text: "누나 형 아픈 거 같아" },
        { d: "2026-02-18", t: "22:11", from: "me", text: "어디가" },
        { d: "2026-02-18", t: "22:12", from: "them", text: "열 나는 거 보니까 몸살 제대로 온 듯" },
        { d: "2026-02-18", t: "22:12", from: "them", text: "사실 누나한테 말하지 말라고 했는데" },
        { d: "2026-02-18", t: "22:13", from: "them", text: "나는 형보다 누나가 더 무서워" },
        { d: "2026-02-18", t: "22:15", from: "me", text: "동생 잘 키운 듯" },
        { d: "2026-02-18", t: "22:15", from: "me", text: "약 먹고 자고 있지? 죽 보낼테니까 일어나면 줘" },
        { d: "2026-02-18", t: "22:16", from: "them", text: "엉" },
        { d: "2026-10-10", t: "21:05", from: "them", text: "엥 누나 형이랑 진짜 헤어졌어?" },
        { d: "2026-10-10", t: "21:06", from: "them", text: "누나 괜찮아?" },
        { d: "2026-10-10", t: "21:40", from: "them", text: "누나 걱정되니까 연락 좀 해" },
        { d: "2026-10-11", t: "12:03", from: "them", text: "정환이 형이랑 헤어졌다고 우리 연락도 다 안 보는 거야?" },
        { d: "2026-10-11", t: "12:04", from: "them", text: "누나 진짜 너무하다" },
        { d: "2026-10-11", t: "13:20", from: "me", text: "최영재 징징 미쳤나 괜찮으니까 일 해" },
        { d: "2026-10-11", t: "13:20", from: "me", text: "안 바빠?" },
        { d: "2026-10-11", t: "13:24", from: "them", text: "바빠 나는 누나가 우리까지 다 인연 끊으려는 줄 ㅋㅋ" },
        { d: "2026-10-11", t: "13:24", from: "them", text: "형은 좀 제정신 아닌 거 같아" },
        { d: "2026-10-11", t: "13:30", from: "me", text: "나는 걔 소식 안 궁금해 전해줄거면 차단한다" },
        { d: "2026-10-11", t: "13:31", from: "them", text: "매정한 사람" },
        { d: "2026-10-24", t: "07:00", from: "them", text: "누나" },
        { d: "2026-10-24", t: "07:03", from: "them", text: "누나 " },
        { d: "2026-10-24", t: "07:14", from: "them", text: "누나 연락 좀 받아" },
        { d: "2026-10-24", t: "07:31", from: "them", text: "누나 인터넷 들어가지마" },
        { d: "2026-10-24", t: "07:46", from: "them", text: "누나 자는 거지?" },
        { d: "2026-10-24", t: "07:55", from: "them", text: "걱정되니까 일어나면 연락해" }
      ] },

      "류인아": { unread: 0, msgs: [] },
      "이경민": { unread: 0, msgs: [] },
      "한지훈": { unread: 0, msgs: [] }
    }
  },



  /* 쪽지(DM): 새로 만든 익명 계정(알계)처럼 보이게. 일반 쪽지 목록에 들어와요. */
  DMS: [
    { id: "d1",  name: "user48201937", handle: "user48201937", time: "07:52", followers: 0, following: 2, posts: 0,
      msgs: ["{NAME}님 맞죠?", "여친이 트위터 계정도 있으시네 ㅋㅋ"] },
    { id: "d2",  name: "a8472910",     handle: "a8472910",     time: "07:53", followers: 1, following: 3, posts: 0,
      msgs: ["비계 털린 거 본인 맞음? 대답 좀 해봐요"] },
    { id: "d3",  name: "user_3047182", handle: "user_3047182", time: "07:53", followers: 0, following: 1, posts: 0,
      msgs: ["아이돌 여친이면 이 정도 각오는 했어야죠 ㅋㅋ"] },
    { id: "d4",  name: "k29481736",    handle: "k29481736",    time: "07:54", followers: 2, following: 4, posts: 0,
      msgs: ["어케꼬심?ㅋㅋ"] },
    { id: "d5",  name: "user90183746", handle: "user90183746", time: "07:55", followers: 0, following: 2, posts: 0,
      msgs: ["계정 지운다고 끝날 일 아닌 거 알죠?"] },
    { id: "d6",  name: "x_5029381",    handle: "x_5029381",    time: "07:55", followers: 3, following: 5, posts: 0,
      msgs: ["팬들 속여놓고 연애질하니까 좋았음?"] },
    { id: "d7",  name: "user71920384", handle: "user71920384", time: "07:56", followers: 0, following: 2, posts: 0,
      msgs: ["입장문 안 쓰세요? 본인도 한마디 해야죠"] },
    { id: "d8",  name: "m4820175",     handle: "m4820175",     time: "07:57", followers: 1, following: 1, posts: 0,
      msgs: ["미친년"] },
    { id: "d9",  name: "user6603921",  handle: "user6603921",  time: "07:58", followers: 0, following: 3, posts: 0,
      msgs: ["캡처 이미 다 돌고 있어요 ㅋㅋ"] },
    { id: "d10", name: "z9028374",     handle: "z9028374",     time: "07:59", followers: 2, following: 2, posts: 0,
      msgs: ["ㅋㅋ이제 와서 비공개로 돌려봤자 늦었죠"] }
  ],
   INSTA: {
  bio: "",   // 프로필 소개글 (비워두면 안 보임)
  posts: [   // 피드 3개 (사진은 저장소 맨 위에 ig-post-1.jpg ~ 3.jpg 로 올리기)
    { img: "./ig-post-1.jpg", date: "2026-08-15", likes: 1, caption: "첫 번째 게시물 멘트는 여기에 적어요",
      comments: [{ user: "jh_1107", text: "첫 번째 게시물 댓글은 여기에 적어요", time: "10주" }] },
    { img: "./ig-post-2.jpg", date: "2026-09-20", likes: 1, caption: "두 번째 게시물 멘트는 여기에 적어요",
      comments: [{ user: "jh_1107", text: "두 번째 게시물 댓글은 여기에 적어요", time: "5주" }] },
    { img: "./ig-post-3.jpg", date: "2026-10-05", likes: 1, caption: "세 번째 게시물 멘트는 여기에 적어요",
      comments: [{ user: "jh_1107", text: "세 번째 게시물 댓글은 여기에 적어요", time: "3주" }] }
  ],
  stories: [ // 스토리 보관함 6개 (ig-story-1.jpg ~ 6.jpg)
    { date: "2025-10-24", img: "./ig-story-1.jpg" },
    { date: "2025-12-25", img: "./ig-story-2.jpg" },
    { date: "2026-02-14", img: "./ig-story-3.jpg" },
    { date: "2026-04-05", img: "./ig-story-4.jpg" },
    { date: "2026-06-18", img: "./ig-story-5.jpg" },
    { date: "2026-08-30", img: "./ig-story-6.jpg" }
  ],  // requests: ["아이디1","아이디2",...]  ← 팔로우 요청을 직접 정할 때만 (없으면 자동 47개)
// kind: mention=스토리 태그 / share=스토리 공유 / story=스토리 답장 → 전부 '스토리를 볼 수 없습니다'로 표시
// kind 없이 text만 있으면 일반 대화 말풍선, from: them=상대 / me=나
// story: 3 → 내가 공유한 스토리로 보관함의 3번째(ig-story-3.jpg) 사진을 보여줘요 (kind:"share", from:"me" 일 때)
// requests: ["아이디",...] 를 추가하면 팔로우 요청 목록을 직접 정할 수 있어요 (없으면 자동 47개)
INSTA: {
  bio: "",
  posts: [
    { img: "./ig-post-1.jpg", date: "2026-08-15", likes: 1, caption: "나 놓고 혼자 파리가니까 좋아?",
      comments: [{ user: "jh_1107", text: "아앙 그래서 카톡 보내는 중...", time: "10주" }] },
    { img: "./ig-post-2.jpg", date: "2026-09-20", likes: 1, caption: "하루종일 치이카와 치이키와 나보다 치이카와가 좋음?",
      comments: [{ user: "jh_1107", text: "아니라고 2947번째 반성 중입니다", time: "5주" }] },
    { img: "./ig-post-3.jpg", date: "2026-06-18", likes: 1, caption: "💕",
      comments: [{ user: "jh_1107", text: "사랑해", time: "18주" }] }
  ],
  stories: [
    { date: "2025-10-24", img: "./ig-story-1.jpg" },
    { date: "2025-12-25", img: "./ig-story-2.jpg" },
    { date: "2026-02-14", img: "./ig-story-3.jpg" },
    { date: "2026-04-05", img: "./ig-story-4.jpg" },
    { date: "2026-06-18", img: "./ig-story-5.jpg" },
    { date: "2026-08-30", img: "./ig-story-6.jpg" }
  ],
  dm: {
    user: "jh_1107",
    msgs: [
      { d: "2026-08-12", t: "22:41", from: "them", kind: "mention", text: "" },
      { d: "2026-09-02", t: "21:10", from: "them", kind: "mention", text: "" },
      { d: "2026-09-11", t: "19:05", from: "them", kind: "mention", text: "" },
      { d: "2026-09-20", t: "23:02", from: "them", kind: "mention", text: "" },
      { d: "2026-09-27", t: "20:15", from: "them", kind: "mention", text: "" },
      { d: "2026-10-01", t: "18:30", from: "me", kind: "share", story: 3, text: "" },
      { d: "2026-10-06", t: "08:30", from: "them", text: "에휴" },
      { d: "2026-10-06", t: "08:41", from: "me", text: "아 재밌다" },
      { d: "2026-10-13", t: "23:40", from: "them", kind: "mention", text: "" }
    ]
  }
},
  DM_FIRST_DELAY: 4000,   // 처음 들어가고 첫 쪽지가 오기까지 (ms)
  DM_INTERVAL: 3000       // 이후 쪽지 도착 간격 (ms)
};
