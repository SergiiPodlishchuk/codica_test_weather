import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import cityWeatherActions from "../../redux/cityWeather/cityWeather.actions";
import cityWeatherOperations from "../../redux/cityWeather/cityWeather.operations";

import s from "./CityWeather.module.css";

export default function CityWeather({ cityData }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { name, main, weather, id, dt } = cityData;

  const { temp, feels_like, pressure, humidity } = main;

  const iconsWeather = weather.map(({ icon }) => icon);

  const deleteCity = (e) => {
    const id = e.target.parentElement.id;
    dispatch(cityWeatherActions.deleteCity(+id));
  };

  const onDetails = (e) => {
    const id = e.currentTarget.id;
    dispatch(cityWeatherActions.cityId(id));
    history.push(`/cityDetails/${name}/${id}`);
  };

  const updateData = () => {
    dispatch(cityWeatherOperations.updateCity(name));
  };

  const timeNow = new Date(dt * 1000).toLocaleTimeString();
  return (
    <li className={s.cardCity} id={id}>
      <button className={s.deleteButton} onClick={deleteCity}>
        X
      </button>
      <div onClick={onDetails} id={id}>
        <h2 className={s.titleCity}>{name}</h2>
        <p> last update data {timeNow}</p>
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
        <div>
          <p>temperature: {Math.floor(temp - 273)}</p>
          <p>feels_like: {Math.floor(feels_like - 273)}</p>
          <p>pressure: {`${Math.floor((pressure * 7.464) / 10)} мм.рт.ст`}</p>
          <p>Humidity: {humidity} %</p>
        </div>
      </div>
      <button onClick={updateData}>Update data</button>
    </li>
  );
}
