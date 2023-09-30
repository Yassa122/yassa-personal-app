// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import TextComponent from './components/TextComponent';
import Contact from './components/Contact'; // Import the Contact component
import logo from './logo/Group 1190.svg';

function App() {
  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(to bottom right, #070547, #020004, #1B033A)' 
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

          minHeight: '100%',
          
          zIndex: 1 // Set z-index to 1 for the logo
        }} 
      />

      <div className="flex flex-col h-screen z-10 relative">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center"> {/* Use flex-col here */}
          <TextComponent text1="Developing intelligent, seamless "  text2=" software."  subText="Innovation leaps from student's code."/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
