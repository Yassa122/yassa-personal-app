// src/components/TextComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import Subtext from './Subtext';
import Contact from './Contact'; // Import the Contact component
import Twitter from './twitter';

const TextComponent = ({ text1, text2, subText, delay1 = 300, delay2 = 400, delay3 = 500 }) => {
    return (
      <div
        className={`animate-jump-in animate-once animate-duration-2000 animate-delay-${delay1} lg:mt-[150px] mt-[50px] lg:ml-[-400px] text-gray-custom text-40px font-inter font-bold font-800 mx-4`}
        style={{ textTransform: 'uppercase' }}
      >
        <p>{text1}</p>
        <p>{text2}</p>
        <Subtext subText={subText} />
        <div className="mt-[70px] lg:ml-[38px]">
          <Contact className={`animate-jump-in animate-once animate-duration-1000 animate-delay-${delay2}`} />
        </div>
        <div className="mt-[20px] lg:ml-[38px]">
          <Twitter className={`animate-jump-in animate-once animate-duration-1000 animate-delay-${delay3}`} />
        </div>
      </div>
    );
  };

TextComponent.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

export default TextComponent;
