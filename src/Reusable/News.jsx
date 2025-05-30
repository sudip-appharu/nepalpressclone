import React from "react";
import NewsCard from "./NewsCard";
import icon from "../assets/icon.png";
import youth from "../assets/youth.jpg";
import sureshImage from "../assets/sureshImage.jpg";
import ritaImage from "../assets/ritaImage.jpg";
import trafficImage from "../assets/trafficImage.jpg";
import studyAbroadImage from "../assets/studyAbroadImage.jpg";
import bishnuImage from "../assets/bishnuImage.jpg";
import anitaImage from "../assets/anitaImage.jpg";
import goldImage from "../assets/goldImage.jpg";

const News = () => {
  return (
    <>
      <div>
        <NewsCard
          name={`सुरेश कँडेल`}
          posterImage={sureshImage}
          newsImage={youth}
          heading={`युवा संघ महाधिवेशन : नेतृत्व चयनका लागि मतदान सुरु`}
          detail={`राष्ट्रिय युवा संघ नेपालको नेतृत्व चयनका लागि मतदान सुरु भएको छ ।`}
        />

        <NewsCard
          name={`रीता थापा`}
          posterImage={ritaImage}
          newsImage={trafficImage}
          heading={`काठमाडौंमा ट्राफिक जाम नियन्त्रण अभियान`}
          detail={`महानगरीय ट्राफिक प्रहरीले नयाँ नियम लागू गर्दै ट्राफिक व्यवस्थापन कडाई गरेको छ ।`}
        />

        <NewsCard
          name={`बिष्णु न्यौपाने`}
          posterImage={bishnuImage}
          newsImage={goldImage}
          heading={`नेपाली बजारमा सुनको मूल्य नयाँ रेकर्डमा`}
          detail={`आज सुनको मूल्य तोलामा १ लाख २० हजार पुगेको छ, जुन हालसम्मकै उच्च हो ।`}
        />

        <NewsCard
          name={`अनिता अधिकारी`}
          posterImage={anitaImage}
          newsImage={studyAbroadImage}
          heading={`विदेश अध्ययनमा जाने विद्यार्थीको संख्यामा वृद्धि`}
          detail={`हालसालै अमेरिकासहित विभिन्न देशमा अध्ययन भिसाका लागि आवेदन बढेका छन् ।`}
        />
      </div>
    </>
  );
};

export default News;
