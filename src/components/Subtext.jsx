// src/components/SubText.js
import React from "react";
import PropTypes from "prop-types";

const Subtext = ({ subText }) => {
  return (
    <p className="text-lg text-gray-500 text-24px font-light mt-[100px]">
      {subText}
    </p>
  );
};

Subtext.propTypes = {
  subText: PropTypes.string.isRequired,
};

export default Subtext;
