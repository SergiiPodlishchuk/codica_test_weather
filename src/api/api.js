import axios from "axios";

const API_KEY = "122a2fa1f27a8aa65f79180c2a64b5f2";

axios.defaults.baseURL = "http://api.openweathermap.org/";

export default async function getWeather(query) {
  try {
    const data = await axios.get(
      `data/2.5/weather?q=${query}&APPID=${API_KEY}`
    );
    return data.data;
  } catch (error) {
    throw Error(error);
  }
}
