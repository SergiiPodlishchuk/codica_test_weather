import React, { Suspense } from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import "./App.css";

import ListCardsCities from "./components/ListCardsCities/ListCardsCities";
import CityWeatherDetails from "./components/CityWeatherDetails/CityWeatherDetails";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Hi</div>}>
          <Switch>
            <Route path="/" exact component={ListCardsCities} />
            <Route path="/cityDetails/:cityId" component={CityWeatherDetails} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
