import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export default function NoticeList() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchNotices();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">공지사항</h2>
      {notices.length === 0 ? (
        <p>등록된 공지가 없습니다.</p>
      ) : (
        notices.map(n => (
          <div key={n.id} className="border p-4 mb-2 rounded">
            <h3 className="font-semibold text-lg">{n.title}</h3>
            <p className="text-gray-700 mt-1">{n.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

