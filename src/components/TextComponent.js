// src/components/TextComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import Subtext from './Subtext';

const TextComponent = ({ text1, text2, subText }) => {
  return (
    <div
      className="mt-[-300px] sm:mt-[-400px] lg:ml-[-400px] text-gray-custom text-40px font-inter font-bold font-800 mx-4"
      style={{ textTransform: 'uppercase' }}
    >
      <p>{text1}</p>
      <p>{text2}</p>
      <Subtext subText={subText} />
    </div>
  );
};

TextComponent.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

export default TextComponent;
