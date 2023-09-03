import React, { useState } from "react";
import SearchBox from "./SearchBox.js";
import WeatherDisplay from "./WeatherDisplay.js";
import './WeatherApp.css'

export default function WeatherApp () {

    const apiKey = 'bf97df8adb1d6939bc19698300cba0f1'
    const [weatherData, setWeatherData] = useState() 

    function handleSubmit(e, city) {
      e.preventDefault();
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => {
          if (!response.ok) {
            setWeatherData();
            throw new Error('Network response was not ok.')
          }
          return response.json()
        }).then(data => { 
          setWeatherData(data)
        }).catch(error => {console.log(error)})
    }

    return (
      <div className="werather-app">
        <h1>WeatherApp</h1>
        <SearchBox onClick = {handleSubmit}></SearchBox>
        <WeatherDisplay weather = {weatherData}></WeatherDisplay>
      </div>  
    );
}