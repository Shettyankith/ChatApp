import React from "react";
import Search from "./Search";
import User from "./User";

function Left() {
  return (
    <div className="w-[30%] bg-[#1D1923] text-white ">
      <div className="flex px-10 py-2 space-x-4 w-[100%]">
        <img src="../../chat.png" className="w-10 h-10" alt="logo" />
        <h1 className="text-3xl font-bold text-white italic"> <span className="text-[#ad6af9] m-0 normal">W</span>hirl</h1>
        <i className="fa-solid align-self-end fa-arrow-right-from-bracket py-3 px-3 hover:bg-[#ad6af9] transition-all duration-300 rounded-full "></i>
      </div>
      <Search />
      <hr />
      <User />
    </div>
  );
}

// hover:bg-[#6E31B4]

export default Left;
