import React from "react";
import Topics from "../Reusable/Topics";
import congress from "../assets/congress.png";
import uml from "../assets/uml.png";
import maoist from "../assets/maoist.png";
import Ghanti from "../assets/Ghanti.jpg";
import rpp from "../assets/rpp.png";
import jasapa from "../assets/jasapa.png";
import umls from "../assets/umls.png";
import Janamat from "../assets/Janamat.jpg";
import Dhakiya from "../assets/Dhakiya.jpg";

const Rajniti = () => {
  return (
    <>
      <div>
        <Topics heading={`राजनीति`} />
        <div className="w-full overflow-x-scroll bg-[rgb(250,250,250)] scrollable  font-bold">
          <ul className="flex items-center  whitespace-nowrap  p-4">
            <li className="border-r border-gray-300 pr-6 mr-4 flex items-center gap-x-2 flex-shrink-0  cursor-pointer hover:text-red-500 transition-all duration-300   ">
              <img
                src={congress}
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />{" "}
              नेपाली कांग्रेस
            </li>
            <li className="border-r border-gray-300 pr-6 mr-4 flex items-center gap-x-2 flex-shrink-0  cursor-pointer hover:text-red-500 transition-all duration-300 ">
              <img
                src={uml}
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />{" "}
              नेकपा एमाले
            </li>
            <li className="border-r border-gray-300 pr-6 mr-4 flex items-center gap-x-2 flex-shrink-0  cursor-pointer hover:text-red-500 transition-all duration-300 ">
              <img
                src={maoist}
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />{" "}
              माओवादी केन्द्र
            </li>
            <li className="border-r border-gray-300 pr-6 mr-4 flex items-center gap-x-2 flex-shrink-0  cursor-pointer hover:text-red-500 transition-all duration-300 ">
              <img
                src={Ghanti}
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />{" "}
              रास्वपा
            </li>
            <li className="border-r border-gray-300 pr-6 mr-4 flex items-center gap-x-2 flex-shrink-0  cursor-pointer hover:text-red-500 transition-all duration-300 ">
              <img
                src={rpp}
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />{" "}
              राप्रपा
            </li>
            <li className="border-r border-gray-300 pr-6 mr-4 flex items-center gap-x-2 flex-shrink-0  cursor-pointer hover:text-red-500 transition-all duration-300 ">
              <img
                src={jasapa}
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />{" "}
              जसपा नेपाल
            </li>
            <li className="border-r border-gray-300 pr-6 mr-4 flex items-center gap-x-2 flex-shrink-0  cursor-pointer hover:text-red-500 transition-all duration-300 ">
              <img
                src={umls}
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />{" "}
              नेकपा एस
            </li>
            <li className="border-r border-gray-300 pr-6 mr-4 flex items-center gap-x-2 flex-shrink-0  cursor-pointer hover:text-red-500 transition-all duration-300 ">
              <img
                src={Janamat}
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />{" "}
              जनमत पार्टी
            </li>
            <li className="border-r border-gray-300 pr-6 mr-4 flex items-center gap-x-2 flex-shrink-0  cursor-pointer hover:text-red-500 transition-all duration-300 ">
              <img
                src={Dhakiya}
                alt=""
                className="w-[2rem] h-[2rem] rounded-full"
              />{" "}
              नागरिक उन्मुक्ति पार्टी
            </li>
            <li className="pr-6 flex items-center flex-shrink-0">अन्य</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rajniti;
