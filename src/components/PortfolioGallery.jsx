import { useEffect, useState } from "react";

export default function PortfolioGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/getDriveFiles") // Cloudflare Function 호출
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="mt-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
        행사 갤러리
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
