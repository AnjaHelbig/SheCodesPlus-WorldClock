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
  let berlinDate = document.querySelector("#berlin-date");
  let berlinTime = document.querySelector("#berlin-time");
  let berlinDaytime = document.querySelector("#berlin-daytime");

  berlinDate.innerHTML = moment().tz("Europe/Berlin").format("MMMM Do YYYY");
  berlinTime.innerHTML = moment().tz("Europe/Berlin").format("hh:mm:ss");
  berlinDaytime.innerHTML = moment().tz("Europe/Berlin").format("A");

  let londonDate = document.querySelector("#london-date");
  let londonTime = document.querySelector("#london-time");
  let londonDaytime = document.querySelector("#london-daytime");

  londonDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
  londonTime.innerHTML = moment().tz("Europe/London").format("hh:mm:ss");
  londonDaytime.innerHTML = moment().tz("Europe/London").format("A");

  let tokyoDate = document.querySelector("#tokyo-date");
  let tokyoTime = document.querySelector("#tokyo-time");
  let tokyoDaytime = document.querySelector("#tokyo-daytime");

  tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  tokyoTime.innerHTML = moment().tz("Asia/Tokyo").format("hh:mm:ss");
  tokyoDaytime.innerHTML = moment().tz("Asia/Tokyo").format("A");
}

functionCities();
let cityInterval = null;

cityInterval = setInterval(functionCities, 1000);

let citySelection = document.querySelector("#citySelection");
citySelection.addEventListener("change", showCitySelection);
