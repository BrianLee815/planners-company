import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-sm z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 로고 */}
        <a href="/" className="font-serif text-2xl font-bold text-primary tracking-tight hover:text-primary transition">
          Planners Company
        </a>

        {/* 메뉴 + 문의하기 */}
        <div className="flex items-center gap-10">

          {/* 메뉴 */}
          <nav className="flex gap-6 text-sm font-medium">
            <a href="/services" className="text-gray-700 hover:text-primary transition">서비스분야</a>
            <a href="/projects" className="text-gray-700 hover:text-primary transition">포트폴리오</a>
            <a href="/about" className="text-gray-700 hover:text-primary transition">회사소개</a>
          </nav>

          {/* 문의하기 버튼 */}
          <a
            href="/contact"
            className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
          >
            문의하기
          </a>

        </div>
      </div>
    </header>
  );
}




















