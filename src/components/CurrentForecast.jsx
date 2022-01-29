import React from 'react';

const CurrentForecast = ({ humidity, pressure, windSpeed, sunrise, sunset }) => {
  return (
    <div className='card'>
      <p className='flex-container-1'>
        <span>Humidity</span>
        <span>{humidity ? humidity : <span className='fetching-data'></span>}</span>
      </p>

      <p className='flex-container-1'>
        <span>Pressure</span>
        <span>{pressure ? pressure : <span className='fetching-data'></span>}</span>
      </p>

      <p className='flex-container-1'>
        <span>Wind Speed</span>
        <span>{windSpeed ? windSpeed : <span className='fetching-data'></span>}</span>
      </p>

      <p className='flex-container-1'>
        <span>Sunrise</span>
        <span>{sunrise ? sunrise : <span className='fetching-data'></span>}</span>
      </p>

      <p className='flex-container-1'>
        <span>Sunset</span>
        <span>{sunset ? sunset : <span className='fetching-data'></span>}</span>
      </p>
    </div>
  );
}

export default CurrentForecast;
