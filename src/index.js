import 'material-icons/iconfont/material-icons.css';
import './style.css';

function getLocation() {
  const input = document.getElementById('locInput');
  return input.value;
}

function checkSwitch() {
  const tempSwitch = document.getElementById('tempSwitch');
  return tempSwitch.checked;
}

function toCelsius(temp) {
  return (temp - 273.15).toFixed(1);
}

function toFahrenheit(temp) {
  return (temp * 9/5 - 459.67).toFixed(1);
}

function renderWeather(data) {
  const location = data.name;
  const temp = checkSwitch() ? toCelsius(data.main.temp) + '°C' : toFahrenheit(data.main.temp) + '°F';
  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const feelsLike = checkSwitch() ? toCelsius(data.main.feels_like) + '°C' : toFahrenheit(data.main.feels_like) + '°F';
  const weather = data.weather[0].description;

  document.getElementById('location').textContent = location;
  document.getElementById('weather').textContent = weather;
  document.getElementById('temp').textContent = temp;
  document.getElementById('pressure').textContent = 'Atmospheric pressure: ' + pressure + 'hPa';
  document.getElementById('feelsLike').textContent = 'Feels like: ' + feelsLike;
  document.getElementById('humidity').textContent = 'Humidity: ' + humidity + '%';
}

async function getWeather(city) {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`, {mode: 'cors'})
    .then(resp => (resp.ok) ? resp.json() : Promise.reject('Invalid input'))
    .catch((err) => {
        document.getElementById('inputLocation').insertAdjacentHTML('afterEnd', '<p class="errorMessage">' + err + '</p>');
    })
  if (data !== undefined) {
    renderWeather(data);
    if (document.querySelector('.errorMessage') !== null) document.querySelector('.errorMessage').remove();
  }
}

getWeather('moscow');

const button = document.getElementById('locButton');
button.addEventListener('click', () => {
  let location = getLocation();
  getWeather(location);
  }
);

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    let location = getLocation();
    getWeather(location);
  }
});

document.getElementById('tempSwitch').addEventListener('change', () => {
  let location = document.getElementById('location').textContent;
  getWeather(location);
});
