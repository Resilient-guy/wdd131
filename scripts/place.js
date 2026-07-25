// Static values for temperature and wind speed (match displayed values)
const temperature = 10; // °C
const windSpeed = 5;    // km/h

// Function to calculate wind chill (Celsius formula) — single-line return
function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.wind-chill');

  const content = (temperature <= 10 && windSpeed > 4.8)
    ? (function() {
        const raw = calculateWindChill(temperature, windSpeed);
        return (Math.abs(raw % 1) < 1e-9) ? `${Math.round(raw)}°C` : `${raw.toFixed(1)}°C`;
      })()
    : 'N/A';

  elements.forEach(el => {
    el.innerHTML = `<strong>Wind Chill:</strong> ${content}`;
  });

  // other page scripts
  const currentyear = document.querySelector("#currentyear");
  const year = new Date();
  currentyear.innerHTML = `${year.getFullYear()} 📸 `;
  document.getElementById("lastModifiedDate").innerHTML = `${document.lastModified}`;
});
