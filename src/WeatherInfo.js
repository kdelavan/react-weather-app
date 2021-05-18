import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInformation">
      <div className="city-temp">
        <h1>{props.data.city} </h1>
        <span className="temperature">
          <WeatherIcons code={props.data.icon} size={46} />{" "}
          <WeatherTemperature fahrenheit={props.data.temperature} />{" "}
        </span>
      </div>
      <FormattedDate date={props.data.date} />
      <div className="d-flex flex-row-reverse">
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} mph</li>
        </ul>
      </div>
    </div>
  );
}
