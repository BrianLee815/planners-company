import { Briefcase, Workflow, Users, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const steps = [
  {
    title: "Needs Analysis",
    desc: "Analyze the purpose of the event, key messages, and stakeholder structure, and set the planning direction.",
  },
  {
    title: "Program Design",
    desc: "Structure the event experience including session planning, speaker composition, operation method, and participant flow.",
  },
  {
    title: "On-site Execution",
    desc: "Manage staff allocation, stage, audio/video production, and on-site operational systems practically.",
  },
  {
    title: "Performance Evaluation & Reporting",
    desc: "Analyze satisfaction, performance indicators, and improvement points, and provide post-event reports.",
  },
];


  return (
    <div className="pt-32 max-w-6xl mx-auto px-6 bg-gray-100 text-black font-sans">

      {/* PROCESS */}
      <section className="mb-28">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8" style={{ marginBottom: "1cm" }}>
          Event Planning & Management Process
        </h2>
        

        {/* IMAGES */}
        <div className="flex justify-center mb-12 gap-1">
          <img src="/images/1.png" alt="프로세스 이미지 1" className="w-1/2 object-cover" />
          <img src="/images/2.png" alt="프로세스 이미지 2" className="w-1/2 object-cover" />
        </div>

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
          className="inline-block px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}



