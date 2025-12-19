import { useState } from "react";
import { motion } from "framer-motion";
import worldMap from "../assets/world-map.svg";
import heroBg from "../assets/hero-bg.jpg"; // hero-bg.jpg가 assets 안에 있다고 가정

export default function Home() {
  const [selectedCert, setSelectedCert] = useState(null); // 추가: 모달용 state

  const services = [
    { title: "컨벤션 및 전시행사 대행", desc: "국제회의 기획·운영, 국제회의 유치지원 업무, 관광, 예산, 전시 기획· 운영·관리, 홍보 및 마케팅", icon: "🏛️" },
    { title: "MICE컨시어지 서비스", desc: "각종 학회, 협회, 정부 관공서, 공공기관, 컨벤션 센터, 기업체, 의료분야, 외국기업 등  다양한 분야의 클라이언트에게  MICE 솔루션 및 컨설팅 서비스 제공", icon: "🖼️" },
    { title: "행사 시스템 기획 및 운영", desc: "행사장을 구성하는 무대, 영상, 조명, 중계, 발표 시스템 등 여러 분야의 시스템을 통합적으로 관리 운영", icon: "🏆" },
  ];

  const steps = [
    { icon: "📞", title: "클라이언트 상담", desc: "행사 목적, 예산, 일정 등 방향성 협의" },
    { icon: "🧭", title: "컨셉 기획 & 제안", desc: "행사의 톤앤매너 및 운영 전략 제안" },
    { icon: "💼", title: "예산 산출 & 계약", desc: "투명한 견적 제공 및 실행 범위 확정" },
    { icon: "🎨", title: "디자인 & 컨텐츠 제작", desc: "무대 / 인쇄물 / 영상 등 행사 자산 제작" },
    { icon: "🏗️", title: "현장 구성 계획", desc: "운영 인력, 장비, 동선 계획 수립" },
    { icon: "🎤", title: "행사 운영 진행", desc: "리허설 → 본 행사 → 종료 관리" },
    { icon: "📷", title: "행사 기록 촬영", desc: "사진 및 스케치 영상 촬영" },
    { icon: "📊", title: "결과 보고 & 유지관리", desc: "결과 리포트 제공 및 후속 행사 지원" },
  ];

  const partners = [
    { logo: "/images/partners/kisa.png", url: "https://www.kisa.or.kr" },
    { logo: "/images/partners/kocca.png", url: "https://www.kocca.kr" },
    { logo: "/images/partners/iitp.png", url: "https://www.iitp.kr" },
    { logo: "/images/partners/nrc.png", url: "https://www.nrc.re.kr/" },
    { logo: "/images/partners/nst.png", url: "https://www.nst.re.kr/www/index.do" },
    { logo: "/images/partners/ifa.png", url: "https://www.ifa-berlin.com/" },
    { logo: "/images/partners/ces.png", url: "https://www.ces.tech" },
    { logo: "/images/partners/mwc.png", url: "https://www.mwcbarcelona.com" },
  ];

  const certs = [
    "/images/cert1.jpg",
    "/images/cert2.jpg",
    "/images/cert3.jpg",
    "/images/cert4.jpg",
  ];

  return (
    <div className="pt-5 bg-white text-gray-800">

      {/* Hero Section */}
      <section
        className="pt-10 h-screen flex items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
        <h2 className="text-5xl md:text-6xl Pretendard font-bold mb-8 text-gray-100 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
          국제회의 · 포럼 · 전시/박람회 · 시상식
        </h2>

        <p className="text-lg md:text-xl font-normal tracking-wide max-w-2xl mx-auto text-gray-100 [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
         플래너스컴퍼니는 국제회의, 이벤트, 홍보 분야 전문가들이 모인 회사입니다. 고객의 요청에 꼭 맞는 솔루션을 제공하며, 
          나아가 든든한 파트너가 되어 성공적인 행사를 만드는 것이 목표입니다.
        </p>

        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold font-bold text-center mb-16 text-gray-900">
            사업분야
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section with Modal */}
      <section className="py-5 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold font-bold text-center mb-16 text-gray-700">
            인증 및 공식 등록 현황
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-16">
            {certs.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition bg-white cursor-pointer"
                onClick={() => setSelectedCert(src)} // 클릭 시 모달 열기
              >
                <img src={src} alt={`Certification ${i + 1}`} className="w-full h-full object-cover"/>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-gray-700 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-lg text-gray-700 mb-4">공식 등록 및 인증</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>행사대행업 공식 등록 (서울시 / 공공기관 대상)</li>
                <li>나라장터 입찰 등록 기업 (조달청)</li>
                <li>경쟁입찰허가자격등록증 (조달청)</li>
                <li>직접생산확인증명서</li>
                <li>회의기획및대행서비스</li>
                <li>기타행사기획및대행서비스</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-700 mb-4">주요 협력 및 운영 이력</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>2023년 국내외 침해사고대응 초청교육 개최(7년 연속)</li>
                <li>2023년 연구회 설립 25주년 기념 2차 심포지엄</li>
                <li>2024년 콘텐츠진흥원 지원사업 설명회</li>
                <li>2024&2025년도 국외 전시 참관 및 세미나 개최(2년 연속)</li>
                <li>아세안 사이버 쉴드(ACS) 온라인 교육 부트캠프 운영 (2025년도)</li>
        
              </ul>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert}
              alt="Selected Certification"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-h-full max-w-full rounded-xl shadow-lg"
            />
          </div>
        )}
      </section>


      {/* Overseas Exhibition Section */}
      <section className="mb-32 py-10">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-16">Overseas Exhibition</h2>
        <div className="relative max-w-5xl mx-auto">
          <img src={worldMap} alt="World Map" className="w-full opacity-90"/>
          {[ 
            { top: "32%", left: "15%" , name:"Las Vegas" },
            { top: "34%", left: "47%", name:"Barcelona" },
            { top: "34%", left: "60%", name:"Baku" },
            { top: "27%", left: "50%", name:"Berlin" },
            { top: "42%", left: "63%", name:"Dubai" },
          ].map((city,index)=>(
            <motion.div
              key={index}
              initial={{ scale:0, opacity:0 }}
              whileInView={{ scale:1.2, opacity:1 }}
              transition={{ duration:0.5, delay:index*0.15 }}
              viewport={{ once:true }}
              className="absolute flex items-center"
              style={{ top: city.top, left: city.left }}
            >
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full absolute"></div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10 text-gray-700">
          {[
            { city: "Las Vegas", event: "Consumer Electronics Show (CES) 2025" },
            { city: "Barcelona", event: "Mobile World Congress 2025" },
            { city: "Baku", event: "United Nations Climate Change Conference (UNFCCC COP 29) 2024" },
            { city: "Berlin", event: "Internationale Funkausstellung 2024" },
            { city: "Dubai", event: "10th World Green Economy Summit, WGES 2024" },
          ].map((item,idx)=>(
            <motion.div
              key={idx}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.45, delay: idx*0.12 }}
              viewport={{ once:true }}
              className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold text-primary text-lg">{item.city}</p>
              <p className="text-sm mt-1">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">Our Partners</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
          {partners.map((partner, idx) => (
            <a key={idx} href={partner.url} target="_blank" rel="noopener noreferrer" className="group">
              <motion.div
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:0.5, delay: idx*0.1 }}
                className="p-4 bg-white rounded-xl flex flex-col items-center justify-center space-y-3 h-full shadow-lg ring-1 ring-gray-200
                           group-hover:shadow-xl group-hover:ring-blue-300 group-hover:scale-[1.05] group-hover:-translate-y-0.5
                           transition-all duration-300 ease-out cursor-pointer"
              >
                <div className="h-20 flex items-center mb-2">
                  <img src={partner.logo} alt={`${partner.name} Logo`} className="h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"/>
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">{partner.name}</p>
              </motion.div>
            </a>
          ))}
        </div>
      </section>

      

    </div>
  );
}




