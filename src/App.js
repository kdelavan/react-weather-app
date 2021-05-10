import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather defaultCity = "New York" />
   
     <footer>Coded by<a href="https://elegant-carson-775ffa.netlify.app/"> Kathryn Delavan</a> | Open-source on <a href="https://github.com/kdelavan/react-weather-app">GitHub</a></footer>
     </div>
    </div>
  );
}

