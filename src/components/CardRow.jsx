import React from 'react';
import sunriseIcon from '../assets/Sunrise.png';
import sunsetIcon from '../assets/Sunset.png';
import umbrellaIcon from '../assets/Umbrella.png';

const CardRow = () => {
  return (
    <div className="card-row">
      {/* Sunrise Card */}
      <div className="card small-card">
        <div className="element-row">
          <img src={sunriseIcon} alt="Sunrise Icon" />
          <span className="spacer" />
          <p className="card-title">Sunrise</p>
        </div>
        <p className="time">7:06 AM</p>
      </div>

      {/* Message Card */}
      <div className="card message-card">
        <div className="element-row">
          <div className="message-text">
            <p>Carry an umbrella</p>
            <p>Wear a raincoat</p>
          </div>
          <span className="spacer" />
          <img src={umbrellaIcon} alt="Umbrella Icon" className="umbrella-icon" />
        </div>
      </div>

      {/* Sunset Card */}
      <div className="card small-card">
        <div className="element-row">
          <img src={sunsetIcon} alt="Sunset Icon" />
          <span className="spacer" />
          <p className="card-title">Sunset</p>
        </div>
        <p className="time">5:15 PM</p>
      </div>
    </div>
  );
};

export default CardRow;
