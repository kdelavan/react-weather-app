import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
         <WeatherIcons code={props.data.icon} />
          <span className="temperature"> {Math.round(props.data.temperature)}°F</span>
          <div>
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div> 
    <footer>Coded by<a href="https://elegant-carson-775ffa.netlify.app/"> Kathryn Delavan</a> | Open-source on <a href="https://github.com/kdelavan/react-weather-app">GitHub</a></footer>
    </div>
    );
}