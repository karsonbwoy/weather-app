import React from "react";

export default function WeatherDisplay({ weather }) {
    return (
        <div className="weather-info">
            {weather && (<p>Weather for {weather.name}: {weather.weather[0].description}</p>)}
        </div>
    );
}