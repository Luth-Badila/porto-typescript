import React from "react";
import { logo, logo3 } from "../assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-full flex p-6 gap-4 justify-between items-center bg-slate-500">
      <div className="flex gap-2">
        <img src={logo} alt="profile picture" className="flex items-center sm:w-[50px] w-[30px]" />
        <img src={logo3} alt="name-profile" className="flex items-center sm:w-[100px] w-[60px]" />
        {/* <p className="flex items-center text-xl text-white font-[grenze]">Luth-Company</p> */}
      </div>
      <ul className="list-none text-white flex justify-end items-center gap-3">
        <NavLink to="/" className="flex gap-3 opacity-50 hover:opacity-100">
          <a href="">Home</a>
        </NavLink>
        <li className="flex gap-3 opacity-50 hover:opacity-100">
          <a href="">About</a>
        </li>
        <li className="flex gap-3 opacity-50 hover:opacity-100">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
