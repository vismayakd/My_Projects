import React from 'react';
import './Weather.css';



function WeatherView(props) {
  return (
  //weather card view 
  <div className="container">
    <div className="card">
      <div className="city">{props.weather.name}</div>       
      <div className="temp">{props.weather.main.temp}°C</div>
      <div className="desc">{props.weather.weather[0].main}</div>
      
    </div>
  </div>
  )
}
export default WeatherView;
