import React from 'react';
import searchIcon from '../assets/Search.png';

const TitleBar = ({ city }) => {
  return (
    <div className="title-bar">
      <button className="edit-button">Edit</button>
      <h1>{city}</h1>
      <img src={searchIcon} alt="Search Icon" className="icon" />
    </div>
  );
};

export default TitleBar;
