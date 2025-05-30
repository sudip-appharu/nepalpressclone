import React from "react";

const LeftSideNavbar = () => {
  return (
    <>
      <div className="w-[15%] bg-[#191919] text-white">
        <ul>
          <li>होमपेज</li>
          <li>
            <a>राजनीति</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            ></svg>
          </li>
          <li>नेपालप्रेस</li>
          <li>
            <a>नेपाल पैरवी</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            ></svg>
          </li>
          <li>समाज चित्र</li>
          <li>बित्त प्रेस</li>
          <li>कला प्रेस</li>
          <li>खेल</li>
          <li>स्वास्थ्य जीवनशैली</li>
          <li>प्रवास</li>
          <li>
            <a>विविध</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            ></svg>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftSideNavbar;
