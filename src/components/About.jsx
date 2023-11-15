import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import animationData from './logo/Animation - 1700057562159.json'; // Update this path to your Lottie JSON file
import Navbar from './Navbar';
import MyProjects from './myProjects';
import './styles/Home.css';

function About() {
  const [minHeight, setMinHeight] = useState('180vh');

  // Handler to set minHeight based on window width
  const handleResize = () => {
    if (window.innerWidth <= 1000) {
      setMinHeight('150vh'); // For smaller screens
    } else {
      setMinHeight('180vh'); // For larger screens
    }
  };

  // Set initial minHeight and add resize event listener on mount
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lottie options
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div
      style={{
        minHeight: minHeight,
        background: 'linear-gradient(135deg, #303F85 0%, #3D3D3D 0.01%, #000 52.4%, #190335 100%)'
      }}
      className="About relative"
    >
      <div className="flex flex-col h-screen z-10 relative">
        <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Lottie Animation */}
          <Lottie 
  animationData={animationData} 
  style={{ 
    width: 400, 
    height: 400, 
    position: 'absolute', 
    top: 100, 
    left: 181 
  }} 
/>
          {/* You can add more content here, like a description or other components */}
          {/* <MyProjects /> or other components */}
        </div>
      </div>
    </div>
  );
}

export default About;
