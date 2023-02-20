import React from "react";
import worker from "../assets/worker2.jpg";
const Header = ({ title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${worker})` }}
      className=" h-[400px]  bg-center  bg-cover "
    >
      <div
        style={{ background: "rgba(0, 0, 0, 0.4)" }}
        className="flex w-full h-full items-center justify-center"
      >
        <p className="text-[40px] text-white font-bold font-[Calibre]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
