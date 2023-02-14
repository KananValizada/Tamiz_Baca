import React, { useState } from "react";
import img1 from "../assets/3.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/7.webp";
import img4 from "../assets/4.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      url: img1,
      header: "Ən keyfiyyətli baca xidmətləri, sərfəli xidmət haqqı",
      subTitle:
        "Bacanızın təmizliyi sizin sağlamlığınıza təsir edən önəmli faktorlardandır",
    },
    {
      url: img2,
      header: "Işinizi bizim peşəkar ustalara əmanət edin",
      subTitle: "Bu sahədə illərdir çalışan təcrübəli işçilərimiz mövcuddur",
    },
    {
      url: img3,
      header: "Işimizin keyfiyyəyindən məmnun qalacaqsınız",
      subTitle: "Bəlkə də bacanız düşündüyünüz kimi təmiz deyil",
    },
    {
      url: img4,
      header: "Həyatınızı təhlükəyə atmayın",
      subTitle:
        "Mütamadi olaraq baca təmizliyinin yoxlanılması üçün bizə etibar edin",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;

    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = images.length - 1 === currentIndex;

    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" h-[700px] p-1 w-full m-auto   relative group ">
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className="w-full h-full  bg-center  bg-contain duration-500  "
      >
        <div
          style={{ background: "rgba(0, 0, 0, 0.4)" }}
          className="h-full w-full flex items-center  px-[10%]"
        >
          <div className="flex flex-col text-white items-start">
            <h1 className="text-[50px] font-bold w-[60%] leading-[60px] mb-4">
              {images[currentIndex].header}
            </h1>
            <p className="text-[#d8d8d9] text-[25px] mb-5 w-[60%] leading-[45px]">
              {images[currentIndex].subTitle}
            </p>
            <button className="px-10 py-3 bg-sky-700 font-semibold text-[20px] rounded-xl hover:bg-sky-900 duration-500">
              Pulsuz Konsultasiya
            </button>
          </div>
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-x-[-10%] left-5 text-2xl p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-x-[-50%] right-5 text-2xl p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default Slider;
