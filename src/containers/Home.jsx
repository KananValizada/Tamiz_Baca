import React from "react";
import Slider from "../components/Slider";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <About from={"HOME"} />
      <Footer />
    </div>
  );
};

export default Home;
