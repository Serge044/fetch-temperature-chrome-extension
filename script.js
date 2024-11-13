async function fetchKyivWeather() {
  const latitude = 50.4501; // Latitude for Kyiv
  const longitude = 30.5234; // Longitude for Kyiv
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const weatherData = await response.json();

    document.getElementById(
      "temp"
    ).innerText = `Temperature in Kyiv: ${weatherData.current_weather.temperature}°C`;

    return weatherData;
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}

fetchKyivWeather();
