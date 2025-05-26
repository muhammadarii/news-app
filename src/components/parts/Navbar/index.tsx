import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between px-8 py-4">
      <div className="flex flex-row gap-8">
        <Image src={Logo} alt="Logo" className="w-[150px]" />
        <div className="flex flex-row items-center gap-6">
          <p>Home</p>
          <p>About</p>
          <p>News</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="bg-[#D8FF99] flex flex-row items-center gap-2 px-3 py-2 rounded-full text-black shadow-md">
        Contact Us
        <FaEnvelope />
      </div>
    </nav>
  );
};

export default Navbar;
