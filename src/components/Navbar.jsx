import { useState } from "react"; // useState 훅 import
import { Link } from "react-router-dom"; // Link 컴포넌트 사용
import logo from "/src/assets/logo2-re.png";

export default function Navbar() {
  // 모바일 메뉴 상태 관리 (true: 열림, false: 닫힘)
  const [isOpen, setIsOpen] = useState(false);

  // 메뉴 토글 함수
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // 1. 메인 헤더 (상단 고정)
    <header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-sm shadow-sm z-50 border-b border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* 로고: Link로 변경하여 SPA 작동 유지 */}
        <Link 
  to="/" 
  className="flex items-center hover:opacity-80 transition"
>
  <img src={logo} alt="Logo" className="h-16 w-auto" />
</Link>

        {/* 메뉴 + 문의하기 (큰 화면) & 햄버거 버튼 (작은 화면) */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* 2. PC/Tablet용 메뉴 및 문의하기 버튼 (sm 이상에서 표시) */}
          <div className="hidden sm:flex items-center gap-6">
            
            {/* PC 메뉴 */}
            <nav className="flex gap-6 text-sm font-medium">
              <Link to="/services" className="text-gray-700 hover:text-primary transition">Services</Link>
              <Link to="/projects" className="text-gray-700 hover:text-primary transition">Portpolio</Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition">About</Link>
              <Link to="/notices" className="text-gray-700 hover:text-primary transition">Notice</Link>
            </nav>

            {/* 문의하기 버튼 */}
            <Link
              to="/contact"
              className="px-3 py-2 rounded-lg bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-white transition-colors text-medium"
            >
              문의하기
            </Link>

          </div>
          
          {/* 3. 모바일용 햄버거 버튼 (sm 미만에서 표시) */}
          <button 
            onClick={toggleMenu} 
            className="p-2 sm:hidden text-gray-700 hover:text-primary transition z-50"
            aria-label="Toggle Menu"
          >
            {/* 햄버거 아이콘 (isOpen 상태에 따라 X 아이콘으로 변경) */}
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </div>
      
      {/* 4. 모바일 메뉴 드롭다운 (isOpen 상태에 따라 표시) */}
      <div 
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-3 border-t border-gray-200' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 text-base font-medium">
          <Link to="/services" onClick={toggleMenu} className="text-gray-700 hover:text-primary transition">서비스</Link>
          <Link to="/projects" onClick={toggleMenu} className="text-gray-700 hover:text-primary transition">포트폴리오</Link>
          <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-primary transition">회사소개</Link>
          <Link to="/notices" onClick={toggleMenu} className="text-gray-700 hover:text-primary transition">공지사항</Link>

          {/* 모바일 메뉴 내부에 문의하기 버튼 추가 (필요시) */}
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="mt-2 text-center px-3 py-2 rounded-sm bg-primary text-white hover:bg-primary/90 transition-colors text-sm"
          >
            문의하기
          </Link>
        </nav>
      </div>
    </header>
  );
}






















