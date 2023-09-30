// src/components/Navbar.js
import React from 'react';
import './styles/navbar.css'; // Import the CSS file

// src/components/Navbar.js

const Navbar = () => {
  return (
    <nav className="text-white p-4">
      <div className="container mx-auto lg:px-16 xl:px-32"> {/* Adjusted padding for container */}
        <div className="flex justify-between">
          <div className="text-2xl">
            <a href="/" className="transition-colors duration-500 ease-in-out">Yassa</a>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="/home" className="transition-colors duration-500 ease-in-out">Home</a>
              </li>
              <li>
                <a href="/projects" className="transition-colors duration-500 ease-in-out">Projects</a>
              </li>
              <li>
                <a href="/about" className="transition-colors duration-500 ease-in-out">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
