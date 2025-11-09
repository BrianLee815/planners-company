// src/components/NoticeAdmin.jsx
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

export default function NoticeAdmin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [notices, setNotices] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const handleAddOrUpdateNotice = async () => {
    if (!title || !content) return;

    if (editingId) {
      const noticeRef = doc(db, "notices", editingId);
      await updateDoc(noticeRef, { title, content, fileUrl });
      setEditingId(null);
    } else {
      await addDoc(collection(db, "notices"), {
        title,
        content,
        createdAt: new Date(),
        author: auth.currentUser.email,
        fileUrl
      });
    }

    setTitle("");
    setContent("");
    setFileUrl("");
  };

  const handleEdit = (notice) => {
    setEditingId(notice.id);
    setTitle(notice.title);
    setContent(notice.content);
    setFileUrl(notice.fileUrl || "");
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "notices", id));
    if (editingId === id) {
      setEditingId(null);
      setTitle("");
      setContent("");
      setFileUrl("");
    }
  };

  // ✅ 새 탭으로 HTML 파일 열기
  const handleGoToGuide = () => {
    window.open("/Adminguide.html", "_blank"); // public 폴더에 HTML 파일 위치
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* 관리방법 버튼 */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleGoToGuide}
          className="p-2 text-white rounded bg-gray-500 hover:bg-gray-600"
        >
          관리방법
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">공지사항 관리</h2>

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
      <input
        type="text"
        placeholder="첨부 파일 링크 (Google Drive)"
        value={fileUrl}
        onChange={(e) => setFileUrl(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <button
        onClick={handleAddOrUpdateNotice}
        className={`p-2 text-white rounded mb-4 w-1/6 ${
          editingId ? "bg-green-500" : "bg-blue-500"
        }`}
      >
        {editingId ? "공지 수정" : "공지 등록"}
      </button>

      <ul>
        {notices.map((notice) => (
          <li
            key={notice.id}
            className="border p-4 mb-4 rounded bg-white shadow-sm flex flex-col items-center text-center"
          >
            <h3 className="font-bold text-lg mb-2">{notice.title}</h3>
            <p className="mb-2">{notice.content}</p>
            {notice.fileUrl && (
              <a
                href={notice.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mb-2"
              >
                첨부 파일 보기
              </a>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(notice)}
                className="p-2 bg-green-500 text-white rounded"
              >
                수정
              </button>
              <button
                onClick={() => handleDelete(notice.id)}
                className="p-2 bg-red-500 text-white rounded"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}







