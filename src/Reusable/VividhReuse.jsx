import React from "react";

const VividhReuse = ({ image, text }) => {
  return (
    <>
      <div className="flex gap-x-5 items-center pb-4 ">
        <div className="w-[5.625rem] h-[5.625rem] shrink-0 ">
          <img src={image} alt="" className="maintain-image" />
        </div>
        <p className="new-p"> {text} </p>
      </div>
    </>
  );
};

export default VividhReuse;
