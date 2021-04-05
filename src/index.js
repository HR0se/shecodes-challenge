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

  let currentDateInMonth = currentDate.getDate();

  let currentMonth = currentDate.getMonth();

  let currentYear = currentDate.getFullYear();

  let dateTime = document.querySelector("#current-date-time");

  dateTime.innerHTML = `${currentDay}, ${currentDateInMonth}/${
    currentMonth + 1
  }/${currentYear}, ${currentHour}:${currentMinute}`;
}

function handleSubmit(event) {
  event.preventDefault();

  let cityInputText = document.querySelector("#search-bar");

  let cityName = `${cityInputText.value}`;

  searchWeatherCityName(cityName);
}

function searchWeatherCityName(cityName) {
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
  celsiusTemperature = response.data.main.temp;

  let currentTemperature = Math.round(celsiusTemperature);

  let currentCity = response.data.name;

  let currentCountryCode = response.data.sys.country;

  let isoCountryCodes = {
    AF: "Afghanistan",
    AX: "Aland Islands",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua And Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia And Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "British Indian Ocean Territory",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos (Keeling) Islands",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CD: "Congo, Democratic Republic",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: "Cote D'Ivoire",
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Falkland Islands (Malvinas)",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island & Mcdonald Islands",
    VA: "Holy See (Vatican City State)",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran, Islamic Republic Of",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle Of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KR: "Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Lao People's Democratic Republic",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libyan Arab Jamahiriya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia, Federated States Of",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    AN: "Netherlands Antilles",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestinian Territory, Occupied",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Romania",
    RU: "Russian Federation",
    RW: "Rwanda",
    BL: "Saint Barthelemy",
    SH: "Saint Helena",
    KN: "Saint Kitts And Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin",
    PM: "Saint Pierre And Miquelon",
    VC: "Saint Vincent And Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome And Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia And Sandwich Isl.",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard And Jan Mayen",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad And Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks And Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States",
    UM: "United States Outlying Islands",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Viet Nam",
    VG: "Virgin Islands, British",
    VI: "Virgin Islands, U.S.",
    WF: "Wallis And Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
  };

  let currentCountry = isoCountryCodes[currentCountryCode];

  let currentWeatherIconCode = response.data.weather[0].icon;

  let currentWeatherDescription = response.data.weather[0].description;

  let currentWindSpeed = Math.round(response.data.wind.speed);

  let currentHumidity = response.data.main.humidity;

  let currentLocationElement = document.querySelector("#current-location");

  let tempDisplay = document.querySelector("#current-temperature-value");

  let weatherIcon = document.querySelector("#current-weather-icon");

  let weatherDescription = document.querySelector("#current-description");

  let windSpeedDisplay = document.querySelector("#wind-speed");

  let humidityDisplay = document.querySelector("#humidity");

  currentLocationElement.innerHTML = `${currentCity}, ${currentCountry}`;

  tempDisplay.innerHTML = `${currentTemperature}`;

  weatherIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${currentWeatherIconCode}@2x.png`
  );

  weatherIcon.setAttribute("alt", `${currentWeatherDescription}`);

  weatherDescription.innerHTML = `${currentWeatherDescription}`;

  windSpeedDisplay.innerHTML = `${currentWindSpeed}`;

  humidityDisplay.innerHTML = `${currentHumidity}`;

  getForecast(response.data.coord);
}

function getForecast(coords) {
  let apiKey = "45526f214a1657311e19c90163a6ab34";

  let units = "metric";

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayForecast);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();

  let currentTemperature = document.querySelector("#current-temperature-value");

  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;

  celsiusLink.classList.add("active");

  fahrenheitLink.classList.remove("active");

  currentTemperature.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();

  let currentTemperature = document.querySelector("#current-temperature-value");

  celsiusLink.classList.remove("active");

  fahrenheitLink.classList.add("active");

  currentTemperature.innerHTML = Math.round(celsiusTemperature);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);

  let day = date.getDay();

  let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (dailyForecast, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
    <div class="col-lg">
      <div class="card forecast-card">
        <div class="card-body">
          <h3 class="card-title"><span class="forecast-max-temp">${Math.round(
            dailyForecast.temp.max
          )}<small>°C</small></span>|<span class="forecast-min-temp">${Math.round(
          dailyForecast.temp.min
        )}<small>°C</small></span></h2>
          <img src="http://openweathermap.org/img/wn/${
            dailyForecast.weather[0].icon
          }@2x.png" alt="${dailyForecast.weather.description}" />
          <h2>${formatDay(dailyForecast.dt)}</h2>

        </div>
      </div>
    </div>
    `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;

  forecastElement.innerHTML = forecastHTML;
}

let citySearchForm = document.querySelector("#search-engine");

let currentLocationButton = document.querySelector("#location-search-button");

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");

let celsiusLink = document.querySelector("#celsius-link");

fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

celsiusLink.addEventListener("click", displayCelsiusTemperature);

citySearchForm.addEventListener("submit", handleSubmit);

currentLocationButton.addEventListener("click", searchWeatherCoords);

displayCurrentTime();

searchWeatherCityName("London");

displayForecast();
