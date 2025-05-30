import React from "react";

const ImageToLeft = (props) => {
  return (
    <>
      <div className="flex flex-row-reverse   gap-x-5 items-center pb-4 border-b border-solid border-gray-300">
        <div className="w-[7.125rem] aspect-[1.266] overflow-hidden shrink-0 ">
          <img
            src={props.image}
            alt=""
            className="w-full h-full  object-cover object-center"
          />
        </div>
        <p className="text-[#000000DE] lg:text-[20px] text-[1rem] font-[600] lg:font-[500]  ">
          {props.text}
        </p>
      </div>
    </>
  );
};

export default ImageToLeft;
