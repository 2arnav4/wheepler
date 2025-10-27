import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import SubNavbar from "./Components/Header/SubNavbar";
import Footer from "./Components/Footer/Footer";
import Home from "../Pages/Home"; // adjust this path if needed

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <SubNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes here later, e.g.
            <Route path="/about" element={<About />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
