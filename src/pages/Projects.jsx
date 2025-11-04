import { motion } from "framer-motion";
import { Award, Landmark, Globe } from "lucide-react";

const projects = [
  {
    title: "국제 포럼 2023",
    desc: "국내·외 연사 초청 및 전체 프로그램 운영 총괄",
    icon: Globe,
  },
  {
    title: "공공기관 시상식",
    desc: "무대 연출, 시상 동선, 리허설 및 현장 운영",
    icon: Award,
  },
  {
    title: "산업 박람회",
    desc: "부스 기획, 참가사 관리, 전시장 동선 구성",
    icon: Landmark,
  },
];

export default function Projects() {
  const projects = [
    {
      name: "○○ 공공 포럼",
      role: "프로그램 기획 및 현장 운영 총괄",
      scale: "참가자 120명 수준",
      year: "2023",
    },
    {
      name: "○○ 기관 정책 세미나",
      role: "연사 섭외 / 진행 시나리오 / 운영 매뉴얼 구축",
      scale: "기관 VIP 및 관계자 대상",
      year: "2022",
    },
    {
      name: "○○ 우수사례 시상식",
      role: "무대 연출 및 전체 오퍼레이션 운영",
      scale: "현장 / 온라인 하이브리드",
      year: "2023",
    },
  ];

  return (
    <div className="pt-32 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-serif font-bold text-primary mb-12 text-center">
        프로젝트
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="border border-gray-200 p-8 bg-gray rounded-xl shadow-sm hover:shadow-md transition">
            <p className="text-sm text-gray-400 mb-1">{p.year}</p>
            <h3 className="text-lg font-semibold mb-2 text-gray-300">{p.name}</h3>
            <p className="text-sm text-primary font-medium mb-2">{p.role}</p>
            <p className="text-sm text-gray-200">{p.scale}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

