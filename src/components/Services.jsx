import React from "react";
import ServiceCard from "./ServiceCard";
import { GiChimney } from "react-icons/gi";
import { FaFilter } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

const Services = () => {
  return (
    <div className="flex flex-col px-[8%] py-[100px] bg-[#F5F8FE]">
      <div className="text-[50px] text-center mb-[30px] font-bold ">
        Xidmətlərimiz
      </div>
      <p className="text-center text-[#4c5165] mb-[60px] max-w-[50%] m-auto">
        Bacanızın mütamadi olaraq mütəxəssis tərəfindən yoxlanılması və
        təmizlənməsi ailənizin təhlükəsizliyini təmin etmək üçün çox vacib
        addımdır.
      </p>
      <div className="flex flex-wrap gap-5 justify-center">
        <ServiceCard
          icon={
            <FaFilter
              style={{ fill: "#6EC1E4" }}
              className="h-[100px] w-[100px]"
            />
          }
          title="Filter təmizliyi"
          description="Filterlərin quraşdırılması, dəyişdirilməsi, təmizlənməsi"
        />
        <ServiceCard
          icon={
            <GiChimney
              style={{ fill: "#6EC1E4" }}
              className="h-[100px] w-[100px]"
            />
          }
          title="Baca təmizlənməsi"
          description="Bütün növ yağlı , tutulmuş bacaların uyğun alətlərlə təmizlənməsi"
        />
        <ServiceCard
          icon={
            <GiAutoRepair
              style={{ fill: "#6EC1E4" }}
              className="h-[100px] w-[100px]"
            />
          }
          title="Baca baxımı və təmiri"
          description="Bacanızı yaxşı vəziyyətdə saxlayın, əks halda istilik sisteminiz daha az səmərəli və ya potensial təhlükəli olacaq"
        />
      </div>
    </div>
  );
};

export default Services;
