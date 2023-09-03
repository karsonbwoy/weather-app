import React from "react";
import SearchBox from "./SearchBox.js";
import WeatherDisplay from "./WeatherDisplay.js";

export default function WeatherApp () {
    return (
      <div className="werather-app-container">
        <h1>WeatherApp</h1>
        <SearchBox></SearchBox>
        <WeatherDisplay></WeatherDisplay>
      </div>  
    );
}