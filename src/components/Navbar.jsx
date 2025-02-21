import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import "../css/Navbar.css"
import { useRef } from 'react';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null)
  const toggleNavbar = () => {
    if (menuRef.current.src.includes("/svg/menu.svg")) {
      menuRef.current.src = "./svg/close.svg"
    
      

  }
  else {
      menuRef.current.src = "./svg/menu.svg"
     
  }
    setIsOpen(!isOpen);
  };
 
  return (
    <>
      <nav className='flex bg-[oklch(0.55 0.08 59.29)] items-center justify-between py-2 border-b-2 border-gray-300 backdrop-blur-3xl '>
        <div className='flex items-center justify-around bg-[#f0f8ff] px-1 rounded-lg'>
          <lord-icon
            src="https://cdn.lordicon.com/fgxwhgfp.json"
            trigger="hover"
            stroke="light"
            colors="primary:#121331,secondary:#30e8bd"
            style={{ "width": "30px", "height": "30px" }}>
          </lord-icon>
          <span className='font-light'>PasswordManger</span>
        </div>
        {/* <button className='md:hidden cursor-pointer' onClick={toggleNavbar}>
       
        </button> */}
        <img ref={menuRef} src='./svg/menu.svg' className='md:hidden cursor-pointer' onClick={toggleNavbar}  />
        <ul className={`flex-col md:flex-row md:flex items-center gap-4 text-[#974444] ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;