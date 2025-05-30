import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="mt-24 w-screen pt-10 border-t border-gray-300 bg-[#f9f9f9]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-8">
            <div className="flex-1 min-w-[250px] pb-6 border-b border-r border-gray-300 pr-6">
              <img src={logo} alt="" className="w-32" />
              <p className="mt-5 text-gray-600">
                Nepal E. Press Media Pvt. Ltd.
              </p>
              <p className="text-gray-600">
                दर्ता नं.: ०००५२/०७८–७९ (Office of the Communication
              </p>
              <p className="text-gray-600">
                Registrar, Bagamati Province, Nepal)
              </p>
              <p className="text-gray-600">
                Minbhawan, New Baneshwor, Kathmandu
              </p>
              <p className="text-gray-600">
                Phone: +977 1 5909011 , +977 1 5909021
              </p>
              <p className="text-gray-600">Email: news@nepalpress.com</p>

              <div className="mt-5 border-y border-gray-300 flex justify-center gap-8 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="red"
                  className="cursor-pointer hover:scale-150 transition-transform duration-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="red"
                  className="cursor-pointer hover:scale-150 transition-transform duration-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="red"
                  className="cursor-pointer hover:scale-150 transition-transform duration-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="red"
                  className="cursor-pointer hover:scale-150 transition-transform duration-300"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </div>

              <p className="py-3 text-xl font-semibold text-red-700">
                Download Our App
              </p>
            </div>

            <div className="flex-1 min-w-[200px] px-4 border-r border-gray-300">
              <h3 className="text-red-600 text-xl font-semibold">
                Quick links
              </h3>
              <ul className="text-gray-600 mt-6 space-y-2">
                <li>Home</li>
                <li>About Us</li>
                <li>Advertisement</li>
                <li>Terms And Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="flex-1 min-w-[200px] px-4 border-r border-gray-300">
              <h3 className="text-red-600 text-xl font-semibold">
                Quick links
              </h3>
              <ul className="text-gray-600 mt-6 space-y-2">
                <li>Home</li>
                <li>About Us</li>
                <li>Advertisement</li>
                <li>Terms And Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="flex-1 min-w-[250px] px-4">
              <h3 className="text-red-600 text-xl font-semibold">Our Team</h3>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
                <span>
                  <p className="text-gray-600 text-xs font-semibold">
                    प्रधान सम्पादक
                  </p>
                  <h4 className="text-sm font-medium">मात्रिका पौडेल</h4>
                </span>
                <span>
                  <p className="text-gray-600 text-xs font-semibold">अध्यक्ष</p>
                  <h4 className="text-sm font-medium">विन्दुराज लम्साल</h4>
                </span>
                <span>
                  <p className="text-gray-600 text-xs font-semibold">सम्पादक</p>
                  <h4 className="text-sm font-medium">चिरञ्जीवी पौडेल</h4>
                </span>
                <span>
                  <p className="text-gray-600 text-xs font-semibold">
                    निर्देशक
                  </p>
                  <h4 className="text-sm font-medium">रोशन प्रसाई</h4>
                </span>
              </div>
              <button className="mt-5 bg-red-600 text-white px-4 py-2 rounded-full">
                View All
              </button>

              <div className="w-full bg-[#0f0e0ee3] px-4 py-4 mt-5 rounded-2xl">
                <h1 className="pb-3 text-white text-xl font-bold border-b border-white">
                  Advertisement
                </h1>
                <div className="text-white mt-3 space-y-4 text-sm">
                  <div>
                    <p>Dinesh Kumar Lamsal</p>
                    <p>Mobile No. : 9851035546</p>
                    <p>E-mail: dinesh@nepalpress.com</p>
                  </div>
                  <div>
                    <p>Krishna Kaphle</p>
                    <p>Mobile No. : 9851187743</p>
                    <p>E-mail: krishna.kaphle@nepalpress.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
