import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
