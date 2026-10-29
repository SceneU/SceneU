/* 인스타그램 내용 (여기만 고치면 돼요. config.js 와 따로라서 실수해도 사이트가 안 멈춰요)
   - 멘트 안에 큰따옴표(")는 쓰지 마세요. 줄바꿈 없이 한 줄로 써주세요.
   - kind: "mention"=스토리 태그(만료) / "share"=스토리 공유 / "story"=스토리 답장(만료)
     kind 없이 text 만 있으면 일반 대화 말풍선, from: "them"=상대 / "me"=나
   - share + story: 3 → 보관함 3번째 사진을 보여줘요 */
window.INSTA_CONFIG = {
  bio: "",
  posts: [
    { img: "./ig-post-1.jpg", date: "2026-08-15", likes: 1, caption: "나 놓고 혼자 파리가니까 좋아?",
      comments: [{ user: "jh_1107", text: "아앙 그래서 카톡 보내는 중...", time: "10주" }] },
    { img: "./ig-post-2.jpg", date: "2026-09-20", likes: 1, caption: "하루종일 치이카와 치이키와 나보다 치이카와가 좋음?",
      comments: [{ user: "jh_1107", text: "아니라고 2947번째 반성 중입니다", time: "5주" }] },
    { img: "./ig-post-3.jpg", date: "2026-06-18", likes: 1, caption: "\ud83d\udc95",
      comments: [{ user: "jh_1107", text: "사랑해", time: "18주" }] }
  ],
  // 인스타 좋아요를 처음 누르면 트위터 쪽지로 오는 메시지
  likeDm: { name: ".", handle: "djehfos", msgs: ["인스타는 하면서 트위터는 안 보네?"] },
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
      { d: "2026-10-06", t: "08:30", from: "them", text: "사랑해" },
      { d: "2026-10-06", t: "08:41", from: "me", text: "나도" },
      { d: "2026-10-13", t: "23:40", from: "them", kind: "mention", text: "" }
    ]
  }
};
