
const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

const townName = "Rigby"
const myKey = "595ac2cc14ab1d9e32e1f8e790eaf129"

const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${townName}&cnt=7&units=imperial&APPID=${myKey}`;

async function getWeatherData() {
    let headers = new Headers();
              
        const data = await fetch(URL, {
        method: 'GET',
        headers: headers
            });
        return await data.json();
        } 
        
getWeatherData().then(weatherData => {
    let city = weatherData.city.name;
    let dailyForecast = weatherData.list;
            
    renderData(city, dailyForecast);
        });

renderData = (location, forecast) => {
    const currentWeather = forecast[0].weather[0];
    const widgetHeader =
        `<h1>${location}</h1><small>${currentWeather.description}</small>`;
      
    CURRENT_TEMP.innerHTML =
        `<i class="wi ${applyIcon(currentWeather.icon)}"></i>
        ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;
      
    CURRENT_LOCATION.innerHTML = widgetHeader;
      
     // render each daily forecast
    forecast.forEach(day => {
        let date = new Date(day.dt * 1000);
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let name = days[date.getDay()];
        let dayBlock = document.createElement("div");
        dayBlock.className = 'forecast__item';
        dayBlock.innerHTML =
            `<div class="forecast-item__heading">${name}</div>
            <div class="forecast-item__info">
            <i class="wi ${applyIcon(day.weather[0].icon)}"></i>
            <span class="degrees">${Math.round(day.temp.day)}
            <i class="wi wi-degrees"></i></span></div>`;
        FORECAST.appendChild(dayBlock);
    });
    }
