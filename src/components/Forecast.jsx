import moment from 'moment';
import React from 'react';

function Forecast({ imgSrc, imgDescription, day, nightTemp, dayTemp, firstForecast }) {
  if (firstForecast) {
    return (
      <div>
        <img src={imgSrc} alt={imgDescription} />
        <div>
          <p>{moment(day).format('dddd')}</p>

          <p>
            Night- <br />
            {nightTemp}<sup>o</sup>C
          </p>

          <p>
            Day- <br />
            {dayTemp}<sup>o</sup>C
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>{moment(day).format('dddd')}</p>
        <img src={imgSrc} alt={imgDescription} />
        <p>Night-{nightTemp}<sup>o</sup>C</p>
        <p>Day-{dayTemp}<sup>o</sup>C</p>
      </div>
    )
  }
}

export default Forecast;
