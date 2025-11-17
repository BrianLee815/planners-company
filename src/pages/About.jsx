// About.jsx
import { motion } from "framer-motion"; 
import { CalendarCheck, MapPin, Mail, Phone, Users } from "lucide-react"; 

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
    { title: "기술개발", // '기획본부'와 중복되어 '기술개발'로 임의 변경
      children : [
        {title: "VR개발"},
        {title: "웹 솔루션 개발"},
        {title: "UI/UX 디자인 및 개발"},
        {title: "서버 유지 관리"}
      ]
    },
  ],
};

// 🌟🌟🌟 수정된 연혁 데이터: 시점 압축 및 성과 강조 🌟🌟🌟
const historyEvents = [
  { year: "2023 FOUNDATION", event: "사단법인 한국MICE협회 회원사 가입 및 회의/기타 행사 직접생산확인증명 자격 취득 (견고한 기반 구축)" },
  { year: "2023 ACHIEVEMENT", event: "연구개발전담부서 설립, 대형 공공 및 연구기관 행사(KrCERT/CC, 연구회 심포지엄 등) 운영 사업 수주" }, 
  { year: "2024 EXPANSION", event: "디지털 탄소중립 행사, 한국콘텐츠진흥원 지원사업 등 사업 영역 확장 및 국외 전시 참관(글로벌 역량 강화)" }, 
  { year: "2025 VISION", event: "아세안 사이버 쉴드 온라인 교육 부트캠프 운영 등 국제 행사 및 기술 기반 솔루션 프로젝트 집중" }, 
];


// 공통 애니메이션 variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


export default function About() {
  return (
    <div className="pt-24 w-full px-4 sm:px-6 bg-white text-black leading-relaxed font-sans text-left">

      {/* 회사 소개 (유지) */}
      <section className="mb-20 text-center">
        <p className="text-lg md:max-w-3xl mx-auto">
          플래너스 컴퍼니는 국제회의, 포럼, 박람회등 다양한 컨벤션 행사를 
          전문적으로 기획·운영하는 기업입니다. 
          우리는 품격 있는 행사 경험과 완성도 높은 운영을 통해 
          고객의 목적에 최적화된 솔루션을 제공합니다.
        </p>
      </section>

      {/* 1. 조직도 (Organization) 섹션 강화 */}
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">조직 구성</h2>
          <p className="text-gray-500 mt-2">Organization Structure</p>
        </div>
        
        {/* 🌟🌟🌟 추가: 짧은 연차 극복을 위한 전문가 강조 문구 🌟🌟🌟 */}
        <motion.p 
            className="text-center text-lg text-blue-600 font-semibold mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
            플래너스 컴퍼니는 업계 **평균 합산 10년 이상의 경력을 가진 5인의 전문가**들이<br/>
            모여 설립한, 경험과 민첩성을 모두 갖춘 전문 기업입니다.
        </motion.p>
        {/* 🌟🌟🌟 추가 끝 🌟🌟🌟 */}


        <motion.div 
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* 대표이사 */}
          <motion.div 
            className="px-8 py-4 border border-gray-300 bg-blue-600 text-white rounded-lg shadow-lg font-semibold text-lg mb-10 relative"
            variants={itemVariants}
          >
            {organization.title}
            {/* 연결선 (가상 요소로 CSS 처리하면 더 좋지만, Tailwind에서 간단 구현) */}
            <div className="absolute w-0.5 h-6 bg-gray-400 -bottom-6 left-1/2 transform -translate-x-1/2"></div>
          </motion.div>

          {/* 각 부서 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
            {organization.children.map((dept, i) => (
              <motion.div
                key={i}
                className="px-6 py-4 border border-gray-200 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group relative overflow-hidden"
                variants={itemVariants}
              >
                {/* 마우스 오버 시 강조되는 배경 */}
                <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <Users className="w-6 h-6 text-blue-500 mb-3" />
                  <div className="font-extrabold text-xl text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{dept.title}</div>
                  
                  {dept.children && (
                    <ul className="list-none text-sm space-y-1 mt-4 text-gray-600">
                      {dept.children.map((sub, j) => (
                        // 하위 업무도 호버 시 강조
                        <li key={j} className="flex items-start before:content-['•'] before:text-blue-500 before:mr-2">
                          {sub.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 2. 연혁 (History) 섹션 강화: 인터랙티브 타임라인 (수정 반영) */}
      {/* 2. 연혁 (History) 섹션 강화: 중앙 라인 가까이 배치 */}
<section className="py-16">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
    핵심 성과 및 성장 로드맵
  </h2>
  <p className="text-gray-500 text-center mb-12">
    Our Milestones: Accelerating Growth in the Event Industry
  </p>

  <motion.ul 
    className="relative max-w-3xl mx-auto space-y-12 before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:h-full before:bg-gray-200"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={containerVariants}
  >
    {historyEvents.map((item, index) => (
      <motion.li 
        key={index} 
        className={`relative flex items-center w-full ${index % 2 === 0 ? 'justify-start md:pr-6' : 'justify-end md:pl-6'}`}
        variants={itemVariants}
      >
        {/* 타임라인 원형 마커 */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 z-10 ring-8 ring-white"></div>

        <div 
        
  className={`p-4 rounded-lg shadow-lg bg-white border border-gray-100 w-full md:w-[45%] transition-all duration-300 hover:shadow-xl hover:border-blue-300 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
>
  <div className={`font-extrabold text-xl mb-1 ${index % 2 === 0 ? 'text-gray-800' : 'text-blue-600'}`}>
    {item.year}
  </div>
  <p className="text-sm text-gray-700">{item.event}</p>
</div>

      </motion.li>
    ))}
  </motion.ul>
</section>


      {/* 위치 (Directions) 섹션 강화 */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          찾아오시는 길
        </h2>

        <div className="md:max-w-5xl mx-auto md:flex md:items-start md:gap-10">
          {/* 좌측: 지도 (유지) */}
          <motion.div 
            className="md:w-1/2 w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl mt-6 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.013537166538!2d127.0160173952164!3d37.48400691853165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca13e2fcf9dbb%3A0x41f2f5de65091fbc!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDshJzstIjspJHslZnroZwy6ri4IDM1!5e0!3m2!1sko!2skr!4v1762410876329!5m2!1sko!2skr"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* 우측: 연락처 (아이콘 추가) */}
          <motion.ul 
            className="md:w-1/2 space-y-5 text-gray-700 text-base leading-relaxed p-6 md:p-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold text-black text-lg block">주소</span>
                서울특별시 서초구 서초중앙로2길 35 210호(06721)
                <span className="text-gray-500 block mt-1">210, 35, Seochojungang-ro 2-gil, Seocho-gu, Seoul</span>
              </div>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
              <div>
                <span className="font-bold text-black text-lg block">전화번호</span>
                02-6952-0140
              </div>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
              <div>
                <span className="font-bold text-black text-lg block">이메일</span>
                plan1@plannerscom.kr
              </div>
            </li>
          </motion.ul>
        </div>
      </section>
    </div>
  );
}



