
    async function getWeather() {
      const city = document.getElementById("cityInput").value;

      if (!city) {
        alert("Please enter a city name!");
        return;
      }

      const apiKey = "44fbd759ee88b7270f0a574b56bf538c"; // API key ha
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
          document.getElementById("weatherResult").textContent =
            `🌤️ ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
        } else {
          document.getElementById("weatherResult").textContent = "City not found!";
        }
      } catch (error) {
        console.log(error);
        document.getElementById("weatherResult").textContent = "Error fetching data!";
      }
    }
  