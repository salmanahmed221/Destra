"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Link from "next/link";

const Navigation = () => {
  // State to track active link
  const [nav, setNav] = useState(true);
  return (
    <div className="w-full md:fixed md:bg-black md:z-10">
      <div className=" md:flex justify-between p-5 md:mx-10 items-center">
        {/* name */}
        <div className="flex items-center justify-between">
          <p className="font-bold md:text-2xl text-xl z-20">Destra Network</p>
          {/* Hamburger icons */}
          <div
            className="md:hidden text-2xl z-20"
            onClick={() => {
              setNav(!nav);
            }}
          >
            {nav ? <GiHamburgerMenu /> : <ImCross />}
          </div>
        </div>
        {/* nav items */}
        <div className="  hidden md:flex  items-center space-x-8  text-[#8A8F98]">
          <p>About</p>
          <p> Product</p>
          <p>Contact</p>
          <div className="px-5 py-1.5 bg-white font-bold text-black rounded-md hover:bg-red-600 ">
            Launch
          </div>
        </div>
      </div>
      {/* Overlay */}
      {!nav ? (
        <div className="md:hidden fixed top-0 left-0 h-[50%] bg-black z-10  w-[100%] flex flex-col pt-20 pl-7 gap-y-8 text-[#8A8F98]">
          <Link href={"/"} className="focus:text-red-500">
            About
          </Link>
          <Link href={"/"} className="focus:text-red-500">
            Products
          </Link>
          <Link href={"/"} className="focus:text-red-500">
            Contact
          </Link>
          <div className="px-5 py-1.5 w-24  bg-white font-bold text-black rounded-md">
            Launch
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
