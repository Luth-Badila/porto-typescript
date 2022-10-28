import React from "react";
import { AutomationImageData } from "./AutomationImageData";

const AutomationSlider = () => {
  return (
    <div className="mt-[100px] flex items-center justify-center flex-wrap">
      {AutomationImageData.map((img) => (
        <img className="w-[250px] h-[250px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300" src={img.bg} alt="/" />
      ))}
    </div>
  );
};

export default AutomationSlider;
