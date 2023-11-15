// src/components/Contact.js
import React from 'react';
import './styles/contact.css'
const Twitter = () => {
  return (
    <button
      className="contact-button transition duration-500 ease-in-out" // Add transition classes here
      style={{
      width: '268px',
      height: '75px',
      flexShrink: 0,
      position: 'relative',
      border: 'none', // Remove default button border
      backgroundColor: 'transparent', // Set initial background color to transparent
      cursor: 'pointer', // Change cursor to pointer on hover
      outline: 'none', // Remove outline
    }}
   
  >
      {/* Email Icon */}
      <svg
        style={{
          position: 'absolute',
          top: '50%',
          left: '25px',
          transform: 'translateY(-50%)',
          width: '32px',
          height: '32px', // Adjusted height to make it equal to width
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {/* Replace below path data with your Twitter icon SVG path data */}
        <path
          d="M22.46 6c-.77.34-1.6.57-2.47.67a4.3 4.3 0 0 0 1.88-2.37 8.58 8.58 0 0 1-2.72 1.04 4.29 4.29 0 0 0-7.29 3.91 4.22 4.22 0 0 0 .11.98A12.18 12.18 0 0 1 2.88 4.8a4.3 4.3 0 0 0 1.33 5.73 4.25 4.25 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.2c-.42.11-.86.17-1.31.17-.32 0-.63-.03-.93-.09a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 3 19.54a8.62 8.62 0 0 1-1.06-.06 12.18 12.18 0 0 0 6.58 1.93c7.9 0 12.21-6.53 12.21-12.21 0-.19 0-.37-.01-.55a8.73 8.73 0 0 0 2.15-2.23"
          fill="lightgray"
        />
      </svg>

      {/* Email Text */}
      <div
        style={{
          position: 'absolute', // Position the text absolutely within the contact box
          top: '50%', // Center the text vertically
          left: '75px', // Position from the left
          transform: 'translateY(-50%)', // Center the text vertically
          color: '#6E6E6E',
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: 300,
          width: '168px',
          height: '21px',
          flexShrink: 0,
        }}
      >
        Follow me on Twitter
      </div>

      {/* Existing SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="270"
        height="77"
        viewBox="0 0 270 77"
        fill="none"
        style={{
          strokeWidth: '1px',
          stroke: '#2B5574',
        }}
      >
        <path
          d="M5 0.5C2.51472 0.5 0.5 2.51472 0.5 5V72C0.5 74.4853 2.51471 76.5 5 76.5H265C267.485 76.5 269.5 74.4853 269.5 72V5C269.5 2.51472 267.485 0.5 265 0.5H5Z"
          stroke="#2B5574"
        />
      </svg>
      </button>
  );
};

export default Twitter;
