import moment from 'moment';
import React from 'react';

const time = new Date();
const date = moment().format('dddd, D MMMM');
const hours = time.getHours();
const minutes = time.getMinutes();
const meridian = time.getHours() > 12 ? 'PM' : 'AM'

const DateInformation = () => {
  return (
    <div className='time'>
      <p><span className='time__hour'>{hours}:{minutes}</span> <span className='time__meridian'>{meridian}</span></p>
      <p className='time__date'>{date}</p>
    </div>
  );
}

export default DateInformation;
