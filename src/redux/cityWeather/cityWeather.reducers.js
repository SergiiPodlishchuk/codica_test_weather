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
});

const cityId = createReducer("", {
  [cityWeatherActions.cityId]: (state, action) => action.payload,
});

export default combineReducers({
  cities,
  cityId,
});
