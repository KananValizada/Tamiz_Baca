import React, { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const handleTabSelection = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="py-[100px] px-[7%] flex flex-col items-center">
      <h1 className="text-[50px] text-center mb-[30px] font-bold ">
        Gördüyümüz İşlər
      </h1>
      <p className="text-center text-[#4c5165] mb-[60px] max-w-[50%] m-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry's standard dummy text ever since the
        1500s.
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
      </div>
      <div className="mt-6">
        {activeTab === "ALL" && (
          <div className="transition tab-panel duration-300">
            <h1>First Tab Panel</h1>
          </div>
        )}
        {activeTab === "CHIMNEY" && (
          <div className="tab-panel transition duration-300">
            <h1>Second Tab Panel</h1>
          </div>
        )}
        {activeTab === "SOBA" && (
          <div className="tab-panel transition duration-300">
            <h1>Third Tab Panel</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
