import React from "react";

import { useDispatch, useSelector } from "react-redux";

import cityWeatherOperations from "../../redux/cityWeather/cityWeather.operations";

// ================
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import Lobster from "../../fonts/lobster-v23-latin/lobster-v23-latin-regular.woff2";
import cityWeatherActions from "../../redux/cityWeather/cityWeather.actions";
// =======================
// import s from "./Header.module.css";

const lobster = {
  fontFamily: "Lobster",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Lobster'),    
    url(${Lobster}) format('woff2')
  `,
};

const useStyles = makeStyles((theme) => ({
  "@font-face": [lobster],
  root: {
    flexGrow: 1,
    // paddingBottom: "20px",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: "center",
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },

    fontFamily: "Lobster",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const timeNow = new Date().toLocaleDateString();

  const listCitiesWeather = useSelector((state) => state.cities.cities);
  const loading = useSelector((state) => state.cities.loading);
  const error = useSelector((state) => state.cities.error);

  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const addCity = (e) => {
    e.preventDefault();
    dispatch(cityWeatherOperations.addCity(value, listCitiesWeather));
    setValue("");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            // aria-label="open drawer"
          >
            {timeNow}
          </IconButton>
          <Typography className={classes.title} variant="h4" noWrap>
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              "Weather in city"
            )}
          </Typography>

          {error.error ? (
            <Alert
              severity="error"
              onClose={() => {
                dispatch(cityWeatherActions.errorOff({ error: false }));
              }}
            >
              {error.message}
            </Alert>
          ) : (
            <form className={classes.search} onSubmit={addCity}>
              <div className={classes.searchIcon} type="submit">
                <SearchIcon />
              </div>
              <InputBase
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
