import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import cityWeatherOperations from "../../redux/cityWeather/cityWeather.operations";

import {
  Box,
  Container,
  IconButton,
  Typography,
  CircularProgress,
} from "@material-ui/core";

import UpdateIcon from "@material-ui/icons/Update";

import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";

import s from "./CityWeatherDeails.module.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    position: "relative",
    backgroundImage:
      "linear-gradient( 180deg, rgb(63, 81, 181)  0%, rgba(126, 142, 235, 0.9) 100%)",
    color: "white",
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginBottom: "20px",
  },
  title: {},
  buttonBack: {
    position: "absolute",
    left: "10px",
  },
  buttonUpdate: {
    position: "absolute",
    right: "10px",
  },
}));

export default function CityWeatherDetails() {
  const dispatch = useDispatch();

  const listCitiesWeather = useSelector((state) => state.cities.cities);
  const idCity = useSelector((state) => state.cities.cityId);
  const hourlyTempList = useSelector((state) => state.cities.hourlyWeatherCity);

  const hourlyTemp24 = hourlyTempList.slice(0, 25);

  const loading = useSelector((state) => state.cities.loading);

  const cityDetails = listCitiesWeather.find(({ id }) => id === +idCity);
  const { main, name, sys, weather, wind, dt, coord, clouds } = cityDetails;
  const { temp, pressure, humidity } = main;

  React.useEffect(() => {
    dispatch(
      cityWeatherOperations.getHourlyWeather(
        coord.lat,
        coord.lon,
        "minutely,daily"
      )
    );
  }, [coord, dispatch]);

  const iconsWeather = weather.map(({ icon }) => icon);

  const timeNow = new Date(dt * 1000).toLocaleTimeString();
  const sunR = new Date(sys.sunrise * 1000).toLocaleTimeString();
  const sunS = new Date(sys.sunset * 1000).toLocaleTimeString();

  const updateData = () => {
    dispatch(cityWeatherOperations.updateCity(name));
  };

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Link to="/" className={classes.buttonBack}>
        {" "}
        <IconButton style={{ color: "rgb(243, 227, 227)" }}>
          <ArrowBackSharpIcon />
        </IconButton>
      </Link>
      <IconButton
        style={{ color: "rgb(243, 227, 227)" }}
        className={classes.buttonUpdate}
        onClick={updateData}
      >
        <UpdateIcon />
      </IconButton>
      <Box className={classes.main}>
        <Box className={classes.title}>
          <Typography variant="h4" noWrap>
            {name}
          </Typography>
          <Typography variant="h6">
            (longitude: {coord.lon}°, latitude: {coord.lat}°)
          </Typography>
          <Typography variant="h6" noWrap>
            last update {timeNow}
          </Typography>
          <Typography variant="h6" noWrap>
            sunrise: {sunR}
          </Typography>
          <Typography variant="h6" noWrap>
            sunset: {sunS}
          </Typography>
        </Box>
        <Box className={classes.mainData}>
          <Typography variant="h4" noWrap>
            {Math.floor(temp - 273)} C°
          </Typography>
          <Typography variant="h4">
            {`${Math.floor((pressure * 7.464) / 10)} mm.Hg`}
          </Typography>
          <Typography variant="h4" noWrap>
            {humidity} %
          </Typography>
        </Box>
        <Box className={classes.clouds}>
          <Typography variant="h6" noWrap>
            Clouds {clouds.all} %
          </Typography>
          <Typography variant="h6">
            <div>
              <img
                className={s.iconWeather}
                src={`http://openweathermap.org/img/wn/${iconsWeather[0]}@2x.png`}
                alt={iconsWeather[0]}
              />
            </div>
          </Typography>
          <Typography variant="h6" noWrap>
            wind speed: {wind.speed} m/s
          </Typography>
        </Box>
      </Box>

      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <div className={s.hourlyTemp}>
          <ul className={s.listHourTemp}>
            {hourlyTemp24.map((hour, idx) => {
              let timeHour = new Date(hour.dt * 1000).getHours();

              if (timeHour < 10) {
                timeHour = `0${timeHour}`;
              }

              const red = 125;
              const green = 125;
              const blue = 255;

              const tempColor = hour.temp - 273;
              const x = (tempColor / 10) * 100;
              const r = Math.floor(((255 - 125) * x) / 100);

              return (
                <li key={hour.dt} className={s.itemHourTemp}>
                  <p
                    className={s.temp}
                    style={{
                      marginTop: `${40 - Math.floor(hour.temp - 273)}px`,
                      backgroundColor: `rgb(${red + r}, ${green}, ${blue - r})`,
                    }}
                  >
                    {Math.floor(hour.temp - 273)}
                  </p>
                  {/* <div className={s.overlay}></div> */}
                  <p className={s.time}>{timeHour}:00</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Container>
  );
}
