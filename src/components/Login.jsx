// src/components/Login.jsx
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      onLogin(currentUser);
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

  if (user) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 border rounded">
        <p>로그인: {user.email}</p>
        <button onClick={handleLogout} className="mt-4 p-2 bg-red-500 text-white rounded">
          로그아웃
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
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
      <button onClick={handleLogin} className="p-2 bg-blue-500 text-white rounded w-full">
        로그인
      </button>
    </div>
  );
}


