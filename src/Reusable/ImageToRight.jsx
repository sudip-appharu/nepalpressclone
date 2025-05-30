import React from "react";

const ImageToRight = (props) => {
  return (
    <>
      <div className=" flex gap-x-5 items-center mt-2">
        <div className="w-[32%]  overflow-hidden shrink-0">
          <img
            src={props.image}
            alt=""
            className="w-full h-full  object-cover object-center"
          />
        </div>
        <p className="text-[#000000DE] lg:text-[20px] text-[1rem] font-[600] lg:font-[500] mt-1 "> {props.text} </p>
      </div>
    </>
  );
};

export default ImageToRight;
