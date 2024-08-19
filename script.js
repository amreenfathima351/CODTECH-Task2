// script.js
const api_key = "be492ad43b079c1d467773304b5ee6fd";

async function search() {
  const cityInput = document.getElementById("cityInput").value;
  if (cityInput === "") {
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=Metric&appid=${api_key}`;
  const response = await fetch(url);
  const data = await response.json();

  document.getElementById(
    "humidityPercent"
  ).innerText = `${data.main.humidity} %`;
  document.getElementById("windRate").innerText = `${data.wind.speed} km/h`;
  document.querySelector(".weather-temp").innerText = `${data.main.temp}°c`;
  document.querySelector(".weather-location").innerText = data.name;

  const weatherIcon = document.getElementById("weatherIcon");
  switch (data.weather[0].icon) {
    case "01d":
    case "01n":
      weatherIcon.src = "Assets/clear.png";
      break;
    case "02d":
    case "02n":
      weatherIcon.src = "Assets/cloud.png";
      break;
    case "03d":
    case "03n":
      weatherIcon.src = "Assets/drizzle.png";
      break;
    case "04d":
    case "04n":
      weatherIcon.src = "Assets/drizzle.png";
      break;
    case "09d":
    case "09n":
      weatherIcon.src = "Assets/rain.png";
      break;
    case "10d":
    case "10n":
      weatherIcon.src = "Assets/rain.png";
      break;
    case "13d":
    case "13n":
      weatherIcon.src = "Assets/snow.png";
      break;
    default:
      weatherIcon.src = "Assets/clear.png";
  }
}
