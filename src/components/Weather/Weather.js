import React from "react";
import "./Style.css";
import { AiFillCloud } from "react-icons/ai";
import {
  BsFillCloudRainFill,
  BsFillCloudSunFill,
  BsFillDropletFill,
  BsCloudHaze2Fill,
} from "react-icons/bs";
import { LuGauge } from "react-icons/lu";
import { GiWindsock } from "react-icons/gi";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="content">
      <div className="weather">
        {data.name ? (
          <h1>{data.name}</h1>
        ) : (
          <h1 className="welcome">
            Welcome to the weather app, please search the city
          </h1>
        )}

        <div className="icons">
          {data && data.weather && data.weather.length > 0 && (
            <div>
              {data.weather[0].main === "Clear" && (
                <BsFillCloudSunFill size={80} />
              )}
              {data.weather[0].main === "Clouds" && <AiFillCloud size={80} />}
              {data.weather[0].main === "Rain" && (
                <BsFillCloudRainFill size={80} />
              )}
              {data.weather[0].main === "Mist" && (
                <BsCloudHaze2Fill size={80} />
              )}
              <p>{data.weather[0].description}</p>
              <p className="temperature">{Math.round(data.main.temp)}°C</p>

              <div className="main-weather">
                <div className="humidity">
                  <h4>
                    <BsFillDropletFill />
                    humidity
                  </h4>
                  <p>{data.main.humidity}%</p>
                </div>
                <div className="pressure">
                  <h4>
                    <LuGauge />
                    pressure
                  </h4>
                  <p>{data.main.pressure}hPa</p>
                </div>
                <div className="wind">
                  <h4>
                    <GiWindsock />
                    wind
                  </h4>

                  <p>{data.wind.speed}/Mph</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
