import React from "react";
import Lottie from "lottie-react";
import animationData from "./logo/flyingRocket.json";
import secondAnimationData from "./logo/UFO.json"; // Import the second Lottie file
import Navbar from "./Navbar";

function About() {
  // Styles for the first Lottie animation
  const animationStyle = {
    width: 350,
    height: 350,
    position: "absolute",
    top: 100,
    bottom: 20, 
  };  

  // Styles for the second Lottie animation
  const secondAnimationStyle = {
    width: 400, // Adjust size as needed
    height: 400, // Adjust size as needed
    position: "absolute",
    right: 0, // Adjust for positioning
    bottom: 20, // Adjust for positioning
  };

  return (
    <div className="relative flex z-10 min-h-fit bg-custom-gradient">
      <div className="flex flex-col z-10 relative min-h-max">
        <Navbar />

        {/* First Lottie Animation */}

        <div className="ml-[10%] mb-[200px] xl:mb-[0%]">
          <Lottie animationData={animationData} style={animationStyle} />
        </div>
        {/* Second Lottie Animation */}

        <div className=" whitespace-normal mt-[100px] absolute top-[300px] left-1/2 -translate-x-1/2 text-[#B3B3B3] font-inter text-5xl font-bold ">
          About
        </div>
        <p className=" leading-loose p-14 xl:p-52 mt-[250px] text-left text-[#B3B3B3] font-inter text-2xl ">
          A Software Engineer specializing in backend, cloud, and AI-enabled
          systems, and a Software Engineering graduate of the German
          International University. I build APIs, microservices, event-driven
          systems, and cloud infrastructure with TypeScript, Node.js, NestJS,
          Java, ASP.NET, React, and AWS, and I take them all the way to
          production. My research on explainable AI for molecular property
          prediction was published as MoleculeX-Predictive in Array (Elsevier)
          in 2026. I care about scalable system design, reliability, and
          bringing AI into real-world products.
        </p>

        <div className=" mt-[100px] max-xl:mt-[250px] ">
          <Lottie
            animationData={secondAnimationData}
            style={secondAnimationStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
