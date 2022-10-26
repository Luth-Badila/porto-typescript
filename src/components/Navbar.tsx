import React, { useState } from "react";
import { logo4 } from "../assets";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { GoX } from "react-icons/go";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md fixed w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <span className="mr-1 pt-2">
            <img src={logo4} alt="profile picture" className="flex items-center sm:w-[170px] w-[120px]" />
          </span>
        </div>

        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {open ? <GoX /> : <IoMdMenu />}
        </div>

        <ul className={`md:flex md:items-center absolute md:static bg-white md:z-auto z-[-1] w-full h-auto md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "left-0" : "left-[800px]"}`}>
          <NavLink to="/" className="flex gap-3 opacity-50 hover:opacity-100 md:ml-8 text-xl md:my-0 my-5">
            <a href="">Home</a>
          </NavLink>
          <li className="flex gap-3 opacity-50 hover:opacity-100 md:ml-8 text-xl md:my-0 my-5">
            <a href="">About</a>
          </li>
          <li className="flex gap-3 opacity-50 hover:opacity-100 md:ml-8 text-xl md:my-0 my-5">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
