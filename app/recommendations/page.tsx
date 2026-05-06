/* /recommendations — 자동 매칭 추천 목록 (뼈대) */
const PLACEHOLDER_MATCHES = [
  { id: "1", seniorName: "홍길동", jobTitle: "경비원", region: "서울 강남구", score: 92 },
  { id: "2", seniorName: "김영희", jobTitle: "사무보조", region: "경기 성남시", score: 85 },
  { id: "3", seniorName: "이철수", jobTitle: "청소원",  region: "서울 마포구",  score: 78 },
];

export default function RecommendationsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">추천 매칭 목록</h1>
      <p className="text-xl text-gray-500 mb-10">
        매칭 점수 높은 순으로 정렬됩니다. (현재는 예시 데이터)
      </p>

      {/* 안내 배너 */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl px-6 py-4 mb-8 text-lg text-amber-700 font-semibold">
        ⚙ 기능 구현 예정 — 현재는 뼈대 화면입니다. 아래 목록은 임시 데이터입니다.
      </div>

      {/* 매칭 카드 목록 */}
      <ul className="flex flex-col gap-5">
        {PLACEHOLDER_MATCHES.map((m) => (
          <li
            key={m.id}
            className="bg-white rounded-2xl shadow p-7 flex items-center justify-between gap-4"
          >
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold text-gray-900">{m.seniorName}</span>
              <span className="text-xl text-gray-600">
                {m.jobTitle} · {m.region}
              </span>
            </div>
            <div className="flex flex-col items-center min-w-[80px]">
              <span className="text-4xl font-extrabold text-blue-600">{m.score}</span>
              <span className="text-base text-gray-400 font-semibold">매칭 점수</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
