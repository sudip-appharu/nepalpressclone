import React from "react";
import ward from "../assets/ward.png";
import sudur from "../assets/sudur.png";
import election from "../assets/election.jpg";
import kamal from "../assets/kamal.jpg";

const Representative = () => {
  return (
    <>
      <div className="mt-16 shadow-md px-4 py-2 w-[99%] mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div className="grow border border-gray-300 border-solid p-0 h-px"></div>
          <h1 className="font-bold text-3xl px-4">हाम्रा प्रतिनिधि </h1>
          <div className="grow border border-gray-300 border-solid p-0 h-px"></div>
        </div>

        <div className="flex lg:gap-x-10 lg:flex-row gap-y-10 flex-col lg:justify-center">
          <div className="flex sm:flex-row sm:gap-x-10">
            <div className=" w-[16.68rem]">
              <div className="w-full h-[10.93rem] ">
                <img src={ward} alt="" className="maintain-image" />
              </div>
              <p className="lg:text-xl text-[1rem] font-[600] lg:font-[500] lg:mt-5 mt-1 ">
                वडाध्यक्ष भूपालसिंहः २५ वर्षअघि प्रधानपञ्च हराए, ०७९ मा आफ्नै
                पार्टी सभापतिलाई पन्छाए
              </p>
            </div>
            <div className=" w-[16.68rem]">
              <div className="w-full h-[10.93rem] ">
                <img src={sudur} alt="" className="maintain-image" />
              </div>
              <p className="lg:text-xl text-[1rem] font-[600] lg:font-[500] lg:mt-5 mt-1 ">
                ‘हिजो काठमाडौँबाट सुदूरपश्चिम हेपियो, आज सुदूरपश्चिमबाट बाजुरा
                हेपिएको छ’
              </p>
            </div>
          </div>

          <div className="flex sm:flex-row sm:gap-x-10">
            <div className=" w-[16.68rem]">
              <div className="w-full h-[10.93rem] ">
                <img src={election} alt="" className="maintain-image" />
              </div>
              <p className="lg:text-xl text-[1rem] font-[600] lg:font-[500] lg:mt-5 mt-1 ">
                निर्वाचन आयोगको एउटा बाध्यकारी निर्णय, जसले बढायाे महिला
                जनप्रतिनिधि
              </p>
            </div>
            <div className=" w-[16.68rem]">
              <div className="w-full h-[10.93rem] ">
                <img src={kamal} alt="" className="maintain-image" />
              </div>
              <p className="lg:text-xl text-[1rem] font-[600] lg:font-[500] lg:mt-5 mt-1 ">
                हुकुमसिंहको ‘हुकुम’ ले सुधारिँदै कमल गाउँपालिकाको शैक्षिक
                क्षेत्र
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Representative;
