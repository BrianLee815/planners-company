import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Award, Landmark, Globe } from "lucide-react";

const projects = [
  {
    name: "국외 전시 참관 및 세미나 개최",
    role: "현지 전시 참관 및 참가기업 혁신기술 세미나 지원",
    scale: "현지 파트너사 등 현지 네트워크 활용",
    year: "2024-2025",
    icon: Globe,
  },
  {
    name: "2023 연구회 설림 25주년 기념 제2차 심포지엄",
    role: "연사 섭외 / 진행 시나리오 / 운영 매뉴얼 구축",
    scale: "정부부처∙지방자치단체, 연구기관 ∙학계 관계자 등 약 300명 ",
    year: "2023",
    icon: Landmark,
  },
  {
    name: "한국콘텐츠진흥원 지원사업 설명회",
    role: "무대 연출 및 전체 오퍼레이션 운영",
    scale: "현장 / 온라인 하이브리드",
    year: "2024",
    icon: Award,
  },
];

export default function Projects() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbw3wsu6ac2YiYD9xmvS_XWEYWG9MSP87-7U1wD1Z2ZZEN3pVdrLczbk_mkbGv7mPY5mTw/exec") // ← 여기!! URL 붙여넣기
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log("이미지 불러오기 실패:", err));
  }, []);

  return (
    <div className="pt-32 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-12 text-center font-sans">
        Portfolio
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

      {/* ✅ 행사 갤러리 */}
      <h2 className="text-4xl font-bold text-gray-700 text-center mb-8">
        Gallery
      </h2>

      {images.length === 0 ? (
        <p className="text-center text-gray-400">이미지 불러오는 중...</p>
      ) : (
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
      )}
    </div>
  );
}


