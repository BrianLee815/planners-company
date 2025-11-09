// src/components/Projects.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Landmark, Globe, Megaphone, GraduationCap, Monitor } from "lucide-react";

const projects = [
  
  {
    name: "2023년 국내외 침해사고 대응 초청교육 개최",
    role: "교육 운영 기획 및 진행 / 참여자 관리 / 프로그램 운영 매뉴얼 구축",
    scale: "국내외 보안 전문가 및 기관 관계자 약 300명 대상",
    year: "2023",
    icon: Megaphone,
  },
  {
    name: "2023 연구회 설림 25주년 기념 제2차 심포지엄",
    role: "연사 섭외 / 진행 시나리오 / 운영 매뉴얼 구축",
    scale: "정부부처∙지방자치단체, 연구기관 ∙학계 관계자 등 약 300명 ",
    year: "2023",
    icon: Megaphone,
  },
  {
    name: "한국콘텐츠진흥원 지원사업 설명회",
    role: "무대 연출 및 전체 오퍼레이션 운영",
    scale: "현장 / 온라인 하이브리드",
    year: "2023",
    icon: Award,
  },
  {
    name: "국외 전시 참관 및 세미나 개최",
    role: "현지 전시 참관 및 참가기업 혁신기술 세미나 지원",
    scale: "현지 파트너사 등 현지 네트워크 활용",
    year: "2024-2025",
    icon: Globe,
  },  
  {
    name: "디지털 탄소중립 국내외 행사 지원 용역",
    role: "현지 전시 참관 및 참가기업 혁신기술 세미나 지원",
    scale: "현지 파트너사 등 현지 네트워크 활용",
    year: "2024",
    icon: Globe,
  },
  {
    name: "아세안 사이버 쉴드(ACS) 온라인 교육 부트캠프 운영",
    role: "운영 기획 및 교육 진행",
    scale: "참가자 200명, 온라인 전 아세안 국가 대상",
    year: "2025",
    icon: GraduationCap,
  }
,
];

export default function Projects() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbw3wsu6ac2YiYD9xmvS_XWEYWG9MSP87-7U1wD1Z2ZZEN3pVdrLczbk_mkbGv7mPY5mTw/exec")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log("이미지 불러오기 실패:", err));
  }, []);

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-12 text-center font-sans">
        포트폴리오
      </h1>

      {/* 기존 프로젝트 카드 */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-out bg-gradient-to-br from-white to-gray-100 p-8 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-5 right-5 w-14 h-14 flex items-center justify-center rounded-full bg-primary/20 text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
              <p.icon className="w-7 h-7" />
            </div>

            <p className="text-sm text-gray-500 mb-2 font-sans">{p.year}</p>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 font-sans">{p.name}</h3>
            <p className="text-sm text-primary font-medium mb-2 font-sans">{p.role}</p>
            <div className="h-[1px] bg-gray-300 my-2"></div>
            <p className="text-sm text-gray-700 font-sans">{p.scale}</p>
          </motion.div>
        ))}
      </div>

      {/* 행사 갤러리 */}
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
        행사 사진
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map(img => (
          <div key={img.id} className="text-center">
            <img src={img.url} className="rounded-lg shadow-md" />
            {img.description && (
              <p className="text-sm text-gray-400 mt-2">
                {img.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



