import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import cityWeatherActions from "../../redux/cityWeather/cityWeather.actions";
import cityWeatherOperations from "../../redux/cityWeather/cityWeather.operations";

import CityWeather from "../CityWeather/CityWeather";

import s from "./ListCards.module.css";

export default function ListCardsCities() {
  const listCitiesWeather = useSelector((state) => state.cities.cities);

  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const addCity = (e) => {
    e.preventDefault();
    console.log(value);
    dispatch(cityWeatherOperations.addCity(value));
    setValue("");
  };

  return (
    <>
      <form onSubmit={addCity}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">AddCity</button>
      </form>

      <ul className={s.list}>
        {listCitiesWeather.map((cityData) => (
          <CityWeather key={cityData.id} cityData={cityData} />
        ))}
      </ul>
    </>
  );
}
