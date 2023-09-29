// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-2xl">
            <a href="/">Yassa</a>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="/home">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
