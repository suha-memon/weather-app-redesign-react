import React from 'react';
import timeIcon from '../assets/history_toggle_off.png';
import rainIcon from '../assets/Cloud rain.png';
import cloudIcon from '../assets/Cloud.png';
import sunIcon from '../assets/Sun.png';

const HourlyForecast = () => {
  return (
    <div className="hourly-forecast-card">
      <div className="hourly-forecast-header">
        <img src={timeIcon} alt="Time Icon" className="icon" />
        <p className="forecast-title">HOURLY FORECAST</p>
        <p className="feels-like">FEELS LIKE</p>
      </div>

      <div className="scrollable-hourly">
        <div className="hourly-rows">
          {[
            { time: 'NOW', icon: rainIcon, temp: '50°', feels: '40°' },
            { time: '10 AM', icon: rainIcon, temp: '40°', feels: '35°' },
            { time: '11 AM', icon: rainIcon, temp: '38°', feels: '35°' },
            { time: '12 PM', icon: cloudIcon, temp: '45°', feels: '38°' },
            { time: '1 PM', icon: sunIcon, temp: '43°', feels: '31°' },
            { time: '2 PM', icon: sunIcon, temp: '47°', feels: '34°' },
            { time: '3 PM', icon: sunIcon, temp: '45°', feels: '35°' },
            { time: '4 PM', icon: sunIcon, temp: '48°', feels: '32°' },
          ].map((hour, index) => (
            <div className="hourly-column" key={index}>
              <p>{hour.time}</p>
              <img src={hour.icon} alt="Weather Icon" />
              <p>{hour.temp}</p>
              <p className="hourly-temp">{hour.feels}</p>
            </div>
          ))}
        </div>

        <div className="y-axis">
          <span>50°</span>
          <span>40°</span>
          <span>30°</span>
        </div>

        <div className="chart-container">
          <svg className="chart" viewBox="0 0 700 100">
            <line x1="0" y1="10" x2="1500" y2="10" className="y-line"></line>
            <line x1="0" y1="40" x2="1500" y2="40" className="y-line"></line>
            <line x1="0" y1="70" x2="1500" y2="70" className="y-line"></line>
            <path className="line actual" d="M0,10 L100,40 L200,45 L300,25 L400,28 L500,25 L600,30 L700,20" />
            <path className="line feels-like" d="M0,40 L100,60 L200,60 L300,50 L400,65 L500,56 L600,55 L700,60" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
