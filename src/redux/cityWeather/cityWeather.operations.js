import cityWeatherActions from "./cityWeather.actions";

import api from "../../api/api";

const addCity = (cityName, listCitiesWeather) => async (dispatch) => {
  dispatch(cityWeatherActions.addCityRequest());
  try {
    const data = await api.getWeather(cityName);
    const isCity = listCitiesWeather.find(({ id }) => id === data.id);
    !isCity
      ? dispatch(cityWeatherActions.addCitySuccess(data))
      : dispatch(
          cityWeatherActions.addCityError({
            message: "This city has already been declared",
          })
        );
  } catch (error) {
    dispatch(cityWeatherActions.addCityError(error));
  }
};

const updateCity = (cityName) => async (dispatch) => {
  dispatch(cityWeatherActions.updateCityRequest());
  try {
    const data = await api.getWeather(cityName);
    dispatch(cityWeatherActions.updateCitySuccess(data));
  } catch (error) {
    dispatch(cityWeatherActions.updateCityError(error));
  }
};

const getHourlyWeather = (lat, lon, exclude) => async (dispatch) => {
  dispatch(cityWeatherActions.getHourlyWeatherRequest());
  try {
    const data = await api.getHourlyWeather(lat, lon, exclude);

    dispatch(cityWeatherActions.getHourlyWeatherSuccess(data));
  } catch (error) {
    dispatch(cityWeatherActions.getHourlyWeatherError(error));
  }
};
// eslint-disable-next-line
export default {
  addCity,
  updateCity,
  getHourlyWeather,
};
