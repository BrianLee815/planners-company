import { motion } from "framer-motion";
import { Award, Landmark, Globe } from "lucide-react";

const projects = [
  {
    name: "○○ 공공 포럼",
    role: "프로그램 기획 및 현장 운영 총괄",
    scale: "참가자 120명 수준",
    year: "2023",
    icon: Globe,
  },
  {
    name: "○○ 기관 정책 세미나",
    role: "연사 섭외 / 진행 시나리오 / 운영 매뉴얼 구축",
    scale: "기관 VIP 및 관계자 대상",
    year: "2022",
    icon: Landmark,
  },
  {
    name: "○○ 우수사례 시상식",
    role: "무대 연출 및 전체 오퍼레이션 운영",
    scale: "현장 / 온라인 하이브리드",
    year: "2023",
    icon: Award,
  },
];

const images = [
  "https://drive.google.com/uc?export=view&id=15fUg0hL_Cw1x6jfQgvKN52GHbSvbG8bO",
  "https://drive.google.com/uc?export=view&id=1XxYzExample2",
  "https://drive.google.com/uc?export=view&id=1XxYzExample3",
  // 추가 이미지 URL
];

export default function Projects() {
  return (
    <div className="pt-16 max-w-6xl mx-auto px-4 sm:px-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-8 text-center">
        Portfolio
      </h1>

      {/* Projects 카드 */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-out bg-gradient-to-br from-white to-gray-100 p-6 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-3 right-3 w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary text-xl group-hover:scale-110 transition-transform duration-300">
              <p.icon className="w-6 h-6" />
            </div>

            <p className="text-sm text-gray-500 mb-1">{p.year}</p>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{p.name}</h3>
            <p className="text-sm text-primary font-medium mb-1">{p.role}</p>
            <div className="h-[1px] bg-gray-300 my-1"></div>
            <p className="text-sm text-gray-700">{p.scale}</p>

            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* Portfolio 갤러리 */}
      <h2 className="text-3xl font-bold text-gray-700 text-center mt-12 mb-6">
        행사 갤러리
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {images.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`gallery-${i}`}
            className="rounded-lg shadow-sm w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}


