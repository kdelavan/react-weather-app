import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcons code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-temp-max">{maxTemperature()}°</span>
        <span className="WeatherForecast-temp-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
