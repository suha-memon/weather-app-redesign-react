import React from 'react';
import rainWindIcon from '../assets/RainWind.png';

const WeatherInfo = () => {
  return (
    <div className="weather-info">
      <span className="spacer" />
      <div className="left-column">
        <h2 className="temperature">50°</h2>
        <span className="spacer" />
        <p className="high-low">Feels like <strong>40°</strong></p>
        <p className="high-low">H: <strong>50°</strong> L: <strong>30°</strong></p>
      </div>
      <span className="spacer" />
      <div className="right-column">
        <div className="icon-row">
          <img src={rainWindIcon} alt="Rain and Wind Icon" className="weather-icon" />
          <div className="precipitation-info">
            <p className="precipitation-label">Precipitation</p>
            <p className="precipitation-value"><strong>1"</strong></p>
          </div>
        </div>
        <p className="weather-description">Rain and Wind</p>
      </div>
      <span className="spacer" />
    </div>
  );
};

export default WeatherInfo;
