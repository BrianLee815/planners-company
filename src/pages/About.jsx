export default function About() {
  return (
    <div className="pt-32 max-w-6xl mx-auto px-6 bg-gray-200 text-black leading-relaxed font-sans">

      <h1 className="text-4xl font-bold text-primary mb-12 text-center">
        회사소개
      </h1>

      {/* 회사 소개 */}
      <section className="mb-20 text-center">
        <p className="text-lg max-w-3xl mx-auto">
          플래너스 컴퍼니는 국제회의, 포럼, 박람회, 어워즈 등 다양한 컨벤션 행사를 
          전문적으로 기획·운영하는 기업입니다. 
          우리는 품격 있는 행사 경험과 완성도 높은 운영을 통해 
          고객의 목적에 최적화된 솔루션을 제공합니다.
        </p>
      </section>

      {/* 조직 구성 */}
      <section className="mb-20 text-center">
        <h2 className="text-2xl font-bold text-primary mb-12">조직 구성</h2>

        <div className="h-2"></div> 

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Team Leader */}
          <svg className="w-8 h-8 mx-auto mb-4 text-primary mt-12" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="7" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>
          <div className="bg-white border border-gray-400 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">이효주</h3>
            <p className="text-sm font-medium text-primary mb-3">대표이사</p>
            <p className="text-sm leading-relaxed">경영인</p>
          </div>

          {/* Team Members */}

          <svg className="w-8 h-8 mx-auto mb-4 text-primary mt-12" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="7" r="3"/>
            <circle cx="15" cy="7" r="3"/>
            <path d="M4 21c0-3.5 2.5-6 5-6"/>
            <path d="M20 21c0-3.5-2.5-6-5-6"/>
          </svg>
            <div className="bg-white border border-gray-400 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">정형진</h3>
            <p className="text-sm font-medium text-primary mb-3">전략기획팀 팀장</p>
            <p className="text-sm leading-relaxed">행사 기획 및 총괄 운영 책임</p>
          </div>

          
          <div className="bg-white border border-gray-400 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">문선주</h3>
            <p className="text-sm leading-relaxed">행사 운영 / 현장 관리 / 기획 지원</p>
          </div>

          <div className="bg-white border border-gray-400 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">전략기획팀 팀원</h3>
            <p className="text-sm leading-relaxed">행사 운영 / 현장 관리 / 기획 지원</p>
          </div>
         
          <div className="bg-white border border-gray-400 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">조서영</h3>
            <p className="text-sm leading-relaxed">행사 운영 / 현장 관리 / 기획 지원</p>
          </div>

          <div className="bg-white border border-gray-400 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">이상현</h3>
            <p className="text-sm leading-relaxed">IT지원</p>
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="pb-32">
        <h2 className="text-2xl font-bold text-primary mb-8">연혁</h2>
        <ul className="space-y-4 text-sm">
          <li>2023 · 플래너스 컴퍼니 설립</li>
          <li>2024 · 공공기관 포럼 및 시상식 운영 프로젝트 다수 수행</li>
          <li>2025 · 국내 주요 박람회 및 국제회의 기획 / 실행</li>
        </ul>
      </section>
    </div>
  );
}



