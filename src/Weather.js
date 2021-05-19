import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Rainbow from "./Rainbow";
import Logo from "./images/VHS-logo.png";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "5071a8a88bc53425a9902d3581c5e4e6";
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
      <div className="Weather container">
        <form onSubmit={handleSubmit}>
          <input
            className="searchBar me-2 p-1"
            type="search"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
          <input className="btn btn-dark" type="submit" value="Search" />
        </form>

        <div className="WeatherInfo">
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
          <Rainbow />
          <footer>
            Coded by{" "}
            <a href="https://elegant-carson-775ffa.netlify.app/">
              Kathryn Delavan
            </a>{" "}
            | Open-source on{" "}
            <a href="https://github.com/kdelavan/react-weather-app">GitHub</a>{" "}
            <img className="img-fluid" src={Logo} alt="vhs logo" />
          </footer>{" "}
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
