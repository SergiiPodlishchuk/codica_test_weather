import React from "react";

export default function CityWeather({ cityData }) {
  const { name, main } = cityData;

  const { temp, feels_like, pressure, humidity } = main;
  return (
    <li>
      <h2>{name}</h2>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>temperature: {temp}</p>
        <p>feels_like: {feels_like}</p>
        <p>pressure: {pressure}</p>
        <p>Humidity: {humidity}</p>
      </div>
    </li>
  );
}
