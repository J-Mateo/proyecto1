const apiKey = "50bbd61ec7954bb491572356262104";
const baseUrl = "https://api.weatherapi.com/v1";

export function getWeather() {
  const weatherWidget = document.getElementById("weather-widget");

  if (!weatherWidget) return;

  mostrarCargando(weatherWidget);

  if (!navigator.geolocation) {
    mostrarError(weatherWidget, "Clima no disponible");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      const query = `${latitude},${longitude}`;

      const url = `${baseUrl}/current.json?key=${apiKey}&q=${query}&aqi=no&lang=es`;

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Error de API: ${response.status}`);
          }

          return response.json();
        })
        .then(data => {
          if (data.error) {
            throw new Error(data.error.message);
          }

          const city = data.location.name;
          const temp = Math.round(data.current.temp_c);
          const condition = data.current.condition.text;
          const icon = data.current.condition.icon;

          weatherWidget.innerHTML = `
            <div class="weather-content">
              <div class="weather-main">
                <img src="https:${icon}" alt="${condition}" class="weather-icon">
                <span class="weather-temp">${temp}°C</span>
              </div>
              <p class="weather-city">${city}</p>
            </div>
          `;
        })
        .catch(error => {
          console.error("Error cargando el clima:", error);
          mostrarError(weatherWidget, "Clima no disponible");
        });
    },
    error => {
      console.error("Permiso de ubicación denegado:", error);
      mostrarError(weatherWidget, "Ubicación denegada");
    }
  );
}

function mostrarCargando(weatherWidget) {
  weatherWidget.innerHTML = `
    <div class="weather-content">
      <div class="weather-main">
        <span class="weather-temp">--°C</span>
      </div>
      <p class="weather-city">Cargando clima…</p>
    </div>
  `;
}

function mostrarError(weatherWidget, message) {
  weatherWidget.innerHTML = `
    <div class="weather-content">
      <div class="weather-main">
        <span class="weather-temp">--°C</span>
      </div>
      <p class="weather-city">${message}</p>
    </div>
  `;
}