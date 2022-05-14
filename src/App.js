import Weather from "./Weather";
import CitySearch from "./CitySearch";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <CitySearch />
        <hr />
        <Weather />
        <hr />
        {/* <Forecast /> */}
      </div>
    </div>
  );
}
