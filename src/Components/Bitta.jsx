import React from "react";
import Topics from "../Reusable/Topics";
import rya from "../assets/rya.jpeg";
import budget from "../assets/budget.jpg";
import bank from "../assets/bank.jpg";
import bakyauta from "../assets/bakyauta.jpg";
import nmb from "../assets/nmb.jpg";
import Corporate from "./Corporate";

const Bitta = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-6">
        <div className="lg:w-[80%] w-full">
          <Topics heading={`वित्त प्रेस`} />
          <div className="flex flex-col gap-y-6">
            <div>
              <div className="flex md:flex-row md:gap-x-4  flex-col lg:flex-row gap-x-5 gap-y-4">
                <div className="lg:w-[26.25rem] w-full h-[20rem] lg:h-[25rem] relative">
                  <img
                    src={rya}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="gradient-over-image"></div>
                  <p className="text-over-gradient">
                    राष्ट्रिय आयोजना बैंकमा १३२७ वटा आयोजनाको ‘इन्ट्री’, तीन
                    करोड माथिका सबैभन्दा धेरै
                  </p>
                </div>
                <div className="w-full lg:w-[26.25rem] h-[20rem] lg:h-[25rem] relative">
                  <img
                    src={budget}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="gradient-over-image"></div>
                  <p className="text-over-gradient">
                    कर्मचारीको तलब बढ्दै, ‘डिजिट’ बारे यसो भन्छ मन्त्रालय
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-6">
              <div className="flex flex-col items-start gap-y-3 w-full sm:w-[48%] lg:w-[16.87rem]">
                <div className="w-full h-[10.93rem]">
                  <img
                    src={bank}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="font-[500] text-xl text-center">
                  राष्ट्र बैंकले बढायो अनिवार्य नगद मौज्दातको सीमा, अब ९०
                  प्रतिशत कायम
                </p>
              </div>
              <div className="flex flex-col items-start gap-y-3 w-full sm:w-[48%] lg:w-[16.87rem]">
                <div className="w-full h-[10.93rem]">
                  <img
                    src={bakyauta}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="font-[500] text-xl text-center">
                  राष्ट्र बैंकले बढायो अनिवार्य नगद मौज्दातको सीमा, अब ९०
                  प्रतिशत कायम
                </p>
              </div>
              <div className="flex flex-col items-start gap-y-3 w-full sm:w-[48%] lg:w-[16.87rem]">
                <div className="w-full h-[10.93rem]">
                  <img
                    src={nmb}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="font-[500] text-xl text-center">
                  राष्ट्र बैंकले बढायो अनिवार्य नगद मौज्दातको सीमा, अब ९०
                  प्रतिशत कायम
                </p>
              </div>
            </div>
          </div>
        </div>
        <Corporate />
      </div>
    </>
  );
};

export default Bitta;
