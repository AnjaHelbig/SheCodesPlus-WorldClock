import { cityCollection } from "./cities.js";

// Function for City Selection Form

function possibleCities() {
  let possibleCitySelection = document.querySelector("#citySelection");

  let inputSelection = `
    <option value="">Select a city ...</option>
    <option value="current">My current location</option>`;

  cityCollection.forEach(function (city) {
    console.log(city);

    let showPossibleCity = city.replace("_", " ").split("/")[1];

    inputSelection =
      inputSelection +
      `
    <option value=${city}>${showPossibleCity} (${city})</option>
  `;
  });

  possibleCitySelection.innerHTML = inputSelection;
}

// Function for single city search

function refreshPage() {
  window.location.reload();
}

function updatedCity(cityInput) {
  let citySelectedTime = moment().tz(`${cityInput}`).format("hh:mm:ss");

  let citySelectedTimeAmPm = moment().tz(`${cityInput}`).format("A");

  let citySelectedDate = moment().tz(`${cityInput}`).format("MMMM Do YYYY");

  let citySelected = cityInput.replace("_", " ").split("/")[1];

  let showCity = document.querySelector(".cities");

  showCity.innerHTML = `
    <div class="row">
      <div class="col-sm-6">
        <div class="city">
          ${citySelected}
        </div>
        <div class="date">
          ${citySelectedDate}
        </div>
      </div>
      <div class="col-sm-6">
        <div class="time">
          <span>${citySelectedTime}</span>
          <span>${citySelectedTimeAmPm}</span>
        </div>
      </div>
     </div> 
    `;

  let goBack = document.querySelector("#go-back");
  goBack.innerHTML = "👉 go back to home";
  goBack.addEventListener = ("click", refreshPage);
}

function showCitySelection(event) {
  let cityInput = event.target.value;

  if (cityInput === "current") {
    cityInput = moment.tz.guess();
  }

  clearInterval(cityInterval);
  updatedCity(cityInput);
  cityInterval = setInterval(updatedCity, 1000, cityInput);
}

// Function for showing cities in base screen

function functionCities() {
  let homeCities = [
    "Europe/Berlin",
    "Europe/London",
    "America/New_York",
    "Asia/Tokyo",
    "Asia/Dubai",
    "Australia/Sydney",
  ];

  let citiesHomescreen = document.querySelector("#cities");

  let showCitiesHomescreen = `<div class="row">`;

  homeCities.forEach(function (city) {
    let cityTime = moment().tz(`${city}`).format("hh:mm:ss");

    let cityTimeAmPm = moment().tz(`${city}`).format("A");

    let cityDate = moment().tz(`${city}`).format("MMMM Do YYYY");

    let cityHomescreen = city.replace("_", " ").split("/")[1];

    showCitiesHomescreen =
      showCitiesHomescreen +
      `
    <div class="row">
      <div class="col-sm-6">
        <div class="city">
          ${cityHomescreen}
        </div>
        <div class="date">
          ${cityDate}
        </div>
      </div>
      <div class="col-sm-6">
        <div class="time">
          <span>${cityTime}</span>
          <span>${cityTimeAmPm}</span>
        </div>
      </div>
    </div>
  `;
  });

  showCitiesHomescreen = showCitiesHomescreen + `</div>`;

  citiesHomescreen.innerHTML = showCitiesHomescreen;
}

// JS for calling functions

possibleCities();

functionCities();
let cityInterval = null;

cityInterval = setInterval(functionCities, 1000);

let citySelection = document.querySelector("#citySelection");
citySelection.addEventListener("change", showCitySelection);
