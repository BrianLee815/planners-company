// src/components/Login.jsx
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // 로그인 상태 체크
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      onLogin(currentUser); // App.jsx의 user 상태 업데이트
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
  };

  // 이미 로그인 상태면 로그아웃 버튼 표시
  if (user) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded text-center">
        <p>로그인 상태: {user.email}</p>
        <button
          onClick={handleLogout}
          className="mt-4 p-2 bg-red-500 text-white rounded"
        >
          로그아웃
        </button>
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



