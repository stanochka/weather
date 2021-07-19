import 'material-icons/iconfont/material-icons.css';
import './style.css';

function getLocation() {
  const input = document.getElementById('locInput');
  return input.value;
}

async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`, {
  mode: 'cors'
}).catch((err) => { document.getElementById('inputLocation').insertAdjacentHTML('beforeend', err); });
  const data = await response.json();
  console.log(data);
  const location = data.name;
  const temp = data.main.temp;
  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const feelsLike = data.main.feels_like;
  const weather = data.weather[0].description;

  document.getElementById('location').textContent = location;
  document.getElementById('weather').textContent = weather;
  document.getElementById('temp').textContent = temp + '°F';
  document.getElementById('pressure').textContent = 'Atmospheric pressure: ' + pressure + 'hPa';
  document.getElementById('feelsLike').textContent = 'Feels like: ' + feelsLike + '°F';
  document.getElementById('humidity').textContent = 'Humidity: ' + humidity + '%';
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

//TODO add function change Fahrenheit to Celsius on switch
//TODO safe storage of API keys
