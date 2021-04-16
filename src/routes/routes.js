/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

export default [
  {
    path: "/cities",
    label: "cityList",
    exact: true,
    component: lazy(() =>
      import(
        "../components/ListCardsCities/ListCardsCities.js" /* webpackChunkName: "Category" */
      )
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/cities/city:id",
    label: "cityWeatherDetails",
    exact: true,
    component: lazy(() =>
      import(
        "../components/CityWeatherDetails" /* webpackChunkName: "Products_List" */
      )
    ),
    private: false,
    restricted: false,
  },
];
