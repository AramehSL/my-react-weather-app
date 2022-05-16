import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import "./CitySearch.css";

export default function CitySeearch(props) {
  let [city, setCity] = useState(null);
  let [cityName, setCityName] = useState(null);
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setCityName(<h1>{response.data.name}</h1>);
    setTemperature(
      <ul>
        <li> Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li> Humidity: {Math.round(response.data.main.humidity)}%</li>
        <li> Wind speed: {Math.round(response.data.wind.speed)}Km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </li>
      </ul>
    );
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
    &appid=88ce603b3361b10f232b41d49c2e52e3&units=metric`;
    axios.get(url).then(showTemperature);
  }

  return (
    <div className="CitySearch">
      <div className="row row-1">
        <div className="col-6">
          <h1 className="cityName">
            {cityName} ,{temperature}
          </h1>
        </div>
        <div className="col-6">
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-text"
              placeholder="Enter a city"
              autoComplete="off"
              onChange={changeCity}
            />
            <button className="search-btn">
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button id="current-location">
              <FontAwesomeIcon icon={faLocationArrow} />{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
