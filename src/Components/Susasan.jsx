import React from "react";
import Topics from "../Reusable/Topics";
import pokhara from "../assets/pokhara.jpg";
import mayor from "../assets/mayor.jpg";
import parit from "../assets/parit.jpg";
import baral from "../assets/baral.jpg";
import transparency from "../assets/transparency.jpg";
import bangla from "../assets/bangla.jpg";
import trump from "../assets/trump.jpg";
import putin from "../assets/putin.jpg";
import newzealand from "../assets/new.jpg";
import ImagesAndText from "../Reusable/imagesAndText";

const Susasan = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row  justify-center gap-y-5 lg:gap-x-10">
        <div className="w-full lg:w-[80%]">
          <Topics heading={`सुशासन प्रेस `} />
          <div>
            <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5">
              <div className="relative w-full lg:w-[26.25rem] h-auto lg:h-[25rem]">
                <img
                  src={pokhara}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
                <div className="gradient-over-image"></div>
                <p className="text-over-gradient">
                  पोखरा विमानस्थलको भ्रष्टाचारमा अख्तियारको अनुसन्धान सुरू,
                  क्यानसँग मागियो यी कागजात
                </p>
              </div>
              <div className="relative w-full lg:w-[26.25rem]  lg:h-[25rem]">
                <img
                  src={mayor}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
                <div className="gradient-over-image"></div>
                <p className="text-over-gradient">
                  इटहरीका मेयरको सवारी खरिद मोह- रित्तै गुड्छन् नगर बस, हेभी
                  गाडी पनि थन्किए
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row  gap-x-4 gap-y-6 lg:justify-between">
            <div className="w-full sm:w-[48%] lg:w-[17.43rem]">
              <div className="w-full h-[10.93rem] ">
                <img
                  src={baral}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <p className="lg:text-xl text-[1rem] lg:font-[500] font-[600] lg:mt-5 mt-1">
                बराल र मिश्र सचिवमा बढुवा, ८ जनाको सरुवा
              </p>
            </div>
            <div className="w-full sm:w-[48%] lg:w-[17.43rem]">
              <div className="w-full h-[10.93rem]">
                <img
                  src={transparency}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <p className="lg:text-xl text-[1rem] lg:font-[500] font-[600] lg:mt-5 mt-1">
                सुशासन र पारदर्शीताका लागि मिडियाको भूमिका महत्वपूर्ण :
                मुख्यमन्त्री आचार्य
              </p>
            </div>
            <div className="w-full sm:w-[48%] lg:w-[17.43rem]">
              <div className="w-full h-[10.93rem]">
                <img
                  src={parit}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <p className="lg:text-xl text-[1rem] lg:font-[500] font-[600] lg:mt-5 mt-1">
                कोशी प्रदेश सरकारको नीति तथा कार्यक्रम पारित
              </p>
            </div>
          </div>
        </div>

        <div className="w-[95%] mx-auto">
          <Topics heading={`विश्व प्रेस `} />

          <ImagesAndText
            image={bangla}
            text={` युनुसले बंगलादेशको भूमि अमेरिकालाई बेचेको हसिनाको आरोप, के हो सेन्ट
            मार्टिन टापु प्रकरण ?`}
            text1={` युक्रेनले रुसी राष्ट्रपति पुटिन चढेको हेलिकप्टर लक्षित ४६ वटा
              ड्रोन हमला गरेपछि…`}
            image1={putin}
            image2={newzealand}
            text2={`नेपाल आउँदै न्यूजिल्यान्डका उपप्रधानमन्त्री पिटर्सः अहिलेसम्मकै
              पहिलाे उच्च तहको भ्रमण`}
            image3={trump}
            text3={` हार्वर्डबारे ट्रम्प अडान- हामी अर्बौं डलर दिन्छौं, तर ऊ ठ्याक्कै
              खुलासा गर्न इच्छुक छैन`}
          />
        </div>
      </div>
    </>
  );
};

export default Susasan;
