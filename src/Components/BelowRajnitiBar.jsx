import React from "react";
import Bagmati from "../assets/Bagmati-Pradesh-Sabha.jpg";
import yuva from "../assets/yuva.jpg";
import ImageToRight from "../Reusable/ImageToRight";
import nijamati from "../assets/nijamati.jpg";
import yuvasangh from "../assets/yuvasangh.jpg";
import raghujee from "../assets/raghujee.jpg";
import bhot from "../assets/bhot.jpg";
import olisarkar from "../assets/olisarkar.jpg";
import grihamantri from "../assets/grihamantri.jpg";
import pokhrel from "../assets/pokhrel.jpg";
import twentyeight from "../assets/twentyeight.jpg";

const BelowRajnitiBar = () => {
  return (
    <div className="flex flex-col lg:flex-row sm:flex-row sm:gap-x-10 w-[90%] mx-auto gap-y-10 lg:gap-x-10">
      <div className="flex flex-col gap-y-5 w-full lg:w-1/2">
        <div className="w-full h-auto md:h-[20rem] lg:h-[25rem]  relative cursor-pointer group overflow-hidden">
          <img
            src={Bagmati}
            alt=""
            className="maintain-image group-hover:scale-110 transition-transform duration-500"
          />
          <div className="bg-gradient-to-t from-black to-transparent absolute left-0 h-1/2 bottom-0 right-0"></div>
          <h1 className="absolute bottom-2 md:bottom-4 left-4 text-sm md:text-lg lg:text-3xl font-bold text-white">
            बागमती प्रदेशसभा : नीति तथा कार्यक्रम आज प्रस्तुत हुँदै
          </h1>
        </div>
        <div className="font-medium flex flex-col gap-y-3 text-base md:text-lg lg:text-xl">
          <ImageToRight
            image={nijamati}
            text={`बुधबारकाे संसदमा सार्वजनिक नगरिएकाे निजामती विधेयक पेश गर्ने कार्यसूची`}
          />
          <ImageToRight
            image={yuvasangh}
            text={`युवा संघ निर्वाचन- सुमन पुरीलाई उछिनेर क्षितिज थेबेको अग्रता`}
          />
          <ImageToRight
            image={raghujee}
            text={`असार १५ अघि नै विद्यालय शिक्षा ऐन जारी गर्ने तयारीमा छौं: शिक्षामन्त्री पन्त (भिडिओ)`}
          />
          <ImageToRight
            image={bhot}
            text={`युवा संघको चुनावमा १४०४ भोट खस्यो, केहीबेरमै गणना थालिने`}
          />
          <ImageToRight
            image={olisarkar}
            text={`ओली सरकारको गलत काम जनतामा लान सके कांग्रेसको भविष्य उज्ज्वल हुन्छ : शेखर`}
          />
          <ImageToRight
            image={grihamantri}
            text={`गृहमन्त्रीको राजीनामा माग्दै विपक्षी दलका विद्यार्थी संगठन सडकमा, तत्काल पक्राउ गर्न माग`}
          />
          <ImageToRight
            image={pokhrel}
            text={`विद्यालय शिक्षामै गणतन्त्र-लोकतन्त्रबारे पढाउनुपर्छ : महासचिव पोखरेल `}
          />
          <ImageToRight
            image={twentyeight}
            text={`पालिकालाई जग्गा प्राप्ती स्वीकृतदेखि सचिव सरुवासम्म- यी हुन् क्याविनेटका २८ निर्णय`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-5 w-full lg:w-1/2">
        <div className="w-full h-auto md:h-[20rem] lg:h-[25rem] relative cursor-pointer group overflow-hidden">
          <img src={yuva} alt="" className="w-full h-full object-cover" />
          <div className="bg-gradient-to-t from-black to-transparent absolute left-0 h-1/2 bottom-0 right-0"></div>
          <h1 className="absolute bottom-2 md:bottom-4 left-4 text-sm md:text-lg lg:text-3xl font-bold text-white">
            बागमती प्रदेशसभा : नीति तथा कार्यक्रम आज प्रस्तुत हुँदै
          </h1>
        </div>
        <div className="font-medium flex flex-col gap-y-3 text-base md:text-lg lg:text-xl">
          <ImageToRight
            image={nijamati}
            text={`बुधबारकाे संसदमा सार्वजनिक नगरिएकाे निजामती विधेयक पेश गर्ने कार्यसूची`}
          />
          <ImageToRight
            image={yuvasangh}
            text={`युवा संघ निर्वाचन- सुमन पुरीलाई उछिनेर क्षितिज थेबेको अग्रता`}
          />
          <ImageToRight
            image={raghujee}
            text={`असार १५ अघि नै विद्यालय शिक्षा ऐन जारी गर्ने तयारीमा छौं: शिक्षामन्त्री पन्त (भिडिओ)`}
          />
          <ImageToRight
            image={bhot}
            text={`युवा संघको चुनावमा १४०४ भोट खस्यो, केहीबेरमै गणना थालिने`}
          />
          <ImageToRight
            image={olisarkar}
            text={`ओली सरकारको गलत काम जनतामा लान सके कांग्रेसको भविष्य उज्ज्वल हुन्छ : शेखर`}
          />
          <ImageToRight
            image={grihamantri}
            text={`गृहमन्त्रीको राजीनामा माग्दै विपक्षी दलका विद्यार्थी संगठन सडकमा, तत्काल पक्राउ गर्न माग`}
          />
          <ImageToRight
            image={pokhrel}
            text={`विद्यालय शिक्षामै गणतन्त्र-लोकतन्त्रबारे पढाउनुपर्छ : महासचिव पोखरेल `}
          />
          <ImageToRight
            image={twentyeight}
            text={`पालिकालाई जग्गा प्राप्ती स्वीकृतदेखि सचिव सरुवासम्म- यी हुन् क्याविनेटका २८ निर्णय`}
          />
        </div>
      </div>
    </div>
  );
};

export default BelowRajnitiBar;
