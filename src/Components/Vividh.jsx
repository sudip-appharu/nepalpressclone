import React from "react";
import Topics from "../Reusable/Topics";
import UAE from "../assets/UAE.jpg";
import VividhReuse from "../Reusable/VividhReuse";
import virtual from "../assets/virtual.jpg";
import nrna from "../assets/nrna.jpg";
import belayat from "../assets/belayat.jpg";
import it from "../assets/it.png";
import karnali from "../assets/karnali.jpeg";
import starlink from "../assets/starlink.jpg";
import digitalchina from "../assets/digitalchina.jpg";
import andolan from "../assets/andolan.jpg";
import edsheeren from "../assets/edsheeren.jpg";
import marriage from "../assets/marriage.jpg";
import buffalo from "../assets/buffalo.jpg";

const Vividh = () => {
  return (
    <>
      <div className="lg:w-[65%] w-full mx-auto mt-24 ">
        <div className="flex lg:flex-row flex-col gap-x-10">
          <div className="shadow-md lg:w-[33%] w-full p-2">
            <Topics heading={`प्रवास `} />
            <div className="lg:w-[21.18rem] w-full">
              <div className="w-full lg:h-[10.93rem] ">
                <img src={UAE} alt="" className="maintain-image" />
              </div>
              <p className="new-p lg:mt-3 mt-1  w-full lg:">
                छोरीको शव हेर्न नसक्ने पीडा, परिवारको अनुरोधमा यूएईमै गरियो
                अन्तिम संस्कार
              </p>
            </div>

            <div className="mt-4">
              <VividhReuse
                image={virtual}
                text={`सुदूरपश्चिममा लगानी गर्न प्रवासी नेपाली तयार, सरकारसँग भर्चुअल संवाद`}
              />
              <VividhReuse
                image={nrna}
                text={`एनआरएनए दक्षिण अष्ट्रेलिया राज्य संयोजकमा थीर गुरूङको उम्मेदवारी घोषणा`}
              />
              <VividhReuse
                image={belayat}
                text={`नेपाली उद्यमी विकासले बेलायतमा पाए ‘उद्यमी वर्ष २०२५’ सम्मान`}
              />
            </div>
          </div>
          <div className="shadow-md   w-full lg:w-[33%] p-2">
            <Topics heading={`प्रविधि `} />
            <div className="  w-full lg:w-[21.18rem]">
              <div className="  w-full lg:w-full lg:h-[10.93rem] ">
                <img src={it} alt="" className="maintain-image" />
              </div>
              <p className="new-p lg:mt-3 mt-1">
                सूचना प्रविधि क्षेत्रका संस्थाले दियो सरकारलाई ४१ बुँदे सुझाव
              </p>
            </div>

            <div className="mt-4">
              <VividhReuse
                image={starlink}
                text={`आजबाट बङ्गलादेशमा सुरु भयो एलन मस्कको स्टारलिङ्क इन्टरनेट, दक्षिण एसियाकै पहिलो बन्यो`}
              />
              <VividhReuse
                image={karnali}
                text={`नारामा डिजिटल कर्णाली, सर्वसाधारणलाई फोन गर्नै सास्ती`}
              />
              <VividhReuse
                image={digitalchina}
                text={`डिजिटल चीन निर्माणको कार्ययोजना सार्वजनिक`}
              />
            </div>
          </div>
          <div className="shadow-md  w-full lg:w-[33%] p-2">
            <Topics heading={`टापनटिपन `} />
            <div className=" w-full lg:w-[21.18rem]">
              <div className="w-full lg:h-[10.93rem] ">
                <img src={buffalo} alt="" className="maintain-image" />
              </div>
              <p className="new-p lg:mt-3 mt-1">
                गौतम बुद्ध अन्तर्राष्ट्रिय विमानस्थल परिसरमा भैंसीको बथानले
                मन्त्रीलाई लखेटेपछि…
              </p>
            </div>

            <div className="mt-4">
              <VividhReuse
                image={andolan}
                text={`तीनकुने आन्दोलनका भाइरल राजकुमार ठकुरी : टिकटक लाइभबाटै हराएको सुन उकास्ने सुरमा !`}
              />
              <VividhReuse
                image={edsheeren}
                text={`भारतमा ‘हेड मसाज’को मजा लुट्दै गायक एड शीरन`}
              />
              <VividhReuse
                image={marriage}
                text={`यजुबेन्द्र चहलको वैवाहिक जीवन भड्खालोमा, अर्कै युवकको अंगालोमा भेटिइन् धनश्री`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vividh;
