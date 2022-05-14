import React, { useState } from "react";

import axios from "axios";

import "./CitySearch.css";

export default function CityName(props) {
  let [city, setCity] = useState(null);
  function handleResponse(response) {
    alert(`
    the weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiKey = "88ce603b3361b10f232b41d49c2e52e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="CitySearch">
      <div className="row row-1">
        <div className="col-6">
          <h1 className="cityName">Montreal</h1>
        </div>
        <div className="col-6">
          <form className="search">
            <input
              type="text"
              className="search-text"
              placeholder="Enter a city"
              autoComplete="off"
              onChange={changeCity}
            />
            <button className="search-btn"></button>
            <button id="current-location">{/* <CurrentLocation /> */}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
