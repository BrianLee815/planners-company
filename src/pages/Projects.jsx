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

export default function Projects() {
  return (
    <div className="pt-32 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-12 text-center font-sans">
        Portfolio
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-out bg-gradient-to-br from-white to-gray-100 p-8 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* 아이콘 */}
            <div className="absolute -top-5 right-5 w-14 h-14 flex items-center justify-center rounded-full bg-primary/20 text-primary text-2xl group-hover:scale-110 transition-transform duration-300">
              <p.icon className="w-7 h-7" />
            </div>

            {/* 연도 */}
            <p className="text-sm text-gray-500 mb-2 font-sans">{p.year}</p>

            {/* 프로젝트 이름 */}
            <h3 className="text-lg font-semibold mb-3 text-gray-800 font-sans">{p.name}</h3>

            {/* 역할 */}
            <p className="text-sm text-primary font-medium mb-2 font-sans">{p.role}</p>

            {/* 구분선 */}
            <div className="h-[1px] bg-gray-300 my-2"></div>

            {/* 규모 */}
            <p className="text-sm text-gray-700 font-sans">{p.scale}</p>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
        <PortfolioGallery />
      
    </div>
  );
}


