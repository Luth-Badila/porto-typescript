import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className=" w-full flex sm:p-6 px-4 gap-4 justify-between items-center bg-slate-500">
      <img src={logo} alt="profile picture" className="flex items-center sm:w-[50px] w-[30px]" />
      <ul className="list-none text-white flex mt-8 sm:mt-0 justify-end items-center gap-3">
        <li className="flex gap-3 opacity-50 hover:opacity-100">
          <a href="">Home</a>
        </li>
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
