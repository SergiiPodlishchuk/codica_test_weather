import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import cityWeatherActions from "../../redux/cityWeather/cityWeather.actions";
import cityWeatherOperations from "../../redux/cityWeather/cityWeather.operations";

// ===============
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// ============

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "20px",
  },
  media: {
    height: 140,
    backgroundColor: "rgba(100, 180, 250, 0.9)",
  },
});

export default function CityWeather({ cityData }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { name, main, weather, id, dt } = cityData;

  const { temp, feels_like, pressure, humidity } = main;

  const iconsWeather = weather.map(({ icon }) => icon);

  const deleteCity = (e) => {
    const id = e.target.parentElement.id;
    dispatch(cityWeatherActions.deleteCity(+id));
  };

  const onDetails = (e) => {
    const id = e.currentTarget.id;
    dispatch(cityWeatherActions.cityId(id));
    history.push(`/cityDetails/${name}/${id}`);
  };

  const updateData = () => {
    dispatch(cityWeatherOperations.updateCity(name));
  };

  const timeNow = new Date(dt * 1000).toLocaleTimeString();

  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={onDetails} id={id}>
          <CardMedia
            className={classes.media}
            image={`http://openweathermap.org/img/wn/${iconsWeather[0]}@2x.png`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              temperature: {Math.floor(temp - 273)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              feels_like: {Math.floor(feels_like - 273)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              pressure: {`${Math.floor((pressure * 7.464) / 10)} мм.рт.ст`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Humidity: {humidity} %
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              last update {timeNow}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={updateData}>
            Update
          </Button>
          <Button size="small" color="primary" onClick={deleteCity} id={id}>
            delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
