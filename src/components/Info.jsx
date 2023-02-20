import React from "react";
import { AiTwotonePhone } from "react-icons/ai";
import social from "../assets/social.jpg";

const Info = () => {
  return (
    <div className="bg-[#0052da] h-[650px] flex px-[7%] justify-between text-white font-semibold overflow-hidden items-center">
      <div className="max-w-[800px]">
        <h1 className="text-[70px]">
          Ən Keyfiyyətli Və Sağlam Xidməti Biz Təklif Edirik.
        </h1>
      </div>
      <div className="w-[700px] h-[700px] bg-[#0d5bdc] rounded-[50%]  flex flex-col items-center justify-center relative ">
        <h1 className="text-[60px] mb-[80px]">İndi zəng edin</h1>
        <div className="flex items-center ">
          <AiTwotonePhone className="w-[40px] h-[40px] mr-[25px]" />
          <p className="text-[40px]">+994 XXX-XX-XX</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
