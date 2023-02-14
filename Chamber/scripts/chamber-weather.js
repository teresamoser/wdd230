
//select HTML elements in the document for 5 day 3 hour forecast
const myTown = document.querySelector('#town')
const myGraphic = document.querySelector('#graphic')
const myDescription = document.querySelector('#description')
const myTemperature = document.querySelector('#temperature')

const townName = "Rigby"
const myKey = "595ac2cc14ab1d9e32e1f8e790eaf129"
// const myLat = "43.6751937"
// const myLon = "-111.918002"

const myURL = `//api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${myKey}&units=imperial`;

fetch(myURL)
    .then((response) => response.json())
    .then((data) => displayData(data));

    function displayData(data) {
        // console.log(data)
        myTown.innerHTML = data.name
        myGraphic.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        myGraphic.alt = data.weather[0].main
        myDescription.innerHTML = data.weather[0].description
        myTemperature.innerHTML = `${data.main.temp}&deg;F`
    }


// select HTML elements in the document
// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// const townName = "Rigby"
// const myKey = "595ac2cc14ab1d9e32e1f8e790eaf129"
// const myLat = "43.6751937"
// const myLon = "-111.918002"

// const url = `https://api.openweathermap.org/data/2.5/api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}unit=imperial`;

// async function apiFetch() {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         // console.log(data); // testing only
//         displayData(data); // uncomment when ready
//       } else {
//           throw Error(await response.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
//   }
  
//   apiFetch();

//   function displayResults(data) {
//     currentTemp.innerHTML = `${data.main.temp}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     let desc = data.weather[0].description;
//     // weatherIcon.setAttribute('___', _____);
//     // weatherIcon.setAttribute('___', _____);
//     captionDesc.textContent = `${desc}`;
//   }