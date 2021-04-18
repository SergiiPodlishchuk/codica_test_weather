import React, { Suspense } from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import Container from "@material-ui/core/Container";

import "./App.css";

import ListCardsCities from "./components/ListCardsCities/ListCardsCities";
import CityWeatherDetails from "./components/CityWeatherDetails/CityWeatherDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Hi</div>}>
          <Switch>
            <Route path="/" exact component={ListCardsCities} />
            <Route path="/cityDetails/:cityId" component={CityWeatherDetails} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
