import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
 
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

    });
  }

function search() {
  const apiKey = "d714b403e950ff68e3e4666fcfff93ae"; 
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

if (weatherData.ready) {
 return ( 
 <div className="Weather">
    <form onSubmit={handleSubmit}>
       <input 
       type="search" 
       placeholder="Enter a city" 
       classname="form-control" 
       autofocus="on" 
       onChange={handleCityChange}
       />
       <input 
       type="submit" 
       value="Search" />
     </form>
      <WeatherInfo data={weatherData} />  
    </div>
  );

} else {
    search();
    return "Loading...";
}
  }

  

 