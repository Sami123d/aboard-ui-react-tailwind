import React, { useState } from "react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed z-0  text-white  bg-[#253841]">
      <div className="max-w-[1440px] relative  mx-auto">
        <div className="z-1 flex flex-col lg:flex-row">
          {/* Logo Section */}
          <div className="w-full lg:w-[35%] bg-[#253841] flex flex-row items-center justify-between p-2">
            <div className="h-full lg:!w-full md:mx-0 !w-[70%]">
              <img className="size-full max-w-lg" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:block lg:hidden">
              <button className="bg-[#FDEECB]   text-black text-sm font-semibold pt-[0.6rem] pb-[0.9rem] px-6 rounded">
                Login
              </button>
            </div>
            <div className="lg:hidden flex justify-center  items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-black bg-[#FCEDCB] sm:rounded-md p-2 mr-1 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 "
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
         {/* Menu Section */}
<div
  className={`gap-7 z-[-1] w-full absolute lg:bg-transparent md:text-black md:bg-white lg:text-white lg:border-0 bg-[#FCEDCB] text-black border-2 ${
    isOpen ? "top-[100%] duration-1000" : "top-[-900%] duration-1000"
  } lg:static lg:w-[65%] lg:items-center flex-nowrap lg:p-2 flex md:flex-col flex-col-reverse lg:flex-row justify-center lg:justify-end`}
>
  <button className="p-3 hover:bg-[#253841] hover:text-white lg:bg-[#FDEECB] lg:hover:bg-[#FDEECB] lg:hover:text-black flex items-start m-0 md:hidden lg:block text-black text-sm font-semibold lg:pt-[0.6rem] lg:pb-[0.9rem] lg:px-6 lg:rounded">
    Login
  </button>
  <ul className="lg:w-[80%] flex lg:items-center flex-col flex-wrap lg:flex-row lg:justify-end md:justify-between gap-7">
    <li>
      <a
        className="py-2 lg:border-b-4 border-transparent lg:hover:border-[#FDEECB] lg:hover:text-[#FDEECB]"
        href=""
      >
        Home
      </a>
    </li>
    <li>
      <a
        className="py-2 lg:border-b-4 border-transparent lg:hover:border-[#FDEECB] lg:hover:text-[#FDEECB]"
        href=""
      >
        Our Story
      </a>
    </li>
    <li>
      <a
        className="py-2 lg:border-b-4 border-transparent lg:hover:border-[#FDEECB] lg:hover:text-[#FDEECB]"
        href=""
      >
        The Need
      </a>
    </li>
    <li>
      <a
        className="py-2 lg:border-b-4 border-transparent lg:hover:border-[#FDEECB] lg:hover:text-[#FDEECB]"
        href=""
      >
        Countries
      </a>
    </li>
    <li>
      <a
        className="py-2 lg:border-b-4 border-transparent lg:hover:border-[#FDEECB] lg:hover:text-[#FDEECB]"
        href=""
      >
        Videos
      </a>
    </li>
    <li>
      <a
        className="py-2 lg:border-b-4 border-transparent lg:hover:border-[#FDEECB] lg:hover:text-[#FDEECB]"
        href=""
      >
        Blogs
      </a>
    </li>
    <li>
      <a
        className="py-2 lg:border-b-4 border-transparent lg:hover:border-[#FDEECB] lg:hover:text-[#FDEECB]"
        href=""
      >
        Become a Partner
      </a>
    </li>
  </ul>
</div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
