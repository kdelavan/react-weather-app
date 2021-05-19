import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature d-inline">
      {Math.round(props.fahrenheit)}°<span className="unit">F</span>
    </div>
  );
}
