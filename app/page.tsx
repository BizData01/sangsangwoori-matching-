import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center gap-8">
      <h1 className="text-5xl font-bold text-blue-700">상상우리</h1>
      <p className="text-2xl text-gray-600 max-w-xl">
        시니어와 일자리를 연결하는 자동 매칭 시스템입니다.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <Link
          href="/register"
          className="bg-blue-600 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow hover:bg-blue-700 transition"
        >
          프로필 등록하기
        </Link>
        <Link
          href="/recommendations"
          className="bg-white border-2 border-blue-600 text-blue-600 text-xl font-bold px-10 py-5 rounded-2xl shadow hover:bg-blue-50 transition"
        >
          추천 매칭 보기
        </Link>
        <Link
          href="/admin"
          className="bg-gray-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow hover:bg-gray-800 transition"
        >
          담당자 대시보드
        </Link>
      </div>
    </div>
  );
}
