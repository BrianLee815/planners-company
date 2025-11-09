import { Briefcase, Workflow, Users, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  

const primary = "#1b90e4ff";

const steps = [
  {
    title: "요구 분석",
    desc: (
      <>
        행사 추진의 배경과 전략적 목표를 명확히 정의하고, 주요{" "}
        <span style={{ color: primary, fontWeight: 600 }}>이해관계자</span> 간의 요구와 기대 수준을
        체계적으로 파악합니다. 이를 통해 전달해야 할 메시지의 본질을 도출하고, 행사 성격에 부합하는
        핵심 방향과 성공 지표(KPI)를 설정합니다. 더불어 환경적 제약, 예산 및 일정 조건, 리스크 요인을
        종합적으로 진단하여 기획 단계 전반에 걸친 전략적 의사결정 기준을 마련합니다.
      </>
    ),
  },
  {
    title: "프로그램 설계",
    desc: (
      <>
        전체 행사 구조와 <span style={{ color: primary, fontWeight: 600 }}>세션 구성</span>을 설계하며,
        참여자의 이동 동선, 몰입 경험, 정보 전달 강도 등 다양한 경험 요소를 균형 있게 조율합니다. 
        연사/패널 구성, 무대 및 스토리 전개 방식, 상호 소통 포인트를 정교하게 설계하여 행사 메시지가
        자연스럽게 전달되는 흐름을 구축합니다. 이와 더불어 대체 운영 시나리오 또한 준비하여 예측 불가
        상황에서도 안정적인 진행이 유지되도록 합니다.
      </>
    ),
  },
  {
    title: "현장 운영",
    desc: (
      <>
        행사 전 과정의 실무 실행력을 책임지는 단계로,{" "}
        <span style={{ color: primary, fontWeight: 600 }}>스태프 운영</span>, 무대·음향·영상(AV) 시스템,
        타임라인 컨트롤을 총괄합니다. 리허설을 통해 운영 동선과 역할 체계를 사전에 검증하고, 현장 진행 중
        발생할 수 있는 변수에 대비한 커뮤니케이션 라인과 의사결정 프로토콜을 가동합니다. 결과적으로 행사의
        메시지와 분위기를 방해하지 않으면서 매끄럽고 안정적인 진행을 보장합니다.
      </>
    ),
  },
  {
    title: "성과 평가 및 보고",
    desc: (
      <>
        행사 종료 후 참가자 <span style={{ color: primary, fontWeight: 600 }}>만족도</span>, KPI 달성도,
        브랜드/조직에 미친 영향 등을 다각도로 분석합니다. 정량·정성 데이터를 통합하여 성과를 평가하고,
        향후 발전 방향과 개선 포인트를 명확하게 제시하는 사후보고서를 제공합니다. 이를 통해 단일 행사에
        머물지 않고, 조직의 지속적 메시지 전략·브랜딩·관계 형성 관점에서 장기적인 가치가 확장될 수 있도록
        전략적 인사이트를 제공합니다.
      </>
    ),
  },
];






  return (
    <div className="pt-32 max-w-6xl mx-auto px-6 bg-gray-100 text-black font-sans">

      {/* PROCESS */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8" style={{ marginBottom: "1cm" }}>
          행사 기획 및 운영 프로세스
        </h2>
        

        {/* IMAGES */}
        <div className="flex justify-center mb-12 gap-1">
          <img src="/images/1.png" alt="프로세스 이미지 1" className="w-1/2 object-cover" />
          <img src="/images/2.png" alt="프로세스 이미지 2" className="w-1/2 object-cover" />
        </div>

        <div className="grid grid-cols-1 gap-6">
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
          className="inline-block px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
        >
          문의하기
        </a>
      </section>
    </div>
  );
}



