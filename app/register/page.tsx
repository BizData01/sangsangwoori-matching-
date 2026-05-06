/* /register — 시니어 프로필 등록 폼 (뼈대) */
export default function RegisterPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">프로필 등록</h1>
      <p className="text-xl text-gray-500 mb-10">
        이름, 지역, 희망 직종, 경력을 입력하시면 자동으로 일자리를 추천해 드립니다.
      </p>

      {/* 폼 — 저장 기능은 다음 블록 */}
      <form className="bg-white rounded-2xl shadow p-8 flex flex-col gap-6">
        {/* 이름 */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold text-gray-800" htmlFor="name">
            이름
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="홍길동"
            className="border-2 border-gray-300 rounded-xl px-5 py-4 text-xl text-gray-900 bg-white focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* 지역 */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold text-gray-800" htmlFor="region">
            지역
          </label>
          <input
            id="region"
            name="region"
            type="text"
            placeholder="서울 강남구"
            className="border-2 border-gray-300 rounded-xl px-5 py-4 text-xl text-gray-900 bg-white focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* 희망 직종 */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold text-gray-800" htmlFor="desired_job">
            희망 직종
          </label>
          <input
            id="desired_job"
            name="desired_job"
            type="text"
            placeholder="경비, 청소, 사무보조 등"
            className="border-2 border-gray-300 rounded-xl px-5 py-4 text-xl text-gray-900 bg-white focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* 경력 */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold text-gray-800" htmlFor="career_years">
            경력 (년)
          </label>
          <input
            id="career_years"
            name="career_years"
            type="number"
            placeholder="10"
            min={0}
            className="border-2 border-gray-300 rounded-xl px-5 py-4 text-xl text-gray-900 bg-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <p className="text-lg text-amber-600 font-semibold mt-2">
          ⚙ 저장 기능은 다음 단계에서 구현됩니다.
        </p>

        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white text-2xl font-bold py-5 rounded-2xl shadow hover:bg-blue-700 transition"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}
