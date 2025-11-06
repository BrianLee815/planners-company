export default function About() {
  return (
    <div className="pt-32 w-full px-4 sm:px-6 bg-gray-200 text-black leading-relaxed font-sans">

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
      <section className="py-24 bg-gray-50">
  <h2 className="text-3xl font-bold text-center text-primary mb-10">
    오시는 길
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* 지도 */}
    <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-md">
  <iframe
    title="location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.013537166538!2d127.0160173952164!3d37.
    48400691853165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca13e2fcf9dbb%3A0x41f2f5de65091fb
    c!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDshJzstIjspJHslZnroZwy6ri4IDM1!5e0!3m2!1sko!2skr!4v1762410876329!5m2!1sko!2skr"
    className="w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


    {/* 정보 */}
<div>
  <div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">대중교통 안내</h3>

    <ul className="space-y-4 text-gray-700 leading-relaxed">
      <li>
        <span className="font-medium text-primary">지하철</span><br/>
        • <b>3호선 <span className="font-semibold">남부터미널역</span></b> 3번 출구 도보 8분
      </li>

      <li>
        <span className="font-medium text-primary">버스</span><br/>
        • <b>국제전자센터 정류장</b> 하차 (도보 5분)<br/>
        <span className="text-sm text-gray-600">
          간선: 461, 641 &nbsp;|&nbsp; 지선: 3420, 4319
        </span>
      </li>

      <li>
        <span className="font-medium text-primary">택시/차량</span><br/>
        서울 서초구 서초중앙로2길 35 돈일빌딩 210호<br/>
        <span className="text-sm text-gray-500">(주차 공간 협의 필요 시 문의 바랍니다.)</span>
      </li>
    </ul>
  </div>
</div>


  </div>
</section>

    </div>
  );
}



