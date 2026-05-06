/* /admin — 담당자 대시보드 (뼈대) */
const STATUS_COLS = [
  {
    key: "unmatched",
    label: "미매칭",
    color: "bg-red-50 border-red-300",
    badge: "bg-red-100 text-red-700",
    count: 12,
  },
  {
    key: "pending",
    label: "매칭 대기",
    color: "bg-yellow-50 border-yellow-300",
    badge: "bg-yellow-100 text-yellow-700",
    count: 5,
  },
  {
    key: "completed",
    label: "배정 완료",
    color: "bg-green-50 border-green-300",
    badge: "bg-green-100 text-green-700",
    count: 28,
  },
];

const PLACEHOLDER_ITEMS: Record<string, { name: string; job: string }[]> = {
  unmatched: [
    { name: "박민준", job: "미정" },
    { name: "최수진", job: "미정" },
  ],
  pending: [
    { name: "강동원", job: "경비원" },
  ],
  completed: [
    { name: "윤서연", job: "사무보조" },
    { name: "장혜리", job: "청소원" },
  ],
};

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">담당자 대시보드</h1>
      <p className="text-xl text-gray-500 mb-10">
        매칭 현황을 한눈에 확인하고 배정을 관리합니다. (현재는 예시 데이터)
      </p>

      {/* 안내 배너 */}
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl px-6 py-4 mb-8 text-lg text-amber-700 font-semibold">
        ⚙ 기능 구현 예정 — 현재는 뼈대 화면입니다.
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        {STATUS_COLS.map((col) => (
          <div
            key={col.key}
            className={`rounded-2xl border-2 ${col.color} p-6 flex flex-col items-center gap-2`}
          >
            <span className={`text-base font-bold px-3 py-1 rounded-full ${col.badge}`}>
              {col.label}
            </span>
            <span className="text-5xl font-extrabold text-gray-900">{col.count}</span>
            <span className="text-lg text-gray-500">건</span>
          </div>
        ))}
      </div>

      {/* 칸반 열 */}
      <div className="grid grid-cols-3 gap-6">
        {STATUS_COLS.map((col) => (
          <div key={col.key} className={`rounded-2xl border-2 ${col.color} p-5`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{col.label}</h2>
            <ul className="flex flex-col gap-3">
              {PLACEHOLDER_ITEMS[col.key].map((item, i) => (
                <li
                  key={i}
                  className="bg-white rounded-xl shadow px-5 py-4 flex justify-between items-center"
                >
                  <span className="text-xl font-semibold text-gray-900">{item.name}</span>
                  <span className="text-lg text-gray-500">{item.job}</span>
                </li>
              ))}
              {PLACEHOLDER_ITEMS[col.key].length === 0 && (
                <li className="text-gray-400 text-lg text-center py-4">없음</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
