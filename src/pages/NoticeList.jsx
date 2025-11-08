import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function NoticeList() {
  const [notices, setNotices] = useState([]);
  const [openId, setOpenId] = useState(null); // ✅ 펼쳐진 공지 ID 상태

  useEffect(() => {
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const toggleNotice = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Notice</h2>

      <ul className="space-y-4"> {/* ✅ 공지 간격 */}
        {notices.map((notice) => (
          <li 
            key={notice.id} 
            className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow transition text-left"
          >
            {/* 제목 버튼 */}
            {/* 제목 버튼 */}
          <button 
            onClick={() => toggleNotice(notice.id)}
            className="w-full flex justify-between items-center text-left"
          >
          <span className="font-semibold text-lg text-gray-800">{notice.title}</span>
  
          {/* 화살표 */}
          <svg 
            className={`w-5 h-5 transition-transform ${openId === notice.id ? "rotate-180" : ""}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>


            {/* 내용 (펼칠 때만 보임) */}
            {openId === notice.id && (
              <p className="mt-3 text-gray-700 leading-relaxed whitespace-pre-line">
                {notice.content}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}



