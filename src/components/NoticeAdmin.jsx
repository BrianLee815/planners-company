// src/components/NoticeAdmin.jsx
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";

export default function NoticeAdmin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const handleAddNotice = async () => {
    if (!title || !content) return;
    await addDoc(collection(db, "notices"), {
      title,
      content,
      createdAt: new Date(),
      author: auth.currentUser.email
    });
    setTitle("");
    setContent("");
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "notices", id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">공지사항 관리</h2>

      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleAddNotice} className="p-2 bg-green-500 text-white rounded mb-4">
        공지 등록
      </button>

      <ul>
        {notices.map((notice) => (
          <li key={notice.id} className="border p-2 mb-2">
            <h3 className="font-bold">{notice.title}</h3>
            <p>{notice.content}</p>
            {/* <p className="text-sm text-gray-500">{notice.author} / {notice.createdAt.toDateString?.() || notice.createdAt.toString()}</p> */}
            <button
              onClick={() => handleDelete(notice.id)}
              className="mt-2 p-1 bg-red-500 text-white rounded"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}



