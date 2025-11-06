import { Briefcase, Workflow, Users, ClipboardCheck, Building2, Award, GalleryHorizontalEnd } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const fields = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "공공기관 포럼",
      desc: "정책 메시지 전달과 이해 관계자 참여 확대를 위한 포럼 기획 및 실행",
    },
    {
      icon: <GalleryHorizontalEnd className="w-8 h-8 text-primary" />,
      title: "전시·박람회",
      desc: "콘텐츠 동선 설계, 부스 운영, 참관객 경험을 고려한 공간 운영",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "시상식·어워즈",
      desc: "무대 연출, 시나리오 연계, 시상 동선 등 품격 있는 시상식 운영",
    },
  ];

  const steps = [
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "Needs 분석",
      desc: "행사 목적, 핵심 메시지, 이해 관계자 구조를 분석하고 기획 방향을 설정합니다.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "프로그램 설계",
      desc: "세션 기획, 연사 구성, 운영 방식, 참가자 동선 등 행사 경험을 구조화합니다.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "현장 운영 실행",
      desc: "스텝 구성, 무대·음향·영상 연출, 현장 관리 체계를 실무적으로 운영합니다.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
      title: "성과 평가 및 보고",
      desc: "만족도, 성과 지표, 개선점 등을 분석해 사후 보고서 형태로 제공합니다.",
    },
  ];

  return (
    <div className="pt-32 max-w-6xl mx-auto px-6 bg-gray-200 text-black font-sans">

      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold text-gray-700 mb-6">
          서비스 분야
        </h1>
        <p className="max-w-3xl mx-auto leading-relaxed">
          플래너스 컴퍼니는 행사 목적과 대상에 맞춘 전략적 기획을 기반으로  
          실행력 있는 운영 솔루션을 제공합니다.
        </p>
      </section>

      {/* SERVICE CARDS */}
      <section className="grid md:grid-cols-3 gap-8 mb-24">
        {fields.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 p-10 rounded-xl shadow-md hover:shadow-lg transition text-center"
          >
            <div className="mb-4 flex justify-center">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* PROCESS */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-16">
          행사 기획 및 운영 프로세스
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="text-center border border-gray-200 bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mx-auto mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-32">
        <a
          href="/contact"
          className="inline-block px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
        >
          문의 상담하기
        </a>
      </section>
    </div>
  );
}

