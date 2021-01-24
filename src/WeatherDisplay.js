import React from "react";
import "./WeatherDisplay.css";

export default function WeatherDisplay(prop) {

  function displayCelsius(event) {
    event.preventDefault();
  }

  function displayFahrenheit(event) {
    event.preventDefault();
  }

  let weatherData = {
    imageUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    temperature: "74",
    city: "New York",
    date: "Saturday 12:14",
    description: "It's a beautiful day!Enjoy Nature!",
    humidity: "35%",
    wind: "4km/h"
  };
  return (
    <div className="WeatherDisplay">
      <div className="container">
        <div className="row">
          <div className="col">
            Mon
            <br />
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div id="row-temp">
              <div col-1>
                <span id="temp" />
                {weatherData.temperature}
                <div col-2>
                  <span id="tempLinks" />
                  <a href="/" onClick={displayCelsius}>
                    °C
                  </a>
                  |
                  <a href="/" onClick={displayFahrenheit}>
                    {" "}
                    °F
                  </a>
                  <div className="row">
                    <form id="search-form" className="weatherapp">
                      <div className="col">
                        <input
                          id="enter-city"
                          type="text"
                          placeholder="Enter City"
                          autoFocus="off"
                          class="new city"
                          autoComplete="Yes"
                        />
                      </div>
                      <div className="col-3">
                        <button type="button" className="btn btn-info">
                          Search
                        </button>
                      </div>
                      <div className="col-3">
                        <button
                          type="button"
                          className="btn btn-sucess"
                          id="location"
                        >
                          Location
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h1> {weatherData.city} </h1>
                      <h3>{weatherData.date}</h3>
                    </div>
                    <div className="col-6 text-right">
                      <ul>
                        <li id="day-description">{weatherData.description}</li>
                        <li>{weatherData.humidity}</li>
                        <li>{weatherData.wind}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h4>
                  Repository:{" "}
                  <a
                    href="https://github.com/issy2500/SheCodes-Weather-App"
                    target="_blank"
                  >
                    {" "}
                    Open Source Code{" "}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
