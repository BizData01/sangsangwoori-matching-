/* /recommendations — 자동 매칭 추천 목록 (뼈대) */
const PLACEHOLDER_MATCHES = [
  { id: "1", seniorName: "홍길동", jobTitle: "경비원",   region: "서울 강남구", score: 92 },
  { id: "2", seniorName: "김영희", jobTitle: "사무보조", region: "경기 성남시", score: 85 },
  { id: "3", seniorName: "이철수", jobTitle: "청소원",   region: "서울 마포구", score: 78 },
];

export default function RecommendationsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">추천 매칭 목록</h1>
      <p className="text-xl text-gray-500 mb-8">
        매칭 점수 높은 순으로 정렬됩니다.
      </p>

      {/* 필터 폼 */}
      <form className="bg-white rounded-2xl shadow p-6 mb-8 flex flex-col gap-4">
        <p className="text-lg font-semibold text-gray-700">검색 필터</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold text-gray-700" htmlFor="filter-name">
              이름
            </label>
            <input
              id="filter-name"
              name="name"
              type="text"
              placeholder="홍길동"
              className="border-2 border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold text-gray-700" htmlFor="filter-region">
              지역
            </label>
            <input
              id="filter-region"
              name="region"
              type="text"
              placeholder="서울 강남구"
              className="border-2 border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold text-gray-700" htmlFor="filter-job">
              직종
            </label>
            <input
              id="filter-job"
              name="job"
              type="text"
              placeholder="경비, 청소 등"
              className="border-2 border-gray-300 rounded-xl px-4 py-3 text-lg text-gray-900 bg-white focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="self-start bg-blue-600 text-white text-xl font-bold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          검색
        </button>
        <p className="text-base text-amber-600 font-semibold">
          ⚙ 필터 연동은 다음 단계에서 구현됩니다.
        </p>
      </form>

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
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center min-w-[80px]">
                <span className="text-4xl font-extrabold text-blue-600">{m.score}</span>
                <span className="text-base text-gray-400 font-semibold">매칭 점수</span>
              </div>
              <button
                type="button"
                className="bg-blue-600 text-white text-lg font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                배정하기
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
