import React from "react";

const NewsCard = (props) => {
  return (
    <>
      <div className="flex flex-col lg:gap-y-8 gap-y-2 lg:mt-12 mt-4 pb-4 border-b border-solid border-gray-200">
        <h1 className="font-bold lg:text-6xl text-3xl  cursor-pointer hover:text-red-600 transition-all duration-300 text-center leading-tight">
          {props.heading}
        </h1>
        <div className="flex lg:gap-x-5 gap-x-2 items-center justify-center">
          <div className="lg:w-[2.5rem] w-[1.5rem] h-[1.5rem] lg:h-[2.5rem]  rounded-full border-red-700 border-solid border ">
            <img
              src={props.posterImage}
              alt=""
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <p className="text-[#656565] font-semibold lg:text-[1rem]  "> {props.name} </p>
        </div>
        {props.newsImage && (
          <div className="w-full lg:h-[55vh] h-[20vh] sm:h-[40vh]  ">
            <img
              src={props.newsImage}
              alt=""
              className="w-full h-full object-cover object-center "
            />
          </div>
        )}
        <p className="text-center lg:text-[1.3rem] text-[1rem] sm:[1.2rem] text-[#656565]">
          {props.detail}
        </p>
      </div>
    </>
  );
};

export default NewsCard;
