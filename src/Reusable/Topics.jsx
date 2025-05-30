import React from "react";

const Topics = (props) => {
  return (
    <div className="flex justify-between items-center my-8">
      {props.theme && (
        <h2 className={`text-2xl font-bold text-${props.theme} `}>
          {props.heading}
        </h2>
      )}

      {!props.theme && (
        <h2 className={`text-2xl font-bold `}> {props.heading} </h2>
      )}
      <div className="grow p-0 mx-2 border-solid border border-red-700"></div>
      {props.theme && (
        <p
          className={`flex gap-x-5 items-center cursor-pointer transition-all duration-300 hover:bg-black text-${props.theme}  hover:text-white rounded-2xl px-2 py-1 `}
        >
          सबै
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            class="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </p>
      )}

      {!props.theme && (
        <p className="flex gap-x-5 items-center cursor-pointer transition-all duration-300 hover:bg-black text-black hover:text-white rounded-2xl px-2 py-1 ">
          सबै
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            class="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </p>
      )}
    </div>
  );
};

export default Topics;
