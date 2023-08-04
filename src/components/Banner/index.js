import React from 'react';

const Banner = ({ text, button, btn_typ, btn_name, link }) => {
  return (
    <div className="banner">
      <h3>{text}</h3>
      {button && (
        <a href={link} className="banner-button">
          {btn_name}
        </a>
      )}
    </div>
  );
};

export default Banner;


