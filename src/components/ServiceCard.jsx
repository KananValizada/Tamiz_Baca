import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-[500px] bg-white items-center px-[40px] py-[70px] hover:bg-[#ddfdfd] hover:scale-105 cursor-pointer duration-500">
      {/* <img src={GiChimney} className="w-[100px] mb-3"  /> */}
      {icon}
      <h3 className="text-[26px] font-semibold mb-5">{title}</h3>
      <p className="text-[#4c5165] text-[18px] text-center ">{description}</p>
    </div>
  );
};

export default ServiceCard;
