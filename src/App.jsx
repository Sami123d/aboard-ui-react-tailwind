import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
const App = () => {
  useEffect(() => {
    const adjustPadding = () => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      document.querySelector(".content").style.paddingTop = `${navbarHeight}px`;
    };

    // Adjust padding on initial load
    adjustPadding();

    // Adjust padding on window resize
    window.addEventListener("resize", adjustPadding);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustPadding);
    };
  }, []);
  return (
    <div className=" secondary-background ">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
