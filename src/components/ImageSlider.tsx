import React from "react";
import { data } from "./ImageData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function App() {
  const slideLeft = () => {
    var slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className="relative flex items-center py-2">
        <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideLeft} size={40} />
        <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {data.map((item) => (
            <a role="button" target="_blank" href={item.url} className="text-white hover:bg-redHover p-2 rounded-md cursor-pointer">
              <img className="w-[250px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300" src={item.photo} alt="/" />
            </a>
          ))}
        </div>
        <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" onClick={slideRight} size={40} />
      </div>
    </>
  );
}

export default App;
