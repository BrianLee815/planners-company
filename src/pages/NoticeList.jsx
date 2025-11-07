// src/pages/NoticeList.jsx
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function NoticeList() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">공지사항</h2>
      <ul>
        {notices.map((notice) => (
          <li key={notice.id} className="border p-2 mb-2">
            <h3 className="font-bold">{notice.title}</h3>
            <p>{notice.content}</p>
            <p className="text-sm text-gray-500">{notice.author} / {notice.createdAt.toDateString?.() || notice.createdAt.toString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


