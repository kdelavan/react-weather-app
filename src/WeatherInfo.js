import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";
import Rainbow from "./Rainbow";
import Logo from "./images/VHS-logo.png";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo container">
      
        <div classname="d-flex flex-row">
          <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
        </div>
      <div className="d-flex flex-row-reverse">
        <WeatherIcons code={props.data.icon} />
        <span className="temperature"> {Math.round(props.data.temperature)}°F</span>
        </div>
      
          <div className="d-flex flex-row-reverse">
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div> 
        <Rainbow />
    <footer>Coded by
      <a href="https://elegant-carson-775ffa.netlify.app/"> 
      Kathryn Delavan</a> | Open-source on 
      <a href="https://github.com/kdelavan/react-weather-app">
        GitHub</a>
     {" "}<img className="img-fluid" src={Logo} alt="vhs logo"/>
    </footer>
    </div>
    
    );
}