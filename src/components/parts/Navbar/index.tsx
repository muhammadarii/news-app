"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 z-50 bg-white shadow-md">
      {/* Left Side: Logo and Links */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-4">
          <Image src={Logo} alt="Logo" className="w-[120px]" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div className="hidden md:flex flex-row items-center gap-8">
        <p className="cursor-pointer hover:text-green-600">Home</p>
        <p className="cursor-pointer hover:text-green-600">About</p>
        <p className="cursor-pointer hover:text-green-600">News</p>
        <p className="cursor-pointer hover:text-green-600">Contact</p>
      </div>
      <div className="hidden md:flex items-center gap-2 bg-[#D8FF99] px-4 py-2 rounded-full text-black shadow hover:scale-105 transition-transform duration-300">
        Contact Us <FaEnvelope />
      </div>

      {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center px-8 py-4 gap-4 md:hidden">
          <p className="cursor-pointer hover:text-green-600">Home</p>
          <p className="cursor-pointer hover:text-green-600">About</p>
          <p className="cursor-pointer hover:text-green-600">News</p>
          <p className="cursor-pointer hover:text-green-600">Contact</p>

          <div className="flex items-center gap-2 bg-[#D8FF99] px-4 py-2 rounded-full text-black shadow">
            Contact Us <FaEnvelope />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
