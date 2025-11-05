import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "공공기관 포럼",
      desc: "정부 및 공공기관이 주최하는 주요 정책 포럼 & 대담 기획",
      icon: "🏛️",
    },
    {
      title: "전시 / 박람회",
      desc: "산업전, 지역특화 박람회, 국제 교류 전시 프로그램 운영",
      icon: "🖼️",
    },
    {
      title: "어워즈 / 시상식",
      desc: "브랜드 시상식, 공공/민간 어워즈, 연례 행사 기획",
      icon: "🏆",
    },
  ];

  return (
    <div className="pt-5">
      {/* Hero Section */}
<section
  className="pt-10 h-screen flex items-center justify-center text-center px-6
             bg-cover bg-center bg-gradient-to-b from-black/60 to-black/80 bg-blend-overlay text-white"
  style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
>
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg">
      국제회의 · 포럼 · 전시/박람회 · 시상식
    </h2>
    <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
      플래너스 컴퍼니는 전문성과 창의성을 바탕으로  
      품격 있는 행사 경험을 제공합니다.
    </p>
  </motion.div>
</section>





      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-16">
            사업분야
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800/70 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


