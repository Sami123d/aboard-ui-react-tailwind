import React, { useState } from "react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // State to track the active link

  const menuItems = [
    "Home",
    "Our Story",
    "The Need",
    "Countries",
    "Videos",
    "Blogs",
    "Become a Partner",
  ];

  const handleLinkClick = (item) => {
    setActiveLink(item);
  };

  return (
    <div className="w-full fixed text-[#FCEDCB] bg-[#253841]">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative flex flex-col lg:flex-row">
          {/* Logo Section */}
          <div className="py-3 w-full lg:w-[35%] z-10 bg-[#253841] flex flex-row items-center justify-between p-2">
            <div className="h-full lg:!w-full md:mx-0 !w-[70%]">
              <img className="size-full max-w-lg" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:block lg:hidden">
              <button className="bg-[#FDEECB] text-black text-sm font-semibold pt-[0.6rem] pb-[0.9rem] px-6 rounded">
                Login
              </button>
            </div>
            <div className="lg:hidden flex justify-center items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-black bg-[#FCEDCB] sm:rounded-md p-2 mr-1 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Section */}
          <div
            className={`gap-7 w-full absolute z-0 lg:bg-transparent md:text-black md:bg-white lg:text-white bg-[#FCEDCB] text-black ${
              isOpen ? "top-[100%] duration-1000" : "top-[-900%] duration-1000"
            } lg:static lg:w-[65%] lg:items-center flex-nowrap lg:p-2 flex md:flex-col flex-col-reverse lg:flex-row justify-center lg:justify-end`}
          >
            <button className="p-3 hover:bg-[#253841] hover:text-[#FDEECB] lg:bg-[#FDEECB] lg:hover:bg-[#FDEECB] lg:hover:text-black flex items-start m-0 md:hidden lg:block text-black text-sm font-semibold lg:pt-[0.6rem] lg:pb-[0.9rem] lg:px-6 lg:rounded">
              Login
            </button>
            <ul className="lg:w-[80%] flex lg:items-center flex-col flex-wrap lg:flex-row lg:justify-end md:justify-between gap-1 md:gap-7">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={`hover:bg-[#253841] hover:text-[#FDEECB] p-2 lg:p-0 ${
                    activeLink === item ? "bg-[#253841] text-[#FDEECB] lg:bg-[#253841] lg:text-[#FDEECB]" : ""
                  }`}
                  onClick={() => handleLinkClick(item)}
                >
                  <a
                    className={`our-story py-2 lg:border-b-4 border-transparent lg:hover:border-[#FDEECB] lg:hover:text-[#FDEECB] ${
                      activeLink === item ? "lg:border-[#FDEECB] lg:border-b-2" : ""
                    }`}
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
