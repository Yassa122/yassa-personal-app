import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import animationData from './logo/Animation - 1700057562159.json';
import Navbar from './Navbar';
import './styles/Home.css'; // Ensure this file doesn't conflict with Tailwind

function About() {
  const [animationStyle] = useState({
    width: 400,
    height: 400,
    position: 'absolute',
    top: 100,
    bottom:20
  });

  // Handler to set minHeight and animation style based on window width
  

  
  return (
    <div className="relative flex flex-col  z-10 min-h-fit bg-custom-gradient ">

      <div className="flex flex-col  z-10 relative min-h-max">
        <Navbar />

        {/* Lottie Animation */}
        <Lottie 
          animationData={animationData} 
          style={animationStyle}
        />

        {/* Styled Text with Tailwind */}
        <div className=" whitespace-normal  absolute top-[400px] left-1/2 -translate-x-1/2 text-[#B3B3B3] font-inter text-5xl font-bold ">
          About
          
        </div>
        <p class=" leading-relaxed p-14 xl:p-52 mt-[400px] text-left text-[#B3B3B3] font-inter text-3xl ">My name is Yassa,
         a third-year
         computer scientist
         majoring in software engineering 
         at the German International University. 

             Driven by a love for coding and technology, I dive headfirst into the digital world with a keen interest in software design and implementation.
              Crafting code is more than an academic pursuit for me; it's the act of bringing ideas to life, solving complex problems,
               and transforming the abstract into the concrete.
               Each new challenge is a thrilling adventure, an opportunity to push the boundaries of my creativity and knowledge.
            As I navigate my journey, I look forward to leaving a tangible mark on the world with the solutions I create,
             continually evolving in this exciting and fulfilling digital universe.</p>

        {/* Additional content */}
      </div>
    </div>
  );
}

export default About;
