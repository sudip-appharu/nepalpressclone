import React from "react";
import Topics from "../Reusable/Topics";
import mahesh from "../assets/mahesh.jpg";
import ramehs from "../assets/ramehs.jpg";
import rajinama from "../assets/rajinama.jpg";
import tirtha from "../assets/tirtha.jpg";

const Video = () => {
  return (
    <>
      <div className="w-screen mt-10 bg-[#000000]">
        <div className="lg:w-[65%] w-full mx-auto p-4">
          <Topics heading={`भिडियो`} theme={`white`} className="text-white" />
        </div>
        <div className="w-[90%] mx-auto flex flex-wrap gap-x-5 gap-y-6 justify-center">
          <div className="w-full sm:w-[47%] lg:w-[23.56rem] lg:h-[31.25rem] relative cursor-pointer group overflow-hidden">
            <img
              src={mahesh}
              alt=""
              className="maintain-image group-hover:scale-110 transition-transform duration-500"
            />
            <div className="gradient-over-image"></div>
            <p className="text-over-gradient">
              रवि लामिछाने सहकारी ठग मात्रै होइन, रास्वपा नै ठगको संरक्षक हो :
              महेश बस्नेत (भिडिओ)
            </p>
          </div>
          <div className="w-full sm:w-[47%] lg:w-[23.56rem] lg:h-[31.25rem] relative cursor-pointer group overflow-hidden">
            <img
              src={tirtha}
              alt=""
              className="maintain-image group-hover:scale-110 transition-transform duration-500"
            />
            <div className="gradient-over-image"></div>
            <p className="text-over-gradient">
              तीर्थ भट्टराई गृहमा कसरी आए ? लेखकले लिए प्रचण्ड-बालकृष्णदेखि
              रविसम्मको नाम (भिडिओ)
            </p>
          </div>
          <div className="w-full sm:w-[47%] lg:w-[23.56rem] lg:h-[31.25rem] relative cursor-pointer group overflow-hidden">
            <img
              src={ramehs}
              alt=""
              className="maintain-image group-hover:scale-110 transition-transform duration-500"
            />
            <div className="gradient-over-image"></div>
            <p className="text-over-gradient">
              प्रधानमन्त्रीले काठमाडौंमा संगीतमय नियन्त्रणको कुरा गर्नुभएको होः
              गृहमन्त्री लेखक (भिडिओ)
            </p>
          </div>
          <div className="w-full sm:w-[47%] lg:w-[23.56rem] lg:h-[31.25rem] relative cursor-pointer group overflow-hidden">
            <img
              src={rajinama}
              alt=""
              className="maintain-image group-hover:scale-110 transition-transform duration-500"
            />
            <div className="gradient-over-image"></div>
            <p className="text-over-gradient">
              गृहमन्त्रीको राजीनामाबाट पछि हटेका छैनौँ, बजेट पेस गर्न दिन्छौँ :
              माओवादी (भिडिओ)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
