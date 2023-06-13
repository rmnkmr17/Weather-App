import { getWeatherData } from "./modules/api";
import { renderWeather, loadWeather } from "./modules/DOM";
import "./assets/style.css";

getWeatherData("Italy").then((data) => renderWeather(data));

loadWeather();
