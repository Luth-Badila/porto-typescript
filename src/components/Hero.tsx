import React from "react";
import { logoHeader } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="sm:h-[70vh] h-[50vh] mt-[180px]">
        <div className=" text-redFont flex sm:flex-row flex-col sm:justify-evenly justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={logoHeader} alt="logo-Header" className="sm:w-[350px] sm:h-[350px] w-[150px] h-[150px]" />
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="sm:text-[40px] text-[15px] font-bold">We are experienced in creating websites</h1>
            <p className="sm:max-w-[700px] max-w-[650px] sm:text-[15px] text-[8px] font-semibold">We have 2 years of experience in creating websites for micro and macro companies, personal and online stores</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
