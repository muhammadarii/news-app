import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className="bg-[#D8FF99] h-[450px] w-full rounded-2xl">
        <h1 className="text-5xl font-light text-center pt-20 px-10 text-black">
          Donate Now and Help Level Up the Lives of Children in Need
        </h1>
        <p className="text-center pt-4 px-10 text-gray-600">
          Your donation will help provide essential services to children in
          need. such as education, healthcare, nutrition, and enrichment.
        </p>
        <div>
          <div className="flex flex-col items-center mt-10">
            <button className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300">
              Donate Now
            </button>
            <p className="text-gray-600 mt-4">
              Your support can make a difference!
            </p>
          </div>
        </div>
      </div>
      <footer className="text-black py-4 border-t border-gray-200 mt-10">
        <div className="flex flex-row justify-between items-center mx-auto">
          <Image src={Logo} alt="Logo" className="w-[150px]" />
          <div className="hidden md:flex flex-row items-center gap-6">
            <p>Home</p>
            <p>About</p>
            <p>News</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-row items-center text-xl gap-4">
            <div className="bg-[#D8FF99] flex flex-row items-center gap-2 p-2 rounded-full text-black shadow-md hover:scale-125 transition-transform duration-300">
              <FaFacebookF />
            </div>
            <div className="bg-[#D8FF99] flex flex-row items-center gap-2 p-2 rounded-full text-black shadow-md hover:scale-125 transition-transform duration-300">
              <FaTwitter />
            </div>
            <div className="bg-[#D8FF99] flex flex-row items-center gap-2 p-2 rounded-full text-black shadow-md hover:scale-125 transition-transform duration-300">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SquareUp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
