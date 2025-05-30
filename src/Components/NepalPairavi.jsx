import React from "react";
import Topics from "../Reusable/Topics";
import NepalChintan from "./NepalChintan";
import ashis from "../assets/ashis-gajurel.jpg";
import ImageToRight from "../Reusable/ImageToRight";
import sitaula from "../assets/sitaula.jpg";
import bold from "../assets/bold.png";

const NepalPairavi = () => {
  return (
    <>
      <h1 className="bg-red-700 text-white text-center text-xl rounded-md px-4 py-2 w-fit mx-auto mt-4">
        नेपाल पैरवी
      </h1>

      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 px-4 lg:px-0">
        <div className="py-10 lg:w-[72.5%] w-full">
          <Topics heading={`नेपाल टक`} />

          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col lg:flex-row h-auto relative">
              <div className="lg:w-[25rem] w-full h-[15rem] lg:h-[20rem] relative lg:z-10 overflow-hidden mx-auto">
                <img
                  src={ashis}
                  alt=""
                  className="maintain-image scale-150"
                />
              </div>

              <div className="w-full lg:w-[70%] h-auto bg-black pt-10 lg:pl-[13rem] lg:pr-[3rem] px-4  lg:mt-0">
                <h1 className="text-white text-2xl lg:text-3xl font-bold">
                  एउटा रुखको कारण पूर्वाधारको डिजाइन नै चेन्ज गर्नुपर्ने कस्तो
                  देश हो ?
                </h1>
                <p className="text-white text-base lg:text-xl mt-4">
                  काठमाडौं । नेपालमा सार्वजनिक यातायातको क्षेत्र सुधार गर्ने बहस
                  चलेको धेरै भइसक्यो । सार्वजनिक यातायातलाई व्यवस्थापनलाई
                  सरकारले पनि प्राथमिकता......
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="w-full sm:w-[11.68rem] h-[8.75rem]">
                  <img
                    src={sitaula}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-medium sm:mt-0 mt-2">
                  आर्थिक समृद्धि हासिल गर्न ठूला दलबीचमा सहकार्य आवश्यक :
                  कृष्णप्रसाद सिटौला
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="w-full sm:w-[11.68rem] h-[8.75rem]">
                  <img
                    src={bold}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-medium sm:mt-0 mt-2">
                  ‘यसै वर्षको बजेटमार्फत ‘वृद्ध भत्ता’बारे ‘बोल्ड’ निर्णय
                  गर्नुपर्छ’
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[28.5%] mt-6 lg:mt-[3.7rem] px-4 lg:px-0">
          <NepalChintan />
        </div>
      </div>
    </>
  );
};

export default NepalPairavi;
