import React from 'react';
import { useState } from 'react';
// import { IconName } from 'react-icons'
// import Button from "react-bootstrap/Button"
import "./index.css";

const api = {
  key: "6e4606e1a80c430f687159e941c8c2c0",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const searchWeather = () => {
    fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  return (
    <div className="app">
      <div className="search">
        <div>
        <input 
          type="text"
          placeholder="Enter Location..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-primary' onClick={searchWeather}>Search</button>
      </div>
    </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{weather.name}</p>
          </div>
          <div className="temp">
            {weather.main ? <h1>{weather.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {weather.weather ? <p>{weather.weather[0].description}</p> : null}
          </div>
          <div className="icon">
          </div>
        </div>
    
      {weather.name !== undefined &&
        <div className="bottom">
          <div className="feels">
          <p className='bold'>Feels Like:</p>
            {weather.main ? <p>{weather.main.feels_like.toFixed()}°F</p> :null}
          </div>
          <div className="humidity">
            <p className='bold'>Humidity:</p>
            {weather.main ? <p>{weather.main.humidity.toFixed()}%</p> : null}
          </div>
          <div className="wind">
            <p className='bold'>Wind:</p>
            {weather.wind ? <p>{weather.wind.speed.toFixed()}MPH</p> : null}
          </div>
        </div>
      }     
      </div>
    </div>
  );
}

export default App;

