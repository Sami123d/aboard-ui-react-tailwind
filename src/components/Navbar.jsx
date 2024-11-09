// import React from "react";
// import logo from "../assets/logo.webp";
// const Navbar = () => {
//   return (
//     <div className="w-full   text-white bg-[#253841]">
//       <div className="max-w-[1440px] px-2 mx-auto ">
//         <div className="py-2 flex ">
//           <div className="md:w-[35%] max-w-[380px]  bg-yellow-50 p-2">
//             <div className="  max-w-[380px] ">
//               <img className="object-contain" src={logo} alt="" srcset="" />
//             </div>
//           </div>
//           <div className="md:w-[65%] p-2 flex items-center justify-end gap-7 bg-red-800">
            
//               <button className="bg-[#FDEECB] text-black text-sm font-semibold pt-[0.5rem] pb-[0.8rem] px-6 rounded">
//                 Login
//               </button>
//               <div className="">
//                 <ul className="flex justify-between ">
//                   <li className="mr-4 py-3">Home</li>
//                   <li className="mx-4 py-3">Our Story</li>
//                   <li className="mx-4 py-3">The Need</li>
//                   <li className="mx-4 py-3">Countries </li>
//                   <li className="mx-4 py-3">Videos</li>
//                   <li className="mx-4 py-3">Blogs</li>
//                   <li className="ml-4 py-3">Become a Partner</li>
//                 </ul>
//               </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// import React from "react";
// import logo from "../assets/logo.webp";

// const Navbar = () => {
//   return (
//     <div className="w-full text-white bg-[#253841]">
//       <div className="max-w-[1440px] px-2 mx-auto">
//         <div className="py-2 flex flex-col md:flex-row relative">
//           {/* Logo Section */}
//           <div className="w-full md:w-[35%] max-w-[380px] bg-yellow-50 p-2 z-10 ">
//             <div className="h-full  mx-auto md:mx-0">
//               <img className="size-full "  src={logo} alt="Logo" />
//             </div>
//           </div>

//           {/* Menu Section */}
//           <div className="w-full md:w-[65%] items-center flex-nowrap p-2 flex flex-col md:flex-row  justify-center md:justify-end gap-7 bg-red-800">
//             <button className="bg-[#FDEECB]   text-black text-sm font-semibold pt-[0.6rem] pb-[0.9rem] px-6 rounded">
//               Login
//             </button>
//             <ul className="flex items-center flex-col flex-wrap md:flex-row  lg:justify-end  md:justify-between gap-3 md:gap-5">
//               <li className=""><a className="py-2 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB] md:mr-4" href="">Home</a></li>
//               <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">The Need</a></li>
//               <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Countries</a></li>
//               <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Videos</a></li>
//               <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Blogs</a></li>
//               <li className=""><a href="" className="py-2 ml-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Become a Partner</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full text-white  bg-[#253841]">
      <div className="max-w-[1440px] px-2 mx-auto">
        <div className="py-2 flex items-center justify-between flex-col lg:flex-row ">
          {/* Logo Section */}
          <div className="w-full md:w-[35%] max-w-[380px] bg-yellow-50 p-2 ">
            <div className="h-full  mx-auto md:mx-0 z-10">
              <img className="object-contain " src={logo} alt="Logo" />
            </div>
          </div>

          <div className="  !w-full  md:w-[65%]  items-center flex-nowrap p-2 flex flex-col md:flex-row  justify-center md:justify-end gap-7 bg-red-800" >
             <button className="bg-[#FDEECB] z-10  text-black text-sm font-semibold pt-[0.6rem] pb-[0.9rem] px-6 rounded">
               Login
             </button>
             <ul className="flex items-center  flex-col flex-wrap lg:flex-row  lg:justify-end  md:justify-between gap-1">
               
               <li className=""><a className="py-2 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB] md:mr-4" href="">Home</a></li>
               <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">The Need</a></li>

               <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">The Need</a></li>
               <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Countries</a></li>
               <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Videos</a></li>
               <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Blogs</a></li>
               <li className=""><a href="" className="py-2 ml-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Become a Partner</a></li>
             </ul>           </div>
             
        </div>
      </div>
    </div>
  );
};

export default Navbar;
