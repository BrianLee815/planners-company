export default function Home() {
  return (
    <div className="pt-5"> {/* 헤더 높이 확보용 padding */}
      
      {/* Hero Section */}
      <section className="pt-10 h-screen flex items-center justify-center bg-gradient-to-b from-primary to-[#0F4C75] text-white px-6 text-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            국제회의 · 포럼 · 전시/박람회 · 시상식
          </h2>
          <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
            플래너스 컴퍼니는 전문성과 창의성을 바탕으로  
            품격 있는 행사 경험을 제공합니다.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray text-gray-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-16">
            사업분야
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">공공기관 포럼</h3>
              <p className="text-sm opacity-80 leading-relaxed">정부 및 공공기관이 주최하는 주요 정책 포럼 & 대담 기획</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">전시 / 박람회</h3>
              <p className="text-sm opacity-80 leading-relaxed">산업전, 지역특화 박람회, 국제 교류 전시 프로그램 운영</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">어워즈 / 시상식</h3>
              <p className="text-sm opacity-80 leading-relaxed">브랜드 시상식, 공공/민간 어워즈, 연례 행사 기획</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

