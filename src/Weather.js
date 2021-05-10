import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
 
  const [weatherData, setweatherData] = useState({ready: false});

  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Monday 04:17",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,

    });
  }

  if (weatherData.ready) {
 return ( 
    <div className="Weather">
     <form className="mt-5">
       <input type="search" 
       placeholder="Enter a city" 
       classname="form-control" 
       autofocus="on" 
       />
       <input type="submit" 
       value="Search" 
       className="btn btn-light" 
       />
     </form>

      <h1>{weatherData.city}</h1>
      <p className="ms-4">Last Updated: {weatherData.date}</p> 
       
        <div className="row">
          <div className="col-6">
          <img className="ms-4" src={weatherData.iconUrl} alt={weatherData.description} />
          <span className="temperature"> {Math.round(weatherData.temperature)}°F</span>
          </div>

          <div className="col">
            <ul>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div> 
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

  

 