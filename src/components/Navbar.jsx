import React from "react";
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <div className="w-full   text-white bg-[#253841]">
      <div className="max-w-[1440px] px-2 mx-auto ">
        <div className="py-2 flex ">
         <div className="md:w-[35%]  bg-yellow-50 p-2">
         <div className="  max-w-[380px] "><img className="object-contain" src={logo} alt="" srcset="" /></div>
         </div>
         <div className="md:w-[65%] bg-red-800">lorem</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
