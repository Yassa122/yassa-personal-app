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
    right: 20, // Adjust for positioning
    bottom: 20, // Adjust for positioning
  };

  return (
    <div className="relative flex z-10 min-h-fit bg-custom-gradient">
       
      <div className="flex flex-col z-10 relative min-h-max">
        <Navbar />

        {/* First Lottie Animation */}
        

        <div className="ml-[10%] mb-[200px] xl:mb-[0%]" >
        <Lottie animationData={animationData} style={animationStyle} />

        </div>
        {/* Second Lottie Animation */}

        <div className=" whitespace-normal mt-[100px] absolute top-[300px] left-1/2 -translate-x-1/2 text-[#B3B3B3] font-inter text-5xl font-bold ">
          About
        </div>
        <p class=" leading-loose p-14 xl:p-52 mt-[250px] text-left text-[#B3B3B3] font-inter text-2xl ">
          A third-year computer scientist majoring in software engineering at
          the German International University. Driven by a love for coding and
          technology, I dive headfirst into the digital world with a keen
          interest in software design and implementation. Crafting code is more
          than an academic pursuit for me; it's the act of bringing ideas to
          life, solving complex problems, and transforming the abstract into the
          concrete. Each new challenge is a thrilling adventure, an opportunity
          to push the boundaries of my creativity and knowledge. As I navigate
          my journey, I look forward to leaving a tangible mark on the world
          with the solutions I create, continually evolving in this exciting and
          fulfilling digital universe.
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
