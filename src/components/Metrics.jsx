import React from 'react';

const Metrics = () => {
  const metricsData = [
    { label: 'AIR QUALITY', value: '30', status: 'GOOD' },
    { label: 'UV INDEX', value: '1', status: 'LOW' },
    { label: 'WIND', value: '8', status: 'MPH' },
    { label: 'HUMIDITY', value: '45%', status: 'IDEAL' },
  ];

  return (
    <div className="card-row">
      {metricsData.map((metric, index) => (
        <div className="card metric-card" key={index}>
          <p>{metric.label}</p>
          <p className="metric">{metric.value}</p>
          <p>{metric.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
