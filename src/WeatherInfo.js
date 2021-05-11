import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
          <img className="ms-4" src={props.data.icon} alt={props.data.description} />
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