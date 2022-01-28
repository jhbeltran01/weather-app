import React from 'react';

const CurrentForecast = ({ humidity, pressure, windSpeed, sunrise, sunset }) => {
  return (
    <div>
      <p>
        <span>Humidity</span>
        <span>{humidity}</span>
      </p>

      <p>
        <span>Pressure</span>
        <span>{pressure}</span>
      </p>

      <p>
        <span>Wind Speed</span>
        <span>{windSpeed}</span>
      </p>

      <p>
        <span>Sunrise</span>
        <span>{sunrise}</span>
      </p>

      <p>
        <span>Sunset</span>
        <span>{sunset}</span>
      </p>
    </div>
  );
}

export default CurrentForecast;
