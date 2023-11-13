// src/App.js
import Navbar from './components/Navbar';
import TextComponent from './components/TextComponent';
import logo from './logo/Group 1190.svg';
import MyProjects from './components/myProjects';
import ProjectPreview from './components/ProjectPreview';
import preview from'./logo/CairoMetroImg.png';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [minHeight, setMinHeight] = useState('180vh');

  // Handler to set minHeight based on window width
  const handleResize = () => {
    if (window.innerHeight<=600) {
      setMinHeight('auto');
    } else {
      setMinHeight('200vh');
    }
  };

  // Set initial minHeight and add resize event listener on mount
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    
    <div
    
      style={{
        minHeight: minHeight, // using the state variable here
        background: 'linear-gradient(to bottom right, #070547, #020004, #1B033A)',
      }}
      className="App relative"
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          position: 'absolute',
          right: '0',
          top: '-2000',
          width: '877.995px',
          height: '595.704px',
          flexShrink: 0,
          maxWidth: '65%',
          maxHeight: '100%',
          zIndex: 1, // Set z-index to 1 for the logo
        }}
      />

      <div className="flex flex-col h-screen z-10 relative">


        <div className="flex-1 flex flex-col items-center justify-center">

        <Navbar/>

          {/* Use flex-col here */}
          <TextComponent
          
            text1="Developing intelligent, seamless "
            text2=" software."
            subText="Innovation leaps from student's code."
          />
          
          {/* Added "My Projects" text here */}
          <MyProjects/>
          
          <div className="lg:ml-[-780px] lg:mt-[50px] mt-[20px]">
          <ProjectPreview
              imageUrl={preview}
              projectLink="https://cairometrosystem.onrender.com/"
              title="Cairo metro reservation tickets"
              description="The Cairo Metro Reservation Ticket Website streamlines ticket booking and management for Cairo's Metro system, offering real-time updates, secure transactions, and personalized user accounts."
            />

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
