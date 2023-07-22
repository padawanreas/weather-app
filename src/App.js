import React, { useState, useEffect } from "react";
import axios from "axios";
import { base_url, api_key } from "./components/Configs/Api";
import "./App.css";
import Weather from "./components/Weather/Weather";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(
        `${base_url}?lat=49.183333&lon=-0.350000&appid=${api_key}&lang=fr`
      );
      setWeatherData(response.data);
    };
    getWeather();
  }, []);

  //console.log(weatherData);

  return (
    <div className="App">
      <div className="header">
        <p>WEATHER_APP</p>
        <div className="search">
          <input placeholder="search location" type="text" />
        </div>
      </div>
      <Weather data={weatherData} />
    </div>
  );
}

export default App;
