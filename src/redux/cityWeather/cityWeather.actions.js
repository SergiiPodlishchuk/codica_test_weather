import { createAction } from "@reduxjs/toolkit";

const cityId = createAction("product/productId");

const addCityRequest = createAction("city/addRequest");
const addCitySuccess = createAction("city/addSuccess");
const addCityError = createAction("city/addError");

const deleteCity = createAction("city/delete");

const updateCityRequest = createAction("city/updateRequest");
const updateCitySuccess = createAction("city/updateSuccess");
const updateCityError = createAction("city/updateError");

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
};
