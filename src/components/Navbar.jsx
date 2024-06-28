import React from "react";
import "./styles/navbar.css"; // Import the CSS file
import { Link } from "react-router-dom";
import logo from "./logo/favicon.ico"; // Import your logo

const Navbar = () => {
  return (
    <nav className="text-white p-4 sticky top-0 z-30 w-full backdrop-blur-md">
      <div className="container mx-auto lg:px-16 xl:px-32">
        <div className="flex justify-between">
          <div className="text-2xl">
            {/* Replace text with logo */}
            <Link to="/" className="transition-colors duration-500 ease-in-out">
              <img src={logo} alt="Logo" className="h-8 w-8" />{" "}
              {/* Adjust size as needed */}
            </Link>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="transition-colors duration-500 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Projects"
                  className="transition-colors duration-500 ease-in-out"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="transition-colors duration-500 ease-in-out"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
//
export default Navbar;
