import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NoticeList from "./pages/NoticeList.jsx";
import NoticeAdmin from "./components/NoticeAdmin.jsx";
import Login from "./components/Login.jsx";

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-white text-gray-800">
        <Navbar />

        <main className="pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notices" element={<NoticeList />} />

            <Route path="/admin" element={<Login user={user} onLogin={setUser} />} />
            
          </Routes>
        </main>
      </div>

      <Footer />
    </Router>
  );
}









