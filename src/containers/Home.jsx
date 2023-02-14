import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Slider />
      <About from={"HOME"} />
    </div>
  );
};

export default Home;
