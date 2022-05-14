import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`
    the weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "88ce603b3361b10f232b41d49c2e52e3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return <h2>Hellooooo</h2>;
}
