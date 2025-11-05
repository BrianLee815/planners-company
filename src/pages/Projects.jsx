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
      <h1 className="text-4xl font-serif font-bold text-primary mb-12 text-center">
        프로젝트
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="border border-gray-700 p-8 bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-400 mb-2">{p.year}</p>
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
              <p.icon className="w-5 h-5 mr-2 text-primary" />
              {p.name}
            </h3>
            <p className="text-sm text-primary font-medium mb-2">{p.role}</p>
            <p className="text-sm text-gray-300">{p.scale}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

