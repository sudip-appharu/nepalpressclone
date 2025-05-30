import React from "react";
import Topics from "../Reusable/Topics";
import corona from "../assets/corona.jpg";
import kidney from "../assets/kidney.jpg";
import unknown from "../assets/unknown.jpg";
const Health = () => {
  return (
    <>
      <div>
        <Topics heading={`स्वास्थ्य जीवनशैली`} />
        <div className="flex lg:flex-row flex-col gap-y-5 lg:gap-x-10">
          <div className="flex lg:flex-row flex-col gap-y-5 lg:gap-x-5">
            <div className="lg:w-[26.68rem] w-full  lg:h-[32.5rem] relative overflow-hidden cursor-pointer group ">
              <img
                src={corona}
                alt=""
                className="maintain-image group-hover:scale-110 duration-500"
              />
              <div className="gradient-over-image"> </div>
              <p className="text-over-gradient">
                भारतमा फैलियो कोभिड संक्रमण, नेपालसँग जोडिएका प्रदेशमा पनि भेटिए
                संक्रमित
              </p>
            </div>
            <div className="lg:w-[26.68rem] w-full lg:h-[32.5rem] h-auto relative overflow-hidden cursor-pointer group ">
              <img
                src={kidney}
                alt=""
                className="maintain-image group-hover:scale-110 duration-500"
              />
              <div className="gradient-over-image"> </div>
              <p className="text-over-gradient">
                मिर्गौला रोग : लक्षण र सावधानीका उपाय
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <div className="w-[18.75rem] h-[10.83] relative">
              <img src={unknown} alt="" />
            </div>
            <p className="py-4 border-b border-dotted border-gray-500 cursor-pointer text-xl font-[500] hover:text-red-700 hover:bg-[#d9d9d9] transition-all duration-500 ">
              रामपुरका सबै बालबालिकाले पूर्णखोप लगाए
            </p>
            <p className="py-4 border-b border-dotted border-gray-500 cursor-pointer text-xl font-[500] hover:text-red-700 hover:bg-[#d9d9d9] transition-all duration-500 ">
              धुलिखेल अस्पताल ट्रमा तथा आपतकालीन केन्द्र सुधारका लागि जापानले ५७
              करोड येन अनुदान दिने
            </p>
            <p className="py-4 border-b border-dotted border-gray-500 cursor-pointer text-xl font-[500] hover:text-red-700 hover:bg-[#d9d9d9] transition-all duration-500 ">
              कर्मचारीलाई मात्र लक्षित गरी सिभिल अस्पतालमा अब सन्ध्याकालीन सेवा
            </p>
            <p className="py-4 border-b border-dotted border-gray-500 cursor-pointer text-xl font-[500] hover:text-red-700 hover:bg-[#d9d9d9] transition-all duration-500 ">
              त्रिचन्द्रमा ‘मानसिक स्वास्थ्य मेला’ (तस्बिरहरू)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Health;
