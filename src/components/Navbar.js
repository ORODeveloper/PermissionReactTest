import React, { useState } from "react";
import oro24logo from "../assets/images/ForceOroLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-70 w-full h-fit p-4 rounded-md">
      <div className=" flex justify-between items-center">
        <div>
          <a href="#" className="text-[#D9AB66] text-md font-light">
            Dashboard
          </a>
        </div>
        <div className="hidden md:flex  flex flex-row w-full font-light text-xs justify-between">
          <div>
            <a href="#" className="text-white hover:text-gray-300 px-4">
              Food Menus
            </a>
            <a href="#" className="text-white hover:text-gray-300 px-4">
              Chairman Circle
            </a>
            <a href="#" className="text-white hover:text-gray-300 px-4">
              Other
            </a>
          </div>
          <div className="flex gap-0">
            <a
              href="#"
              className="text-white flex gap-2 items-center justify-center  hover:text-gray-300 px-4"
            >
              <img
                src={oro24logo}
                className="rounded-full h-6 w-6 object-cover"
              />
              Profile
            </a>
            <a
              href="#"
              className="text-white flex gap-2 items-center justify-center  hover:text-gray-300 px-4"
            >
              <img
                src={oro24logo}
                className="rounded-full h-6 w-6 object-cover"
              />
              Profile
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="menu w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Responsive Navigation Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gray-800`}>
        <a href="#" className="block text-white py-2 px-4">
          Home
        </a>
        <a href="#" className="block text-white py-2 px-4">
          About
        </a>
        <a href="#" className="block text-white py-2 px-4">
          Services
        </a>
        <a href="#" className="block text-white py-2 px-4">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
