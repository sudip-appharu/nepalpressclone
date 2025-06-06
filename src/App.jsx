import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import News from "./Reusable/News";
import BelowNews from "./Components/BelowNews";
import Rajniti from "./Components/Rajniti";
import BelowRajnitiBar from "./Components/BelowRajnitiBar";
import NepalPress from "./Components/NepalPress";
import NepalPairavi from "./Components/NepalPairavi";
import Sahitya from "./Components/Sahitya";
import Samaj from "./Components/Samaj";
import Bitta from "./Components/Bitta";
import Health from "./Components/Health";
import Representative from "./Components/Representative";
import Susasan from "./Components/Susasan";
import KalaPress from "./Components/KalaPress";
import Video from "./Components/Video";
import Vividh from "./Components/Vividh";
import Footer from "./Components/Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import logo from "./assets/logo.png";
import DateAndTime from "./Components/DateAndTime";
import User from "./context/user";

function App() {
  const { isNavOpen, setIsNavOpen } = useContext(User);
  return (
    <>
      <div className="font-mukta">
        <div className="sticky top-0 pt-4 md:top-5 bg-white w-screen py-1 cursor-pointer  lg:hidden z-100 pl-4 pr-8 flex flex-row-reverse justify-between items-center ">
          {!isNavOpen ? (
            <RxHamburgerMenu
              size={30}
              onClick={() => setIsNavOpen(true)}
              className={` transition-transform duration-1000 ${
                isNavOpen && `rotate-90`
              }`}
            />
          ) : (
            <ImCross
              size={25}
              stroke="blue"
              strokeWidth={1}
              onClick={() => setIsNavOpen(false)}
              className={` transition-transform duration-500 ${
                isNavOpen && `rotate-90`
              }`}
            />
          )}
          <DateAndTime />
          <img src={logo} alt="" className=" h-[1rem] w-auto " />
        </div>
        <div className="flex flex-col gap-y-5 mb-10 relative ">
          <Header />
          <NavigationBar />

          <div className="lg:w-[65%] w-[95%] mx-auto flex flex-col gap-y-4 lg:gap-y-10">
            <News />
            <BelowNews />
            <Rajniti />
            <BelowRajnitiBar />
            <NepalPress />
          </div>

          <div className="bg-[#f8f8f8] mt-16">
            <NepalPairavi />
            <Sahitya />
            <Samaj />
          </div>

          <div className="lg:w-[65%] w-[95%] mx-auto flex flex-col gap-y-10  ">
            <Bitta />
            <Health />
            <Representative />
            <Susasan />
            <KalaPress />
          </div>
        </div>

        <Video />
        <Vividh />
      </div>
      <Footer />
    </>
  );
}

export default App;
