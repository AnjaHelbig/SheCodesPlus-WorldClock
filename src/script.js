function updatedCity(cityInput) {
  let citySelectedTime = moment().tz(`${cityInput}`).format("hh:mm:ss");

  let citySelectedTimeAmPm = moment().tz(`${cityInput}`).format("A");

  let citySelectedDate = moment().tz(`${cityInput}`).format("MMMM Do YYYY");

  let citySelected = cityInput.replace("_", " ").split("/")[1];

  let showCity = document.querySelector(".cities");

  showCity.innerHTML = `
    <div class="row">
      <div class="col-6">
        <div class="city">
          ${citySelected}
        </div>
        <div class="date">
          ${citySelectedDate}
        </div>
      </div>
      <div class="col-6">
        <div class="time">
          <span>${citySelectedTime}</span>
          <span>${citySelectedTimeAmPm}</span>
        </div>
      </div>
    </div>
  `;
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

function functionCities() {
  let homeCities = [
    "Europe/Berlin",
    "Europe/London",
    "Asia/Tokyo",
    "America/New_York",
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
      <div class="col-6">
        <div class="city">
          ${cityHomescreen}
        </div>
        <div class="date">
          ${cityDate}
        </div>
      </div>
      <div class="col-6">
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

functionCities();
let cityInterval = null;

cityInterval = setInterval(functionCities, 1000);

let citySelection = document.querySelector("#citySelection");
citySelection.addEventListener("change", showCitySelection);
