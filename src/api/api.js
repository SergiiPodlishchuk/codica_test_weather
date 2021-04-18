import axios from "axios";

const API_KEY = "122a2fa1f27a8aa65f79180c2a64b5f2";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

async function getWeather(query) {
  try {
    const data = await axios.get(`/weather?q=${query}&APPID=${API_KEY}`);
    return data.data;
  } catch (error) {
    throw Error(error);
  }
}

async function getHourlyWeather(lat, lon, exclude) {
  try {
    const data = await axios.get(
      `/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}`
    );
    return data.data;
  } catch (error) {
    throw Error(error);
  }
}

// eslint-disable-next-line
export default {
  getWeather,
  getHourlyWeather,
};
