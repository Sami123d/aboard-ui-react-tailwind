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




// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo Section - 35% Width */}
//         <div className="w-[35%] lg:w-[35%]">
//           <h1 className="text-white text-2xl font-bold">Logo</h1>
//         </div>

//         {/* Links Section - 65% Width */}
//         <div className="w-[65%] flex justify-end items-center relative">
//           {/* Links and Login Button */}
//           <ul
//             className={`lg:flex lg:items-center lg:space-x-6 lg:static absolute left-0 w-full bg-gray-800 lg:bg-transparent lg:w-auto lg:py-0 py-4 lg:space-y-0 space-y-2 transition-all duration-300 ${
//               isOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
//             }`}
//           >
//             <li>
//               <a href="#" className="text-white hover:text-gray-400 px-2">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-white hover:text-gray-400 px-2">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-white hover:text-gray-400 px-2">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-white hover:text-gray-400 px-2">
//                 Contact
//               </a>
//             </li>
//             <li>
//               <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
//                 Login
//               </button>
//             </li>
//           </ul>

//           {/* Toggle Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-white ml-4 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <div className="w-full text-white bg-[#253841]">
      <div className="max-w-[1440px] px-2 mx-auto">
        <div className="py-2 flex flex-col md:flex-row relative">
          {/* Logo Section */}
          <div className="w-full md:w-[35%]  bg-yellow-50 p-2 z-10 ">
            <div className="h-full  mx-auto md:mx-0">
              <img className="size-full " width={"2560px"} src={logo} alt="Logo" />
            </div>
          </div>

          {/* Menu Section */}
          <div className="w-full md:w-[65%] items-center flex-nowrap p-2 flex flex-col md:flex-row  justify-center md:justify-end gap-7 bg-red-800">
            <button className="bg-[#FDEECB]   text-black text-sm font-semibold pt-[0.6rem] pb-[0.9rem] px-6 rounded">
              Login
            </button>
            <ul className="flex items-center flex-col flex-wrap md:flex-row  lg:justify-end  md:justify-between md:gap-5">
              <li className=""><a className="py-2 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB] md:mr-4" href="">Home</a></li>
              <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">The Need</a></li>
              <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Countries</a></li>
              <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Videos</a></li>
              <li className=""><a href="" className="py-2 md:mx-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Blogs</a></li>
              <li className=""><a href="" className="py-2 ml-4 hover:border-b-4 hover:text-[#FDEECB] border-[#FDEECB]">Become a Partner</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

