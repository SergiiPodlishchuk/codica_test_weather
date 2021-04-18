import { createAction } from "@reduxjs/toolkit";

const cityId = createAction("product/productId");

const addCityRequest = createAction("city/addRequest");
const addCitySuccess = createAction("city/addSuccess");
const addCityError = createAction("city/addError");

const deleteCity = createAction("city/delete");

const updateCityRequest = createAction("city/updateRequest");
const updateCitySuccess = createAction("city/updateSuccess");
const updateCityError = createAction("city/updateError");

const getHourlyWeatherRequest = createAction("city/getRequest");
const getHourlyWeatherSuccess = createAction("city/getSuccess");
const getHourlyWeatherError = createAction("city/getError");

const errorOff = createAction("error/off");

// eslint-disable-next-line
export default {
  cityId,
  addCityRequest,
  addCitySuccess,
  addCityError,
  deleteCity,
  updateCityRequest,
  updateCitySuccess,
  updateCityError,
  getHourlyWeatherRequest,
  getHourlyWeatherSuccess,
  getHourlyWeatherError,
  errorOff,
};
