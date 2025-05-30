import React from "react";

const imagesAndText = ({
  image,
  text,
  text1,
  image1,
  image2,
  text2,
  image3,
  text3,
}) => {
  return (
    <>
      <div className="flexm sm:flex-row flex-col gap-y-5">
        <div className="flex flex-col gap-y-3 mb-4">
          <div className="lg:w-[18.75rem] sm:h-[30vh]  w-full lg:h-[10.93rem]">
            <img src={image} alt="" className="maintain-image" />
          </div>
          <p className="lg:text-xl text-[1rem] font-[600] lg:font-[500]  ">
            {text}
          </p>
        </div>

        <div className="flex flex-col gap-y-4 sm:mt-10">
          <div className="flex gap-x-3 pb-2 border-b border-dashed items-center  border-gray-400">
            <div className="w-[6.56rem] h-[5.62rem] shrink-0  ">
              <img src={image1} alt="" className="maintain-image" />
            </div>
            <p className="lg:text-xl text-[1rem] font-[600] lg:font-[500] ">
              {text1}
            </p>
          </div>

          <div className="flex gap-x-3 pb-2 border-b border-dashed items-center  border-gray-400">
            <div className="w-[6.56rem] h-[5.62rem] shrink-0 ">
              <img src={image2} alt="" className="maintain-image" />
            </div>
            <p className="lg:text-xl text-[1rem] font-[600] lg:font-[500] ">
              {text2}
            </p>
          </div>

          <div className="flex gap-x-3 pb-2 border-b border-dashed items-center  border-gray-400">
            <div className="w-[6.56rem] h-[5.62rem] shrink-0 ">
              <img src={image3} alt="" className="maintain-image" />
            </div>
            <p className="lg:text-xl text-[1rem] font-[600] lg:font-[500] ">
              {text3}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default imagesAndText;
