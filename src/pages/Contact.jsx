import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  // Google Form 제출 URL
  const WEB_FORM_URL = import.meta.env.VITE_CONTACT_WEB_FORM_URL;

  // Google Form 질문 entry ID
  const ENTRY_IDS = {
    title: import.meta.env.VITE_CONTACT_ENTRY_TITLE,
    name: import.meta.env.VITE_CONTACT_ENTRY_NAME,
    email: import.meta.env.VITE_CONTACT_ENTRY_EMAIL,
    message: import.meta.env.VITE_CONTACT_ENTRY_MESSAGE,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
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
      setFormData({ title: "", name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("문의 제출 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 max-w-3xl mx-auto px-6 text-gray-700">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">문의 하기</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* ⭐ 제목을 맨 위로 이동 */}
        <div>
          <label className="block text-base font-medium mb-1">제목(Title)</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-base font-medium mb-1">이름(Name)</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-base font-medium mb-1">이메일(Email Address)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-base font-medium mb-1">문의 내용(Message)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-accent transition"
        >
          {loading ? "제출 중..." : "보내기"}
        </button>
      </form>
    </div>
  );
}

