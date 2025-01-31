// src/components/TextComponent.js
import React from "react";
import Subtext from "./Subtext";
import Contact from "./Contact.jsx"; // Import the Contact component
import Twitter from "./twitter";

const TextComponent = ({
  text1,
  text2,
  subText,
  delay1 = 300,
  delay2 = 400,
  delay3 = 500,
}) => {
  return (
    <div
      className={`animate-jump-in animate-once animate-duration-2000 animate-delay-${delay1} lg:mt-[150px] mt-[50px] lg:ml-[-400px] text-gray-custom text-40px font-inter font-bold font-800 mx-4`}
      style={{ textTransform: "uppercase" }}
    >
      <p>{text1}</p>
      <p>{text2}</p>
      <Subtext subText={subText} />
      <div className="mt-[70px] lg:ml-[38px]">
        <Contact />
      </div>
      <div className=" mt-[20px] lg:ml-[38px]">
        <Twitter />
      </div>
    </div>
  );
};

export default TextComponent;
