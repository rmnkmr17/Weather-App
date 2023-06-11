const getWeatherData = async (location) => {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=f6b065bd87b3492992e183554230606&q=${location}`
    );
    let weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(error);
  }
};

export { getWeatherData };
