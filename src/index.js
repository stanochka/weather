import 'material-icons/iconfont/material-icons.css';
import './style.css';

const API_KEY = '78175bc0ce51ddf5ba481690a47391f3'

function getLocation() {
  const input = document.getElementById('locInput');
  return input.value;
}

function render(property) {
  const toRender = document.getElementById(`${property}`);
}

async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, {
  mode: 'cors'
}).catch((err) => { console.log(err); });
  const data = await response.json();
  const location = data.name;
  const temp = data.main.temp;
  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const feelsLike = data.main.feels_like;
  const weather = data.weather[0].main;
  const wind = data.wind;

  console.log(location);
  console.log(tempF);
  console.log(pressure);
  console.log(feelsLike);
  console.log(weather);
  console.log(wind);
  console.log(humidity);
}

getWeather('moscow');

const button = document.getElementById('locButton');
button.addEventListener('click', () => {
  let location = getLocation();
  console.log(location);
  getWeather(location);
  }
);
