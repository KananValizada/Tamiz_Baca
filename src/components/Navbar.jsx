import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import fb from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const Navbar = () => {
  const [iconName, setIconName] = useState("menu-outline");
  const [classes, setClasses] = useState("top-[80px] opacity-100");
  const navigate = useNavigate();
  const burgerClickHandler = (e) => {
    if (iconName == "menu-outline") {
      setIconName("close-outline");
      setClasses("top-[80px] opacity-100");
    } else {
      setIconName("menu-outline");
      setClasses("");
    }
  };

  return (
    <nav className="md:px-20 py-5 px-5 bg-white shadow md:flex md:items-center md:justify-between ">
      <div
        className="flex justify-between items-center"
        onClick={() => navigate("/")}
      >
        <span className="text-3xl font-[Poppins] cursor-pointer">
          <img className="h-10 inline " src={logo} />
          Sağlam nəfəs
        </span>
        <span className="text-3xl cursor-pointer md:hidden block">
          <ion-icon
            name={iconName}
            onClick={(e) => burgerClickHandler(e)}
          ></ion-icon>
        </span>
      </div>
      <ul
        className={`md:flex md:items-center  md:z-auto md:static absolute bg-white 
      w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 md:pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${classes}`}
      >
        <li className="mx-4 my-6 md:my-0">
          <div
            className="text-xl hover:text-cyan-500 duration-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Əsas səhifə
          </div>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <div
            onClick={() => navigate("/about")}
            className="text-xl hover:text-cyan-500 duration-500 cursor-pointer"
          >
            Haqqımızda
          </div>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <div
            onClick={() => navigate("/services")}
            className="text-xl hover:text-cyan-500 duration-500 cursor-pointer"
          >
            Xidmətlər
          </div>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <div
            href="#"
            className="text-xl hover:text-cyan-500 duration-500 cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            İşlərimiz
          </div>
        </li>
        <div className="mx-2 flex my-6 md:my-0">
          <li className="mx-2 ">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              <img className="h-6 " src={fb} />
            </a>
          </li>
          <li className="mx-2 ">
            <a href="#" className="text-xl hover:text-cyan-500 duration-500">
              <img className="h-6 " src={instagram} />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
