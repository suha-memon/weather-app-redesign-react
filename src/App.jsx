import React from 'react';
import TopBar from './components/TopBar';
import TitleBar from './components/TitleBar';
import WeatherInfo from './components/WeatherInfo';
import CardRow from './components/CardRow';
import HourlyForecast from './components/HourlyForecast';
import ThreeDayForecast from './components/ThreeDayForecast';
import Metrics from './components/Metrics';
import './styles.css';

const App = () => {
  return (
    <div className="main-screen">
      <TopBar />
      <TitleBar city="Philadelphia" />
      <WeatherInfo />
      <div className="main-area">
        <CardRow />
        <HourlyForecast />
        <ThreeDayForecast />
        <Metrics />
      </div>
    </div>
  );
};

export default App;
