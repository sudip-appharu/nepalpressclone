import React from "react";
import prakash from "../assets/prakash.png";
import np from "../assets/np.png";
import { MessageSquareText } from "lucide-react";
import Topics from "../Reusable/Topics";

const Sahitya = () => {
  return (
    <>
      <div className="lg:w-[65%] w-[95%] mx-auto pb-5 flex lg:flex-row flex-col gap-y-4 mt-4  lg:justify-between ">
        <div className="lg:w-[33%] w-full bg-white px-4 py-2 flex gap-x-3 items-center ">
          <div className="w-[4rem] h-[4rem] ">
            <img
              src={prakash}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          <span className="flex flex-col gap-y-1">
            <p className="font-[500] text-xl">
              प्रकाशचन्द्र खतिवडाका तीन कविता
            </p>
            <span className="flex gap-x-1">
              <MessageSquareText color="#656565" />
              <p className="text-[#656565]"> प्रकाशचन्द्र खतिवडा</p>
            </span>
          </span>
        </div>
        <div className="lg:w-[33%] w-full  bg-white px-4 py-2 flex gap-x-3 items-center ">
          <div className="w-[4rem] h-[4rem] ">
            <img
              src={np}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          <span className="flex flex-col gap-y-1">
            <p className="font-[500] text-xl">
              कवि याक्सोको सम्झनाको चोमोलुङ्मा’ सार्वजनिक
            </p>
            <span className="flex gap-x-1">
              <MessageSquareText color="#656565" />
              <p className="text-[#656565]"> नेपाल प्रेस</p>
            </span>
          </span>
        </div>
        <div className="lg:w-[33%] w-full  bg-white px-4 py-2 flex gap-x-3 items-center ">
          <div className="w-[4rem] h-[4rem] ">
            <img
              src={np}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>

          <span className="flex flex-col gap-y-1">
            <p className="font-[500] text-xl">
              लेखक बन्न पहिले राम्रो पाठक हुनुपर्छ: शिक्षामन्त्री पन्त
            </p>
            <span className="flex gap-x-1">
              <MessageSquareText color="#656565" />
              <p className="text-[#656565]"> नेपाल प्रेस</p>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Sahitya;
