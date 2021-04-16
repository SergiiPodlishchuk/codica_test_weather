import React, { Suspense } from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import "./App.css";

import api from "./api/api";

import ListCardsCities from "./components/ListCardsCities/ListCardsCities";
import CityWeatherDetails from "./components/CityWeatherDetails/CityWeatherDetails";

function App() {
  api("Kharkov").then((data) => console.log(data));

  return (
    <div className="App">
      <BrowserRouter>
        <header> Weather per city </header>
        <Suspense fallback={<div>Hi</div>}>
          <Switch>
            <Route path="/" exact component={ListCardsCities} />
            <Route
              path="/cities/city:id"
              exact
              component={CityWeatherDetails}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
