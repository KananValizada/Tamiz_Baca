import React, { useState } from "react";
import baca1 from "../assets/baca_l.jpg";
import baca2 from "../assets/baca_s.jpg";
import farsunka from "../assets/farsunka_s.jpg";
import soba1 from "../assets/soba_s.jpg";
import soba2 from "../assets/soba_s2.jpg";
import baca3 from "../assets/baca_l2.jpg";
import baca4 from "../assets/baca1.jpg";
import baca5 from "../assets/baca2.jpg";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const handleTabSelection = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="py-[100px] px-[7%] flex flex-col items-center">
        <h1 className="text-[50px] text-center mb-[30px] font-bold ">
          Gördüyümüz İşlər
        </h1>
        <p className="text-center text-[#4c5165] mb-[60px] max-w-[50%] m-auto">
          Tipik bir baca təmizlənməsi 1-2 saat çəkir. Biz nəinki problemləri
          aşkarlaya bilirik, həm də lazımi təmir işləri aparmaq üçün lazımi
          bilik və bacarıqlara, düzgün avadanlıqlara sahibik.
        </p>
        <div>
          <button
            onClick={() => handleTabSelection("ALL")}
            className={`rounded-full p-4 text-[20px]  ${
              activeTab == "ALL"
                ? "bg-[#0052da] text-white"
                : "bg-white text-[#253041]"
            } `}
          >
            BÜTÜN LAYİHƏLƏR
          </button>
          <button
            onClick={() => handleTabSelection("CHIMNEY")}
            className={`rounded-full p-4 text-[20px]  ${
              activeTab == "CHIMNEY"
                ? "bg-[#0052da] text-white"
                : "bg-white text-[#253041]"
            } `}
          >
            TÜSTÜ BACASI
          </button>
          <button
            onClick={() => handleTabSelection("SOBA")}
            className={`rounded-full p-4 text-[20px]  ${
              activeTab == "SOBA"
                ? "bg-[#0052da] text-white"
                : "bg-white text-[#253041]"
            } `}
          >
            DİVAR PEÇİ
          </button>
          <button
            onClick={() => handleTabSelection("OTHER")}
            className={`rounded-full p-4 text-[20px]  ${
              activeTab == "OTHER"
                ? "bg-[#0052da] text-white"
                : "bg-white text-[#253041]"
            } `}
          >
            DİGƏR
          </button>
        </div>
        <div className="mt-7">
          {activeTab === "ALL" && (
            <div className="transition tab-panel duration-300">
              <div className="columns-3 gap-3 px-[12%]  mx-auto space-y-3 pb-28  duration-300">
                <div className=" break-inside-avoid cursor-pointer ">
                  <img className="w-[600px]" src={baca1} />
                </div>
                <div className="break-inside-avoid cursor-pointer">
                  <img className="w-[600px]" src={baca2} />
                </div>
                <div className="break-inside-avoid cursor-pointer">
                  <img className="w-[600px]" src={farsunka} />
                </div>
                <div className="break-inside-avoid cursor-pointer">
                  <img className="w-[600px]" src={soba1} />
                </div>
                <div className="break-inside-avoid cursor-pointer">
                  <img className="w-[600px]" src={soba2} />
                </div>
                <div className=" break-inside-avoid cursor-pointer">
                  <img className="w-[600px]" src={baca3} />
                </div>
                <div className="break-inside-avoid cursor-pointer">
                  <img className="w-[600px]" src={baca4} />
                </div>
                <div className="break-inside-avoid  cursor-pointer">
                  <img className="w-[600px]" src={baca5} />
                </div>
              </div>
            </div>
          )}
          {activeTab === "CHIMNEY" && (
            <div className="tab-panel transition duration-300">
              <div className="columns-3 gap-3 px-[12%] mx-auto space-y-3 pb-28 duration-300">
                <div className=" break-inside-avoid  cursor-pointer">
                  <img className="w-[600px]" src={baca1} />
                </div>
                <div className="break-inside-avoid  cursor-pointer">
                  <img className="w-[600px]" src={baca2} />
                </div>
                <div className=" break-inside-avoid cursor-pointer">
                  <img className="w-[600px]" src={baca3} />
                </div>
              </div>
            </div>
          )}
          {activeTab === "OTHER" && (
            <div className="tab-panel transition duration-300">
              <div className="columns-3 gap-3 px-[12%] mx-auto space-y-3 pb-28 duration-300 ">
                <div className="break-inside-avoid  cursor-pointer">
                  <img className="w-[600px]" src={farsunka} />
                </div>
              </div>
            </div>
          )}
          {activeTab === "SOBA" && (
            <div className="tab-panel transition duration-300">
              <div className="columns-3 gap-3 px-[12%] mx-auto space-y-3 pb-28 duration-300 ">
                <div className="break-inside-avoid  cursor-pointer">
                  <img className="w-[600px]" src={soba1} />
                </div>
                <div className="break-inside-avoid  cursor-pointer">
                  <img className="w-[600px]" src={soba2} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
