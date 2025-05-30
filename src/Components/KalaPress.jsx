import React from "react";
import mahabhoj from "../assets/mahabhoj.jpg";
import Topics from "../Reusable/Topics";
import missuniverse from "../assets/missuniverse.jpg";
import maha from "../assets/maha.jpg";
import rajeshHamal from "../assets/rajeshHamal.jpg";
import bibad from "../assets/bibad.jpg";

const KalaPress = () => {
  return (
    <>
      <div>
        <Topics heading={`कला प्रेस `} />
        
        <div className="flex lg:flex-row flex-col gap-y-5 gap-x-5">
          <div>
            <div className="lg:w-[31.875rem]  w-full lg:h-[37.5rem] relative">
              <img src={mahabhoj} alt="" className="maintain-image" />
              <div className="gradient-over-image"></div>
              <p className="text-over-gradient">
                राजावादी र एमालेको प्रदर्शनको मारमा ‘महाभोज’, हलहरूले शो हटाए,
                अग्रिम बुकिङको रकम रिफन्ड हुने
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <div className="lg:w-[20.625rem] w-full ">
              <div className="w-full h-[10.93rem] ">
                <img src={missuniverse} alt="" className="maintain-image" />
              </div>
              <p className="new-p mt-4 border-b border-dotted border-gray-400">
                ‘मिस युनिभर्स नेपाल’ अब रियालिटी शोको मोडलमा, विवाहितले पनि भाग
                लिन पाउने
              </p>
            </div>

            <div className="flex gap-x-3 ">
              <div className=" w-[8.56rem] h-[5.625rem] shrink-0 ">
                <img src={maha} alt="" className="maintain-image" />
              </div>
              <p className="new-p">
                आन्दोलन र विषम परिस्थितिको कारण देखाउँदै ‘महाभोज’ को प्रदर्शन
                स्थगित
              </p>
            </div>
            <div className="flex gap-x-3 ">
              <div className=" w-[8.56rem] h-[5.625rem] shrink-0 ">
                <img src={maha} alt="" className="maintain-image" />
              </div>
              <p className="new-p">
                आन्दोलन र विषम परिस्थितिको कारण देखाउँदै ‘महाभोज’ को प्रदर्शन
                स्थगित
              </p>
            </div>
            <div className="flex gap-x-3 ">
              <div className=" w-[8.56rem] h-[5.625rem] shrink-0 ">
                <img src={maha} alt="" className="maintain-image" />
              </div>
              <p className="new-p">
                आन्दोलन र विषम परिस्थितिको कारण देखाउँदै ‘महाभोज’ को प्रदर्शन
                स्थगित
              </p>
            </div>
          </div>

          <div>
            <div className="lg:w-[18.75rem] w-full mx-auto lg:h-[10.93rem]">
              <img src={bibad} alt="" className="maintain-image" />
            </div>
            <p className="new-p border-b border-solid border-gray-300 pb-4 mt-4">
              साढे दुई दशकअघिको गीत पारिजात प्रतिष्ठानले ‘हटाइदिनू’ भनेर पत्र
              काटेपछि नयाँ शब्दहरू राख्ने सूरमा संगीतकार शान्तिराम (भिडिओ)
            </p>
            <p className="new-p border-b border-solid border-gray-300 pb-4 mt-4">
              ‘महाभोज’ मा लुकाइएकी सुरक्षा, भूमिका कमजोर भएर कि कन्ट्रोभर्सीमा
              परेर ?
            </p>
            <p className="new-p border-b border-solid border-gray-300 pb-4 mt-4">
              सहकारी पीडितहरूलाई ‘महाभोज’ मा निम्तो, आज विशेष शो
            </p>
            <p className="new-p border-b border-solid border-gray-300 pb-4 mt-4">
              ‘भुइँ मान्छे’ माथि धनगढीमा समालोचनात्मक चर्चा
            </p>
            <p className="new-p border-b border-solid border-gray-300 pb-4 mt-4">
              ‘भुइँ मान्छे’ माथि धनगढीमा समालोचनात्मक चर्चा
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KalaPress;
