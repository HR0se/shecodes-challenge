function displayCurrentTime() {
  let currentDate = new Date();

  let currentHour = currentDate.getHours();

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinute = currentDate.getMinutes();

  if (currentMinute < 10) {
    currentMinute = `0${currentMinute}`;
  }

  //Important to add the if statement for currentHour and currentMinute as we want the time to display 01:01 not 1:1

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[currentDate.getDay()];

  let dateTime = document.querySelector("#current-date-time");

  dateTime.innerHTML = `${currentDay}, ${currentHour}:${currentMinute}`;
}

function searchWeatherCityName(event) {
  event.preventDefault();

  let cityInputText = document.querySelector("#search-bar");

  let cityName = `${cityInputText.value}`;

  let apiKey = "45526f214a1657311e19c90163a6ab34";

  let units = "metric";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayTemperature);
}

function searchWeatherCoords(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(getCoords);
}

function getCoords(position) {
  let lat = position.coords.latitude;

  let lon = position.coords.longitude;

  let apiKey = "45526f214a1657311e19c90163a6ab34";

  let units = "metric";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let currentTemperature = Math.round(response.data.main.temp);

  let currentCity = response.data.name;

  let currentCountryCode = response.data.sys.country;

  let isoCountryCodes = {
    GB: "UK",
    JP: "Japan",
  };

  let currentCountry = isoCountryCodes[currentCountryCode];

  console.log(currentCity);

  let tempDisplay = document.querySelector("#current-temperature");

  let heading = document.querySelector("h1");

  heading.innerHTML = `${currentCity}, ${currentCountry}`;

  tempDisplay.innerHTML = `${currentTemperature}°C`;
}

displayCurrentTime();

let citySearchForm = document.querySelector("#search-engine");

citySearchForm.addEventListener("submit", searchWeatherCityName);

let currentLocationButton = document.querySelector("#location-search-button");

currentLocationButton.addEventListener("click", searchWeatherCoords);
