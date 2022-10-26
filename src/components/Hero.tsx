import React from "react";
import { logoHeader } from "../assets";

const Hero = () => {
  return (
    <div className="relative text-blue-500 text-4xl mt-28">
      <div className="flex md:flex-row flex-col px-10 items-center sm:justify-between justify-center h-[75vh]">
        <div className="flex flex-col items-center">
          <p className="sm:text-[40px] text-[15px]">We're Luth Company</p>
          <img src={logoHeader} alt="logo-Header" className="sm:w-[250px] sm:h-[250px] w-[150px] h-[150px]" />
        </div>
        <p className="max-w-[700px] sm:text-[30px] text-[12px]">Experienced website development service provider</p>
      </div>
    </div>
  );
};

export default Hero;
