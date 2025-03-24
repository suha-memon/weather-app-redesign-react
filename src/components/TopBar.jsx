import React from 'react';
import listIcon from '../assets/TopBarElements/List.png';
import arrowLeft from '../assets/TopBarElements/arrow_left.png';
import circle1 from '../assets/TopBarElements/Circle-1.png';
import circle2 from '../assets/TopBarElements/Circle-2.png';
import circle3 from '../assets/TopBarElements/Circle.png';
import arrowRight from '../assets/TopBarElements/arrow_right.png';
import mapPin from '../assets/TopBarElements/Map pin.png';

const TopBar = () => {
  return (
    <div className="top-bar">
      <img src={listIcon} alt="List" />
      <img src={arrowLeft} alt="Left Arrow" />
      <span className="spacer" />
      <img src={circle1} alt="Circle 1" />
      <img src={circle2} alt="Circle 2" />
      <img src={circle3} alt="Circle 3" />
      <span className="spacer" />
      <img src={arrowRight} alt="Right Arrow" />
      <img src={mapPin} alt="Map Pin" />
    </div>
  );
};

export default TopBar;
