import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  return (
    <div className="pt-32 max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">공지사항</h2>

      <div className="border rounded-md overflow-hidden shadow-sm">
        {notices.map((notice) => {
          const createdAt = notice.createdAt?.toDate();
          const dateStr = createdAt
            ? `${createdAt.getFullYear()}-${createdAt.getMonth() + 1}-${createdAt.getDate()}`
            : "";

          return (
            <div key={notice.id} className="border-b last:border-b-0 flex flex-col md:flex-row items-start md:items-center">
              {/* 제목 및 날짜 */}
              <div className="md:w-1/3 p-3 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-sm text-gray-500">{dateStr}</div>
                <div className="font-medium text-gray-800 mt-1">{notice.title}</div>
              </div>

              {/* 내용 항상 표시 */}
              <div className="md:w-2/3 p-3 bg-gray-50 text-gray-700 whitespace-pre-line">
                {notice.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}





