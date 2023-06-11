import { getWeatherData } from "./api";

const renderWeather = (data) => {
  const weatherContent = document.querySelector(".weather-content");
  const locationName = data.location.name;
  const countryName = data.location.country;
  const localDate = data.location.localtime.split(" ")[0];
  const localTime = data.location.localtime.split(" ")[1];
  const currentCondition = data.current.condition.text;
  const tempInCelsius = data.current.feelslike_c;
  const tempInFahreneit = data.current.feelslike_f;

  weatherContent.innerHTML = `
  <p id="locationName">City: ${locationName}</p>
  <p id="countryName">Country: ${countryName}</p>
  <p id="localDate">Date: ${localDate}</p>
  <p id="localTime">Time: ${localTime}</p>
  <p id="currentCondition">Current Condition: ${currentCondition}</p>
  <p id="tempInCelsius">Temperature in C: ${tempInCelsius}</p>
  <p id="tempInFahreneit">Temperature in F: ${tempInFahreneit}</p>
  `;
};

const loadWeather = () => {
  const form = document.querySelector("#form");
  const inputLocation = document.querySelector("#location-input");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeatherData(inputLocation.value).then((data) => renderWeather(data));
    form.reset();
  });
};

export { renderWeather, loadWeather };
