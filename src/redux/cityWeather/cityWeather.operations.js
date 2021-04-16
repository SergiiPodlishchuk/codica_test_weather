import axios from "axios";
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

const deleteCity = (cityId) => async (dispatch) => {
  dispatch(cityWeatherActions.deleteProductRequest());
  await axios
    .delete(`/cities/${cityId}`)
    .then(() => dispatch(cityWeatherActions.deleteProductSuccess(cityId)))
    .catch((error) => dispatch(cityWeatherActions.deleteProductError(error)));
};
// eslint-disable-next-line
export default {
  addCity,
  deleteCity,
};
