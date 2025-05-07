alert("Welcome to the Weather App!");

const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city");
const weatherResult = document.getElementById("weather-result");

const apiKey = "4eb9ad45d0fe50fb1c946e09e7e409dc"; 

form.addEventListener("submit", async (event) => {

  event.preventDefault(); 

  const city = cityInput.value.trim();

  if (!city) {
    weatherResult.innerHTML = `<p>Please enter the city name.</p>`;
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    weatherResult.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Humidity: ${data.main.humidity} %</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `<p>Error: ${error.message}</p>`; 
  }
});
