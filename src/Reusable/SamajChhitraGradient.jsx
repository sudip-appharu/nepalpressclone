import React from "react";

const SamajChhitraGradient = ({ image, text }) => {
  return (
    <div className=" relative group overflow-hidden">
      <div className="lg:w-[18rem] w-full h-auto lg:h-[25rem]">
        <img
          src={image}
          alt=""
          className="maintain-image group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="gradient-over-image" />
      <p className="text-over-gradient"> {text} </p>
    </div>
  );
};

export default SamajChhitraGradient;
