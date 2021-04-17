import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cityWeatherOperations from "../../redux/cityWeather/cityWeather.operations";

import s from "./CityWeatherDeails.module.css";

export default function CityWeatherDetails() {
  const dispatch = useDispatch();

  const listCitiesWeather = useSelector((state) => state.cities.cities);
  const idCity = useSelector((state) => state.cities.cityId);
  const hourlyTempList = useSelector((state) => state.cities.hourlyWeatherCity);

  const cityDetails = listCitiesWeather.find(({ id }) => id === +idCity);
  const { main, name, sys, weather, wind, dt, coord, clouds } = cityDetails;
  const { temp, feels_like, pressure, humidity, temp_max, temp_min } = main;

  React.useEffect(() => {
    dispatch(
      cityWeatherOperations.getHourlyWeather(
        coord.lat,
        coord.lon,
        "minutely,daily"
      )
    );
  }, [coord, dispatch]);

  const iconsWeather = weather.map(({ icon }) => icon);

  const timeNow = new Date(dt * 1000).toLocaleTimeString();
  const sunR = new Date(sys.sunrise * 1000).toLocaleTimeString();
  const sunS = new Date(sys.sunset * 1000).toLocaleTimeString();

  const updateData = () => {
    dispatch(cityWeatherOperations.updateCity(name));
  };

  return (
    <div>
      <Link to="/"> Back to the list cities</Link>
      <h2>Hi!! You choose {name} city</h2>

      <p> last update data {timeNow}</p>
      <div>Clouds {clouds.all} %</div>
      <p>
        Longitude {coord.lon}, latitude {coord.lat}
      </p>
      <div>
        <ul className={s.listIcons}>
          {iconsWeather.map((icon) => (
            <li key={icon}>
              <img
                className={s.iconWeather}
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={icon}
              />
            </li>
          ))}
        </ul>
      </div>
      <p>
        temperature: {Math.floor(temp - 273)} C, feels like{" "}
        {Math.floor(feels_like - 273)} C
      </p>
      <p>pressure: {`${Math.floor((pressure * 7.464) / 10)} мм.рт.ст`}</p>
      <p>Humidity: {humidity} %</p>
      <p>
        Maximum and minimum temperature at the moment:{" "}
        {Math.floor(temp_max - 273)} C - {Math.floor(temp_min - 273)} C
      </p>
      <p>wind speed: {wind.speed} m/s</p>
      <p> sunrise {sunR}</p>
      <p> sunset {sunS}</p>

      <div className={s.hourlyTemp}>
        <h3>Почасовой прогноз</h3>
        <ul className={s.listHourTemp}>
          {hourlyTempList.map((hour) => {
            const time = new Date(hour.dt * 1000).toLocaleTimeString();
            return (
              <li key={hour.dt} className={s.itemHourTemp}>
                <p className={s.temp}>{Math.floor(hour.temp - 273)} C</p>
                <p className={s.time}>{time}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <button onClick={updateData}>Update data</button>
    </div>
  );
}
