import React from "react";

export default function WeatherDisplay({ weather }) {
    return (
        <div>
            {weather && (<div className="weather-info">
                <h2>{weather.name}, {weather.sys.country}</h2>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Weather Condition: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
            </div>
          )}
        </div>
    );
}