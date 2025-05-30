import React from "react";
import bluelight from "../assets/bluelight.jpg";
import baithak from "../assets/baithak.png";
import accident from "../assets/accident.jpg";
import rainstoday from "../assets/rainstoday.jpeg";

const BelowNews = () => {
  return (
    <>
      <div className="lg:mt-16 mt-8 relative flex lg:flex-row flex-col gap-y-5 justify-between gap-x-10">
        <div className="lg:w-[51rem] w-full lg:h-[35rem] h-auto sm:h-[30vh] relative group overflow-hidden shrink-0 rounded-md ">
          <img
            src={bluelight}
            alt=""
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500"
          />
          <div className=" bg-gradient-to-t from-black to-transparent h-1/2 absolute bottom-0 left-0 right-0 z-1 "></div>
          <h1 className="font-bold lg:text-3xl text-xl text-center absolute lg:bottom-4 bottom-1 left-4 text-white z-2">
            यस्तो सगरमाथा आरोहीहरूको कुम्भ मेला ‘समिटर्स समिट’ ( तस्बिरहरू)
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="lg:w-[23.75rem] w-full lg:h-[15.625rem] h-auto sm:h-[30vh] relative group overflow-hidden rounded-xl shadow-md">
              <img
                src={baithak}
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="bg-gradient-to-t from-black/80 to-transparent h-1/2 absolute bottom-0 left-0 right-0 z-10" />
              <h1 className="font-bold text-xl text-center absolute bottom-4 left-4 text-white z-20">
                राप्रपाले बोलायो संसदीय दलको बैठक
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col sm:flex-row sm:gap-x-5 gap-y-6">
              <div className="flex gap-x-6 sm:flex-col items-center">
                <div className="w-[18rem] h-[7.25rem] sm:h-[10rem] rounded-md overflow-hidden shadow-sm">
                  <img
                    src={accident}
                    alt=""
                    className="object-cover object-center h-full w-full"
                  />
                </div>
                <p className="text-[1.1rem] text-[#444] leading-snug sm:w-[18rem] sm:mt-2 font-bold  ">
                  मोटरसाइकल दुर्घटनामा दुईको मृत्यु, एक जना गम्भीर घाइते
                </p>
              </div>
              <div className="flex gap-x-6 sm:flex-col items-center">
                <div className="w-[18rem] h-[7.25rem] sm:h-[10rem] rounded-md overflow-hidden shadow-sm">
                  <img
                    src={rainstoday}
                    alt=""
                    className="object-cover object-center h-full w-full"
                  />
                </div>
                <p className="text-[1.1rem] text-[#444] leading-snug sm:w-[18rem] sm:mt-2 font-bold  ">
                  मोटरसाइकल दुर्घटनामा दुईको मृत्यु, एक जना गम्भीर घाइते
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BelowNews;
