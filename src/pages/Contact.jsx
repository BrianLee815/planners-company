import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Google Form 제출 URL
  const WEB_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSd7ZqKAvJBaGlSGVPKykrvjEj9SZnFcghg_UhIRQ1ScuItRCA/formResponse";

  // Google Form 질문 entry ID
  const ENTRY_IDS = {
    name: "entry.841785272",
    email: "entry.1947142295",
    message: "entry.1543102402",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // fetch + no-cors 모드 사용 → 페이지 이동 없이 제출
      const formDataObj = new URLSearchParams();
      Object.keys(formData).forEach((key) => {
        formDataObj.append(ENTRY_IDS[key], formData[key]);
      });

      await fetch(WEB_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataObj,
      });

      alert("문의가 제출되었습니다!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("문의 제출 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 max-w-3xl mx-auto px-6 text-gray-200">
      <h1 className="text-3xl font-serif font-bold text-primary mb-8 text-center">문의하기</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">문의 내용</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition"
        >
          {loading ? "제출 중..." : "보내기"}
        </button>
      </form>
    </div>
  );
}

