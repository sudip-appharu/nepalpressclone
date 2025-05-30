import React from "react";

const NepalChintanCard = (props) => {
  return (
    <>
      <div className="border border-solid border-gray-400 p-5 flex flex-col gap-y-5">
        <h4 className="font-bold text-xl"> {props.text} </h4>
        <div className="flex gap-x-5">
          <div className="h-[4rem] w-[4rem] rounded-full p-1 border-red-600 border-solid border ">
            <img
              src={props.image}
              alt=""
              className="h-full w-full object-center object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-left"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            </svg>

            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NepalChintanCard;
