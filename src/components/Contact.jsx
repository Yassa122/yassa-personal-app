// src/components/Contact.js
import React from "react";
import "./styles/contact.css";
import "./styles/animation.css"; // Or the path to your CSS file

const Contact = () => {
  return (
    <button
      className="contact-button transition duration-500 ease-in-out" // Add transition classes here
      style={{
        width: "268px",
        height: "75px",
        flexShrink: 0,
        position: "relative",
        border: "none", // Remove default button border
        backgroundColor: "transparent", // Set initial background color to transparent
        cursor: "pointer", // Change cursor to pointer on hover
        outline: "none", // Remove outline
      }}
    >
      {/* Email Icon */}
      <svg
        style={{
          position: "absolute", // Position the icon absolutely within the contact box
          top: "50%", // Center the icon vertically
          left: "25px", // Position from the left
          transform: "translateY(-50%)", // Center the icon vertically
          borderRadius: "6px",
          width: "32px",
          height: "21px",
          flexShrink: 0,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {/* Replace below path data with your email icon SVG path data */}
        <path
          d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.718v15.431h24v-15.431l-12 9.718z"
          fill="lightgray"
        />
      </svg>

      {/* Email Text */}
      <div
        style={{
          position: "absolute", // Position the text absolutely within the contact box
          top: "50%", // Center the text vertically
          left: "75px", // Position from the left
          transform: "translateY(-50%)", // Center the text vertically
          color: "#6E6E6E",
          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: 300,
          width: "168px",
          height: "21px",
          flexShrink: 0,
        }}
      >
        Contact me via Email
      </div>

      {/* Existing SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="270"
        height="77"
        viewBox="0 0 270 77"
        fill="none"
        style={{
          strokeWidth: "1px",
          stroke: "#2B5574",
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

export default Contact;
