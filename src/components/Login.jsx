import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import NoticeAdmin from "./NoticeAdmin.jsx";

export default function Login({ user, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 상태 체크
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      onLogin(currentUser); // App.jsx 상태 업데이트
    });
    return unsubscribe;
  }, [onLogin]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("로그인 실패: " + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    onLogin(null);
  };

  // 로그인 상태면 NoticeAdmin 표시 + 로그아웃 버튼
  if (user) {
    return (
      <div className="max-w-3xl mx-auto mt-10 p-6 border rounded">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold">관리자: {user.email}</p>
          <button
            onClick={handleLogout}
            className="p-2 bg-red-500 text-white rounded"
          >
            로그아웃
          </button>
        </div>
        <NoticeAdmin />
      </div>
    );
  }

  // 로그인 폼
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-xl font-bold mb-4 text-center">관리자 로그인</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleLogin}
        className="p-2 bg-blue-500 text-white rounded w-full"
      >
        로그인
      </button>
    </div>
  );
}



