import React from "react";

export default function WeatherDisplay({ city, weather}) {

    

    return (
        <div className="weather-display-container">
            <p>{city === '' ? 'Search the weather' : `You are looking for '${city}' weather.`}</p>
            <p>{!weather ? 'Weather not found' : `Weather: ${weather}`}</p>
        </div>
    );
}