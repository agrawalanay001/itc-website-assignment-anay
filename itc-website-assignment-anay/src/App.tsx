import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Footer from "./Footer.tsx";
import About from "./About.tsx";

const App = () => {
  return (
    <div className="min-vh-100" style={{ color: "white" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
