import React from "react";
import img7 from "../assets/5.jpg";
import Header from "./Header";

const About = ({ from }) => {
  return (
    <>
      {from != "HOME" && <Header />}

      <div className="flex px-[8%] font-[Calibre] mt-[100px]">
        <div className="mr-20 ">
          <img src={img7} className="max-w-[500px]" />
        </div>
        <div className="py-10">
          <h3 className="text-sky-500 font-semibold mb-5">-- Haqqımızda --</h3>
          <h1 className="text-[35px] font-semibold mb-5">
            Baca təmizliyi komandamız, mütəxəssislərdən ibarət kiçik bir ailədir
          </h1>
          <p className="text-[20px] text-[#4c5165] mb-5">
            Bizim komandanın əlindən hər iş gəlir, sadə baca qapaqlarından
            tutmuş, bacanın yenidən qurulmasına qədər.
          </p>
          <p className="text-[20px] text-[#4c5165] mb-5">
            Bizi bu sahəyə gətirən insanları baca təhlükəsizliyi ilə bağlı
            məlumatlandırmaq və qorumaq oldu. Bu bu həmin amaldır ki, bizim
            komandanın təcrübəli ustalarını hər gün eyni həvəslə işləməyə sövq
            edir.
          </p>
          <button className="px-10 py-3 bg-sky-700 text-white font-semibold text-[20px] rounded-xl hover:bg-sky-900 duration-500">
            Daha ətraflı
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
