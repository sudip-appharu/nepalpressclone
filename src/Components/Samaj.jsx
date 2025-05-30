import React from "react";
import Topics from "../Reusable/Topics";
import SamajChhitraGradient from "../Reusable/SamajChhitraGradient";
import student from "../assets/students.jpg";
import suddi from "../assets/suddi.jpg";
import pani from "../assets/pani.jpg";
import five from "../assets/five.jpg";

const Samaj = () => {
  return (
    <>
      <div className="lg:w-[65%] w-[95%] mx-auto mt-10">
        <Topics heading={`नेपाल चित्र `} />
        <div className="w-full flex lg:flex-row sm:flex-col md:flex-col flex-col gap-y-5 justify-between">
          <div className="flex sm:flex-row sm:gap-x-5 md:flex-row md:gap-x-5">
            <SamajChhitraGradient
              image={student}
              text={`पढाइमा अब्बल बन्दै चेपाङ बालबालिका : नगरकै उत्कृष्ट विद्यालय बन्यो कान्देश्वरी`}
            />
            <SamajChhitraGradient
              image={suddi}
              text={`सुब्बा र अधिकृत सँगसँगै भएका निजामती जोडी- उपसचिवमा श्रीमतीभन्दा पछि परे पति`}
            />
          </div>

          <div className=" flex sm:flex-row sm:gap-x-5 md:flex-row md:gap-x-5">
            <SamajChhitraGradient
              image={pani}
              text={`जलमग्न जनकपुर: आधा घण्टाको वर्षा, वर्षौंको समस्या`}
            />
            <SamajChhitraGradient
              image={five}
              text={`५ तस्बिरमा हेर्नुहोस् भरतपुर चितवन नजिकको टिकौली जंगल`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Samaj;
