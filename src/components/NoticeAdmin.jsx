import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function NoticeAdmin() {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 공지사항 불러오기
  const fetchNotices = async () => {
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  // 공지 등록
  const addNotice = async () => {
    if (!title || !content) return alert("제목과 내용을 입력해주세요.");
    await addDoc(collection(db, "notices"), {
      title,
      content,
      createdAt: serverTimestamp()
    });
    setTitle("");
    setContent("");
    fetchNotices();
  };

  // 공지 삭제
  const deleteNotice = async (id) => {
    await deleteDoc(doc(db, "notices", id));
    fetchNotices();
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">공지사항 관리</h2>

      {/* 공지 등록 폼 */}
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />
      <button
        onClick={addNotice}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        공지 등록
      </button>

      {/* 공지 목록 */}
      <div>
        {notices.map(n => (
          <div key={n.id} className="border p-3 mb-2 rounded">
            <h3 className="font-bold">{n.title}</h3>
            <p>{n.content}</p>
            <button
              onClick={() => deleteNotice(n.id)}
              className="text-red-500 mt-1"
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


