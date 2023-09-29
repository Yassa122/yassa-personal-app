// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import TextComponent from './components/TextComponent';
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
          top: '0', 
          width: '877.995px', 
          height: '575.704px', 
          flexShrink: 0,
          maxWidth: '100%',
          zIndex: 1 // Set z-index to 1 for the logo
        }} 
      />

      <div className="flex flex-col h-screen z-10 relative"> {/* Set higher z-index to 10 for the text component */}
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
        <TextComponent text1="Developing intelligent, seamless "  text2=" software."  subText="Innovation leaps from student's code."/>
        </div>
      </div>
    </div>
  );
}

export default App;
