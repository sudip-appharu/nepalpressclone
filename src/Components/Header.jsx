import React from "react";
import logo from "../assets/logo.png";
import facebooknplive from "../assets/faceboooknplive.jpg";
import youtubenplive from "../assets/youtubenplive.jpg";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full px-4 mt-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto gap-4">
        <div className="w-full md:w-auto flex flex-col md:flex-row md:items-center md:gap-x-6">
          <img src={logo} alt="Logo" className="w-auto max-w-[200px] self-center" />
          <div className="flex justify-between items-center mt-2 md:mt-0 gap-x-4">
            <p className="text-[#656565]">२०८२ जेठ १३ गते </p>
            <div className="flex gap-x-3">
              <Search size={24} strokeWidth={1.25} stroke="red" />
              <p className="w-[1.5rem] h-[1.5rem] rounded-full bg-red-700 text-white text-[1rem] p-1 box-content text-center">
                EN
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/@nepalpress"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[7.3rem] h-[3.75rem] border border-red-600"
          >
            <img
              src={facebooknplive}
              alt="YouTube"
              className="w-full h-full object-cover"
            />
          </a>
          <a
            href="https://www.facebook.com/nepalpressnp/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-[7.3rem] h-[3.75rem] border border-red-600"
          >
            <img
              src={youtubenplive}
              alt="Facebook"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
