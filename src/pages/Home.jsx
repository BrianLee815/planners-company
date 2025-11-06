import worldMap from "../assets/world-map.svg";
import { motion } from "framer-motion";


export default function Home() {
  const services = [
    {
      title: "공공기관 포럼",
      desc: "정부 및 공공기관이 주최하는 주요 정책 포럼 & 대담 기획",
      icon: "🏛️",
    },
    {
      title: "전시 / 박람회",
      desc: "산업전, 지역특화 박람회, 국제 교류 전시 프로그램 운영",
      icon: "🖼️",
    },
    {
      title: "어워즈 / 시상식",
      desc: "브랜드 시상식, 공공/민간 어워즈, 연례 행사 기획",
      icon: "🏆",
    },
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

  return (
    <div className="pt-5 bg-white text-gray-800">

      {/* Hero Section */}
      <section
        className="pt-10 h-screen flex items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-gray-900">
            국제회의 · 포럼 · 전시/박람회 · 시상식
          </h2>
          <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto text-gray-700">
            플래너스 컴퍼니는 전문성과 창의성을 바탕으로 품격 있는 행사 경험을 제공합니다.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-gray-900">
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

      {/* Process Section */}
      {/* Certification Section */}
<section className="py-28 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-gray-900">
      인증 및 공식 등록 현황
    </h2>

    {/* 이미지 4장 */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      {[
        "/images/cert1.jpg",
        "/images/cert2.jpg",
        "/images/cert3.jpg",
        "/images/cert4.jpg",
      ].map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition bg-white"
        >
          <img
            src={src}
            alt={`Certification ${i + 1}`}
            className="w-full h-auto object-contain p-4"
          />
        </motion.div>
      ))}
    </div>

    {/* 리스트 영역 */}
    <div className="grid md:grid-cols-2 gap-12 text-gray-700 text-sm leading-relaxed">

      <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-4">공식 등록 및 인증</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>행사대행업 공식 등록 (서울시 / 공공기관 대상)</li>
          <li>나라장터 입찰 등록 기업 (조달청)</li>
          <li>MICE·컨벤션 서비스 인증 보유</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-4">주요 협력 및 운영 이력</h3>
        <ul className="space-y-2 list-disc pl-5">
          <li>중앙정부 및 지자체 정책 포럼 운영</li>
          <li>국제 전시 / 산업 박람회 PM & 운영 진행</li>
          <li>기업 어워즈 / 시상식 / 연례 행사 총괄 기획</li>
        </ul>
      </div>

    </div>
  </div>
</section>
<section className="mb-32">
  <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
    Overseas Exhibition
  </h2>

  {/* 지도 + 표시 */}
  <div className="relative max-w-5xl mx-auto">
    <img
      src={worldMap}
      alt="World Map"
      className="w-full opacity-90"
    />

    {/* 행사 지역 점 표시 (좌표는 필요한 만큼 추가 가능) */}
    {[
      { top: "32%", left: "15%", name: "Las Vegas" },
      { top: "34%", left: "47%", name: "Barcelona" },
      { top: "34%", left: "60%", name: "Baku" },
      { top: "27%", left: "50%", name: "Berlin" },
      { top: "42%", left: "63%", name: "Dubai" },
    ].map((city, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
        className="absolute flex items-center"
        style={{ top: city.top, left: city.left }}
      >
        <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
        <div className="w-3 h-3 bg-primary rounded-full absolute"></div>
      </motion.div>
    ))}
  </div>

  {/* 도시 / 행사 리스트 */}
  <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10 text-gray-700">
    {[
      { city: "Las Vegas", event: "Consumer Electronics Show (CES) 2025" },
      { city: "Barcelona", event: "Mobile World Congress 2025" },
      { city: "Baku", event: "United Nations Climate Change Conference (UNFCCC COP 29) 2024" },
      { city: "Berlin", event: "Internationale Funkausstellung 2024" },
      { city: "Dubai", event: "10th World Green Economy Summit, WGES 2024" },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: idx * 0.12 }}
        viewport={{ once: true }}
        className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
      >
        <p className="font-semibold text-primary text-lg">{item.city}</p>
        <p className="text-sm mt-1">{item.event}</p>
      </motion.div>
    ))}
  </div>
</section>
<section className="py-24 bg-white">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
    Our Partners
  </h2>

  <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      "Samsung",
      "LG",
      "Hyundai Motor Group",
      "SK Innovation",
      "CJ Group",
      "Kakao",
      "Naver",
      "Lotte Group",
      "POSCO",
      "Doosan",
      "Shinhan Bank",
      "KB Kookmin Bank",
    ].map((company, idx) => (
      <div
        key={idx}
        className="border border-gray-300 rounded-xl px-4 py-6 text-center text-gray-700 text-sm font-medium bg-white shadow-sm hover:shadow-md hover:border-gray-500 transition cursor-default"
      >
        {company}
      </div>
    ))}
  </div>
</section>





    </div>
  );
}



