import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    tempreture: 17,
    date: "09-04-2022",
    time: "22:22",
    dayName: "Saturday",
    description: "Cloudy",
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 10,
    pressure: 1025,
  };

  return (
    <div className="Weather">
      <div className="row row-2">
        <div className="col-3">
          <div className="date-info">
            <h3 className="day-name">{weatherData.dayName}</h3>
            <small className="update">Last Updated :</small>
            <div className="time">{weatherData.time}</div>
            <div className="date">{weatherData.date}</div>
          </div>
        </div>

        <div className="col-3">
          <img
            src={weatherData.imageUrl}
            alt={weatherData.description}
            className="current-weather-img"
          />
        </div>

        <div className="col-3">
          <div className="current-tempreture">
            <span className="degree"> {weatherData.tempreture}</span>
            <a href="/" className="deg-celsius">
              °C
            </a>
            <span className="devider">|</span>
            <a href="/" className="deg-fahrenheit">
              °F
            </a>
            <div className="feels-like">
              feels like <span />
              <span className="feels-like-deg">°C</span>
            </div>
            <div className="current-weather-status">
              {weatherData.description}
            </div>
          </div>
        </div>

        <div className="col-3 info">
          <div className="details">
            <div>
              Humidity: <span className="humidity">{weatherData.humidity}</span>
              %{" "}
            </div>
            <div>
              Wind: <span className="wind">{weatherData.wind}</span> km/h
            </div>
            <div>
              Pressure: <span className="pressure">{weatherData.pressure}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
