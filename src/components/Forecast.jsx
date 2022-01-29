import moment from 'moment';
import React from 'react';

function Forecast({ imgSrc, imgDescription, day, nightTemp, dayTemp, firstForecast }) {
  if (firstForecast) {
    return (
      <div className='forecast forecast--first grid-2-column-2'>
        <img className='forecast__icon-2' src={imgSrc} alt={imgDescription} />
        <div className='flex-container-2'>
          <p className='forecast__day width-full'>{moment(day * 1000).format('dddd')}</p>

          <p className='forecast__temp-2'>
            Night - {nightTemp}<sup>o</sup>C
          </p>

          <p className='forecast__temp-2'>
            Day - {dayTemp}<sup>o</sup>C
          </p>
        </div>
      </div>
    );
  } else {
    console.log('HAHA')
    return (
      <div className='forecast flex-container-2'>
        <div>
          <span className='forecast__day'>{moment(day * 1000).format('ddd')}</span>
        </div>
        <img className='forecast__icon' src={imgSrc} alt={imgDescription} />
        <div>
          <p className='forecast__temp'>Night-{nightTemp}<sup>o</sup>C</p>
          <p className='forecast__temp'>Day-{dayTemp}<sup>o</sup>C</p>
        </div>
      </div>
    )
  }
}

export default Forecast;
