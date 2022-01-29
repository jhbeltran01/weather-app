import moment from 'moment';
import React from 'react';

function FetchingData({ firstForecast }) {
  if (firstForecast) {
    return (
      <div className='card-3 grid-2-column-2'>
        <div className='fetching-data-3__container-1'></div>
        <div className='flex-container-3'>
          <p className='fetching-data-3__container-2'></p>
          <p className='fetching-data-3__container-2'></p>
          <p className='fetching-data-3__container-2'></p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='card-4 flex-container-3'>
        <div>
          <p className='fetching-data-4__container-1'></p>
        </div>
        <div className='fetching-data-4__container-2'></div>
        <div>
          <p className='fetching-data-4__container-3'></p>
          <p className='fetching-data-4__container-3'></p>
        </div>
      </div>
    )
  }
}

export default FetchingData;
