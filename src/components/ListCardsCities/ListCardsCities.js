import React from "react";
import { useSelector } from "react-redux";

import CityWeather from "../CityWeather/CityWeather";

import s from "./ListCards.module.css";

export default function ListCardsCities() {
  const listCitiesWeather = useSelector((state) => state.cities.cities);

  return (
    <>
      <ul className={s.list}>
        {listCitiesWeather.map((cityData) => (
          <CityWeather key={cityData.id} cityData={cityData} />
        ))}
      </ul>
    </>
  );
}
