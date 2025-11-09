import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  // ---------------- 목록 화면 ----------------
  if (!selectedNotice) {
    return (
      <div className="pt-24 max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-16 text-center">공지사항</h2>

        <div className="border rounded-md overflow-hidden shadow-sm">
          {notices.map((notice) => {
            const createdAt = notice.createdAt?.toDate();
            const dateStr = createdAt
              ? `${createdAt.getFullYear()}-${createdAt.getMonth() + 1}-${createdAt.getDate()}`
              : "";

            return (
              <div
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className="border-b last:border-b-0 p-4 hover:bg-gray-50 cursor-pointer flex items-center gap-4"
              >
                {/* 날짜 왼쪽 */}
                <span className="text-sm text-gray-500 min-w-[90px]">{dateStr}</span>
                <span className="font-medium text-gray-800">{notice.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------------- 상세 화면 ----------------
  const createdAt = selectedNotice.createdAt?.toDate();
  const dateStr = createdAt
    ? `${createdAt.getFullYear()}-${createdAt.getMonth() + 1}-${createdAt.getDate()}`
    : "";

  // ---------------- 상세 화면 ----------------
return (
  <div className="pt-24 max-w-4xl mx-auto p-6">
  <div className="relative mb-12">
    {/* 날짜는 왼쪽, 아래쪽으로 살짝 이동 */}
    <span className="absolute left-0 text-sm text-gray-500 top-8">{dateStr}</span>

    {/* 제목은 가운데 */}
    <h2 className="text-2xl font-bold text-center">{selectedNotice.title}</h2>
  </div>

  <div className="bg-gray-50 p-6 rounded whitespace-pre-line text-gray-700 border">
    {selectedNotice.content}
  </div>
  <button
    onClick={() => setSelectedNotice(null)}
    className="mt-10 text-blue-600 mb-4"
  >
    ← 목록으로 돌아가기
  </button>
</div>
);

}







