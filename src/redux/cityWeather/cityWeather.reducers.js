import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import cityWeatherActions from "./cityWeather.actions";

const cities = createReducer([], {
  [cityWeatherActions.addCitySuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [cityWeatherActions.deleteCity]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),

  [cityWeatherActions.updateCitySuccess]: (state, action) =>
    state.map((city) => {
      if (city.id === action.payload.id) {
        return action.payload;
      }
      return city;
    }),
});

const cityId = createReducer("", {
  [cityWeatherActions.cityId]: (state, action) => action.payload,
});

const hourlyWeatherCity = createReducer([], {
  [cityWeatherActions.getHourlyWeatherSuccess]: (state, action) =>
    action.payload.hourly,
});

export default combineReducers({
  cities,
  cityId,
  hourlyWeatherCity,
});
