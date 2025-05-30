import React from "react";

const ImageToBottom = (props) => {
  return (
    <div className="flex flex-col mt-5 items-start w-full max-w-md px-4 ">
      <div className="w-full h-[10rem] rounded-md">
        <img
          src={props.image}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <p className="mt-2 text-[#000000DE] text-base sm:text-lg text-left w-full font-[500]">
        {props.text}
      </p>
    </div>
  );
};

export default ImageToBottom;
