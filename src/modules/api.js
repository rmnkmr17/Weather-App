const getWeatherData = async (location) => {
  try {
    const placeholderInput = document.querySelector("#location-input");
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=f6b065bd87b3492992e183554230606&q=${location}`
    );
    if (!response.ok) {
      placeholderInput.placeholder = "Not a valid input";
    } else {
      placeholderInput.placeholder = "Search";
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(error);
  }
};

export { getWeatherData };
