import cityWeatherActions from "./cityWeather.actions";

import api from "../../api/api";

const addCity = (cityName) => async (dispatch) => {
  dispatch(cityWeatherActions.addCityRequest());
  try {
    const data = await api(cityName);
    dispatch(cityWeatherActions.addCitySuccess(data));
  } catch (error) {
    dispatch(cityWeatherActions.addCityError(error));
  }
};

const updateCity = (cityName) => async (dispatch) => {
  dispatch(cityWeatherActions.updateCityRequest());
  try {
    const data = await api(cityName);
    dispatch(cityWeatherActions.updateCitySuccess(data));
  } catch (error) {
    dispatch(cityWeatherActions.updateCityError(error));
  }
};
// eslint-disable-next-line
export default {
  addCity,
  updateCity,
};
