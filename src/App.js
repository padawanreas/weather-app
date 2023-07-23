import React, { useState, useEffect } from "react";
import axios from "axios";
import { base_url, api_key } from "./components/Configs/Api";
import { AiOutlineSearch } from "react-icons/ai";
import "./App.css";
import Weather from "./components/Weather/Weather";

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [location, setLocation] = useState("");

  const url = `${base_url}?q=${location}&appid=${api_key}&units=metric&lang=fr`;
  //console.log(weatherData);
  const searchLocation = async () => {
    const response = await axios.get(url).then((response) => {
      setWeatherData(response.data);
      console.log(response.data);
    });
    setLocation("");
  };

  return (
    <div className="App">
      <div className="header">
        <div className="search">
          <input
            placeholder="search city"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <AiOutlineSearch onClick={searchLocation} />
        </div>
      </div>
      <div className="container">
        <Weather data={weatherData} />
      </div>
    </div>
  );
}

export default App;
