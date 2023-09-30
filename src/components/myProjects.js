// src/components/MyProjects.js
import React from 'react';
import './styles/MyProjects.css'; // Importing the CSS file

const MyProjects = () => {
    return (
      <div className="text-center mt-12 flex justify-center space-x-4 lg:mr-[800px] mr-[70px]">
        <p className="my-text">My</p> 
        <p className="projects-text">Projects</p>
      </div>
    );
  };
  /** */
  export default MyProjects;