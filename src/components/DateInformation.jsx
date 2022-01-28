import moment from 'moment';
import React, { useState } from 'react';

const time = new Date();
const date = moment().format('dddd, D MMMM');
const hours = time.getHours();
const minutes = time.getMinutes();
const meridian = time.getHours() > 12 ? 'pm' : 'am'

const DateInformation = () => {
  return (
    <div>
      <p>{hours}:{minutes} {meridian}</p>
      <p>{date}</p>
    </div>
  );
}

export default DateInformation;
