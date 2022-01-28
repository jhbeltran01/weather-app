import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentForecast from './components/CurrentForecast';
import moment from 'moment';
import Date from './components/DateInformation';
import DateInformation from './components/DateInformation';
import Forecast from './components/Forecast';

function App() {
  console.log('HAHA')
  const [userLocation, setUserLocation] = useState({});
  const [currentForecast, setCurrentForeCast] = useState({});
  const [weatherForecast, setWeatherForecast] = useState([])
  const [timezone, setTimezone] = useState()

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



  const fetchWeatherBasedFromUserLocation = () => {
    const { lat, lon } = userLocation;
    if (userLocation.lat) {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=a9a4b8c3833237731b4bad865f88ac6f`)
        .then(response => {
          setCurrentForeCast({
            humidity: response.data.current.humidity,
            pressure: response.data.current.pressure,
            windSpeed: response.data.current.wind_speed,
            sunrise: moment(response.data.current.sunrise).format('HH:mm:ss a'),
            sunset: moment(response.data.current.sunset).format('HH:mm:ss a')
          })

          setWeatherForecast(response.data.daily.map((day, index) => {
            const forecast = {
              id: index,
              imgSrc: `https://openweathermap.org/img/w/${day.weather[0].icon}.png`,
              imgDescription: day.weather[0].description,
              day: day.dt,
              nightTemp: day.temp.night,
              dayTemp: day.temp.day,
              firstForecast: false
            }

            forecast.firstForecast = index === 0;

            return forecast;
          }))

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
    <div className="">
      <div>
        <DateInformation />

        <div>
          <p>{timezone}</p>
          <p>{userLocation.lat}N {userLocation.lon}E</p>
        </div>
      </div>

      <CurrentForecast
        humidity={currentForecast.humidity}
        pressure={currentForecast.pressure}
        windSpeed={currentForecast.windSpeed}
        sunrise={currentForecast.sunrise}
        sunset={currentForecast.sunset}
      />

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
    </div>
  );
}

export default App;
