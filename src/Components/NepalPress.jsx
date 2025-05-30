import React from "react";
import Topics from "../Reusable/Topics";
import rajmarga from "../assets/rajmarga.jpg";
import ImageToRight from "../Reusable/ImageToRight";
import khanepani from "../assets/beni.jpg";
import hatekagaj from "../assets/hatekagaj.jpg";
import mandir from "../assets/mandir.jpg";
import dhan from "../assets/dhan.jpeg";
import ImageToBottom from "../Reusable/ImageToBottom";
import loksewa from "../assets/loksewa.jpg";
import nati from "../assets/nati.jpg";
import mrit from "../assets/mrit.png";
import ImageToLeft from "../Reusable/ImageToLeft";
import rabi from "../assets/rabi.png";
import sixtyfour from "../assets/sixtyfour.jpg";
import visitVisa from "../assets/visitVisa.jpg";
import adhivesan from "../assets/adhivesan.jpg";
import balen from "../assets/balen.jpg";

const NepalPress = () => {
  return (
    <>
      <Topics heading={`नेपाल प्रेस `} />
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-5 w-[90%] mx-auto">
        <div className="flex flex-col gap-y-10 border-gray-400 lg:border-r lg:pr-6 border-dotted lg:w-[65%] w-full">
          <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
            <div className="relative w-full lg:max-w-[31.75rem]  group overflow-hidden">
              <img
                src={rajmarga}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
              <h1 className="absolute bottom-2 md:bottom-4 lg:left-4 left-[25%] text-sm md:text-4xl lg:text-2xl sm:text-3xl text-center font-bold text-white">
                पहिरोले राप्ती राजमार्ग अवरुद्ध
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-x-4 gap-y-5">
              <div className="sm:flex-row ">
                <ImageToRight
                  text={`बेनी खानेपानी आयोजनाको क्षमता विस्तार`}
                  image={khanepani}
                />
                <ImageToRight
                  text={`सेवा निवृत्त शिक्षकद्वारा हाते कागज उद्योग सञ्चालन`}
                  image={hatekagaj}
                />
              </div>

              <div className="sm:flex-row ">
                <ImageToRight
                  text={`एउटै ढुङ्गाबाट मालिका मन्दिर पुनःनिर्माण`}
                  image={mandir}
                />
                <ImageToRight
                  text={`किसानलाई अनुदानमा धानको बीउ वितरण`}
                  image={dhan}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-y-5 sm:gap-x-5">
            <ImageToBottom
              text={`लोक सेवाले स्थगित गर्‍यो जेठ १५ को परीक्षा, यस्तो छ संशोधित मिति`}
              image={loksewa}
            />
            <ImageToBottom
              text={`कान्छाका नाती भन्छन्- हजुरबुबाले अनुभवले र हामीले अध्ययनले हिमालको दुःख देख्यौँ`}
              image={nati}
            />
            <ImageToBottom
              text={`जनकपुरधामको अग्निकुण्डमा मृत भेटिए युवक`}
              image={mrit}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-5 w-full lg:w-[35%]">
          <div className="sm:flex-row sm:gap-x-4">
            <ImageToLeft
              text={`रविविरुद्धको आदेशः सर्वोच्चको कथ्यमा लुकाइएका तथ्य`}
              image={rabi}
            />
            <ImageToLeft
              text={`युवा संघको महाधिवेशनमा ओलीको सन्देश- जसले जित्छ, उही नै मेरो अध्यक्ष हो, हार्नेलाई पार्टीमा व्यवस्थापन गरिन्छ`}
              image={adhivesan}
            />
          </div>

          <div>
            <ImageToLeft
              text={`भिजिट भिसा प्रकरण- तीर्थ भट्टराईसँग बयान लिनै बाँकी, पैसा पार्किङस्थल खोज्दै अख्तियार`}
              image={visitVisa}
            />
            <ImageToLeft
              text={`युवा संघ महाधिवेशनः लेखा आयोगका उपाध्यक्ष र सचिवसहित ६४ जना निर्विरोध`}
              image={sixtyfour}
            />
          </div>
          <ImageToLeft
            text={`उपमेयरको नेतृत्वमा बालेनलाई सबै कार्यपालिका सदस्यको पत्र, ७ दिनभित्र बैठक माग`}
            image={balen}
          />
        </div>
      </div>
    </>
  );
};

export default NepalPress;
