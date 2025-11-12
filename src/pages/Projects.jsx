// src/components/Projects.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Globe, Megaphone, GraduationCap } from "lucide-react";
// import Masonry from "react-masonry-css"; // Masonry 제거

// --- 프로젝트 데이터 ---
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
  },
];

// 기존 Masonry 반응형 설정은 더 이상 사용하지 않습니다.
// const breakpointColumnsObj = {
//   default: 3, 
//   1100: 2,    
//   700: 1,     
// };

export default function Projects() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbw3wsu6ac2YiYD9xmvS_XWEYWG9MSP87-7U1wD1Z2ZZEN3pVdrLczbk_mkbGv7mPY5mTw/exec"
    )
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log("이미지 불러오기 실패:", err));
  }, []);

  // 모든 이미지(로컬 6장 + API로 불러온 이미지)를 하나의 배열로 합칩니다.
  const allImages = [
    { src: "/images/1.png" },
    { src: "/images/2.jpg" },
    { src: "/images/3.jpg" },
    { src: "/images/4.jpg" },
    { src: "/images/5.jpg" },
    { src: "/images/6.jpg" },
    { src: "/images/7.jpg" },
    { src: "/images/8.jpg" },
    ...images.map(img => ({ src: img.url, description: img.description })),
  ];

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      {/* --- 1️⃣ 프로젝트 카드 --- */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
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
            <h3 className="text-sm font-semibold mb-3 text-gray-800 font-sans">{p.name}</h3>
            <p className="text-sm text-primary font-medium mb-2 font-sans">{p.role}</p>
            <div className="h-[1px] bg-gray-300 my-2"></div>
            <p className="text-sm text-gray-700 font-sans">{p.scale}</p>
          </motion.div>
        ))}
      </div>

      {/* --- 2️⃣ & 3️⃣ 모든 이미지 (연결해서 출력) --- */}
      <div className="flex justify-center flex-wrap mb-12 gap-2">
        {allImages.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer w-[240px] h-[240px]"
            onClick={() => window.open(img.src, "_blank")}
          >
            <img
              src={img.src}
              alt={img.description || `프로세스 이미지 ${i + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            {img.description && (
              <p className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-xs text-center py-1">
                {img.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

