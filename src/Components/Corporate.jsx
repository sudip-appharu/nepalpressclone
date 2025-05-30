import React from "react";
import citizens from "../assets/citizens.jpg";
import Topics from "../Reusable/Topics";

const Corporate = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 ">
        <Topics heading={`कर्पोरेट प्रेस `} />
        <div className="pb-4 border-b border-dotted border-gray-500">
          <div className="w-[18.75rem] h-[13.75rem] relative   ">
            <img src={citizens} alt="" className="maintain-image" />
            <div className="gradient-over-image"></div>
            <p className="text-over-gradient">
              सिटिजन्स् बैंक र गोल्डेन हस्पिटल प्रा.ली. बीच समझदारी
            </p>
          </div>
        </div>

        <div className="flex flex-col ">
          <p className="font-[600] text-xl  py-4 cursor-pointer hover:text-red-700 duration-300 transition-all border-b border-dotted border-gray-500 hover:bg-[#d9d9d9] ">
            इनड्राइभको ‘राइड टु सपोर्ट‘ अभियान
          </p>
          <p className="font-[600] text-xl  py-4 cursor-pointer hover:text-red-700 duration-300 transition-all border-b border-dotted border-gray-500 hover:bg-[#d9d9d9] ">
            सिटिजन्स बैंक र हिल्टन काठमाण्डौं होटल बीच समझदारी
          </p>
          <p className="font-[600] text-xl  py-4 cursor-pointer hover:text-red-700 duration-300 transition-all border-b border-dotted border-gray-500 hover:bg-[#d9d9d9] ">
            इमामी लिमिटेडद्वारा नेपालमा ‘नवरत्न बीट मसाज २०२५’ अभियान प्रारम्भ
          </p>
          <p className="font-[600] text-xl  py-4 cursor-pointer hover:text-red-700 duration-300 transition-all border-b border-dotted border-gray-500 hover:bg-[#d9d9d9] ">
            स्ट्यान्डर्ड चार्टर्ड बैंकले छैटौं पटक पायो ‘थ्री ए’ रेटिङ
          </p>
          <p className="font-[600] text-xl  py-4 cursor-pointer hover:text-red-700 duration-300 transition-all border-b border-dotted border-gray-500 hover:bg-[#d9d9d9] ">
            सिटिजन्स बैंक र लोमस डिजिटल प्रा.लि.बीच समझदारी
          </p>
        </div>
      </div>
    </>
  );
};

export default Corporate;
