import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const WEB_APP_URL = import.meta.env.VITE_CONTACT_WEB_APP_URL;
  const SECRET_KEY = import.meta.env.VITE_CONTACT_SECRET_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("Web App URL:", WEB_APP_URL);
  console.log("Secret Key:", SECRET_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ---------------------------
      // 수정 부분: preflight 회피를 위해 URLSearchParams 사용
      const formParams = new URLSearchParams();
      formParams.append("name", formData.name);
      formParams.append("email", formData.email);
      formParams.append("message", formData.message);
      formParams.append("secretKey", SECRET_KEY);

      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded" // 수정됨
        },
        body: formParams.toString() // 수정됨
      });
      // ---------------------------

      const data = await response.json();
      if (data.status === "success") {
        alert("문의가 제출되었습니다!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(`오류 발생: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("문의 제출 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 max-w-3xl mx-auto px-6 text-gray-200">
      <h1 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
        문의하기
      </h1>

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



