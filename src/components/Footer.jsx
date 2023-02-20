import React from "react";

import { GiAutoRepair } from "react-icons/gi";
import { BsChevronDoubleRight } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <>
      <div className="flex px-[8%] py-[100px] bg-[#253041] text-white justify-between">
        <div className="flex flex-col w-[300px]">
          <span className="text-3xl font-[Poppins] cursor-pointer font-bold  mb-5">
            {/* <img className="h-10 inline " src={logo} /> */}
            <GiAutoRepair
              fill="#0369a1"
              className="h-10 inline w-[60px] h-[60px]"
            />
            <span className="text-[#0369a1]"> Sağlam</span> nəfəs
          </span>
          <p>
            Management Plumbing includes a broad range of activities, and the
            many firms and their members often define these practices.
          </p>
        </div>
        <div className="flex flex-col color-white w-[200px]">
          <h1 className="font-semibold text-[20px] mb-5">QISA YOL</h1>
          <ul className="text-[#d7d7d7]">
            <li className="hover:underline flex items-center cursor-pointer mb-3">
              <BsChevronDoubleRight className="mr-2" /> Haqqımızda
            </li>
            <li className="hover:underline flex items-center cursor-pointer mb-3">
              <BsChevronDoubleRight className="mr-2" /> Xidmətlər
            </li>
            <li className="hover:underline flex items-center cursor-pointer mb-3">
              <BsChevronDoubleRight className="mr-2" /> İşlərimiz
            </li>
            <li className="hover:underline flex items-center cursor-pointer ">
              <BsChevronDoubleRight className="mr-2" /> Əlaqə
            </li>
          </ul>
        </div>
        <div className="w-[300px]">
          <h1 className="font-semibold text-[20px] mb-5">Əlaqə yarat</h1>
          <p className="text-[#d7d7d7] mb-3">
            Keyfiyyətli xidmət üçün nömrə ilə əlaqə yaradın
          </p>
          <p className="mb-5">+994XXXXXXX</p>
          <button className="px-6 py-2 w-[70%] bg-sky-700 text-white font-semibold text-[20px] rounded-[10px] hover:bg-sky-900 duration-500">
            Zəng et
          </button>
        </div>
        <div className="w-[300px]">
          <h1 className="font-semibold text-[20px] mb-5">Bizim xidmətlər</h1>
          <ul className="text-[#d7d7d7]">
            <li className="hover:underline flex items-center cursor-pointer mb-3">
              <BsChevronDoubleRight className="mr-2" /> Filter təmizlənməsi
            </li>
            <li className="hover:underline flex items-center cursor-pointer mb-3">
              <BsChevronDoubleRight className="mr-2" /> Baca təmizlənməsi
            </li>
            <li className="hover:underline flex items-center cursor-pointer mb-3">
              <BsChevronDoubleRight className="mr-2" /> Baca təmiri,
              quraşdırılması
            </li>
            <li className="hover:underline flex items-center cursor-pointer ">
              <BsChevronDoubleRight className="mr-2" /> Kamen təmiri,
              təmizlənməsi
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center bg-[#212c3c] text-white py-5">
        © Müəllif hüququ 2023 | KananValizada.org | Bütün hüquqlar qorunur.
      </p>
    </>
  );
};

export default Footer;
