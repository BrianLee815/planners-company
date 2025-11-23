import { Briefcase, Workflow, Users, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  

const primary = "#1b90e4ff";

const steps = [
  {
    title: (
      <span className="text-2xl">
        요구 분석 (Requirement Analysis)
      </span>
    ),
    desc: (
      <>
        <span style={{ color: primary }}>
          행사 추진 배경과 전략적 목표를 상세히 정의하고, 주요 이해관계자의 요구와 기대를 면밀히 분석합니다. 이를 바탕으로 핵심 KPI와 전략 방향을 수립하며, 예산, 일정, 리스크 요인을 종합적으로 검토하여 기획 전반에 적용 가능한 기준을 마련합니다. 또한, 예상되는 제약과 환경적 요인을 고려하여 의사결정의 근거를 강화합니다.
        </span>
        <br /><br />
        <span style={{ color: "black" }}>
          Define the event's background and strategic goals in detail, thoroughly analyzing the requirements and expectations of key stakeholders. Establish core KPIs and strategic directions while reviewing budget, schedule, and risk factors comprehensively. Consider potential constraints and environmental factors to reinforce decision-making criteria.
        </span>
      </>
    ),
  },
  {
    title: (
      <span className="text-2xl">
        프로그램 설계 (Program Design)
      </span>
    ),
    desc: (
      <>
        <span style={{ color: primary }}>
          전체 행사 구조와 세션 구성을 구체적으로 설계하며, 참여자의 이동 동선, 몰입 경험, 정보 전달 강도를 종합적으로 조율합니다. 연사와 패널 구성, 스토리 전개 방식, 상호 소통 포인트를 체계적으로 계획하여 메시지 전달의 자연스러운 흐름을 확보합니다. 또한, 예측 불가 상황을 대비한 대체 운영 시나리오를 마련합니다.
        </span>
        <br /><br />
        <span style={{ color: "black" }}>
          Design the overall event structure and session layout in detail, coordinating participant flow, engagement, and information delivery. Plan speaker and panel arrangements, story progression, and interaction points to ensure a natural flow of the event message. Prepare alternative operation scenarios to address unforeseen situations.
        </span>
      </>
    ),
  },
  {
    title: (
      <span className="text-2xl">
        현장 운영 (On-site Management)
      </span>
    ),
    desc: (
      <>
        <span style={{ color: primary }}>
          행사 전 과정의 실무 실행을 총괄하며, 스태프 운영, 무대·음향·영상 시스템, 타임라인 관리를 책임집니다. 리허설을 통해 운영 동선과 역할 체계를 검증하고, 돌발 상황에 대비한 커뮤니케이션 라인과 의사결정 프로토콜을 가동하여 행사가 매끄럽고 안정적으로 진행되도록 합니다.
        </span>
        <br /><br />
        <span style={{ color: "black" }}>
          Oversee the entire event execution, managing staff, stage, AV systems, and timelines. Verify operational flow and role assignments through rehearsals, and activate communication lines and decision-making protocols to ensure smooth and stable event execution.
        </span>
      </>
    ),
  },
  {
    title: (
      <span className="text-2xl">
        성과 평가 및 보고 (Evaluation & Reporting)
      </span>
    ),
    desc: (
      <>
        <span style={{ color: primary }}>
          행사 종료 후 참가자 만족도, KPI 달성도, 브랜드 및 조직에 미친 영향 등을 다각도로 분석합니다. 정량적·정성적 데이터를 통합하여 성과를 평가하고, 향후 개선 포인트와 전략적 제안이 포함된 상세 보고서를 제공합니다. 이를 통해 단기적 성과뿐 아니라 조직의 장기적 메시지 전략과 브랜딩 가치 확장을 지원합니다.
        </span>
        <br /><br />
        <span style={{ color: "black" }}>
          After the event, analyze participant satisfaction, KPI achievement, and the impact on the brand and organization from multiple perspectives. Integrate quantitative and qualitative data to evaluate performance and provide a detailed report with improvement points and strategic recommendations. This supports not only short-term results but also the long-term expansion of messaging strategy and branding value.
        </span>
      </>
    ),
  },
];









  return (
    <div className="pt-24 max-w-6xl mx-auto px-6 bg-gray-100 text-black font-sans">

      {/* PROCESS */}
      <section className="mb-28">
        {/* <h2 className="text-3xl font-bold text-gray-700 text-center mb-8" style={{ marginBottom: "1cm" }}>
          행사 기획 및 운영 프로세스
        </h2> */}
        

        {/* IMAGES */}
        <div className="flex justify-center mb-12 gap-1">
          <img src="/images/1.png" alt="프로세스 이미지 1" className="w-1/2 object-cover" />
          <img src="/images/2.jpg" alt="프로세스 이미지 2" className="w-1/2 object-cover" />
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



