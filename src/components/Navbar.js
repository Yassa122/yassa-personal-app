// src/components/Navbar.js
import React from 'react';
import './styles/navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';

// src/components/Navbar.js

const Navbar = () => {
  return (
    <nav className="text-white p-4 sticky top-0 z-30 w-full backdrop-blur-md">
      <div className="container mx-auto lg:px-16 xl:px-32">
        <div className="flex justify-between">
          <div className="text-2xl">
            {/* Replace a tag with Link for home */}
            <Link to="/" className="transition-colors duration-500 ease-in-out">Yassa</Link>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                {/* Replace a tag with Link for home */}
                <Link to="/" className="transition-colors duration-500 ease-in-out">Home</Link>
              </li>
              <li>
                {/* Replace a tag with Link for projects */}
                <Link to="/projects" className="transition-colors duration-500 ease-in-out">Projects</Link>
              </li>
              <li>
                {/* Replace a tag with Link for about */}
                <Link to="/about" className="transition-colors duration-500 ease-in-out">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
