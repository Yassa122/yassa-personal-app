import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl">Kesho's Portfolio</a>
        <div className="space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
