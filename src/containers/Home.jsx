import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import Services from "../components/Services";
import Info from "../components/Info";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Slider />
      <About from={"HOME"} />
      <Services />
      <Info />
      <Projects />
    </div>
  );
};

export default Home;
