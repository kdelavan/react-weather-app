import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
 
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,

    });
  }

if (weatherData.ready) {
 return ( <div className="Weather">
    <form>
       <input type="search" 
       placeholder="Enter a city" 
       classname="form-control" 
       autofocus="on" 
       />
       <input type="submit" 
       value="Search" />
     </form>
     
    <div className="WeatherDetails">
      <h1>{weatherData.city}</h1>
      <p>
        <FormattedDate date={weatherData.date} />
      </p>
          <img className="ms-4" src={weatherData.icon} alt={weatherData.description} />
          <span className="temperature"> {Math.round(weatherData.temperature)}°F</span>
          <div>
            <ul>
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div> 
    <footer>Coded by<a href="https://elegant-carson-775ffa.netlify.app/"> Kathryn Delavan</a> | Open-source on <a href="https://github.com/kdelavan/react-weather-app">GitHub</a></footer>
    </div>
    </div>
  );
} else {
const apiKey = "d714b403e950ff68e3e4666fcfff93ae"; 

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
}
  }

  

 