// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARZ-COer1ChuZLkvtcCj9G2vRA4LG0qco",
  authDomain: "planners-company-df3d4.firebaseapp.com",
  projectId: "planners-company-df3d4",
  storageBucket: "planners-company-df3d4.firebasestorage.app",
  messagingSenderId: "49402589489",
  appId: "1:49402589489:web:e1c388db28cc94762e0010",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
