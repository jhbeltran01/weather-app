import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentForecast from './components/CurrentForecast';
import moment from 'moment';
import Date from './components/DateInformation';
import DateInformation from './components/DateInformation';
import Forecast from './components/Forecast';
import FetchingData from './components/FetchingData';

function App() {
  const [userLocation, setUserLocation] = useState({});
  const [currentForecast, setCurrentForeCast] = useState({});
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [timezone, setTimezone] = useState();
  const [fetchingForecast] = useState([1, 2, 3, 4, 5, 6, 7])

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      })
    } else {
      console.log('Geolocation is not supported!')
    }
  }


  useEffect(() => {
    getUserLocation();
  }, [])


  const assignCurrentForecastValues = data => {
    return setCurrentForeCast({
      humidity: data.humidity,
      pressure: data.pressure,
      windSpeed: data.wind_speed,
      sunrise: moment(data.sunrise).format('HH:mm a'),
      sunset: moment(data.sunset).format('HH:mm a')
    })
  }



  const assignWeatherForecastValues = forecast => {
    setWeatherForecast(forecast.map((day, index) => {
      if (index >= 1) {
        return {
          id: index,
          imgSrc: `https://openweathermap.org/img/w/${day.weather[0].icon}.png`,
          imgDescription: day.weather[0].description,
          day: day.dt,
          nightTemp: day.temp.night,
          dayTemp: day.temp.day,
          firstForecast: index === 1
        }
      }
    }))
  }




  const fetchWeatherBasedFromUserLocation = () => {
    const { lat, lon } = userLocation;
    if (userLocation.lat) {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=3ebcdfaec10c1750cd05e710592a65f8`)
        .then(response => {
          assignCurrentForecastValues(response.data.current);
          assignWeatherForecastValues(response.data.daily);
          setTimezone(response.data.timezone)
        }).catch(error => {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    fetchWeatherBasedFromUserLocation();
  }, [userLocation])

  return (
    <div className="container">
      <div className='grid-2-column'>
        <div>
          <DateInformation />

          <CurrentForecast
            humidity={currentForecast.humidity}
            pressure={currentForecast.pressure}
            windSpeed={currentForecast.windSpeed}
            sunrise={currentForecast.sunrise}
            sunset={currentForecast.sunset}
          />
        </div>

        <div className='location'>
          <p className='location__timezone'>{timezone ? timezone : <span className='fetching-data-2'></span>}</p>
          <p className='location__coords'>{userLocation.lat}N {userLocation.lon}E</p>
        </div>
      </div>


      <div className='card-2 flex position-item'>
        {
          weatherForecast.map(forecast => {
            if (forecast) {
              return (
                <Forecast
                  key={forecast.id}
                  imgSrc={forecast.imgSrc}
                  imgDescription={forecast.imgDescription}
                  day={forecast.day}
                  nightTemp={forecast.nightTemp}
                  dayTemp={forecast.dayTemp}
                  firstForecast={forecast.firstForecast}
                />
              )
            }
          })
        }

        {weatherForecast.length === 0 && fetchingForecast.map((fetch, index) => {
          if (index === 0) {
            return <FetchingData key={index} firstForecast={true} />
          } else {
            return <FetchingData key={index} firstForecast={false} />
          }
        })}
      </div>
    </div>
  );
}

export default App;
