// Static values for temperature and wind speed (match displayed values)
const temperature = 10; // °C
const windSpeed = 5;    // km/h

// Function to calculate wind chill (Celsius formula) — single-line return as required
function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Display wind chill on page load
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('windChill');

  // Only call calculateWindChill when conditions are met
  if (temperature <= 10 && windSpeed > 4.8) {
    const raw = calculateWindChill(temperature, windSpeed); // call only here
    // Format: if decimal part is zero show integer, otherwise show one decimal place
    const formatted = (Math.abs(raw % 1) < 1e-9) ? String(Math.round(raw)) : raw.toFixed(1);
    el.innerHTML = `<strong>Wind Chill:</strong> ${formatted}°C`;
  } else {
    el.innerHTML = `<strong>Wind Chill:</strong> N/A`;
  }
});


// select the DOm element for output
const currentyear =document.querySelector("#currentyear");
// use the year object
const year = new Date();
currentyear.innerHTML = `${year.getFullYear()} 📸 `;
document.getElementById("lastModifiedDate").innerHTML = `${document.lastModified}`;