import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { Menu } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import User from "../context/user";

const LeftSideNavbar = () => {
  let { isNavOpen } = useContext(User);
  return (
    <>
      <div>
        <div
          className={` h-[100vh] w-[250px] fixed transition-all duration-500 top-0 left-0 group bg-[#191919] ${
            isNavOpen
              ? `opacity-100 pointer-events-auto`
              : `opacity-0 pointer-events-none`
          } flex-col gap-y-5 py-2 text-2xl text-white z-100`}
        >
          <ul>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer">
              होमपेज
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer flex gap-x-5">
              <a>राजनीति</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              ></svg>
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer">
              नेपालप्रेस
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer flex gap-x-5">
              <a>नेपाल पैरवी</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="White"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              ></svg>
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer">
              समाज चित्र
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer">
              बित्त प्रेस
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer">
              कला प्रेस
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer">
              खेल
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer">
              स्वास्थ्य जीवनशैली
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 hover:bg-[#222221] cursor-pointer">
              प्रवास
            </li>
            <li className="pl-4 text-left py-4 border-b border-solid border-gray-600 flex gap-x-5">
              <a>विविध</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              ></svg>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftSideNavbar;
