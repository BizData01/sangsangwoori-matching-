import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "상상우리 — 시니어 일자리 매칭",
  description: "시니어와 일자리를 연결하는 자동 매칭 시스템",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className={`${geist.className} min-h-full bg-gray-50 text-gray-900`}>
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-blue-700">
              상상우리
            </Link>
            <Link
              href="/register"
              className="text-lg font-semibold text-gray-700 hover:text-blue-600"
            >
              프로필 등록
            </Link>
            <Link
              href="/recommendations"
              className="text-lg font-semibold text-gray-700 hover:text-blue-600"
            >
              추천 매칭
            </Link>
            <Link
              href="/admin"
              className="text-lg font-semibold text-gray-700 hover:text-blue-600"
            >
              담당자 대시보드
            </Link>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-10 w-full">
          {children}
        </main>

        <footer className="mt-auto border-t border-gray-200 py-6 text-center text-base text-gray-500">
          © 2026 상상우리. 시니어 일자리 매칭 시스템.
        </footer>
      </body>
    </html>
  );
}
