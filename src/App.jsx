import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [userLocation, setUserLocation] = useState({});

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude
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

  }


  useEffect(() => {
    fetchWeatherBasedFromUserLocation();
  })

  return (
    <div className="App">
      {userLocation.lat}
    </div>
  );
}

export default App;
