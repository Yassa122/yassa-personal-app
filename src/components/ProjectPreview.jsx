// ProjectPreview.js
import React from "react";
import PropTypes from "prop-types";
import "./styles/ProjectPreview.css";

const ProjectPreview = ({ imageUrl, projectLink, title, description }) => (
  <a
    href={projectLink}
    target="_blank"
    rel="noopener noreferrer"
    className="project-preview block my-4"
  >
    <div className="project-container border border-lightWhite rounded-md overflow-hidden">
      <div
        className="p-4 project-description"
        style={{ backgroundColor: "transparent" }}
      >
        <p className="project-title">{title}</p>
        <p className="project-text">{description}</p>
      </div>
      <img src={imageUrl} alt="Project Preview" className="w-full h-auto" />
    </div>
  </a>
);
//
ProjectPreview.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectPreview;
