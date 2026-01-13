// src/components/Projects.jsx
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Globe, Megaphone, GraduationCap, X } from "lucide-react";

// --- 프로젝트 데이터 ---
const projects = [
  {
    name: "2023년 국내외 침해사고 대응 초청교육 개최",
    role: "교육 운영 기획 및 진행 / 참여자 관리 / 프로그램 운영 매뉴얼 구축",
    scale: "국내외 보안 전문가 및 기관 관계자 약 300명 대상",
    year: "2023",
    icon: Megaphone,
  },
  {
    name: "2023 연구회 설림 25주년 기념 제2차 심포지엄",
    role: "연사 섭외 / 진행 시나리오 / 운영 매뉴얼 구축",
    scale: "정부부처∙지방자치단체, 연구기관 ∙학계 관계자 등 약 300명 ",
    year: "2023",
    icon: Megaphone,
  },
  {
    name: "한국콘텐츠진흥원 지원사업 설명회",
    role: "무대 연출 및 전체 오퍼레이션 운영",
    scale: "현장 / 온라인 하이브리드",
    year: "2023",
    icon: Award,
  },
  {
    name: "국외 전시 참관 및 세미나 개최",
    role: "현지 전시 참관 및 참가기업 혁신기술 세미나 지원",
    scale: "현지 파트너사 등 현지 네트워크 활용",
    year: "2024-2025",
    icon: Globe,
  },
  {
    name: "디지털 탄소중립 국내외 행사 지원 용역",
    role: "현지 전시 참관 및 참가기업 혁신기술 세미나 지원",
    scale: "현지 파트너사 등 현지 네트워크 활용",
    year: "2024",
    icon: Globe,
  },
  {
    name: "아세안 사이버 쉴드(ACS) 온라인 교육 부트캠프 운영",
    role: "운영 기획 및 교육 진행",
    scale: "참가자 200명, 온라인 전 아세안 국가 대상",
    year: "2025",
    icon: GraduationCap,
  },
];

// 🖼️ 이미지 모달
function ImageModal({ image, onClose }) {
  useEffect(() => {
    const handleKeydown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [onClose]);

  if (!image) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-w-4xl max-h-[90vh] w-full relative bg-white rounded-lg shadow-2xl"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.description || "확대된 이미지"}
          className="w-full h-auto max-h-[80vh] object-contain rounded-t-lg"
          loading="eager"
        />

        <button
          className="absolute top-3 right-3 p-2 rounded-full bg-white/30 text-white hover:bg-white/50"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {image.description && (
          <p className="p-3 text-center text-sm text-gray-700 bg-gray-100 rounded-b-lg">
            {image.description}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbw3wsu6ac2YiYD9xmvS_XWEYWG9MSP87-7U1wD1Z2ZZEN3pVdrLczbk_mkbGv7mPY5mTw/exec"
    )
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.log("이미지 불러오기 실패:", err));
  }, []);

  const allImages = [
    { src: "/images/0.jpg" },
    { src: "/images/1.jpg" },
    { src: "/images/2.jpg" },
    { src: "/images/3.jpg" },
    { src: "/images/4.jpg" },
    { src: "/images/5.jpg" },
    { src: "/images/6.jpg" },
    { src: "/images/7.jpg" },
    ...images.map((img) => ({ src: img.url, description: img.description })),
  ];

  const handleImageClick = useCallback((image) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6">
      {/* 프로젝트 카드 */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-100 p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-5 right-5 w-14 h-14 flex items-center justify-center rounded-full bg-primary/20 text-primary">
              <p.icon className="w-7 h-7" />
            </div>

            <p className="text-sm text-gray-500 mb-2">{p.year}</p>
            <h3 className="text-sm font-semibold mb-3">{p.name}</h3>
            <p className="text-sm text-primary font-medium mb-2">{p.role}</p>
            <div className="h-px bg-gray-300 my-2" />
            <p className="text-sm text-gray-700">{p.scale}</p>
          </motion.div>
        ))}
      </div>

      {/* 이미지 갤러리 */}
      <div className="flex justify-center flex-wrap mb-12 gap-2">
        {allImages.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-[240px] h-[240px] bg-gray-200"
            onClick={() => handleImageClick(img)}
          >
            <img
              src={img.src}
              alt={img.description || `프로세스 이미지 ${i + 1}`}
              loading={i < 6 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {img.description && (
              <p className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-xs text-center py-1">
                {img.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
