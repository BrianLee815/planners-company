import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-sm z-50 border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* 로고 */}
        <a
          href="/"
          className="font-serif text-2xl font-bold text-primary tracking-tight hover:text-primary transition"
        >
          Planners Company
        </a>

        {/* 햄버거 버튼 (모바일) */}
        <button
          className="sm:hidden text-3xl text-gray-800"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        {/* 데스크탑 메뉴 */}
        <div className="hidden sm:flex items-center gap-10">
          <nav className="flex gap-6 text-sm font-medium">
            <a href="/services" className="text-gray-700 hover:text-primary transition">서비스분야</a>
            <a href="/projects" className="text-gray-700 hover:text-primary transition">포트폴리오</a>
            <a href="/about" className="text-gray-700 hover:text-primary transition">회사소개</a>
          </nav>

          <a
            href="/contact"
            className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
          >
            문의하기
          </a>
        </div>
      </div>

      {/* 모바일 슬라이드 메뉴 (왼쪽 → 오른쪽) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6 text-gray-800 text-sm font-medium">
          {/* 닫기 버튼 */}
          <button className="text-2xl mb-4 self-end" onClick={() => setOpen(false)}>
            ✕
          </button>

          <a href="/services" onClick={() => setOpen(false)}>서비스분야</a>
          <a href="/projects" onClick={() => setOpen(false)}>포트폴리오</a>
          <a href="/about" onClick={() => setOpen(false)}>회사소개</a>

          <a
            href="/contact"
            className="mt-6 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-white transition-colors text-center"
            onClick={() => setOpen(false)}
          >
            문의하기
          </a>
        </div>
      </div>

      {/* 오버레이 (메뉴 열릴 때 클릭 시 닫힘) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}





















