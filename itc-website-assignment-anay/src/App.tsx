import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Footer from "./Footer.tsx";
import About from "./About.tsx";
import Events from "./Events.tsx";
import ReEvents from "./ReEvents.tsx";

const App = () => {
  return (
    <div className="min-vh-100" style={{ color: "white" }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ReEvents" element={<ReEvents />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
