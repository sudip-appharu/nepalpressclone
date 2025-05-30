import React from "react";
import Topics from "../Reusable/Topics";
import bbhola from "../assets/bbhola.jpg";
import kripa from "../assets/kripa.jpg";
import dr from "../assets/dr.jpg";
import NepalChintanCard from "../Reusable/NepalChintanCard";

const NepalChintan = () => {
  return (
    <>
      <div>
        <Topics heading={`नेपाल चिन्तन `} />
        <div>
          <NepalChintanCard
            image={bbhola}
            text={`स्थानीय तहका जनप्रतिनिधिहरूमै किन विभेद ?`}
            name={`भोला खतिवडा`}
          />
          <NepalChintanCard
            image={kripa}
            text={`जेठ १५ मा हामी सडकमा जानैपर्छ, एमालेमात्र हैन हरेक गणतन्त्रवादीले उत्सव मनाउनैपर्छ`}
            name={`कृपा भण्डारी`}
          />
          <NepalChintanCard
            image={dr}
            text={`जीवन विज्ञानः स्वास्थ्यमा क्रान्ति`}
            name={`डीआर घिमिरे`}
          />
        </div>
      </div>
    </>
  );
};

export default NepalChintan;
