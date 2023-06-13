import { getWeatherData } from "./api";

const renderWeather = (data) => {
  const weatherContent = document.querySelector(".weather-content");
  weatherContent.innerHTML = "";
  const locationName = data.location.name;
  const countryName = data.location.country;
  const humidity = data.current.humidity;
  const currentCondition = data.current.condition.text;
  const tempInCelsius = data.current.feelslike_c;
  const wind = data.current.wind_kph;
  const tempInFahreneit = data.current.feelslike_f;

  let tempUnit = "°C";
  let currentTemp = tempInCelsius;

  weatherContent.innerHTML = `
  <h2 id="">Weather in ${locationName}, ${countryName}</h2>
  <h1 id="temp">${currentTemp}${tempUnit}</h1>
  <div class="middle-content">
  <img src="${data.current.condition.icon}" alt="" />
    <h2>${currentCondition}</h2>
  </div>
  <div class="bottom-content">
    <h3>Humidity: ${humidity}</h3>
    <h3>Wind: ${wind} km/h</h3>
  </div>
  <button id="toggle-unit">Switch to °F</button>

  `;

  const toggleUnitButton = document.querySelector("#toggle-unit");
  const tempEl = document.querySelector("#temp");
  toggleUnitButton.addEventListener("click", () => {
    if (tempUnit === "°C") {
      currentTemp = tempInFahreneit;
      tempUnit = "°F";
      toggleUnitButton.textContent = `Switch to °C`;
    } else {
      currentTemp = tempInCelsius;
      tempUnit = "°C";
      toggleUnitButton.textContent = `Switch to °F`;
    }
    // Update the temperature display
    tempEl.textContent = `${currentTemp}${tempUnit}`;
  });
  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" +
    currentCondition +
    " " +
    locationName +
    "')";
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
