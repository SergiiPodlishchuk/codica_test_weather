import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/SergiiPodlishchuk/codica_test_weather"
        target="_blank"
      >
        My repository
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.background.paper,
    backgroundImage:
      "linear-gradient( 180deg, rgba(126, 142, 235, 0.9) 0%, rgba(24, 56, 201, 0.9) 100%)",
    padding: theme.spacing(6),
  },
}));

export default function Footer(params) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Made by home
      </Typography>
      <Copyright />
    </footer>
  );
}
