import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Hero from "./Component/Home/Hero.jsx";
import Footer from "./Component/Footer/Footer";
import Teachings from "./Pages/Courses/Teachings.jsx";
import Writing from "./Pages/Writing/Writing.jsx";
import AOS from 'aos';
import Books from "./Pages/Books/Books.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import 'aos/dist/aos.css'; // Don't forget to import AOS styles
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize this value
      easing: 'ease-in-out', // Customize easing
      once: true, // Animation will only run once
    });
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Teachings" element={<Teachings />} />
        <Route path="/Writing" element={<Writing />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;