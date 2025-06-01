import { Clock4, Search, TrendingUp } from "lucide-react";
import LeftSideNavbar from "./LeftSideNavbar";

const NavigationBar = () => {
  return (
    <>
      <div className="border-y border-solid border-gray-300 ">
        <LeftSideNavbar />
        <ul className="lg:flex justify-between items-center w-[65%] hidden px-4 mx-auto">
          <ul className="flex items-center whitespace-nowrap gap-x-7 font-semibold py-2">
            <li className="cursor-pointer hover:text-red-700 transition-all duration-300">
              होमपेज
            </li>
            <li className="flex items-center gap-x-1 relative group cursor-pointer hover:text-red-700 transition-all duration-300 ">
              राजनीति
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover:block hidden absolute top-6  bg-[#f7efef] px-4 py-2 text-xl ">
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  नेकपा एमाले{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  नेपाली कांग्रेस{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  माओवादी केन्द्र{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  राष्ट्रिय स्वतन्त्र पार्टी{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  जसपा नेपाल{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  नागरिक उन्मुक्ति पार्टी{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  जनमत पार्टी{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  राप्रपा{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  नेकपा एस{" "}
                </li>
              </ul>
            </li>
            <li className="cursor-pointer hover:text-red-700 transition-all duration-300">
              नेपालप्रेस
            </li>
            <li className="flex gap-x-1 items-center relative group cursor-pointer hover:text-red-700 transition-all duration-300 ">
              नेपाल पैरवी
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover:block hidden absolute top-6  bg-[#f7efef] px-4 py-2 text-xl ">
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  नेपाल टक
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  नेपाल चिन्तन
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  साहित्य ब्लग
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  अन्य
                </li>
              </ul>
            </li>
            <li className="cursor-pointer hover:text-red-700 transition-all duration-300">
              समाज चित्र{" "}
            </li>
            <li className="cursor-pointer hover:text-red-700 transition-all duration-300">
              बित्त प्रेस
            </li>
            <li className="cursor-pointer hover:text-red-700 transition-all duration-300">
              कला प्रेस
            </li>
            <li className="cursor-pointer hover:text-red-700 transition-all duration-300">
              खेल
            </li>
            <li className="cursor-pointer hover:text-red-700 transition-all duration-300">
              स्वास्थ्य जीवनशैली
            </li>
            <li className="cursor-pointer hover:text-red-700 transition-all duration-300">
              प्रवास
            </li>
            <li className="flex gap-x-1 items-center relative  group cursor-pointer hover:text-red-700 transition-all duration-300 ">
              विविध
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
              <ul className="group-hover:block hidden absolute top-6  bg-[#f7efef] px-4 py-2 text-xl ">
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  टि 20 विश्वकप 2024
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  महानिर्वाचनको महासंग्राम{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  स्थानीय निर्वाचन - 2079{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  फुटबल महासंग्राम{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  अपराध सुरक्षा{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  हाम्रा प्रतिनिधि{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  प्रविधि{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  विश्व प्रेस{" "}
                </li>
                <li className="border-b border-solid border-gray-300 py-4 cursor-pointer hover:text-blue-700 transition-all duration-300">
                  टापनटिपन
                </li>
              </ul>
            </li>
          </ul>
          <ul className="flex gap-x-5 font-semibold p-3">
            <li className="w-[1.5rem] h-[1.5rem] rounded-full bg-red-700 text-white text-[1rem] p-1 box-content text-center cursor-pointer hover:text-blue-950 transition-all duration-300">
              EN
            </li>
            <li>
              <Clock4
                size={30}
                strokeWidth={1.25}
                stroke="red"
                className="cursor-pointer"
              />
            </li>
            <li>
              <TrendingUp
                size={30}
                strokeWidth={1.25}
                stroke="red"
                className="cursor-pointer "
              />
            </li>
            <li>
              <Search
                size={30}
                strokeWidth={1.25}
                stroke="red"
                className="cursor-pointer "
              />
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
