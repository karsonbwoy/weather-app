import React, { useState } from "react";
import SearchBox from "./SearchBox.js";
import WeatherDisplay from "./WeatherDisplay.js";

export default function WeatherApp () {

    const [searchedCity, setSearchedCity] = useState('')
    const apiKey = 'bf97df8adb1d6939bc19698300cba0f1'
    const [weatherData, setWeatherData] = useState() 

    function handleSubmit(e, city) {
      e.preventDefault();
      setSearchedCity(city)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => {
          console.log(response)
          if (!response.ok) {
            setWeatherData(null)
          }
          return response.json()
        }).then(data => {
          console.log(data);
          setWeatherData(data.weather[0].description)
        })
    }

    return (
      <div className="werather-app-container">
        <h1>WeatherApp</h1>
        <SearchBox onClick = {handleSubmit}></SearchBox>
        <WeatherDisplay city = {searchedCity} weather = {weatherData}></WeatherDisplay>
      </div>  
    );
}