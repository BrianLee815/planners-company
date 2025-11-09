// 컴포넌트 밖에 선언
// 컴포넌트 밖에 선언
const organization = {
  title: "대표이사",
  children: [
    { 
      title: "경영지원",
      children: [
        { title: "경영 지원" },
        { title: "신규 사업 발굴" },
        { title: "인사, 재무, 회계 업무" }
      ]
    },
    { title: "기획본부", 
      children : [
        {title: "전략 기획 수립"},
        {title: "프로젝트 기획 및 관리"},
        {title: "행사 콘텐츠 개발"},
        {title: "ROI 및 행사 결과 관리"}
      ]
    },
    { title: "디자인", 
      children : [
        {title: "공간 기획 및 디자인"},
        {title: "3D 가상공간 디자인"},
        {title: "2D 그래픽 디자인"},
        {title: "현장 감리"}
      ]
    },
    { title: "기획본부", 
      children : [
        {title: "VR개발"},
        {title: "웹 솔루션 개발"},
        {title: "UI/UX 디자인 및 개발"},
        {title: "서버 유지 관리"}
      ]
    },
  ],
};

export default function About() {
  return (
    <div className="pt-32 w-full px-4 sm:px-6 bg-white text-black leading-relaxed font-sans text-left">

      <h1 className="text-4xl font-bold text-black mb-12 text-center">
        회사 소개
      </h1>

      {/* 회사 소개 */}
      <section className="mb-20 text-center">
        <p className="text-lg md:max-w-3xl mx-auto">
          플래너스 컴퍼니는 국제회의, 포럼, 박람회, 어워즈 등 다양한 컨벤션 행사를 
          전문적으로 기획·운영하는 기업입니다. 
          우리는 품격 있는 행사 경험과 완성도 높은 운영을 통해 
          고객의 목적에 최적화된 솔루션을 제공합니다.
        </p>
      </section>

      {/* 조직도 */}
      <section className="py-16 bg-gray-50">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800">조직 구성</h2>
    <p className="text-gray-500 mt-2">Organization Structure</p>
  </div>

  <div className="flex flex-col items-center">
    {/* 대표이사 */}
    <div className="px-8 py-4 border border-gray-300 bg-white rounded-lg shadow-sm font-semibold text-lg mb-10">
      {organization.title}
    </div>

    {/* 하위 부서 */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-4xl">
      {organization.children.map((dept, i) => (
        <div key={i} className="px-6 py-4 border border-gray-200 bg-white rounded-md shadow-sm font-medium text-gray-700 hover:shadow-md transition">
          <div className="font-semibold text-center mb-2">{dept.title}</div>

          {/* 하위 팀/업무가 있는 경우 */}
          {dept.children && (
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              {dept.children.map((sub, j) => (
                <li key={j}>{sub.title}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 연혁 */}
      <section className="pb-32">
        <h2 className="text-2xl font-bold text-center text-black mb-8">연혁</h2>
        <ul className="space-y-4 text-sm text-center">
          <li>2023 · 기타행사기획및대행서비스 직접생산확인증명 자격 취득</li>
          <li>2023 · 국내외 침해사고대응 초청교육 개최 용역 사업</li>
          <li>2023 · KrCERT/CC 성숙도 인증 워크숍 개최 사업</li> 
          <li>2023 · 회의기획및대행서비스 직접생산확인증명 자격 취득</li>
          <li>2023 · 사단법인 한국MICE협회 회원사 가입</li>
          <li>2023 · 연구회 설립 25주년 기념 제2차 심포지엄 행사 운영 사업</li>
          <li>2023 · 연구개발전담부서 인정 및 설립</li>
          <li>2024 · 국외 전시 참관 및 세미나 개최 사업</li> 
          <li>2024 · 한국콘텐츠진흥원 지원사업 설명회 운영 사업</li> 
          <li>2024 · 디지털 탄소중립 국내외 행사 개최 사업</li> 
          <li>2025 · 국외 전시 참관 및 세미나 개최 사업</li> 
        </ul>
      </section>

      {/* 위치 */}
      <section className="py-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Location
        </h2>

        <div className="md:max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* 지도 */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-md">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.013537166538!2d127.0160173952164!3d37.48400691853165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca13e2fcf9dbb%3A0x41f2f5de65091fbc!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDshJzstIjspJHslZnroZwy6ri4IDM1!5e0!3m2!1sko!2skr!4v1762410876329!5m2!1sko!2skr"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* 정보 */}
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
      </section>

    </div>
  );
}




