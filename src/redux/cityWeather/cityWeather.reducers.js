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

const loading = createReducer(false, {
  [cityWeatherActions.addCityRequest]: () => true,
  [cityWeatherActions.addCitySuccess]: () => false,
  [cityWeatherActions.addCityError]: () => false,
  [cityWeatherActions.updateCityRequest]: () => true,
  [cityWeatherActions.updateCitySuccess]: () => false,
  [cityWeatherActions.updateCityError]: () => false,
  [cityWeatherActions.getHourlyWeatherRequest]: () => true,
  [cityWeatherActions.getHourlyWeatherSuccess]: () => false,
  [cityWeatherActions.getHourlyWeatherError]: () => false,
});

const error = createReducer(
  { error: false },
  {
    [cityWeatherActions.addCityError]: (_, action) => ({
      error: true,
      message: action.payload.message,
    }),
    [cityWeatherActions.addCitySuccess]: () => ({
      error: false,
    }),

    [cityWeatherActions.updateCityError]: (_, action) => ({
      error: true,
      message: action.payload.message,
    }),
    [cityWeatherActions.updateCitySuccess]: () => ({
      error: false,
    }),
    [cityWeatherActions.getHourlyWeatherError]: (_, action) => ({
      error: true,
      message: action.payload.message,
    }),
    [cityWeatherActions.getHourlyWeatherSuccess]: () => ({
      error: false,
    }),
    [cityWeatherActions.errorOff]: (_, action) => action.payload,
  }
);

export default combineReducers({
  cities,
  cityId,
  hourlyWeatherCity,
  loading,
  error,
});
