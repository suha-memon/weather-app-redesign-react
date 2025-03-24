import React from 'react';
import calendarIcon from '../assets/calendar_month.png';
import rainIcon from '../assets/Cloud rain.png';
import cloudIcon from '../assets/Cloud.png';
import sunIcon from '../assets/Sun.png';

const ThreeDayForecast = () => {
  const forecastData = [
    {
      day: 'Today',
      icon: rainIcon,
      desc: 'Rainy',
      low: '30°',
      high: '50°'
    },
    {
      day: 'Thursday',
      icon: cloudIcon,
      desc: 'Cloudy',
      low: '35°',
      high: '56°'
    },
    {
      day: 'Friday',
      icon: sunIcon,
      desc: 'Sunny',
      low: '40°',
      high: '60°'
    }
  ];

  return (
    <div className="three-day-forecast">
      <div className="three-day-header">
        <img src={calendarIcon} alt="Calendar Icon" className="icon" />
        <p className="forecast-title">3-DAY FORECAST</p>
      </div>

      {forecastData.map((day, index) => (
        <div className="day-row" key={index}>
          <p className="day-title">{day.day}</p>
          <img src={day.icon} alt={`${day.desc} Icon`} className="forecast-icon" />
          <p className="weather-desc">{day.desc}</p>
          <p className="temperature">
            L: <strong>{day.low}</strong> <span className="temp-gap"></span>
            H: <strong>{day.high}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ThreeDayForecast;
