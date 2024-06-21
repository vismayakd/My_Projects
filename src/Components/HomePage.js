import React , {useEffect, useState} from 'react';
import NewsList from './NewsList';
import { getWeatherByLocation } from '../API/WeatherAPI';
import WeatherView from './WeatherView';

function HomePage() {
    const [weather, setWeather] = useState(null);
    // To get the users geolocation
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const weatherData = await getWeatherByLocation(latitude, longitude);
          setWeather(weatherData);
        });
      }, []);
      // console.log("weather", weather)
  return (
    <div>
        <h1>NEWS HEADLINES</h1>
        <div className='language'>
        <label>Select Language:</label>
        <select >
          <option value="en">English</option>
          <option value="hn">Hindi</option>
          <option value="ch">Chineese</option>
          <option value="sp">Spanish</option>
         
        </select>
      </div>
      {/* weather card view */}
        <div>
          {weather && <WeatherView weather={weather} />}
        </div>
        {/* News list */}
        <div>
          <NewsList/>
        </div>
    </div>
  )
}
export default HomePage;