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
setInterval(functionCities, 1000);
