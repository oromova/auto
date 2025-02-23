import React from 'react'
import { NavLink } from 'react-router-dom';
import En from "../assets/en-lang.png";
import Rus from "../assets/rus-lang.png";
import Logo from "../assets/logo.png"
import { RiSearch2Line } from 'react-icons/ri';


function Header() {
  return (
    <header className="headerbg">
      <div className="headerbgtop">
        <div className="max-w-[1240px] h-[80px] mx-auto px-5 flex items-center justify-between">
            {/* Search */}
            <div className="flex items-center gap-1">
              <button className="w-[25px] h-[25px] rounded-[14px]">
                <img src={En} alt="en" className="w-full h-full"/>
              </button>
              <button className="w-[25px] h-[25px] rounded-[15px]">
                <img src={Rus} alt="rus" className="w-full h-full"/>
              </button>
              <form action=""
                className="formbg w-[200px] h-[40px] ml-2 px-2  rounded-md flex items-center gap-1"
                >
                <p className="">
                  <RiSearch2Line className="text-2xl text-white font-bold z-10"/>
                </p>
                <input 
                  type="text"
                  className="placeholder-gray-500 outline-none text-white w-[150px]" 
                  placeholder="Search..."
                />
              </form>
            </div>
            {/* Logo */}
            <div className="w-[100px] h-[37px] ">
              <img src={Logo} alt="Logo" className="w-full h-full" />
              {/* <h2 className="text-red-600 text-xl text-center font-bold">A U T O</h2> */}
            </div>
            {/* Navbar */}
            <nav className="">

            </nav>
        </div>
      </div>
    </header>
  )
}

export default Header