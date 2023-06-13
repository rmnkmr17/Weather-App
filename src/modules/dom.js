import { getWeatherData } from "./api";

const renderWeather = (data) => {
  const weatherContent = document.querySelector(".weather-content");
  const locationName = data.location.name;
  const countryName = data.location.country;
  const humidity = data.current.humidity;
  const currentCondition = data.current.condition.text;
  const tempInCelsius = data.current.feelslike_c;
  const wind = data.current.wind_kph;
  const tempInFahreneit = data.current.feelslike_f;
  console.log(data);
  weatherContent.innerHTML = `
  <h3 id="">Weather in ${locationName}, ${countryName}</h3>
  <h1 id="">${tempInCelsius}°C</h1>
  <div class="middle-content">
  <img src="${data.current.condition.icon}" alt="" />
    <h2>${currentCondition}</h2>
  </div>
  <div class="bottom-content">
    <h3>Humidity: ${humidity}</h3>
    <h3>Wind: ${wind} Km/h</h3>
  </div>
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
