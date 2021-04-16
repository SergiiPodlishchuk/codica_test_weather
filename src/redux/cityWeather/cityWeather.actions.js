import { createAction } from "@reduxjs/toolkit";

const cityId = createAction("product/productId");

const addCityRequest = createAction("city/addRequest");
const addCitySuccess = createAction("city/addSuccess");
const addCityError = createAction("city/addError");

const deleteCity = createAction("city/delete");

// eslint-disable-next-line
export default {
  cityId,
  addCityRequest,
  addCitySuccess,
  addCityError,
  deleteCity,
};
